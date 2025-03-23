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

    if (data) {
        return fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)
        })
    } else {
        return fetch(url, {
            method,
            headers: {
                'X-Authorization': token
            },
        })
    }


}