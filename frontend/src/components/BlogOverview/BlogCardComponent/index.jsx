import React from 'react';
import {Link} from 'react-router-dom';

//css
import {BlogCardCompStyle} from './styles';


const BlogCardComponent =(props)=>{

    return(
        <BlogCardCompStyle>
            <Link to ={`/blog/${props.article.article_category.category.toLowerCase()}/${props.article.id}`} draggable="false">
            <div style={{"backgroundImage": `url(${props.article.article_image[0].image})`}} className="img" draggable="false" />
            <div className="text-box">
                <p className="blog-question">{props.article.title}</p>
                <p className="author">{`${props.article.user.first_name} ${props.article.user.last_name}`}</p>
            </div>
            <p className="readmore">read more</p>
            </Link>  
        </BlogCardCompStyle> 
        
    )
}
export default BlogCardComponent;

