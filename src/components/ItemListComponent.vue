<template>
    <div>
        <ul class="list">
            <li v-for="item in list" :key="item.created" class="list__item h5">
                <router-link
                    :to="{
                        name: routeName,
                        params: { id: getIdByUrl(item.url) },
                    }"
                    class="list__item__link"
                >
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
        <PaginationComponent
            :currentPage="currentPage"
            :maxPage="maxPage"
            @nextPage="$emit('nextPage')"
            @prevPage="$emit('prevPage')"
        />
    </div>
</template>

<script>
import PaginationComponent from "./PaginationComponent.vue";
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
        currentPage: {
            type: Number,
        },
        maxPage: {
            type: Number,
        },
    },
    components: {
        PaginationComponent,
    },
    methods: {
        // Puesto que no viene un "id" en elemento del array, lo extraigo de la url que viene en cada item: "url": "https://swapi.dev/api/people/3/", donde 3 es el id de esta persona
        getIdByUrl(url) {
            const urlSplit = url.split("/");
            return urlSplit[urlSplit.length - 2] || "";
        },
    },
};
</script>

<style lang="scss" scoped>
.list {
    list-style: none;
    padding: 0;
    &__item {
        margin-bottom: 12px;
        &__link {
            position: relative;
            padding-bottom: 4px;
            color: $colorBlack;
            text-decoration: none;
            &::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background-color: $colorBlack;
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
