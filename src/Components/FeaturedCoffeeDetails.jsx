import React, { useState } from 'react';
import { Star, ArrowRight, Sparkles, TrendingUp, Award, ChevronLeft, Heart, Share2, ShoppingCart, MapPin } from 'lucide-react';
export default function FeaturedCoffeeDetails({ coffee, onBack }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Featured Collection
          </button>
        </div>
      </div>

      {/* Detail Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={coffee.image} 
                alt={coffee.name}
                className="w-full h-[600px] object-cover"
              />
              {/* Badge Overlay */}
              <div className={`absolute top-6 left-6 ${coffee.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2`}>
                <Award className="w-4 h-4" />
                {coffee.badge}
              </div>
              
              {/* Action Buttons */}
              <div className="absolute top-6 right-6 flex gap-3">
                <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition">
                  <Heart className="w-5 h-5 text-gray-700" />
                </button>
                <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition">
                  <Share2 className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 inline-block px-4 py-1 rounded-full text-sm font-medium text-amber-900 mb-4">
              {coffee.roastLevel}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{coffee.name}</h1>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="ml-2 text-lg font-semibold text-gray-900">{coffee.rating}</span>
                <span className="ml-1 text-gray-500">({coffee.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{coffee.origin}</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-amber-700">${coffee.price}</span>
                {coffee.oldPrice && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">${coffee.oldPrice}</span>
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {Math.round(((coffee.oldPrice - coffee.price) / coffee.oldPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              {coffee.fullDescription}
            </p>

            {/* Tasting Notes */}
            <div className="mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                Tasting Notes
              </h3>
              <div className="flex flex-wrap gap-2">
                {coffee.tastingNotes.map((note, index) => (
                  <span key={index} className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Coffee Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-amber-500">
                <p className="text-sm text-gray-600 mb-1">Process</p>
                <p className="font-bold text-gray-900">{coffee.process}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-amber-500">
                <p className="text-sm text-gray-600 mb-1">Altitude</p>
                <p className="font-bold text-gray-900">{coffee.altitude}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-amber-500">
                <p className="text-sm text-gray-600 mb-1">Body</p>
                <p className="font-bold text-gray-900">{coffee.body}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-amber-500">
                <p className="text-sm text-gray-600 mb-1">Acidity</p>
                <p className="font-bold text-gray-900">{coffee.acidity}</p>
              </div>
            </div>

            {/* Best Brewing Methods */}
            <div className="mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Recommended Brewing</h3>
              <div className="flex flex-wrap gap-2">
                {coffee.bestFor.map((method, index) => (
                  <span key={index} className="bg-white border-2 border-amber-600 text-amber-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-50 transition">
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center border-2 border-gray-300 rounded-xl bg-white shadow-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-4 hover:bg-gray-100 transition font-bold text-gray-700 text-xl"
                >
                  -
                </button>
                <span className="px-6 py-4 font-bold text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-4 hover:bg-gray-100 transition font-bold text-gray-700 text-xl"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-4 px-6 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart - ${(coffee.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}