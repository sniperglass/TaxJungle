import React from 'react';
import {Link} from 'react-router-dom';
//img
import rent1 from '../../../assets/categories/rent1.jpg';
import rent2 from '../../../assets/categories/rent2.jpg';
import rent3 from '../../../assets/categories/rent3.jpg';
import rent4 from '../../../assets/categories/rent4.jpg';


//css
import {BlogCardCompStyle} from '../../BlogOverview/BlogCardComponent/styles';

const RentingCardComponent =()=>{

const str = ""
    return(
        <BlogCardCompStyle>
            {/* <Link to =""> */}
            <div className="">
                <img src={rent4} alt="taxes1" className="taxes1-img"/>
            </div>
            {/* </Link> */}
            <div className="text-box">
                <p className="blog-question">What are the documents required for renting in Switzerland?</p>
                <p className="author">by Immobilier</p>
            </div>
            <p className="readmore">read this blog</p>
        </BlogCardCompStyle>   
    )
}
export default RentingCardComponent;

