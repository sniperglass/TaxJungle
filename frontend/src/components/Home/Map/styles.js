import styled from "styled-components";

export const MapStyle = styled.div `
  width: 80vw;  /*TODO: Change back to % when including in Home*/
  height: 80vh;  /*TODO: Change back to % when including in Home*/
  border-radius: 8px;
  background-color: lightblue; /*Use global style variable!*/
  margin: auto; /*TODO: Remove when including in Home*/
  
  #axis {
    background: linear-gradient(to right, rgba(254,246,208,1) 0%,rgba(254,236,195,1) 11%,rgba(255,227,183,1) 22%,rgba(255,210,162,1) 33%,rgba(255,208,158,1) 44%,rgba(242,175,139,1) 55%,rgba(220,118,106,1) 66%,rgba(207,86,87,1) 77%,rgba(195,56,70,1) 89%,rgba(180,15,46,1) 100%);
  }
  
  .hidden {
    display: none;
  }
  
  .tooltip {
    position: absolute;
    padding: 15px;
    border-radius: 8px;
    color: #222;
    background-color: #fff;
    text-shadow: #f5f5f5 0 1px 0;
  }
  
  .canton-boundaries {
    stroke: black;
    stroke-width: 0.5;
    opacity: 80%;
    fill: white
  }

  .canton-boundaries.active {
    opacity: 40%;
    stroke: black;
    stroke-width: 1.5;
  }
  
  .municipality-boundaries {
    fill: none;  
    stroke: black;
    stroke-width: 0.3;
  }

  .municipality-boundaries.active {
    fill: purple !important;
  }
`