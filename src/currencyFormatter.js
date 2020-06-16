function getCurrencyDetailsByLocale(locale) {
  const countries = [
    {
      code: "EUR",
      locale: ["ca"],
    },
    {
      code: "AED",
      locale: ["ar-AE", "fa", "en", "hi", "ur"],
    },
    {
      code: "AFN",
      locale: ["fa-AF", "ps", "uz-AF", "tk"],
    },
    {
      code: "XCD",
      locale: ["en-AG"],
    },
    {
      code: "XCD",
      locale: ["en-AI"],
    },
    {
      code: "ALL",
      locale: ["sq", "el"],
    },
    {
      code: "AMD",
      locale: ["hy"],
    },
    {
      code: "AOA",
      locale: ["pt-AO"],
    },
    {
      code: "",
      locale: [""],
    },
    {
      code: "ARS",
      locale: ["es-AR", "en", "it", "de", "fr", "gn"],
    },
    {
      code: "USD",
      locale: ["en-AS", "sm", "to"],
    },
    {
      code: "EUR",
      locale: ["de-AT", "hr", "hu", "sl"],
    },
    {
      code: "AUD",
      locale: ["en-AU"],
    },
    {
      code: "AWG",
      locale: ["nl-AW", "pap", "es", "en"],
    },
    {
      code: "EUR",
      locale: ["sv-AX"],
    },
    {
      code: "AZN",
      locale: ["az", "ru", "hy"],
    },
    {
      code: "BAM",
      locale: ["bs", "hr-BA", "sr-BA"],
    },
    {
      code: "BBD",
      locale: ["en-BB"],
    },
    {
      code: "BDT",
      locale: ["bn-BD", "en"],
    },
    {
      code: "EUR",
      locale: ["nl-BE", "fr-BE", "de-BE"],
    },
    {
      code: "XOF",
      locale: ["fr-BF", "mos"],
    },
    {
      code: "BGN",
      locale: ["bg", "tr-BG", "rom"],
    },
    {
      code: "BHD",
      locale: ["ar-BH", "en", "fa", "ur"],
    },
    {
      code: "BIF",
      locale: ["fr-BI", "rn"],
    },
    {
      code: "XOF",
      locale: ["fr-BJ"],
    },
    {
      code: "EUR",
      locale: ["fr"],
    },
    {
      code: "BMD",
      locale: ["en-BM", "pt"],
    },
    {
      code: "BND",
      locale: ["ms-BN", "en-BN"],
    },
    {
      code: "BOB",
      locale: ["es-BO", "qu", "ay"],
    },
    {
      code: "USD",
      locale: ["nl", "pap", "en"],
    },
    {
      code: "BRL",
      locale: ["pt-BR", "es", "en", "fr"],
    },
    {
      code: "BSD",
      locale: ["en-BS"],
    },
    {
      code: "BTN",
      locale: ["dz"],
    },
    {
      code: "NOK",
      locale: [""],
    },
    {
      code: "BWP",
      locale: ["en-BW", "tn-BW"],
    },
    {
      code: "BYN",
      locale: ["be", "ru"],
    },
    {
      code: "BZD",
      locale: ["en-BZ", "es"],
    },
    {
      code: "CAD",
      locale: ["en-CA", "fr-CA", "iu"],
    },
    {
      code: "AUD",
      locale: ["ms-CC", "en"],
    },
    {
      code: "CDF",
      locale: ["fr-CD", "ln", "ktu", "kg", "sw", "lua"],
    },
    {
      code: "XAF",
      locale: ["fr-CF", "sg", "ln", "kg"],
    },
    {
      code: "XAF",
      locale: ["fr-CG", "kg", "ln-CG"],
    },
    {
      code: "CHF",
      locale: ["de-CH", "fr-CH", "it-CH", "rm"],
    },
    {
      code: "XOF",
      locale: ["fr-CI"],
    },
    {
      code: "NZD",
      locale: ["en-CK", "mi"],
    },
    {
      code: "CLP",
      locale: ["es-CL"],
    },
    {
      code: "XAF",
      locale: ["en-CM", "fr-CM"],
    },
    {
      code: "CNY",
      locale: ["zh-CN", "yue", "wuu", "dta", "ug", "za"],
    },
    {
      code: "COP",
      locale: ["es-CO"],
    },
    {
      code: "CRC",
      locale: ["es-CR", "en"],
    },
    {
      code: "CUP",
      locale: ["es-CU", "pap"],
    },
    {
      code: "CVE",
      locale: ["pt-CV"],
    },
    {
      code: "ANG",
      locale: ["nl", "pap"],
    },
    {
      code: "AUD",
      locale: ["en", "zh", "ms-CC"],
    },
    {
      code: "EUR",
      locale: ["el-CY", "tr-CY", "en"],
    },
    {
      code: "CZK",
      locale: ["cs", "sk"],
    },
    {
      code: "EUR",
      locale: ["de", "de-DE"],
    },
    {
      code: "DJF",
      locale: ["fr-DJ", "ar", "so-DJ", "aa"],
    },
    {
      code: "DKK",
      locale: ["da-DK", "en", "fo", "de-DK"],
    },
    {
      code: "XCD",
      locale: ["en-DM"],
    },
    {
      code: "DOP",
      locale: ["es-DO"],
    },
    {
      code: "DZD",
      locale: ["ar-DZ"],
    },
    {
      code: "USD",
      locale: ["es-EC"],
    },
    {
      code: "EUR",
      locale: ["et", "ru"],
    },
    {
      code: "EGP",
      locale: ["ar-EG", "en", "fr"],
    },
    {
      code: "MAD",
      locale: ["ar", "mey"],
    },
    {
      code: "ERN",
      locale: ["aa-ER", "ar", "tig", "kun", "ti-ER"],
    },
    {
      code: "EUR",
      locale: ["es-ES", "ca", "gl", "eu", "oc"],
    },
    {
      code: "ETB",
      locale: ["am", "en-ET", "om-ET", "ti-ET", "so-ET", "sid"],
    },
    {
      code: "EUR",
      locale: ["fi-FI", "sv-FI", "smn"],
    },
    {
      code: "FJD",
      locale: ["en-FJ", "fj"],
    },
    {
      code: "FKP",
      locale: ["en-FK"],
    },
    {
      code: "USD",
      locale: ["en-FM", "chk", "pon", "yap", "kos", "uli", "woe", "nkr", "kpg"],
    },
    {
      code: "DKK",
      locale: ["fo", "da-FO"],
    },
    {
      code: "EUR",
      locale: ["fr-FR", "frp", "br", "co", "ca", "eu", "oc"],
    },
    {
      code: "XAF",
      locale: ["fr-GA"],
    },
    {
      code: "GBP",
      locale: ["en-GB", "cy-GB", "gd"],
    },
    {
      code: "XCD",
      locale: ["en-GD"],
    },
    {
      code: "GEL",
      locale: ["ka", "ru", "hy", "az"],
    },
    {
      code: "EUR",
      locale: ["fr-GF"],
    },
    {
      code: "GBP",
      locale: ["en", "nrf"],
    },
    {
      code: "GHS",
      locale: ["en-GH", "ak", "ee", "tw"],
    },
    {
      code: "GIP",
      locale: ["en-GI", "es", "it", "pt"],
    },
    {
      code: "DKK",
      locale: ["kl", "da-GL", "en"],
    },
    {
      code: "GMD",
      locale: ["en-GM", "mnk", "wof", "wo", "ff"],
    },
    {
      code: "GNF",
      locale: ["fr-GN"],
    },
    {
      code: "EUR",
      locale: ["fr-GP"],
    },
    {
      code: "XAF",
      locale: ["es-GQ", "fr"],
    },
    {
      code: "EUR",
      locale: ["el-GR", "en", "fr"],
    },
    {
      code: "GBP",
      locale: ["en"],
    },
    {
      code: "GTQ",
      locale: ["es-GT"],
    },
    {
      code: "USD",
      locale: ["en-GU", "ch-GU"],
    },
    {
      code: "XOF",
      locale: ["pt-GW", "pov"],
    },
    {
      code: "GYD",
      locale: ["en-GY"],
    },
    {
      code: "HKD",
      locale: ["zh-HK", "yue", "zh", "en"],
    },
    {
      code: "AUD",
      locale: [""],
    },
    {
      code: "HNL",
      locale: ["es-HN", "cab", "miq"],
    },
    {
      code: "HRK",
      locale: ["hr-HR", "sr"],
    },
    {
      code: "HTG",
      locale: ["ht", "fr-HT"],
    },
    {
      code: "HUF",
      locale: ["hu-HU"],
    },
    {
      code: "IDR",
      locale: ["id", "en", "nl", "jv"],
    },
    {
      code: "EUR",
      locale: ["en-IE", "ga-IE"],
    },
    {
      code: "ILS",
      locale: ["he", "ar-IL", "en-IL", ""],
    },
    {
      code: "GBP",
      locale: ["en", "gv"],
    },
    {
      code: "INR",
      locale: [
        "en-IN",
        "hi",
        "bn",
        "te",
        "mr",
        "ta",
        "ur",
        "gu",
        "kn",
        "ml",
        "or",
        "pa",
        "as",
        "bh",
        "sat",
        "ks",
        "ne",
        "sd",
        "kok",
        "doi",
        "mni",
        "sit",
        "sa",
        "fr",
        "lus",
        "inc",
      ],
    },
    {
      code: "USD",
      locale: ["en-IO"],
    },
    {
      code: "IQD",
      locale: ["ar-IQ", "ku", "hy"],
    },
    {
      code: "IRR",
      locale: ["fa-IR", "ku"],
    },
    {
      code: "ISK",
      locale: ["is", "en", "de", "da", "sv", "no"],
    },
    {
      code: "EUR",
      locale: ["it-IT", "de-IT", "fr-IT", "sc", "ca", "co", "sl"],
    },
    {
      code: "GBP",
      locale: ["en", "fr", "nrf"],
    },
    {
      code: "JMD",
      locale: ["en-JM"],
    },
    {
      code: "JOD",
      locale: ["ar-JO", "en"],
    },
    {
      code: "JPY",
      locale: ["ja"],
    },
    {
      code: "KES",
      locale: ["en-KE", "sw-KE"],
    },
    {
      code: "KGS",
      locale: ["ky", "uz", "ru"],
    },
    {
      code: "KHR",
      locale: ["km", "fr", "en"],
    },
    {
      code: "AUD",
      locale: ["en-KI", "gil"],
    },
    {
      code: "KMF",
      locale: ["ar", "fr-KM"],
    },
    {
      code: "XCD",
      locale: ["en-KN"],
    },
    {
      code: "KPW",
      locale: ["ko-KP"],
    },
    {
      code: "KRW",
      locale: ["ko-KR", "en"],
    },
    {
      code: "KWD",
      locale: ["ar-KW", "en"],
    },
    {
      code: "KYD",
      locale: ["en-KY"],
    },
    {
      code: "KZT",
      locale: ["kk", "ru"],
    },
    {
      code: "LAK",
      locale: ["lo", "fr", "en"],
    },
    {
      code: "LBP",
      locale: ["ar-LB", "fr-LB", "en", "hy"],
    },
    {
      code: "XCD",
      locale: ["en-LC"],
    },
    {
      code: "CHF",
      locale: ["de-LI"],
    },
    {
      code: "LKR",
      locale: ["si", "ta", "en"],
    },
    {
      code: "LRD",
      locale: ["en-LR"],
    },
    {
      code: "LSL",
      locale: ["en-LS", "st", "zu", "xh"],
    },
    {
      code: "EUR",
      locale: ["lt", "ru", "pl"],
    },
    {
      code: "EUR",
      locale: ["lb", "de-LU", "fr-LU"],
    },
    {
      code: "EUR",
      locale: ["lv", "ru", "lt"],
    },
    {
      code: "LYD",
      locale: ["ar-LY", "it", "en"],
    },
    {
      code: "MAD",
      locale: ["ar-MA", "ber", "fr"],
    },
    {
      code: "EUR",
      locale: ["fr-MC", "en", "it"],
    },
    {
      code: "MDL",
      locale: ["ro", "ru", "gag", "tr"],
    },
    {
      code: "EUR",
      locale: ["sr", "hu", "bs", "sq", "hr", "rom"],
    },
    {
      code: "EUR",
      locale: ["fr"],
    },
    {
      code: "MGA",
      locale: ["fr-MG", "mg"],
    },
    {
      code: "USD",
      locale: ["mh", "en-MH"],
    },
    {
      code: "MKD",
      locale: ["mk", "sq", "tr", "rmm", "sr"],
    },
    {
      code: "XOF",
      locale: ["fr-ML", "bm"],
    },
    {
      code: "MMK",
      locale: ["my"],
    },
    {
      code: "MNT",
      locale: ["mn", "ru"],
    },
    {
      code: "MOP",
      locale: ["zh", "zh-MO", "pt"],
    },
    {
      code: "USD",
      locale: ["fil", "tl", "zh", "ch-MP", "en-MP"],
    },
    {
      code: "EUR",
      locale: ["fr-MQ"],
    },
    {
      code: "MRU",
      locale: ["ar-MR", "fuc", "snk", "fr", "mey", "wo"],
    },
    {
      code: "XCD",
      locale: ["en-MS"],
    },
    {
      code: "EUR",
      locale: ["mt", "en-MT"],
    },
    {
      code: "MUR",
      locale: ["en-MU", "bho", "fr"],
    },
    {
      code: "MVR",
      locale: ["dv", "en"],
    },
    {
      code: "MWK",
      locale: ["ny", "yao", "tum", "swk"],
    },
    {
      code: "MXN",
      locale: ["es-MX"],
    },
    {
      code: "MYR",
      locale: ["ms-MY", "en", "zh", "ta", "te", "ml", "pa", "th"],
    },
    {
      code: "MZN",
      locale: ["pt-MZ", "vmw"],
    },
    {
      code: "NAD",
      locale: ["en-NA", "af", "de", "hz", "naq"],
    },
    {
      code: "XPF",
      locale: ["fr-NC"],
    },
    {
      code: "XOF",
      locale: ["fr-NE", "ha", "kr", "dje"],
    },
    {
      code: "AUD",
      locale: ["en-NF"],
    },
    {
      code: "NGN",
      locale: ["en-NG", "ha", "yo", "ig", "ff"],
    },
    {
      code: "NIO",
      locale: ["es-NI", "en"],
    },
    {
      code: "EUR",
      locale: ["nl-NL", "fy-NL"],
    },
    {
      code: "NOK",
      locale: ["no", "nb", "nn", "se", "fi"],
    },
    {
      code: "NPR",
      locale: ["ne", "en"],
    },
    {
      code: "AUD",
      locale: ["na", "en-NR"],
    },
    {
      code: "NZD",
      locale: ["niu", "en-NU"],
    },
    {
      code: "NZD",
      locale: ["en-NZ", "mi"],
    },
    {
      code: "OMR",
      locale: ["ar-OM", "en", "bal", "ur"],
    },
    {
      code: "PAB",
      locale: ["es-PA", "en"],
    },
    {
      code: "PEN",
      locale: ["es-PE", "qu", "ay"],
    },
    {
      code: "XPF",
      locale: ["fr-PF", "ty"],
    },
    {
      code: "PGK",
      locale: ["en-PG", "ho", "meu", "tpi"],
    },
    {
      code: "PHP",
      locale: [
        "tl",
        "en-PH",
        "fil",
        "ceb",
        "tgl",
        "ilo",
        "hil",
        "war",
        "pam",
        "bik",
        "bcl",
        "pag",
        "mrw",
        "tsg",
        "mdh",
        "cbk",
        "krj",
        "sgd",
        "msb",
        "akl",
        "ibg",
        "yka",
        "mta",
        "abx",
      ],
    },
    {
      code: "PKR",
      locale: ["ur-PK", "en-PK", "pa", "sd", "ps", "brh"],
    },
    {
      code: "PLN",
      locale: ["pl"],
    },
    {
      code: "EUR",
      locale: ["fr-PM"],
    },
    {
      code: "NZD",
      locale: ["en-PN"],
    },
    {
      code: "USD",
      locale: ["en-PR", "es-PR"],
    },
    {
      code: "ILS",
      locale: ["ar-PS"],
    },
    {
      code: "EUR",
      locale: ["pt-PT", "mwl"],
    },
    {
      code: "USD",
      locale: ["pau", "sov", "en-PW", "tox", "ja", "fil", "zh"],
    },
    {
      code: "PYG",
      locale: ["es-PY", "gn"],
    },
    {
      code: "QAR",
      locale: ["ar-QA", "es"],
    },
    {
      code: "EUR",
      locale: ["fr-RE"],
    },
    {
      code: "RON",
      locale: ["ro", "hu", "rom"],
    },
    {
      code: "RSD",
      locale: ["sr", "hu", "bs", "rom"],
    },
    {
      code: "RUB",
      locale: [
        "ru",
        "tt",
        "xal",
        "cau",
        "ady",
        "kv",
        "ce",
        "tyv",
        "cv",
        "udm",
        "tut",
        "mns",
        "bua",
        "myv",
        "mdf",
        "chm",
        "ba",
        "inh",
        "tut",
        "kbd",
        "krc",
        "av",
        "sah",
        "nog",
      ],
    },
    {
      code: "RWF",
      locale: ["rw", "en-RW", "fr-RW", "sw"],
    },
    {
      code: "SAR",
      locale: ["ar-SA"],
    },
    {
      code: "SBD",
      locale: ["en-SB", "tpi"],
    },
    {
      code: "SCR",
      locale: ["en-SC", "fr-SC"],
    },
    {
      code: "SDG",
      locale: ["ar-SD", "en", "fia"],
    },
    {
      code: "SEK",
      locale: ["sv-SE", "se", "sma", "fi-SE"],
    },
    {
      code: "SGD",
      locale: ["cmn", "en-SG", "ms-SG", "ta-SG", "zh-SG"],
    },
    {
      code: "SHP",
      locale: ["en-SH"],
    },
    {
      code: "EUR",
      locale: ["sl", "sh"],
    },
    {
      code: "NOK",
      locale: ["no", "ru"],
    },
    {
      code: "EUR",
      locale: ["sk", "hu"],
    },
    {
      code: "SLL",
      locale: ["en-SL", "men", "tem"],
    },
    {
      code: "EUR",
      locale: ["it-SM"],
    },
    {
      code: "XOF",
      locale: ["fr-SN", "wo", "fuc", "mnk"],
    },
    {
      code: "SOS",
      locale: ["so-SO", "ar-SO", "it", "en-SO"],
    },
    {
      code: "SRD",
      locale: ["nl-SR", "en", "srn", "hns", "jv"],
    },
    {
      code: "SSP",
      locale: ["en"],
    },
    {
      code: "STD",
      locale: ["pt-ST"],
    },
    {
      code: "USD",
      locale: ["es-SV"],
    },
    {
      code: "ANG",
      locale: ["nl", "en"],
    },
    {
      code: "SYP",
      locale: ["ar-SY", "ku", "hy", "arc", "fr", "en"],
    },
    {
      code: "SZL",
      locale: ["en-SZ", "ss-SZ"],
    },
    {
      code: "USD",
      locale: ["en-TC"],
    },
    {
      code: "XAF",
      locale: ["fr-TD", "ar-TD", "sre"],
    },
    {
      code: "EUR",
      locale: ["fr"],
    },
    {
      code: "XOF",
      locale: ["fr-TG", "ee", "hna", "kbp", "dag", "ha"],
    },
    {
      code: "THB",
      locale: ["th", "en"],
    },
    {
      code: "TJS",
      locale: ["tg", "ru"],
    },
    {
      code: "NZD",
      locale: ["tkl", "en-TK"],
    },
    {
      code: "USD",
      locale: ["tet", "pt-TL", "id", "en"],
    },
    {
      code: "TMT",
      locale: ["tk", "ru", "uz"],
    },
    {
      code: "TND",
      locale: ["ar-TN", "fr"],
    },
    {
      code: "TOP",
      locale: ["to", "en-TO"],
    },
    {
      code: "TRY",
      locale: ["tr-TR", "ku", "diq", "az", "av"],
    },
    {
      code: "TTD",
      locale: ["en-TT", "hns", "fr", "es", "zh"],
    },
    {
      code: "AUD",
      locale: ["tvl", "en", "sm", "gil"],
    },
    {
      code: "TWD",
      locale: ["zh-TW", "zh", "nan", "hak"],
    },
    {
      code: "TZS",
      locale: ["sw-TZ", "en", "ar"],
    },
    {
      code: "UAH",
      locale: ["uk", "ru-UA", "rom", "pl", "hu"],
    },
    {
      code: "UGX",
      locale: ["en-UG", "lg", "sw", "ar"],
    },
    {
      code: "USD",
      locale: ["en-UM"],
    },
    {
      code: "USD",
      locale: ["en-US", "es-US", "haw", "fr"],
    },
    {
      code: "UYU",
      locale: ["es-UY"],
    },
    {
      code: "UZS",
      locale: ["uz", "ru", "tg"],
    },
    {
      code: "EUR",
      locale: ["la", "it", "fr"],
    },
    {
      code: "XCD",
      locale: ["en-VC", "fr"],
    },
    {
      code: "VES",
      locale: ["es-VE"],
    },
    {
      code: "USD",
      locale: ["en-VG"],
    },
    {
      code: "USD",
      locale: ["en-VI"],
    },
    {
      code: "VND",
      locale: ["vi", "en", "fr", "zh", "km"],
    },
    {
      code: "VUV",
      locale: ["bi", "en-VU", "fr-VU"],
    },
    {
      code: "XPF",
      locale: ["wls", "fud", "fr-WF"],
    },
    {
      code: "WST",
      locale: ["sm", "en-WS"],
    },
    {
      code: "EUR",
      locale: ["sq", "sr"],
    },
    {
      code: "YER",
      locale: ["ar-YE"],
    },
    {
      code: "EUR",
      locale: ["fr-YT"],
    },
    {
      code: "ZAR",
      locale: [
        "zu",
        "xh",
        "af",
        "nso",
        "en-ZA",
        "tn",
        "st",
        "ts",
        "ss",
        "ve",
        "nr",
      ],
    },
    {
      code: "ZMW",
      locale: ["en-ZM", "bem", "loz", "lun", "lue", "ny", "toi"],
    },
    {
      code: "ZWL",
      locale: ["en-ZW", "sn", "nr", "nd"],
    },
  ];

  return countries.find((l) => l.locale.includes(locale));
}

export let localCurrency = (function currencyConvert() {
  let locale = navigator.language;
  //console.log(locale, "is the locale");
  let thisCurrency = getCurrencyDetailsByLocale(locale || "en-GB");
  //console.log(thisCurrency);
  if (thisCurrency == null) thisCurrency = getCurrencyDetailsByLocale("en-GB");
  let format = {
    style: "currency",
    currency: thisCurrency.code,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  };

  const currencyFormat = new Intl.NumberFormat(locale, format);

  return function (val) {
    return currencyFormat.format(val);
  };
})();

export let localCurrencyDetailed = (function currencyConvert() {
  let locale = navigator.language;
  let thisCurrency = getCurrencyDetailsByLocale(locale);
  if (thisCurrency == null) thisCurrency = getCurrencyDetailsByLocale();
  let format = {
    style: "currency",
    currency: thisCurrency.code,
    maximumFractionDigits: 5,
    minimumFractionDigits: 2,
  };
  const currencyFormat = new Intl.NumberFormat(locale, format);

  return function (val) {
    return currencyFormat.format(val);
  };
})();

//console.log(localCurrency(123));
//console.log(localCurrencyDetailed(1 / 3));

//Credit to sarahC on Reddit https://www.reddit.com/r/javascript/comments/7007r4/ive_created_a_nice_locale_to_currency_converter/
export default { localCurrency, localCurrencyDetailed };
