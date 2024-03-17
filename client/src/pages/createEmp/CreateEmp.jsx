import React from "react";
import Header from "../../components/header/Header";
import './CreateEmp.css'
function CreateEmp() {
  return (
    <div className="createEmp">
      <Header />
      <div className="cm-input">
        <div>
          <label htmlFor="about">Name:</label>
          <input type="text" id="about" />
        </div>
        <div>
          <label htmlFor="address">Email:</label>
          <input type="text" id="address" />
        </div>
        <div>
          <label htmlFor="name">Mobile Number:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="role">Designation:</label>
          <select id="role">
            <option value="hr">HR</option>
            <option value="manager">Manager</option>
            <option value="sales">Sales</option>
          </select>
        </div>
        <div className="cm-genderCourse">
          <label>Gender:</label>
          <div>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="cm-genderCourse">
          <label >Course:</label>
          <div>
            <input type="checkbox" id="mca" value="MCA" />
            <label htmlFor="mca">MCA</label>
          </div>
          <div>
            <input type="checkbox" id="bca" value="BCA" />
            <label htmlFor="bca">BCA</label>
          </div>
          <div>
            <input type="checkbox" id="bsc" value="BSC" />
            <label htmlFor="bsc">BSC</label>
          </div>
        </div>
        <div>
          <label htmlFor="profilePicture">Img Upload:</label>
          <input type="file" id="profilePicture" accept="image/png, image/jpeg" />
        </div>
        <div className="cm-btn">
        <button type="submit">Submit</button>

        </div>
      </div>
    </div>
  );
}

export default CreateEmp;
