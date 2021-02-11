import styled from "styled-components"


export const MapStyle = styled.div `
  width: 100%; 
  height: 100%; 

  .hidden {
    display: none;
  }
  
  #axis {
    background: linear-gradient(to right, rgba(254,246,208,1) 0%,rgba(254,236,195,1) 11%,rgba(255,227,183,1) 22%,rgba(255,210,162,1) 33%,rgba(255,208,158,1) 44%,rgba(242,175,139,1) 55%,rgba(220,118,106,1) 66%,rgba(207,86,87,1) 77%,rgba(195,56,70,1) 89%,rgba(180,15,46,1) 100%);
  }
  
  #tooltip {
    position: absolute;
    padding: 15px;
    border-radius: 8px;
    font-weight: 600;
    color: ${props => props.theme.text.mainColor};
    background-color: ${props => props.theme.backgrounds.ternaryColor};
    box-shadow: 0 0 5px ${props => props.theme.text.mainColor};
    z-index: 999;

    p {
      text-align: center;
    }

    .main-row {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 0.5px solid ${props => props.theme.text.mainColor};
      font-size: 14px;

      p:first-child {
        padding-right: 20px;
        font-weight: 200;
      }
    }
  
    footer {
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      
      .footer-subcontainer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border: none;
      }

      .footer-section {
        width: 100%;
        height: 100%;
        margin: 5px 0;
        display: flex;
        flex-direction: column;
        border-bottom: 0.5px solid ${props => props.theme.text.mainColor};
      }

      .footer-section-sub {
        width: 100%;
        height: 100%;
        margin-top: 5px;
        display: flex;
        justify-content: space-between;

        p:first-child {
          font-weight: 200;
          padding-right: 20px;
        }
      }
    }
  }
  
  .canton-boundaries {
    fill: white;
    stroke: black;
    stroke-width: 0.5;
    opacity: 80%;
    cursor: pointer;
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
    cursor: pointer;
  }

  .municipality-boundaries.active {
    fill: ${props => props.theme.backgrounds.hover} !important;
  }
`