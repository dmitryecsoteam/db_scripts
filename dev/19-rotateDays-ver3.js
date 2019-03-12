db.system.js.save({

    _id: "rotateDays",
    value: function () {
        const today = new Date();
        const nextYear = today.getFullYear() + 1;
        const isLeapYear = ((nextYear % 4 == 0) && (nextYear % 100 != 0)) || (nextYear % 400 == 0);
        db.getCollection('travels').find({ date: { $lt: convertDateToString(today) } })
            .forEach(function (travel) {
                if (travel.date.substring(5) !== "02-29") {
                    const newDate = nextYear + travel.date.substring(4);
                    try {
                        db.getCollection('travels').update(
                            {
                                _id: travel._id
                            },
                            {
                                $set: {
                                    date: newDate
                                },
                                $unset: {
                                    priceAirplane: "",
                                    priceHotel: ""
                                }
                            }
                        );
                    } catch (e) {
                        print("Error while updating date for next year");
                        print(e);
                    }
                    if (isLeapYear && (travel.date.substring(5) === "02-28")) {

                        try {
                            const insertTravel = {
                                origin: travel.origin,
                                destination: travel.destination,
                                date: nextYear + "-02-29"
                            };
                            if (travel.weatherTempStatMax) { insertTravel.weatherTempStatMax = travel.weatherTempStatMax; }
                            if (travel.weatherTempStatMin) { insertTravel.weatherTempStatMin = travel.weatherTempStatMin; }
                            if (travel.carDuration) { insertTravel.carDuration = travel.carDuration; }
                            if (travel.carDistance) { insertTravel.carDistance = travel.carDistance; }

                            db.getCollection('travels').insertOne(insertTravel);
                        } catch (e) {
                            print("Error while inserting 29th February for next year");
                            print(e);
                        }
                    }
                } else {
                    try {
                        db.getCollection('travels').remove({ _id: travel._id }, true);
                    } catch (e) {
                        print("Error while removing 29th February");
                        print(e);
                    }
                }
            });
    }
})

db.databaseVersioning.insertOne({
    _id: NumberInt(19),
    notes: 'Add priceHotel to unset'
})