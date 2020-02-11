exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {ResourceName: "Computer Desk"},
        {ResourceName: "Conference Room Chair"},
        {ResourceName: "Microphone Stand"},
        {ResourceName: "Lamp"},
        {ResourceName: "Van Wheel"},
        {ResourceName: "Hammer and Nails"},
        {ResourceName: "Bleach Cleaner"},
        {ResourceName: "Trash Bag"},
        {ResourceName: "Shovel"},
        {ResourceName: "Flashlight", "ResourceDesc": "Use this when the lights turn off"}
      ]);
    });
};
