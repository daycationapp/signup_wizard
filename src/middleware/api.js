const ENDPOINT = (__DEV__ ? 'http://localhost:8081' : 'https://falconheavy.daycationapp.com/') + 'api/hotels/agreement?type=save'

export function post (body) {
    let bodyData = new FormData();
    Object.keys(body).map((key) => {
        bodyData.append(key, body[key]);
    });

    return fetch(ENDPOINT, {
        method: 'POST',
        credentials: 'include',
        body: bodyData
    });
}
