import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import {responseProcess} from "../FetchService.js";

export const getOrder = async (orderId) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/order/${orderId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

   return responseProcess(response);
};

export const getOrderStat = async (orderId) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/order/${orderId}/stats`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    return responseProcess(response);
};

export const deleteOrder = async (orderId) => {
    const token = sessionStorage.getItem('token');
    return await fetch(`/api/v1/order/${orderId}`, {
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
};

export const updateOrder = async (orderId, order) => {
    const token = sessionStorage.getItem('token');
    return await fetch(`/api/v1/order/${orderId}`, {
        method: 'PATCH',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    });
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd MMMM yyyy', { locale: ru });
};

export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd MMMM yyyy HH:mm', { locale: ru });
};

export const formatPhoneNumber = (phoneNumber) => {
    // Удаляем все нецифровые символы
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');

    // Проверяем, что номер состоит из 11 цифр
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        return `${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }
    return phoneNumber; // Возвращаем оригинальный номер, если он не соответствует формату
};

export const getCoordinates = async (address) => {
    try {
        const myGeocoder = new window.ymaps.geocode(address);
        const results = await myGeocoder;

        if (results.geoObjects.getLength() > 0) {
            const firstGeoObject = results.geoObjects.get(0);
            console.log(firstGeoObject)
            return firstGeoObject.geometry._coordinates; // Возвращаем координаты
        } else {
            console.error('Не найдено ни одного геообъекта для адреса:', address);
            return null;
        }
    } catch (error) {
        console.error('Ошибка при получении координат:', error);
        return null;
    }
};
