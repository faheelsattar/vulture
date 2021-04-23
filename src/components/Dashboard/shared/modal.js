import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const Modal = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={props.size}
        PaperProps={{ style: { backgroundColor: "#121212" } }}
      >
        {props.heading ? (
          <DialogTitle id="form-dialog-title">
            <h6 style={{ color: "#ffffff", fontWeight: "bold" }}>
              {props.heading}
            </h6>
          </DialogTitle>
        ) : null}
        <DialogContent>
          {props.subheading ? (
            <DialogContentText>
              <p style={{ color: "#ffffff", fontSize:"13px" }}>
                {props.subheading}
              </p>
            </DialogContentText>
          ) : null}
          {props.children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
