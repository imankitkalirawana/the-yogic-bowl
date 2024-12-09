interface Base {
  _id: string;
  addedBy: string;
  modifiedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends Base {
  email: string;
  phone: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
}

export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  image?: string;
  tags?: string[];
}

export interface Subcategory {
  subheading: string;
  items: MenuItem[];
}

export interface Heading {
  heading: string;
  subcategories: Subcategory[];
}
