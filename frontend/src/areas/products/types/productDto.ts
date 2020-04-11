import { SupplierDto } from '../../suppliers/types/supplierDto';

export interface ProductDto {
    amountFactor: number;
    amountUnit: string;
    id: number;
    name: string;
    number: string;
    purchasingPrice: number;
    sellingPrice: number;
    supplier: SupplierDto;
}
