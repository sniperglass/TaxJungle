import React from 'react';
import {Link} from 'react-router-dom';
//img
/* import filter from '../../assets/icons/filter.svg'
import search from '../../assets/icons/search.svg'
import location from '../../assets/icons/location.svg' */
import purple_background2 from '../../assets/purple_background2.jpg';
import purple_background6 from '../../assets/purple_background6.jpg';
import purple_background7 from '../../assets/purple_background7.jpg';
import purple_background8 from '../../assets/purple_background8.jpeg';
import purple_background9 from '../../assets/purple_background9.jpeg';
import purple_background11 from '../../assets/purple_background11.jpg';

import BlogHeaderComponent from '../BlogOverview/BlogHeaderComponent';
import BlogCardComponent from './BlogCardComponent';

//css
import {BlogOverviewStyle} from '../BlogOverview/styles';

const BlogOverview =()=>{

    return(
        <BlogOverviewStyle>
                <h1 className="title">Keen Blog</h1>
                <BlogHeaderComponent />
                
            <div className="main-container">
                <div className="card-box">
                    <BlogCardComponent />
                    <BlogCardComponent />
                    <BlogCardComponent />
                </div>
                <div className="back-img"></div>
            </div>
            
        </BlogOverviewStyle>
        
    )
}
export default BlogOverview;
