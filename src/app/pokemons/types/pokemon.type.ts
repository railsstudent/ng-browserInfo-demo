export type RawPokemon = { 
  id: number; 
  name: string; 
  weight: number;
  height: number;
  sprites: { 
    front_shiny: string 
  } 
}

export type Pokemon = Pick<RawPokemon, 'id' | 'name' | 'weight' | 'height'> & {
  imageUrl: string
}
