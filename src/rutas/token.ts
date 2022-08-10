export const get = () => {
    return sessionStorage.getItem('token') || null;
}

export const remove = () => {
    sessionStorage.removeItem('token');
}

export const set = (token: string) => {
    sessionStorage.setItem('token', token);
}

