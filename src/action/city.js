export function addCity(payload) {
    return {
        type: 'ADD',
        payload,
    };
}

export function deleteCity(payload) {
    return {
        type: 'DELETE',
        payload,
    };
}
