export interface Products {
  id: number;
  name: string;
  size: Array<"48" | "50" | "52">;
  price: number;
  count: number;
  image: string;
  description: string[];
  equipment: string[];
}
