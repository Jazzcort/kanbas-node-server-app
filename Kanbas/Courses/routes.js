import Database from "../Database/index.js";
import * as dao from "./dao.js";
const images = [
    "algo.jpg",
    "app.jpg",
    "arrow.jpg",
    "code.jpg",
    "data.jpg",
    "keyboard-tape.jpg",
    "logic-board.jpg",
    "robot.jpg",
    "reactjs.jpg",
];
const randomImage = () => {
    const ind = Math.floor(Math.random() * images.length);
    return images[ind];
};
Database.courses = Database.courses.map((item) => ({...item, image: `/images/${randomImage()}`}))

const createCourse = async (req, res) => {
    const newCourse = { ...req.body, image: `/images/${randomImage()}`, number: new Date().getTime() };
    const course =  await dao.createCourse(newCourse);
    res.json(course);
}
const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
}

const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const status = await dao.updateCourse(id, course);
    res.json(status);
}

const deleteCourse = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
}

export default function CourseRoutes(app) {
    app.get("/api/courses", findAllCourses);
    app.post("/api/courses", createCourse);
    app.delete("/api/courses/:id", deleteCourse);
    app.put("/api/courses/:id", updateCourse);
}
