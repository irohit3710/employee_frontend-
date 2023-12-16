import React, { useEffect, useState } from "react";
import "./LeftNav.css";
import { axiosGet } from "../../axiosServices";

const LeftNav = ({ employeeId }) => {
  const [empById, setEmpById] = useState([]);

  const getEmployeeById = async () => {
    try {
      const res = await axiosGet(`/employee/${employeeId}`);
      setEmpById(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEmployeeById();
    // eslint-disable-next-line
  }, [employeeId]);

  return (
    <nav className="leftNav">
      {empById?.age && (
        <>
          <div className="employeeDetail">
            <h2>Exployee Detail</h2>
            <img src={empById.image} alt="profile" />
            <h1>
              {empById.firstname} {empById.lastname}
            </h1>
            <p>{empById.email}</p>
            <p>{empById.phone}</p>
            <p>{empById.age + "Years"}</p>
            <p>{"₹" + empById.salary}</p>
            <p>{"Role :" + empById.job}</p>
            <p className="date">{"Joining :" + empById.dateofjoining}</p>
          </div>
        </>
      )}
    </nav>
  );
};

export default LeftNav;
