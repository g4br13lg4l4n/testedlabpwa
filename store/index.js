import { Loading } from 'element-ui';
// state
export const state = () => ({
    details: {
        categoriaEstudios: [],
        estudiosCompletos: [],
        estudiosPendientes: []
    },
    categoriasEstudios: [],
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
    },
    categoriasEstudios(state) {
        return state.categoriasEstudios;
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
    },
    set_categories(state, data) {
        state.categoriasEstudios = data;
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
    },
    async get_categories({commit}, id) {
        const loading = await Loading.service({ fullscreen: true });
        const { categoria_estudios } = await this.$axios.$get(`usuario/categoria/${id}`);
        await loading.close();
        commit('set_categories', categoria_estudios);
    },
    async get_test_by_category({commit}, filter) {
        const loading = await Loading.service({ fullscreen: true });
        const data = await this.$axios.$get(`usuario/categoria/${filter?.cvePaciente}/${filter?.category}`);
        await loading.close();

    } 
};