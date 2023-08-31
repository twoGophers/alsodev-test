import db from '~/api/db.json';
import partners from '~/api/partners.json';
import pizza_plus from '~/api/pizza-plus.json';
import tanuki from '~/api/tanuki.json';
import food_band from '~/api/food-band.json';
import palki_skalki from '~/api/palki-skalki.json';
import gusi_lebedi from '~/api/gusi-lebedi.json';
import pizza_burger from '~/api/pizza-burger.json';

export const state = () => ({
    partners: [],
    catalog: [],
    product: []
});
  
export const mutations = {
    setPartners(state, partners) {
        let newArray = partners.map(obj => ({
            ...obj,
            ['url']: `/catalog/${obj.products.replace('.json', '')}`
          }));

        state.partners = newArray;
    },

    setCatalog(state, path) {

        if(path) {
            let product = partners.filter((obj) => obj.products.replace('.json', '') === path.replace("/catalog/", ""));
            state.product = product[0]
        }

        if(path === '/catalog/pizza-plus') {
            state.catalog = pizza_plus;
        } else if (path === '/catalog/tanuki') {
            state.catalog = tanuki;
        } else if (path === '/catalog/food-band') {
            state.catalog = food_band;
        } else if (path === '/catalog/palki-skalki') {
            state.catalog = palki_skalki;
        } else if (path === '/catalog/gusi-lebedi') {
            state.catalog = gusi_lebedi;
        } else if (path === '/catalog/pizza-burger') {
            state.catalog = pizza_burger;
        }
    },

    setCheap(state) {
        state.catalog.sort((a, b) => b.price - a.price);
    },

    setExpensive(state) {
        state.catalog.sort((a, b) => a.price - b.price);
    },
};
  
export const actions = {

    async fetchPartners({ commit }) {
        try {
            commit('setPartners', db.db.partners);
        } catch (error) {
            console.error('Error fetching partners:', error);
        }
    },

    async fetchCatalog({ commit }, path) {
        try {
            commit('setCatalog', path);
        } catch (error) {
            console.error('Error fetching catalog:', error);
        }
    },

    async getCheap({ commit }) {
        try {
            commit('setCheap');
        } catch (error) {
            console.error('Error Cheap:', error);
        }
    },

    async getExpensive({ commit }) {
        try {
            commit('setExpensive');
        } catch (error) {
            console.error('Error Cheap:', error);
        }
    },
};
