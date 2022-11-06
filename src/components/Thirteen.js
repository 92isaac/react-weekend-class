import React from "react";
import Button from "./Button";

const Thirteen = () => {
    

  return (
    <div className="form">
      <form action="">
        <div className="group">
          <div className="group1">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="email" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="password" />
            </div>
          </div>
          <div className="group2">
            <div className="form-group">
              <input type="password" placeholder="password" />
            </div>
            <div className="form-group">
              <input type="date" placeholder="" />
            </div>
            <div className="form-group">
              <input type="address" placeholder="Address" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Name" />
            </div>
          </div>
          <div className="btn-group"></div>
        </div>
        <Button btnName="Submit" className="form-btn" />
      </form>
    </div>
  );
};

export default Thirteen;
