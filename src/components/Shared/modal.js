import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const Modal = (props) => {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="form-dialog-title"
                fullWidth={true}
                maxWidth={props.size}
            >
                <DialogTitle id="form-dialog-title">{props.heading}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.subheading}
                    </DialogContentText>
                    {props.children}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Modal