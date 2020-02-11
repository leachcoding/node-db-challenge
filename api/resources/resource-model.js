const db = require('../../data/db-config');

module.exports = {
    get,
    insert,
    update
}

function get(){
    return db('resources');
}

function insert(resource){
    return db('resources').insert(resource);
}

function update(id, resource) {
    return db('resources').where('ResourceId', id).update(resource, '*');
}
