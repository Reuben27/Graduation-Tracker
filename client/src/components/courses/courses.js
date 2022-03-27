import React from "react";

function Courses() {
  return (
    <div className="bg-gray-500 p-10">
      <div className="flex justify-between max-w-4xl m-auto bg-slate-50 px-5 py-2 rounded-md">
        <button className="bg-green-500 hover:bg-green-700 m-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Courses
        </button>
        <button className="bg-green-500 hover:bg-green-700 m-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Paste Data
        </button>
      </div>
      <div class="fixTableHead overflow-y-auto h-36 bg-slate-100 max-w-4xl m-auto mt-5 rounded">
    <table className=" border-collapse w-full">
      <thead className=" sticky top-0 justify-around">
        <tr className="bg-gray-600">
          <th className="sticky p-2">Course ID</th>
          <th className="sticky p-2">Course Name</th>
          <th className="sticky p-2">Discipline</th>
          <th className="sticky p-2">Credit</th>
          
        </tr>
      </thead>
  
      <tbody>
        <tr>
          <td>MA 101</td>
          <td>Maths 3</td>
          <td>CSE</td>
          <td>4</td>
          
          
        </tr>
        <tr>
          <td>MA 101</td>
          <td>Maths 3</td>
          <td>CSE</td>
          <td>4</td>
        </tr>
        <tr>
          <td>MA 101</td>
          <td>Maths 3</td>
          <td>CSE</td>
          <td>4</td>
        </tr>
        <tr>
          <td>MA 101</td>
          <td>Maths 3</td>
          <td>CSE</td>
          <td>4</td>
        </tr>
        <tr>
        <td>MA 101</td>
          <td>Maths 3</td>
          <td>CSE</td>
          <td>4</td>
        </tr>
        <tr>
          <td>MA 101</td>
          <td>Maths 3</td>
          <td>CSE</td>
          <td>4</td>
        </tr>
        <tr>
          <td>MA 101</td>
          <td>Maths 3</td>
          <td>CSE</td>
          <td>4</td>
        </tr>
        <tr>
          <td>MA 101</td>
          <td>Maths 3</td>
          <td>CSE</td>
          <td>4</td>
        </tr>
        <tr>
        <td>MA 101</td>
          <td>Maths 3</td>
          <td>CSE</td>
          <td>4</td>
        </tr>
      </tbody>
        
    </table>
  </div>
      
    </div>
  );
}
export default Courses;
