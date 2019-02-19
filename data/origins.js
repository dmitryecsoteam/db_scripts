db.getCollection('origins').insertMany([
    {
        _id: NumberInt(1),
        name: ["Tokyo", "東京", "Токио", "TYO", "NRT", "HND"],
        nameEn: "Tokyo",
        countryEn: "Japan",
        iata: "TYO",
        priceAirplaneService: "skyscanner",
        latitude: "35.652832",
        longitude: "139.839478"
    },
    {
        _id: NumberInt(2),
        name: ["Osaka", "Осака", "大阪市", "KIX", "OSA", "ITM"],
        nameEn: "Osaka",
        countryEn: "Japan",
        iata: "OSA",
        priceAirplaneService: "skyscanner",
        latitude: "34.652500",
        longitude: "139.839478"
    }
])