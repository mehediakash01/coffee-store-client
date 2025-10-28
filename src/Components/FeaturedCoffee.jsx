import React, { useState } from 'react';
import { Star, ArrowRight, Sparkles, TrendingUp, Award, ChevronLeft, Heart, Share2, ShoppingCart, MapPin } from 'lucide-react';
import FeaturedCoffeeDetails from './FeaturedCoffeeDetails';

// Featured Coffee Data
const featuredCoffees = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Yirgacheffe, Ethiopia",
    roastLevel: "Light Roast",
    price: 24.99,
    oldPrice: 29.99,
    rating: 4.8,
    reviews: 128,
    badge: "Best Seller",
    badgeColor: "bg-rose-500",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop",
    shortDescription: "Bright, floral notes with hints of bergamot and jasmine.",
    fullDescription: "Ethiopian Yirgacheffe is one of the most celebrated coffees in the world. Grown at high altitudes in the birthplace of coffee, this bean offers an extraordinary sensory experience. The light roast preserves the natural floral and citrus notes that make this coffee so distinctive.",
    tastingNotes: ["Bergamot", "Jasmine", "Lemon", "Honey"],
    process: "Washed",
    altitude: "1,700-2,200m",
    body: "Light",
    acidity: "High",
    bestFor: ["Pour Over", "Chemex", "Aeropress"]
  },
  {
    id: 2,
    name: "Colombian Supremo",
    origin: "Huila, Colombia",
    roastLevel: "Medium Roast",
    price: 22.99,
    rating: 4.7,
    reviews: 95,
    badge: "Customer Favorite",
    badgeColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
    shortDescription: "Smooth and balanced with caramel sweetness and nutty undertones.",
    fullDescription: "Colombian Supremo represents the largest and finest beans from Colombia's renowned coffee regions. Grown in the rich volcanic soils of Huila, this medium roast delivers a perfectly balanced cup with excellent body and sweetness.",
    tastingNotes: ["Caramel", "Chocolate", "Nuts", "Brown Sugar"],
    process: "Washed",
    altitude: "1,200-1,800m",
    body: "Medium",
    acidity: "Medium",
    bestFor: ["Drip Coffee", "French Press", "Espresso"]
  },
  {
    id: 3,
    name: "Costa Rican Tarrazu",
    origin: "Tarrazu, Costa Rica",
    roastLevel: "Medium Roast",
    price: 26.99,
    oldPrice: 31.99,
    rating: 4.9,
    reviews: 152,
    badge: "Award Winner",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop",
    shortDescription: "Crisp acidity with notes of citrus and chocolate.",
    fullDescription: "Tarrazu is widely considered to produce the finest coffee in Costa Rica. The region's ideal combination of altitude, climate, and volcanic soil creates beans with exceptional clarity and complexity.",
    tastingNotes: ["Orange", "Dark Chocolate", "Almond", "Honey"],
    process: "Honey Process",
    altitude: "1,200-1,900m",
    body: "Medium-Full",
    acidity: "Bright",
    bestFor: ["Pour Over", "Drip Coffee", "Cold Brew"]
  },
  {
    id: 4,
    name: "Sumatra Mandheling",
    origin: "Sumatra, Indonesia",
    roastLevel: "Dark Roast",
    price: 23.99,
    rating: 4.6,
    reviews: 87,
    badge: "Rich & Bold",
    badgeColor: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    shortDescription: "Full-bodied with earthy, herbal notes and syrupy texture.",
    fullDescription: "Sumatra Mandheling is known for its distinctive processing method and unique flavor profile. The wet-hulling process creates a coffee with low acidity, heavy body, and complex earthy notes.",
    tastingNotes: ["Earth", "Cedar", "Dark Chocolate", "Tobacco"],
    process: "Wet-Hulled",
    altitude: "750-1,500m",
    body: "Full",
    acidity: "Low",
    bestFor: ["French Press", "Espresso", "Moka Pot"]
  },
  {
    id: 5,
    name: "Kenyan AA",
    origin: "Nyeri, Kenya",
    roastLevel: "Medium Roast",
    price: 27.99,
    oldPrice: 32.99,
    rating: 4.9,
    reviews: 143,
    badge: "Premium Select",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
    shortDescription: "Wine-like acidity with blackcurrant and tomato notes.",
    fullDescription: "Kenyan AA represents the highest grade of Kenyan coffee. Known for its bright, complex acidity and distinctive berry notes, this coffee is processed with meticulous care.",
    tastingNotes: ["Blackcurrant", "Tomato", "Grapefruit", "Brown Sugar"],
    process: "Double Washed",
    altitude: "1,400-2,000m",
    body: "Medium",
    acidity: "Very High",
    bestFor: ["Pour Over", "V60", "Kalita Wave"]
  },
  {
    id: 6,
    name: "Guatemalan Antigua",
    origin: "Antigua, Guatemala",
    roastLevel: "Medium Roast",
    price: 25.99,
    rating: 4.8,
    reviews: 118,
    badge: "Limited Edition",
    badgeColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop",
    shortDescription: "Rich and complex with spicy, cocoa notes and smoky finish.",
    fullDescription: "Guatemalan Antigua benefits from the region's unique volcanic soil and microclimate. Grown in the shadow of three volcanoes, these beans develop a distinctive spicy-sweet character.",
    tastingNotes: ["Cocoa", "Spice", "Smoke", "Apple"],
    process: "Washed",
    altitude: "1,500-1,700m",
    body: "Full",
    acidity: "Medium",
    bestFor: ["French Press", "Espresso", "Drip Coffee"]
  }
];

export default function FeaturedCoffeeSection() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  if (selectedCoffee) {
    return <FeaturedCoffeeDetails coffee={selectedCoffee} onBack={() => setSelectedCoffee(null)} />;
  }

  return (
    <div className="bg-gradient-to-b from-white via-amber-50/30 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">HANDPICKED SELECTION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Featured Coffee Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most loved and award-winning coffees, curated for exceptional taste and quality
          </p>
        </div>

        {/* Coffee Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCoffees.map((coffee, index) => (
            <div 
              key={coffee.id}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <img 
                  src={coffee.image} 
                  alt={coffee.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${coffee.badgeColor} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}>
                  <Award className="w-3 h-3" />
                  {coffee.badge}
                </div>

                {/* Discount Badge */}
                {coffee.oldPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    SAVE ${(coffee.oldPrice - coffee.price).toFixed(2)}
                  </div>
                )}

                {/* Rating Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-gray-900">{coffee.rating}</span>
                  <span className="text-xs text-gray-600">({coffee.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Origin */}
                <div className="flex items-center gap-2 text-sm text-amber-700 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{coffee.origin}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition">
                  {coffee.name}
                </h3>

                {/* Roast Level */}
                <span className="inline-block text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium mb-3">
                  {coffee.roastLevel}
                </span>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {coffee.shortDescription}
                </p>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-amber-700">${coffee.price}</span>
                    {coffee.oldPrice && (
                      <span className="ml-2 text-sm text-gray-400 line-through">${coffee.oldPrice}</span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedCoffee(coffee)}
                  className="w-full mt-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-3 px-6 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
                >
                  View Details
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold py-4 px-8 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            <TrendingUp className="w-5 h-5" />
            Explore All Coffee
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

