import React, { useState } from 'react';
import { ConfigModalStyled } from './styles';
import DropDown from '../../Home/DropDownMenu/index';

//IMAGES
import CloseButton from '../../../assets/icons/x-icon.svg';
import Check from '../../../assets/icons/check.svg';


const ConfigModal = ({taxConfigurationOpenButtonHandler}) => {

    
    //SLIDER JS
    const slider = document.getElementById("slider")
    const selector = document.getElementById("selector")  
    const [partnerOneIncomeValue, setPartnerOneIncomeValue] = useState(10000);
    const [partnerTwoIncomeValue, setPartnerTwoIncomeValue] = useState(10000);
    const [partnerOneMaritalStatus, setPartnerOneMaritalStatus] = useState("Single");

    const partnerOneIncomeSliderOnChange = (e) => {
        console.log(e.target.value);
        setPartnerOneIncomeValue(e.target.value);
    }

    const partnerTwoIncomeSliderOnChange = (e) => {
        console.log(e.target.value);
        setPartnerTwoIncomeValue(e.target.value);
    }

    //AGE OF PARTNER FIELD
    const minAge = 18;
    const getYears = () => {
        let years = [];
        let currentYear = new Date().getFullYear();
        let earliestYear = 1920;
        while (currentYear >= earliestYear) {
        years.push(currentYear)
        currentYear -= 1
        } 
        return years;
    }    

    //MARITAL STATUS FIELD

    const partnerOneMaritalStatusSelector = (e) => {
        console.log(e.target.value);
        setPartnerOneMaritalStatus(e.target.value);
    }

    return (
         
        <ConfigModalStyled>
                <div className="close-button">
                    <button type="submit" className="x-closebutton" onClick={taxConfigurationOpenButtonHandler}><img src={CloseButton} className="x-button" alt=""></img></button>
                </div>
               {/*<DropDown/>*/}

                <div className="main-content">
                    <div className="main-header">
                        <p>Tax details</p>
                    </div>
                    <div className="slidecontainer">
                        <div className="text-n-numbers">
                            <label className="slidecontainer-label">Gross Income (Partner 1)</label>
                            <div className="underline">
                                <span className="cash-money">CHF</span>
                                <input type="text" value={partnerOneIncomeValue} className="text-field" onChange={partnerOneIncomeSliderOnChange}/>
                            </div>
                            </div> 
                    </div>
                    <div className="main">
                        <input type="range" min="10000" max="1000000" value={partnerOneIncomeValue} id="slider" onChange={partnerOneIncomeSliderOnChange}/>
                    </div>                  
                    {partnerOneMaritalStatus != "Single" ? 
                        <>
                            <div className="slidecontainer">
                                <div className="text-n-numbers">
                                    <label className="slidecontainer-label">Gross Income (Partner 2)</label>
                                    <div className="underline">
                                        <span className="cash-money-2">CHF</span>
                                        <input type="text" value={partnerTwoIncomeValue} id="text-field-2" className="text-field-2" onChange={partnerTwoIncomeSliderOnChange}/>
                                    </div>
                                </div>    
                            </div>
                        <div className="main-2">
                            <input type="range" min="10000" max="1000000" value={partnerTwoIncomeValue} id="slider-2" onChange={partnerTwoIncomeSliderOnChange}/> 
                        </div>  
                    </> 
                    : "" }      
                    {/*Section 1*/}
                    <div className="section-1">
                        <div className="year-of-birth-partner-one">
                            <div className="dropdown">
                                <label for="Category" className="category">Year of Birth (Partner 1)</label>
                                    <select className="required" name="category">
                                        {getYears().map((year, id) => <option value={year}>{year - minAge}</option>)}
                                    </select>
                            </div>        
                        </div>  
                        {partnerOneMaritalStatus != "Single" ? 
                        <>
                        <div className="year-of-birth-partner-two">
                            <label for="Category" className="category-2">Year of Birth (Partner 2)</label>
                                <select className="required-2" name="category">
                                {getYears().map((year, id) => <option value={year}>{year - minAge}</option>)}
                                </select>   
                        </div> 
                        </> 
                        : ""}
                   </div>
                </div>
                {/*Section 2*/}
                <div className="section-2">
                    <div className="dropdown">
                        <label for="Category" className="category">Marital Status</label>
                            <select className="required" id="status" onChange={partnerOneMaritalStatusSelector} name="category">
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Cohabitation">Cohabitation</option>
                            </select>
                    </div>  

                    <div className="dropdown-2">
                            <label for="Category" className="children">Number of children</label>
                                <input type="number" id="kids" className="required-2" name="tentacles" placeholder="0"
                                min="0" max="10"/>
                    </div>
                </div>

                {/*Section-3*/}
                <div className="section-3">      
                    <div className="dropdown">
                        <label for="Category" className="category">Church affiliation</label>
                            <select className="required" id="status" name="category">
                                <option value="Roman Catholic">Roman Catholic</option>
                                <option value="Protestant">Protestant</option>
                                <option value="2003">Christian Catholic</option>
                                <option value="2003">Other/None</option>
                            </select>
                    </div>  

                    <div className="dropdown-2">
                            <button className="apply-button">Apply<img src={Check}></img>
                            </button>
                    </div>
                </div>
               
        </ConfigModalStyled>      
    )
}

export default ConfigModal;
