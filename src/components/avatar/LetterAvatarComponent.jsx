import React from 'react';
import Avatar from "@mui/material/Avatar";

function stringAvatar(name, width, height) {
    const nameParts = name.split(' ');
    const firstInitial = nameParts[0] ? nameParts[0][0] : '';
    const secondInitial = nameParts[1] ? nameParts[1][0] : '';
    return {
        sx: {
            // backgroundColor: 'rgba(243, 172, 18, 1)',
            width: width, height: height
        },
        children: `${firstInitial.toUpperCase()}${secondInitial.toUpperCase()}`
    };
}

const LetterAvatarComponent = props => {

    const {username, width, height} = props;

    return (
        <Avatar {...stringAvatar(username, width, height)} />
    );
}

export default LetterAvatarComponent;