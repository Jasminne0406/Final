<template>
    <studentAccountPage></studentAccountPage>
    <sidebar_navbar_admin></sidebar_navbar_admin>
</template>
<script>
    import studentAccountPage from '../views/studentAccountPage.vue';
    import sidebar_navbar_admin from '../components/sidebar_navbar_admin.vue';

    export default {
    name: "adminPage",
    components: {
        studentAccountPage,
        sidebar_navbar_admin
    },
};
</script>