<template class>
  <div>
    <div class="col-md-10 mx-auto">
      <Spinner :isSpinner="isSpinner" />
      <h3>
        <b> The most popular flights right now </b>
      </h3>
      <p>
        Other travellers are loving these destinations. Search and compare
        flights, hotels, and car hire and join them on the adventure.
      </p>
      <div class="row mt-5">
        <div class="col-md-4 mb-4" v-for="item in cardItems" :key="item.id">
          <div class="card">
            <img :src="item.url" class="card-img-top" alt="Card Image" />

            <div class="card-body text-center">
              <b class="card-title">{{ item.title }}</b>

              <ul class="list-unstyled">
                <li class="d-inline">Flights&nbsp;&nbsp;&nbsp;</li>
                <li class="d-inline">Hotels &nbsp;&nbsp;&nbsp;</li>
                <li class="d-inline">Car Hiire&nbsp;&nbsp;&nbsp;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3>
        <b> Book cheap flights, hotels and car hire with Skyscanner </b>
      </h3>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import axios from "axios";
export default {
  components: {
    Spinner,
  },

  data() {
    return {
      cardItems: [],
      countries: [],
      spinnerValue: false,
    };
  },

  methods: {
    async dummyData() {
      try {
        // this.isSpinner = true;

        const response = await axios.get(
          "https://api.slingacademy.com/v1/sample-data/photos"
        );
        console.log(response.data);

        const limitedPost = response.data.photos;

        this.cardItems = limitedPost;

        console.log(this.cardItems);
        // this.isSpinner = false;
      } catch (error) {
        console.log(error);
      }
    },
    // async getCitiesandCountries() {
    //   try {
    //     const response = await axios.get('https://api.countrystatecity.in/v1/countries', {
    //       headers: {
    //         'X-CSCAPI-KEY': 'cmFHRXEzZW5LRXhSb2dNazRxeG5yalFleDl4RkhsQUNaZjRZaHZRZQ==',
    //       },
    //     })
    //     let countriesF = response.data.filter((country) => {
    //       return country.name
    //     });

    //     this.countries = countriesF
    //     console.log(this.countries)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  },
  mounted() {
    this.dummyData();
    // this.getCitiesandCountries()
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  border: none;
  height: 250px;
  box-shadow: 1px 3px 0 rgba(37, 32, 31, 0.3);
}

.card img {
  height: 150px;
}



@media screen and (max-width: 768px) and (max-height: 1024px) {

  .img-text-1,
  .img-text-2 {
    display: none;
  }
}
</style>
