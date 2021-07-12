import React from 'react';
const cat = ['самое быстрое', 'самое доступное', 'высший рейтинг'];
const cat_food = [
  'Суши',
  'роллы и поке	Бургеры',
  'картошка',
  'фастфуд',
  'Пицца	Паста и удон',
  'Супы',
  'Салаты',
  'десерты',
  'напитки',
];
function Menu() {
  return (
    <div className='p-4 flex flex-col justify-around h-screen'>
      <div className=' flex flex-row whitespace-nowrap overflow-x-auto'>
        {cat.map((value, index) => (
          <div className='bg-gray-100 text-black rounded-3xl py-2 px-4 mx-1 hover:bg-orange hover:text-white'>
            {value}
          </div>
        ))}
      </div>
      <div className=''>
        {cat_food.map((value, index) => (
          <h1>{value}</h1>
        ))}
      </div>
    </div>
  );
}

export default Menu;
