import React, {useEffect, useState} from "react";
import {Alert, Snackbar, Stack} from "@mui/material";
import PhoneInput from "../../components/input/PhoneInputComponent.jsx";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import {
    deleteUserPhoneNumber,
    updateUserPhoneNumbers,
    createUserPhoneNumbers
} from "../../service/userService/userService";
import SnackbarComponent from "../../components/snackbar/SnackbarComponent.jsx";

const ContactInfoView = (props) => {

    const {data} = props;
    const [showInfo, setShowInfo] = useState(false);
    const [error, setError] = useState([]);
    const [showError, setShowError] = useState(false);
    const [message, setMessage] = useState("");
    const [phones, setPhones] = useState({
        phone1: null,
        phone2: null,
        phone3: null,
    });

    useEffect(() => {
        if (data && data.phoneNumbers) {
            setPhones({
                phone1: data.phoneNumbers[0] ? data.phoneNumbers[0] : null,
                phone2: data.phoneNumbers[1] ? data.phoneNumbers[1] : null,
                phone3: data.phoneNumbers[2] ? data.phoneNumbers[2] : null,
            });
        }
    }, [data]);
    console.log(phones)
    const handlePhoneChange = (event, phoneKey) => {
        setPhones((prevPhones) => ({
            ...prevPhones,
            [phoneKey]: {
                ...prevPhones[phoneKey],
                phone: event.target.value,
            },
        }));
    };

    const handleDeletePhone = (phoneKey) => {
        const phoneToDelete = phones[phoneKey];

        if (phoneToDelete) {
            const phoneId = phoneToDelete.id;
            const userId = phoneToDelete.userId;

            deleteUserPhoneNumber(userId, phoneId)
                .then((res) => {
                    if (res.ok) {
                        setShowInfo(true);
                        setMessage(`Номер телефона ${phoneToDelete.phone} успешно удален`);
                    }
                })
                .catch((e) => {
                    const errorData = JSON.parse(e.message)
                    setError(errorData);
                    setShowError(true);
                    setTimeout(() => {
                        setShowError(false);
                    }, 2000);
                });

            setPhones((prevPhones) => ({
                ...prevPhones,
                [phoneKey]: null, // Удаляем номер телефона
            }));
        }
    };

    const handleSubmit = (phoneKey) => {
        const phone = phones[phoneKey];
        if (phone.id) {
            updateUserPhoneNumbers(phone)
                .then((res) => {
                    if (res.ok) {
                        setShowInfo(true);
                        setMessage(`Номер телефона ${phone.phone} успешно обновлен`);
                    }
                })
                .catch((e) => {
                    const errorData = JSON.parse(e.message)
                    setError(errorData);
                    setShowError(true);
                    setTimeout(() => {
                        setShowError(false);
                    }, 2000);
                });
        } else {
            let newPhone = {
                userId: data.id,
                phone: phone.phone
            }
            createUserPhoneNumbers(newPhone)
                .then((res) => {
                    if (res.ok) {
                        setShowInfo(true);
                        setMessage(`Номер телефона ${phone.phone} успешно добавлен`);
                    }
                })
                .catch((e) => {
                    const errorData = JSON.parse(e.message)
                    setError(errorData);
                    setShowError(true);
                    setTimeout(() => {
                        setShowError(false);
                    }, 2000);
                })
        }
    }

    const renderPhoneInput = (phoneKey) => (
        <Stack direction="row" spacing={2} sx={{justifyContent: 'center'}}>
            <Box sx={{width: '60%'}}>
                <PhoneInput
                    value={phones[phoneKey]?.phone || ''}
                    onChange={(event) => handlePhoneChange(event, phoneKey)}
                />
            </Box>
            <IconButton
                sx={{
                    color: '#333333',
                    '&.MuiIconButton-root:hover': {
                        color: 'rgba(241, 196, 15, 1)'
                    }
                }}
                onClick={() => handleSubmit(phoneKey)}>
                <SaveIcon/>
            </IconButton>
            <IconButton
                sx={{
                    color: '#333333',
                    '&.MuiIconButton-root:hover': {
                        color: 'rgba(241, 196, 15, 1)',
                    },
                }}
                onClick={() => handleDeletePhone(phoneKey)}>
                <DeleteIcon/>
            </IconButton>
        </Stack>
    );

    return (
        <React.Fragment>
            <Stack spacing={2}>
                {renderPhoneInput('phone1')}
                {renderPhoneInput('phone2')}
                {renderPhoneInput('phone3')}
            </Stack>
            <SnackbarComponent
                open={showInfo}
                onClose={setShowInfo}
                message={message}
                isSuccess={true}/>
            <SnackbarComponent
                open={showError}
                onClose={setShowError}
                message={error.phone}/>
        </React.Fragment>

    );
}

export default ContactInfoView;