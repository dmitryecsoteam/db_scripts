db.getCollection('origins').insertMany([
    {
        _id: NumberInt(1),
        name: ["Tokyo", "東京", "Токио", "TYO", "NRT", "HND"],
        title_en: "Tokyo",
        country: "Japan",
        iata: "TYO"
    }
])