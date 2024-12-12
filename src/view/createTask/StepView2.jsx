import React, {useEffect} from 'react';

import StepImage from "../../components/steps/StepImage.jsx";
import Img from "../../img/steps/2.png"
import Box from "@mui/material/Box";
import {Stack, useMediaQuery} from "@mui/material";
import OrderStartDateView from "./OrderStartDateView.jsx";
import OrderAmountView from "./OrderAmountView.jsx";
import PropTypes from "prop-types";

const StepView2 = ({
                       block,
                       amount,
                       setAmount,
                       startDate,
                       setStartDate
                   }) => {

    const isLargeScreen = useMediaQuery('(min-height: 1024px)');

    useEffect(() => {
        if (amount === '') {
            block(true)
        } else {
            block(false)
        }
    }, [amount, startDate])

    return (
        <React.Fragment>
            <Box sx={{width: '60%'}}>
                <Stack spacing={2}>
                    <OrderStartDateView startDate={startDate}
                                        setStartDate={setStartDate}/>
                    <OrderAmountView amount={amount}
                                     setAmount={setAmount}/>
                </Stack>
            </Box>
            {isLargeScreen && <StepImage image={Img}/>}
        </React.Fragment>
    );
}

StepView2.propTypes = {
    address: PropTypes.string,
    setAddress: PropTypes.func,
    location: PropTypes.array,
    setLocation: PropTypes.func,
    amount: PropTypes.number,
    setAmount: PropTypes.func,
    startDate: PropTypes.object,
    setStartDate: PropTypes.func,
    block: PropTypes.func,
}

export default StepView2;