const typeColors = {
    fire: "bg-red-500",
    grass: "bg-green-500",
    water: "bg-blue-500",
    bug: "bg-lime-500",
    normal: "bg-gray-500",
    poison: "bg-purple-500",
    electric: "bg-yellow-500",
    ground: "bg-brown-500",
    fairy: "bg-pink-500",
    fighting: "bg-red-500",
    psychic: "bg-amber-500",
    rock: "bg-gray-500",
    ghost: "bg-purple-500",
    ice: "bg-blue-500",
    dragon: "bg-indigo-500",
    flying: "bg-yellow-500",
    steel: "bg-gray-500",
    dark: "bg-gray-500"

}
interface TypeProps {
    typeName: keyof typeof typeColors
}
const Type: React.FC<TypeProps> = ({typeName}) => {
    const bgColor = typeColors[typeName] || "bg-gray-500"
    return (<div className={`inline-block px-3 text-white rounded-md ${bgColor}`}>{typeName}</div>)
}

export default Type