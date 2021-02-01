import { MapStyle } from "./styles"
import { Theme } from "../../../styles/index"
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
    const axisWidth = 345, axisHeight = 75
    const axisInnerWidth = 300, axisInnerHeight = 15
    const axisMarginLeft = 25, axisMarginBottom = axisHeight - axisInnerHeight

    // SVG container and groups
    let svg, m, c, d, a, tooltip

    // Map projection, scale factor and path
    let projection, scaleFactor = 7.5, path

    // Multiplier for better color distribution based on taxrates
    const colorMultiplier = 10000

    // Fetch tax data, prepare svg and draw map
    useEffect(() => {
        setupSVG()
        drawMap()
        fetchTaxData()
            .then(result => {
                if (result) {
                    updateMap(result)
                }
            })
    })

    const setupSVG = () => {
        // Add svg container to MapStyle div
        svg = d3.select(mapRef.current).append("svg")
            .attr("width", mapWidth)
            .attr("height", mapHeight)

        // Add rect for background with reset click handler
        svg.append('rect')
            .attr("width", mapWidth)
            .attr("height", mapHeight)
            .style("fill", "none")
            .style("pointer-events", "visible")
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
    }

    const drawMap = (taxJSON) => {
        d3.json("/swiss-topo.json").then(function(topo) {

            // Set projection and path
            projection = d3.geoMercator().scale((mapWidth + mapHeight / 2) * scaleFactor).translate([mapWidth / 2, mapHeight / 2]).center(d3.geoCentroid(topojson.feature(topo, topo.objects.cantons)))
            path = d3.geoPath().projection(projection)

            // Draw municipalities
            m.selectAll("path")
                .data(topojson.feature(topo, topo.objects.municipalities).features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("class", function(d) {
                    return `municipality-boundaries m${d.id}`
                })

            // Draw cantons    
            c.selectAll("path")
                .data(topojson.feature(topo, topo.objects.cantons).features)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("class", function(d) {
                    return `canton-boundaries c${d.id}`
                })
        })
    }

    const updateMap = (taxJSON) => {
        updateMunicipalities(taxJSON)
        updateCantons(taxJSON)
        drawAxis(taxJSON)
    }

    const updateMunicipalities = (taxJSON) => {
        m.selectAll("path")
            .on('mouseover', function(e, d) {
                const mun = taxJSON.filter(m => m.gemeinde_id === d.id)[0]
                if (!mun) { return }
                d3.select(this)
                    .classed("active",true)
                // Display tooltip
                const rate = (mun.satz * 100).toFixed(2)
                tooltip.classed('hidden', false)
                    .attr('style', 'left:' + (e.pageX - 80) +'px; top:' + (e.pageY + 50) + 'px')
                    .html(`${mun.gemeinde} ${rate}%`)
                
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

    const colorizeMunicipalites = (taxJSON) => {
        // Compare tax rate of municipalty to all rates in given canton
        const rates = taxJSON.map(m => parseInt(m.satz * colorMultiplier))
        const lowest = rates.sort((a, b) => a - b)[0]
        const heighest = rates.sort((a, b) => a - b)[rates.length - 1]
        const range = heighest - lowest
        const interval = Math.round(range / (Object.keys(colors).length))

        // Set fill color for municipalities depending on its tax rate
        for (let municipality of taxJSON) {
            const rate = parseInt(municipality.satz * colorMultiplier)

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

    const updateCantons = (taxJSON) => {
        c.selectAll("path")
            .attr("average_rate", function(d) {
                const canton = cantons[d.id]
                const muns = taxJSON.filter(m => m.kanton_id === canton)
                const average_rate = muns.map(m => m.satz).reduce((a, b) => a + b) / muns.length
                return average_rate
            })
            .on('mouseover', function(e, d) {
                d3.select(this)
                    .classed("active",true)
                // Display tooltip
                const canton = cantons[d.id]
                const muns = taxJSON.filter(m => m.kanton_id === canton)
                const average_rate = (d3.select(this).attr("average_rate") * 100).toFixed(2)
                tooltip.classed('hidden', false)
                    .attr('style', 'left:' + (e.pageX - 80) +'px; top:' + (e.pageY + 50) + 'px')
                    .html(`${muns[0].kanton_name} ${average_rate}% (⌀)`);
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

    const colorizeCantons = () => {
        // Compare average tax rate of all cantons
        const average_rates = []
        c.selectAll(".canton-boundaries").each(function() {  average_rates.push(parseInt(d3.select(this).attr("average_rate") * colorMultiplier)) })
        const lowest = average_rates.sort((a, b) => a - b)[0]
        const heighest = average_rates.sort((a, b) => a - b)[average_rates.length - 1]
        const range = heighest - lowest
        const interval = Math.round(range / (Object.keys(colors).length))

        // Set fill color for cantons depending on its average tax rate
        for (let canton of Object.keys(cantons)) {
            const average_rate = parseInt(c.select(`.canton-boundaries.c${canton}`).attr("average_rate") * colorMultiplier)

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
        // Draw background
        a.append("rect")
            .attr("x", "-20px")
            .attr("y", "-20px")
            .attr("width", axisWidth)
            .attr("height", axisHeight)
            .style("rx", "8px")
            .style("fill", Theme.backgrounds.greyLight)  // TODO: Use global style variable!

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
            .attr("stroke", Theme.text.secondaryColor)

        a.selectAll(".tick text")
            .style("font-size", "12px")
            .style("fill", Theme.text.secondaryColor) 
    }

    return (
        <MapStyle ref={mapRef} />
    )
}

export default Map