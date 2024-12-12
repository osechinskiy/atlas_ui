import React, {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from "prop-types";
import OrderTypeView from "../createTask/OrderTypeView.jsx";
import OrderNameView from "../createTask/OrderNameView.jsx";
import OrderDescriptionView from "../createTask/OrderDescriptionView.jsx";
import OrderAmountView from "../createTask/OrderAmountView.jsx";
import OrderStartDateView from "../createTask/OrderStartDateView.jsx";
import OrderSelectPhoneView from "./OrderSelectPhoneView.jsx";
import {findIdByPhone, getFullUserInfo} from "../../service/userService/userService";
import OrderAddressView from "../createTask/OrderAddressView.jsx";
import dayjs from "dayjs";
import {updateOrder} from "../../service/orderService/orderService";

const EditOrderView = ({data}) => {

    const [open, setOpen] = useState(false);
    const [orderCategory, setOrderCategory] = useState(data.category);
    const [orderDescription, setOrderDescription] = useState(data.description);
    const [orderName, setOrderName] = useState(data.title);
    const [orderAmount, setOrderAmount] = useState(data.amount);
    const [finishOrderDate, setFinishOrderDate] = useState(dayjs());
    const [userCommunication, setUserCommunication] = useState(data.clientPhone);
    const [userAddress, setUserAddress] = useState(data.address);
    const [userLocation, setUserLocation] = useState(data.location.split(',').map(cord => parseFloat(cord)));
    const userinfo = getFullUserInfo()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        let order = data;
        order.category = orderCategory;
        order.title = orderName;
        order.description = orderDescription;
        order.clientPhone = userCommunication;
        order.address = userAddress;
        order.location = userLocation.toString();
        order.desiredCompletionDate = finishOrderDate;
        order.amount = orderAmount;

        console.log(data)
        console.log(order)
        updateOrder(data.id, order).then(response => {
            if (response.status === 202) {
                setOpen(false);
            }
        });
    }

    useEffect(() => {
        setOrderCategory(data.category);
        setOrderName(data.title);
        setOrderDescription(data.description);
        setOrderAmount(data.amount);
        setUserAddress(data.address);
        setUserCommunication(findIdByPhone(userinfo.phoneNumbers, data.clientPhone));
        setFinishOrderDate(dayjs(data.desiredCompletionDate));
    }, [data])


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
                Редактировать объявление
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    Редактировать объявление
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
                    <Stack spacing={2} sx={{p: 1}}>
                        <OrderTypeView orderCategory={orderCategory} setOrderCategory={setOrderCategory}/>
                        <OrderNameView taskName={orderName} setName={setOrderName}/>
                        <OrderDescriptionView description={orderDescription} setDescription={setOrderDescription}/>
                        <OrderAmountView amount={orderAmount} setAmount={setOrderAmount}/>
                        <OrderStartDateView startDate={finishOrderDate} setStartDate={setFinishOrderDate}/>
                        <OrderSelectPhoneView
                            data={userinfo.phoneNumbers}
                            userCommunication={userCommunication}
                            setUserCommunication={setUserCommunication}
                        />
                        <OrderAddressView
                            location={userLocation}
                            address={userAddress}
                            setLocation={setUserLocation}
                            setAddress={setUserAddress}
                        />
                    </Stack>

                </DialogContent>
                <DialogActions>
                    <Button variant="contained"
                            onClick={handleSubmit}
                            sx={{
                                width: '100%',
                                textTransform: 'none',
                                backgroundColor: '#333333',
                                boxShadow: 'none'
                            }}>
                        Сохранить
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

EditOrderView.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        address: PropTypes.string,
        description: PropTypes.string,
        amount: PropTypes.number,
        desiredCompletionDate: PropTypes.string,
        clientPhone: PropTypes.string,
    }),
}

export default EditOrderView;