<template>
    <app-layout>
        <template #header>
            Users
        </template>
    </app-layout>
</template>

<script>
export default {
    props: {
        users: {
            type: Array
        }
    }
};
</script>

<style></style>
