import React from 'react';
import {Link} from 'react-router-dom';

//img
import taxes1 from '../../../assets/categories/taxes1.jpg';
import bank3 from '../../../assets/categories/bank3.jpg';
import rent3 from '../../../assets/categories/rent3.jpg';
import insurance3 from '../../../assets/categories/insurance3.jpg';

//css
import {BlogCardCompStyle} from './styles';


const BlogCardComponent = (props) => {
    const defaultImages = {
        "Taxes": taxes1,
        "Banking": bank3,
        "Renting": rent3,
        "Insurance": insurance3,
    }

    return(
        <BlogCardCompStyle>
            <Link to ={`/blog/${props.article.article_category.category.toLowerCase()}/${props.article.id}`} draggable="false">
            <div style={{"backgroundImage": `url(${props.article.article_image.length ? props.article.article_image[0].image : defaultImages[props.article.article_category.category]})`}} className="img" draggable="false" />
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

