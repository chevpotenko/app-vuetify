import { SET_DRAWER } from '../../mutation-types'
import { TOGGLE_DRAWER } from '../../mutation-types'
import { SET_LANGUAGE } from '../../mutation-types'

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