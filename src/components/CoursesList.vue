<script setup>
import CourseGradeEntry from './CourseGradeEntry.vue';
import { ref } from 'vue';
const yourCourses = ref([{ 'id': 1 }]);


function addEntry(){ 
    yourCourses.value.push({ 'id': yourCourses.value.length + 1 });
}
</script>
<template>
    <div class="container">
        <div class="entries">
            <div v-for="entry in yourCourses" :key="entry.id">
                <CourseGradeEntry />
            </div>
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
    max-width: 400px;
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