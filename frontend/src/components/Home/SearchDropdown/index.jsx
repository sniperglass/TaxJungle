import { DropDownStyled } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { searchMapAction } from '../../../store/actions/mapActions'


const SearchDropdown = (props) => {
    const taxes = useSelector(state => state.mapReducer.taxes) 
    const dispatch = useDispatch()

    const onOptionClicked = (e) => {
        const mun = taxes.filter(mun => mun.gemeinde === e.target.id)[0]
        dispatch(searchMapAction(mun))
    }

    return (
        <DropDownStyled>
            {props.visible ? 
            <div className="dropdown">
                <div id="border-wrapper">
                    <ul id="border">
                        {props.options.map((option, index) => (
                            <div className="selection" key={index} id={option} onClick={onOptionClicked}>{option}</div>
                        ))}
                    </ul>   
                </div>
            </div> : ""}
        </DropDownStyled> 
    )
}

export default SearchDropdown;

