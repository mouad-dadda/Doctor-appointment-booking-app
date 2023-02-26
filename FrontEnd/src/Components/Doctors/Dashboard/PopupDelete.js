import React from "react";
import "bootstrap/js/dist/modal.js";
import '../../Css/Doctors/Module.css';

const PopupDelete = (props) => {

  return (
    <div
      className="modal fade"
      id={`DeleteUser${props.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className=" modal_text ">
            <p>voulez-vous vraiment annuler ce rendez-vous {props.id} </p>
            <button
              type="button"
              className="btn-close btn_mr"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal_btn">
            <button
              type="button"
              className="ml_  btn_close "
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn_tabl  btn_bg_succes ">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDelete;
