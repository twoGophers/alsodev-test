<template>
    <div class="modal-auth" v-if="authModal">
		<div class="modal-dialog modal-dialog-auth">
			<button class="close-auth" @click="hideModal()">&times;</button>
			<form id="logInForm"  @submit.prevent="setAuth">
				<fieldset class="modal-body">
					<legend class="modal-title">Авторизация</legend>
					<label class="label-auth">
						<span>Логин</span>
						<input 
							id="login" 
							type="text"
							v-model="form.login" 
							required
							>
					</label>
					<label class="label-auth">
						<span>Пароль</span>
						<input 
							id="password" 
							type="password"
							v-model="form.password"  
							required
							>
					</label>
				</fieldset>
				<div class="modal-footer">
					<h3 v-if="succesMessage.lenght !== 0 ">{{ succesMessage }}</h3>
					<div class="footer-buttons">
						<button class="button button-primary button-login" type="submit">Войти</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
    name: 'PopupCart',
	data() {
		return {	
			form: {
				login: '',
				password: ''
			}
		}
	},
    computed: {
        authModal() {
            return this.$store.getters['auth/authModal'];
        },
        succesMessage() {
            return this.$store.getters['auth/succesMessage'];
        },
    },
    methods: {
		hideModal() {
            this.$store.dispatch('auth/getShowModal', false);
		},
		async setAuth() {
			await this.$store.dispatch('auth/getAuth', this.form);
		}
    },

}
</script>