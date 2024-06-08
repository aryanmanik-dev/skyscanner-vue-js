<template>
  <div>
    <div class="col-md-10 mx-auto">
      <div class="row mt-5">
        <div class="col-md-3 mb-4">
          <div class="card category" @click="this.$router.push('/hotels')">Hotels</div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card category">Car Hire</div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card category">Explorer everywhere</div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card category">Let AI inspire your trip</div>
        </div>
      </div>
      <div class="row mt-3 d-flex justify-content-between"></div>
    </div>
    <div class="col-md-10 mx-auto mt-4" style="position: relative">
      <img src="../assets/images/bg.webp" class="img-fluid" alt="" />
      <span class="img-text-1"> Save on your next stay </span>
      <span class="img-text-2">
        We’ve pulled together the top hotel offers so you can find an amazing
        room at an even better price.
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.category {
  height: 4.5rem;
  background: #05203c;
  border-radius: 20px;
  text-align: center;
  color: white;
  font-weight: bolder;
  line-height: 4.5rem;
  cursor: pointer;
}

.category:hover {
  background: #002b5b;
}

.content img {
  border-radius: 20px;
}

.img-text-1 {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 5px;
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 700;
  color: white;
  width: 40%;
}
.img-text-2 {
  position: absolute;
  top: 33%;
  left: 20px;
  padding: 5px;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: white;
  width: 45%;
}

@media screen and (max-width: 768px) and (max-height: 1024px) {
  .img-text-1,
  .img-text-2 {
    display: none;
  }

  
}
</style>