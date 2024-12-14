import React, {useEffect} from "react";
import PropTypes from "prop-types";
import OrderTypeView from "../createTask/OrderTypeView.jsx";
import {Stack, Box, useMediaQuery} from "@mui/material";
import OrderNameView from "../createTask/OrderNameView.jsx";
import OrderDescriptionView from "../createTask/OrderDescriptionView.jsx";
import StepImage from "../../components/steps/StepImage.jsx";
import Img from "../../img/resume/resume1.png";

const ResumeStep1View = ({
                             block,
                             name,
                             setName,
                             title,
                             setTitle,
                             category,
                             setCategory,
                         }) => {

    const isLargeScreen = useMediaQuery('(min-height: 1024px)');

    useEffect(() => {
        if (category === '' || name === '' || title === '') {
            block(true)
        } else {
            block(false)
        }
    }, [category, name, title]);

    return (
        <React.Fragment>
            <Box sx={{width: '60%'}}>
                <Stack spacing={2}>
                    <OrderTypeView orderCategory={category} setOrderCategory={setCategory}/>
                    <OrderNameView taskName={name} setTaskName={setName}/>
                    <OrderDescriptionView description={title} setDescription={setTitle}/>
                </Stack>
            </Box>
            {isLargeScreen && <StepImage image={Img}/>}
        </React.Fragment>
    );
}

ResumeStep1View.propTypes = {
    block: PropTypes.func,
    name: PropTypes.string,
    setName: PropTypes.func,
    title: PropTypes.string,
    setTitle: PropTypes.func,
    category: PropTypes.string,
    setCategory: PropTypes.func,

}

export default ResumeStep1View;