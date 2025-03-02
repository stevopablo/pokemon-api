export type pokemonData = {
    sprites: {
        front_default:string
    }
    name:String
    id:number
    types:{
        slot:number,
        type:{
            name:String
            url:String
        }
    }[]
}