import {useState} from 'react';
import Header from '../components/header';

const PlannerForm = () => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
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
        
      }
    
    
  return ( 
    <div>
    
    <form encType="multipart/form-data" id = "formyi" method="post" name="fileinfo" onSubmit={handleSubmit}>
      <label>username:</label>
      <input htmlFor= "username" type="text" name="username"   /><br />
      <label>password:</label>
      <input htmlFor = "password" type="text" name="password"/><br />
      <input type="submit" value="Stash the file!" />
    </form>
    <div></div>
  </div>
  );
}
 
export default PlannerForm;