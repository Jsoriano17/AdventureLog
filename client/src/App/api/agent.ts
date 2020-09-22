import axios, { AxiosResponse } from 'axios';
import { IMessage } from '../models/message';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody) 
};

const Messages = {
    list: (): Promise<IMessage[]> => requests.get('/messages'),
    details: (id: string) => requests.get(`/messages/${id}`),
    create: (activity: IMessage) => requests.post('/messages', activity),
    update: (activity: IMessage) => requests.put(`/messages/${activity.id}`, activity),
    delete: (id: string) => requests.del(`/messages/${id}`)
}

export default {
    Messages
}