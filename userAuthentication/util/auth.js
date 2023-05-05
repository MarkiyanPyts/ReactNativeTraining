import axios from "axios";

const API_KEY = 'AIzaSyBrsvQBEV_g080BAt3H83dZOydWUlAefNA';

async function authenticate(mode, email, password) {
    const responce = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`, {
        email,
        password,
        returnSecureToken: true
    })

    console.log("log:::", responce.data);
}

export async function createUser(email, password) {
    await authenticate('signUp', email, password);
}

export async function login(email, password) {
    await authenticate('signInWithPassword', email, password);
}
