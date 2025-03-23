export const request = (method, url, data, token) => {

    if (method === 'GET') {
        return fetch(url)
            .then(res => {
                if (res.status === 204) {
                    return;
                } else {
                    return res.json();
                }
            });
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