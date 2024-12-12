import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from "prop-types";
import UserOrdersView from "../../view/profile/UserOrdersView.jsx";
import UserResumeView from "../../view/profile/UserResumeView.jsx";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            style={{width: '100%'}}
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const TabsComponent = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%', flexGrow: 1, display: 'flex', height: '100%'}}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                sx={{borderRight: 1, borderColor: 'divider', width: '20%'}}
                TabIndicatorProps={{style: {background: 'rgba(243, 172, 18, 1)'}}}
            >
                <Tab sx={{'&.Mui-selected': {color: 'rgba(243, 172, 18, 1)'}}}
                     label="Заказы"
                     {...a11yProps(0)}/>
                <Tab sx={{'&.Mui-selected': {color: 'rgba(243, 172, 18, 1)'}}}
                     label="Анкеты"
                     {...a11yProps(1)}/>
            </Tabs>
            <TabPanel
                value={value}
                index={0}>
                <UserOrdersView/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UserResumeView/>
            </TabPanel>
        </Box>
    );
}

export default TabsComponent;