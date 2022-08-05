import americano from '../assets/coffee/americano.png'
import arabe from '../assets/coffee/arabe.png'
import cafeComLeite from '../assets/coffee/cafe-com-leite.png'
import cafeGelado from '../assets/coffee/cafe-gelado.png'
import capuccino from '../assets/coffee/capuccino.png'
import chocolateQuente from '../assets/coffee/chocolate-quente.png'
import cubano from '../assets/coffee/cubano.png'
import expressoCremoso from '../assets/coffee/expresso-cremoso.png'
import expresso from '../assets/coffee/expresso.png'
import havaiano from '../assets/coffee/havaiano.png'
import irlandes from '../assets/coffee/irlandes.png'
import latte from '../assets/coffee/latte.png'
import macchiato from '../assets/coffee/macchiato.png'
import mochaccino from '../assets/coffee/mochaccino.png'

interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  info: string
  price: number
}

export const coffeeData: Coffee[] = [
  {
    id: 1,
    image: expresso,
    tags: ['tradicional'],
    title: 'Espresso Tradicional',
    info: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    image: americano,
    tags: ['tradicional'],
    title: 'Espresso Americano',
    info: 'Espresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    image: expressoCremoso,
    tags: ['tradicional'],
    title: 'Espresso Cremoso',
    info: 'Café Espresso tradicional, com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    image: cafeGelado,
    tags: ['tradicional', 'gelado'],
    title: 'Espresso Gelado',
    info: 'Bebida preparada com café espresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    image: cafeComLeite,
    tags: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    info: 'Meio a meio de espresso tradicional e leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    image: latte,
    tags: ['tradicional', 'com leite'],
    title: 'Latte',
    info: 'Uma dose de espresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    image: capuccino,
    tags: ['tradicional', 'com leite'],
    title: 'Capuccino',
    info: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    image: macchiato,
    tags: ['tradicional', 'com leite'],
    title: 'Macchiato',
    info: 'Café espresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    image: mochaccino,
    tags: ['tradicional', 'com leite'],
    title: 'Mochaccino',
    info: 'Café espresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    image: chocolateQuente,
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    info: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    image: cubano,
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    info: 'Drink gelado de café espresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    image: havaiano,
    tags: ['especial'],
    title: 'Havaiano',
    info: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    image: arabe,
    tags: ['especial'],
    title: 'Árabe',
    info: 'Bebida preparada com café e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    image: irlandes,
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    info: 'Bebida a base de café, whisky irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
