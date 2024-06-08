<template>
  <div class="container-fluid">
    <div class="row">
      <NavbarComp />
    </div>
    <div class="margin-on-top row banner-row">
      <img
        src="https://content.skyscnr.com/m/5283dbe4ac4c9189/original/alexander-kaunas-xEaAoizNFV8-unsplash_CROP.jpg"
        style="height: 35.9375rem"
        class="p-0"
      />
      <div>
        <div class="d-flex align-items-center justify-content-center">
          <div class="text-white img-text">
            <h1 class="mb-4">Find the right hotel today</h1>
            <div class="d-flex img-text-flex">
              <div class="flex-fill form-group">
                <label for="destination">Where are you going?</label>
                <input
                  type="text"
                  id="destination"
                  class="form-control"
                  placeholder="Where are you going?"
                  v-model="searchHotel.city"
                />
              </div>
              <div class="flex-fill form-group">
                <label for="checkin">Check-in</label>
                <input type="date" id="checkin" class="form-control" />
              </div>
              <div class="flex-fill form-group">
                <label for="checkout">Check-out</label>
                <input type="date" id="checkout" class="form-control" />
              </div>
              <div class="flex-fill form-group">
                <label for="guests">Guests</label>
                <input type="number" id="guests" class="form-control" />
              </div>
            </div>
            <div class="d-flex mt-3 img-text-flex">
              <div class="flex-fill form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                <label class="form-check-label" for="">
                  Free Cancellation
                </label>
              </div>
              <div class="flex-fill form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                <label class="form-check-label" for=""> 4 Stars </label>
              </div>
              <div class="flex-fill form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                />
                <label class="form-check-label" for=""> 3 Stars </label>
              </div>

              <div class="flex-fill form-group">
                <button
                  type="button"
                  @click="searchHotels"
                  class="w-50 btn btn-primary"
                >
                  Search Hotels
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row hotels-row">
      <div class="col-md-10 mx-auto">
        <h2><b>Plan your next staycation</b></h2>
        <p>
          Find the perfect hotel that fits your needs. From budget to luxury, we
          have you covered.
        </p>

        <MDBTabs v-model="activeTabId1">
          <MDBTabNav tabsClasses="mb-3">
            <MDBTabItem tabId="ex1-1" href="ex1-1"> Delhi </MDBTabItem>
            <MDBTabItem tabId="ex1-2" href="ex1-2">Mumbai</MDBTabItem>
            <MDBTabItem tabId="ex1-3" href="ex1-3">Bengaluru</MDBTabItem>
          </MDBTabNav>
          <MDBTabContent>
            <MDBTabPane tabId="ex1-1" active="true">
              <div class="d-flex hotels-flex">
                <div class="p-2 flex-fill" v-for="item in 3" :key="item">
                  <div class="card text-black">
                    <img
                      class="card-img-top"
                      style="height: 200px"
                      src="https://www.savills.co.uk/_images/adobestock-539646437.jpg"
                      alt="Title"
                    />
                    <div class="card-body">
                      <h4 class="card-title">
                        ITC Maratha, a Luxury Collection Hotel, Delhi
                      </h4>
                      <p>
                        ₹ 15,784
                        <small>Per Night</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MDBTabPane>
            <MDBTabPane tabId="ex1-2">
              <div class="d-flex hotels-flex">
                <div class="p-2 flex-fill" v-for="item in 3" :key="item">
                  <div class="card text-black">
                    <img
                      class="card-img-top"
                      style="height: 200px"
                      src="https://d2xf5gjipzd8cd.cloudfront.net/available/1096503238/rmca.jpg"
                      alt="Title"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Red Fox Hotel, Mumbai Airport</h4>
                      <p>
                        ₹ 15,784
                        <small>Per Night</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MDBTabPane>
            <MDBTabPane tabId="ex1-3">
              <div class="d-flex hotels-flex">
                <div class="p-2 flex-fill" v-for="item in 3" :key="item">
                  <div class="card text-black">
                    <img
                      class="card-img-top"
                      style="height: 200px"
                      src="https://d2xf5gjipzd8cd.cloudfront.net/available/1279491025/rmca.jpg"
                      alt="Title"
                    />
                    <div class="card-body">
                      <h4 class="card-title">
                        Holiday Inn Bengaluru Racecourse
                      </h4>
                      <p>
                        ₹ 15,784
                        <small>Per Night</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MDBTabPane>
          </MDBTabContent>
        </MDBTabs>
      </div>
    </div>

    <div class="row branding-category">
      <div class="col-md-10 mx-auto">
        <h2 class="text-center mt-5">
          Get the best prices from top hotel providers
        </h2>
        <div class="row mt-5">
          <div class="col-md-2 col-6">
            <div class="brand-card text-center">
              <img
                style="width: 60%"
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_bc.304b1c65.svg"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="brand-card text-center">
              <img
                style="width: 60%"
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_oi.0835cda8.svg"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="brand-card text-center">
              <img
                style="width: 60%"
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/d_ct.40903310.svg"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="brand-card text-center">
              <img
                style="width: 60%"
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_xp.f4aeb353.svg"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="brand-card text-center">
              <img
                style="width: 60%"
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_hc.986803f4.svg"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-2 col-6">
            <div class="brand-card text-center">
              <img
                style="width: 60%"
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/h_ad.279c66d3.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="row offerings">
          <div class="col-md-4">
            <div class="text-center">
              <img
                style="width: 70%"
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/SeeItAll.72c7dd2f.svg"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body text-center">
                <h5 class="card-title">See it all</h5>
                <p class="card-text">
                  From local hotels to global brands, discover millions of rooms
                  all around the world.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center">
              <img
                style="width: 70%"
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/CompareRightHere.d7a3d654.svg"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body text-center">
                <h5 class="card-title">Compare right here</h5>
                <p class="card-text">
                  No need to search anywhere else. The biggest names in travel
                  are right here.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="text-center">
              <img
                style="width: 70%"
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/GetExclusiveRates.c5f16264.svg"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body text-center">
                <h5 class="card-title">Get exclusive rates</h5>
                <p class="card-text">
                  We’ve special deals with the world's leading hotels – and we
                  share these savings with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row inspiration-section">
      <div class="col-md-10 mx-auto">
        <h2 class="mt-5">Need Inspiration?</h2>
        <span class="mt-5">View our hand-picked hotel destinations</span>
        <div class="row mb-3 mt-5" v-for="i in 3" :key="i">
          <div class="col-md-4">
            <div class="card">
              <img
                style="height: 243px; width: 100%"
                src="https://content.skyscnr.com/e87b304f10a700cae0d08ea920c8be32/GettyImages-470434611.jpg"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title">Dubai</h5>
                <p class="card-text">United Arab Emirates</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                style="height: 243px; width: 100%"
                src="https://content.skyscnr.com/f165f33bbb0195fe8a2bc61800b2147e/GettyImages-486646673.jpg"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title">Mumbai</h5>
                <p class="card-text">India</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                style="height: 243px; width: 100%"
                src="https://content.skyscnr.com/5359c305bbed8c4e18b252b159a67cfa/GettyImages-187011688.jpg"
                class="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title">Singapore</h5>
                <p class="card-text">Singapore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row footer">
      <div
        class="d-flex text-white align-items-center justify-content-around text-white footer-top"
      >
        <div>
          <span> IN .en-GB </span>
        </div>
        <div>
          <ul class="nav justify-content-center flex-column gap-3">
            <li class="nav-item">
              <span>Help</span>
            </li>
            <li class="nav-item">
              <span>Privacy Settings</span>
            </li>
            <li class="nav-item">
              <span>Log In</span>
            </li>
          </ul>
        </div>
        <div>
          <ul class="nav justify-content-center flex-column gap-3">
            <li class="nav-item">
              <span>Cookie Policy</span>
            </li>
            <li class="nav-item">
              <span>Privacy Policy</span>
            </li>
            <li class="nav-item">
              <span>Terms of Service </span>
            </li>
            <li class="nav-item">
              <span>Company Details</span>
            </li>
          </ul>
        </div>
        <div>
          <ul class="nav justify-content-center flex-column gap-3">
            <li class="nav-item">
              <span>Explore</span>
            </li>
            <li class="nav-item">
              <span>Company</span>
            </li>
            <li class="nav-item">
              <span>Partners</span>
            </li>
            <li class="nav-item">
              <span>Trips</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-2"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarComp from "../components/NavbarComp.vue";
import {
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
} from "mdb-vue-ui-kit";
export default {
  components: {
    NavbarComp,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
  },
  data() {
    return {
      activeTabId1: "ex1-1",
      searchHotel: { city: "" },
    };
  },

  methods: {
    async setusername() {
      try {
        const payload = {
          username: "aryan manik",
          password: "VX6xmWaq69Hb@sD",
        };

        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.get(
          `https://api.makcorps.com/auth`,
          payload,
          { headers }
        );

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async searchHotels() {
      try {
        const response = await axios.get(
          `https://api.makcorps.com/free/london`,
          {
            headers: {
              Authorization:
                "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTc2NzczNjAsImlkZW50aXR5IjozLCJuYmYiOjE1MTc2NzczNjAsImV4cCI6MTUxNzY3OTE2MH0.ytSqQj3VDymEaJz9EIdskWELwDQZRD1Dbo6TuHaPz9U",
            },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.setusername();
  },
};
</script>

<style scoped>
.banner-row {
  position: relative;
  height: 90vh;
}

.hotels-row {
  height: 80vh;
}

.branding-category {
  height: 100vh;
}

.offerings {
  margin-top: 100px;
}

.inspiration-section {
  background: #eff1f2;
  height: 200vh;
}

.inspiration-section .card-body {
  background-color: #05203c;
  color: white;
}

.brand-card {
  box-shadow: inset 0 0 0 1px #e0e3e5;
  padding: 20px;
  border-radius: 20px;
}

.footer {
  height: 40vh;
}

.footer-top {
  background-color: #05203c;
  width: 100%;
}
.footer-top ul li {
  cursor: pointer;
}
/* .footer-bottom {
    height: 40vh;
    background-color: white;
    width: 100%;
} */

.img-text {
  top: 30%;
  position: absolute;
  height: 300px;
  background: #05203c;
  width: 90vw;
  padding: 40px;
  border-radius: 20px;
}

.img-text h1 {
  color: white;
  font-size: 50px;
  font-weight: bolder;
  letter-spacing: 5px;
}

.img-text input[type="text"],
input[type="date"],
input[type="number"] {
  height: 4.5rem;
}

.img-text button {
  float: right;
}

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .banner-row {
    height: auto;
  }

  .hotels-row {
    height: auto;
  }

  .hotels-flex {
    flex-direction: column;
  }

  .branding-category {
    height: auto;
  }

  .brand-card {
    box-shadow: inset 0 0 0 1px #e0e3e5;
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
  }

  .img-text {
    top: 2%;
    position: absolute;
    height: auto;
    background: #05203c;
    width: 90vw;
    padding: 40px;
  }

  .inspiration-section {
    height: auto;
  }

  .img-text label {
    display: none;
  }

  .img-text input[type="text"],
  input[type="date"],
  input[type="number"] {
    height: auto;
  }

  .img-text-flex {
    flex-direction: column;
    gap: 10px;
  }

  .img-text h1 {
    color: white;
    font-size: 20px;
    font-weight: bolder;
    letter-spacing: 5px;
  }

  .img-text button {
    width: 100% !important;
    float: none;
  }

  .inspiration-section .card {
    margin: 20px;
  }

  .footer-top {
    flex-direction: column;
    text-align: center;
}

.footer {
  height: auto;
}

}


@media (max-height: 600px) {
    .banner-row , .hotels-row,.branding-category,.inspiration-section{
        height: auto !important;
    }


}
</style>