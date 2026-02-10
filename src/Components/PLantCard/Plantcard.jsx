import React from 'react';
import { Link } from 'react-router';

const Plantcard = ({plant}) => {
   
    const {name,price,category,image,description,id
} = plant
    return (
        <div>
           <div class="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 mb-5">
  <div class="relative h-64 overflow-hidden">
    <img className='w-[400px]' 
      src={image} 
      alt="Bougainvillea" 
      class="w-full h-full object-cover"
    />
    <span class="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
   {category}
    </span>
  </div>

  <div class="p-5">
    <div class="flex justify-between items-center mb-2">
      <h2 class="text-2xl font-bold text-gray-800 tracking-tight">{name}</h2>
     
    </div>
    
    <p class="text-gray-600 text-sm leading-relaxed mb-4">
{description}
    </p>

    <div class="flex items-center justify-between mt-6">
      <span class="text-3xl font-extrabold text-green-700">৳{price}</span>
      <Link to={`/plant/${id}`}  class="bg-gray-900 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-200">
        Add to Cart
      </Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Plantcard;