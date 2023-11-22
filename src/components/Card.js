import React from "react";
import {  Link, useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();

  const loadDetail = (id)=>{  
    navigate('scode/'+id);
  }

  
  return (
    
    <div className="m-2 shadow-xl" onClick={()=>{loadDetail(props.id)}}>
      <Link 
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         {props.id} {props.title}
        </h6>
        
      </Link>
    </div>
  );
}
