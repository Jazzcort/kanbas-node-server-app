import db from "../Database/index.js";
import * as dao from "./dao.js";
export default function ModuleRoutes(app) {

    const findAllModulesByCourseId = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findAllModulesByCourseId(cid);
        res.json(modules);
    }

    const deleteModule = async (req, res) => {
        const {mid} = req.params;
        const status = await dao.deleteModule(mid);
        res.json(status);
    }

    const createModule = async (req, res) => {
        const {cid} = req.params;
        const newModule = {
            ...req.body,
            course: cid,
        };
        const module = await dao.createModule(newModule);
        res.json(module);
    }

    const updateModule = async (req, res) => {
        const {mid} = req.params;
        const module = req.body;
        const status = await dao.updateModule(mid, module);
        res.json(status);
    }

    app.get("/api/courses/:cid/modules", findAllModulesByCourseId);
    app.post("/api/courses/:cid/modules", createModule);
    app.delete("/api/modules/:mid", deleteModule);
    app.put("/api/modules/:mid", updateModule);
}
