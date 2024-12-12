import {responseProcess} from "../FetchService.js";

export const getUserResume = async (userId) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/resume/user/${userId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

  return responseProcess(response);
};

export const getResume = async (resumeId) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/resume/${resumeId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    return responseProcess(response);
};

export const getResumeStat = async (resumeId) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/resume/${resumeId}/stats`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    return responseProcess(response);
};

export const deleteResume = async (resumeId) => {
    const token = sessionStorage.getItem('token');
    return await fetch(`/api/v1/resume/${resumeId}`, {
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
};

export const postUserResume = async (resume, navigate) => {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`/api/v1/resume/`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(resume),
    });

    if (response.ok) {
        navigate('/profile');
    } else {
        if (response.status === 403) {
            console.error('Ошибка при получении данных:', response.statusText);
            sessionStorage.removeItem('token');
            window.location.reload();
        }
    }
};