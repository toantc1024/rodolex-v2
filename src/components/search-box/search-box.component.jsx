import {Fragment} from 'react';
import './search-box.styles.css';

const SearchBox = ({showModal, hideModal, onSearchChange, placeholder, className}) => {
    return (
        <Fragment>
            <input  onClick={showModal}
                    className = {`search-box ${className}`} 
                    type = "search" 
                    placeholder = { placeholder }
                    onChange = { onSearchChange  }
            />
            <div className='input-container' onClick={  hideModal }>
            </div>
        </Fragment>
    )
}

export default SearchBox;