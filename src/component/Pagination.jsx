import React, { useEffect, useState } from 'react';
import './pagination.css'; 

const CustomPagination = ({ totalElements, currentPage, setCurrentPage, noOfDataPerPage, setNoOfDataPerPage }) => {
    const [totalPages, setTotalPages] = useState(1);
    const [paginationRange, setPaginationRange] = useState([]);
  
    useEffect(() => {
      const calculatedTotalPages = Math.ceil(totalElements / noOfDataPerPage);
      setTotalPages(calculatedTotalPages);
      generatePaginationRange(calculatedTotalPages);
    }, [totalElements, noOfDataPerPage, currentPage]);
  
    const generatePaginationRange = (totalPages) => {
      const pages = [];
      let startPage = currentPage;
      if (currentPage > totalPages - 2) {
        startPage = totalPages - 2;
      }
      for (let i = startPage; i <= totalPages && i <= startPage + 2; i++) {
        pages.push(i);
      }
      setPaginationRange(pages);
    };
  
    const changePage = (page) => {
      setCurrentPage(page);
    };
  
    const changeItemsPerPage = (e) => {
      const newItemsPerPage = parseInt(e.target.value);
      setNoOfDataPerPage(newItemsPerPage);
      setCurrentPage(1); 
    };
  
    const goToPreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const goToNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

  return (
    <div className="pagination-container">
      <div className="pagination-select">
        <select onChange={changeItemsPerPage} value={noOfDataPerPage}>
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="15">15 per page</option>
        </select>
      </div>
      <div>
        <button className="pagination-button" onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
        {paginationRange.map((page, index) => (
          <button
            key={index}
            onClick={() => changePage(page)}
            className={`pagination-button ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </button>
        ))}
        <button className="pagination-button" onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default CustomPagination;
