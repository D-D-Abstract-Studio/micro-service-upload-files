export type Auth = {
  token: string
  refreshToken: string
  user: {
    id: string
    name: string
    email: string
    codStatus: boolean
    isAdmin: boolean
    dateCreated: string
    dateUpdated: string
  }
}
