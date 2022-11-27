let pizzaTomate = 'Masa, Salsa de tomate, Mozzarella, '

const pizzas = [{
    id:0,
    nombre:'Española',
    ingredientes: pizzaTomate +'Chorizillo, Jamón, Pimentón, Tomate.',
    precio:'14.700',
},{
    id:1,
    nombre:'Especial Queso',
    ingredientes: pizzaTomate +'Parmesano, Azul.',
    precio:'9.000',

},{
    id:2,
    nombre:'Peperoni',
    ingredientes: pizzaTomate +'Peperoni.',
    precio:'12.000',

},{
    id: 3 ,
    nombre: 'Napolitana',
    ingredientes: pizzaTomate + 'Tomate.',
    precio:'12.000',
},{
    id:4,
    nombre:'Pollo BBQ',
    ingredientes: 'Masa, Salsa BBQ, Mozzarella , Pollo, Cebolla.',
    precio:'13.000',
},{
    id:5,
    nombre:'Tropical',
    ingredientes: pizzaTomate +'Peperoni, Piña.',
    precio:'15.000',

},{
    id:6,
    nombre:'Tocino BBQ',
    ingredientes: 'Masa, Salsa BBQ, Mozzarella , Pollo, Tocino, Cebolla.',
    precio:'16.500',

},{
    
    id: 7 ,
    nombre: 'Pizza Hawaiaa',
    ingredientes: pizzaTomate + 'Piña.',
    precio:'10.000',

}
]

const pastas = [{
    id:0,
    nombre:'Boloñeza',
    ingredientes:'Spaghetti, Salsa Boloñeza.',
    precio:'7.800',
},{
    id:1,
    nombre:'Al pesto',
    ingredientes:'Spaghetti, Salsa Pesto.',
    precio:'5.000'
},{
    id:2,
    nombre:'Boloñeza',
    ingredientes:'Spaghetti, Salsa Alfredo.',
    precio:'6.500'
}
]

export {pizzas, pastas}