import React from 'react';
import Box from "@mui/material/Box";
import CardBlockComponent from "../../components/card/CardBlockComponent.jsx";
import {getCategory} from "../../service/category/CategoryService.js";

const services =  getCategory();
const CategoriesView = () => {
    return (
        <Box sx={{width: '100%', p: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly',}}>
            {
                services.map((item) => (
                    <CardBlockComponent key={item.id}
                                        image={item.image}
                                        title={item.serviceName}
                                        description={item.description}
                                        to={`/category/${item.value.toLowerCase()}`}/>
                ))}
        </Box>
    );
}

export default CategoriesView;