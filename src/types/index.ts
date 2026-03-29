export interface ProductSpecifications {
  "Product Name"?: string;
  "Frame Style"?: string;
  "Frame Material"?: string;
  "Out to Out Width In open Position"?: string;
  "Seat Width"?: string;
  "Total Width in Closing Position"?: string;
  "Rear Wheel Size"?: string;
  "Front Wheel Size"?: string;
  "Seat to Floor Height In"?: string;
  "Seat Depth"?: string;
  "Back height"?: string;
  "Total Height"?: string;
  "Max user Weight Capacity"?: string;
  "Net Weight"?: string;
  "Upholstery"?: string;
  "Armrest"?: string;
  "Footrest"?: string;
  "Wheel Quality"?: string;
  "Rear Wheel Lock"?: string;
  "Hand Brakes"?: string;
  "Dropback Handle"?: string;
  "Wheel Type"?: string;
  [key: string]: string | undefined;
}

export interface Product {
  Brand: string;
  "Product Name": string;
  "Price (INR)": string;
  Category: string;
  "Sub Category"?: string;
  Description: string;
  URL: string;
  Images: string[];
  Specifications: ProductSpecifications;
}
