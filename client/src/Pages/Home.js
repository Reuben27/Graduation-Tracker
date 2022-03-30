import React from "react";
import {DropdownButton, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

const Home = (props) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NDgzNTU1Mjh9.PmQXzIlc-2ei6q2mts2z5qu95T_wYsmHBXlMMFpH19A");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8000/planner/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
        
  function add1() {
    $('#tablet tr:last').after('<tr><td>CS 602</td><td>Theory of computation</td><td>CSE</td><td>4</td></tr>');
  };
  function add2() {
    $('#tablet tr:last').after('<tr></tr>');
  };
  function add3() {
    $('#tablet tr:last').after('<tr></tr>');
  };

  return (
    <div className="bg-gray-500 p-10">
      <div className="flex justify-between max-w-4xl m-auto bg-slate-50 px-5 py-2 rounded-md">
      <DropdownButton id="dropdown-item-button" title="Add Courses" className=" m-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      <Dropdown.ItemText>Select Courses</Dropdown.ItemText>
      <Dropdown.Item id = "cs301" as="button" onClick={() => {add1()}}>CS 301</Dropdown.Item>
      <Dropdown.Item id = "cs102" as="button" onClick={() => {add2()}}>CS 102</Dropdown.Item>
      <Dropdown.Item id = "es104" as="button" onClick={() => {add3()}}>ES 104</Dropdown.Item>
      </DropdownButton>
       
      </div>
      <div class="fixTableHead overflow-y-auto h-36 bg-slate-100 max-w-4xl m-auto mt-5 rounded">
        <table className=" border-collapse w-full text-center">
          <thead className=" sticky top-0 justify-around">
            <tr className="bg-gray-600">
              <th className="sticky p-2">Course ID</th>
              <th className="sticky p-2">Course Name</th>
              <th className="sticky p-2">Discipline</th>
              <th className="sticky p-2">Credit</th>
            </tr>
          </thead>

          <tbody id="tablet">
            <tr>
              <td>CS 602</td>
              <td>Theory of computation</td>
              <td>CSE</td>
              <td>4</td>
            </tr>
            <tr>
              <td>CS 321</td>
              <td>Algorithm analysis and design</td>
              <td>CSE</td>
              <td>3</td>
            </tr>
            <tr>
              <td>CS 422</td>
              <td>Data Mining</td>
              <td>CSE</td>
              <td>4</td>
            </tr>
            <tr>
              <td>ES 112</td>
              <td>Computing</td>
              <td>EE</td>
              <td>4</td>
            </tr>
            <tr>
              <td>ES 612</td>
              <td>Artificial intelligence</td>
              <td>CSE</td>
              <td>4</td>
            </tr>
            <tr>
              <td>EE 404</td>
              <td>Embedded Systems</td>
              <td>EE</td>
              <td>4</td>
            </tr>
            <tr>
              <td>EE 617</td>
              <td>VLSI Design</td>
              <td>EE</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Home;