Run js script locally (connect under vagrant):
mongo --username ecso_admin --password Qwerty123 --authenticationDatabase admin localhost:27017/ECSO-DB destinations.js

copy collection in the same database:
db.getCollection('travels').aggregate([ { $match: { destination: {$in: [15, 25, 35, 45 ]} } }, { $out: "travelsTest" } ])

backup database
mongodump --username ecso_admin --password Qwerty123 --authenticationDatabase admin --db ECSO-DB --out /vagrant/db_scripts/dump/