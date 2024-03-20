import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Removeaddress } from "./Redux/actions/action";

function SavedAdd({ element, handleEdit }) {
  const dispatch = useDispatch();
  const [data, setdata] = useState();

    console.log(data)

  return (
    <div
      className="bg-info bg-opacity-25 p-3 d-flex "
      style={{ borderBottom: "1px solid lightgrey" }}
      onClick={(e)=>{setdata(e.target.id)}}
    >
        <div className="form-check form-check-inline" style={{ width: "5%" }}>
            <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id={element.id}
            defaultValue="option1"
            />
        </div>
        <label className="form-check-label" htmlFor={element.id} style={{ width: "90%", cursor:"pointer" }}>
            <div>
                <div className="d-flex justify-content-between">
                <h4>{element.add.fullname}</h4>
                <div className="d-flex justify-content-between" style={{width:"50px"}}>
                <span
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={()=>handleEdit(element.id)}
                >
                    📝
                </span>
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(Removeaddress(element.id))}
                >
                    ✖
                </span>
                </div>
                </div>
                <p>
                {element.add.house}, {element.add.road}, {element.add.state} -{" "}
                {element.add.pincode}
                </p>
                <p>{element.add.number}</p>
            </div>
        </label>
    </div>
  );
}

export default SavedAdd;
