import React from 'react';
import {Link} from 'react-router-dom';
//img
import taxes1 from '../../../assets/categories/taxes1.jpg';
import taxes2 from '../../../assets/categories/taxes2.jpeg';
import taxes3 from '../../../assets/categories/taxes3.jpg';
import taxes4 from '../../../assets/categories/taxes4.jpeg';
import taxes5 from '../../../assets/categories/taxes5.jpg';

//css
import {BlogCardCompStyle} from './styles';

const BlogCardComponent =()=>{

const str = ""
    return(
        <BlogCardCompStyle>
            {/* <Link to =""> */}
            <div className="">
                <img src={taxes3} alt="taxes1" className="taxes1-img"/>
            </div>
            {/* </Link> */}
            <div className="text-box">
                <p className="blog-question">What is tax deductible in Switzerland?</p>
                <p className="author">by Credit Suisse</p>
            </div>
            <p className="readmore">read this blog</p>
        </BlogCardCompStyle>   
    )
}
export default BlogCardComponent;

