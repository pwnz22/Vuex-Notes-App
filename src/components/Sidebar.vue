<template>
    <div class="sidebar">
        <note></note>
        <note></note>
        <note></note>

        <!--<div class="sidebar__content">-->
        <!--Заметок нет. Напиши заметку...-->
        <!--</div>-->
    </div>
</template>

<script>
    import Note from './Note'

    export default {
        components: {Note}
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        background: #f9f9f9;
        flex: 1;
        height: 100%;
        min-width: 35%;
        border-right: 2px solid #eee;
        overflow-y: auto;

        &__content {
            padding: 30px;

            a {
                text-decoration: none;
                color: inherit;
            }
        }
    }
</style>
