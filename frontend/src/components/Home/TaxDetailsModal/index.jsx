//img
import close from '../../../assets/icons/x-icon.svg'
import tickCircle from '../../../assets/icons/tickCircle.svg'

//css
import {TaxDetailsModalStyle} from '../TaxDetailsModal/styles';

//components
import RowBoxComponent from '../../../components/Home/TaxDetailsModal/RowBoxComponent'


const TaxDetailsModal = () => {
    return(
        <TaxDetailsModalStyle>
            <div className="modal-container">
                <div className="closing-modal">
                    <button className="closing-btn" /* onClick={taxConfigOpenHandler} */><img src={close} className="x-button" alt="close" height="14px" width="14px" draggable="false" /></button>
                </div>
                <section className="main-tax-container">
                    <div className="left">
                        <p className="chosen-municipality">Kriens</p>
                        <span className="municip-text">With an income of CHF ..{} you would pay approximately CHF ..{} yearly taxes. This puts ..{} in the ..{}th place in the canton of ..{} and the ..{}th place in Switzerland</span>
                        <p className="all-taxes">All taxes</p>
                        <div className="taxes-overview">
                            <div className="left-tax">
                                <div className="tax-box">
                                    <img className="check-circle" src={tickCircle} height="32px" width="32px" alt=""></img>
                                    <p className="taxes">Municipal taxes</p>
                                    <p className="tax-amount">CHF ..{}</p>
                                </div>
                                <div className="tax-box">
                                    <img className="check-circle" src={tickCircle} height="32px" width="32px" alt=""></img>
                                    <p className="taxes">Federal taxes</p>
                                    <p className="tax-amount">CHF ..{}</p>
                                </div>
                            </div>
                            <div className="right-tax">
                                <div className="tax-box">
                                    <img className="check-circle" src={tickCircle} height="32px" width="32px" alt=""></img>
                                    <p className="taxes">Cantonal taxes</p>
                                    <p className="tax-amount">CHF ..{}</p>
                                </div>
                                <div className="tax-box">
                                    <img className="check-circle" src={tickCircle} height="32px" width="32px" alt=""></img>
                                    <p className="taxes">Church taxes</p>
                                    <p className="tax-amount">CHF ..{}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p className="top-municipalities">Top municipalities</p>
                        <div className="tax-data-maincontainer">
                            <div className="left-data">
                                <p className="municipality-country">in Luzern {}</p>
                                <section className="table-container">
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                </section>
                            </div>
                            <div className="right-data">
                                <p className="municipality-country">in Switzerland {}</p>
                                <section className="table-container">
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                    <RowBoxComponent/>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        </TaxDetailsModalStyle>
        
    )
}
export default TaxDetailsModal;
