db.system.js.save({
    _id: "generateTravelsOriginDestination",
    value: function (origin, destination) {
        let day = new Date()
        const untill = new Date(day.getFullYear() + 1, day.getMonth(), day.getDate())

        for (day; day <= untill; day.setDate(day.getDate() + 1)) {
            db.travels.insert(
                {
                    origin: NumberInt(origin),
                    destination: NumberInt(destination),
                    date: convertDateToString(day)
                }
            )
        }
    }
})
db.system.js.save({
    _id: "generateTravelsForNewDestination",
    value: function (destination) {
        db.getCollection('origins').find()
            .forEach(function (orig) {
                generateTravelsOriginDestination(orig._id, destination)
            })
    }
})
db.system.js.save({
    _id: "generateTravelsForNewOrigin",
    value: function (origin) {
        db.getCollection('destinations').find()
        .forEach(function (dest) {
            generateTravelsOriginDestination(origin, dest._id)
        })
    }
})

db.databaseVersioning.insertOne({
    _id: NumberInt(13),
    notes: 'function generates documents in travels collection for the next year'
})