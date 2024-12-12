import React, {useEffect, useState} from "react";
import MainContainerComponent from "../components/container/MainContainerComponent.jsx";
import {getSpecialistResume} from "../service/category/CategoryService";
import {useParams} from "react-router-dom";
import ResumeCardComponent from "../components/card/ResumeCardComponent.jsx";
import BackButtonComponent from "../components/button/BackButtonComponent.jsx";
import {Stack} from "@mui/material";

const Specialist = () => {
    const {category} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getSpecialistResume(category.toUpperCase())
            .then((res) => {
                setData(res)
            })
            .catch((err) => {
                console.error(err);
            })
    }, [category])

    return (
        <MainContainerComponent>
            <BackButtonComponent/>
            <Stack spacing={2} sx={{mt: 2}}>
                {
                    data?.map(item => (
                        <ResumeCardComponent loading={false} data={item} key={item.id} />
                    ))}
            </Stack>
        </MainContainerComponent>
    );
}

export default Specialist;