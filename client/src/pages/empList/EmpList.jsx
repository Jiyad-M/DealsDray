import React from 'react';
import './EmpList.css'
import pro from '../../stocks/logo.jpg'
import Header from '../../components/header/Header.jsx'



function DisplayIdCards() {
  // Mock data for demonstration
  const idCardsData = [
    {photo:pro, id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', designation: 'Developer', gender: 'Male', education: 'MCA' },
    {photo:pro, id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', designation: 'Developer', gender: 'Male', education: 'MCA' },
    {photo:pro, id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', designation: 'Developer', gender: 'Male', education: 'MCA' },
    {photo:pro, id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', designation: 'Developer', gender: 'Male', education: 'MCA' },
    {photo:pro, id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', designation: 'Developer', gender: 'Male', education: 'MCA' },
    {photo:pro, id: 1, name: 'John Doe', email: 'john@example.com', mobile: '1234567890', designation: 'Developer', gender: 'Male', education: 'MCA' },
    
    // Add more data as needed
  ];

  return (
    <div className="table-container">
      <Header/>
      <table className="idCard-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {idCardsData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td><img src={data.photo} alt="" /></td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>{data.designation}</td>
              <td>{data.gender}</td>
              <td>{data.education}</td>
              <td className='el-btn'>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayIdCards;
