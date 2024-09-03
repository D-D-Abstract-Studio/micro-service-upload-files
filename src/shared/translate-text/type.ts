export type RequestData = {
  text: string
  from: string
  to: string
}

export type Translate = {
  text: string
  raw: string
  from: {
    language: {
      didYouMean: boolean
      iso: string
    }
    text: {
      autoCorrected: string
      value: string
      didYouMean: boolean
    }
  }
  proxy: string
  agent: string
  service: {
    google_free: boolean
  }
}
