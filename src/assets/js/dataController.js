const DATA = [
  {
    "id": 0,
    "name": "Rustic Plastic Mouse",
    "img": "./imgs/prds/aceite.jfif",
    "price": 50,
    "category": "promo",
    "selected": false,
    "amount": 1
  },
  {
    "id": 1,
    "name": "Ergonomic Granite Chair",
    "img": "./imgs/prds/aceituna.jfif",
    "price": 23,
    "category": "almacen",
    "selected": false,
    "amount": 1
  },
  {
    "id": 2,
    "name": "Licensed Concrete Gloves",
    "img": "http://example.com/3.jpg",
    "price": 81,
    "category": "limpieza",
    "selected": false,
    "amount": 1
  },
  {
    "id": 3,
    "name": "Awesome Fresh Tuna",
    "img": "http://example.com/4.jpg",
    "price": 12,
    "category": "promo",
    "selected": false,
    "amount": 1
  },
  {
    "id": 4,
    "name": "Rustic Rubber Hat",
    "img": "http://example.com/5.jpg",
    "price": 45,
    "category": "promo",
    "selected": false,
    "amount": 1
  },
  {
    "id": 5,
    "name": "Small Metal Computer",
    "img": "http://example.com/6.jpg",
    "price": 56,
    "category": "limpieza",
    "selected": false,
    "amount": 1
  },
  {
    "id": 6,
    "name": "Generic Fresh Shirt",
    "img": "http://example.com/7.jpg",
    "price": 34,
    "category": "promo",
    "selected": false,
    "amount": 1
  },
  {
    "id": 7,
    "name": "Intelligent Rubber Table",
    "img": "http://example.com/8.jpg",
    "price": 89,
    "category": "almacen",
    "selected": false,
    "amount": 1
  },
  {
    "id": 8,
    "name": "Fantastic Cotton Bacon",
    "img": "http://example.com/9.jpg",
    "price": 78,
    "category": "limpieza",
    "selected": false,
    "amount": 1
  },
  {
    "id": 9,
    "name": "Handmade Concrete Shoes",
    "img": "http://example.com/10.jpg",
    "price": 56,
    "category": "almacen",
    "selected": false,
    "amount": 1
  },
  {
    "id": 10,
    "name": "Banana",
    "img": "http://example.com/10.jpg",
    "price": 750,
    "category": "verduleria",
    "selected": false,
    "amount": 1
  },
  {
    "id": 11,
    "name": "Manzana",
    "img": "http://example.com/11.jpg",
    "price": 600,
    "category": "verduleria",
    "selected": false,
    "amount": 1
  },
  {
    "id": 12,
    "name": "Pera",
    "img": "http://example.com/12.jpg",
    "price": 500,
    "category": "verduleria",
    "selected": false,
    "amount": 1
  },
  {
    "id": 13,
    "name": "Sandía",
    "img": "http://example.com/13.jpg",
    "price": 1200,
    "category": "verduleria",
    "selected": false,
    "amount": 1
  },
  {
    "id": 11,
    "name": "Manzana",
    "img": "http://example.com/11.jpg",
    "price": 600,
    "category": "verduleria",
    "selected": false,
    "amount": 1
  },
  {
    "id": 12,
    "name": "Pera",
    "img": "http://example.com/12.jpg",
    "price": 500,
    "category": "almacen",
    "selected": false,
    "amount": 1
  },
  {
    "id": 13,
    "name": "Sandía",
    "img": "http://example.com/13.jpg",
    "price": 1200,
    "category": "promo",
    "selected": false,
    "amount": 1
  },
  {
    "id": 14,
    "name": "Plátano",
    "img": "http://example.com/14.jpg",
    "price": 800,
    "category": "almacen",
    "selected": false,
    "amount": 1
  },
  {
    "id": 15,
    "name": "Naranja",
    "img": "http://example.com/15.jpg",
    "price": 700,
    "category": "verduleria",
    "selected": false,
    "amount": 1
  },
  {
    "id": 16,
    "name": "Cereal",
    "img": "http://example.com/16.jpg",
    "price": 350,
    "category": "promo",
    "selected": false,
    "amount": 1
  },
  {
    "id": 17,
    "name": "Leche",
    "img": "http://example.com/17.jpg",
    "price": 250,
    "category": "almacen",
    "selected": false,
    "amount": 1
  },
  {
    "id": 18,
    "name": "Uvas",
    "img": "http://example.com/18.jpg",
    "price": 1000,
    "category": "verduleria",
    "selected": false,
    "amount": 1
  },
  {
    "id": 19,
    "name": "Galletas",
    "img": "http://example.com/19.jpg",
    "price": 450,
    "category": "promo",
    "selected": false,
    "amount": 1
  },
  {
    "id": 20,
    "name": "Papas",
    "img": "http://example.com/20.jpg",
    "price": 300,
    "category": "almacen",
    "selected": false,
    "amount": 1
  },
  {
    "id": 21,
    "name": "Tomate",
    "img": "http://example.com/21.jpg",
    "price": 500,
    "category": "verduleria",
    "selected": false,
    "amount": 1
  },
  {
    "id": 22,
    "name": "Cepillo de dientes",
    "img": "http://example.com/22.jpg",
    "price": 200,
    "category": "almacen",
    "selected": false,
    "amount": 1
  },
  {
    "id": 23,
    "name": "Oferta especial",
    "img": "http://example.com/23.jpg",
    "price": 900,
    "category": "promo",
    "selected": false,
    "amount": 1
  },
  {
    "id": 24,
    "name": "Jabón",
    "img": "http://example.com/24.jpg",
    "price": 150,
    "category": "almacen",
    "selected": false,
    "amount": 1
  },
  {
    "id": 25,
    "name": "Zanahorias",
    "img": "http://example.com/25.jpg",
    "price": 550,
    "category": "verduleria",
    "selected": false,
    "amount": 1
  }
]

function compareByPrice(a, b) {
  return a.price - b.price;
}

/* valores del campo category para utilizar*/
const CATEGORIAS = [...new Set(DATA.map(objeto => objeto.category))].sort();
console.log(CATEGORIAS)

/* Ordena por categorias todo el array de objs */
export function sortCategories() {
  const sortCateg = CATEGORIAS.flatMap(c => {
    const sortCat = DATA.filter(cat => cat.category === c);
    sortCat.sort((a, b) => a.name.localeCompare(b.name));
    return sortCat
  })
  return sortCateg
}

/* Ordena por precio */
export function sortPrice(){
  console.log('Objetos ordenados por precio')
  const sortPr = DATA.sort(compareByPrice)
  console.log(sortPr)
}

/* Hace reload de monto y lo deselecciona de la lista de pedidos */
export function reloadSelected(){
  DATA.map(elem => {
    elem.selected = false
    elem.amount = 1
  })
}


export function getData() {
  return DATA
}