import React from 'react';

//img

//css
import {RowBoxCompStyle} from '../RowBoxComponent/styles';

const RowBoxComponent =()=>{

const str = ""
    return(
        <RowBoxCompStyle>
            <div className="row-box">
                <div className="row-left">
                    <p className="order">...</p>
                    <p className="city">{str.slice(0, 19)}</p>
                </div>
                <div className="row-right">
                    <p className="canton"> ...{}</p>
                    <p className="percentage">...{}%</p>
                </div>   
            </div>  
        </RowBoxCompStyle>   
    )
}
export default RowBoxComponent;

