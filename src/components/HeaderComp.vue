<template>
  <div class="col-md-10 mt-3 mx-auto">
    <div>
      <header>
        <nav class="navbar navbar-expand-sm navbar-dark">
          <a class="navbar-brand" @click="this.$router.push('/home')">
            SkyScanner
          </a>
          <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
            aria-label="Toggle navigation"></button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0"></ul>
            <div class="text-white d-flex justify-content-around align-items-center">
              <div class="d-flex align-items-center p-1">
                <img width="25px" src="../assets/icons/globe.png" class="iconChange" alt="" />
              </div>
              <div class="d-flex align-items-center p-1">
                <img width="25px" src="../assets/icons/user.png" alt="" />
                Log In
              </div>
              <div class="d-flex align-items-center p-1">
                <img width="25px" src="../assets/icons/menu.png" alt="" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>

    <!-- search -->

    <div class="mt-5 search-content">
      <h3 class="mb-3">
        <b> Millions of cheap flights. One simple search. </b>
      </h3>

      <div class="mb-3">
        <b-button class="btn btn-sm text-white border border-light">Flights</b-button>
        <b-button class="btn btn-sm text-white border border-light " @click="this.$router.push('/hotels')">Hotels</b-button>
        <b-button class="btn btn-sm text-white border border-light">Car Hire</b-button>
      </div>
      <form @submit.prevent="searchRoutes">
        <div class="row">
          <!-- <form> -->
          <div class="col-md-4 mb-3">
            <select class="form-control" v-model="searchData.from">
              <option :value="searchData.from" disabled>{{searchData.from}}</option>
              <option v-for="country in countries" :key="country.id" :value="country.iso2">{{ country.name }}</option>
            </select>
            <!-- <p>Selected country: {{ searchData.from ? countries.find(c => c.id === searchData.from).name : 'None' }}</p> -->
          </div>
          <div class="col-md-4 mb-3">
            <select class="form-control" v-model="searchData.to">
              <option :value="searchData.to"  disabled>Select a country</option>
              <option v-for="country in countries" :key="country.id" :value="country.iso2">{{ country.name }}</option>
            </select>


          </div>
          <div class="col-md-4 mb-3">
            <input type="date" @input="validateDate" v-model="searchData.date" placeholder="Depart"
              class="form-control" />
          </div>

          <div class="col-md-4 mb-3">
            <input type="date" class="form-control" />
          </div>
          <div class="col-md-4 mb-3">
            <input type="text" class="form-control" placeholder="Travellers" />
          </div>
          <div class="col-md-4">
            <button type="submit" class="form-control btn btn-primary search-btn">Search</button>
          </div>

          <div class="col-md-4 mt-2">
            <input type="checkbox" />
            &nbsp;
            <label>Direct flights</label>
          </div>
          <!-- </form> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import moment from 'moment'
export default {
  components: {

  },
  name: "HeaderComp",
  data() {
    return {
      flightsData: [],
      searchData: {
        from: 'DEL',
        to: 'BOM',
        date: moment().format('YYYY-MM-DD'),
        adult: '1',
        type: 'economy',
        currency: 'USD'
      },
      countries: [],
      dropdown1: false
    }
  },

  methods: {
    validateDate() {
      debugger
      const selectedDate = new Date(this.searchData.date);
      const today = new Date();

      // Check if the selected date is in the past
      if (selectedDate < today) {
        alert("Please select a valid current or future date.");
        this.searchData.date = today.toISOString().split('T')[0]; // Set it to today's date
      }
    },
    async searchRoutes() {

      // try {
      this.$router.push({
        name: "flights", params: {
          from: this.searchData.from,
          to: this.searchData.to,
          date: this.searchData.date,
          adult: this.searchData.adult,
          type: this.searchData.type,
          currency: this.searchData.currency
        }
      })



      //   const response = await axios.get('https://flight-fare-search.p.rapidapi.com/v2/flights/', {
      //     headers: {
      //       'X-RapidAPI-Key': '5998a2394bmsh4a09c1a1b6d0053p199449jsn737b74638492',
      //       'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
      //     },
      //     params: this.searchData
      //   })
      //   console.log(response.data.results);
      //   this.flightsData = response.data.results
      // } catch (error) {
      //   console.log(error);
      // }

    },


    async getCitiesandCountries() {
      try {
        const response = await axios.get('https://api.countrystatecity.in/v1/countries/IN/states', {
          headers: {
            'X-CSCAPI-KEY': 'cmFHRXEzZW5LRXhSb2dNazRxeG5yalFleDl4RkhsQUNaZjRZaHZRZQ==',
          },
        })
        console.log(response.data);

        this.countries = response.data


      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted() {
    this.getCitiesandCountries()
  },

  created() {
    this.moment = moment;
  }
};
</script>


<style scoped>
.header input[type="text"],
select,
input[type="date"] {
  height: 4.5rem;
}

.search-btn {
  height: 4.5rem;
  line-height: 3.5rem;
}
.iconChange{
  cursor: pointer;
}
.iconChange:hover{


}
</style>