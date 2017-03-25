<template>
    <div class="pad">
        <input type="text" class="pad__title" placeholder="Без названия" v-model="note.title">
        <textarea class="pad__text" placeholder="Напишите что-то..." v-model="note.body"></textarea>

        <footer class="pad__footer">
            <ul class="pad__footer-items">
                <li class="pad__footer-item">Words: x</li>
                <li class="pad__footer-item">Last save: xx/xx</li>
            </ul>
        </footer>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'note'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/sass/placeholders";

    .pad {
        flex: 4;
        display: flex;
        flex-direction: column;

        &__title {
            /*width: 100%;*/
            border: 0;
            font: inherit;
            font-size: 1.6em;
            outline: none;
            padding: 20px;
            padding-left: 30px;
            padding-top: 25px;
        }

        &__text {
            flex: 1;
            /*width: 100%;*/
            margin: 0;
            padding: 20px 30px;
            border: 0;
            font: inherit;
            outline: none;
            resize: none;
            line-height: 2;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #fff 5%, #fff 95%, transparent 100%);
        }

        &__footer {
            padding: 20px 30px;

            &-items {
                @extend %inline-list;
                justify-content: space-between;
            }
        }
    }


</style>
