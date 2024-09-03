import { z } from 'zod'
import { Document } from 'mongoose'

declare global {
  type DocumentSchemaZod<T extends z.ZodType<unknown>> = Partial<Document> & z.infer<T>
}
