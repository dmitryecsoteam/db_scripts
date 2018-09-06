db.system.js.save({
    _id: "generateRandomData",
    value: function (originNumber, destinationNumber) {
        
        const desc = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit",
"Quisque scelerisque congue magna a vestibulum. Donec sed tincidunt purus", 
"Proin pharetra ante est, eget convallis magna tempor id. Etiam vitae aliquet massa", 
"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam tortor elit, vehicula ut enim pharetra, sagittis fermentum nulla", 
"Pellentesque eu leo sed urna mattis suscipit eu eu tortor. Praesent auctor quam eu ex tristique pretium",
"Ut tempor ex vel eleifend lobortis. Nunc vel tortor odio"]
        
        let destinations = []
        
        for (let des = 1; des <= destinationNumber; des++) {
            
            const destination = getRandomString()
            destinations.push(destination)
            
            db.destinations.insert({
                    _id: destination,
                    destination: destination,
                    foodRating: NumberInt(getRandomInt(0,5)),
                    foodDescription: desc[getRandomInt(0,5)],
                    museumRating: NumberInt(getRandomInt(0,5)),
                    museumDescription: desc[getRandomInt(0,5)]
                })
                
        }
        
        for (let ori = 1; ori <= originNumber; ori++) {
        
            const origin = getRandomString()
            db.origins.insert({
                _id: origin,
                origin: origin
                })
        
            for (let dest = 0; dest < destinationNumber; dest++) {
                
                let day = new Date()
                const untill = new Date(day.getFullYear() + 1, day.getMonth(), day.getDate())
        
                for (day; day <= untill; day.setDate(day.getDate() + 1)) {
                        db.travels.insert(
                            {
                                origin: origin,
                                destination: destinations[dest],
                                date: day,
                                priceAirplane: NumberInt(getRandomInt(1000,50000)),
                                weatherTempStat: getRandomInt(-20,40),
                                weatherConditionStat: getRandomString()
                            }
                        )
                }
                
                
            }

        }
    }
})
db.databaseVersioning.insertOne({
	_id: NumberInt(3), 
	notes: 'generateRandomData function'
})