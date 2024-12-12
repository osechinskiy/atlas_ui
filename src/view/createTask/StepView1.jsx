import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Img from "../../img/steps/7.png"
import StepImage from "../../components/steps/StepImage.jsx";
import {Stack, useMediaQuery} from "@mui/material";
import OrderDescriptionView from "./OrderDescriptionView.jsx";
import OrderNameView from "./OrderNameView.jsx";
import PropTypes from "prop-types";
import OrderTypeView from "./OrderTypeView.jsx";

const StepView1 = ({
                       block,
                       orderCategory,
                       setOrderCategory,
                       orderName,
                       setOrderName,
                       orderDescription,
                       setOrderDescription
                   }) => {

    const isLargeScreen = useMediaQuery('(min-height: 1024px)');

    useEffect(() => {
        if (orderCategory === '' || orderName === '' || orderDescription === '') {
            block(true)
        } else {
            block(false)
        }
    }, [orderCategory, orderName, orderDescription]);


    return (
        <React.Fragment>
            <Box sx={{width: '60%'}}>
                <Stack spacing={2}>
                   <OrderTypeView orderCategory={orderCategory} setOrderCategory={setOrderCategory} />
                    <OrderNameView taskName={orderName}
                                   setTaskName={setOrderName}/>
                    <OrderDescriptionView description={orderDescription}
                                          setDescription={setOrderDescription}/>
                </Stack>
            </Box>
            {isLargeScreen && <StepImage image={Img}/>}
        </React.Fragment>
    );
}

StepView1.propTypes = {
    block: PropTypes.func,
    orderCategory: PropTypes.string,
    setOrderCategory: PropTypes.func,
    orderName: PropTypes.string,
    setOrderName: PropTypes.func,
    orderDescription: PropTypes.string,
    setOrderDescription: PropTypes.func,
}

export default StepView1;