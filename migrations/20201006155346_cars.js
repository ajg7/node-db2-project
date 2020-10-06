
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
        // Provider Key
        tbl.increments();

        //Make and Model
        tbl.string("CarMake", 512).notNullable().index();
        tbl.string("CarModel", 512).notNullable().index();

        //Year
        tbl.integer("Year").notNullable().index();

        //Mileage
        tbl.decimal("Mileage").notNullable().index();

        //VIN #
        tbl.integer("VIN").notNullable().unique().index();

        //Transmission Type
        tbl.string("TransmissionType").index();

        //Clean Status (True or False)
        tbl.boolean("Clean").index();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
