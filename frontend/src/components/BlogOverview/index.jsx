import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import BlogHeaderComponent from '../../components/BlogHeaderComponent';
import BlogCardComponent from './BlogCardComponent';
import BlogNavComponent from './BlogNavComponent';
import {fetchAllArticles} from '../../store/actions/blogAction'

//img
import location from '../../assets/icons/location.svg'
//css
import {BlogOverviewStyle} from '../BlogOverview/styles';

const BlogOverview =()=>{
    const dispatch = useDispatch()
    const articles = useSelector(state => state.blogReducer.articles)
    const category = useSelector(state => state.blogReducer.category)

    useEffect(() => dispatch(fetchAllArticles(category)), [category])



    return(
        <BlogOverviewStyle>
            <div className="upper-header">
                <h1 className="title">Keen Blog</h1>
            </div> 
                <BlogHeaderComponent />
                <BlogNavComponent />
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
