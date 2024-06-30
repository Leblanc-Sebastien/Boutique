export type Category = 'all' | 'gamer' | 'streaming' | 'desktop'

export interface FiltersInterface {
    search : string,
    priceRange : [number, number]
    category : Category
}

export interface FilterUpdate{
    search? : string,
    priceRange? : [number, number]
    category? : Category
}