import Task from "../models/taskModel.js";


export const createTask = async (req, res) => {
    try {
        const { description } = req.body;
        const userId = req.user._id;

        const taskObj = {
            description,
            createBy: userId,
        };

        const task = await Task.create(taskObj);
        return res.status(201).json(task);

    } catch {
        res.status(400).json({ message: 'Failed create the task' });
    }
};

export const updateTask = async (req, res) => {
    try {
        const taskId = req.param.id;
        const userId = req.user._id;

        const task = await Task.findOneAndUpdate(
            { id: taskId, createBy: userId },
            req.body,
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found*****' });
        };

        return res.status(200).json(task);

    } catch {
        res.status(400).json({ message: 'Failed update the task' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const taskId = req.param.id;
        const userId = req.user._id;

        const task = await Task.findOneAndDelete(
            { id: taskId, createBy: userId },
        );

        if (!task) {
            res.status(404).json({ message: 'Task not found' });
        };

        return res.status(200).json({ message: 'Task deleted' });

    } catch {
        res.status(400).json({ message: 'Failed delete the task' });
    }
};

export const getTasksByUserId = async (req, res) => {
    try {
        //    const taskId = req.param.id;
        const userId = req.user._id;

        const tasks = await Task.find(
            { createBy: userId, },
        );

        return res.status(200).json(tasks);

    } catch {
        res.status(400).json({ message: 'Failed find tasks' });
    }
};

export const getTask = async (req, res) => {
    try {
        const taskId = req.param.id;
        const userId = req.user._id;

        const task = await Task.findOne(
            { id: taskId, createBy: userId },
        );

        if (!task) {
            res.status(404).json({ message: 'Task not found' });
        };

        return res.status(200).json(task);

    } catch {
        res.status(400).json({ message: 'Failed find the task' });
    }
};

