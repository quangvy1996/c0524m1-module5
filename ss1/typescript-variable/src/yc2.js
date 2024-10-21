import {courses} from "./yc1.js";
const lowRatePost = courses.filter(course => course.rating < 4)
lowRatePost.forEach((course) => {
    console.log(`Id: ${course.id},Title: ${course.title}, Rating: ${course.rating} 
    `);})