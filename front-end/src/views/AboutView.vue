<template>
  <div class="about">
      <h1 class="page-title">About Us</h1>
      <br>
      <div class="about-contain">
        <div class = "about-image">
            <img :src="'/images/po.jpeg'">
        </div>

        <div class="about-text">
          <p>Creative Project for CS260</p>
          <br>
        </div>
      </div>
  </div>
</template>
 
<style scoped>

.about {
  max-width: 1000px;
  margin: auto;
}

.about-contain {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.about-text {
  /* border: 5px solid black; */
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40%;
}
.about-image{
  /* border: 5px solid black; */
  display: flex;
  height: 500px;

}
</style>
