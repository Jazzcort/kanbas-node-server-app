const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
};
const module = {
    id: 2,
    name: "Basics of Rust",
    description: "Learn basics of Rust programming in 3 hours",
    course: "Rust Crash Course",
};
export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
        res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });

    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        assignment.score = newScore;
        res.json(assignment);
    });
    app.get("/lab5/assignment/completed/:newStatus", (req, res) => {
        const { newStatus } = req.params;
        assignment.completed = newStatus === "true" ? true: false;
        res.json(assignment);
    });
    app.get("/lab5/assignment/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        assignment.description = newDescription;
        res.json(assignment);
    });
    app.get("/lab5/assignment/date/:newDate", (req, res) => {
        const { newDate } = req.params;
        assignment.due = newDate;
        res.json(assignment);
    }); 

    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });
    app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    });
    app.get("/lab5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        module.description = newDescription;
        res.json(module);
    });
}
