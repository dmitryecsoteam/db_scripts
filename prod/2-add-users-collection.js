db.createCollection('users');
db.users.createIndex({
    "email": 1
}, {
    name: "email_index"
});
db.databaseVersioning.insertOne({
	_id: NumberInt(2),
	notes: 'Create users collection'
});