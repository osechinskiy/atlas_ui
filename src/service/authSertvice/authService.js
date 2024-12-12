export const signIn = async (email, password) => {
    const response = await fetch('/api/v1/auth/sign-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }

    return await response.json();
};

export const signUp = async (firstName, lastName, email, password) => {
    const response = await fetch('/api/v1/auth/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstName, lastName, email, password}),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }

    return await response.json();
};

export function parseJwt(token) {
    // Разделяем токен на части
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Заменяем символы для корректного декодирования
    const jsonPayload = decodeURIComponent(escape(window.atob(base64))); // Декодируем из Base64Url

    return JSON.parse(jsonPayload); // Парсим JSON
}
