import React from 'react';
import {LogOut, Profile, ProfileDesignation, ProfileDetails, ProfileIcon, ProfileName} from "./common.jsx";

const ProfileContent = (props) => {

    const {open, name, role} = props;

    const btnLogOut = {
        expanded: {
            backgroundColor: null,
            width: 50,
        },
        collapsed: {
            backgroundColor: "rgba(241, 196, 15, 1)",
            width: 78,
        }
    }

    const ProfileVariants = {
        expanded: {
            width: 250,
        },
        collapsed: {
            width: 78,
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

    return(
        <Profile
            initial={false}
            animate={open ? "expanded" : "collapsed"}
            variants={ProfileVariants}
            transition={expandingTransition}>
            <ProfileDetails>
                <ProfileIcon
                    initial={false}
                    animate={open ? "expanded" : "collapsed"}
                    variants={backdropVariants}
                    transition={expandingTransition}
                    className="bx bxs-user-circle"/>
                <div>
                    <ProfileName
                        initial={false}
                        animate={open ? "expanded" : "collapsed"}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    >{name}</ProfileName>
                    <ProfileDesignation
                        initial={false}
                        animate={open ? "expanded" : "collapsed"}
                        variants={backdropVariants}
                        transition={expandingTransition}
                    >{role}</ProfileDesignation>
                </div>
            </ProfileDetails>
            <LogOut
                initial={false}
                animate={open ? "expanded" : "collapsed"}
                variants={btnLogOut}
                transition={expandingTransition}
                className="bx bx-log-out"/>
        </Profile>
    );
}

export default ProfileContent;