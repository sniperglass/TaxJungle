import React, { useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {newArticleAction} from '../../store/actions/blogAction'
//img
import taxes3 from '../../assets/categories/typewriter.jpeg';
import xicon from '../../assets/icons/x-icon.svg'
import {BlogPageCreateStyle} from '../BlogPageCreate/style'

const BlogPageCreate =()=>{
    const [article, setNewArticle] = useState({
        title: '',
        content: '',
        article_category: 1,
        article_video: '',
        article_image: []
    });
    const dispatch = useDispatch()
    const history = useHistory()
    const [showConfirmation, setShowConfirmation] = useState(false) 

    // const [image, setImage] = useState([])

    const articleInputHandler = e => {
        console.log(e.target.value)
        let{name, value}=e.target
        if (name==='article_category'){
            value = parseInt(value)
        }else if(name === 'article_image'){
            value = e.target.files[0]
        }
        setNewArticle({
            ...article, 
            [name]:value
        })
    }

    const onSubmitHandler = e => {
        console.log(article)
        e.preventDefault()
        
        
        const formData = new FormData();
        formData.append('article_image', article.article_image);
        formData.append('article_video', article.article_video);
        formData.append('title', article.title);
        formData.append('content', article.content);
        formData.append('article_category', article.article_category);

        console.log(formData)
        dispatch(newArticleAction(formData, history))
        setShowConfirmation(true)
    }
    
    

    


    return(
        
        <BlogPageCreateStyle>
            {console.log('article', article)}
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
                {<div className={`confirmation ${showConfirmation ? "" : "hidden"}`}>
                    <p>Succes your article has been publish</p>
                    <button className= 'x-button'><img className="x-image" src={xicon}/></button>
                    </div>}
                <div className="main-content">
                        <form className="form" onSubmit={onSubmitHandler}>
                            <div className="title-inputs">
                                <input className="article-title" onChange={articleInputHandler} value={article.title} name='title' type="text" required placeholder = "Title" />
                                <select className="article-category" onChange={articleInputHandler} value={article.article_category} name="article_category" id="category">
                                    <option value="1">Taxes</option>
                                    <option value="2">Renting</option>
                                    <option value="3">Banking</option>
                                    <option value="4">Insurance</option>
                                </select>
                            </div>
                            <div className="article-box">
                                <textarea name='content' onChange={articleInputHandler} value={article.content} className="article-input" type="text" required placeholder="Let's create...">
                                </textarea>
                            </div>
                            <div className="media-input">
                                <div className="files">
                                    <input className="imageFile" onChange={articleInputHandler} name='article_image' type="file" accept="image/jpeg, image/png" multiple placeholder="Image" />
                                    <input className="videoFile" onChange={articleInputHandler} value={article.article_video}  name='article_video'   type="url" placeholder="Video url" />
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
