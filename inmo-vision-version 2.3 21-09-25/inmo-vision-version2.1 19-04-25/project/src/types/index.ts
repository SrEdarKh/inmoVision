export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: 'house' | 'apartment' | 'office' | 'land';
  listingType: 'sale' | 'rent';
  address: string;
  city: string;
  state: string;
  zipCode: string;
  mainImage: string;
  images: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
}

export interface PropertyFilter {
  propertyType?: string;
  listingType?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  minBathrooms?: number;
  minArea?: number;
  city?: string;
}