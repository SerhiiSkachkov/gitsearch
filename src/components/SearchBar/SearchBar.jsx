import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.sass';

const SearchBar = ({
    searchHandler,
    onChangeHandler,
    search,

}) => {
    return (
        <div className="search-bar">
            <div className="search-bar_control">
                <div className="search-bar_field">
                    <input
                        type="text"
                        placeholder="Search here ..."
                        value={search}
                        onChange={onChangeHandler}
                    />
                </div>
                <button 
                    className="search-bar_btn" 
                    disabled={!search && search === ""} 
                    onClick={() => searchHandler(1)}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
