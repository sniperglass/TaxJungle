import { useState, useRef, useEffect } from 'react';
import { ConfigModalStyled } from './styles';
import ConfigDropdown from './ConfigDropdown/index';

//IMAGES
import CloseButton from '../../../assets/icons/x-icon.svg';
import Check from '../../../assets/icons/check.svg';


const ConfigModal = ({taxConfigurationOpenButtonHandler}) => {
    const [partnerOneIncomeValue, setPartnerOneIncomeValue] = useState(10000);
    const [partnerTwoIncomeValue, setPartnerTwoIncomeValue] = useState(10000);
    const [partnerOneMaritalStatus, setPartnerOneMaritalStatus] = useState("Single");
    const [activeDropdown, setActiveDropdown] = useState("")

    const dropdownHandler = (title) => {
        setActiveDropdown(title)
    }

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
        let currentYear = new Date().getFullYear() - minAge;
        let earliestYear = 1920;
        while (currentYear >= earliestYear) {
            years.push(currentYear)
        currentYear -= 1
        } 
        return years;
    }    

    //MARITAL STATUS FIELD
    const partnerOneMaritalStatusSelector = (status) => {
        setPartnerOneMaritalStatus(status);
    }

    return (
         
        <ConfigModalStyled>
            <div className="close-button">
                <button type="submit" className="x-closebutton" onClick={taxConfigurationOpenButtonHandler}><img src={CloseButton} className="x-button" alt=""></img></button>
            </div>
            <div className="main-content">
                {/*Sliders*/}
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
                : null}   

                {/*Section 1*/}
                <div className="section-1">
                    <div className="year-of-birth">
                            <label>Year of Birth (Partner 1)</label>
                            <ConfigDropdown title="yearOne" options={getYears()} activeHandler={dropdownHandler} visible={activeDropdown === "yearOne"} />
                    </div> 
                    {partnerOneMaritalStatus != "Single" ? 
                        <div className="year-of-birth">
                            <label>Year of Birth (Partner 2)</label>
                            <ConfigDropdown title="yearTwo" options={getYears()} activeHandler={dropdownHandler} visible={activeDropdown === "yearTwo"} />
                        </div> 
                    : null}
                </div>

                {/*Section 2*/}
                <div className="section-2">
                    <div className="marital-status">
                        <label>Marital Status</label>
                        <ConfigDropdown title="status" options={["Single", "Married", "Cohabitation"]} optionClickHandler={partnerOneMaritalStatusSelector} activeHandler={dropdownHandler} visible={activeDropdown === "status"} />
                    </div>  
                    {/* <div className="children">
                        <label>Number of children</label>
                        <input type="number" className="required" placeholder="0" min="0" />
                    </div> */}
                    <div className="children">
                        <label>Number of children</label>
                        <ConfigDropdown title="children" options={[...Array(21).keys()]} activeHandler={dropdownHandler} visible={activeDropdown === "children"} />
                    </div> 
                </div>

                {/*Section-3*/}
                <div className="section-3">      
                    <div className="church-affiliation">
                        <label>Church affiliation</label>
                        <ConfigDropdown title="church" options={["Roman Catholic", "Protestant", "Christian Catholic", "Other / None"]} activeHandler={dropdownHandler} visible={activeDropdown === "church"} />
                    </div>  
                        <button className="apply-button">Apply<img src={Check}></img></button>
                </div>
            </div>
        </ConfigModalStyled>      
    )
}

export default ConfigModal;
