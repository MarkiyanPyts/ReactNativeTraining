import axios from 'axios';

const BACKEND_URL = 'https://react-native-cource-c0ae0-default-rtdb.europe-west1.firebasedatabase.app';

export async function storeExpence(expenceData) {
    const responce = await axios.post(
        `${BACKEND_URL}/expences.json`,
        expenceData
    );

    const id = responce.data.name;
    return id;
}

export async function fetchExpences() {
    const responce = await axios.get(
        `${BACKEND_URL}/expences.json`
    );

    const expences = [];

    for (const key in responce.data) {
        const responceObj = {
            id: key,
            amount: responce.data[key].amount,
            date: new Date(responce.data[key].date),
            description: responce.data[key].description,
        }

        expences.push(responceObj);
    }

    return expences;
}

export function updateExpence(id, expenceData) {
    return axios.put(`${BACKEND_URL}/expences/${id}.json`, expenceData)
}

export async function deleteExpence(id) {
    return axios.delete(`${BACKEND_URL}/expences/${id}.json`)
}