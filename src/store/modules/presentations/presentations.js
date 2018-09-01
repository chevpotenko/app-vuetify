import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    presentations: [
        {
            id: '1',
            name: 'Presentation 1'
        },
        {
            id: '2',
            name: 'Presentation 2'
        },
        {
            id: '3',
            name: 'Presentation 3'
        },
        {
            id: '4',
            name: 'Presentation 4'
        },
        {
            id: '5',
            name: 'Presentation 5'
        },
        {
            id: '6',
            name: 'Presentation 6'
        }
    ]
};

export default {
    state,
    mutations,
    getters,
    actions
};