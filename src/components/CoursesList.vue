<script setup>
import CourseGradeEntry from './CourseGradeEntry.vue';
import { ref } from 'vue';
import CoursesFile from '../assets/courses.json';

const courses = [...CoursesFile.courses]; // Create new array
const yourCourses = ref([{ 'id': Date.now(),'courseCode':"CS000",'credit':5,'grade':4 }]);


function addEntry(){ 
    yourCourses.value.push({ 'id': Date.now(),'courseCode':"CS000",'credit':5,'grade':4 });
}
function calculateGPA() {  
    console.log("Current state of yourCourses: ", yourCourses.value);
    var totalCreditHours=0;
    var summationOfGradeWithCredit=0.0;
    yourCourses.value.forEach(element => {
        totalCreditHours+=element.credit;
    });
    yourCourses.value.forEach(element => { 
        summationOfGradeWithCredit+=element.grade*element.credit;
    });
    console.log("Total Credit Hours: ",totalCreditHours);
    console.log("Summation of Grade with Credit: ",summationOfGradeWithCredit);
    var gpa=summationOfGradeWithCredit/totalCreditHours;
    // console.log("GPA: ",gpa);
    return gpa;
}
function updateCourse(id,field,value) { 
   const crs =yourCourses.value.find((course) => course.id === id)
   if(field=="courseCode"){ 
    crs.courseCode = value;
    crs.credit=courses.find((course) => course.courseCode === value)?.credits || 0;  
    } else if(field=="grade"){
        crs.grade = value; 
   } 
 }
defineExpose({calculateGPA});
 
</script>
<template>
    <div class="container">
        <div class="entries"> 
                <CourseGradeEntry v-for="cors in yourCourses" @update="updateCourse" :course="cors" :key="cors.id" /> 
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