<template>
    <div class="comment">
        <div class="comment__header">
            {{ name }} &lt;{{ email }}&gt;
        </div>
        <div class="comment__body">{{ body }}</div>
    </div>
</template>
<script>
export default {
    name: 'Comment',
    props: {
        postId: Number,
        id: Number,
        email: String,
        name: String,
        body: String
    }
}
</script>
<style lang="scss">
.comment {
    display: flex;
    flex-direction: column;
    flex: 1 0 25%;
    border: 1px solid #e5e6e7;
    background-color: #fff;
    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }

    &__header,
    &__body {
        padding: 0.5rem 1.5rem;
    }
    &__header {
        display: block;
        width: 100%;
        padding: .5rem 1rem;
        border-bottom: 1px solid #e5e6e7;
    }

    &__body {
        width: 100%;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        align-self: center;
    }
}
</style>
