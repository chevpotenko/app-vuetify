import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    clipped: false,
    drawer: false,
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'App - Vue',
    menu: [
        {
            icon: 'home',
            title: 'Home',
            link: '/'
        },
        {
            icon: 'bubble_chart',
            title: 'eDetailing',
            link: 'edetailing'
        },
        {
            icon: 'email',
            title: 'Templates',
            link: 'templates'
        }
    ],		
    currentLanguage: {
        id: 'en',
        name: 'English'
    },
    languages: [
        {
            id: 'en',
            name: 'English'
        },
        {
            id: 'ja',
            name:'Japanese'
        }
    ]
};

export default {
    state,
    mutations,
    getters,
    actions
};