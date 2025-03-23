export const request = (method, url, data, token) => {

    if (url.includes('logout')) {
        return fetch(url, {
            method,
            headers: {
                'X-Authorization': token
            }
        })
    }

    if (method === 'GET') {
        return fetch(url)
            .then(res => res.json());
    }

    if (data && !token) {

        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json());

    } else if (!data && token) {

        return fetch(url, {
            method,
            headers: {
                'X-Authorization': token
            },
        })
            .then(res => res.json());
    }


}