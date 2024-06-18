import model from "./model.js";

export const findAllModulesByCourseId = (courseId) => {
    return model.find({course: courseId}).lean();
}

export const deleteModule = (moduleId) => {
    return model.deleteOne({_id: moduleId});
}

export const createModule = (module) => {
    delete module._id;
    return model.create(module);
}

export const updateModule = (moduleId, module) => {
    return model.updateOne({_id: moduleId}, {$set: module});
}