<template>
    <div>
        <ul class="pagination d-flex">
            <li
                class="
                    pagination__item
                    d-flex
                    justify-center
                    align-items-center
                    arrow
                "
                :class="{ disabled: currentPage <= 1 }"
                @click="$emit('prevPage')"
            >
                ❮
            </li>
            <li
                class="
                    pagination__item
                    d-flex
                    justify-center
                    align-items-center
                    active
                "
            >
                {{ currentPage }}
            </li>
            <li
                class="
                    pagination__item
                    d-flex
                    justify-center
                    align-items-center
                    arrow
                "
                :class="{ disabled: currentPage >= maxPage }"
                @click="$emit('nextPage')"
            >
                ❯
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PaginationComponent",
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        maxPage: {
            type: Number,
        },
    },
};
</script>

<style lang="scss" scoped>
.pagination {
    padding: 0;
    list-style: none;
    &__item {
        margin: 4px;
        padding: 6px;
        min-width: 40px;
        height: 40px;
        border: 1px solid #212121;
        cursor: pointer;
        &.active,
        &:hover {
            &:not(.disabled) {
                background-color: #f65656;
                color: #fff;
            }
        }
        &.disabled {
            background-color: #c7c7c7;
            position: relative;
            pointer-events: none;
            &::before {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                z-index: 1;
            }
        }
    }
}
</style>
