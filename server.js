const express = require('express');
const server = express();

const ProjectsRouter = require('./api/projects/project-router');
const TasksRouter = require('./api/tasks/task-router');
const ResourcesRouter = require('./api/resources/resource-router');

server.use(express.json());

server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TasksRouter);
server.use('/api/resources', ResourcesRouter);
module.exports = server;
