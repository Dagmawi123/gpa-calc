<script setup> 
import { useCourseStore } from '@/stores/courseStore';
// import { c } from 'vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P';
const courseStore = useCourseStore();
// var emit=defineEmits(['click']);
</script>

<template>
    <button class="calc-btn" @click="courseStore.calculateGPA">
        Calculate GPA
    </button>
</template>
<style scoped>
.calc-btn{
padding: 7px 31px;
font-size: 17px;
border: none;
border-radius: 20px;
color: #fff;
background-color: #7a4a02;
}
</style>