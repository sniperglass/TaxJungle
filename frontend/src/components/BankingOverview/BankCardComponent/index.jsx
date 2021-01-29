import React from 'react';
import {Link} from 'react-router-dom';
//img
import bank1 from '../../../assets/categories/bank1.jpg';
import bank2 from '../../../assets/categories/bank2.jpg';
import bank3 from '../../../assets/categories/bank3.jpg';

//css
import {BlogCardCompStyle} from '../../BlogOverview/BlogCardComponent/styles';

const BankCardComponent =()=>{

const str = ""
    return(
        <BlogCardCompStyle>
            {/* <Link to =""> */}
            <div className="">
                <img src={bank1} alt="taxes1" className="taxes1-img"/>
            </div>
            {/* </Link> */}
            <div className="text-box">
                <p className="blog-question">Do you have to pay taxes on a Swiss bank account?</p>
                <p className="author">by UBS</p>
            </div>
            <p className="readmore">read this blog</p>
        </BlogCardCompStyle>   
    )
}
export default BankCardComponent;

