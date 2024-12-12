import React from "react";
import Box from "@mui/material/Box";
import {Grid2, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import WcIcon from '@mui/icons-material/Wc';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PropTypes from "prop-types";
import DeleteResumeView from "./DeleteResumeView.jsx";

const ResumeBodyView = ({data}) => {
    console.log(data);
    return (
        <Box sx={{p: 3, height: '100%'}}>
            <Grid2 container spacing={2} sx={{height: '410px'}}>
                <Grid2 size={7}>
                    <Stack spacing={2} sx={{height: '100%', justifyContent: 'space-evenly'}}>
                        <Typography variant="h6" sx={{color: 'text.secondary'}}>
                            {data?.title}
                        </Typography>
                        <Typography variant="body">
                            {data?.description}
                        </Typography>
                        <Stack direction="row" sx={{justifyContent: 'space-around'}}>
                            <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                                <Box sx={{
                                    display: 'flex',
                                    backgroundColor: '#F5F5F5',
                                    width: '50px',
                                    height: '50px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 2
                                }}>
                                    <AccessibilityNewIcon sx={{color: 'rgba(241, 196, 15, 1)'}}/>
                                </Box>
                                <Box>
                                    <Stack>
                                        <Typography variant="h6" sx={{color: 'text.secondary'}}>
                                            Возраст
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            {data?.age ? data.age : "Возраст не указан"}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                            <Stack direction="row" sx={{justifyContent: 'space-evenly'}}>
                                <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                                    <Box sx={{
                                        display: 'flex',
                                        backgroundColor: '#F5F5F5',
                                        width: '50px',
                                        height: '50px',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 2
                                    }}>
                                        <WcIcon sx={{color: 'rgba(241, 196, 15, 1)'}}/>
                                    </Box>
                                    <Box>
                                        <Stack>
                                            <Typography variant="h6" sx={{color: 'text.secondary'}}>
                                                Пол
                                            </Typography>
                                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                                {data?.gender ?
                                                    (data.gender === "FEMALE" ? "Женский" : "Мужской") : "пол не указан"}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Stack>
                            <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                                <Box sx={{
                                    display: 'flex',
                                    backgroundColor: '#F5F5F5',
                                    width: '50px',
                                    height: '50px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 2
                                }}>
                                    <InsertInvitationIcon sx={{color: 'rgba(241, 196, 15, 1)'}}/>
                                </Box>
                                <Box>
                                    <Stack>
                                        <Typography variant="h6" sx={{color: 'text.secondary'}}>
                                            Стаж
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            {data?.experience}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Stack>
                        {data?.editable && (
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <Stack spacing={2} sx={{width: '80%'}}>
                                    {/*<EditOrderView data={data}/>*/}
                                    <DeleteResumeView resumeId={data?.id}/>
                                </Stack>
                            </Box>
                        )}
                    </Stack>
                </Grid2>
                <Grid2 size={5}>
                    <Box
                        component="img"
                        alt="UserAvatar"
                        src={`data:image/jpeg;base64,${data.userAvatar}`}
                        sx={{
                            borderRadius: 2,
                            width: '100%',
                            boxShadow: 2,
                        }}/>
                </Grid2>
            </Grid2>
        </Box>
    )
};

ResumeBodyView.propTypes = {
    data: PropTypes.shape({
        experience: PropTypes.number,

    })
}

export default ResumeBodyView;
