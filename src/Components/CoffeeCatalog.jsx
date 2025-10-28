import React, { useState } from 'react';
import { Coffee, MapPin, Star, ArrowRight, ChevronLeft, Heart, Share2, ShoppingCart } from 'lucide-react';
import CoffeeDetailPage from './CoffeeDetailsPage';

// Coffee Catalog Data - Ready for API
const coffeeData = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Yirgacheffe, Ethiopia",
    roastLevel: "Light Roast",
    price: 24.99,
    rating: 4.8,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop",
    shortDescription: "Bright, floral notes with hints of bergamot and jasmine. A classic Ethiopian coffee experience.",
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
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
    shortDescription: "Smooth and balanced with caramel sweetness and nutty undertones. Perfect for everyday brewing.",
    fullDescription: "Colombian Supremo represents the largest and finest beans from Colombia's renowned coffee regions. Grown in the rich volcanic soils of Huila, this medium roast delivers a perfectly balanced cup with excellent body and sweetness. It's the ideal choice for those who appreciate a classic, well-rounded coffee experience.",
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
    rating: 4.9,
    reviews: 152,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=400&fit=crop",
    shortDescription: "Crisp acidity with notes of citrus and chocolate. A sophisticated Central American classic.",
    fullDescription: "Tarrazu is widely considered to produce the finest coffee in Costa Rica. The region's ideal combination of altitude, climate, and volcanic soil creates beans with exceptional clarity and complexity. This medium roast showcases the bright acidity and clean finish that make Tarrazu coffee so prized among connoisseurs.",
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
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    shortDescription: "Full-bodied with earthy, herbal notes and a syrupy texture. Bold Indonesian character.",
    fullDescription: "Sumatra Mandheling is known for its distinctive processing method and unique flavor profile. The wet-hulling process used in Sumatra creates a coffee with low acidity, heavy body, and complex earthy notes. This dark roast emphasizes the bold, intense flavors that make Indonesian coffees so unique and memorable.",
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
    rating: 4.9,
    reviews: 143,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
    shortDescription: "Wine-like acidity with blackcurrant and tomato notes. Complex and vibrant African coffee.",
    fullDescription: "Kenyan AA represents the highest grade of Kenyan coffee, with large beans that deliver exceptional flavor. Known for its bright, complex acidity and distinctive berry notes, this coffee is processed with meticulous care. The double-washed method used in Kenya produces one of the cleanest, most vibrant cups you'll ever taste.",
    tastingNotes: ["Blackcurrant", "Tomato", "Grapefruit", "Brown Sugar"],
    process: "Double Washed",
    altitude: "1,400-2,000m",
    body: "Medium",
    acidity: "Very High",
    bestFor: ["Pour Over", "V60", "Kalita Wave"]
  },
  {
    id: 6,
    name: "Brazilian Santos",
    origin: "Minas Gerais, Brazil",
    roastLevel: "Medium-Dark Roast",
    price: 21.99,
    rating: 4.5,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop",
    shortDescription: "Smooth, sweet, and nutty with low acidity. A crowd-pleasing Brazilian favorite.",
    fullDescription: "Brazilian Santos is the workhorse of specialty coffee, known for its consistency and approachability. Grown in Brazil's premier coffee regions, this bean offers a sweet, nutty profile with chocolate notes. The medium-dark roast brings out the natural sweetness while maintaining a smooth, balanced character that's perfect for blending or enjoying on its own.",
    tastingNotes: ["Chocolate", "Peanut", "Caramel", "Toast"],
    process: "Natural (Dry)",
    altitude: "800-1,300m",
    body: "Full",
    acidity: "Low",
    bestFor: ["Espresso", "Drip Coffee", "Cold Brew"]
  },
  {
    id: 7,
    name: "Guatemalan Antigua",
    origin: "Antigua, Guatemala",
    roastLevel: "Medium Roast",
    price: 25.99,
    rating: 4.8,
    reviews: 118,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop",
    shortDescription: "Rich and complex with spicy, cocoa notes and a smoky finish. Volcanic terroir at its best.",
    fullDescription: "Guatemalan Antigua benefits from the region's unique volcanic soil and microclimate. Grown in the shadow of three volcanoes, these beans develop a distinctive spicy-sweet character with excellent balance. The medium roast highlights the complex interplay of chocolate, spice, and subtle smoke that makes Antigua coffee so sought after.",
    tastingNotes: ["Cocoa", "Spice", "Smoke", "Apple"],
    process: "Washed",
    altitude: "1,500-1,700m",
    body: "Full",
    acidity: "Medium",
    bestFor: ["French Press", "Espresso", "Drip Coffee"]
  },
  {
    id: 8,
    name: "Papua New Guinea Sigri",
    origin: "Western Highlands, PNG",
    roastLevel: "Medium Roast",
    price: 28.99,
    rating: 4.7,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    shortDescription: "Clean and bright with tropical fruit notes. An exotic Pacific Island gem.",
    fullDescription: "Sigri Estate in Papua New Guinea produces some of the finest coffee in the Pacific region. Benefiting from ideal growing conditions and careful processing, these beans offer a clean, bright cup with unique tropical fruit characteristics. The medium roast preserves the delicate fruit notes while developing rich body and sweetness.",
    tastingNotes: ["Tropical Fruit", "Citrus", "Milk Chocolate", "Vanilla"],
    process: "Washed",
    altitude: "1,300-1,800m",
    body: "Medium",
    acidity: "Medium-High",
    bestFor: ["Pour Over", "Aeropress", "Drip Coffee"]
  }
];

export default function CoffeeCatalog() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [filter, setFilter] = useState("All");

  const roastLevels = ["All", "Light Roast", "Medium Roast", "Medium-Dark Roast", "Dark Roast"];

  const filteredCoffee = filter === "All" 
    ? coffeeData 
    : coffeeData.filter(coffee => coffee.roastLevel === filter);

  if (selectedCoffee) {
    return <CoffeeDetailPage coffee={selectedCoffee} onBack={() => setSelectedCoffee(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Coffee className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Our Coffee Collection</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Discover premium single-origin coffees from the world's finest growing regions
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {roastLevels.map(level => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === level
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-50'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Showing {filteredCoffee.length} {filteredCoffee.length === 1 ? 'coffee' : 'coffees'}
          </p>
        </div>
      </div>

      {/* Coffee Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoffee.map(coffee => (
            <div key={coffee.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={coffee.image} 
                  alt={coffee.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-amber-700">
                  ${coffee.price}
                </div>
                <div className="absolute top-4 left-4 bg-amber-900/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {coffee.roastLevel}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{coffee.origin}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{coffee.name}</h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="ml-1 text-sm font-semibold text-gray-900">{coffee.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({coffee.reviews} reviews)</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {coffee.shortDescription}
                </p>

                <button
                  onClick={() => setSelectedCoffee(coffee)}
                  className="w-full bg-amber-600 text-white font-semibold py-3 rounded-lg hover:bg-amber-700 transition flex items-center justify-center gap-2 group"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}