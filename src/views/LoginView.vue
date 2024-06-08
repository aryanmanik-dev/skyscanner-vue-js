<template>
  <div class="container-fluid">
    <div class="remove-height row justify-content-center align-items-center" style="height: 100vh">
      <div class="col-12 col-md-8 col-sm-12">
        <div class="card">
          <div class="row card-body d-flex align-items-center justify-content-around">
            <div class="col-md-6 col-sm-12 text-center">
              <div class="content-box-left">
                <h6>Get Started</h6>
                <h2>Explore you creativity</h2>
                <span class="list-group-item">Bookmarks your readings</span>
                <span class="list-group-item">
                  Comment on your favrouite post
                </span>
                <span class="list-group-item">
                  Register in your upcoming events
                </span>

                <div class="small-text">
                  Access your dashboard and many more.
                </div>
                <div class="small-text">Get Started</div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="content-box-right">
                <h2>Login to your account</h2>
                <div class="small-text mb-3">Login & Get Started</div>
                <form>
                  <div class="col-12 col-md-10 mb-3">
                    <input type="text" class="form-control" v-model="formData.email" placeholder="Your Email" required />
                  </div>
                  <div class="col-12 col-md-10 mb-3">
                    <input type="password" class="form-control" placeholder="Password" v-model="formData.password"
                      required />
                  </div>

                  <div class="col-12 col-md-10 mb-3">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                      <label class="form-check-label" for="">
                        I agree to terms and condition and privacy policy
                      </label>
                    </div>
                  </div>
                  <div class="col-12 col-md-10 mb-3">
                    <div class="d-grid gap-2">
                      <button type="button" @click.prevent="onSubmit" class="btn btn-success">
                        Continue
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-md-10 mb-3">
                    <hr />
                  </div>
                  <div class="col-12 col-md-10 mb-3">
                    <div class="d-grid gap-2">
                      <button type="button" name="" id="" class="btn btn-success">
                        Sign Up With Google
                      </button>
                    </div>
                  </div>
                  <div class="col-12 col-md-10 mb-3">
                    <div>
                      <label class="form-check-label" for="">
                        Not Registered ? Then
                        <span @click="this.$router.push('/')" class="text-danger">
                          Register Here
                        </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  components: {},
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      let { email, password } = this.formData;
      if (!email || !password) {
        alert("Please fill all fields");
      } else {
        this.$router.push("/home")
        console.log(this.formData);
      }
    },
  },
};
</script>
  
<style scoped>
.card {
  border-radius: 50px;
  color: white;
  background: #232323;
  height: 80vh;
}

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .card {
    height: auto !important;
    border-radius: 0px;
  }

  .remove-height {
    height: auto !important;
  }
}

hr {
  border-top: 1px dashed white;
}

.content-box-right form input[type="password"],
input[type="text"] {
  background: transparent;
  height: 50px;
  color: white;
  border: 1px solid #4a4545;
  border-radius: 0px;
}
</style>
  