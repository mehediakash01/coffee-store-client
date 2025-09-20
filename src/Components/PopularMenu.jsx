import React from 'react';
const popularMenu = [
  {
    "id": 1,
    "name": "Grilled Cheese Sandwich",
    "description": "It is produced by grinding roasted coffee beans, then boiling them.",
    "price": 19.99,
    "oldPrice": 25.99,
    "imageLink": "https://kofi-demo.myshopify.com/cdn/shop/files/cup-20.png?v=1637664578"
  },
  {
    "id": 2,
    "name": "Italian Roasted Coffee",
    "description": "It is produced by grinding roasted coffee beans, then boiling them.",
    "price": 19.99,
    "oldPrice": null,
    "imageLink": "https://kofi-demo.myshopify.com/cdn/shop/files/3_43f90d59-c2f8-4471-a25b-5f055eb3c089.png?v=1637725251"
  },
  {
    "id": 3,
    "name": "Brazilian Roasted Coffee",
    "description": "It is produced by grinding roasted coffee beans, then boiling them.",
    "price": 19.99,
    "oldPrice": null,
    "imageLink": "https://kofi-demo.myshopify.com/cdn/shop/files/4_a409c7a4-bfc7-4cc6-b828-8aec4f7fee9c.png?v=1637725268"
  },
  {
    "id": 4,
    "name": "Mexican Cold Coffee",
    "description": "It is produced by grinding roasted coffee beans, then boiling them.",
    "price": 19.99,
    "oldPrice": null,
    "imageLink": "https://kofi-demo.myshopify.com/cdn/shop/files/5_2d14f3d3-06a2-4f45-b2f3-980c40604ec5.png?v=1637725284"
  },
  {
    "id": 5,
    "name": "Mericano Cold Coffee",
    "description": "It is produced by grinding roasted coffee beans, then boiling them.",
    "price": 19.99,
    "oldPrice": null,
    "imageLink": "https://kofi-demo.myshopify.com/cdn/shop/files/coffee_slide-1-1_b30ea38e-a113-4057-9e8b-5fee51351b69.png?v=1635848529"
  },
  {
    "id": 6,
    "name": "Americano Roasted Coffee",
    "description": "It is produced by grinding roasted coffee beans, then boiling them.",
    "price": 19.99,
    "oldPrice": null,
    "imageLink": "https://kofi-demo.myshopify.com/cdn/shop/files/6.png?v=1637725408"
  }
];


const PopularMenu = () => {
    return (
        <div className='bg-[#FBFBFB] my-12'>
            <h1 className='text-5xl font-bold text-center my-6'>Our Popular Menu</h1>
            <div className='grid grid-cols-2 gap-6 items-center w-11/12 mx-auto'>
                {
                    popularMenu.map(menu=>
                        <div key={menu.id} className='border border-[#F4F4F4] p-2 grid grid-cols-3  items-center'>
                            <img  src={menu.imageLink} alt="" />
                            <div>
                                <h1 className='text-2xl font-bold mb-2 hover:text-[#C7A17A]'>{menu.name}</h1>
                                <p>{menu.description}</p>
                                </div>
                                <p className=' text-2xl text-[#C7A17A]'>${menu.price}</p>

                        </div>
                        
                    )
                }

            </div>
            
        </div>
    );
};

export default PopularMenu;