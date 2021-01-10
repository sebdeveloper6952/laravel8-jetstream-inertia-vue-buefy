<template>
    <app-layout>
        <template #header>
            Profile
        </template>
        <template #content>
            <update-profile-information-form :user="$page.props.user" />
        </template>
    </app-layout>
</template>

<script>
import UpdateProfileInformationForm from "./UpdateProfileInformationForm.vue";

export default {
    components: { UpdateProfileInformationForm },
    props: ["sessions"]
};
</script>
