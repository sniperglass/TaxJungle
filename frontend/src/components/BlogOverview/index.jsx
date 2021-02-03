import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
//img
/* import filter from '../../assets/icons/filter.svg'
import search from '../../assets/icons/search.svg'
*/

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
                <Carousel itemsToShow={3} itemsToScroll={3} enableMouseSwipe={false} /* enableAutoPlay="true" */> 
                        <BlogCardComponent />
                        <BlogCardComponent />
                        <BlogCardComponent />
                        <BlogCardComponent />
                        <BlogCardComponent />
                        <BlogCardComponent />
                        <BlogCardComponent />
                        <BlogCardComponent />
                        <BlogCardComponent />
                </Carousel>
                <div className="back-img"></div>
            </div>
            
            
        </BlogOverviewStyle>
        
    )
}
export default BlogOverview;
