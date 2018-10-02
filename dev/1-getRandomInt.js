db.system.js.save({
    _id: "getRandomInt",
	value: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})
db.databaseVersioning.insertOne({
	_id: NumberInt(1), 
	notes: 'getRandomInt function'
})