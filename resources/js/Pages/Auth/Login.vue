<template>
    <div class="container custom-container">
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <div class="columns is-vcentered is-centered">
            <div class="column is-half">
                <div class="card">
                    <div class="card-content">
                        <form @submit.prevent="submit">
                            <b-field type="" message="" label="Email">
                                <b-input
                                    type="email"
                                    v-model="form.email"
                                ></b-input>
                            </b-field>
                            <b-field label="Password">
                                <b-input
                                    type="password"
                                    password-reveal
                                    v-model="form.password"
                                ></b-input>
                            </b-field>
                            <div class="buttons">
                                <b-button
                                    type="is-primary"
                                    expanded
                                    @click="submit"
                                    >Login</b-button
                                >
                            </div>
                            <b-field>
                                <b-checkbox v-model="form.remember">
                                    Remember Me?
                                </b-checkbox>
                            </b-field>

                            <div class="flex items-center justify-end mt-4">
                                <inertia-link
                                    v-if="canResetPassword"
                                    :href="route('password.request')"
                                    class="underline text-sm text-gray-600 hover:text-gray-900"
                                >
                                    Forgot your password?
                                </inertia-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}
</style>

<script>
export default {
    props: {
        canResetPassword: Boolean,
        status: String
    },

    data() {
        return {
            form: this.$inertia.form({
                email: "",
                password: "",
                remember: false
            })
        };
    },

    methods: {
        submit() {
            this.form
                .transform(data => ({
                    ...data,
                    remember: this.form.remember ? "on" : ""
                }))
                .post(this.route("login"), {
                    onFinish: () => this.form.reset("password")
                });
        }
    }
};
</script>
