import React from "react";
import {Alert, Snackbar} from "@mui/material";
import {CheckIcon} from "lucide-react";
import PropTypes from "prop-types";

const SnackbarComponent = ({open, onClose, message, isSuccess}) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={() => onClose(false)}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        >
            <Alert variant="filled" sx={{fontFamily: '"Montserrat"'}} onClose={() => onClose(false)}
                   icon={isSuccess ? <CheckIcon fontSize="inherit"/> : null}
                   severity={isSuccess ? "success" : "error"}>
                {message}
            </Alert>
        </Snackbar>
    );
}

SnackbarComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string,
    isSuccess: PropTypes.bool,
}

export default SnackbarComponent;