import React from 'react';

import './Alert.sass'

const Alert = (props) => {
    return (
        <div className="alert">
            <p>{props.value}</p>
        </div>
    );
};

export default Alert;
