<template>
    <MDBNavbar expand="lg" light bg="light" container  class="fixed-top">
        <MDBNavbarBrand class="m-2" @click="this.$router.push('/home')">
            <img style="width: 120px" src="https://dpogroup.com/wp-content/uploads/2017/11/skyscanner-scaled.jpeg" alt="" />
        </MDBNavbarBrand>
        <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent"></MDBNavbarToggler>


        <MDBCollapse v-model="isModal" id="navbarSupportedContent">
            <MDBNavbarNav class="mb-2 mb-lg-0">
                <MDBNavbarItem style="display: none">
                    <MDBDropdown class="nav-item" v-model="dropdown1">
                        <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown1 = !dropdown1">Dropdown
                        </MDBDropdownToggle>
                    </MDBDropdown>
                </MDBNavbarItem>
            </MDBNavbarNav>

            <div class="d-flex input-group w-auto">
                <span class="mx-2">Help</span>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                    Launch demo modal
                </button>


                <MDBBtn color="secondary" class="mx-2"> Log In </MDBBtn>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" v-if="showModal" style="background-color: transparent;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </MDBCollapse>
    </MDBNavbar>
</template>

<script>
import {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    //   MDBModal,
    //   MDBModalHeader,
    //   MDBModalTitle,
    //   MDBModalBody,
    //   MDBModalFooter,
} from "mdb-vue-ui-kit";
export default {
    components: {
        MDBNavbar,
        MDBNavbarToggler,
        MDBNavbarBrand,
        MDBNavbarNav,
        MDBNavbarItem,
        MDBCollapse,
        MDBDropdown,
        MDBDropdownToggle,
        MDBBtn,
        // MDBModal,
        // MDBModalHeader,
        // MDBModalTitle,
        // MDBModalBody,
        // MDBModalFooter,
    },
    data() {
        return {
            urlParams: null,
            collapse1: false,
            dropdown1: false,
            exampleModal: false,
            isModal: false,
            showModal: true, // Initially show the modal

        };
    },

    methods: {
        closeModal() {
            this.showModal = false;
        },
    },
};
</script>

<style scoped>
::v-deep.modal-backdrop {
    --mdb-backdrop-zindex: 0 !important;
    --mdb-backdrop-bg: none;
    --mdb-backdrop-opacity: 0.1 !important;
}

.modal-backdrop.show {
    opacity: 0.1 !important;
}
</style>
