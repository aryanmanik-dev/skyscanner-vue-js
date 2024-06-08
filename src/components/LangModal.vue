<template>
    <MDBModal id="exampleModal" tabindex="-1" labelledby="exampleModalLabel" v-model="exampleModal">
        <MDBModalHeader>
            <MDBModalTitle id="exampleModalLabel"> Modal title </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>...</MDBModalBody>
        <MDBModalFooter>
            <MDBBtn color="secondary" @click="exampleModal = false">Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
</template>

<script>
import {

    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn
} from "mdb-vue-ui-kit";
export default {

    components:{
MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    }

    
}
</script>

<style></style>