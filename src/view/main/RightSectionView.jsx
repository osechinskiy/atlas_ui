import React from 'react';
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import RightImg from "../../img/mainPage/2.png";
import RightTextContainer from "./RiightTextContainerView.jsx";

const RightSectionView = () => {
    return (
        <Box component="section" sx={{p: 2, minHeight:'700px'}}>
            <Stack spacing={7}>
                <Box
                    component="img"
                    alt="left Img"
                    src={RightImg}
                    sx={{
                        width: '100%',
                    }}/>
                <RightTextContainer/>
            </Stack>
        </Box>
    );
}

export default RightSectionView;