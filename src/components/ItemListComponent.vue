<template>
    <div>
        <ul class="list">
            <li
                v-for="(item, index) in list"
                :key="item.created"
                class="list__item"
            >
                <router-link
                    :to="{ name: routeName, params: { id: index + 1 } }"
                    class="list__item__link"
                >
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ItemListComponent",
    props: {
        search: {
            type: String,
            default: "",
        },
        list: {
            type: Array,
            default: () => [],
        },
        routeName: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.list {
    list-style: none;
    padding: 0;
    &__item {
        font-size: 18px;
        margin-bottom: 12px;
        &__link {
            position: relative;
            padding-bottom: 4px;
            color: #212121;
            text-decoration: none;
            &::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: #212121;
                transition: width 0.5s;
            }
            &:hover {
                &::before {
                    width: 100%;
                }
            }
        }
    }
}
</style>
