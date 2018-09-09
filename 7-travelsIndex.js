db.travels.createIndex({    
    "date" : 1,
    "destination" : 1,
    "oringin" : 1
    }, {
        name: 'origin_dest_data'
    })
db.databaseVersioning.insertOne({
	_id: NumberInt(7), 
	notes: 'create index on travels collection'
})