import React from "react";
import MainContainerComponent from "../components/container/MainContainerComponent.jsx";
import {Stack, Box} from "@mui/material";
import BackButtonComponent from "../components/button/BackButtonComponent.jsx";
import CreateResumeSteps from "../view/createResume/CreateResumeSteps.jsx";

const CreateResumePage = () => {



    return (
        <MainContainerComponent>
            <Stack spacing={2} sx={{position: 'relative', height: '100%'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <BackButtonComponent/>
                </Box>
                <CreateResumeSteps/>
            </Stack>
        </MainContainerComponent>
    )
}

export default CreateResumePage;