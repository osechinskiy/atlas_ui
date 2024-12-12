export async function responseProcess(response) {
    if (!response.ok) {
        if (response.status === 403) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('userInfo');
            window.location.reload();
        }

        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
    }

    return await response.json();
}