import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AccountMenuComponent from "./AccountMenuComponent.jsx";
import {Link} from "react-router-dom";
import SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";
import {getFullUserInfo} from "../../service/userService/userService";
import {Snackbar, SnackbarContent, Link as LiMui} from "@mui/material";
import {geOrderTypesTitle} from "../../service/userOrders/userOrdersService";

const ApplBarComponent = () => {
    const pages = [
        {
            title: 'Заказы',
            linkName: '/orders'
        },
        {
            title: 'Специалисты',
            linkName: '/category'
        }
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [notifications, setNotifications] = useState([]);
    const userinfo = getFullUserInfo()
    const [snackbars, setSnackbars] = useState([]);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    useEffect(() => {
        // Создание SockJS объекта, который подключается к указанному URL
        const socket = new SockJS('/api/v1/notification/ws');
        // Оборачивание SockJS объекта в STOMP клиент
        const stompClient = Stomp.over(socket);

        // Подключение к WebSocket серверу
        stompClient.connect({}, () => {
            // Подписка на топик уведомлений для конкретного пользователя
            stompClient.subscribe(`/topic/notifications/${userinfo.id}`, (message) => {
                // Обработка полученного сообщения
                const notification = JSON.parse(message.body);
                setNotifications((prevNotifications) => [...prevNotifications, notification]);
                setSnackbars((prevSnackbars) => {
                    const newSnackbars = [...prevSnackbars, notification];
                    console.log(notification)
                    return newSnackbars.slice(-10); // Ограничиваем количество снэкбаров до 10
                });
            });
        });

        // Очистка эффекта при размонтировании компонента
        return () => {
            stompClient.disconnect();
        };
    }, []);

    const handleSnackbarClose = (notification) => {
        setSnackbars((prevSnackbars) => prevSnackbars.filter((n) => n !== notification));
    };
    return (
        <React.Fragment>
            <AppBar position="static"
                // style={{background: 'linear-gradient(58deg, rgba(243, 172, 18, 1) 20%, rgba(241, 196, 15, 1) 100%'}}
                // style={{background: 'linear-gradient(58deg, #333333 20%, #666666 100%'}}
                    sx={{background: '#333333'}}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        {/*<AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>*/}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'Montserrat',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            ATLAS
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        textTransform: 'none',
                                        fontFamily: 'Montserrat'
                                    }}
                                    component={Link} to={page.linkName}
                                >
                                    {page.title}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{flexGrow: 0}}>
                            <AccountMenuComponent/>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {snackbars.map((notification, index) => (
                <Snackbar
                    key={index}
                    open={true}
                    autoHideDuration={6000} // Время отображения каждого снэкбара
                    onClose={() => handleSnackbarClose(notification)}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                >
                    <SnackbarContent
                        message={
                            <Box>
                                {`Появился новый заказ в категории ${geOrderTypesTitle(notification.category)} `}
                                <LiMui
                                    component={Link}
                                    variant="body2"
                                    to={`/order/${notification.orderId}`}
                                >
                                    посмотреть заказ
                                </LiMui>
                            </Box>
                        }
                    />
                </Snackbar>
            ))}
        </React.Fragment>
    );
}

export default ApplBarComponent;