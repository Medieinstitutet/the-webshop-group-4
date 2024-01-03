import { Size } from "./Size";

export class Product {
  constructor(
    public productId: string,
    public productName: string,
    public productDescription: string,
    public category: string,
    public price: number,
    public quantity: number,
    public sizes: Size[],
    public imageUrl: string) {}
};