"Use server"
export async function getPokemon({
    query,
    page=1,
    limit
}: {
    query: string;
    page?: number;
    limit?: number;
}) {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1) * 24}`;
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await response.json();
    return data;
}