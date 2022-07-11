import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'vahid',
      email: 'admin@fitlinez.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Azar',
      email: 'azar@fitlinez.com',
      password: bcrypt.hashSync('123486'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Watch 7',
      slug: 'watch-7',
      category: 'accessories',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Apple',
      rating: 2.5,
      numReviews: 10,
      description: 'Apple watch 7 nike',
    },
    {
      //_id: '2',
      name: 'Watch 7 Nike',
      slug: 'watch-7-nike',
      category: 'accessories',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Apple',
      rating: 3.5,
      numReviews: 10,
      description: 'Apple watch 7',
    },
    {
      //_id: '3',
      name: 'Watch 6',
      slug: 'watch-6',
      category: 'accessories',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Apple',
      rating: 5,
      numReviews: 10,
      description: 'Apple watch 6 nike',
    },
    {
      // _id: '4',
      name: 'Watch SE',
      slug: 'watch-se',
      category: 'accessories',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 10,
      description: 'Apple watch SE nike',
    },
  ],
};

export default data;
