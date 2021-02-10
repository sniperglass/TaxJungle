import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { configureTaxesAction, fetchTaxes } from "../../../store/actions/mapActions"

//components
import ConfigDropdown from './ConfigDropdown/index'

//css
import { ConfigModalStyled } from './styles'

//IMAGES
import CloseButton from '../../../assets/icons/x-icon.svg'
import Check from '../../../assets/icons/check.svg'


const ConfigModal = ({taxConfigOpenHandler}) => {
    const currentConfig = useSelector(state => state.mapReducer.taxesConfiguration)
    const [partnerOneIncome, setpartnerOneIncome] = useState(currentConfig.einkommen1)
    const [partnerTwoIncome, setpartnerTwoIncome] = useState(currentConfig.einkommen2 ? currentConfig.einkommen2 : 100000)
    const [partnerOneBirthYear, setPartnerOneBirthYear] = useState(currentConfig.jahrgang1)
    const [partnerTwoBirthYear, setPartnerTwoBirthYear] = useState(currentConfig.jahrgang2 ? currentConfig.jahrgang2 : 1990)
    const [maritalStatus, setMaritalStatus] = useState(currentConfig.zivilstand)
    const [numberOfChildren, setNumberOfChildren] = useState(currentConfig.kinder)
    const [churchAffiliation, setChurchAffiliation] = useState(currentConfig.kirche)

    const [activeDropdown, setActiveDropdown] = useState("")
    const dispatch = useDispatch()

    const dropdownHandler = (title) => {
        setActiveDropdown(title)
    }

    const partnerOneIncomeSliderOnChange = (e) => {
        setpartnerOneIncome(e.target.value);
    }

    const partnerTwoIncomeSliderOnChange = (e) => {
        setpartnerTwoIncome(e.target.value);
    }

    const minAge = 18
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

    const maritalStatusOptions = ["Single", "Married", "Cohabitation"]
    const churchAffiliationOptions = ["Roman Catholic", "Protestant", "Christian Catholic", "Other / None"]
    
    const applyHandler = (e) => {
        const config = {
            einkommen1: partnerOneIncome,
            einkommen2: maritalStatus !== "Single" ? partnerTwoIncome : null,
            jahrgang1: partnerOneBirthYear,
            jahrgang2: maritalStatus !== "Single" ? partnerTwoBirthYear : null,
            zivilstand: maritalStatus,
            kinder: numberOfChildren,
            kirche: churchAffiliation,
            plz: 0,
        }

        let queryString = ""
        for (let [key, value] of Object.entries(config)) {
            if (value === null) {continue}
            if (key === "zivilstand") {
                value = maritalStatusOptions.indexOf(value)
            }
            if (key === "kirche") {
                value = churchAffiliationOptions.indexOf(value)
            }
            queryString += `${key}=${value}`
            if (key !== "plz") {
                queryString += "&"
            }
        }

        dispatch(configureTaxesAction(config)) 
        dispatch(fetchTaxes(queryString)) 
        taxConfigOpenHandler(e) 
    }

    return (
        <ConfigModalStyled>
            <div className="close-button">
                <button className="x-closebutton" onClick={taxConfigOpenHandler}><img src={CloseButton} className="x-button" alt="close configuration" draggable="false" /></button>
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
                            <input type="text" value={partnerOneIncome} className="text-field" onChange={partnerOneIncomeSliderOnChange}/>
                        </div>
                        </div> 
                </div>
                <div className="main">
                    <input type="range" min="10000" max="1000000" step="100" value={partnerOneIncome} id="slider" onChange={partnerOneIncomeSliderOnChange}/>
                </div>                  
                {maritalStatus !== "Single" ? 
                    <>
                        <div className="slidecontainer">
                            <div className="text-n-numbers">
                                <label className="slidecontainer-label">Gross Income (Partner 2)</label>
                                <div className="underline">
                                    <span className="cash-money-2">CHF</span>
                                    <input type="text" value={partnerTwoIncome} id="text-field-2" className="text-field-2" onChange={partnerTwoIncomeSliderOnChange}/>
                                </div>
                            </div>    
                        </div>
                        <div className="main-2">
                            <input type="range" min="10000" max="1000000" step="100" value={partnerTwoIncome} id="slider-2" onChange={partnerTwoIncomeSliderOnChange}/> 
                        </div>  
                    </> 
                : null}   

                {/*Section 1*/}
                <div className="section-1">
                    <div className="year-of-birth">
                            <label>Year of Birth (Partner 1)</label>
                            <ConfigDropdown title="yearOne" options={getYears()} optionClickHandler={setPartnerOneBirthYear} initialValue={partnerOneBirthYear} activeHandler={dropdownHandler} visible={activeDropdown === "yearOne"} />
                    </div> 
                    {maritalStatus !== "Single" ? 
                        <div className="year-of-birth">
                            <label>Year of Birth (Partner 2)</label>
                            <ConfigDropdown title="yearTwo" options={getYears()} optionClickHandler={setPartnerTwoBirthYear} initialValue={partnerTwoBirthYear} activeHandler={dropdownHandler} visible={activeDropdown === "yearTwo"} />
                        </div> 
                    : null}
                </div>

                {/*Section 2*/}
                <div className="section-2">
                    <div className="marital-status">
                        <label>Marital Status</label>
                        <ConfigDropdown title="status" options={maritalStatusOptions} optionClickHandler={setMaritalStatus} initialValue={maritalStatus} activeHandler={dropdownHandler} visible={activeDropdown === "status"} />
                    </div>  
                    <div className="children">
                        <label>Number of children</label>
                        <ConfigDropdown title="children" options={[...Array(21).keys()]} optionClickHandler={setNumberOfChildren} initialValue={numberOfChildren} activeHandler={dropdownHandler} visible={activeDropdown === "children"} />
                    </div> 
                </div>

                {/*Section-3*/}
                <div className="section-3">      
                    <div className="church-affiliation">
                        <label>Church affiliation</label>
                        <ConfigDropdown title="church" options={churchAffiliationOptions} optionClickHandler={setChurchAffiliation} initialValue={churchAffiliation} activeHandler={dropdownHandler} visible={activeDropdown === "church"} />
                    </div>  
                    <button className="apply-button" onClick={applyHandler} >Apply<img src={Check} alt="apply configuration" /></button>
                </div>
            </div>
        </ConfigModalStyled>      
    )
}

export default ConfigModal
