import React from "react";
import "./Tenth.css";
import estherImage from "../images/5.avif";
import TenthProp from "./TenthProp";

const Tenth = () => {
  return (
    <div>
      <div className="card-wrap">
        <TenthProp
        displayImg={estherImage}
        name='Esther Okoh'
        sex="Female"
        title="Full stack Developer"
         />
        <TenthProp
        displayImg={estherImage}
        name='Esther Okoh'
        sex="Female"
        title="Full stack Developer"
         />
        <TenthProp
        displayImg={estherImage}
        name='Esther Okoh'
        sex="Female"
        title="Full stack Developer"
         />
        <TenthProp
        displayImg={estherImage}
        name='Esther Okoh'
        sex="Female"
        title="Full stack Developer"
         />
      </div>
    </div>
  );
};

export default Tenth;
