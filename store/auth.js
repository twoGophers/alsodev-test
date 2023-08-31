export const state = () => ({
    authModal: false,
    setAuth: {
        login: '',
        password: ''
    },
    succesMessage: '',
    authorization: false
});
  
export const mutations = {
    setShowModal(state, params) {
        state.authModal = params;
    },

    setAuth(state, params) {
        let { login, password } = params;

        if ( login === process.env.USER && password === process.env.PASSWORD ) {
            state.succesMessage = 'Вы вошли в систему';

        } else {
            console.log('not admin');
        }
    },

    clearSuccessMessage(state) {
        state.succesMessage = '';
    },

    setAuthorization(state, params) {
        state.authorization = params;
    }
}
  
  
export const actions = {
    getShowModal({ commit }, params ) {
        try {
            commit('setShowModal', params )
        } catch (error) {
            console.error('Error show modal auth:', error);
        }
    },
    async getAuth({ commit }, params) {
        try {
            
            if ( params.login === process.env.USER && params.password === process.env.PASSWORD ) { 

                commit('setAuth', params);
                commit('setAuthorization', true);

                setTimeout(() => {
                    commit('clearSuccessMessage');
                    commit('setShowModal', false);
                }, 1000);
            }
        } catch (error) {
            console.error('Error auth:', error);
        }
    },
};

export const getters = {
    authModal: s => s.authModal,
    succesMessage: s => s.succesMessage,
    authorization: s => s.authorization,
}
  