export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrls: string[];
  category: string;
  sizes: string[];
  details: string;
  deliveryInfo: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'MULTIP work jacket',
    price: '22500 руб.',
    category: 'Top',
    imageUrls: [
      'https://static.insales-cdn.com/r/KLbbSWzKt2I/rs:fit:1000:0:1/plain/images/products/1/2913/2200226657/S_SITE-Recovered.psd_0017s_0000_work_j_site_1.png@webp',
      'https://static.insales-cdn.com/r/vj5bExX6hBU/rs:fit:1000:0:1/plain/images/products/1/2921/2200226665/S_SITE-Recovered.psd_0017s_0001_work_j_site_2.png@webp',
      'https://static.insales-cdn.com/r/VmqI8nJb9Ws/rs:fit:1000:0:1/plain/images/products/1/8042/939417450/%D0%A1%D0%B0%D0%B9%D0%B7_%D1%87%D0%B0%D1%80%D1%82%D1%8B_MULTIP_4_5.jpg@webp'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: 'Рабочая куртка с множеством карманов из прочной ткани. Идеально подходит для любого сезона.',
    deliveryInfo: 'Стандартная доставка: 3-5 рабочих дней. Экспресс-доставка: 1-2 рабочих дня. Бесплатный возврат в течение 30 дней.'
  },
  {
    id: 2,
    name: 'S-66 utility cargo pants',
    price: '13500 руб.',
    category: 'Bottom',
    imageUrls: [
      'https://static.insales-cdn.com/r/zS0ZlwfiKKQ/rs:fit:1000:0:1/plain/images/products/1/5889/2200286977/S_SITE-Recovered.psd_0019s_0002_ss-66_site_3.png@webp',
      'https://static.insales-cdn.com/r/4ekU6lDTbtg/rs:fit:1000:0:1/plain/images/products/1/5825/2200286913/S_SITE-Recovered.psd_0019s_0000_s-66_site.png@webp',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    details: 'Удобные и функциональные брюки-карго с усиленными швами.',
    deliveryInfo: 'Стандартная доставка: 3-5 рабочих дней. Экспресс-доставка: 1-2 рабочих дня. Бесплатный возврат в течение 30 дней.'
  },
  {
    id: 3,
    name: 'LEFTRIGHT ring',
    price: '7000 руб.',
    category: 'Jewelry',
    imageUrls: [
      'https://static.insales-cdn.com/r/WAupqXfzvXU/rs:fit:1000:0:1/plain/images/products/1/5513/2201671049/S_SITE_0033s_0002_L-R2.png@webp',
    ],
    sizes: ['17', '18', '19', '20'],
    details: 'Кольцо из серебра 925 пробы с гравировкой.',
    deliveryInfo: 'Доставка ювелирных изделий осуществляется специальной курьерской службой. Срок: 2-4 дня.'
  },
  {
    id: 4,
    name: 'TOGO bag small grey',
    price: '12000 руб.',
    category: 'Accessories',
    imageUrls: [
      'https://static.insales-cdn.com/r/etZnwac4z7s/rs:fit:1000:0:1/plain/images/products/1/6705/2200214065/S_SITE-Recovered.psd_0011s_0001_4_0011_Layer-4.png@webp',
    ],
    sizes: ['One Size'],
    details: 'Маленькая серая сумка через плечо из водоотталкивающего материала.',
    deliveryInfo: 'Стандартная доставка: 3-5 рабочих дней. Экспресс-доставка: 1-2 рабочих дня. Бесплатный возврат в течение 30 дней.'
  },
  {
    id: 5,
    name: 'BEGA termo mask',
    price: '6200 руб.',
    category: 'Headwear',
    imageUrls: [
      'https://static.insales-cdn.com/r/nIm8-OAHmgs/rs:fit:1000:0:1/plain/images/products/1/4681/2199540297/S_SITE-Recovered.psd_0006s_0000_1-_4_-2.png@webp',
    ],
    sizes: ['One Size'],
    details: 'Термо-маска для защиты лица в холодную погоду.',
    deliveryInfo: 'Стандартная доставка: 3-5 рабочих дней. Экспресс-доставка: 1-2 рабочих дня. Бесплатный возврат в течение 30 дней.'
  },
  {
    id: 6,
    name: 'TODAYIS t-shirt',
    price: '1800 руб.',
    category: 'Top',
    imageUrls: [
      'https://static.insales-cdn.com/r/4OOnRFhEGhs/rs:fit:1000:0:1/plain/images/products/1/2529/2200259041/S_SITE-Recovered.psd_0024s_0000_Don_t-care-t-shirt.png@webp',
    ],
    sizes: ['S', 'M', 'L'],
    details: 'Базовая футболка из хлопка с принтом.',
    deliveryInfo: 'Стандартная доставка: 3-5 рабочих дней. Экспресс-доставка: 1-2 рабочих дня. Бесплатный возврат в течение 30 дней.'
  },
  {
    id: 7,
    name: 'MAONE cargo shorts green',
    price: '6200 руб.',
    category: 'Bottom',
    imageUrls: [
      'https://static.insales-cdn.com/r/SN69MoPaBSc/rs:fit:1000:0:1/plain/images/products/1/2169/2200324217/S_SITE-Recovered.psd_0018s_0000_solutions_17.png@webp',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: 'Зеленые шорты-карго из легкой ткани.',
    deliveryInfo: 'Стандартная доставка: 3-5 рабочих дней. Экспресс-доставка: 1-2 рабочих дня. Бесплатный возврат в течение 30 дней.'
  },
  {
    id: 8,
    name: 'DOT metal ashtray',
    price: '2500 руб.',
    category: 'Accessories',
    imageUrls: [
      'https://static.insales-cdn.com/r/nkNR2yY04_c/rs:fit:1000:0:1/plain/images/products/1/6737/2204318289/dot_1-07.png@webp',
    ],
    sizes: ['One Size'],
    details: 'Металлическая пепельница с логотипом.',
    deliveryInfo: 'Стандартная доставка: 3-5 рабочих дней. Экспресс-доставка: 1-2 рабочих дня. Бесплатный возврат в течение 30 дней.'
  },
];

export const categories = ['All', 'Top', 'Bottom', 'Jewelry', 'Accessories', 'Headwear'];

