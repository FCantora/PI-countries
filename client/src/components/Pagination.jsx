import { useState } from 'react'
const Pagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    }

    const goToPage = (pageNumber) => {
      if (pageNumber < 1) {
        pageNumber = 1;
      }
        setCurrentPage(pageNumber);
    }


  return {
    currentPage,
    currentItems,
    nextPage,
    prevPage,
    goToPage,
    totalPage: Math.ceil(data.length / itemsPerPage),
  }
}

export default Pagination