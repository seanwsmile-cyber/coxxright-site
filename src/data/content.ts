export const BRAND = "COxxright Production";
export const HERO_TITLE = "專業排練及錄音空間";
export const HERO_BODY =
  "提供音樂相關而又最高性價比嘅服務俾你，從練習場地、錄音製作到樂譜編製，一站式滿足你嘅音樂需求。";
export const WA_BASE = "https://wa.me/85251914022";
export const INSTAGRAM = "https://www.instagram.com/coxxright";
export const IG_HANDLE = "@coxxright";
export const EMAIL = "coxxright@gmail.com";
export const PHONE = "51914022";
export const VENUE_SHORT = "屯門恒威工業中心A2座";
export const ADDRESS = "新界屯門建泰街6號恒威工業中心A2座";
export const MAPS =
  "https://www.google.com/maps/place/COxxright+Production/@22.3956277,113.9701884,17z";
export const TRANSIT = "近屯門站約 5 分鐘／輕鐵建安站一落就到";
export const HOURS = "音樂室 24 小時開放";
export const STAFF = "客服 11:00–23:00";

export const NAV = [
  { href: "#rooms", label: "場地" },
  { href: "#studio", label: "製作" },
  { href: "#rates", label: "收費" },
  { href: "#book", label: "預約" },
  { href: "#faq", label: "常見問題" },
  { href: "#members", label: "會員" },
] as const;

export const FAQS = [
  {
    q: "屯門邊度有 24 小時鼓房同琴室？",
    a: "COxxright Production 喺屯門建泰街 6 號恒威工業中心 A2座（近屯門站約 5 分鐘／輕鐵建安站）。24 小時自助鼓房、琴室、Band 房；另有錄音／編曲／MV。琴室 $60/hr 起，WhatsApp 51914022 預約。",
  },
  {
    q: "點樣預約？",
    a: "WhatsApp 51914022 或 Instagram @coxxright 私訊，講日期、時間、人數。歡迎即興或提早預約。客服 11:00–23:00；急事可致電 51914022。",
  },
  {
    q: "鼓房、琴房、Band 房幾錢？",
    a: "單一樂器房（鼓房、琴房、唱歌練習房）恒常 $60/hr 起，套票低至約 $43/hr。Band 房恒常 $120/hr 起。",
  },
  {
    q: "有冇錄音同編曲？",
    a: "有。人聲錄音使用 Shure SM7B，$428/hr；MIDI 編曲 $598 起；MV 拍攝 $298 起。WhatsApp 51914022 查詢。",
  },
] as const;

export const STEPS = [
  { n: "1", title: "揀場地", body: "鼓房、琴房、Band 房、唱歌練習房，或者錄音、編曲、拍攝。" },
  { n: "2", title: "WhatsApp 或 Instagram", body: "講日期、時間、人數。DM 51914022 或 @coxxright。" },
  { n: "3", title: "過嚟屯門", body: "恒威工業中心，近屯門站約 5 分鐘／輕鐵建安站一落就到。" },
] as const;

export const BOOK_CHIPS = [
  { id: "drum", label: "鼓房", hint: "$60/hr 起" },
  { id: "piano", label: "琴房", hint: "$60/hr 起" },
  { id: "band", label: "Band 房", hint: "$120/hr 起" },
  { id: "vocal", label: "唱歌練習房", hint: "$60/hr 起" },
  { id: "studio", label: "錄音／編曲", hint: "按服務報價" },
  { id: "member", label: "會員", hint: "年票／錄音會員" },
] as const;

export const ROOMS = [
  {
    id: "drum",
    title: "鼓房租用",
    kicker: "專業設備，舒適環境",
    rate: "恒常 $60/hr，套票低至 $43/hr",
    points: [
      "Sonor AQ1 Drums、Zildjian A Rock Cymbal Pack、DW9000 Double Pedal",
      "Fender Passport Event PA，可藍牙播歌",
      "24 小時自助",
    ],
  },
  {
    id: "piano",
    title: "琴房租用",
    kicker: "高性能電鋼琴及電子琴",
    rate: "恒常 $60/hr，套票低至 $43/hr",
    points: [
      "Casio Privia PX-S1000，音色純淨，觸鍵靈敏",
      "空間夠大，適合教學或練習",
      "可拍 cover／錄影考試，免費 Wi-Fi，24 小時自助",
    ],
  },
  {
    id: "band",
    title: "Band 房租用",
    kicker: "可能係你去過最有 feel 嘅 band 房",
    rate: "恒常 $120/hr 起",
    points: [
      "全套鼓組、電鋼琴及電子琴、木結他、低音電結他、電結他",
      "AKG P3／Shure SM58 可供二人使用",
      "Fender Passport Event PA、免費 Wi-Fi、雪櫃／暖櫃、24 小時自助",
    ],
  },
  {
    id: "vocal",
    title: "唱歌練習房",
    kicker: "最緊要夠舒適、夠自由",
    rate: "恒常 $60/hr，套票低至 $43/hr",
    points: [
      "AKG P3／Shure SM58 可供二人使用",
      "雙聲道喇叭，可藍牙播歌",
      "免費 Wi-Fi、雪櫃／暖櫃、可拍 cover／錄影考試、24 小時自助",
    ],
  },
] as const;

export const SERVICES = [
  {
    title: "MIDI 編曲",
    detail:
      "基本編曲套餐 $598 起，包括鼓／琴／結他／bass／弦樂／Vocal／Vocal Harmony 等單項樂器編曲。",
  },
  {
    title: "和音編製",
    detail: "和音編寫、Backing Vocals、人聲修飾、基本混音，$288 起。",
  },
  {
    title: "人聲錄音",
    detail: "專人操作錄音及原聲帶輸出，含基本混音及人聲修飾，Shure SM7B，$428/hr。",
  },
  {
    title: "MV 拍攝及剪接",
    detail: "多角度拍攝及剪接，配歌詞字幕，按曲風選字體，$298 起。",
  },
  {
    title: "樂譜電子化",
    detail: "手寫樂譜轉電子譜／MIDI，任何流行曲目 $120 起。設 PDF、MIDI 及實體印刷。",
  },
  {
    title: "人聲代唱",
    detail: "為 demo 安排不同唱歌風格同層次、和音編排，$288 起。",
  },
] as const;

export const WORKS = [
  {
    title: "真情流露",
    tag: "錄音＋MV",
    services: "人聲錄音＋進階混音及音準修正／MV 拍攝＋字幕",
    blurb: "婚禮 cover behind the scenes。",
    image: "/media/work-zhenqing.jpg",
    postedAt: "2025-03-30",
    url: "https://www.instagram.com/p/DH0p10YPC6w/",
  },
  {
    title: "ベテルギウス",
    tag: "錄音",
    services: "人聲錄音＋進階混音及音準修正",
    blurb: "Cover behind the scenes。",
    image: "/media/work-betelgeuse.jpg",
    postedAt: "2024-09-14",
    url: "https://www.instagram.com/p/C_5rc-cPSsb/",
  },
  {
    title: "Officially Missing You",
    tag: "錄音＋MV",
    services: "人聲錄音＋和音編製＋混音／MV 拍攝＋歌詞字幕",
    blurb: "MV 製作 behind the scenes。",
    image: "/media/work-missing.jpg",
    postedAt: "2024-01-14",
    url: "https://www.instagram.com/p/C2FTieLPk8Q/",
  },
] as const;

export const RATE_SINGLE = [
  { label: "1 人", value: "$60／小時，$40／加半小時" },
  { label: "2–3 人", value: "$80／小時，$55／加半小時" },
] as const;

export const RATE_PACKS = [
  { label: "5 小時", value: "$280（平均 $56／小時）" },
  { label: "10 小時", value: "$500（平均 $50／小時）" },
  { label: "15 小時", value: "$720（平均 $48／小時）" },
] as const;

export const RATE_BAND = [
  { label: "1–2 人", value: "$120／小時" },
  { label: "3 人上限", value: "$160／小時" },
  { label: "5 人上限", value: "$180／小時" },
] as const;

export const MEMBERS = [
  {
    name: "全音符會員",
    notes: [
      "60 小時音樂室租用，限期一年",
      "音樂產品 75 折（鼓棍、耳塞、耳機等）",
      "自助飲品 $3 起、神秘禮品、會員優先優惠",
      "音樂室限一人用單個樂器",
    ],
  },
  {
    name: "十六分音符會員",
    notes: [
      "40 小時音樂室租用，限期半年",
      "音樂產品 9 折",
      "自助飲品 $3 起、神秘禮品、會員優先優惠",
      "音樂室限一人用單個樂器",
    ],
  },
  {
    name: "高音會員",
    notes: [
      "三次人聲錄音（1hr）連進階人聲混音，限期一年",
      "監聽耳機等 75 折，加購 9 折",
      "神秘禮品及限定優惠",
      "優惠限一人使用",
    ],
  },
  {
    name: "中音會員",
    notes: [
      "5 小時人聲錄音，可自行分配（1 小時為單位），限期一年",
      "監聽耳機等 9 折",
      "神秘禮品及限定優惠",
      "優惠限一人使用",
    ],
  },
] as const;

export function waHref(label?: string) {
  const text = label
    ? `你好，想預約${label}。日期： 時間： 人數：`
    : "你好，想預約音樂室。日期： 時間： 人數：";
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

export const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicRecordingStudio",
      "@id": "https://coxxright.com/#studio",
      name: BRAND,
      url: "https://coxxright.com",
      email: EMAIL,
      telephone: "+852-51914022",
      image: "https://coxxright.com/media/band-room-drums.jpg",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "建泰街6號恒威工業中心A2座",
        addressLocality: "屯門",
        addressRegion: "新界",
        addressCountry: "HK",
      },
      areaServed: ["屯門", "新界西", "香港"],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      hasMap: MAPS,
      geo: { "@type": "GeoCoordinates", latitude: 22.3956277, longitude: 113.9701884 },
      sameAs: [INSTAGRAM, MAPS],
    },
    {
      "@type": "FAQPage",
      "@id": "https://coxxright.com/#faq",
      mainEntity: FAQS.map((e) => ({
        "@type": "Question",
        name: e.q,
        acceptedAnswer: { "@type": "Answer", text: e.a },
      })),
    },
  ],
};
