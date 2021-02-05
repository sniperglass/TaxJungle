import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import BlogHeaderComponent from '../BlogOverview/BlogHeaderComponent';
import BlogCardComponent from './BlogCardComponent';
import {fetchAllArticles} from '../../store/actions/blogAction'

//css
import {BlogOverviewStyle} from '../BlogOverview/styles';

const BlogOverview =()=>{
    const dispatch = useDispatch()
    const articles = useSelector(state => state.blogReducer.articles)

    useEffect(() => dispatch(fetchAllArticles()), [])

    return(
        <BlogOverviewStyle>
                <h1 className="title">Keen Blog</h1>
                <BlogHeaderComponent />
               
            <div className="main-container">
                <Carousel itemsToShow={3} itemsToScroll={3} enableMouseSwipe={false} /* enableAutoPlay="true" */> 
                    {
                        articles.map((article, id) => <BlogCardComponent key={id} article={article}/>)
                    }
                </Carousel>
                <div className="back-img"></div>
            </div>
            
            
        </BlogOverviewStyle>
        
    )
}
export default BlogOverview;
