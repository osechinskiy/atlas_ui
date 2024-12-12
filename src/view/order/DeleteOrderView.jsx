import React, {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {deleteOrder} from "../../service/orderService/orderService";
import {useNavigate} from "react-router-dom";

const DeleteOrderView = ({idOrder}) => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleDelete = () => {
        deleteOrder(idOrder).then(response => {
            if (response.status === 204) {
                setOpen(false);
                navigate(-1)
            }
        });
    };

    return (
        <React.Fragment>
            <Button variant="contained"
                    onClick={handleClickOpen}
                    sx={{
                        textTransform: 'none',
                        mr: 1,
                        backgroundColor: '#333333',
                        boxShadow: 'none'
                    }}
            >
                Удалить объявление
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    Подтверждение удаление объявления
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" gutterBottom>
                        Вы точно хотите удалить объявление? Восстановить объявление после удаления будет невозможно.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained"
                            onClick={handleDelete}
                            sx={{
                                width: '100%',
                                textTransform: 'none',
                                backgroundColor: '#333333',
                                boxShadow: 'none'
                            }}>
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

DeleteOrderView.propTypes = {
    idOrder: PropTypes.string.isRequired,
}

export default DeleteOrderView;