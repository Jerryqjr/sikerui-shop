<script setup>
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue"
</script>

<template>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <!--方式一:给router-view添加key ,破坏二级路由复用机制，强制销毁重建(刷新)
    <RouterView :key="$route.fullPath" /> -->
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
</template>

<style scoped></style>