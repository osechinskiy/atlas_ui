import React, {useState} from "react";
import {Box} from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ResumeStep1View from "./ResumeStep1View.jsx";
import ResumeStep2View from "./ResumeStep2View.jsx";
import {getFullUserInfo} from "../../service/userService/userService";
import ResumeStep3View from "./ResumeStep3View.jsx";
import {useNavigate} from "react-router-dom";
import {postUserResume} from "../../service/resume/resumeService";

const steps = ['Основная информация', 'Коммуникация и стаж'];

const CreateResumeSteps = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [blockBtn, setBlockBtn] = useState(true);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [communication, setCommunication] = useState("");
    const [experience, setExperience] = useState(0);
    const navigate = useNavigate();
    const userinfo = getFullUserInfo()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const stepTemplate = (activeStep) => {
        switch (activeStep) {
            case 0:
                return <ResumeStep1View
                    block={setBlockBtn}
                    name={name}
                    setName={setName}
                    title={description}
                    setTitle={setDescription}
                    category={category}
                    setCategory={setCategory}
                />
            case 1:
                return <ResumeStep2View
                    data={userinfo.phoneNumbers}
                    block={setBlockBtn}
                    userCommunication={communication}
                    setUserCommunication={setCommunication}
                    experience={experience}
                    setExperience={setExperience}
                />
        }
    }


    const handleSubmit = () => {
        let resume = {
            userId: userinfo.id,
            category: category,
            title: name,
            description: description,
            phoneId: communication,
            experience: experience,
        }

        postUserResume(resume, navigate);
    };


    return (
        <Box sx={{width: '100%', height: '90%', position: 'relative', mt: 10}}>
            <Box sx={{width: '100%', flexGrow: 1}}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        return (
                            <Step key={label} {...stepProps}
                                  sx={{
                                      '& .MuiSvgIcon-root.Mui-completed': {
                                          color: 'rgba(241, 196, 15, 1)',
                                      },
                                      '& .MuiSvgIcon-root.Mui-active': {
                                          color: 'rgba(241, 196, 15, 1)',
                                      },
                                  }}
                            >
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                            <Button variant="contained"
                                    disabled={activeStep === 0}
                                    onClick={handleReset}
                                    sx={{
                                        textTransform: 'none',
                                        mr: 1,
                                        backgroundColor: '#333333',
                                        boxShadow: 'none'
                                    }}
                            >
                                Начать сначала
                            </Button>
                            <Box sx={{flex: '1 1 auto'}}/>
                            <Button variant="contained" onClick={handleSubmit}
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: 'rgba(241, 196, 15, 1)',
                                        boxShadow: 'none'
                                    }}>Создать анкету</Button>
                        </Box>
                        <Typography sx={{mt: 2, mb: 1}}>
                            Все шаги заполнены – проверим еще раз
                        </Typography>
                        <ResumeStep3View
                            category={category}
                            name={name}
                            description={description}
                            communication={communication}
                            experience={experience}
                            userName={userinfo.firstName}
                            phones={userinfo.phoneNumbers}
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                            <Button variant="contained"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{
                                        textTransform: 'none',
                                        mr: 1,
                                        backgroundColor: '#333333',
                                        boxShadow: 'none'
                                    }}
                            >
                                Назад
                            </Button>
                            <Box sx={{flex: '1 1 auto'}}/>

                            <Button variant="contained" onClick={handleNext}
                                    disabled={blockBtn}
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: 'rgba(241, 196, 15, 1)',
                                        boxShadow: 'none'
                                    }}>
                                {activeStep === steps.length - 1 ? 'Завершить' : 'Дальше'}
                            </Button>
                        </Box>
                        <Box sx={{display: 'flex', width: '100%', p: 2, justifyContent: 'center', mt: 2}}>
                            {stepTemplate(activeStep)}
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </Box>
    );
}

export default CreateResumeSteps;