import React from 'react';
import Box from "@mui/material/Box";
import LeftImg from "../../img/mainPage/mainPage1.png";
import LeftTextContainerView from "./LeftTextContainerView.jsx";
import {Stack} from "@mui/material";

const LeftSectionView = () => {
    return (
        <Box component="section" sx={{p: 2, minHeight:'700px'}}>
            <Stack spacing={3}>
                <LeftTextContainerView/>
                <Box
                    component="img"
                    alt="left Img"
                    src={LeftImg}
                    sx={{
                        width: '100%',
                    }}/>
            </Stack>
        </Box>
    );
}

export default LeftSectionView;