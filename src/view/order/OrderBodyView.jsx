import React from "react";
import HeaderView from "./HeaderView.jsx";
import Box from "@mui/material/Box";
import {Grid2, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import {formatDate} from "../../service/orderService/orderService";
import YandexMap from "../../components/yandexMap/YandexMapComponent.jsx";
import PropTypes from "prop-types";
import EditOrderView from "./EditOrderView.jsx";
import DeleteOrderView from "./DeleteOrderView.jsx";

const OrderBodyView = ({data, location}) => {
    return (
        <Box sx={{p: 3, height: '100%'}}>
            <Grid2 container spacing={2} sx={{height: '410px'}}>
                <Grid2 size={7}>
                    <Stack spacing={2} sx={{height: '100%', justifyContent: 'space-evenly'}}>
                        <Typography variant="h6" sx={{color: 'text.secondary'}}>
                            {data?.title}
                        </Typography>
                        <Typography variant="body">
                            {data?.description}
                        </Typography>
                        <Stack direction="row" sx={{justifyContent: 'space-evenly'}}>
                            <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                                <Box sx={{
                                    display: 'flex',
                                    backgroundColor: '#F5F5F5',
                                    width: '50px',
                                    height: '50px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 2
                                }}>
                                    <CurrencyRubleIcon sx={{color: 'rgba(241, 196, 15, 1)'}}/>
                                </Box>
                                <Box>
                                    <Stack>
                                        <Typography variant="h6" sx={{color: 'text.secondary'}}>
                                            Оплата
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            {data?.amount ? data.amount : "Оплата не указана"}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                            <Stack direction="row" spacing={2} sx={{alignItems: 'center'}}>
                                <Box sx={{
                                    display: 'flex',
                                    backgroundColor: '#F5F5F5',
                                    width: '50px',
                                    height: '50px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 2
                                }}>
                                    <InsertInvitationIcon sx={{color: 'rgba(241, 196, 15, 1)'}}/>
                                </Box>
                                <Box>
                                    <Stack>
                                        <Typography variant="h6" sx={{color: 'text.secondary'}}>
                                            Дата окончания
                                        </Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                            {(data?.desiredCompletionDate ? formatDate(data.desiredCompletionDate) : "бесрочный")}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Stack>
                        {data?.editable && (
                            <Box sx={{display:'flex', justifyContent: 'center'}}>
                                <Stack spacing={2} sx={{width: '80%'}}>
                                    <EditOrderView data={data}/>
                                    <DeleteOrderView idOrder={data?.id}/>
                                </Stack>
                            </Box>
                        )}
                    </Stack>
                </Grid2>
                <Grid2 size={5}>
                    {location != null ? <YandexMap coordinates={location}/> : null}
                </Grid2>
            </Grid2>
        </Box>
    );
};

HeaderView.defaultProps = {
    data: PropTypes.shape({
        desiredCompletionDate: PropTypes.string,
        amount: PropTypes.number,
        description: PropTypes.string,
        title: PropTypes.string
    }).isRequired,
    location: PropTypes.array.isRequired,
};

export default OrderBodyView;