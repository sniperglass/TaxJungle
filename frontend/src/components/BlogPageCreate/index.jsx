import React, { useState} from 'react';
import {Link} from 'react-router-dom';
//img
import taxes3 from '../../assets/categories/typewriter.jpeg';



//css
import {BlogPageCreateStyle, WriteNewArticleStyle} from '../BlogPageCreate/style'

const BlogPageCreate =()=>{


    return(
        
        <BlogPageCreateStyle>
        <header className="header">
            <div className="back-img"></div>
            <ul className="nav-left">
                <Link to="/blogs"><li>all blogs</li></Link>
            </ul>
            <div className="header-right-wrapper">
                <ul className="nav-center">
                    <Link to="/blogs"><li>my profile</li></Link>
                    <Link to="/renting"><li>create blog</li></Link>
                </ul> 
                <ul className="nav-right">
                    <Link to=""><li>LogIn</li></Link>
                </ul>
            </div>
        </header>
        <div className="article-info">
            <div className="round-pic"><img className="blog-img" src={taxes3} alt=""/></div>
            <div className="header-info">
                <p className="category">Your story starts here</p>
                <p className="headline">What is your article about?</p>
                <p className="author"></p>
                <div className="main-content">
                        <form className="form">
                            <div className="title-inputs">
                                <input className="article-title" type="text" required placeholder = "Title" />
                                <select className="article-category" name="category" id="category">
                                    <option value="Choose a Category">Choose a Category</option>
                                    <option value="Taxes">Taxes</option>
                                    <option value="Renting">Renting</option>
                                    <option value="Banking">Banking</option>
                                    <option value="Insurance">Insurance</option>
                                </select>
                            </div>
                            <div className="article-box">
                                <textarea className="article-input" type="text" required placeholder="Let's create...">
                                </textarea>
                            </div>
                            <div className="media-input">
                                <div className="files">
                                    <input className="imageFile" type="file" accept="image/jpeg, image/png" multiple placeholder="Image" />
                                    <input className="videoFile" type="url" placeholder="Video url" />
                                </div>
                                <button type="submit" className="submit-btn">Submit</button>

                            </div>
                    </form> 
                        
                </div>
            </div>
           
        </div>
        </BlogPageCreateStyle>
    )
}
export default BlogPageCreate;
