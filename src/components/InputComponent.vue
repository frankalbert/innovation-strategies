<template>
    <div>
        <input
            type="search"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
            class="input"
        />
    </div>
</template>

<script>
export default {
    name: "InputComponent",
    props: {
        placeholder: {
            type: String,
            default: "Filter",
        },
        value: {
            require: true,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped>
.input {
    padding: 4px 8px;
    border: 1px solid #c7c7c7;
    &:focus {
        border: 1px solid #c7c7c7;
        outline: none;
    }
}
</style>
