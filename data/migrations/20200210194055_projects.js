
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('ProjectId');
        tbl.string('Name', 128).notNullable();
        tbl.text('Desc');
        tbl.boolean('Completed').defaultTo(0);
    })
    .createTable('tasks', tbl => {
        tbl.increments('TaskId');

        tbl.integer('ProjectId')
            .unsigned()
            .notNullable()
            .references('ProjectId')
            .inTable('projects');

        tbl.string('TaskDesc', 128).notNullable();
        tbl.text('TaskNotes');
        tbl.boolean('Completed').defaultTo(0);
    })
    .createTable('resources', tbl => {
        tbl.increments('ResourceId');
        tbl.string('ResourceName', 128).notNullable().unique();
        tbl.text('ResourceDesc');
    })
    .createTable('project_resources', tbl => {
        tbl.increments();

        tbl.integer('ProjectId')
            .unsigned()
            .notNullable()
            .references('ProjectId')
            .inTable('projects');

        tbl.integer('ResourceId')
            .unsigned()
            .notNullable()
            .references('ResourceId')
            .inTable('resources');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')

};
