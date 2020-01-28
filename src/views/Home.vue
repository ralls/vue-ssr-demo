<template>
    <div class="home">
        <div v-if="comments.length" class="comments">
            <template v-for="comment in comments">
                <Comment :key="comment.id" v-bind="comment" />
            </template>
        </div>
        <div v-else class="comments">
            Loading...
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Comment from '@/components/Comment.vue'

export default {
    name: 'home',
    components: {
        Comment
    },
    computed: {
        comments () {
            return this.$store.state.comments
        }
    },
    serverPrefetch () {
        return this.fetchComments()
    },
    mounted () {
        if (!this.comments.length) {
            this.fetchComments()
        }
    },
    methods: {
        fetchComments () {
            return this.$store.dispatch('fetchItem')
        }
    }
}
</script>
<style lang="scss">
.comments {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .comment {
        max-width: 25%;
    }
}
</style>
