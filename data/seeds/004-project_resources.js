exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        {ProjectId: 1, ResourceId: 5},
        {ProjectId: 1, ResourceId: 6},
        {ProjectId: 1, ResourceId: 7},
        {ProjectId: 1, ResourceId: 8},
        {ProjectId: 1, ResourceId: 9},
        {ProjectId: 1, ResourceId: 10},
        {ProjectId: 2, ResourceId: 6},
        {ProjectId: 2, ResourceId: 8},
        {ProjectId: 2, ResourceId: 9},
        {ProjectId: 3, ResourceId: 6},
        {ProjectId: 3, ResourceId: 8},
        {ProjectId: 3, ResourceId: 10}
      ]);
    });
};
