import { BlogNavComponentStyle } from '../BlogNavComponent/styles'
import { useSelector, useDispatch } from "react-redux"
import { Link, useHistory } from 'react-router-dom'
import { useState} from 'react';
import { blogCategoryAction, searchOnArticlesByCategory } from "../../../store/actions/blogActions"
import search from '../../../assets/icons/search.svg'

const BlogNavComponent = () => {
    const user = useSelector(state => state.authReducer.user)
    const authenticated = useSelector(state => state.authReducer.authenticated)
    let category = useSelector(state => state.blogReducer.category)
    const [searchText, setsearchText] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const blogCategoryHandler = (e) => {
        dispatch(blogCategoryAction(e.target.id))
    }

    const searchHandler = (e) => {
        e.preventDefault()
        dispatch(searchOnArticlesByCategory(e.target.elements.search.value)).then(result => {
            history.push('/blog/search')
        })
        dispatch(blogCategoryAction('search'))

    }

    const textInputChange = (e) => {
        const{value} = e.target;
        setsearchText(value)
    }

    return(
        <BlogNavComponentStyle>
            <header className="header">
                <ul className="nav-left">
                    <Link to="/blog/create"><button>+</button></Link>
                    <Link to="/blog/create">create article</Link>
                </ul>
                <ul className="nav-center">
                    <div className="category-wrapper">
                        <Link id="1" to="/blog/taxes" style={category === "1" ? {fontWeight: 700, borderBottom: "1px solid#0c5a75"} :  {color: "#0c5a75"}} onClick={blogCategoryHandler}>Taxes</Link>
                        <Link id="2" to="/blog/renting" style={category === "2" ? {fontWeight: 700, borderBottom: "1px solid #0c5a75"} :  {color: "#0c5a75"}} onClick={blogCategoryHandler}>Renting</Link>
                        <Link id="3" to="/blog/banking" style={category === "3" ? {fontWeight: 700, borderBottom: "1px solid #0c5a75"} :  {color: "#0c5a75"}} onClick={blogCategoryHandler}>Banking</Link>
                        <Link id="4" to="/blog/insurance" style={category === "4" ? {fontWeight: 700, borderBottom: "1px solid #0c5a75"} :  {color: "#0c5a75"}} onClick={blogCategoryHandler}>Insurance</Link>
                    </div>
                </ul>
                <div className="search-wrapperbox">
                    <form onSubmit={ searchHandler } className="search-form" autoComplete="off">
                            <input id="search-input" onChange={textInputChange} value={searchText} className="search-input" type="text" placeholder="search articles..." name="search"></input>
                            <button type="submit" className="search-btn"><img src={search} alt=""></img></button>
                    </form>
                </div> 
            </header>
        </BlogNavComponentStyle>   
    )
}
export default BlogNavComponent;

