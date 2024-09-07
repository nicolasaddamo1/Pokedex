"use client"
import { fetchPokemon } from "@/app/actions/getPokemon"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { ClipLoader } from "react-spinners"
import PokemonCard, { Pokemon } from "./PokemonCard"
const LoadPokemon = ({search, initialPokemon}: {search: string | undefined, initialPokemon: Pokemon[]|undefined})  => {
    const [pokemon, setPokemon] = useState(initialPokemon)
    const [page, setPage] = useState(1)
    const [loading, setLoading]= useState(false)

    const {inView, ref} = useInView()

    const delay = (ms:number)=> new Promise((resolve)=>setTimeout(resolve,ms))
    const loadMorePokemon = async () => {
        setLoading(true)
        await delay(1000)
        const nextPage = page + 1
        const newPokemon = await fetchPokemon({page: nextPage, search});
        setPage(nextPage)
        setPokemon((prev)=>{
            if(!prev) return newPokemon
            const uniquePokemon = newPokemon.filter((poke: Pokemon)=>!prev.some((p)=>p.name === poke.name))
        return [...prev, ...uniquePokemon]
        });
        setLoading(false)
    }

    useEffect(()=>{
        if (inView) loadMorePokemon()
    }, [inView])
    return (
        <>
        <div className="grid sm:grid-cols2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {pokemon?.map((poke: Pokemon)=>(
                <PokemonCard/>
            ))}
        </div>
            {
                pokemon && pokemon.length >= 24 && (
                    <div className="flex justify-center items-center p-4" ref={ref}>
                        <ClipLoader color = "#fff" />
                    </div>
                ) 
            } 
        </>
    )
}
export default LoadPokemon