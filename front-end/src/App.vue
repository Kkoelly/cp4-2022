<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Books!</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/booklists" class="nav-link">Book Lists</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/search" class="nav-link">Search</router-link>
          </li>

 
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          
        </ul>
      </div>
    </nav>

    <router-view/>

    <div class="navbar navbar-light bg-light fixed-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://github.com/math919191/CreativeProject4">Source - Kelly Ko and R Daniels</a>
      </div>
    </div>
  </div>

  
</template>







<style>
#app {
  font-family: Courgette, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
}
body {
  background-color: #7796cbff;
}


.bg-light {
    background-color: #E8DDB5!important;
  }

.navbar-light .navbar-nav .nav-link {
      font-size: 1.5em;
}
h1, h2, a {
  font-family: "Courgette", cursive;
}

.button, button, input{
  margin: 5px;
  padding: 3px;
}

.button, button {
  background-color: #E8DDB5;
}
.button:hover, button:hover {
  background-color:#eee7ce;
}
.button:active, button:active {
  background-color: #c1b692;
}
form {
  display: flex;
  flex-wrap: nowrap;
  height: 40px;
  justify-content: center;
}

h6 {
  font-weight: bold;
  margin: 5px;
}

.description {
  display: flex;
  justify-content: center;
  margin: auto;
}
.description p {
  max-width: 900px;
  margin: 5px 50px;
}

</style>
