<template>
    <div class="container">
        <b-navbar>
            <template #brand>
                <b-navbar-item>
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    />
                </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item
                    :href="route('dashboard')"
                    :active="route().current('dashboard')"
                    >Dashboard</b-navbar-item
                >
                <b-navbar-item
                    :href="route('users')"
                    :active="route().current('users')"
                    >Users</b-navbar-item
                >
                <b-navbar-item
                    :href="route('packages')"
                    :active="route().current('packages')"
                    >Packages</b-navbar-item
                >
            </template>
            <template #end
                ><b-navbar-dropdown :label="$page.props.user.name">
                    <b-navbar-item :href="route('profile.show')">
                        Profile
                    </b-navbar-item>
                    <form @submit.prevent="logout">
                        <b-navbar-item href="#" @click="logout">
                            Logout
                        </b-navbar-item>
                    </form>
                </b-navbar-dropdown></template
            >
        </b-navbar>
        <slot name="header"></slot>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showingNavigationDropdown: false
        };
    },

    methods: {
        logout() {
            this.$inertia.post(route("logout"));
        }
    }
};
</script>
