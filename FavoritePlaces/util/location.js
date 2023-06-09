const GOOGLE_API_KEY = 'AIzaSyBE_EkLSXobcdtG4Ra1oFu4mTSbwQXD2js';

export function getMapPreview(lat, lng) {
    if (!lat || !lng) {
        return null;
    }

    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=5&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}
    &key=${GOOGLE_API_KEY}`;
}

export async function getAddress(lat, lng) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`);

    if (!response.ok) {
        throw new Error('Something went wrong!');
    }

    const data = await response.json();
    const address = data.results[0].formatted_address;
    return address;
}