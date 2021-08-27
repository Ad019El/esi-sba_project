import Navbar from "./navbar";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <h1>search results here = {location.state}</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
