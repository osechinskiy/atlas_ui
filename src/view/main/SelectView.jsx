import React from 'react';
import Divider from "@mui/material/Divider";
import LeftSectionView from "./LeftSectionView.jsx";
import RightSectionView from "./RightSectionView.jsx";
import {Grid2} from "@mui/material";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const SelectView = () => {
    return (
        <Grid2 container spacing={0} sx={{height: '100%', position: 'relative', alignItems: 'center'}}>
            <Grid2 size={6}>
                <LeftSectionView/>
                <Box sx={{p: 2}}>
                    <Button variant="contained"
                            component={Link} to={"/category"}
                            sx={{
                                textTransform: 'none',
                                backgroundColor: '#333333',
                                width: '100%',
                                boxShadow: 'none'
                            }}>
                        К выбору категорий
                    </Button>
                </Box>
            </Grid2>
            <Grid2 size={6}>
                <Box sx={{p: 2}}>
                    <RightSectionView/>
                    <Button variant="contained"
                            component={Link} to={"/create-task"}
                            sx={{
                                textTransform: 'none',
                                backgroundColor: '#333333',
                                width: '100%',
                                boxShadow: 'none'
                            }}>
                        К созданию заявки
                    </Button>
                </Box>
            </Grid2>
            <Divider orientation="vertical" variant="middle" flexItem
                     sx={{position: 'absolute', top: 10, left: '50%', height: '95%'}}/>
        </Grid2>
    )
}

export default SelectView;