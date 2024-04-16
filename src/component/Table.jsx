import React, { useState } from 'react'
import Pagination from './Pagination'

const Table = (props) => {
  const totalElements = 1000; // Total number of elements
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [noOfDataPerPage, setNoOfDataPerPage] = useState(5);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">SignUp Date</th>

          </tr>
        </thead>
        <tbody>
          {
            props?.users.map((item) => {
              return (
                <tr>
                  <th scope="row">{item?.id}</th>
                  <td>{item?.fullName}</td>
                  <td>{item?.fullMobileNo}</td>
                  <td>{item?.email}</td>
                  <td>{item?.signupDate}</td>
                </tr>
              )
            })
          }



        </tbody>
      </table>

      <Pagination
        totalElements={totalElements}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noOfDataPerPage={noOfDataPerPage}
        setNoOfDataPerPage={setNoOfDataPerPage}
      />
    </div>
  )
}

export default Table
