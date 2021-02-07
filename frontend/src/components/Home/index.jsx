import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { searchMapAction } from "../../store/actions/mapActions"

//img
import filter from '../../assets/icons/filter.svg'
import search from '../../assets/icons/search.svg'
import location from '../../assets/icons/location.svg'
import close from '../../assets/icons/x-icon.svg'

//css
import { HomeStyle } from '../Home/styles'
import { ConfigModalPageStyled } from '../Home/ConfigurationModal/styles'

//components
import Map from "./Map"
import ConfigModal from '../Home/ConfigurationModal'
import DropDownMenu from './SearchDropdown'


const Home =()=>{
    const taxData = useSelector(state => state.mapReducer.taxes)
    const municipalities = taxData.map(mun => mun.gemeinde).sort()
    const dispatch = useDispatch()
    const [openTaxConfig, setOpenTaxConfig] = useState(false)
    const [options, setOptions] = useState(municipalities)
    const [showDropdown, setShowDropDown] = useState(false)
    const searchFormRef = useRef()

    const taxConfigurationOpenButtonHandler = (e) => {
        e.preventDefault()
        setOpenTaxConfig(!openTaxConfig)
    }

    const searchHandler = (e) => {
        const query = e.target.value.toLowerCase()
        setShowDropDown(query.length)
        setOptions(municipalities.filter(mun => mun.toLowerCase().startsWith(query)))
    }

    const searchSubmitHandler = (e) => {
        e.preventDefault()
        if (options.length === 1) {
            const mun = taxData.filter(mun => mun.gemeinde === options[0])[0]
            dispatch(searchMapAction(mun))
        } else {
            dispatch(searchMapAction(null))
        }
    }

    const searchCloseHandler = (e) => {
        e.preventDefault()
        searchFormRef.current.reset()
        setShowDropDown(false)
        dispatch(searchMapAction(null))
        setOptions([])
    }

    return (
        <div style={{position:"relative"}}>
            {openTaxConfig ? <ConfigModalPageStyled><ConfigModal taxConfigurationOpenButtonHandler={taxConfigurationOpenButtonHandler} /></ConfigModalPageStyled> : ""}
            <HomeStyle blur={openTaxConfig}>
                <div className="map-container"><Map /></div>
                <div className="main-content">
                    <div className="title-search-box">
                        <div className="main-title"> 
                            <h1>Where do you pay the lowest taxes in Switzerland?</h1>
                        </div>
                        <div className="search-wrapperbox">
                            <form ref={searchFormRef} onSubmit={searchSubmitHandler} className="search-form" autoComplete="off">
                                    <label htmlFor="search-input"><img src={location} alt="" className="location-pic"></img></label>
                                    <input id="search-input" className="search-input" type="text" placeholder="Check your city" name="search" onChange={searchHandler} />
                                    {showDropdown ?
                                        <button type="button" className="close-btn"><div><img src={close} alt="close" onClick={searchCloseHandler}></img></div></button> :
                                        <button type="submit" className="search-btn"><img src={search} alt="search" height="18px"></img></button>    
                                    }
                                    <DropDownMenu id="dropdown" options={options} visible={showDropdown} />
                            </form>
                        </div>
                    </div>
                    {/* <div className="right-container"> */}
                        <div className="config-container">
                            <button type="submit" className="config-btn" onClick={taxConfigurationOpenButtonHandler}><img src={filter} height="50px" className="filter" alt="manage config"></img></button>
                            <div className="config-box">
                                <p className="category">Income</p>
                                <p className="chosen-by-user">CHF 100'000</p>
                            </div>
                            <div className="config-box">
                                <p className="category">Status</p>
                                <p className="chosen-by-user">Single</p>
                            </div>
                            <div className="config-box">
                                <p className="category">Children</p>
                                <p className="chosen-by-user">0</p>
                            </div>
                            <div className="blog-link-container">
                                <p>If you have further questions regarding taxes, renting, banking or insurance, then have a look at our  <Link to="/blog">Blog</Link></p>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                <footer>
                    <div className="footer-bar-left">
                        <p className="made-by">made</p>
                        <p className="made-by">by</p>
                        <div className="company">
                            <p className="keen">keen</p>
                            <p className="underscore">_</p>
                        </div>
                    </div>
                    <div className="footer-bar-right">
                        <a href="https://taxjungle.ch/ch-en/calculation">Calculation methodology</a>
                        <a href="https://taxjungle.ch/ch-en/api">API</a>
                        <a href="https://taxjungle.ch/ch-en/terms-and-conditions">Terms of Use</a>
                        <a href="https://taxjungle.ch/ch-en/data-protection">Privacy Policy</a>
                        <a href="https://taxjungle.ch/ch-en/about">We are Keen</a>
                    </div>
                </footer> 
            </HomeStyle>
        </div>
    )
}
export default Home;
