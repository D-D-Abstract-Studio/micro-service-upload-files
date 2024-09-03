import type { Schema } from 'mongoose'

export const setDefaultSettingsSchema = (schema: Schema) => {
  schema.set('toJSON', { virtuals: true })

  schema.set('toObject', { virtuals: true })

  schema.set('versionKey', false)
}
