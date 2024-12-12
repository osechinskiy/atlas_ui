import {responseProcess} from "../FetchService.js";

const serviceNames = [
    {
        value: "TUTORING",
        title: "Репетиторство"
    },
    {
        value: "CLEAN_UP",
        title: "Уборка"
    },
    {
        value: "MINOR_REPAIRS",
        title: "Мелкий ремонт"
    },
    {
        value: "GRAPHIC_DESIGN",
        title: "Графический дизайн"
    },
    {
        value: "PHOTOGRAPHER_SERVICES",
        title: "Услуги фотографа"
    },
    {
        value: "CULINARY_MASTER_CLASSES",
        title: "Кулинарные мастер-классы"
    },
    {
        value: "TRANSFER",
        title: "Переводы"
    },
    {
        value: "FITNESS_TRAINER",
        title: "Фитнес-тренер"
    },
    {
        value: "COMPUTER_REPAIR_SERVICES",
        title: "Услуги по ремонту компьютеров"
    },
    {
        value: "CHILDCARE_SERVICES",
        title: "Услуги по уходу за детьми"
    },
    {
        value: "PSYCHOLOGY_CONSULTATIONS",
        title: "Консультации по психологии"
    },
    {
        value: "MANICURE_SERVICES",
        title: "Услуги по маникюру"
    },
    {
        value: "ELDERLY_CARE_SERVICES",
        title: "Услуги по уходу за пожилыми людьми"
    },
];

export const getUserOrders = async (userId) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/order/user/${userId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

   return responseProcess(response)
};

export const getOrders = async (userId) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/order/all?userId=${userId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

   return responseProcess(response)
};

export const postUserOrder = async (order, navigate) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/order`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });

    if (response.ok) {
        navigate('/profile'); // Перенаправление на страницу входа
    } else {
        console.log(response);
        if (response.status === 403) {
            console.error('Ошибка при получении данных:', response.statusText);
            sessionStorage.removeItem('token');
            window.location.reload();
        }
    }
};

export const getOrderTypes = () => {
    return serviceNames;
};

export const geOrderTypesTitle = (valueToFind) => {
    return serviceNames.find(serviceName => serviceName.value === valueToFind)?.title;
}