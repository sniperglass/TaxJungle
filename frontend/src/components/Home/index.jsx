import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { searchMapAction } from "../../store/actions/mapActions"

//img
import filter from '../../assets/icons/filter-inverted.svg'
import search from '../../assets/icons/search-inverted.svg'
import location from '../../assets/icons/location.svg'
import close from '../../assets/icons/x-icon-inverted.svg'

//css
import { HomeStyle } from '../Home/styles'
import { ConfigModalPageStyled } from '../Home/ConfigurationModal/styles'

//components
import Map from "./Map"
import SearchDropdown from './SearchDropdown'
import SettingsButton from '../SettingsButton'
import ConfigModal from '../Home/ConfigurationModal'


const Home =()=>{
    const taxConfiguration = useSelector(state => state.mapReducer.taxesConfiguration)
    const taxData = useSelector(state => state.mapReducer.taxes)
    const municipalities = taxData.map(mun => mun.gemeinde).sort()
    const dispatch = useDispatch()
    const [openTaxConfig, setOpenTaxConfig] = useState(false)
    const [options, setOptions] = useState(municipalities)
    const [showDropdown, setShowDropDown] = useState(false)
    const searchFormRef = useRef()

    const taxConfigOpenHandler = (e) => {
        e.preventDefault()
        setOpenTaxConfig(!openTaxConfig)
        searchCloseHandler(e)
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
        setOptions([])
        dispatch(searchMapAction(null))
    }

    return (
        <div style={{position:"relative"}}>
            {openTaxConfig ? <ConfigModalPageStyled><ConfigModal taxConfigOpenHandler={taxConfigOpenHandler} /></ConfigModalPageStyled> : null}
            <HomeStyle blur={openTaxConfig}>
                <div className="map-container"><Map /></div>
                <div className="main-content">
                    <div className="title-search-box">
                        <div className="main-title"> 
                            <h1>Where do you pay the lowest taxes in Switzerland?</h1>
                        </div>
                        <div className="search-wrapperbox">
                            <form ref={searchFormRef} onSubmit={searchSubmitHandler} className="search-form" autoComplete="off">
                                    <label htmlFor="search-input"><img src={location} alt="location" className="location-pic" draggable="false" /></label>
                                    <input id="search-input" className="search-input" type="text" placeholder="Check your city" name="search" onChange={searchHandler} />
                                    {showDropdown ?
                                        <button type="button" className="close-btn"><img src={close} alt="close search" onClick={searchCloseHandler} draggable="false" /></button> 
                                        : <button type="submit" className="search-btn"><img src={search} alt="search" height="18px" draggable="false" /></button>    
                                    }
                                    <SearchDropdown id="dropdown" options={options} visible={showDropdown} />
                            </form>
                        </div>
                    </div>
                    <div className="config-container">
                        <button className="config-btn" onClick={taxConfigOpenHandler}><img src={filter} className="filter" alt="change tax configuration" draggable="false" /></button>
                        <div className="config-box">
                            <p className="category">{`Gross Income ${taxConfiguration.zivilstand !== "Single" ? "(Partner 1)" : ""}`}</p>
                            <p className="chosen-by-user">{`CHF ${new Intl.NumberFormat().format(taxConfiguration.einkommen1)}`}</p>
                        </div>
                        {taxConfiguration.zivilstand !== "Single" ?
                            <div className="config-box">
                                <p className="category">Gross Income (Partner 2)</p>
                                <p className="chosen-by-user">{`CHF ${new Intl.NumberFormat().format(taxConfiguration.einkommen2)}`}</p>
                            </div> 
                            : null
                        }
                        <div className="config-box">
                            <p className="category">Status</p>
                            <p className="chosen-by-user">{`${taxConfiguration.zivilstand}`}</p>
                        </div>
                        <div className="config-box">
                            <p className="category">Children</p>
                            <p className="chosen-by-user">{`${taxConfiguration.kinder}`}</p>
                        </div>
                        <div className="blog-link-container">
                            <p>Do you have further questions regarding <span>taxes</span>, <span>renting</span>, <span>insurance</span> or <span>banking</span>?<br/>Then have a look at our <Link to="/blog">Blog</Link></p>
                        </div>
                    </div>
                </div>
                {/* <footer>
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
                </footer>  */}
            </HomeStyle>
        </div>
    )
}
export default Home;
