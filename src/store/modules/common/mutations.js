import { SET_DRAWER, TOGGLE_DRAWER, SET_LANGUAGE } from '../../mutation-types'

export default {
    [SET_DRAWER](state, value) {
        state.drawer = value;
    },      
    [TOGGLE_DRAWER](state) {							
        state.drawer = !state.drawer;
    },
    [SET_LANGUAGE](state, language) {
        state.currentLanguage = language
    }
}