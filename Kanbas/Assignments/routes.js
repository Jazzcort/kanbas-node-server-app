import db from "../Database/index.js";
export default function AssignmentRoutes(app) {
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments.filter(
            (item) => item.course === cid
        );
        res.json(assignments);
    });
    app.delete("/api/assignments/:id", (req, res) => {
        const { id } = req.params;
        db.assignments = db.assignments.filter((item) => item._id !== id);
        res.sendStatus(204);
    });
    app.put("/api/assignments/:id", (req, res) => {
        const { id } = req.params;
        const assignment = req.body;
        db.assignments = db.assignments.map((item) =>
            item._id === id ? { ...item, ...assignment } : item
        );
        res.sendStatus(204);
    });
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.assignments.push(assignment);
        res.json(assignment);
    });
}
