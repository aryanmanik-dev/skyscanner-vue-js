<template >
  <div class="container-fluid" style="background-color: #eff1f2">
    <div class="row">
      <NavbarComp />
    </div>

    <div class="row margin-on-top">
      <div class="col-md-3 mt-3 accordion-section">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Stops
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-mdb-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ol class="list-group list-group-ligh">
                  <li class="list-group-item border-0">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label class="form-check-label" for=""> Direct </label>
                      <br />
                      <small>From 15264 </small>
                    </div>
                  </li>
                </ol>
                <ol class="list-group list-group-ligh">
                  <li class="list-group-item border-0">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label class="form-check-label" for=""> 1 Stop </label>
                      <br />
                      <small>From 25264 </small>
                    </div>
                  </li>
                </ol>
                <ol class="list-group list-group-ligh">
                  <li class="list-group-item border-0">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label class="form-check-label" for=""> 2+ Stops </label>
                      <br />
                      <small>From 35264 </small>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Departure Time
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-mdb-parent="#accordionExample"
            >
              <div class="accordion-body">
                <label class="form-label" for="customRange1">Outbound </label>
                <div class="range">
                  <input
                    type="range"
                    class="form-range text-black"
                    min="0"
                    max="100"
                    step="10"
                    id="customRange3"
                  />
                </div>
              </div>
              <div class="accordion-body">
                <label class="form-label" for="customRange1">Return </label>
                <div class="range">
                  <input
                    type="range"
                    class="form-range text-black"
                    min="0"
                    max="100"
                    step="10"
                    id="customRange3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Journey Duration
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-mdb-parent="#accordionExample"
            >
              <div class="accordion-body">
                <label class="form-label" for="customRange1">
                  4.0 hours - 26.5 hours
                </label>
                <div class="range">
                  <input
                    type="range"
                    class="form-range text-black"
                    min="0"
                    max="100"
                    step="10"
                    id="customRange3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Airlines
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-mdb-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ol class="list-group list-group-ligh">
                  <li
                    class="list-group-item border-0"
                    v-for="item in 9"
                    :key="item"
                  >
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label class="form-check-label" for=""> Air India </label>
                      <br />
                      <small>From 25264 </small>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <!-- <div class="col-md-12 mt-3 mx-auto" v-for="item in loadFlights" :key="item"> -->
          <div
            class="col-md-6 mt-3 mx-auto"
            v-for="item in flightsData"
            :key="item.id"
          >
            <MDBCard>
              <MDBCardHeader class="text-center">
                {{ item.flight_name }}</MDBCardHeader
              >
              <MDBCardBody class="text-center">
                <MDBCardTitle>
                  {{
                    moment(item.departureAirport.time).format(" HH:mm A")
                  }}
                  ------------
                  {{ moment(item.arrivalAirport.time).format(" HH:mm A") }}
                </MDBCardTitle>
                <small>
                  {{ item.departureAirport.code }}
                  -------------------
                  {{ item.arrivalAirport.code }}
                </small>
                <MDBCardTitle style="display: none">
                  18:35 ------------ 19:35
                </MDBCardTitle>
                <small style="display: none">
                  18:35 ------------------- 19:35
                </small>
                <MDBCardText style="display: none"> $1209 </MDBCardText>
                <MDBCardTitle> $1209 </MDBCardTitle>
                <FlightDetailsModal />
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
        <!-- <div class="col-md-6 mt-3 mx-auto" v-for="item in flightsData" :key="item.id"> -->
      </div>
      <div class="col-md-3 mt-3">
        <img
          src="https://tpc.googlesyndication.com/simgad/10186216928764015275"
          class="px-3"
          style="margin: 0 auto"
        />
      </div>
      <!-- <button @click="loadMore">Load</button> -->
    </div>
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FlightDetailsModal from "../components/FlightDetailsModal.vue";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
} from "mdb-vue-ui-kit";

import moment from "moment";
import axios from "axios";
export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    FlightDetailsModal,
    NavbarComp,
    MDBCardHeader,
  },
  data() {
    return {
      urlParams: null,
      collapse1: false,
      dropdown1: false,

      flightsDb: [
        "1",
        "2",
        "3",
        "1",
        "2",
        "3",
        "1",
        "2",
        "3",
        "1",
        "2",
        "3",
        "1",
        "2",
        "3",
        "1",
        "2",
        "3",
      ],

      flightsData: [],
      length: 2,
    };
  },

  methods: {
    async getDetails() {
      debugger;
      try {
        const response = await axios.get(
          "https://flight-fare-search.p.rapidapi.com/v2/flights/",
          {
            headers: {
              "X-RapidAPI-Key":
                "5998a2394bmsh4a09c1a1b6d0053p199449jsn737b74638492",
              "X-RapidAPI-Host": "flight-fare-search.p.rapidapi.com",
            },
            params: this.urlParams,
          }
        );
        console.log(response.data.results);
        this.flightsData = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },

    // loadMore() {
    //     if (this.length > this.flightsDb.length) return;
    //     this.length = this.length + 3;
    // },
  },

  // computed: {
  //     loadFlights() {
  //         return this.flightsDb.slice(0, this.length);
  //     },
  // },
  mounted() {
    debugger;
    this.getDetails();
  },
  created() {
    this.urlParams = this.$route.params;
    console.log(this.$route.params);
    this.moment = moment;
  },
};
</script>

<style>
.accordion-section {
  min-height: 100vh;
}

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .accordion-section {
    min-height: auto;
  }
}
</style>