import React, {useState} from 'react';
import {LinkIcon, LinkName, NavLink, NavListItem, Tooltip} from "./common.jsx";

const NavListItemWithTooltip = (prop) => {
    const [isHovered, setIsHovered] = useState(false);
    const {open, text, icon} = prop;

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

    return (
        <NavListItem>
            <NavLink
                // to="/dashboard" // Укажите ваш путь
                onMouseEnter={() => !open ? setIsHovered(true) : false}
                onMouseLeave={() => setIsHovered(false)}
            >
                <LinkIcon className={icon}/>
                <LinkName
                    initial={false}
                    animate={open ? "expanded" : "collapsed"}
                    variants={backdropVariants}
                    transition={expandingTransition}
                >
                    {text}
                </LinkName>
            </NavLink>
            <Tooltip className={isHovered ? 'visible' : ''}>
                {text}
            </Tooltip>
        </NavListItem>
    );
};

export default NavListItemWithTooltip;