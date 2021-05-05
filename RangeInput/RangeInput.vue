<template>
  <div class="container">
    <div class="current_point">{{ point }} %</div>
    <input type="range" min="0" max="100" class="slider" id="myRange" v-model="point">
    <div class="btn-wrapper">
      <button class="btn"
              v-for="(btn, index) in buttons"
              :key="index"
              :value="btn.value"
              @click="point = btn.value">
        {{ btn.text }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        point: 35.4,
        buttons: [
          {
            text: '25%',
            value: 25
          },
          {
            text: '50%',
            value: 50
          },
          {
            text: '75%',
            value: 75
          },
          {
            text: '100%',
            value: 100
          },
        ]
      }
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container{
  width: 40%;
  margin: 70px auto;
  font-family: 'Krona One', sans-serif;
}
.current_point{
  margin-bottom: 30px;
  font-size: 18px;
  color: #626262;
}
.slider {
  padding: 0 10px;
  -webkit-appearance: none;
  width: 100%;
  height: 35px;
  background: linear-gradient(50deg, #C5DDE8, #EECFBA);
  outline: none;
  opacity: 0.8;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 20px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: white;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  border: none;
}
.btn-wrapper{
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn{
  padding: 10px;
  height: 38px;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 30px;
  background-color: #FFECDF;
  color: #626262;
}
.btn:not(:last-child){
  margin-right: 20px;
}

@media (max-width: 800px) {
    .container{
      width: 80%;
    }
}
@media (max-width: 420px) {
  .btn-wrapper{
    margin-top: 20px;
  }
  .btn{
    padding: 10px;
    font-size: 14px;
    border-radius: 15px;
  }
  .btn:not(:last-child){
    margin-right: 10px;
  }
}
</style>
