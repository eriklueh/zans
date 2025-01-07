import 'server-only'

const dictionaries = {
  en: () => import('../app/dictionaries/en.json').then((module) => module.default),
  es: () => import('../app/dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]()
}

