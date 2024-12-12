import React, {useEffect, useState} from "react";
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {getFullUserInfo} from "../../service/userService/userService";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const FileUploadButtonComponent = (props) => {

    const {setFile} = props;

    const handleChange = async (event) => {
        const token = sessionStorage.getItem('token');
        const file = event.target.files[0];

        if (!file) {
            console.error('Файл не выбран');
            return;
        }

        const formData = new FormData();
        formData.append('userId', getFullUserInfo().id);
        formData.append('file', file);

        const response = await fetch('/api/v1/user/upload-avatar', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
            },
            body: formData,
        });

        if (response.ok) {
            console.log('Аватар успешно загружен');
            setFile(event.target.files[0]);
        } else {
            if (response.status === 403) {
                console.error('Ошибка при получении данных:', response.statusText);
                sessionStorage.removeItem('token');
                window.location.reload();
            }
            console.error('Ошибка при загрузке аватара');
        }
    };

    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon/>}
            sx={{
                textTransform: 'none',
                backgroundColor: 'rgba(241, 196, 15, 1)',
                boxShadow: 'none'
            }}
        >
            Выбрать файл
            <VisuallyHiddenInput
                type="file"
                onChange={handleChange}
                multiple
            />
        </Button>
    );
}

export default FileUploadButtonComponent;