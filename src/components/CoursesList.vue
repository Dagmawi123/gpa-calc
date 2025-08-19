<script setup>
import CourseGradeEntry from './CourseGradeEntry.vue';
 import {useCourseStore} from '../stores/courseStore.js';

// const courses = [...CoursesFile.courses]; // Create new array
// const yourCourses = ref([{ 'id': Date.now(),'courseCode':"CS000",'credit':5,'grade':4 }]);
const {yourCourses,addEntry} = useCourseStore(); 
</script>
<template>
    <div class="container"> 
        <div class="entries"> 
                <CourseGradeEntry v-for="cors in yourCourses" :course="cors" :key="cors.id" /> 
        </div>
        <div class="add">
            <button @click="addEntry">Add Course</button>
        </div>
    </div>
</template>
<style scoped>
.container {
    position: relative;
    margin: auto;
    /* width:60vw; */
    max-width: 513px;
    border: 1px solid #c2c2c2;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 50px;
}

.container .add {
    position: absolute;
    bottom: -35px;
    right: 5%;
}

.container .add button {
    padding: 7px 20px;
    border-radius: 5px;
    border: none;
    background-color: #3b82f6;
    color: white;
    font-size: 12px;
    cursor: pointer;
}
</style>