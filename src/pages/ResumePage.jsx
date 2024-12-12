import React, {useEffect, useState} from "react";
import MainContainerComponent from "../components/container/MainContainerComponent.jsx";
import {Stack} from "@mui/material";
import {getResume, getResumeStat} from "../service/resume/resumeService";
import {useParams} from "react-router-dom";
import HeaderView from "../view/order/HeaderView.jsx";
import HeadView from "../view/order/HeadView.jsx";
import ResumeBodyView from "../view/resume/ResumeBodyView.jsx";
import Typography from "@mui/material/Typography";
import BarChartComponent from "../components/chart/BarChartComponent.jsx";

const ResumePage = () => {
    const {resumeId} = useParams();
    const [resumeData, setResumeData] = useState({});
    const [statistic, setStatistic] = useState({});

    const fetchData = async () => {
        try {
            const response = await getResume(resumeId);
            setResumeData(response);

            if (response.editable) {
                const statResponse = await getResumeStat(resumeId);
                setStatistic(statResponse);
            }

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [resumeId]);

    return (
      <MainContainerComponent>
            <Stack spacing={2} sx={{position: 'relative', height: '100%'}}>
                <HeadView data={resumeData}/>
                <HeaderView data={resumeData}/>
                <ResumeBodyView data={resumeData}/>
                {resumeData?.editable && (
                    <Stack spacing={2}>
                        <Typography variant="body2" sx={{color: 'text.secondary', alignItems: 'center', pl: 2}}>
                            Статистика просмотров вашей анкеты за последние 7 дней
                        </Typography>
                        <BarChartComponent data={statistic}/>
                    </Stack>
                )}
            </Stack>
      </MainContainerComponent>
    );
};

export default ResumePage;