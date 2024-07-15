import type { Category } from './Types';

export interface ProductInterface{
    id: number,
    title: string;
    image: string;
    price: number;
    description: string;
    category : Category
}