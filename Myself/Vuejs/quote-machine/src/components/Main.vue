<template>
    <main class="content">
        <div class="quote-container">
            <h3 class="quote-first">There is first part</h3>
            <img :src="false ? brezhnev : buzova" alt="Some Picture">
            <h3 class="quote-second">... and the second part</h3>
            <button class="destroy">KILL IT WITH FIRE</button>
        </div>

    </main>
</template>

<script>
export default {
    name:"Main",
    data(){
        return {
            buzova : require('@/assets/quote-faces/buzova.png'),
            brezhnev:require('@/assets/quote-faces/brezhnev.png')
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
