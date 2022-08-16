<template>
    <Head>
        <title>{{ $page.props.title }} - My awesome app</title>
    </Head>
    <Header />
    <IndexContent contentTitle="This Is An About Page" />
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
