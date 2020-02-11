exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {ProjectId: 1, TaskDesc: 'Start new garden.'},
        {ProjectId: 1, TaskDesc: 'Drive to the city.'},
        {ProjectId: 1, TaskDesc: 'Procure fertalizer.'},
        {ProjectId: 1, TaskDesc: 'Fertalize new garden plot.'},
        {ProjectId: 2, TaskDesc: 'Tear out old closet'},
        {ProjectId: 2, TaskDesc: 'Remove existing staircase'},
        {ProjectId: 3, TaskDesc: 'Rake up rocks'},
        {ProjectId: 3, TaskDesc: 'Pull Grass'},
        {ProjectId: 3, TaskDesc: 'Reroute down spouts'},
        {ProjectId: 3, TaskDesc: 'Level backyard'},
        {ProjectId: 1, TaskDesc: 'replant grass'}
      ]);
    });
};
