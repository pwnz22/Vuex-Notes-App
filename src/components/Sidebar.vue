<template>
    <div class="sidebar">
        <div v-if="notes.length">
            <note v-for="(note, index) in notes" :note="note" :key="index"></note>
        </div>

        <div class="sidebar__content" v-else>
            <p>Заметок нет. Напиши заметку...</p>
        </div>
    </div>
</template>

<script>
    import Note from './Note'
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'notes'
            ])
        },
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
