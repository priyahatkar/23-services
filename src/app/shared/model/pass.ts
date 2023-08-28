import { ProductStatus } from "../const/product.Enum";



export interface Ipassenger{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number | null;
    children: null | Array<IpassChlid>;
}

export interface IpassChlid{name : string, age : number}

export interface Iproduct{
    [x: string]: any;
    pname: string;
    pdetails: string;
    pStatus: ProductStatus;
    id: string;
}