import React from "react";
import Avatar from "@mui/material/Avatar";

const ImageAvatarComponent = (props) => {

    const {alt, src, width, height} = props;

    return (
        <Avatar alt={alt} src={src} sx={{width: width, height: height}}/>
    );
}

export default ImageAvatarComponent;