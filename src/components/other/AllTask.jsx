import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-48 overflow-auto">
      {authData.employees.map(function (elem) {
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
          <h2 className="w-1/5 bg-red-600">{elem.firstName}</h2>
          <h3 className="w-1/5 bg-red-600">Make a UI Design</h3>
          <h5 className="w-1/5 bg-red-600">Status</h5>
        </div>;
      })}
    </div>
  );
};

export default AllTask;
