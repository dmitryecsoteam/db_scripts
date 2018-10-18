db.createCollection('destinations');
db.createCollection('travels');
db.createCollection('origins');
db.destinations.createIndex({
	"name": 1
}, {
	name: 'name_index'
});
db.origins.createIndex({
	"name": 1
}, {
	name: 'name_index'
});
db.travels.createIndex({
	"date": 1,
	"destination": 1,
	"oringin": 1
}, {
		name: 'origin_dest_date'
	});
db.databaseVersioning.insertOne({
	_id: NumberInt(1),
	notes: 'Create travels, origins, destinations collections'
});