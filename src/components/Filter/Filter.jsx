import React from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';

import './Filter.sass';

const Filter = ({
    grid,
    items,
    changeGridHandler,
    changeLimitHandler,
    optionsLimit,
}) => {

    if (!items) { return <div></div> }

    return (
        <div className="filter">
            <div className="filter_grid">
                <button className={"filter_btn" + (grid ? " active" : "")} onClick={() => changeGridHandler(!grid)}>
                    <FontAwesomeIcon icon={faTh} />
                </button>
                <button className={"filter_btn" + (!grid ? " active " : "")} onClick={() => changeGridHandler(!grid)}>
                    <FontAwesomeIcon icon={faThList} />
                </button>

            </div>
            <div className="filter_limit">
                <Select
                    className="filter_select"
                    classNamePrefix="select"
                    options={optionsLimit}
                    isSearchable={false}
                    defaultValue={optionsLimit[0]}
                    onChange={changeLimitHandler}
                />
            </div>

        </div>
    );
};

export default Filter;
