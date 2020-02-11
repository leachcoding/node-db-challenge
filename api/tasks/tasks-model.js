const db = require('../../data/db-config');

module.exports = {
    get,
    getById,
    insert
}

function get() {
    return db('tasks');
}

function getById(id) {
    return db('tasks as t')
            .join('projects AS p', 't.projectId', 'p.projectId')
            .select('TaskDesc AS Task', 'Name AS Project', 'Desc', 't.Completed AS TaskComplete', 'p.Completed AS ProjectCompleted')
            .where('taskId', id)
}

function insert(task) {
    return db('tasks').insert(task);
}
