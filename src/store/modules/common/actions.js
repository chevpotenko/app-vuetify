import { SET_LANGUAGE } from '../../mutation-types'

export default {   
    [SET_LANGUAGE]({ commit }, language) {
        commit(SET_LANGUAGE, language)       
    }
}