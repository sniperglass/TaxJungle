import React from 'react';
import {Link} from 'react-router-dom';
//img
import insurance1 from '../../../assets/categories/insurance1.jpeg';
import insurance2 from '../../../assets/categories/insurance2.jpg';
import insurance3 from '../../../assets/categories/insurance3.jpg';
import insurance4 from '../../../assets/categories/insurance4.jpg';


//css
import {BlogCardCompStyle} from '../../BlogOverview/BlogCardComponent/styles';

const InsuranceCardComponent =()=>{

const str = ""
    return(
        <BlogCardCompStyle>
            {/* <Link to =""> */}
            <div className="">
                <img src={insurance4} alt="taxes1" className="taxes1-img"/>
            </div>
            {/* </Link> */}
            <div className="text-box">
                <p className="blog-question">How does insurance work in Switzerland?</p>
                <p className="author">by AXA</p>
            </div>
            <p className="readmore">read this blog</p>
        </BlogCardCompStyle>   
    )
}
export default InsuranceCardComponent;

