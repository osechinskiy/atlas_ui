import React, {useEffect} from "react";
import {Box, Grid2, Stack, useMediaQuery} from "@mui/material";
import Typography from "@mui/material/Typography";
import {geOrderTypesTitle} from "../../service/userOrders/userOrdersService";
import Img from "../../img/steps/6.png";
import {findPhoneById} from "../../service/userService/userService";


const ResumeStep3View = ({
                             category,
                             name,
                             description,
                             communication,
                             experience,
                             userName,
                             phones

                         }) => {

    return (
        <Grid2 container spacing={2} sx={{p: 2, height: '100%'}}>
            <Grid2 size={7}>
                <Stack spacing={2} direction="column" sx={{height: '100%', justifyContent: 'center'}}>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign:'right'}} variant="subtitle2" gutterBottom>
                            Заказчик:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {userName}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign:'right'}} variant="subtitle2" gutterBottom>
                            Телефон для связи:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {findPhoneById(phones, communication)}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign:'right'}} variant="subtitle2" gutterBottom>
                            Категория:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {geOrderTypesTitle(category)}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign:'right'}} variant="subtitle2" gutterBottom>
                            Название:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {name}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign:'right'}} variant="subtitle2" gutterBottom>
                            Описание:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {description}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{width: '25%', textAlign:'right'}} variant="subtitle2" gutterBottom>
                            Адрес:
                        </Typography>
                        <Typography sx={{width: '74%', ml: 1}} variant="body2" gutterBottom>
                            {experience}
                        </Typography>
                    </Box>
                </Stack>

            </Grid2>
            <Grid2 size={5}>
                <Box
                    component="img"
                    alt="left Img"
                    src={Img}
                    sx={{
                        width: '100%',
                    }}/>
            </Grid2>
        </Grid2>
    );
}

ResumeStep3View.propTypes = {}

export default ResumeStep3View;