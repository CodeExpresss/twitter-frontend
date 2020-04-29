export default {
    baseBackendUrl: 'http://localhost:8000',
    //TODO baseStaticUrl

    api: {
        user: {
            register: '/api/user/register/',
            login: '/api/user/login/',
            current: '/api/user/current/',
            update: '/api/user/update/'
        },
        profile: {
            current: '/api/profile/current',
            update: 'api/profile/update',
        },
        tweet: {
            index: '/api/tweet/index/',
            create: '/api/tweet/create/',
            vote: '/api/tweet/vote',

        }
    },

    website: {
        index: '/',
        profile: '/profile/',
        login: '/login/',
        register: '/signup/',
        home: 'home',
    },
}