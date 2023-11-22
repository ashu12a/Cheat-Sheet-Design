import React from "react";
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <div className="bg-slate-700 font-serif flex px-10 text-white">
      <div>
        <h1>
          {" "}
          <b>Hello Admin</b>
        </h1>
      </div>
      <div className="ml-auto">
        <Link to="/addcode"> Add Code</Link>
      </div>
    </div>
  );
}
