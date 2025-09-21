import React from "react";
import {
  FaBreadSlice,
  FaHamburger,
  FaCookieBite,
  FaPizzaSlice,
  FaCoffee,
  FaMugHot,
  FaGlassMartini,
} from "react-icons/fa";

const breads = [
  {
    id: 1,
    name: "CROISSANT",
    description:
      "A classic buttery, flaky pastry. Perfect for a light breakfast or a midday treat.",
    icon: <FaBreadSlice size={30} />,
  },
  {
    id: 2,
    name: "FRENCH TOAST",
    description:
      "Thick slices of brioche soaked in custard, pan-fried to golden perfection. Served with syrup and berries.",
    icon: <FaHamburger size={30} />,
  },
  {
    id: 3,
    name: "PANCAKES",
    description:
      "Fluffy, golden-brown pancakes topped with butter and a drizzle of maple syrup.",
    icon: <FaCookieBite size={30} />,
  },
  {
    id: 4,
    name: "CHOCOLATE",
    description:
      "A rich chocolate chip cookie, crispy on the edges and soft in the center.",
    icon: <FaPizzaSlice size={30} />,
  },
];

const drinks = [
  {
    id: 1,
    name: "TURKISH COFFEE",
    description:
      "A strong coffee brewed in a cezve pot. Known for its intense flavor and rich texture.",
    icon: <FaCoffee size={30} />,
  },
  {
    id: 2,
    name: "COFFEE TO GO",
    description:
      "A classic hot coffee in a convenient to-go cup. Perfect for busy mornings.",
    icon: <FaCoffee size={30} />,
  },
  {
    id: 3,
    name: "MORNING COFFEE",
    description:
      "A smooth, mild blend with a hint of cinnamon and sugar. The perfect start to your day.",
    icon: <FaMugHot size={30} />,
  },
  {
    id: 4,
    name: "ESPRESSO",
    description:
      "A concentrated shot of coffee with rich crema. Bold and powerful flavor.",
    icon: <FaGlassMartini size={30} />,
  },
];

const SpecialItems = () => {
  return (
    <div className="w-11/12 mx-auto my-12">
      {/* Section title */}
      <h1 className="text-center text-[#331A15] text-2xl font-semibold">
        Popular Items
      </h1>
      <h2 className="text-4xl text-center my-8 font-bold">
        COFFEE BUILD YOUR BASE
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        {/* left column  */}
        <div className="space-y-8">
          {breads.map((bread) => (
            <div key={bread.id} className="flex items-start gap-4">
              <div className="flex-shrink-0 text-[#331A15]">{bread.icon}</div>
              <div>
                <h3 className="font-bold text-lg mb-2">{bread.name}</h3>
                <p className="text-gray-600 leading-relaxed">{bread.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* middle column img */}
        <div className="flex justify-center">
          <img
            className="max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-contain"
            src="https://kofi-demo.myshopify.com/cdn/shop/files/cup-20.png?v=1637664578"
            alt="Coffee Cup"
          />
        </div>

        {/* right column  */}
        <div className="space-y-8">
          {drinks.map((drink) => (
            <div key={drink.id} className="flex items-start gap-4">
              <div className="flex-shrink-0 text-[#331A15]">{drink.icon}</div>
              <div>
                <h3 className="font-bold text-lg mb-2">{drink.name}</h3>
                <p className="text-gray-600 leading-relaxed">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialItems;
