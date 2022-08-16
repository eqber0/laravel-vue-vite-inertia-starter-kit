<template>
    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>
    <Header />
    <IndexContent
        contentTitle="Babel Vite Vue-Laravel Starter Kit --with SSR"
    />
</template>

<script>
import Header from "@/views/common/Header.vue";
import IndexContent from "@/views/components/Index/IndexContent.vue";
export default {
    components: {
        Header,
        IndexContent,
    },
};
</script>

<style scoped lang="scss">
.index {
    &__content {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}
</style>
