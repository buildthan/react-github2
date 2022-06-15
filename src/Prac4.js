import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

import input_data from "./1월-top123.csv";
// import input_data4 from "./2월-top1.csv";
// import input_data7 from "./3월-top1.csv";
// import input_data10 from "./4월-top1.csv";
// import input_data13 from "./5월-top1.csv";
// import input_data16 from "./6월-top1.csv";
// import input_data19 from "./7월-top1.csv";
// import input_data22 from "./8월-top1.csv";
// import input_data25 from "./9월-top1.csv";
// import input_data28 from "./10월-top1.csv";
// import input_data31 from "./11월-top1.csv";
// import input_data34 from "./12월-top1.csv";

function Prac4({month}) {
    var margin = {top: 200, right: 200, bottom: 200, left: 200},
    width = 400 - margin.left/2 - margin.right/2,
    height = 400 - margin.top/2 - margin.bottom/2;

    const [data, setdata] = useState();
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        d3.csv(input_data).then(function(data) {
           //setdata(data);
            var sumstat = d3.nest() 
                .key(function(d){ return d.Top })
                .entries(data);
            const max = d3.max(data, function(d) { return +d.빈도수; })

            var x = d3
                .scaleBand()
                .domain(data.map(function(d){return d.시;}))
                .range([0, width])
                .padding(0.6);
            svg.append("g")
                .attr("transform", "translate(0,"+height+")")
                .call(d3.axisBottom(x).ticks(5));
            
            var y = d3
                .scaleLinear()
                .domain([0,max+10])
                .range([height, 0]);
            svg.append("g").call(d3.axisLeft(y))

            var res = sumstat.map(function(d){ return d.key }) // list of group names
            var color = d3.scaleOrdinal()
                .domain(res)
                .range(['#e41a1c','#377eb8','#4daf4a'])

            svg.selectAll(".line")
                .data(sumstat)
                .enter()
                .append("path")
                    .attr("fill", "none")
                    .attr("stroke", function(d){ return color(d.key) })
                    .attr("stroke-width", 1.5)
                    .attr("d", function(d){
                    return d3.line()
                        .x(function(d) { return x(d.시); })
                        .y(function(d) { return y(+d.빈도수); })
                        (d.values)
                    })
        })}, [data])
            

    return (
        <>
            <h1>test</h1>
            <svg ref={svgRef} width={400} height={400}>
                <g className="x"></g>
                <g className="y"></g> 
                </svg>
        </>); 
}
export default Prac4;
