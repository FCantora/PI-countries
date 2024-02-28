/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
const Pagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentPageData(currentItems);
  }, [data, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber) => {
    const validPageNumber = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(validPageNumber);
  };

  const resetPage = () => {
    setCurrentPage(1);
  };


  return {
    currentPage,
    currentItems: currentPageData,
    nextPage,
    prevPage,
    resetPage,
    goToPage,
    totalPage: totalPages
  }
}

export default Pagination