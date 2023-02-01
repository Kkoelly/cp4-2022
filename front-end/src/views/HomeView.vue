<template>
  <div class="home">
        <div class = "section-1">
          <div class="home-image">
              <img :src="'/images/4474421855_4b20643258_c.jpeg'">

              <div class="home-heading">
                  Reading is dreaming with your eyes wide open
              </div>
          </div>
        </div>
  </div>  
</template>

<style scoped>

.home {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

img {
    width: 100%;
}

.home-image {
   width: 1000px;
    color: white;
    position: relative;
}

.section-1 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 900px;
  width: 100%;
}

.home-heading {
  position: absolute;
  top: 30%;
  left: 20px;
  padding-left: 20px;
  margin-right: 50%;
  font-size: 50px;
  font-family: "Courgette", cursive;

}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .home-image {
    width: 100vw;
  }

  .home-heading {
    position: absolute;
    top: 10%;
    left: 20px;
    padding-left: 20px;
    margin-right: 50%;
    font-size: 50px;
  }

}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 340px) {
  .home-image {
    width: 100vw;
  }

  .home-heading {
    position: absolute;
    top: 10%;
    left: 20px;
    padding-left: 20px;
    margin-right: 50%;
    font-size: 30px;
  }

}


</style>



