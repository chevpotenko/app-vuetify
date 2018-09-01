export default {
    toggleDrawer(state) {							
        state.drawer = !state.drawer;
    },
    setDrawer(state, value) {
        state.drawer = value;
    },
    toggleMiniVariant(state) {
        state.miniVariant = !state.miniVariant;
    },
    toggleClipped(state) {
        state.clipped = !state.clipped;
    },
    toggleRightDrawer(state, value) {			
        state.rightDrawer = value;
    },		
    toggleRight(state) {
        state.right = !state.right;
    },
    setLanguage(state, language){
        state.currentLanguage = language
    }
}