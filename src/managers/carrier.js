import Cookie from 'js-cookie'
import RouterStore from '../store/route'


export default class Carrier {

    static getBackendUrl(url) {
        return `${RouterStore.baseBackendUrl}${url}`;
    }

    static getCSRFToken() {
        return Cookies.get('csrftoken');
    }

    static get(url) {
        const _url = this.getBackendUrl(url);
        const CSRFToken = this.getCSRFToken();

        return fetch(_url, {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'X-CSRFToken': CSRFToken,
            },
        }).then((response) => response.json());
    }


}
