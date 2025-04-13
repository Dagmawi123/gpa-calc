<script setup>
import CourseGradeEntry from './CourseGradeEntry.vue';
</script>
<template>
<div class="entries">
    <CourseGradeEntry />
    <CourseGradeEntry />
    <CourseGradeEntry />
</div>
</template>
<style scoped>
.entries{
    margin:auto;
    /* width:60vw; */
    max-width: 400px;
    border: 1px solid #c2c2c2; 
    border-radius: 10px;
    padding: 10px;
}
</style>