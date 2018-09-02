export default {
    toggleDrawer(state) {							
        state.drawer = !state.drawer;
    },
    setDrawer(state, value) {
        state.drawer = value;
    },      
    setLanguage(state, language) {
        state.currentLanguage = language
    }
}