import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {Link, useNavigate} from "react-router-dom";
import LetterAvatarComponent from "../avatar/LetterAvatarComponent.jsx";
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import ImageAvatarComponent from "../avatar/ImageAvatarComponent.jsx";
import {getFullUserInfo} from "../../service/userService/userService";


export default function AccountMenuComponent({data}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const userInfo = getFullUserInfo();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        setAnchorEl(null);
        sessionStorage.removeItem('token');
        window.location.reload();
        navigate('/');
    }

    function notificationsLabel(count) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }

    return (
        <React.Fragment>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip sx={{fontFamily: 'Montserrat'}} title="Управление аккауннтом">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {userInfo.avatar !== null ?
                            <ImageAvatarComponent alt={userInfo.firstName}
                                                  src={`data:image/jpeg;base64,${userInfo.avatar}`}
                                                  width={40}
                                                  height={40}/>
                            : <LetterAvatarComponent
                                username={userInfo.firstName + ' ' +userInfo.lastName}
                                width={32} height={32}/>}


                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem sx={{fontFamily: 'Montserrat'}} component={Link} to={"/profile"} onClick={handleClose}>
                    <Avatar/> Мой профиль
                </MenuItem>
                <Divider/>
                <MenuItem
                    sx={{fontFamily: 'Montserrat'}}
                    component={Link}
                    to={'/notification'}
                    onClick={handleClose}>
                    <ListItemIcon>
                        {data && data.length > 0 ? (
                            <Badge badgeContent={data.length} sx={{
                                '& .MuiBadge-badge': {
                                    backgroundColor: 'rgba(241, 196, 15, 1)',
                                    color: 'white',
                                },
                                padding: '4px 4px',

                            }}>
                                <MailIcon fontSize="small"/>
                            </Badge>
                        ) : (
                            <MailIcon fontSize="small"/>
                        )}

                    </ListItemIcon>
                    Уведомления
                </MenuItem>
                <MenuItem sx={{fontFamily: 'Montserrat'}} component={Link} to={"/profileSetting"} onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small"/>
                    </ListItemIcon> Управление аккаунтом
                </MenuItem>
                <MenuItem sx={{fontFamily: 'Montserrat'}} onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Выйти
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}