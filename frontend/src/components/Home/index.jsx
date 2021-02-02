import React, {useState} from 'react';

//img
import filter from '../../assets/icons/filter.svg'
import search from '../../assets/icons/search.svg'
import location from '../../assets/icons/location.svg'

//css
import {HomeStyle} from '../Home/styles';
import {ConfigModalPageStyled} from '../Home/ConfigurationModal/styles';

//importing components
import ConfigModal from '../Home/ConfigurationModal';


const Home =()=>{

    const [openTaxConfig, setOpenTaxConfig] = React.useState(false);
    const taxConfigurationOpenButtonHandler = (e) => {
        e.preventDefault();
        setOpenTaxConfig(!openTaxConfig);
      };
    

    return(
        <div style={{position:"relative"}}>
        {openTaxConfig ? <ConfigModalPageStyled><ConfigModal taxConfigurationOpenButtonHandler={taxConfigurationOpenButtonHandler} /></ConfigModalPageStyled> : ""}

        <HomeStyle blur={openTaxConfig}>

            <div className="main-content">
                <div className="title-search-box">
                    <div className="main-title"> 
                        <h1>Where do you pay the lowest taxes in Switzerland?</h1>
                    </div>
                    <div class="search-wrapperbox">
                        <form onSubmit="" className="search-form">
                                <img src={location} height="25px" alt="" className="location-pic"></img>
                                <input className="search-input" type="text" placeholder="Check your city" name="search"></input>
                                <button type="submit" className="search-btn"><img src={search} height="18px" alt=""></img></button>
                        </form>
                    </div>
                </div>
                <div className="right-config-glimpse">
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
                </div>
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
