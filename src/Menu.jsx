import React from "react";
import MenuSection from "./MenuSection";
import beefSteak from "./assets/beefsteak.png";
import beefBurger from "./assets/beefburger.png";
import chickenSteak from "./assets/chickensteak.png";
import pasta from "./assets/pasta.png";
import spaghetti from "./assets/spaghetti.png";

export default function Menu() {
  const menuData = [
    {
      title: "Main Courses",
      items: [
        { name: "Beef Steak", price: 70, image: beefSteak },
        { name: "Chicken Steak", price: 60, image: chickenSteak },
        { name: "Pasta", price: 50, image: pasta },
        { name: "Spaghetti", price: 50, image: spaghetti },
        { name: "Beef Burger", price: 60, image: beefBurger },
      ],
    },
    {
      title: "Special Cuts",
      items: [
        { name: "Porterhouse Steak", price: 70, image: beefSteak },
        { name: "T-Bone Steak", price: 60, image: beefSteak },
        { name: "New York Strip", price: 50, image: beefSteak },
      ],
    },
    {
      title: "Drinks",
      items: [
        { name: "Mineral Water", price: 10, image: pasta },
        { name: "Orange Juice", price: 20, image: spaghetti },
        { name: "Milkshake", price: 30, image: beefBurger },
        { name: "Ice Tea", price: 15, image: chickenSteak },
        { name: "Hot Tea", price: 15, image: beefSteak },
      ],
    },
    {
      title: "Special Drinks",
      items: [
        { name: "Ice Chocolate", price: 25, image: spaghetti },
        { name: "Hot Chocolate", price: 25, image: pasta },
        { name: "Juice", price: 20, image: beefBurger },
        { name: "Cocktail", price: 50, image: beefSteak },
        { name: "Ice Milk", price: 20, image: chickenSteak },
      ],
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Menu</h1>
      {menuData.map((section, index) => (
        <MenuSection key={index} title={section.title} items={section.items} />
      ))}
    </div>
  );
}
