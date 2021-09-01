// state
export const state = () => ({
    details: {
        categoriaEstudios: [],
        estudiosCompletos: [],
        estudiosPendientes: []
    }
});

// getters
export const getters = {
    auth(state) {
        return state.auth
    },
    details(state) {
        return state.details
    }
};

// mutations
export const mutations = {
    set_profile(state, data) {
        state.auth.user = data;
    },
    set_details(state, data) {
        state.details = data;
    }
};

// actions
export const actions = {
    async get_profile({ commit }) {
        const { user } = await this.$axios.$get('perfil');
        commit('set_profile', user);
    },
    async get_details({ commit }, cvePaciente) {
        const data = await this.$axios.$get('usuario/detalle/'+ cvePaciente);
        commit('set_details', data);
    }
};