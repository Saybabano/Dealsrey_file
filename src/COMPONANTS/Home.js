import React, { useState } from 'react';
import './Home.css';

export default function Home() {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('employeedata');
    return storedData ? JSON.parse(storedData) : null;
  });
  


  const handleDelete = () => {
    localStorage.removeItem('employeedata');
    setData(null);
    alert('Employee data has been deleted.');
  };


  const handleEdit = () => {
    alert('Redirecting to edit form...');
    window.location.href = '/employee'; 
  };

  return (
    <div className="employee-data">
      {data ? (
        <div className="card">
          <div className='Details-heading'>
            <h5>Profile</h5>
            <h5>Name</h5>
            <h5>Email Id</h5>
            <h5>phone No.</h5>
            <h5>Designation</h5>
            <h5>Gender</h5>
            <h5>Course</h5>
          </div>
          <div className='Details'>
              {data.image && (
                <img src={data.image} alt="img" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
              )}
            <p>{data.name}</p>
            <p> {data.email}</p>
            <p>{data.number}</p>
            <p>{data.designation}</p>
            <p>{data.gender}</p>
            <p>
              {Object.keys(data.checkedOption).filter(key => data.checkedOption[key]).join(', ')}
            </p>
          </div>
          <div className="button-group">
              <button className="edit-btn" onClick={handleEdit}>Edit</button>
              <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
            
        </div>
      ) : (
        <p>No employee data available.</p>
      )}
    </div>
  );
}
