//css
import { SettingsButtonStyle } from './styles';

//images
import filter from '../../assets/icons/filter.svg';


const SettingsButton = ({settingsButtonHandler}) => {
    return (                
        <SettingsButtonStyle onClick={settingsButtonHandler}><img src={filter} height="50px" className="filter" alt="manage config"></img></SettingsButtonStyle>                                      
    )
}

export default SettingsButton;
