import React from "react"
import {useFormik} from 'formik'
import { FormValidation } from "../helper/validation";
import {AddCodeData} from '../../../services/api';

export default function AddCode() {
  const formik = useFormik({
    initialValues:{
      title:'',
      language:'',
      code:``
    },
    validate:FormValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values=>{
      AddCodeData(values);
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-3/5 text-center m-auto flex">
          <input
          {...formik.getFieldProps('title')}
            type="text"
            className="border border-slate-600 rounded w-full px-2 py-1"
            placeholder="Title"
          />
          <select name="language" {...formik.getFieldProps('language')} id="language" className="border font-mono border-slate-600 rounded mx-4" >
            <option value="python">PYTHON</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="jsx">JSX</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="php">PHP</option>
          </select>
        </div>
        <br />
        <div className="m-auto  text-center">
          <textarea
          {...formik.getFieldProps(`code`)}
            rows="15"
            
            className="border border-slate-600 w-3/5 rounded bg-gray-800 text-white px-2 py-1"
            placeholder="Type here ..."
          ></textarea>
        </div><br />
        <div className="text-center">
          <button type="Submit" value="Submit" id="submit" className="px-4 py-1 bg-pink-600 text-white rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  );
}
