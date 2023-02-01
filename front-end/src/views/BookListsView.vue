<template>
    <div>
        <div class="buttons">
            <button class="button booklist-button" @click="switchComponent('booksToRead')">Reading List</button>  
            <button class="button booklist-button" @click="switchComponent('favorites')">Favorites List</button>
            <button class="button booklist-button" @click="switchComponent('completed')">Completed List</button>          
        </div>
        <component v-bind:is="dynamicComponent"></component>

    </div>
</template>

<script>
    import CompletedList from "../components/CompletedList.vue"
    import FavoritesList from "../components/FavoritesList.vue"
    import ReadingList from "../components/ReadingList.vue"
    
    export default {
        name: "BooksLists",  
        data() {
            return {
                dynamicComponent: ReadingList,    
            }
        },
        components: {
            CompletedList,
            FavoritesList,
            ReadingList,
        },
        methods: {
            switchComponent(whichList){
                if (whichList == 'booksToRead'){
                    this.dynamicComponent = ReadingList;
                } else if (whichList == 'favorites'){
                    this.dynamicComponent = FavoritesList;
                } else if (whichList == 'completed'){
                    this.dynamicComponent = CompletedList;
                }
            },
        }
    }

</script>


