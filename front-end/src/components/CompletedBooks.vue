<template>

<div class="wrapper">
  <div class="rec">
    <button  @click="getAllBooksFromList('favorites')">Make Favorites List</button>
    <button  @click="getAllBooksFromList('completed')">Make Completed List</button>

    <div v-for="book in this.myCompleted" :key="book._id">
        <div class="book">
          <div class="rec-book"><img :src =book.coverImage></div>
            <div class="description">
              <h6>{{ book.title }}</h6>
              <p>By: {{ book.author }}</p>
              <p>{{ book.description }}</p>
              <button @click="removeFromList('completed', book)">Remove From Copmleted</button>
              <button @click="removeFromList('favorites', book)">Remove From Favorites</button>
              <button @click="addToList('favorites', book)">Add To Favorites List</button>
              <button @click="addToList('booksToRead', book)">Add To Books To Read List</button>
            </div>
        </div>
    </div>
  </div> 
  <br>
  <br>
</div>

</template>

<script>
export default {
    name: 'CompletedBooks',
    
    data() {
        return {
          allBooks: [],
          myCompleted: [],
        }
    },
    computed: {
        completedBooks() {
            return this.myCompleted;
        }
    },
}
</script>

<style scoped>
  .rec {
      display: flex;
      flex-wrap: wrap;
      justify-content:   center;
  }
  .rec-book {
    margin: 20px;
    height: 370px;
    border: 8px solid #7796cbff;
    justify-content: center;
  }
  img {
    width: 100%;
  }
  .book {
    width: 300px;
    border: 8px solid #2d3047ff;;
    background-color: #2d3047ff;;
    justify-content: center;
    /* margin: 20px auto; 
    fix later for small screen 
    */
    margin: 20px;
    }

    .description {
      border: 5px solid #E8DDB5;
      background-color: #E8DDB5;
      text-align: center;
      margin: 8px;
      height: 250px;

    }

  h6, p{
    color: #2d3047ff;
  }


button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  background-color: #2d3047ff;
}

button:hover {background-color: #7796cbff}

button:active {
  background-color: #2286aa;
  /* box-shadow: 0 5px #666; */
  transform: translateY(4px);
}

</style>