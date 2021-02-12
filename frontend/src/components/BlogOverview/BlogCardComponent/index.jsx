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

    return(
        <BlogCardCompStyle>
            <Link to ={`/blog/${props.article.article_category.category.toLowerCase()}/${props.article.id}`} draggable="false">
            <div style={{"backgroundImage": `url(${props.article.article_image.length ? props.article.article_image[0].image : defaultImages[props.article.article_category.category]})`}} className="img" draggable="false" />
            <div className="text-box">
                <p className="blog-question">{props.article.title}</p>
                <div>
                    <p className="author">{props.article.user ? `${props.article.user.first_name} ${props.article.user.last_name}` : ""}</p>
                    <p className="created">{getTimestamp(props.article.created)}</p>
                </div>
            </div>
            <p className="readmore">read more</p>
            </Link>  
        </BlogCardCompStyle> 
        
    )
}
export default BlogCardComponent;

