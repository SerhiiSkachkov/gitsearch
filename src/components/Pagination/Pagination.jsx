import React from 'react';
import './Pagination.sass';

const Pagination = ({
    isLoaded,
    lastPage,
    changePage,
    currentPage
}) => {
    const pageNumbers = [];

    if (![1, 2, 3, lastPage, lastPage - 1, lastPage - 2].includes(currentPage)) {
        pageNumbers.push(1, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, lastPage);
    } else {
        let start;
        let end;

        if (currentPage === 1) {
            start = 0;
            end = 6;
        } else if (currentPage === 2) {
            start = -1;
            end = 5;
        } else if (currentPage === 3) {
            start = -2;
            end = 4;
        } else if (currentPage === lastPage || currentPage > lastPage) {
            pageNumbers.push(1);

            start = -5;
            end = 0;
        } else if (currentPage === lastPage - 1) {
            pageNumbers.push(1);

            start = -4;
            end = 1;
        } else if (currentPage === lastPage - 2) {
            pageNumbers.push(1);

            start = -3;
            end = 2;
        }

        for (let j = start; j < end; j++) {
            pageNumbers.push(currentPage + j);
        }

        pageNumbers.push(lastPage);
    }
    if (isLoaded) {
        return (
            null
        )
    }
    return (
        <div className="pagination">
            {
                pageNumbers.map(number => (
                    <button key={number}
                        className={"pagination_btn" + (currentPage === number ? " active " : "")}
                        onClick={() => changePage(number)}
                    >
                        {number}
                    </button>
                ))
            }
        </div>
    )
}
export default Pagination;