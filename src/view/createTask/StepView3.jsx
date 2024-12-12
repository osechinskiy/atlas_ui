import React, {useEffect} from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import {Stack, useMediaQuery} from "@mui/material";
import StepImage from "../../components/steps/StepImage.jsx";
import Img from "../../img/steps/8.png";
import OrderSelectPhoneView from "../order/OrderSelectPhoneView.jsx";
import OrderAddressView from "./OrderAddressView.jsx";

const StepView3 = ({
                       data,
                       block,
                       userCommunication,
                       address,
                       location,
                       setUserCommunication,
                       setAddress,
                       setLocation
                   }) => {

    const isLargeScreen = useMediaQuery('(min-height: 1024px)');

    useEffect(() => {
        if (userCommunication === '' || address === '') {
            block(true)
        } else {
            block(false)
        }
    }, [address, userCommunication]);

    return (
        <Box sx={{width: '60%'}}>
            <Stack spacing={2}>
                <OrderSelectPhoneView
                    data={data}
                    userCommunication={userCommunication}
                    setUserCommunication={setUserCommunication}/>
                <OrderAddressView
                    address={address}
                    setAddress={setAddress}
                    setLocation={setLocation}
                    location={location}
                />
            </Stack>
            {isLargeScreen && <StepImage image={Img}/>}
        </Box>
    );
}

StepView3.propTypes = {
    data: PropTypes.array,
    block: PropTypes.func,
    userCommunication: PropTypes.string,
    address: PropTypes.string,
    location: PropTypes.array,
    setUserCommunication: PropTypes.func,
    setAddress: PropTypes.func,
    setLocation: PropTypes.func
}

export default StepView3;