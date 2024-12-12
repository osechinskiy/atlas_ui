import React from 'react';
import {Icon, LogoDetails, LogoName, MenuBtn} from "./common.jsx";

const LogoHeader = (prop) => {

    const {open, setOpen, title} = prop;

    const btnVariants = {
        expanded: {
            textAlign: "right",
            right: 0,
        },
        collapsed: {
            textAlign: "center",
            right: 13,
        }
    }

    const backdropVariants = {
        expanded: {
            opacity: 1,
        },
        collapsed: {
            opacity: 0,
        }
    }

    const expandingTransition = {
        type: "spring",
        duration: 2.3,
        stiffness: 50,
    }

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <LogoDetails>
            <Icon
                initial={false}
                animate={open ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
                className={"bx bxl-audible"}/>
            <LogoName
                initial={false}
                animate={open ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
            >{title}</LogoName>
            <MenuBtn
                initial={false}
                animate={open ? "expanded" : "collapsed"}
                variants={btnVariants}
                transition={expandingTransition}
                className={open ? "bx bx-menu-alt-right" : "bx bx-menu"}
                onClick={toggleSidebar}/>
        </LogoDetails>
    );
}

export default LogoHeader;