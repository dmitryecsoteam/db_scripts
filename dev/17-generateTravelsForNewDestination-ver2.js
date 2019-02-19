db.system.js.save({
    _id: "generateTravelsForNewDestination",
    value: function (destination) {
        db.getCollection('origins').find({ _id: { $ne: destination }})
            .forEach(function (orig) {
                generateTravelsOriginDestination(orig._id, destination)
            })
    }
})

db.databaseVersioning.insertOne({
    _id: NumberInt(17),
    notes: 'Function generateTravelsForNewDestination will not create Travels for origin = destination'
})