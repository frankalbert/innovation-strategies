<template>
    <div class="modal-error d-flex justify-center align-items-center">
        <div class="modal-error__c">
            <div class="modal-error__title py-4">
                <div class="col-12 d-flex justify-center flex-column">
                    <img
                        src="https://100dayscss.com/codepen/alert.png"
                        width="44"
                        height="38"
                    />
                </div>
            </div>
            <div class="modal-error__body py-4">
                <div class="col-12">
                    <h5 class="h5">{{ infoModalError.title }}</h5>
                    <p class="p">{{ infoModalError.body }}</p>
                </div>
            </div>
            <div class="modal-error__footer d-flex justify-center pt-4">
                <button class="button" @click="clickCloseModal">Cerrar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "ModalErrorComponent",
    computed: {
        ...mapState(["infoModalError"]),
    },
    methods: {
        ...mapMutations(["setShowModalError", "setInfoModalError"]),
        clickCloseModal() {
            this.setShowModalError(false);
            this.setInfoModalError({});
        },
    },
};
</script>

<style lang="scss" scoped>
.modal-error {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.85);
    &__c {
        width: 96%;
        max-width: 400px;
        background: $colorWhite;
    }
    &__body {
        text-align: center;
        .h5 {
            margin: 0;
            text-align: center;
        }
        .p {
            font-size: 17px;
        }
    }
    &__footer {
        .button {
            padding: 14px 16px;
            width: 100%;
            background-color: $colorRed;
            color: $colorWhite;
            border: none;
            cursor: pointer;
            &:hover {
                background-color: $colorRed;
            }
        }
    }
}
</style>
