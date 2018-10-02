db.createCollection('destinations')
db.createCollection('travels')
db.createCollection('origins')
db.databaseVersioning.insertOne({
	_id: NumberInt(4), 
	notes: 'Create travels, origins, destinations collections'
})