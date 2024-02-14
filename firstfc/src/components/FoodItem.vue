

<template>
    <div v-on:click="countClick">
        <button @click="toggleFav">Change</button>
        <p v-show="change">
            <p> {{ foodName }} </p>
            <p>{{ foodDesc }}</p>
            <p>You have clickd me  {{ count }} times</p>
            
        </p>
    </div>
  </template>



  
  <script>
  export default { 
    
    props: {
      foodName: {
        type: String,
        required: true
      },
      foodDesc : String,
      isFavorite : Boolean
    },
    data() {
      return {    
        count : 0,
        change: this.isFavorite,
      }
    },
    methods : {
        countClick(){
            this.count ++;
        },
        toggleFav(){
            this.change = !this.change;

        }
    }
  };
  </script>
  
  <style>
#app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
  #app > div:hover {
  cursor: pointer;
}
  </style>