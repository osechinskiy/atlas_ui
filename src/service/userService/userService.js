export const getApiUserInfo = async (id) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/user/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        const data = await response.json();

        sessionStorage.setItem('userInfo', JSON.stringify(data));
        return data; // Вернуть данные, если это необходимо
    } else {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userInfo');
        if (response.status === 403) {
            window.location.reload();
        }
    }
};

export function getFullUserInfo() {
    const info = sessionStorage.getItem('userInfo');
    if (info) {
        try {
            return JSON.parse(info);
        } catch (error) {
            console.error('Ошибка при парсинге JSON:', error);
            return null; // Возвращаем null в случае ошибки
        }
    }
    return null; // Явно возвращаем null, если нет данных
}

export const updateUserMainInfo = async (userInfo) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch('/api/v1/user', {
        method: 'PATCH',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
    });

    return responseProcess(response);
};

export const deleteUserPhoneNumber = async (userId, phoneId) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/user/${userId}/phone/${phoneId}`, {
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    return responseProcess(response);
};

export const updateUserPhoneNumbers = async (phone) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch('/api/v1/user/phones', {
        method: 'PATCH',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(phone),
    });

    return responseProcess(response);
};

export const createUserPhoneNumbers = async (newPhone) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch('/api/v1/user/phones', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPhone),
    });

    return responseProcess(response);
};

export const changeUserPassword = async (userId, changePasswordRequest) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/user/${userId}/password`, {
        method: 'PATCH',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(changePasswordRequest),
    });

    return responseProcess(response);
};

async function responseProcess(response) {
    if (!response.ok) {
        if (response.status === 403) {
            console.error('Ошибка при получении данных:', response.statusText);
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userInfo');
            window.location.reload();
        }

        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }

    return response;
}

export function findIdByPhone(array, phone) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].phone === phone) {
            return array[i].id;
        }
    }
    return null; // Возвращает null, если телефон не найден
}

export function findPhoneById(array, phoneId) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === phoneId) {
            return array[i].phone;
        }
    }
    return null; // Возвращает null, если телефон не найден
}
