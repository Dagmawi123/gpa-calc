<script setup>
import CoursesFile from '../assets/courses.json';
import { ref, watch } from 'vue'; 
const courses = [...CoursesFile.courses]; // Create new array
const grading_scale = [...CoursesFile.grading_scale]; // Create new array

// console.log(courses[0].credits);
const props = defineProps({
  initialCredit: { type: Number, default: 5 },
  initialGrade: { type: Number, default: 4 }
});
const grade = ref(props.initialGrade);
const credit = ref(props.initialCredit);
const emit = defineEmits(['creditChanged', 'gradeChanged']);
watch(credit, (newValue) => {
  emit('creditChanged', newValue);
})
watch(grade, (newValue) => {
  emit('gradeChanged', newValue);
})

</script>
<template>
  <div class="course">
    <select v-model="credit" class="course-input" name="" id="">
      <option v-for=" course in courses" :key="course.name" :value="course.credits" >
        {{ course.name }}
      </option>
    </select>

    <select v-model="grade" class="grade-select" name="" id="">
      <option v-for="gradeObj in grading_scale" :value="gradeObj.point">{{ gradeObj.grade }}</option>
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
  flex: 2;
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
  border-color: #3b82f6;
  /* blue-500 */
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