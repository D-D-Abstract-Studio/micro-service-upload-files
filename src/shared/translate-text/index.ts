import translatte from 'translatte'

import type { Translate } from './type'

export const translateText = async (message: string) => {
  try {
    const text = await translatte<Translate>(message, {
      to: 'pt',
      from: 'en'
    }).then(data => data.text)

    return text
  } catch (error) {
    return message
  }
}
