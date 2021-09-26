<template>
    <div>
        <h5 class="link" @click="$router.go(-1)">Go back</h5>
    </div>
</template>

<script>
export default {
    name: "GoBackComponent",
};
</script>

<style lang="scss" scoped>
.link {
    font-size: 18px;
    color: #212121;
    cursor: pointer;
}
</style>
