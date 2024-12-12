import React from 'react';
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";

const LeftTextContainerView = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h5" component="div" sx={{ color: 'rgba(241, 196, 15, 1)'}}>
                Добро пожаловать!
            </Typography>
            <Typography variant="body2">
                Мы предлагаем вам удобный инструмент для выбора специалистов, который поможет быстро найти
                подходящего исполнителя для вашего запроса.
            </Typography>
            <Typography variant="body2">
                Наш функционал позволяет фильтровать специалистов по различным категориям, таким как репетиторство,
                уборка, ремонт и многие другие.
                Просто выберите нужную категорию, и мы предоставим вам список квалифицированных специалистов,
                готовых помочь.
                Каждый специалист имеет профиль с отзывами, рейтингом и описанием услуг, что поможет вам сделать
                информированный выбор.
            </Typography>
            <Typography variant="body2">
                Не упустите возможность найти идеального исполнителя для ваших задач всего за несколько кликов!
            </Typography>
        </Stack>
    );
}

export default LeftTextContainerView;