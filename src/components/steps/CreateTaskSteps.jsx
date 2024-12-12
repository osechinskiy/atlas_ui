import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepView1 from "../../view/createTask/StepView1.jsx";
import StepView2 from "../../view/createTask/StepView2.jsx";
import {postUserOrder} from "../../service/userOrders/userOrdersService";
import {useNavigate} from "react-router-dom";
import StepView4 from "../../view/createTask/StepView4.jsx";
import {getFullUserInfo} from "../../service/userService/userService";
import StepView3 from "../../view/createTask/StepView3.jsx";

const steps = ['Описание заказа', 'Коммуникация и расположение',  'Срок и оплата'];

const CreateTaskSteps = () => {

    const [orderCategory, setOrderCategory] = useState('');
    const [orderDescription, setOrderDescription] = useState('');
    const [orderName, setOrderName] = useState('');
    const [orderAmount, setOrderAmount] = useState(0);
    const [finishOrderDate, setFinishOrderDate] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [blockBtn, setBlockBtn] = useState(true);
    const [userCommunication, setUserCommunication] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userLocation, setUserLocation] = useState(null);
    const navigate = useNavigate();
    const userinfo =  getFullUserInfo()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleSubmit = () => {
        let order = {
            userId: userinfo.id,
            userName: userinfo.firstName,
            phoneId: userCommunication,
            userAddress: userAddress,
            userLocation: userLocation,
            orderCategory: orderCategory,
            orderName: orderName,
            orderDescription: orderDescription,
            finishOrderDate: finishOrderDate?.format('DD.MM.YYYY'),
            orderAmount: orderAmount,
        }

        postUserOrder(order, navigate);
    }

    const stepTemplate = (activeStep) => {
        switch (activeStep) {
            case 0:
                return <StepView1
                    block={setBlockBtn}
                    orderCategory={orderCategory}
                    setOrderCategory={setOrderCategory}
                    orderName={orderName}
                    setOrderName={setOrderName}
                    orderDescription={orderDescription}
                    setOrderDescription={setOrderDescription}
                />
            case 1:
                return <StepView3
                    data={userinfo.phoneNumbers}
                    block={setBlockBtn}
                    userCommunication={userCommunication}
                    address={userAddress}
                    location={userLocation}
                    setUserCommunication={setUserCommunication}
                    setAddress={setUserAddress}
                    setLocation={setUserLocation}
                />
            case 2:
                return <StepView2
                    block={setBlockBtn}
                    amount={orderAmount}
                    setAmount={setOrderAmount}
                    startDate={finishOrderDate}
                    setStartDate={setFinishOrderDate}
                    address={userAddress}
                    location={userLocation}
                    setAddress={setUserAddress}
                    setLocation={setUserLocation}
                />
        }
    }

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
                                    }}>Создать задачу</Button>
                        </Box>
                        <Typography sx={{mt: 2, mb: 1}}>
                            Все шаги заполнены – проверим еще раз
                        </Typography>
                        <StepView4 orderCategory={orderCategory}
                                   orderName={orderName}
                                   orderDescription={orderDescription}
                                   orderStartDate={finishOrderDate}
                                   orderAmount={orderAmount}
                                   userAddress={userAddress}
                                   userName={userinfo.firstName}
                                   userCommunication={userCommunication}
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

export default CreateTaskSteps;