db.system.js.save({
    _id: "generateRandomTravelsData",
    value: function () {
        db.getCollection('travels').find()
            .forEach(function (travel) {
                db.getCollection('travels').update(
                    {_id: travel._id},
                    {
                        $set: {
                            priceAirplane: NumberInt(getRandomInt(1000,50000)),
                            weatherTempStat: getRandomInt(-20,40),
                            weatherConditionStat: getRandomString()
                        }
                    }
                )
            })
    }
})

db.databaseVersioning.insertOne({
    _id: NumberInt(14),
    notes: 'function generates random data for all travels documents'
})