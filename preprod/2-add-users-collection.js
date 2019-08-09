db.createCollection('users');
scrollBy.users.createIndex({
    "email": 1
}, {
    name: "email_index"
});