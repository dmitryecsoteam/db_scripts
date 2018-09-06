db.system.js.save({
    _id: "getRandomString",
	value: function () {
        return Math.random().toString(36).substring(7);
    }
})
db.databaseVersioning.insertOne({
	_id: NumberInt(2), 
	notes: 'getRandomString function'
})