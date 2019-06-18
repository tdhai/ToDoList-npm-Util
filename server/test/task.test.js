const Controller = require("../controllers/task/task_controller");
const Tasks = require("../models/Task")

describe("Test endpoints", () => {
    it("Should get all tasks", async () => {
        let mockGetTasks = jest.fn();
        let returnValue = [{ _id: 1, task_name: "Hello my friends"}, { _id: 2, task_name: "Hello my friends"}];
        mockGetTasks.mockReturnValue(returnValue);
        Tasks.getTasks = mockGetTasks;
        expect(await Controller.getAll()).toEqual(returnValue);
    })
})

describe("Test endpoints", () => {
    it("Should get task by id", async () => {
        let mockGetTaskID = jest.fn();
        let returnValue = [{ _id: 1, task_name: "Hello my friends"}];
        mockGetTaskID.mockReturnValue(returnValue);
        Tasks.getTaskID = mockGetTaskID;

        expect(await Controller.getTaskID(1)).toEqual(returnValue);
    })
})

describe("Test endpoints", () => {
    it("Should get create task", async () => {
        let mockCreateTask = jest.fn();
        let returnValue = [{ _id: 1, task_name: "Hello my friends"}];
        mockCreateTask.mockReturnValue(returnValue);
        Tasks.createTask = mockCreateTask;
        expect(await Controller.createTask( "abc")).toEqual(returnValue);
    })
})

describe("Test endpoints", () => {
    it("Should get update task", async () => {
        let mockUpdateTask = jest.fn();
        let returnValue = [{ _id: 1, task_name: "Hello everyone"}];
        mockUpdateTask.mockReturnValue(returnValue);
        Tasks.updateTask = mockUpdateTask;
        expect(await Controller.updateTask(1, "123")).toEqual(returnValue);
    })
})

describe("Test endpoints", () => {
    it("Should get delete task", async () => {
        let mockDeleteTask = jest.fn();
        let returnValue = [{ _id: 1, task_name: "Hello my friends"}];
        mockDeleteTask.mockReturnValue(returnValue);
        Tasks.deleteTask = mockDeleteTask;
        expect(await Controller.deleteTask(1)).toEqual(returnValue);
    })
})