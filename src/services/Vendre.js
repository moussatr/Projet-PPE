import axios from 'axios';

export const getVendre = async (data) => {
    try {
        const res = await axios.get(
            'http://192.168.208.79:4500/classes', data
        );
        console.log('getSessions', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

import axios from 'axios';

export const postVendre = async (data) => {
    try {
        const res = await axios.post(
            'http://192.168.208.79:4500/classes', data
        );
        console.log('getSessions', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};