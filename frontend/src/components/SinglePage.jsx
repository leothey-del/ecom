// SinglePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductImages from './ProductImages';
import CustomizeProducts from './CustomizeProducts';
import Add from './Add'
const SinglePage = () => {
  
  return (
    
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">    
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
      <ProductImages/>
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">product name</h1>
        <p className="text-gray-500">
        Lore klkj lkkjkl lkjlk  lkjl l ldkjfd  jfldkj dl flkdj f dlkjff
        ldkfj ljklkj  
        klj lkj lkjf  kjf  lkj lkj lkjl lk lk lj l
    
        </p>
        <div className="h-[2px] bg-gray-100" />
            
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
             
            </h3>
            <h2 className="font-medium text-2xl">
             
             $45
            </h2>
          </div>
          <div className='h-[2px] bg-gray-100'></div>
        <CustomizeProducts/>
        <Add/>
        <div className='h-[2px] bg-gray-100'></div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
         <p>
         
          jhfkdjhfkdhk kjhf kjh fkh dfh fkhd fkdh
         </p>
          </div>

          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
         <p>
         
          jhfkdjhfkdhk kjhf kjh fkh dfh fkhd fkdh
         </p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
         <p>
         
          jhfkdjhfkdhk kjhf kjh fkh dfh fkhd fkdh
         </p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
         <p>
         
          jhfkdjhfkdhk kjhf kjh fkh dfh fkhd fkdh
         </p>
          </div>
          
          </div>
    </div>
    
  );
};

export default SinglePage;





 

  