import { Loading } from 'element-ui';
// state
export const state = () => ({
    details: {
        categoriaEstudios: [],
        estudiosCompletos: [],
        estudiosPendientes: []
    },
    test: {}
});

// getters
export const getters = {
    auth(state) {
        return state.auth;
    },
    details(state) {
        return state.details;
    },
    test(state) {
        return state.test;
    }
};

// mutations
export const mutations = {
    set_profile(state, data) {
        state.auth.user = data;
    },
    set_details(state, data) {
        state.details = data;
    },
    set_test(state, data) {
        state.test = data;
    }
};

// actions
export const actions = {
    async get_profile({ commit }) {
        const { user } = await this.$axios.$get('perfil');
        commit('set_profile', user);
    },
    async get_details({ commit }, cvePaciente) {
        const loading = await Loading.service({ fullscreen: true });
        const data = await this.$axios.$get('usuario/detalle/'+ cvePaciente);
        await loading.close();
        commit('set_details', data);
    },
    async get_test({commit}, { cvePaciente, folio }) {
        const loading = await Loading.service({ fullscreen: true });
        const data = await this.$axios.$get(`resultado/${cvePaciente}/${folio}`);
        await loading.close();
        commit('set_test', data);
    }
};