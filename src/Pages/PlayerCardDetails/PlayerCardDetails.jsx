import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlayerCardDetails = () => {
    
  const { id } = useParams()
 
  const [plant,setPlant] = useState({})
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
      .then(res => res.json())
      .then(data =>
         setPlant(data?.plants)
   
        
        )
  })
  const {name,price,category,image,description} = plant;
 
  
 


    return (
        <div>
            <div className="max-w-4xl mx-auto my-10 p-5">
            {/* Main Dynamic Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden md:flex">
                
                {/* Left side: Dynamic Image */}
                <div className="md:w-1/2 relative">
                    <img 
                        src={image} 
                        alt={name} 
                        className="h-full w-full object-cover min-h-[300px]"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                            {category} {/* Dynamic Category */}
                        </span>
                    </div>
                </div>

                {/* Right side: Dynamic Content */}
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                        {name} {/* Dynamic Name */}
                    </h1>
                    
                    <div className="flex items-center mb-6">
                        <span className="text-3xl font-bold text-green-600">৳{price}</span> {/* Dynamic Price */}
                        <span className="ml-2 text-sm text-gray-400 font-medium italic">Available in stock</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        {description} {/* Dynamic Description */}
                    </p>

                    <div className="flex flex-col gap-3">
                        <button className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition duration-300 shadow-lg">
                            Add to Cart
                        </button>
                        
                    
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PlayerCardDetails;