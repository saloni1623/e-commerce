import React from "react";
import { useDispatch } from "react-redux";
import { address, editAddress } from "./Redux/actions/action";

function AddModal({ add, handleInput ,handelSubmit, id}) {
  const dispatch = useDispatch();

  const submit = () => {
      if(id){
        const address = {add : add, id : id}
        dispatch(editAddress(address))
      }
      else{
        dispatch(address(add));
      }
    handelSubmit()
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h5 className="modal-title" id="exampleModalLabel">
              Add delivery address
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={add.fullname}
                    name="fullname"
                    onChange={handleInput}
                    className="form-control"
                    placeholder="Full Name (Required)*"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={add.number}
                    name="number"
                    onChange={handleInput}
                    className="form-control"
                    placeholder="Phone Number (Required)*"
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <div className="mb-4">
                    <input
                      type="text"
                      value={add.pincode}
                      name="pincode"
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Pincode (Required)*"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      value={add.state}
                      name="state"
                      onChange={handleInput}
                      className="form-control"
                      placeholder="State (Required)*"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={add.house}
                    name="house"
                    onChange={handleInput}
                    className="form-control"
                    placeholder="House No., Building Name (Required)*"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={add.road}
                    name="road"
                    onChange={handleInput}
                    className="form-control"
                    placeholder="Road name, Area, Colony (Required)*"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={submit}
            >
              Save Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
