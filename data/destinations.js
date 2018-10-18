db.getCollection('destinations').insertMany([
    {
        _id: NumberInt(1),
        name: ["Osaka", "Осака", "大阪市", "KIX", "OSA", "ITM"],
        name_en: "Osaka",
        country_en: "Japan",
        iata: "OSA"
    },
    {
        _id: NumberInt(2),
        name: ["Kobe", "Кобе", "Кобэ", "神戸市", "UKB"],
        name_en: "Kobe",
        country_en: "Japan",
        iata: "UKB"
    },
    {
        _id: NumberInt(3),
        name: ["Nagoya", "Нагоя", "名古屋市", "NGO", "NKM"],
        name_en: "Nagoya",
        country_en: "Japan",
        iata: "NGO"
    },
    {
        _id: NumberInt(4),
        name: ["Sapporo", "Саппоро", "札幌市", "SPK", "CTS", "OKD"],
        name_en: "Sapporo",
        country_en: "Japan",
        iata: "SPK"
    },
    {
        _id: NumberInt(5),
        name: ["Nagasaki", "Нагасаки", "長崎市", "NGS"],
        name_en: "Nagasaki",
        country_en: "Japan",
        iata: "NGS"
    }
])