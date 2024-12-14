import React, {useEffect} from "react";
import {Box, Stack, useMediaQuery} from "@mui/material";
import StepImage from "../../components/steps/StepImage.jsx";
import Img from "../../img/resume/resume2.png";
import OrderSelectPhoneView from "../order/OrderSelectPhoneView.jsx";
import PropTypes from "prop-types";
import ResumeExperienceView from "./ResumeExperienceView.jsx";

const ResumeStep2View = ({
                             data,
                             block,
                             userCommunication,
                             setUserCommunication,
                             experience,
                             setExperience
                         }) => {

    const isLargeScreen = useMediaQuery('(min-height: 1024px)');

    useEffect(() => {
        if (userCommunication === '' || experience === '') {
            block(true)
        } else {
            block(false)
        }
    }, [experience, userCommunication]);

    return (
        <React.Fragment>
            <Box sx={{width: '60%'}}>
                <Stack spacing={2}>
                    <OrderSelectPhoneView
                        data={data}
                        userCommunication={userCommunication}
                        setUserCommunication={setUserCommunication}/>
                    <ResumeExperienceView experience={experience} setExperience={setExperience}/>
                </Stack>
            </Box>
            {isLargeScreen && <StepImage image={Img}/>}
        </React.Fragment>
    );
}

ResumeStep2View.propTypes = {
    data: PropTypes.array.isRequired,
    block: PropTypes.func,
    userCommunication: PropTypes.string,
    setUserCommunication: PropTypes.func,
    experience: PropTypes.string,
    setExperience: PropTypes.func,
}

export default ResumeStep2View;