<template>
    <header class="header">
        <Link :href="route('homepage')">Homepage</Link>
        <Link :href="route('about')">About</Link>
    </header>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/sass/config/variables";
.header {
    position: fixed;
    top: 0;
    background: var(--ui-bg);
    width: 100%;
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    & > a {
        margin-right: 5rem;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
