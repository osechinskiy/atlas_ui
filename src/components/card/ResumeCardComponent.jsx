import React from "react";
import {Card, CardActionArea, CardContent, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Skeleton} from "@mui/lab";
import PropTypes from "prop-types";
import ImageAvatarComponent from "../avatar/ImageAvatarComponent.jsx";
import {useNavigate} from "react-router-dom";

const ResumeCardComponent = ({loading, data}) => {

    const navigate = useNavigate();

    return (
        <Card
            sx={{
                boxShadow: 0,
                border: 1,
                borderRadius: 2,
                borderColor: 'divider',
                transition: '0.2s',
                '&:hover': {
                    color: 'white',
                    '& .MuiTypography-body2': {
                        color: 'white',
                    },
                    backgroundColor: 'rgba(241, 196, 15, 1)',
                },
            }}
            onClick={() => navigate(`/resume/${data.id}`)}
        >
            <CardActionArea sx={{height: '150px',}}>
                <Stack direction="row" spacing={2}>
                    <Box sx={{flexGrow: 1, width: '70%',}}>
                        <CardContent>
                            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {loading ? <Skeleton sx={{width: '30%'}} animation="wave"/> : data?.title}
                                </Typography>
                            </Box>

                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                {loading ? (
                                    <React.Fragment>
                                        <Skeleton animation="wave"/>
                                        <Skeleton animation="wave"/>
                                    </React.Fragment>
                                ) : (
                                    data?.description
                                )}
                            </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        width: '30%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {loading ?
                            (
                                <Skeleton variant="circular" width={100} height={100}/>
                            ) :
                            (
                                <ImageAvatarComponent alt={data.userName}
                                                      src={`data:image/jpeg;base64,${data.userAvatar}`}
                                                      width={100}
                                                      height={100}/>
                            )
                        }
                    </Box>
                </Stack>

            </CardActionArea>
        </Card>
    );
}

ResumeCardComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        userName: PropTypes.string,
        userAvatar: PropTypes.string,
    })
}


export default ResumeCardComponent;