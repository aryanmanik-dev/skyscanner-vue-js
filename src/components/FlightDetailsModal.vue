<template>
    <MDBBtn color="secondary" aria-controls="flightModal" @click="flightModal = true">
        Select </MDBBtn>
    <MDBModal id="flightModal" tabindex="-1" labelledby="flightModalLabel" v-model="flightModal">
        <MDBModalHeader>
            <MDBModalTitle id="flightModalLabel"> {{ data.departureAirport.city }}
                <small></small>
            </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>...</MDBModalBody>
        <MDBModalFooter>
            <MDBBtn color="secondary" @click="flightModal = false">Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
</template>

<script>
import {
    MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from "mdb-vue-ui-kit";
export default {
    components: {


        MDBBtn,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
    },
    data() {
        return {
            flightModal: false,
            data: {
                "id": "4fcfa04709d9b5aed60456be49caf92e959790e074d8dbc4abdaaff97f3b384b",
                "careerCode": "DL",
                "flight_code": "DL-5949",
                "flight_name": "Delta Air Lines",
                "stops": "2 Stops",
                "cabinType": "Economy",
                "baggage": {
                    "cabin": {
                        "qty": 1,
                        "unit": "KG",
                        "text": "7 KG",
                        "allowance": 7
                    },
                    "checkIn": {
                        "allowance": 1,
                        "qty": "N",
                        "unit": null,
                        "text": "1 PIECE",
                        "refNumber": 1,
                        "quantity": 1
                    }
                },
                "currency": "USD",
                "departureAirport": {
                    "time": "2023-11-01T02:40:00",
                    "code": "DEL",
                    "tz": "Asia/Kolkata",
                    "timeZone": "5.50",
                    "type": "1",
                    "label": "Indira Gandhi International Airport",
                    "country": {
                        "label": "India",
                        "code": "IN"
                    },
                    "city": "New Delhi"
                },
                "arrivalAirport": {
                    "time": "2023-11-01T23:11:00",
                    "code": "MOB",
                    "tz": "America/Chicago",
                    "timeZone": "-6.00",
                    "type": "3",
                    "label": "Mobile Regional Airport",
                    "country": {
                        "label": "United States",
                        "code": "US"
                    },
                    "city": "Mobile"
                },
                "path": [
                    "DL-5949",
                    "DL-31",
                    "DL-2029"
                ],
                "duration": {
                    "text": "31h 01m",
                    "value": 1861
                },
                "stopSummary": {
                    "0": {
                        "airport": "LHR",
                        "stopDuration": 320
                    },
                    "1": {
                        "airport": "ATL",
                        "stopDuration": 274
                    }
                },
                "totals": {
                    "currency": "USD",
                    "baggage": null,
                    "penalty": null,
                    "total": 764.32,
                    "tax": 391.68,
                    "base": 372.64
                }


            }
        }
    }
}
</script>

<style></style>