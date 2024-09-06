"use client"
import { loadBindings } from "next/dist/build/swc"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { ClipLoader } from "react-spinners"
const LoadPokemon = ({search, initialPokemon}: {search: string | undefined, initialPokemon: Pokemon[]|undefined})  => {
    const [pokemon, setPokemon] = useState(initialPokemon)
    const [page, setPage] = useState(1)
    const [loading, setLoading]= useState(false)

    const {inView, ref} = useInView()
    return <div>LoadPokemon</div>
}
export default LoadPokemon