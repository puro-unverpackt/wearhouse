import { ProductCreateDto } from './productCreateDto';

export interface ProductEditDto extends ProductCreateDto {
    id: number;
}
