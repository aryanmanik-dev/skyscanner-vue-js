<template>
  <div class="container-fluid">
    <div class="row header">
      <Header-comp />
    </div>
    <div class="row text-dark content">

      <Category-one />
    </div>
    <div class="row text-dark content2">
      <Category-two />
    </div>

  </div>
</template>

<script>
import HeaderComp from "../components/HeaderComp.vue";
import CategoryOne from "../components/CategoryOne.vue";
import CategoryTwo from "../components/CategoryTwo.vue";

import "../assets/style.css";
export default {
  components: {
    HeaderComp,
    CategoryOne,
    CategoryTwo,
  },

  data() {
    return {
    }
  }
};
</script>
<style scoped>
.container-fluid {
  height: 100vh;
  color: white;
}

.header {
  background: #05203c;
  /* min-height: min-content; */
  height: 30rem;
}


@media (max-height: 600px) {
  .header {
    height: auto;
  }

  .content {
    height: auto !important;
  }

  .content2 {
    height: auto !important;
  }
}


@media screen and (max-width: 768px) and (max-height: 1024px) {
  .header {
    height: auto;
  }

  .img-text-1,
  .img-text-2 {
    display: none;
  }

  .content {
    height: auto;
  }

  .content2 {
    height: auto !important;
  }
}

.content {
  height: 100vh;
  background: white;
}

.content2 {
  height: 140vh;
  background: white;
  /* overflow: scroll; */
}
</style>