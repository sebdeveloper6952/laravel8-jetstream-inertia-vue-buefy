<template>
    <div>
        <template>
            Update Password
        </template>

        <template>
            Ensure your account is using a long, random password to stay secure.
        </template>

        <template>
            <div class="col-span-6 sm:col-span-4">
                <input type="text" />Current password
            </div>

            <div class="col-span-6 sm:col-span-4"></div>

            <div class="col-span-6 sm:col-span-4"></div>
        </template>

        <template>
            Save
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: this.$inertia.form({
                current_password: "",
                password: "",
                password_confirmation: ""
            })
        };
    },

    methods: {
        updatePassword() {
            this.form.put(route("user-password.update"), {
                errorBag: "updatePassword",
                preserveScroll: true,
                onSuccess: () => this.form.reset(),
                onError: () => {
                    if (this.form.errors.password) {
                        this.form.reset("password", "password_confirmation");
                        this.$refs.password.focus();
                    }

                    if (this.form.errors.current_password) {
                        this.form.reset("current_password");
                        this.$refs.current_password.focus();
                    }
                }
            });
        }
    }
};
</script>
