import React, { useState } from 'react';
import { Coffee, MapPin, Star, ArrowRight, ChevronLeft, Heart, Share2, ShoppingCart } from 'lucide-react';
export default function CoffeeDetailPage({ coffee, onBack }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Collection
          </button>
        </div>
      </div>

      {/* Detail Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={coffee.image} 
                alt={coffee.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-6 right-6 flex gap-3">
                <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div>
            <div className="bg-amber-900/10 inline-block px-4 py-1 rounded-full text-sm font-medium text-amber-900 mb-4">
              {coffee.roastLevel}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{coffee.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="ml-2 text-lg font-semibold text-gray-900">{coffee.rating}</span>
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">{coffee.reviews} reviews</span>
              <span className="text-gray-500">|</span>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{coffee.origin}</span>
              </div>
            </div>

            <p className="text-3xl font-bold text-amber-700 mb-6">${coffee.price}</p>

            <p className="text-gray-700 leading-relaxed mb-8">
              {coffee.fullDescription}
            </p>

            {/* Tasting Notes */}
            <div className="mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Tasting Notes</h3>
              <div className="flex flex-wrap gap-2">
                {coffee.tastingNotes.map((note, index) => (
                  <span key={index} className="bg-amber-50 text-amber-900 px-4 py-2 rounded-full text-sm font-medium">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Coffee Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Process</p>
                <p className="font-semibold text-gray-900">{coffee.process}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Altitude</p>
                <p className="font-semibold text-gray-900">{coffee.altitude}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Body</p>
                <p className="font-semibold text-gray-900">{coffee.body}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Acidity</p>
                <p className="font-semibold text-gray-900">{coffee.acidity}</p>
              </div>
            </div>

            {/* Best Brewing Methods */}
            <div className="mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Best Brewing Methods</h3>
              <div className="flex flex-wrap gap-2">
                {coffee.bestFor.map((method, index) => (
                  <span key={index} className="bg-white border-2 border-amber-600 text-amber-700 px-4 py-2 rounded-lg text-sm font-medium">
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center border-2 border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100 transition font-bold text-gray-700"
                >
                  -
                </button>
                <span className="px-6 py-3 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100 transition font-bold text-gray-700"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-amber-600 text-white font-bold py-4 rounded-lg hover:bg-amber-700 transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}