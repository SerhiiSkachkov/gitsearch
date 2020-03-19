import React from 'react';

import Header from "./components/Header/Header";
import Pagination from './components/Pagination/Pagination';
import Panels from './components/Panels/Panels';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';
import { useFetch } from './hooks/useFetch';

import './App.sass';

const App = () => {
    const {
        isLoaded,
        grid,
        items,
        search,
        totalCount,
        currentPage,
        lastPage,
        optionsLimit,
        fetchData,
        onChangeHandler,
        changeLimitHandler,
        changeGridHandler
    } = useFetch();

    return (
        <div className='app-wrapper'>
            <Header />

            <main className='main'>
                <div className="search">
                    <div className="container">

                        <SearchBar
                            search={search}
                            onChangeHandler={onChangeHandler}
                            searchHandler={fetchData}
                        />

                        <Filter
                            isLoaded={isLoaded}
                            grid={grid}
                            currentPage={currentPage}
                            items={items}
                            optionsLimit={optionsLimit}
                            changeGridHandler={changeGridHandler}
                            changeLimitHandler={changeLimitHandler}
                        />

                        <Panels
                            grid={grid}
                            search={search}
                            items={items}
                            isLoaded={isLoaded}
                            totalCount={totalCount}
                        />

                        {
                            items && lastPage &&
                            <Pagination
                                isLoaded={isLoaded}
                                lastPage={lastPage}
                                changePage={fetchData}
                                currentPage={currentPage}
                            />
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App;
