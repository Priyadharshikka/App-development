import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';
import { Pagination } from '@mui/lab';
import axios from 'axios';
import './Homenew.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Home = () => {
  const nav = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 3;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllCostumes();
  }, [currentPage, sortBy, sortOrder]);

  const getAllCostumes = () => {
    axios
      .get(
        `http://localhost:8080/boutique/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`
      )
      .then((response) => {
        const { content, totalPages } = response.data;
        setEmployees(response.data);
        setTotalPages(totalPages);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const deleteCostumes = (employeeId) => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Sure to Delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            EmployeeService.deleteEmployee(employeeId)
              .then((response) => {
                getAllCostumes();
              })
              .catch((error) => {
                console.log(error);
              });
          }
        },
        {
          label: 'No'
        }
      ]
    });
  };

  const deleteAllCostume = () => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Sure to Delete All Costumes?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            EmployeeService.deleteAllCostume()
              .then((response) => {
                getAllCostumes();
              })
              .catch((error) => {
                console.log(error);
              });
          }
        },
        {
          label: 'No'
        }
      ]
    });
  };

  const LogoutHandler = () => {
    confirmAlert({
      title: 'Confirm Logout',
      message: 'Sure to Logout?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            nav('/');
          }
        },
        {
          label: 'No'
        }
      ]
    });
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div id="container">
      <h1 id="classy">Classy Messy</h1>
      <Link to="/add">
        <button id="addbtn">Add Costumes</button>
      </Link>
      <button id="delbtn" onClick={deleteAllCostume}>
        Delete All Costume
      </button>

      <table id="table">
        <thead>
          <tr>
            <th id="table-col" onClick={() => handleSort('id')}>
              Id {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th id="table-col" onClick={() => handleSort('type')}>
              types {sortBy === 'type' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th id="table-col" onClick={() => handleSort('bname')}>
              brand {sortBy === 'bname' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th id="table-col" onClick={() => handleSort('size')}>
              size {sortBy === 'size' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th id="table-col" onClick={() => handleSort('price')}>
              price {sortBy === 'price' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th id="table-col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.content &&
            employees.content.map((employee) => (
              <tr key={employee.id}>
                <th id="id"> {employee.id}</th>
                <th id="type"> {employee.type}</th>
                <th id="bname"> {employee.bname}</th>
                <th id="size"> {employee.size}</th>
                <th id="price"> {employee.price}</th>

                <th id="action">
                  <Link to={`/update/${employee.id}`}>
                    <button id="actions">Update</button>
                  </Link>
                  <button
                    id="action-del"
                    onClick={() => deleteCostumes(employee.id)}
                  >
                    Delete!
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
      <div id="page-change">
        <Pagination
          id="page"
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
      <button id="logout" onClick={LogoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Home;
