import React, {useEffect, useState} from "react";
import {getFullUserInfo} from "../../service/userService/userService";
import {Stack} from "@mui/material";
import OrderCardComponent from "../../components/card/OrderCardComponent.jsx";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Img from "../../img/profile/empty.png";
import Typography from "@mui/material/Typography";
import {getUserResume} from "../../service/resume/resumeService";
import ResumeCardComponent from "../../components/card/ResumeCardComponent.jsx";

const UserResumeView = () => {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true); // Инициализация состояния loading

    const userId = getFullUserInfo().id;

    useEffect(() => {
        setLoading(true); // Устанавливаем loading в true перед началом загрузки
        getUserResume(userId)
            .then((response) => {
                setData(response); // Устанавливаем полученные данные
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            })
            .finally(() => {
                setLoading(false) // Устанавливаем loading в false после завершения загрузки
            })

    }, [userId]);

    return (
        <React.Fragment>
            {
                loading ? (
                    <Stack spacing={2}>
                        <Button variant="contained"
                                component={Link} to={"/create-resume"}
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: '#333333',
                                    boxShadow: 'none'
                                }}

                                endIcon={<AddIcon/>}>
                            Создать новую анкету специалиста
                        </Button>
                        <ResumeCardComponent loading={loading}/>
                        <ResumeCardComponent loading={loading}/>
                        <ResumeCardComponent loading={loading}/>
                    </Stack>
                ) : (
                    <Stack spacing={2}>
                        <Button variant="contained"
                                component={Link} to={"/create-resume"}
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: '#333333',
                                    boxShadow: 'none'
                                }}

                                endIcon={<AddIcon/>}>
                            Создать новую анкету специалиста
                        </Button>
                        {data && (data.length > 0) ? (
                            data.map((item) => (
                                    <ResumeCardComponent loading={loading}
                                                        data={item}
                                                        key={item.id}/>
                                )
                            )
                        ) : (
                            <Stack spacing={2}>
                                <Box
                                    component="img"
                                    alt="left Img"
                                    src={Img}
                                    sx={{
                                        width: '100%',
                                    }}/>
                                <Box sx={{textAlign: 'center'}}>
                                    <Typography variant="h6" gutterBottom>
                                        Активных анкет нет
                                    </Typography>
                                    <Typography sx={{color: 'text.secondary'}} variant="subtitle2" gutterBottom>
                                        Для создания новой анкеты просто нажмите кнопку сверху - создать новую анкету специалиста
                                    </Typography>
                                </Box>
                            </Stack>
                        )
                        }
                    </Stack>
                )
            }
        </React.Fragment>
    );
}

export default UserResumeView;