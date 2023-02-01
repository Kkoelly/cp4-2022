<template>
    <div>  
        <h1>Search</h1>
        <form @submit.prevent="search()">
            <input placeholder="Search for a Book" type="text" v-model="userSearch">
            <input type="submit" class="button" value="search" @click="search()">
        </form>
        <div v-if="!searchResults">
            <p>No results found</p>
        </div>
        <div v-else>
        <div class="image" v-for="result in searchResults" :key="result.id">
            <hr>
            <div class="rec-book"><img :src=result.image></div>

            <h2>{{result.title}}</h2>
            <p>{{result.author}}</p>
            <button class="button" @click="addToListFromSearch('completed', result)">Add To Completed List</button>
            <button class="button" @click="addToListFromSearch('favorites', result)">Add To Favorites List</button>
            <button class="button" @click="addToListFromSearch('booksToRead', result)">Add To Books To Read List</button>
            <br>
        </div>
        </div>
        

    </div>
          
</template>

<script>
import axios from "axios"
export default {
    name: "SearchView", 
    data() {
        return {
            searchResults: [],
            userSearch: "",
            addItem: null,
            whichList: "",
            bookID: null,
            jsonID: null,
        }
    },
    
    methods: {
        async search() {
            try {
                let myurl = "https://www.googleapis.com/books/v1/volumes?q=" + this.userSearch + "&key=AIzaSyC3b16m7c_Z258vd4Q-KlwVcoH__WIJa44";
                let response = await axios.get(myurl);
                this.searchResults = [];
                for (let i = 0; i < response.data.items.length; i++) {
                    let result = response.data.items[i];
                    let book = {title: result.volumeInfo.title, author: result.volumeInfo.authors, image: result.volumeInfo.imageLinks.thumbnail,
                        description: result.volumeInfo.description.substring(0, 200).concat("..."), id: result.id};
                    this.searchResults.push(book)
                }
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async removeFromList(whichList, whichBook){
            try {
                
                this.whichList = whichList;
                await axios.put("/api/books/remove/" + whichBook.id, {
                    whichList: this.whichList,
                });
                if (whichBook.inCompletedList == false && whichBook.inFavorites == false && whichBook.inReadingList == false ){
                    //delete the book 
                    await axios.delete("/api/books/" + whichBook.id);
                }
                return true;
            } catch (error) {
                console.log(error)
            }
        },
        async addToListFromSearch(whichList, result){
            //if it's not already in the database add it to the database
            
            this.inDatabase = await this.getIdIfInDatabase(result.id);
            if (this.inDatabase.data != false){
                this.bookID = this.inDatabase.data;
            } else {
                await this.addToDatabase(result);
            }
            this.whichList = whichList;
             
            try {
                await axios.put("/api/books/" + this.bookID, {
                    whichList: this.whichList,
                });
                this.bookID = null;
                return true;
            } catch (error){
                console.log(error);
            }
        },
        async getAllBooks(){
            try {
                let myBooks = await axios.get('/api/allbooks');
                return myBooks.data;
            } catch (error){
                console.log(error);
            }
        },
        
        async getIdIfInDatabase(jsonID){
            try {
                this.jsonID = jsonID;
                let response = await axios.get("/api/books/" + this.jsonID)
                
                this.inDatabase = response;
                return response;
            } catch (error){
                console.log(error);
            }
        },
        async addToDatabase(myResult) {
        
            try {
                let r2 = await axios.post('/api/books', {
                    result: myResult,
                });
                //this.addItem = r2.data;
                this.bookID = r2.data._id;
                return r2;
            } catch (error){
                console.log(error);
            }
        },
    }
}
</script>
