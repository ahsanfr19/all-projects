

<template>
  <h1>Food</h1>
  <div id="wrapper">
    <food-item
      v-for="(x, index) in foods"
      :key="x.index" 
      :food-name="x.foodName"
      :food-desc="x.foodDesc"
      :is-favorite = "x.isfavorite"
      style = "background-color: blueviolet;"/>
      <Comp-two/>
  </div>

</template>

<script>
import FoodItem from './components/FoodItem.vue'
    export default {
      components: {
      'food-item': FoodItem
    },
      data(){
        return {
          foods: [
            {foodName : "Apples", foodDesc : "Apples are a type of fruit that grow on trees.", isfavorite: true },
            {foodName : "Pizza", foodDesc : "Pizza has a bread base with tomato sauce, cheese, and toppings on top.", isfavorite: false },
            {foodName : "Rice", foodDesc : "Rice is a type of grain that people like to eat.", isfavorite: false },
          ]
        }
      },
      // methods : {
      //   updateBox(){
      //     alert('hey');
      //   }
      // }
    }

</script>

<style>

#wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>