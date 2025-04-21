export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
  placeholder:string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  address: string;
}

export interface Invoice {
  id: string;
  date: string;
  customerInfo: CustomerInfo;
  items: InvoiceItem[];
  taxRate: number;
}