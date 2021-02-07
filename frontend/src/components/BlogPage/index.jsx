import React, { useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

//img
import taxes3 from '../../assets/categories/taxes3.jpg';

import BlogHeaderComponent from '../BlogOverview/BlogHeaderComponent';
import BlogCardComponent from '../BlogOverview/BlogCardComponent';

//css
import {BlogPageStyle} from '../BlogPage/styles';
import {CommentsStyledDown} from '../BlogPage/styles';

//import social media icons
import { FacebookShareButton, FacebookIcon, EmailShareButton,
EmailIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, 
TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";
import { fetchSingleArticle } from '../../store/actions/blogAction';


const BlogPage =(props)=>{
    const singleArticle = useSelector(state => state.blogReducer.current)
    const dispatch = useDispatch()
    // const article_id = props.match.params.id
    // const {handle, article_id} = props.match.params
    const {category, id} = useParams()

    useEffect(() => {    
        //console.log(params.title, params.id)
        dispatch(fetchSingleArticle(id))
    }, [])

const onCommentSubmit = e => {
    e.preventDefault()
}

    return(
        
        <BlogPageStyle>
        <header className="header">
            <div className="back-img"></div>onCommentSubmit
            <ul className="nav-left">
                <Link to="/blog"><li>all blogs</li></Link>
            </ul>
            <div className="header-right-wrapper">
                <ul className="nav-center">
                    <Link to="/profile"><li>my profile</li></Link>
                    <Link to="/blog/create"><li>create article</li></Link>
                </ul> 
                <ul className="nav-right">
                    <Link to=""><li>LogIn</li></Link>
                </ul>
            </div>
        </header>
        <div className="article-info">   
            <div className="round-pic"><img className="blog-img" src={singleArticle.article_image.image} alt=""/>
  
            </div>
            <div className="header-info">
                <p className="category">{singleArticle.article_category.category}</p>
                <p className="headline">{singleArticle.title}</p>
                <p className="author">by {`${singleArticle.user.first_name} ${singleArticle.user.last_name}`}</p>
                <div className="main-content">
                    <div className="article-box">
                            {
                                <p className="article">{singleArticle.content}</p>
                            }
           
                    </div>
                        <div className="comment-section">
                            <div className="comment-title">Comments</div>
                            <form className="addcomment-box" onSubmit={onCommentSubmit}>
                                <textarea className="comment-input" placeholder="add your comment here ... "/>
                                <button className="comment-btn">Submit</button>
                            </form>
                            <div className="comment-box">
                                <div className="single-comment">This article was very helpful for me. It clarified a lot of open questions that I had.</div>
                                <div className="comment-by">leticia, 02.02.21</div>
                            </div>
                            <div className="comment-box">
                                <div className="single-comment">I agree. Nevertheless, I would have some more questions regarding the tax deduction in shared households. How is the ........</div>
                                <div className="comment-by">john, 02.02.21</div>
                            </div>
                            <div className="social-media-icons">  
                                <div className="position-icons">
                                    <FacebookShareButton className="no-border" url="https://taxjungle.propulsion-learn.ch"><FacebookIcon size={38} bgStyle={{ fill: "#ABB2B9"}} borderRadius="50%" className="icon"/></FacebookShareButton>
                                    <LinkedinShareButton className="no-border" url="https://taxjungle.propulsion-learn.ch"><LinkedinIcon size={38} bgStyle={{ fill: "#ABB2B9"}} borderRadius="50%" className="icon"/></LinkedinShareButton>
                                    <TwitterShareButton  className="no-border" url="https://taxjungle.propulsion-learn.ch"><TwitterIcon size={38}   bgStyle={{ fill: "#ABB2B9"}} borderRadius="48%" className="icon"/></TwitterShareButton> 
                                    <WhatsappShareButton className="no-border" url="https://taxjungle.propulsion-learn.ch"><WhatsappIcon size={38} bgStyle={{ fill: "#ABB2B9"}} borderRadius="50%" className="icon"/></WhatsappShareButton>
                                    <EmailShareButton    className="no-border" url="https://taxjungle.propulsion-learn.ch" subject="Check out this cool article!"><EmailIcon size={38} bgStyle={{ fill: "#ABB2B9"}} borderRadius="50%" className="icon"/></EmailShareButton>
                                </div> 
                            </div>  
                        </div>
                </div>
            </div>
           
        </div>
        </BlogPageStyle>
    )
}
export default BlogPage;



