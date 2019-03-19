<template>
    <main class="content">
        <div class="quote-container">
            <h3 class="quote-first">{{first}}</h3>
            <img :src="picture" alt="Some Picture">
            <h3 class="quote-second">{{second}}</h3>
            <button class="destroy" @click="findPicture">KILL IT WITH FIRE</button>
        </div>

    </main>
</template>

<script>
const  picArray = ['brezhnev','brezhnev2','buzova','buzova2','einstein4','einstein5','lenin','lenin2','show','snow2','statham']
import quoteArray from '../assets/quotes.json'


export default {
    name:"Main",
    data(){
        return {
            picture : '',
            first:'',
            second:''
        }
    },
    methods : {
        findPicture () {
            const random = Math.floor(Math.random() * picArray.length)
            const randomQuote = Math.floor(Math.random() * quoteArray.length)
            this.first = quoteArray[randomQuote].first
            this.second = quoteArray[randomQuote].second
            this.picture = require(`@/assets/quote-faces/${picArray[random]}.png`)        
        }
    }
}
</script>

<style scoped>
.content {
    background: linear-gradient(to right, #000000, #434343);
    height:90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
img {
    display:block;
    margin: 0 auto;
    padding:20px;
    border-radius: 20px;
    width:350px;
    height:250px;
}
.quote-container {
    width:40%;
    margin:0 auto;
    font-size:2em;
    color:wheat;
}
.quote-first {
    text-align: start;
    padding:20px;
}   
.quote-second {
    text-align: end;
    padding:20px;
}
.destroy {
    margin-top:20px;
    display: block;
    width:100%;
    padding:20px;
    color:thistle;
    font-size:2em;
    border:none;
    background: linear-gradient(to right, #f12711, #f5af19);
}

.destroy:hover {
    outline: 5px solid red;
    color:black;
}

.destroy:focus {
    outline: 5px solid red;
}
</style>
