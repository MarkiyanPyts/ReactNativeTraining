import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('places.db');

export function init() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((transaction) => {
            transaction.executeSql(`CREATE TABLE IF NOT EXISTS places 
                (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL
                );
                `,
                [],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            )
        });
    });
    return promise;
}

export function insertPlace(place) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((transaction) => {
            transaction.executeSql(`INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?);`,
                [
                    place.title,
                    place.imageUri,
                    place.address,
                    place.location.lat,
                    place.location.lng
                ],
                (_, result) => {
                    console.log(result);
                    resolve(result);
                },
                (_, error) => {
                    console.log(result);
                    reject(error);
                }
            )
        });
    });
    return promise;
}