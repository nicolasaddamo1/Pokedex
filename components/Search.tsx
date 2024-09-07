"use client"
import { useRouter } from "next/navigation"
import { useDebounce } from "use-debounce"
import { useState, useRef, useEffect } from "react"
interface SearchProps {
    search?: string;
  }
const Search: React.FC<SearchProps> = ({search}: {search?: string}) => {
    const router = useRouter()
    const initialRender = useRef(true)
    const [text, setText] = useState(search)
    const [query] = useDebounce(text, 750)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }
        if (!query) {
            router.push("/")
        }else{
            router.push(`?search=${query}`)
        }
    },[query])
    return (
    <div className="flex justify-center w-full m-8"> 
        <input type="text" value={text} placeholder="  Search Pokemon..." className="block w-4/5 rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-yellow-500 sm:text-sm sm:leading-6 mb-5" onChange={(e) => setText(e.target.value)}/>
    </div>
    )
}

export default Search