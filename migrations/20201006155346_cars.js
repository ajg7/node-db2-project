
exports.up = function(knex) {
    return knex.schema.createTable("cars", table => {
        // Provider Key
        table.increments();

        //Make and Model
        table.string("CarMake", 512).notNullable().index();
        table.string("CarModel", 512).notNullable().index();

        //Year
        table.integer("Year").notNullable().index();

        //Mileage
        table.decimal("Mileage").notNullable().index();

        //VIN #
        table.integer("VIN").notNullable().unique().index();

        //Transmission Type
        table.string("TransmissionType").index();

        //Clean Status (True or False)
        table.boolean("Clean").index();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
