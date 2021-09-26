<template>
    <div class="container">
        <LoadingComponent v-if="showLoading" />
        <router-view> </router-view>
    </div>
</template>

<script>
import LoadingComponent from "./components/LoadingComponent.vue";
import { mapState } from "vuex";

export default {
    name: "App",
    components: {
        LoadingComponent,
    },
    computed: {
        ...mapState(["showLoading"]),
    },
};
</script>

<style lang="scss">
body {
    margin: 0;
    background-color: #edf2f8;
    * {
        box-sizing: border-box;
    }
}
.m {
    &-0 {
        margin: 0 !important;
    }
    &y {
        &-0 {
            margin-top: 0px;
            margin-bottom: 0px;
        }
        &-1 {
            margin-top: 40px;
            margin-bottom: 40px;
        }
        &-2 {
            margin-top: 32px;
            margin-bottom: 32px;
        }
        &-3 {
            margin-top: 24px;
            margin-bottom: 24px;
        }
        &-4 {
            margin-top: 16px;
            margin-bottom: 16px;
        }
        &-5 {
            margin-top: 8px;
            margin-bottom: 8px;
        }
    }
    &x {
        &-0 {
            margin-left: 0px;
            margin-right: 0px;
        }
        &-1 {
            margin-left: 40px;
            margin-right: 40px;
        }
        &-2 {
            margin-left: 32px;
            margin-right: 32px;
        }
        &-3 {
            margin-left: 24px;
            margin-right: 24px;
        }
        &-4 {
            margin-left: 16px;
            margin-right: 16px;
        }
        &-5 {
            margin-left: 8px;
            margin-right: 8px;
        }
    }
}
.p {
    &-0 {
        padding: 0 !important;
    }
    &y {
        &-0 {
            padding-top: 0px;
            padding-bottom: 0px;
        }
        &-1 {
            padding-top: 40px;
            padding-bottom: 40px;
        }
        &-2 {
            padding-top: 32px;
            padding-bottom: 32px;
        }
        &-3 {
            padding-top: 24px;
            padding-bottom: 24px;
        }
        &-4 {
            padding-top: 16px;
            padding-bottom: 16px;
        }
        &-5 {
            padding-top: 8px;
            padding-bottom: 8px;
        }
    }
    &x {
        &-0 {
            padding-left: 0px;
            padding-right: 0px;
        }
        &-1 {
            padding-left: 40px;
            padding-right: 40px;
        }
        &-2 {
            padding-left: 32px;
            padding-right: 32px;
        }
        &-3 {
            padding-left: 24px;
            padding-right: 24px;
        }
        &-4 {
            padding-left: 16px;
            padding-right: 16px;
        }
        &-5 {
            padding-left: 8px;
            padding-right: 8px;
        }
    }
}
.d {
    &-flex {
        display: flex;
        flex-wrap: wrap;
    }
}
.justify {
    &-start {
        justify-content: flex-start;
    }
    &-center {
        justify-content: center;
    }
    &-end {
        justify-content: flex-end;
    }
}
.align {
    &-items {
        &-start {
            align-items: flex-start;
        }
        &-center {
            align-items: center;
        }
        &-end {
            align-items: flex-end;
        }
    }
}
.container {
    padding: 0 16px;
    .row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -16px;
    }
    .col {
        padding: 0 16px;
        &-3 {
            width: 25%;
            flex-basis: 25%;
            @extend .col;
        }
        &-4 {
            width: 33.33%;
            flex-basis: 33.33%;
            @extend .col;
        }
        &-12 {
            width: 100%;
            flex-basis: 100%;
            @extend .col;
        }
        &-md {
            &-3 {
                width: 25%;
                flex-basis: 25%;
            }
            &-4 {
                @media (min-width: 767px) {
                    width: 33.33%;
                    flex-basis: 33.33%;
                }
            }
            &-12 {
                @media (min-width: 767px) {
                    width: 100%;
                    flex-basis: 100%;
                }
            }
        }
        &-lg {
            &-3 {
                width: 25%;
                flex-basis: 25%;
            }
            &-4 {
                @media (min-width: 991px) {
                    width: 33.33%;
                    flex-basis: 33.33%;
                }
            }
            &-12 {
                @media (min-width: 991px) {
                    width: 100%;
                    flex-basis: 100%;
                }
            }
        }
        &-xl {
            &-3 {
                width: 25%;
                flex-basis: 25%;
            }
            &-4 {
                @media (min-width: 991px) {
                    width: 33.33%;
                    flex-basis: 33.33%;
                }
            }
            &-12 {
                @media (min-width: 991px) {
                    width: 100%;
                    flex-basis: 100%;
                }
            }
        }
    }
}
</style>
