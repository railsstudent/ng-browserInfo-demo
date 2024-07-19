export type RawPokemon = { 
  id: number; 
  name: string; 
  sprites: { 
    front_shiny: string 
  } 
}

export type Pokemon = Pick<RawPokemon, 'id' | 'name'> & {
  imageUrl: string
}
