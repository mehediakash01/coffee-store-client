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
      "A classic buttery, flaky pastry.\nPerfect for a light breakfast or a midday treat.",
    icon: <FaBreadSlice size={30} />,
  },
  {
    id: 2,
    name: "FRENCH TOAST",
    description:
      "Thick slices of brioche soaked in a rich custard, pan-fried to golden perfection.\nServed with maple syrup and fresh berries.",
    icon: <FaHamburger size={30} />,
  },
  {
    id: 3,
    name: "PANCAKES",
    description:
      "Fluffy, golden-brown pancakes.\nTopped with butter and a drizzle of warm maple syrup.",
    icon: <FaCookieBite size={30} />,
  },
  {
    id: 4,
    name: "CHOCOLATE",
    description:
      "A rich, decadent chocolate chip cookie, warm from the oven.\nCrispy on the edges, soft in the center.",
    icon: <FaPizzaSlice size={30} />,
  },
];

const drinks = [
  {
    id: 1,
    name: "TURKISH COFFEE",
    description:
      "A strong, finely-ground coffee brewed in a traditional cezve pot.\nKnown for its intense flavor and rich texture.",
    icon: <FaCoffee size={30} />,
  },
  {
    id: 2,
    name: "COFFEE TO GO",
    description:
      "A classic hot coffee in a convenient to-go cup.\nPerfect for a busy morning or a quick pick-me-up.",
    icon: <FaCoffee size={30} />,
  },
  {
    id: 3,
    name: "MORNING COFFEE",
    description:
      "A smooth, mild coffee with a hint of cinnamon and sugar.\nOur most popular house blend to start your day.",
    icon: <FaMugHot size={30} />,
  },
  {
    id: 4,
    name: "ESPRESSO",
    description:
      "A concentrated shot of coffee with a rich crema.\nBold and robust, a small but powerful coffee experience.",
    icon: <FaGlassMartini size={30} />,
  },
];
const SpecialItems = () => {
  return (
    <div className="w-11/12 mx-auto my-12">
      <h1 className="text-center text-[#331A15] my-6 text-2xl">
        Popular Items
      </h1>
      <h1 className="text-4xl text-center my-12">COFFEE BUILD YOUR BASE</h1>
      {/* parent grid */}
      <div className="grid grid-cols-3 gap-6 items-center">
        {/* left column  */}
        <div>
          {breads.map((bread) => (
            <div key={bread.id} className="flex items-center gap-6">
              <div >
                <h1 className="font-bold mb-2">{bread.name}</h1>
                <p>
               
                  A classic buttery, flaky pastry <br />
                  Perfect for a light breakfast or a midday treat.
                </p>
              </div>
              <p>{bread.icon}</p>
            </div>
          ))}
        </div>
        {/* middle column img */}
        <div>
          <img
            src="https://kofi-demo.myshopify.com/cdn/shop/files/cup-20.png?v=1637664578"
            alt=""
          />
        </div>
        {/* right column  */}
        <div>
          {drinks.map((drink) => (
            <div key={drink.id} className="flex items-center gap-6">
              <p>{drink.icon}</p>
              <div>
                <h1 className="font-bold mb-2">{drink.name}</h1>
                <p >
                 
                  A classic hot coffee in a convenient to-go cup <br />
                  Perfect for a busy morning or a quick pick-me-up
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialItems;
