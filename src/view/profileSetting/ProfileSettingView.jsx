import React, {useEffect, useState} from "react";
import FileUploadButtonComponent from "../../components/button/FileUploadButtonComponent.jsx";
import Box from "@mui/material/Box";
import LetterAvatarComponent from "../../components/avatar/LetterAvatarComponent.jsx";
import {Stack} from "@mui/material";
import {getApiUserInfo, getFullUserInfo} from "../../service/userService/userService";
import ImageAvatarComponent from "../../components/avatar/ImageAvatarComponent.jsx";
import SettingView from "./SettingView.jsx";

const ProfileSettingView = () => {

    const [file, setFile] = useState(null);
    let userInfo = getFullUserInfo();

    useEffect(() => {
        const fetchUserInfo = async () => {
            const userId = userInfo.id;
            const info = await getApiUserInfo(userId);

            if (info && info.avatar !== null) {
                const avatarUrl = `data:image/jpeg;base64,${info.avatar}`;
                setFile(avatarUrl);
            }
        };

        fetchUserInfo(); // Вызываем асинхронную функцию
    }, [file]); // Обратите внимание на зависимости

    return (
        <Stack spacing={2} sx={{width: '100%', alignItems: "center"}}>
            <Box sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "60%"}}>
                {
                    file ? <ImageAvatarComponent alt={userInfo.firstName} src={file} width={130}
                                                 height={130}/> :
                        <LetterAvatarComponent
                            username={userInfo.firstName + ' ' + userInfo.lastName} width={150}
                            height={150}/>
                }
                <FileUploadButtonComponent setFile={setFile}/>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "60%"}}>
                <SettingView data={userInfo}/>
            </Box>
        </Stack>
    );
}

export default ProfileSettingView;