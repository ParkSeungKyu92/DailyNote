import client from './client';

export const login = ({ username, password }) => 
    client.post('/api/auth/login', { username, password});

export const register = ({ id, password, username, email, sms }) =>
    client.post('/api/auth/register', { id, password, username, email, sms });

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');