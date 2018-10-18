db.getCollection('origins').insertMany([
    {
        _id: NumberInt(1),
        name: ["Tokyo", "東京", "Токио", "TYO", "NRT", "HND"],
        name_en: "Tokyo",
        country_en: "Japan",
        iata: "TYO",
        priceAirplaneService: "aviasales"
    }
])