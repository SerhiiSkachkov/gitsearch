import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import "./Loader.sass";

const Loader = () => {
    return (
        <div className="loader">
            <FontAwesomeIcon icon={faSpinner} size="4x" spin />
        </div>
    )
}
export default Loader;