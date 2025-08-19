import { defineStore } from "pinia";
import { ref } from 'vue';
import CoursesFile from '../assets/courses.json';
export const useCourseStore = defineStore("courseStore",()=>{
   
        const gpa=ref(0.0);
        const courses = [...CoursesFile.courses]; 
        const grading_scale = [...CoursesFile.grading_scale];
const yourCourses = ref([{ 'id': Date.now(),'courseCode':"CS000",'credit':5,'grade':4 }]);
  
function addEntry(){ 
    console.log("Adding a new course entry");   
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
    var calcgpa=summationOfGradeWithCredit/totalCreditHours; 
    gpa.value=calcgpa.toString().substring(0,4);
    // return gpa;
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
 
 function updateCourse(id,field,value) { 
   const crs =yourCourses.value.find((course) => course.id === id)
   if(field=="courseCode"){ 
    crs.courseCode = value;
    crs.credit=courses.find((course) => course.courseCode === value)?.credits || 0;  
    } else if(field=="grade"){
        crs.grade = value; 
   } 
 }
  return { gpa, courses, yourCourses,grading_scale, addEntry, calculateGPA, updateCourse };
  
}) 