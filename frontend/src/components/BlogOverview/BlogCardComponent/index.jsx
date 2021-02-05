import React from 'react';
import {Link} from 'react-router-dom';
//img
import taxes1 from '../../../assets/categories/taxes1.jpg';
import taxes2 from '../../../assets/categories/taxes2.jpeg';
import taxes3 from '../../../assets/categories/taxes3.jpg';
import taxes4 from '../../../assets/categories/taxes4.jpeg';
import taxes5 from '../../../assets/categories/taxes5.jpg';

//css
import {BlogCardCompStyle} from './styles';

const BlogCardComponent =(props)=>{

    return(
        <BlogCardCompStyle>
            <Link to ={`/blog/${props.article.article_category.category}/${props.article.id}`} draggable="false">
            <div className="">
                <img src={props.article.article_image.length ? props.article.article_image[0].image : taxes3} alt="taxes1" className="taxes1-img" draggable="false" />
            </div>
            
            <div className="text-box">
                <p className="blog-question">{props.article.title}</p>
                <p className="author">{props.article.user.first_name}</p>
            </div>
            <p className="readmore">read this blog</p>
            </Link>  
        </BlogCardCompStyle> 
        
    )
}
export default BlogCardComponent;

