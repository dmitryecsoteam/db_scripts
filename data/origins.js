db.getCollection('origins').insertMany([
    {
        _id: NumberInt(1),
        name: ["Tokyo", "東京", "Токио", "TYO", "NRT", "HND"],
        name_en: "Tokyo",
        country_en: "Japan",
        iata: "TYO",
        priceAirplaneService: "skyscanner",
        latitude: "35.652832",
        longitude: "139.839478"
    }
])