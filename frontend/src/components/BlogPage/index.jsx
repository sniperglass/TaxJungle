import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleArticle, createCommentAction } from '../../store/actions/blogActions';
//css
import {BlogPageStyle} from '../BlogPage/styles';
//icons
import { FacebookShareButton, FacebookIcon, EmailShareButton,
EmailIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, 
TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";


const BlogPage =()=>{
    const article = useSelector(state => state.blogReducer.current)
    const dispatch = useDispatch()
    const {category, id} = useParams()
    const [content, setContent] = useState('')


    useEffect(() => {    
        dispatch(fetchSingleArticle(id))
    }, [])

    const onCommentSubmit = e => {
        e.preventDefault()
        dispatch (createCommentAction(id, content))
        
        // console.log(e.target.elements.content.value)
    }

    const getTimestamp = (dateStr) => {
        let timeCreated = Date.parse(dateStr)
        let timeCurrent = new Date().getTime()
        let millisecs = timeCurrent - timeCreated
        let seconds = (millisecs / 1000).toFixed(0)
        let minutes = (millisecs / (1000 * 60)).toFixed(0)
        let hours = (millisecs / (1000 * 60 * 60)).toFixed(0)
        let days = (millisecs / (1000 * 60 * 60 * 24)).toFixed(0)

        if (seconds < 60) {
            return "Just now"
        } else if (minutes < 60) {
            return minutes + " minutes ago"
        } else if (hours < 24) {
            return hours + " hours ago"
        }
        return days + " Days ago"
    }

    return article ? 
        (
            <BlogPageStyle>
            <header className="header">
                <div className="back-img"></div>
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
                <div className="round-pic"><img className="blog-img" src={article.article_image[0].image} alt=""/></div>
                <div className="header-info">
                    <p className="category">{article.article_category.category}</p>
                    <p className="headline">{article.title}</p>
                    <p className="author">by {`${article.user.first_name} ${article.user.last_name}`}</p>
                    <div className="main-content">
                        <div className="article-box">
                            <p className="article">{article.content}</p>
                        </div>
                            <div className="comment-section">
                                <div className="comment-title">Comments</div>
                                <form className="addcomment-box" onSubmit={onCommentSubmit}>
                                    <textarea name="content" onChange={(e)=> setContent(e.target.value)} className="comment-input" placeholder="add your comment here ... "/>
                                    <button type="submit" className="comment-btn">Submit</button>
                                </form>
                                {
                                    article.comment.length ?
                                        <div className="comment-container">
                                            {
                                                article.comment.map((comment, id) => 
                                                    <div key={id} className="comment-box">
                                                        <div className="single-comment">{comment.content}</div>
                                                        <div className="comment-footer">
                                                            <p className="comment-by">{`${comment.user.username}`}</p>
                                                            <p className="timestamp">{`${getTimestamp(comment.created)}`}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div> : null
                                }
                                <div className="social-media-icons">  
                                    <div className="social-media-icons">
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
        ) :
        <div />
}

export default BlogPage;



