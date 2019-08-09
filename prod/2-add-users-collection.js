db.createCollection('users');
db.users.createIndex({
    "email": 1
}, {
    name: "email_index"
});