/**
 * En este modulo se deben crear las funciones que hagan fetch a la api Deben ser funciones Tipadas 
 * y deben devolverse usando el DP CLosure
 */
import { FetchError } from "../errors/FetchError"

export function FetchData (url:string){
    const Ability=async (offset:number)=>{
        console.log("ability")
        const response=(await fetch(url+"?limit=20&offser="+offset.toString())) 
        if (response.ok) return (await (await response.json() as Promise<PokemonResponse> )).results 
        else throw new FetchError("No se pudo realizar el fetch de la habilidad","F001","Fetch de Habilidad Fallido")
    }
    return {Ability}

}
export const Ability=async (offset?:number)=>{
    const url = process.env.NEXT_PUBLIC_BACKENDURL
    console.log("ability",url)
    const response=(await fetch(url+"?limit=20&offset=")) 
    if (response.ok) 
        { const cosilla =(await (await response.json() as Promise<PokemonResponse> )).results
 console.log(cosilla)
            return cosilla 
        }
            else throw new FetchError("No se pudo realizar el fetch de la habilidad","F001","Fetch de Habilidad Fallido")
}

