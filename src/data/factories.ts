import { Factory } from '../types';

export const FACTORIES: Factory[] = [
  {
    id: "vaz",
    name: "VAZ",
    name_ru: "ВАЗ",
    description: "Volzhsky Avtomobilny Zavod, the primary producer of passenger cars in the Soviet Union.",
    description_ru: "Волжский автомобильный завод, основной производитель легковых автомобилей в Советском Союзе.",
    city: "Tolyatti",
    city_ru: "Тольятти",
    years: { start: 1966, end: null }
  },
  {
    id: "gaz",
    name: "GAZ",
    name_ru: "ГАЗ",
    description: "Gorkovsky Avtomobilny Zavod, known for executive sedans and light trucks.",
    description_ru: "Горьковский автомобильный завод, известный своими представительскими седанами и легкими грузовиками.",
    city: "Nizhny Novgorod",
    city_ru: "Нижний Новгород",
    years: { start: 1932, end: null }
  },
  {
    id: "azlk",
    name: "AZLK / Moskvich",
    name_ru: "АЗЛК / Москвич",
    description: "Avtomobilny Zavod imeni Leninskogo Komsomola, producer of the Moskvich family.",
    description_ru: "Автомобильный завод имени Ленинского комсомола, производитель семейства «Москвич».",
    city: "Moscow",
    city_ru: "Москва",
    years: { start: 1930, end: 2010 }
  },
  {
    id: "zaz",
    name: "ZAZ",
    name_ru: "ЗАЗ",
    description: "Zaporizkyi Avtomobilnyi Zavod, specialized in microcars and people's transport.",
    description_ru: "Запорожский автомобилестроительный завод, специализирующийся на микролитражках и народном транспорте.",
    city: "Zaporizhzhia",
    city_ru: "Запорожье",
    years: { start: 1923, end: null }
  },
  {
    id: "uaz",
    name: "UAZ",
    name_ru: "УАЗ",
    description: "Ulyanovsky Avtomobilny Zavod, famous for rugged off-roaders.",
    description_ru: "Ульяновский автомобильный завод, знаменитый своими выносливыми внедорожниками.",
    city: "Ulyanovsk",
    city_ru: "Ульяновск",
    years: { start: 1941, end: null }
  },
  {
    id: "zil",
    name: "ZIL / ZIS",
    name_ru: "ЗИЛ / ЗИС",
    description: "Zavod imeni Likhachyova, producer of limousines for the Soviet elite.",
    description_ru: "Завод имени Лихачёва, производитель лимузинов для советской элиты.",
    city: "Moscow",
    city_ru: "Москва",
    years: { start: 1916, end: 2013 }
  },
  {
    id: "izh",
    name: "IZH",
    name_ru: "ИЖ",
    description: "Izhevsk Mechanical Plant, producer of unique liftbacks and utility vans.",
    description_ru: "Ижевский механический завод, производитель уникальных лифтбеков и грузопассажирских фургонов.",
    city: "Izhevsk",
    city_ru: "Ижевск",
    years: { start: 1965, end: null }
  }
];
