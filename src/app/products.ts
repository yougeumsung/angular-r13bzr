export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Test1'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 720,
    description: 'Test2'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Test2'
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
