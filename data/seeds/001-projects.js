exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {Name: 'Neo', Desc: 'Try not to get captured.'},
        {Name: 'Kitchen Reno'},
        {Name: 'Homesteading'}
      ]);
    });
};
