const ENDPOINT = 'https://daycay.co:8080/hotels/agreement?type=save'

export function post (body) {
    return fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(body)
    });
}
