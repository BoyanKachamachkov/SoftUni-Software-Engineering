
const baseUrl = 'http://localhost:3030/jsonstore/users';

// Don't try catch them here, because we want to try catch in the UI and handle on client side

export const getAll = async () => {

    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOne = async (userId) => {

    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();


    return result;
};


export const create = async (userData) => {

    const body = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        imageUrl: userData.imageUrl,
        address: {
            country: userData.country,
            city: userData.city,
            street: userData.street,
            streetNumber: userData.streetNumber
        }
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    const result = await response.json();
    console.log(result);
    return result;

};

export const remove = async (userId) => {

    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });

    const result = await response.json();
    return result;

};