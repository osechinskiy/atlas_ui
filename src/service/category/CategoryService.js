import {responseProcess} from "../FetchService.js";

const services = [
    {
        id: 1,
        value: "TUTORING",
        serviceName: "Репетиторство",
        description: "Помощь в изучении математики и физики для школьников.",
        image: "/images/pana.png"
    },
    {
        id: 2,
        value: "CLEAN_UP",
        serviceName: "Уборка",
        description: "Проведение генеральной уборки квартиры или офиса.",
        image: "/images/pana13.png"
    },
    {
        id: 3,
        value: "MINOR_REPAIRS",
        serviceName: "Мелкий ремонт",
        description: "Ремонт сантехники и электрики в квартире.",
        image: "/images/pana2.png"
    },
    {
        id: 4,
        value: "GRAPHIC_DESIGN",
        serviceName: "Графический дизайн",
        description: "Создание логотипов и фирменного стиля для бизнеса.",
        image: "/images/pana3.png"
    },
    {
        id: 5,
        value: "PHOTOGRAPHER_SERVICES",
        serviceName: "Услуги фотографа",
        description: "Фотосессии для мероприятий и портретная съемка.",
        image: "/images/pana4.png"
    },
    {
        id: 6,
        value: "CULINARY_MASTER_CLASSES",
        serviceName: "Кулинарные мастер-классы",
        description: "Обучение приготовлению различных блюд и десертов.",
        image: "/images/pana5.png"
    },
    {
        id: 7,
        value: "TRANSFER",
        serviceName: "Переводы",
        description: "Перевод документов и текстов с английского на русский.",
        image: "/images/pana6.png"
    },
    {
        id: 8,
        value: "FITNESS_TRAINER",
        serviceName: "Фитнес-тренер",
        description: "Индивидуальные тренировки по фитнесу и йоге.",
        image: "/images/pana7.png"
    },
    {
        id: 9,
        value: "COMPUTER_REPAIR_SERVICES",
        serviceName: "Услуги по ремонту компьютеров",
        description: "Диагностика и ремонт компьютеров и ноутбуков.",
        image: "/images/pana8.png"
    },
    {
        id: 10,
        value: "CHILDCARE_SERVICES",
        serviceName: "Услуги по уходу за детьми",
        description: "Няня для детей, помощь с домашними заданиями.",
        image: "/images/pana9.png"
    },
    {
        id: 11,
        value: "PSYCHOLOGY_CONSULTATIONS",
        serviceName: "Консультации по психологии",
        description: "Индивидуальные консультации и тренинги.",
        image: "/images/pana10.png"
    },
    {
        id: 12,
        value: "MANICURE_SERVICES",
        serviceName: "Услуги по маникюру",
        description: "Профессиональный маникюр и педикюр на дому.",
        image: "/images/pana11.png"
    },
    {
        id: 20,
        value: "ELDERLY_CARE_SERVICES",
        serviceName: "Услуги по уходу за пожилыми людьми",
        description: "Помощь и забота о пожилых людях на дому.",
        image: "/images/pana12.png"
    }
];

export const getCategory = () => {
    return services;
}

export const getSpecialistResume = async (category) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/resume/${category}/all`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    return responseProcess(response);
};