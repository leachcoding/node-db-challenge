const db = require('../../data/db-config');

module.exports = {
    get,
    getById,
    getDetails,
    insert
}

function get(){
    return db('projects');
}

function getById(id){
    return db('projects').where('ProjectId', id);
}

function getDetails(id){
    return db('projects AS p').where('p.ProjectId', id).leftJoin('tasks AS t', 'p.ProjectId', 't.ProjectId');
}

function insert(project){
    return db('projects').insert(project);
}
