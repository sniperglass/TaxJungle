import { MapStyle } from "./styles"
import { Theme } from "../../../styles/index"
import { cantons, colors } from "./constants"
import * as d3 from "d3"
import * as topojson from "topojson-client"
import { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { searchMapAction, fetchTaxes } from "../../../store/actions/mapActions"


const Map = () => {
    // TODO: Refactor map into own file/class (seperate from react part) and make functions less coupled
    const taxData = useSelector(state => state.mapReducer.taxes)
    const searchedMunicipality = useSelector(state => state.mapReducer.searchedMunicipality)
    const dispatch = useDispatch()
    const mapRef = useRef(null)
    const firstRender = useRef(false)

    useEffect(() => {
        // Dispatch taxes fetch, setup svg, draw map and axis (only on mounting)
        if (!firstRender.current) {
            setupSVG()
            dispatch(fetchTaxes()).then(result => { if (result) {drawAxis()} })
            drawMap()
            firstRender.current = true
            return
        } 
        // Update map and axis whenever taxData changes (execpt on mounting)
        updateMap(taxData)
        updateAxis(taxData)
    }, [taxData])

    useEffect(() => {
        // Update search selection
        updateMunicipalities(taxData, searchedMunicipality)
        resetSelection()
        if (searchedMunicipality) {
            selectMunicipality()
        }
    }, [searchedMunicipality])

    // SVG dimensions (must be same as in MapStyle div)
    let mapWidth = window.innerWidth, mapHeight = window.innerHeight

    // Axis dimensions
    const axisWidth = 350, axisHeight = 75
    const axisInnerWidth = 300, axisInnerHeight = 15
    const axisPaddingLeft = -25, axisPaddingBottom = -20
    const axisMarginLeftMultiplier = 0.11
    const axisMarginBottomMultiplier = 0.15
    let axisMarginLeft = mapWidth * axisMarginLeftMultiplier //(mapHeight * mapWidth) > (600 * 600) ? mapWidth * axisMarginLeftMultiplier : -10000
    let axisMarginBottom = mapHeight * axisMarginBottomMultiplier

    // Map projection, scale factor and path
    let projection, scaleFactor = 7, path

    // Multiplier applied to tax rates for better color distribution
    const colorMultiplier = 10000

    const setupSVG = () => {
        // Remove existing elements
        d3.select(mapRef.current).selectAll("svg").remove()

        // Add svg container to MapStyle div
        const svg = d3.select(mapRef.current).append("svg")
            .attr("width", mapWidth)
            .attr("height", mapHeight)
          
        // Add rect for background (with reset click handler)
        svg.append("rect")
            .attr("width", mapWidth)
            .attr("height", mapHeight)
            .style("fill", "none")
            .style("pointer-events", "visible")
            .on("click", function(e) {
                e.preventDefault()
                dispatch(searchMapAction(null))
                colorizeCantons(taxData)
            })

        // Add groups for map and axis
        svg.append("g").attr("class", "municipalities")
        svg.append("g").attr("class", "cantons")
        svg.append("defs").attr("class", "axis-defs")
        svg.append("g").attr("class", "axis")

        // Add div for hover tooltip
        d3.select(mapRef.current).append("div")
            .attr("id", "tooltip")
            .attr("class", "hidden")

        // Define zoom and pan behaviour
        const zoom = d3.zoom()
            .scaleExtent([1, 5])
            .on("zoom", function(e) {
                d3.select(".municipalities").selectAll("path")
                    .attr("transform", e.transform)
                d3.select(".cantons").selectAll("path")
                    .attr("transform", e.transform)
            })
        svg.call(zoom)

        // Make it responsive
        const resize = () => {
            if (!mapRef.current) {return}
            const map = d3.select(mapRef.current)
            mapWidth = parseInt(map.style("width"))
            mapHeight = parseInt(map.style("height"))
            axisMarginLeft = mapWidth * axisMarginLeftMultiplier //(mapHeight * mapWidth) > (550 * 550) ? mapWidth * axisMarginLeftMultiplier : -10000

            // Upate projection
            projection
                .scale((mapWidth + mapHeight / 2) * scaleFactor)
                .translate([mapWidth / 2, mapHeight / 2])

            // Upate map
            d3.select("svg").attr("width", mapWidth).attr("height", mapHeight)

            // // Upate axis
            // d3.select(".axis").attr("transform", `translate(${axisMarginLeft}, ${mapHeight - axisMarginBottom})`) 

            d3.selectAll("path").attr('d', path);
        }

        d3.select(window).on('resize', resize);
    }

    const drawMap = () => {
        d3.json("/swiss-topo.json").then(function(topo) {

            // Set projection and path
            projection = d3.geoMercator().scale((mapWidth + mapHeight / 2) * scaleFactor).translate([mapWidth / 2, mapHeight / 2]).center(d3.geoCentroid(topojson.feature(topo, topo.objects.cantons)))
            path = d3.geoPath().projection(projection)
            
            // Draw municipalities
            d3.select(".municipalities").selectAll("path")
                .data(topojson.feature(topo, topo.objects.municipalities).features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("class", function(d) {
                    return `municipality-boundaries m${d.id}`
                })

            // Draw cantons    
            d3.select(".cantons").selectAll("path")
                .data(topojson.feature(topo, topo.objects.cantons).features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("class", function(d) {
                    return `canton-boundaries c${d.id}`
                })
        })
    }

    const updateMap = (data) => {
        updateMunicipalities(data)
        colorizeMunicipalites(data)
        updateCantons(data)
        colorizeCantons(data)
    }

    const updateMunicipalities = (data, searched) => {
        if (!data) {return}

        d3.selectAll(".municipalities path")
            .on("mouseover", function(e, d) {
                const mun = data.filter(m => m.gemeinde_id === d.id)[0]
                if (!mun) { return }
                d3.select(this).classed("active", true)
                // Display tooltip
                const rate = (mun.satz * 100).toFixed(2)
                d3.select("#tooltip").classed("hidden", false)
                    .attr("style", "left:" + (e.pageX - 80) + "px; top:" + (e.pageY + 50) + "px")
                    .html(`${mun.gemeinde} ${rate}%`)
            })
            .on("mouseout", function(e, d) {
                if (!searched || (searched.gemeinde_id !== d.id)) {
                    d3.select(this).classed("active",false)
                }
                d3.select("#tooltip").classed("hidden", true)
            })
            .on("click", function(e, d) {
                e.preventDefault()
                const mun = data.filter(m => m.gemeinde_id === d.id)[0]
                if (!mun) { return }
                const cantonMunsSorted = data.filter(m => m.kanton_id === mun.kanton_id).sort((m1, m2) => m1.satz - m2.satz)
                const cantonLowestMun = cantonMunsSorted[0]
                const cantonHighestMun = cantonMunsSorted[cantonMunsSorted.length - 1]
                d3.select(this).classed("active", true)
                // Display detailed tooltip
                const yOffset = e.pageY < mapHeight / 2 ? 50 : -375
                d3.select("#tooltip").classed("hidden", false)
                    .attr("style", "left:" + (e.pageX - 120) + "px; top:" + (e.pageY + yOffset) + "px")
                    .html(`
                        <p>${mun.gemeinde}</p>
                        <div class="main-row">
                            <p>Municipal tax rate:</p>
                            <p>${(mun.satz * 100).toFixed(2)}%</p>
                        </div>
                        <div class="main-row">
                            <p>Municipal tax:</p>
                            <p>CHF ${new Intl.NumberFormat().format(mun.gemeindesteuer.toFixed(2))}</p>
                        </div>
                        <div class="main-row">
                            <p>Federal tax:</p>
                            <p>CHF ${new Intl.NumberFormat().format(mun.kantonsteuer.toFixed(2))}</p>
                        </div>
                        <div class="main-row">
                            <p>Church tax:</p>
                            <p>CHF ${new Intl.NumberFormat().format(mun.kirchensteuer.toFixed(2))}</p>
                        </div>
                        <footer>
                            <p>Cantonal comparison (${mun.kanton_id})</p>
                            <div class="footer-subcontainer">
                                <div class="footer-section">
                                    <p>Lowest:<p/>
                                    <div class="footer-section-sub">
                                        <p>${cantonLowestMun.gemeinde}</p>
                                        <p>${(cantonLowestMun.satz * 100).toFixed(2)}%</p>
                                    </div>
                                </div>
                                <div class="footer-section">
                                    <p>Highest:<p/>
                                    <div class="footer-section-sub">
                                        <p>${cantonHighestMun.gemeinde}</p>
                                        <p>${(cantonHighestMun.satz * 100).toFixed(2)}%</p>
                                    </div>
                                </div>
                            <div>
                        </footer>
                    `)
            })
    }

    const colorizeMunicipalites = (data) => {
        if (!data || d3.selectAll(`.municipality-boundaries`).empty()) {return}

        // Compare tax rate of municipalty to all rates in given canton
        const rates = data.map(m => parseInt(m.satz * colorMultiplier))
        const lowest = rates.sort((a, b) => a - b)[0]
        const heighest = rates.sort((a, b) => a - b)[rates.length - 1]
        const range = heighest - lowest
        const interval = Math.round(range / (Object.keys(colors).length))

        // Set fill color for municipalities depending on its tax rate
        for (let municipality of data) {
            const rate = parseInt(municipality.satz * colorMultiplier)

            d3.select(`.municipality-boundaries.m${municipality.gemeinde_id}`)
                .attr("style", function(d) {
                    switch (true) {
                        case (rate > heighest - interval):
                            return `fill: ${colors.ten}`
                        case (rate > heighest - interval * 2):
                            return `fill: ${colors.nine}`
                        case (rate > heighest - interval * 3):
                            return `fill: ${colors.eight}`
                        case (rate > heighest - interval * 4):
                            return `fill: ${colors.seven}`
                        case (rate > heighest - interval * 5):
                            return `fill: ${colors.six}`
                        case (rate > heighest - interval * 6):
                            return `fill: ${colors.five}`
                        case (rate > heighest - interval * 7):
                            return `fill: ${colors.four}`
                        case (rate > heighest - interval * 8):
                            return `fill: ${colors.three}`
                        case (rate > heighest - interval * 9):
                            return `fill: ${colors.two}`
                        default:
                            return `fill: ${colors.one}`
                    }
                })
        }
    }

    const updateCantons = (data) => {
        if (!data) {return}

        d3.selectAll(".cantons path")
            .attr("averageRate", function(d) {
                const canton = cantons[d.id]
                const muns = data.filter(m => m.kanton_id === canton)
                const averageRate = muns.map(m => m.satz).reduce((a, b) => a + b) / muns.length
                return averageRate
            })
            .on("mouseover", function(e, d) {
                d3.select(this).classed("active",true)
                // Display tooltip
                const canton = cantons[d.id]
                const muns = data.filter(m => m.kanton_id === canton)
                const averageRate = (d3.select(this).attr("averageRate") * 100).toFixed(2)
                d3.select("#tooltip").classed('hidden', false)
                    .attr("style", "left:" + (e.pageX - 80) + "px; top:" + (e.pageY + 50) + "px")
                    .html(`${muns[0].kanton_name} ${averageRate}% (⌀)`);
                })
            .on("mouseout", function(d) {
                d3.select(this).classed("active",false)
                d3.select("#tooltip").classed("hidden", true)
            })
            .on("click", function(e, d) {
                e.preventDefault()
                dispatch(searchMapAction(null))
                colorizeCantons(data)
                d3.select(this).attr("style", "fill: none; stroke-width: 1.5;")
            })
    }

    const colorizeCantons = (data) => {
        if (!data || d3.selectAll(`.canton-boundaries`).empty()) {return}

        // Compare average tax rate of all cantons
        const averageRates = []
        d3.selectAll(".canton-boundaries").each(function() { averageRates.push(parseInt(d3.select(this).attr("averageRate") * colorMultiplier)) })
        const lowest = averageRates.sort((a, b) => a - b)[0]
        const heighest = averageRates.sort((a, b) => a - b)[averageRates.length - 1]
        const range = heighest - lowest
        const interval = Math.round(range / (Object.keys(colors).length))

        // Set fill color for cantons depending on its average tax rate
        for (let canton of Object.keys(cantons)) {
            const averageRate = parseInt(d3.select(`.canton-boundaries.c${canton}`).attr("averageRate") * colorMultiplier)

            d3.select(`.canton-boundaries.c${canton}`)
                .attr("style", function(d) {
                    switch (true) {
                        case (averageRate > heighest - interval):
                            return `fill: ${colors.ten}`
                        case (averageRate > heighest - interval * 2):
                            return `fill: ${colors.nine}`
                        case (averageRate > heighest - interval * 3):
                            return `fill: ${colors.eight}`
                        case (averageRate > heighest - interval * 4):
                            return `fill: ${colors.seven}`
                        case (averageRate > heighest - interval * 5):
                            return `fill: ${colors.six}`
                        case (averageRate > heighest - interval * 6):
                            return `fill: ${colors.five}`
                        case (averageRate > heighest - interval * 7):
                            return `fill: ${colors.four}`
                        case (averageRate > heighest - interval * 8):
                            return `fill: ${colors.three}`
                        case (averageRate > heighest - interval * 9):
                            return `fill: ${colors.two}`
                        default:
                            return `fill: ${colors.one}`
                    }
                })
        }
    }

    // TODO: Zoom/center map according to selected municipality?
    const selectMunicipality = () => {
        const cantonID = Object.keys(cantons).find(key => cantons[key] === searchedMunicipality.kanton_id)
        const cantonSelection = d3.selectAll(`path.canton-boundaries.c${cantonID}`)
        const munID = searchedMunicipality.gemeinde_id
        const munSelection = d3.selectAll(`path.municipality-boundaries.m${munID}`)

        cantonSelection.attr("style", "fill: none; stroke-width: 1.5;")
        munSelection.classed("active", true)
    
        const node = munSelection.node()
        if (!node) {return}
        const bounds = node.getBoundingClientRect()
        const x = bounds.x + bounds.width / 2
        const y = bounds.y + bounds.height / 2
        
        const rate = (searchedMunicipality.satz * 100).toFixed(2)

        d3.select("#tooltip").classed("hidden", false)
            .attr("style", "left:" + (x - 80) + "px; top:" + (y + 50) + "px")
            .html(`${searchedMunicipality.gemeinde} ${rate}%`)
    }

    const resetSelection = () => {
        d3.select("#tooltip").classed("hidden", true)
        d3.selectAll(".municipalities path").classed("active", false)
        colorizeCantons(taxData)
    }

    const drawAxis = () => {
        // Position axis
        d3.select(".axis").attr("transform", `translate(${axisMarginLeft}, ${mapHeight - axisMarginBottom})`)

        // Draw background
        d3.select(".axis").append("rect")
            .attr("x", `${axisPaddingLeft}`)
            .attr("y", `${axisPaddingBottom}`)
            .attr("width", axisWidth)
            .attr("height", axisHeight)
            .style("rx", "8px")
            .style("stroke", Theme.backgrounds.ternaryColor)
            .style("fill", Theme.backgrounds.mainColor)

        // Draw color gradient
        d3.select(".axis-defs").append("linearGradient").attr("id", "axis").selectAll("stop")
            .data([...Array(Object.keys(colors).length).keys()])
            .enter()
            .append("stop")
            .attr("offset", (d, i) => (d * (100 / Object.values(colors).length)) + "%")
            .attr("stop-color", (d, i) => `${Object.values(colors)[i]}`)
         
        d3.select(".axis").append("rect")
            .attr("width", axisInnerWidth)
            .attr("height", axisInnerHeight)
            .style("fill", "url(#axis)")
    }

    const updateAxis = (data) => {
        if (!data) {return}

        const rates = data.map(m => m.satz)
        const scaleMin = d3.min(rates)
        const scaleMax = d3.max(rates)
        const scaleInterval = (scaleMax - scaleMin) / 6
        const tickValues = [
            scaleMin,
            scaleMin + scaleInterval,
            scaleMin + scaleInterval * 2,
            scaleMin + scaleInterval * 3,
            scaleMin + scaleInterval * 4,
            scaleMin + scaleInterval * 5,
            scaleMax
        ]

        const scale = d3.scaleLinear()
            .domain([scaleMin, scaleMax])
            .range([0, axisInnerWidth])

        const axis = d3.axisBottom(scale)
            .tickSize(axisInnerHeight)
            .tickPadding(10)
            .tickFormat(d3.format(".2%"))
            .tickValues(tickValues)

        d3.select(".axis").call(axis)

        d3.selectAll(".axis .domain")
            .style("stroke", "none")
        d3.selectAll(".axis .tick line")
            .style("stroke", Theme.text.mainColor)
        d3.selectAll(".axis .tick text")
            .style("font-size", "12px")
            .style("fill", Theme.backgrounds.ternaryColor) 
    }

    return (
        <MapStyle ref={mapRef} />
    )
}

export default Map