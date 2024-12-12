import React from "react";
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChangePasswordView from "./changePasswordView.jsx";
import MainInfoView from "./MainInfoView.jsx";
import ContactInfoView from "./ContactInfoView.jsx";

const SettingView = (props) => {

    const {data} = props;

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{width:'100%'}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                       sx={{width: '100%', boxShadow: 'none', border: 1, borderRadius: 1, borderColor: '#dcdcdc'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Общая информация
                </AccordionSummary>
                <AccordionDetails>
                    <MainInfoView data={data}/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                sx={{width: '100%', boxShadow: 'none', border: 1, borderRadius: 1, borderColor: '#dcdcdc'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Контактная информация
                </AccordionSummary>
                <AccordionDetails>
                   <ContactInfoView data={data}/>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                sx={{width: '100%', boxShadow: 'none', border: 1, borderRadius: 1, borderColor: '#dcdcdc'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    Пароль
                </AccordionSummary>
                <AccordionDetails>
                    <ChangePasswordView data={data}/>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default SettingView;