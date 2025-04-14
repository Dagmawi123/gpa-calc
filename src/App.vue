<script setup>
import CoursesList from './components/CoursesList.vue';
import CalcButton from './components/CalcBtn.vue';
import GPAResult from './components/GPADisplay.vue';
import {ref} from 'vue';
const courseListRef = ref(null);
const gpa=ref(0.0);
function calculate() { 
gpa.value=courseListRef.value?.calculateGPA();
}
</script>
<template>
  <div class="container">
    <h2>GPA Calculator</h2>
    <main>
      <CoursesList ref="courseListRef" />
    </main>
    <section class="display">
      <CalcButton @click="calculate" />
      <GPAResult :gpa="gpa.toString().substring(0,4)" />
    </section>
  </div>
</template>
<style scoped>
.container h2 {
  text-align: center;
  font-size: 25px;
  font-weight: 800;
  font-family: 'Frutiger LT Std', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.display {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 7px;
}
</style>