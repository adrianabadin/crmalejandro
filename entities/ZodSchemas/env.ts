import  {z } from "zod"
export const envSchema =z.object({
    NEXT_PUBLIC_BACKENDURL:z.string({message:"Debes proveer una Cadena de texto"}).url({message:"La cadena debe ser una URL"})
})
export type envType =z.infer<typeof envSchema>