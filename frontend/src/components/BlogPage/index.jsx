import React, { useState} from 'react';
import {Link} from 'react-router-dom';
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


const BlogPage =()=>{

    return(
        
        <BlogPageStyle>
        <header className="header">
            <div className="back-img"></div>
            <ul className="nav-left">
                <Link to="/blog"><li>all blogs</li></Link>
            </ul>
            <div className="header-right-wrapper">
                <ul className="nav-center">
                    <Link to="/profile"><li>my profile</li></Link>
                    <Link to="/blog/create"><li>create blog</li></Link>
                </ul> 
                <ul className="nav-right">
                    <Link to=""><li>LogIn</li></Link>
                </ul>
            </div>
        </header>
        <div className="article-info">   
            <div className="round-pic"><img className="blog-img" src={taxes3} alt=""/>
            </div>
            <div className="header-info">
                <p className="category">Taxes</p>
                <p className="headline">What is tax deductible in Switzerland?</p>
                <p className="author">by Credit Suisse, 12.01.21</p>
                <div className="main-content">
                    <div className="article-box">
                        <p className="article">
                            The interest deduction on equity capital will provide tax
                            relief for financial and treasury income. Specifically, this
                            means that the cantons can allow an interest deduction on
                            equity capital for tax purposes. However, the interest deduction
                            on equity capital will only be possible if a company’s corporate
                            income tax charge (federal, cantonal, and municipal) in the
                            cantonal capital exceeds 18%. Only in the Canton of Zurich is
                            this condition likely to be met. <br/><br/>
                            If you finance your companies via a holding, finance, or treasury
                            company, the TRAF will mean that you lose the tax advantages
                            you previously enjoyed. With the interest deduction on equity
                            capital, it may be worth bundling or restructuring intragroup financial flows in Switzerland in order to reduce taxes on
                            financial income over the long term...<br/><br/>
                            The interest deduction on equity capital will provide tax
                            relief for financial and treasury income. Specifically, this
                            means that the cantons can allow an interest deduction on
                            equity capital for tax purposes. However, the interest deduction
                            on equity capital will only be possible if a company’s corporate
                            income tax charge (federal, cantonal, and municipal) in the
                            cantonal capital exceeds 18%. Only in the Canton of Zurich is
                            this condition likely to be met. <br/><br/>
                            If you finance your companies via a holding, finance, or treasury
                            company, the TRAF will mean that you lose the tax advantages
                            you previously enjoyed. With the interest deduction on equity
                            capital, it may be worth bundling or restructuring intragroup financial flows in Switzerland in order to reduce taxes on
                            financial income over the long term...
                        </p>
                    </div>
                        <div className="comment-section">
                            <div className="comment-title">Comments</div>
                            <form className="addcomment-box" onSubmit="onCommentSubmit">
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



