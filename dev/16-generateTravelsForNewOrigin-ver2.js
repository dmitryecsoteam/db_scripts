db.system.js.save({
    _id: "generateTravelsForNewOrigin",
    value: function (origin) {
        db.getCollection('destinations').find({ _id: { $ne: origin }})
        .forEach(function (dest) {
            generateTravelsOriginDestination(origin, dest._id)
        })
    }
})

db.databaseVersioning.insertOne({
    _id: NumberInt(16),
    notes: 'Function generateTravelsForNewOrigin will not create Travels for origin = destination'
})