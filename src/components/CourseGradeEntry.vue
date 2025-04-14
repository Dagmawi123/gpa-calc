<script setup>
import CoursesFile  from '../assets/courses.json';
var courses=CoursesFile.courses;
var grading=CoursesFile.grading_scale; 
console.log(courses[0].credits);
</script> 
<template>
    <div class="course">
        <select class="course-input" name="" id="">
            <option v-for="course in courses" value="course.credits">{{course.name}}</option> 
        </select>
   
        <select class="grade-select" name="" id="">
            <option v-for="grade in grading" value="grade.point">{{ grade.grade }}</option> 
        </select>
        </div>
</template>
<style scoped>
.course {
 display: flex;
 gap: 20px;
}
/* Course Name Input */
.course-input { 
 flex:2;
  /* height: 200px; */
  padding: 7px 10px;
  margin-bottom: 10px;
  margin-right: 1rem;
  font-size: 14px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
}

.course-input:focus {
  border-color: #3b82f6; /* blue-500 */
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

/* Grade Dropdown */
.grade-select {
    margin-bottom: 10px;
    width: 65px;
  padding: 10px 11px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: white;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2210%22%20height%3D%225%22%20viewBox%3D%220%200%2010%205%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%200L5%205L10%200H0Z%22%20fill%3D%22%233B82F6%22/%3E%3C/svg%3E"); 
  background-repeat: no-repeat;
   background-position: right 10px center;
}

.grade-select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

</style>