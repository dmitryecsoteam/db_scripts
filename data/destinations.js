db.getCollection('destinations').insertMany([
    {
        _id: NumberInt(1),
        name: ["Osaka", "Осака", "大阪市", "KIX", "OSA", "ITM"],
        title_en: "Osaka",
        country: "Japan",
        iata: "OSA"
    },
    {
        _id: NumberInt(2),
        name: ["Kobe", "Кобе", "Кобэ", "神戸市", "UKB"],
        title_en: "Kobe",
        country: "Japan",
        iata: "UKB"
    },
    {
        _id: NumberInt(3),
        name: ["Nagoya", "Нагоя", "名古屋市", "NGO", "NKM"],
        title_en: "Nagoya",
        country: "Japan",
        iata: "NGO"
    },
    {
        _id: NumberInt(4),
        name: ["Sapporo", "Саппоро", "札幌市", "SPK", "CTS", "OKD"],
        title_en: "Sapporo",
        country: "Japan",
        iata: "SPK"
    },
    {
        _id: NumberInt(5),
        name: ["Nagasaki", "Нагасаки", "長崎市", "NGS"],
        title_en: "Nagasaki",
        country: "Japan",
        iata: "NGS"
    }
])