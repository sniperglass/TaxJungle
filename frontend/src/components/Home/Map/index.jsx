import { MapStyle } from "./styles";
import { cantons, colors, fetchTaxData } from "./utils"
import { useRef, useEffect } from "react"
import * as d3 from "d3"
import * as topojson from "topojson-client"


const Map = () => {

    // Reference to main div in MapStyle
    const mapRef = useRef(null)

    // SVG dimensions (must be same as in MapStyle div)
    let mapWidth = window.innerWidth * 0.8, mapHeight = window.innerHeight * 0.8

    // Axis dimensions
    const axisWidth = 340, axisHeight = 75
    const axisInnerWidth = 300, axisInnerHeight = 15
    const axisMarginLeft = 25, axisMarginBottom = axisHeight - axisInnerHeight

    // SVG container and groups
    let svg, b, m, c, d, a, tooltip

    // Map projection, scale factor and path
    let projection, scaleFactor = 7.5, path

    // Fetch tax data, prepare svg and draw map
    useEffect(() => {
        fetchTaxData()
            .then(result => {
                if (result) {
                    setupSVG()
                    drawMap(result)
                }
            })
    })

    const setupSVG = () => {
        console.log("Setup SVG")

        // Add svg container to MapStyle div
        svg = d3.select(mapRef.current).append("svg")
            .attr("width", mapWidth)
            .attr("height", mapHeight)

        // Add rect for background with reset click handler
        b = svg.append('rect')
            .attr("width", mapWidth)
            .attr("height", mapHeight)
            .style("fill", "transparent")
            .on("click", function(e) {
                e.preventDefault()
                colorizeCantons()
            })

        // Add group for municipalities
        m = svg.append("g")

        // Add group for cantons
        c = svg.append("g")

        // Add defs and group for axis
        d = svg.append("defs")
        a = svg.append("g")

        // Add div for hover tooltip
        tooltip = d3.select(mapRef.current).append("div")
            .attr("id", "tooltip")
            .attr("class", "hidden")

        // Define zoom and pan behaviour
        const zoom = d3.zoom()
            .scaleExtent([1, 5])
            .on("zoom", function(e) {
                m.selectAll("path")
                    .attr("transform", e.transform)
                c.selectAll("path")
                    .attr("transform", e.transform)
            })
        svg.call(zoom)
    }

    const colorizeMunicipalites = (taxJSON) => {
        console.log("Colorize municipalitizes")

        // Compare tax rate of municipalty to all rates in given canton
        const rates = taxJSON.map(m => parseInt(m.satz * 10000))
        const lowest = rates.sort((a, b) => a - b)[0]
        const heighest = rates.sort((a, b) => a - b)[rates.length - 1]
        const range = heighest - lowest
        const interval = Math.round(range / (Object.keys(colors).length))

        for (let municipality of taxJSON) {
            const rate = (municipality.satz * 10000).toFixed(2)

            // Set municipalty fill color depending on it's rate
            m.select(`.municipality-boundaries.m${municipality.gemeinde_id}`)
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

    const colorizeCantons = () => {
        console.log("Colorize cantons")

        // Get all cantons average rates
        const average_rates = []
        c.selectAll(".canton-boundaries").each(function(d) {  average_rates.push(parseInt(d3.select(this).attr("average_rate"))) })
        const lowest = average_rates.sort((a, b) => a - b)[0]
        const heighest = average_rates.sort((a, b) => a - b)[average_rates.length - 1]
        const range = heighest - lowest
        const interval = Math.round(range / (Object.keys(colors).length))

        // Set cantons fill color depending on it's average tax rate
        for (let canton of Object.keys(cantons)) {
            const average_rate = c.select(`.canton-boundaries.c${canton}`).attr("average_rate")

            c.select(`.canton-boundaries.c${canton}`)
                .attr("style", function(d) {
                    switch (true) {
                        case (average_rate > heighest - interval):
                            return `fill: ${colors.ten}`
                        case (average_rate > heighest - interval * 2):
                            return `fill: ${colors.nine}`
                        case (average_rate > heighest - interval * 3):
                            return `fill: ${colors.eight}`
                        case (average_rate > heighest - interval * 4):
                            return `fill: ${colors.seven}`
                        case (average_rate > heighest - interval * 5):
                            return `fill: ${colors.six}`
                        case (average_rate > heighest - interval * 6):
                            return `fill: ${colors.five}`
                        case (average_rate > heighest - interval * 7):
                            return `fill: ${colors.four}`
                        case (average_rate > heighest - interval * 8):
                            return `fill: ${colors.three}`
                        case (average_rate > heighest - interval * 9):
                            return `fill: ${colors.two}`
                        default:
                            return `fill: ${colors.one}`
                    }
                })
        }
    }

    const drawAxis = (taxJSON) => {
        console.log("Draw axis")

        // Draw background
        a.append("rect")
            .attr("x", "-20px")
            .attr("y", "-20px")
            .attr("width", axisWidth)
            .attr("height", axisHeight)
            .style("rx", "8px")
            .style("fill", "lightBlue")  // TODO: Use global style variable!

        // Draw color gradient
        d.append("linearGradient").attr("id", "axis").selectAll("stop")
            .data([...Array(Object.keys(colors).length).keys()])
            .enter()
            .append("stop")
            .attr("offset", (d, i) => (d * (100 / Object.values(colors).length)) + "%")
            .attr("stop-color", (d, i) => `${Object.values(colors)[i]}`)

        a.append("rect")
            .attr("width", axisInnerWidth)
            .attr("height", axisInnerHeight)
            .style("fill", "url(#axis)")

        // Draw scale
        // TODO: Replace mockData with array of all municipality tax rates!
        const rates = taxJSON.map(m => m.satz)
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

        a.attr("transform", `translate(${axisMarginLeft}, ${mapHeight - axisMarginBottom})`).call(axis)

        a.selectAll(".domain, .tick line")
            .attr("stroke", "#8073A5")  // TODO: Use global style variable!

        a.selectAll(".tick text")
            .style("font-size", "12px")
            .style("fill", "#8073A5")  // TODO: Use global style variable!
    }

    const drawMunicipalities = (topo, taxJSON) => {
        console.log("Draw municipalities")

        m.selectAll("path")
            .data(topojson.feature(topo, topo.objects.municipalities).features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function(d) {
                return `municipality-boundaries m${d.id}`
            })
            .on('mouseover', function(e, d) {
                d3.select(this)
                    .classed("active",true)
                // Display tooltip
                const mun = taxJSON.filter(m => m.gemeinde_id === d.id)[0]
                if (mun) {
                    const rate = (mun.satz * 100).toFixed(2)
                    tooltip.classed('hidden', false)
                        .attr('style', 'left:' + (e.pageX - 80) +'px; top:' + (e.pageY + 50) + 'px')
                        .html(`${mun.gemeinde} ${rate}%`)
                }
            })
            .on('mouseout', function(d) {
                d3.select(this)
                    .classed("active",false)
                // Hide tooltip
                tooltip.classed('hidden', true)
            })
            .on("click", function(e, d) {
                e.preventDefault()
                // TODO: Trigger tax detail modal display
            })

        colorizeMunicipalites(taxJSON)
    }

    const drawCantons = (topo, taxJSON) => {
        console.log("Draw cantons")

        c.selectAll("path")
            .data(topojson.feature(topo, topo.objects.cantons).features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function(d) {
                return `canton-boundaries c${d.id}`
            })
            .attr("average_rate", function(d) {
                const canton = cantons[d.id]
                const muns = taxJSON.filter(m => m.kanton_id === canton)
                const average_satz = muns.map(m => m.satz).reduce((a, b) => a + b) / muns.length
                const average_rate = parseInt(average_satz * 10000)
                return average_rate
            })
            .on('mouseover', function(e, d) {
                // Add active css class
                d3.select(this)
                    .classed("active",true)
                // Display tooltip
                const canton = cantons[d.id]
                const muns = taxJSON.filter(m => m.kanton_id === canton)
                const cantonName = muns[0].kanton_name
                const average_satz = muns.map(m => m.satz).reduce((a, b) => a + b) / muns.length
                const average_rate = (average_satz * 100).toFixed(2)
                tooltip.classed('hidden', false)
                    .attr('style', 'left:' + (e.pageX - 80) +'px; top:' + (e.pageY + 50) + 'px')
                    .html(`${cantonName} ${average_rate}% (⌀)`);
                })
            .on('mouseout', function(d) {
                d3.select(this)
                    .classed("active",false)
                // Hide tooltip
                tooltip.classed('hidden', true)
            })
            .on('click', function(e, d) {
                e.preventDefault()
                colorizeCantons()
                d3.select(this)
                    .attr("style", "fill: none; stroke-width: 1.5;")
            })

        colorizeCantons()
    }

    const drawMap = (taxJSON) => {
        console.log("Draw map")

        d3.json("/swiss-topo.json").then(function(topo) {

            // Set projection and path
            projection = d3.geoMercator().scale((mapWidth + mapHeight / 2) * scaleFactor).translate([mapWidth / 2, mapHeight / 2]).center(d3.geoCentroid(topojson.feature(topo, topo.objects.cantons)))
            path = d3.geoPath().projection(projection)

            drawAxis(taxJSON)

            drawMunicipalities(topo, taxJSON)
            
            drawCantons(topo, taxJSON)

            console.log("Draw map finished")
        })
    }

    // Make it responsive
    const resize = () => {
        const map = d3.select(mapRef.current)
        mapWidth = parseInt(map.style("width"))
        mapHeight = parseInt(map.style("height"))

        projection
            .scale((mapWidth + mapHeight / 2) * scaleFactor)
            .translate([mapWidth / 2, mapHeight / 2])

        svg.attr("width", mapWidth).attr("height", mapHeight)
        a.attr("transform", `translate(${axisMarginLeft}, ${mapHeight - axisMarginBottom})`)

        d3.selectAll("path").attr('d', path);
    }

    d3.select(window).on('resize', resize);

    return (
        <MapStyle ref={mapRef} />
    )

}

export default Map