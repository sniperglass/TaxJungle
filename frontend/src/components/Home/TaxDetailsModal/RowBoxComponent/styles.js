import styled from "styled-components";

export const RowBoxCompStyle = styled.section`

.row-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    /* border: 1px solid blue; */
    border-bottom: 1px solid #ADA4C1;
}

.row-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60%;
    height: 100%;
    /* border: 1px solid red; */
}

.order {
    padding-left: 10px;
    font-weight: 100;
    color:${props => props.theme.text.mainColor};
}

.city {
    padding-left: 20px;
    font-weight: 100;
    /* font-size: 16px; */
    color:${props => props.theme.text.mainColor};
}

.canton {
    font-weight: 100;
    color:${props => props.theme.text.mainColor};
}

.percentage {
    padding-left: 30px;
    color: #1B7B5E;
    font-weight: 600;
}

.row-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 33%;
    height: 100%;
    /* border: 1px solid red; */
}
`
