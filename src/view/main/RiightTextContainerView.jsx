import React from 'react';
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";

const RightTextContainer = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="body2">
                Создание заявки на выполнение работ стало проще простого! В нашем сервисе вы можете быстро и
                удобно описать свою задачу, чтобы привлечь подходящих специалистов.
            </Typography>
            <Typography variant="body2">
                После отправки заявки она будет доступна для просмотра исполнителям, которые соответствуют вашим
                критериям.
                Вы сможете получать отклики и предложения, а также задавать вопросы специалистам, чтобы выбрать
                наиболее подходящего кандидата.
            </Typography>
            <Typography variant="body2">
                Не тратьте время на поиски — создайте заявку и получите качественное исполнение своих задач
                всего за несколько минут!
            </Typography>
        </Stack>
    );
}

export default RightTextContainer;