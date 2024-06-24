export function getImage(image) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '44542609-ff8a36f5b6e289e3f6d4e0ccb',
        q: image,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    })
    const url = `${BASE_URL}${END_POINT}?${params}`;

    return fetch(url).then(res => res.json());
}