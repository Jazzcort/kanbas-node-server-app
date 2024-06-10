import Database from "../Database/index.js";
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

export default function CourseRoutes(app) {
    app.get("/api/courses", (req, res) => {
        const courses = Database.courses;
        res.send(courses);
    });
    app.post("/api/courses", (req, res) => {
        const course = { ...req.body, _id: new Date().getTime().toString(), image: `/images/${randomImage()}` };
        Database.courses.push(course);
        res.send(course);
    });
    app.delete("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        Database.courses = Database.courses.filter((c) => c._id !== id);
        res.sendStatus(204);
    });
    app.put("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = req.body;
        Database.courses = Database.courses.map((c) =>
            c._id === id ? course: c
        );
        res.sendStatus(204);
    });
}
