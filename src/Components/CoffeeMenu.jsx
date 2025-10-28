import React, { useState } from 'react';
import { Coffee, Clock } from 'lucide-react';

// Menu Data - Ready to use as API response
const menuData = [
  {
    "id": 1,
    "name": "Americano Rosted Coffee",
    "description": "It is a long established fact that a reader will be distracted by the readable.",
    "price": 19.99,
    "oldPrice": 26.99,
    "imageLink": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop",
    "category": "Hot Coffee"
  },
  {
    "id": 2,
    "name": "Maxicans Rosted Coffee",
    "description": "It is a long established fact that a reader will be distracted by the readable.",
    "price": 19.99,
    "oldPrice": null,
    "imageLink": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200&h=200&fit=crop",
    "category": "Iced Coffee"
  },
  {
    "id": 3,
    "name": "Unidsedvs Rosted Coffee",
    "description": "It is a long established fact that a reader will be distracted by the readable.",
    "price": 19.99,
    "oldPrice": null,
    "imageLink": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop",
    "category": "Hot Coffee"
  },
  {
    "id": 4,
    "name": "Cappuccino Supreme",
    "description": "Rich espresso with velvety steamed milk and a layer of foam, perfectly balanced.",
    "price": 22.99,
    "oldPrice": 28.99,
    "imageLink": "https://images.unsplash.com/photo-1534778101976-62847782c213?w=200&h=200&fit=crop",
    "category": "Hot Coffee"
  },
  {
    "id": 5,
    "name": "Caramel Macchiato",
    "description": "Espresso marked with vanilla syrup, steamed milk, and caramel drizzle on top.",
    "price": 24.99,
    "oldPrice": 29.99,
    "imageLink": "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=200&h=200&fit=crop",
    "category": "Specialty"
  },
  {
    "id": 6,
    "name": "Iced Mocha Latte",
    "description": "Chilled espresso blended with chocolate, milk, and topped with whipped cream.",
    "price": 21.99,
    "oldPrice": null,
    "imageLink": "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=200&h=200&fit=crop",
    "category": "Iced Coffee"
  },
  {
    "id": 7,
    "name": "Vanilla Bean Frappuccino",
    "description": "Creamy blended beverage with vanilla bean, ice, milk, and whipped topping.",
    "price": 23.99,
    "oldPrice": null,
    "imageLink": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop",
    "category": "Iced Coffee"
  },
  {
    "id": 8,
    "name": "Turkish Coffee Delight",
    "description": "Traditional finely ground coffee brewed with aromatic spices and sugar.",
    "price": 18.99,
    "oldPrice": 24.99,
    "imageLink": "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=200&h=200&fit=crop",
    "category": "Specialty"
  },
  {
    "id": 9,
    "name": "Espresso Double Shot",
    "description": "Bold and intense double shot of our finest espresso beans, pure energy.",
    "price": 16.99,
    "oldPrice": null,
    "imageLink": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=200&h=200&fit=crop",
    "category": "Hot Coffee"
  },
  {
    "id": 10,
    "name": "Hazelnut Cold Brew",
    "description": "Smooth cold-brewed coffee infused with rich hazelnut flavor, served over ice.",
    "price": 20.99,
    "oldPrice": 25.99,
    "imageLink": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop",
    "category": "Iced Coffee"
  }
];

// Store Hours Data
const storeHours = [
  { day: "Saturday", hours: "9.00am - 3.00pm" },
  { day: "Sunday", hours: "Closed" },
  { day: "Monday", hours: "9.00am - 6.00pm" },
  { day: "Tuesday", hours: "9.00am - 6.00pm" },
  { day: "Wednesday", hours: "9.00am - 6.00pm" },
  { day: "Thursday", hours: "9.00am - 6.00pm" },
  { day: "Friday", hours: "9.00am - 6.00pm" }
];

export default function CoffeeMenu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...new Set(menuData.map(item => item.category))];
  
  const filteredMenu = selectedCategory === "All" 
    ? menuData 
    : menuData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-12 text-center border-b">
        <p className="text-amber-600 text-sm font-medium mb-2">Simple Menu</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">OUR POPULAR MENU</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Items Section */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === category
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-amber-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="space-y-6">
              {filteredMenu.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-6 flex gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={item.imageLink} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-amber-600">${item.price}</p>
                        {item.oldPrice && (
                          <p className="text-sm text-gray-400 line-through">${item.oldPrice}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <span className="inline-block mt-3 text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Menu Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-amber-100 rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Categories Menu</h2>
              
              <div className="space-y-4">
                {storeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-amber-200 last:border-0">
                    <span className="font-medium text-gray-800">{schedule.day}</span>
                    <span className={`text-sm ${schedule.hours === 'Closed' ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-amber-200 text-center">
                <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-xs text-gray-600">Hours may vary on holidays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}