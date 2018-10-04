db.system.js.save({
	_id: "generateRandomParamsDest",
	value: function () {
		const desc = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			"Quisque scelerisque congue magna a vestibulum. Donec sed tincidunt purus",
			"Proin pharetra ante est, eget convallis magna tempor id. Etiam vitae aliquet massa",
			"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam tortor elit, vehicula ut enim pharetra, sagittis fermentum nulla",
			"Pellentesque eu leo sed urna mattis suscipit eu eu tortor. Praesent auctor quam eu ex tristique pretium",
			"Ut tempor ex vel eleifend lobortis. Nunc vel tortor odio"]

			db.getCollection('destinations').find()
				.forEach( function (dest) {
					db.getCollection('destinations').update(
						{ _id: dest._id },
						{
							$set: {
								museumRating: NumberInt(getRandomInt(0,5)),
								museumDescription: desc[getRandomInt(0,5)],
								zooAquaRating: NumberInt(getRandomInt(0,5)),
								zooAquaDescription: desc[getRandomInt(0,5)],
								wellnessSpaRating: NumberInt(getRandomInt(0,5)),
								wellnessSpaDescription: desc[getRandomInt(0,5)],
								mountainsRating: NumberInt(getRandomInt(0,5)),
								mountainsDescription: desc[getRandomInt(0,5)],
								beachRating: NumberInt(getRandomInt(0,5)),
								beachDescription: desc[getRandomInt(0,5)],
								foodRating: NumberInt(getRandomInt(0,5)),
								foodDescription: desc[getRandomInt(0,5)],
								shoppingRating: NumberInt(getRandomInt(0,5)),
								shoppingDescription: desc[getRandomInt(0,5)],
								historicalRating: NumberInt(getRandomInt(0,5)),
								historicalDescription: desc[getRandomInt(0,5)],
								natureRating: NumberInt(getRandomInt(0,5)),
								natureDescription: desc[getRandomInt(0,5)]
							}
						}
					)
				})
	}
})



db.databaseVersioning.insertOne({
	_id: NumberInt(12),
	notes: 'function generate random params for destinations'
})