import { MenuSection } from "types/cafemenu";

export const menuSections: MenuSection[] = [
  {
    title: "DINNER",
    timing: "10.00 PM to 11.00 PM",
    subTitle: "(Menu changes everday)",
    items: [
      "Mutter Paaneer, Dry Patato Sabji Chapati, Rice, Dal, Salad, Sweet, Papad, Pickle",
      "Bharit, Bhakar, Theecha",
    ],
    image: "/assets/images/Bharit Bhakar.jpg",
  },
  {
    title: "HI TEA",
    subTitle: "",
    timing: "5.00 PM to 6.30 PM",
    items: ["Pav Bhaji", "Misal Pav", "Tea", "Coffee", "Vada Pav"],
    image: "/assets/images/Pav-Bhaji.jpg",
  },
  {
    title: "BREAKFAST",
    subTitle: "",
    timing: "8.00 PM to 9.00 PM",
    items: ["Poha", "Tea/Black Tea", "Masala Sprouts"],
    image: "/assets/images/moong-sprouts-salad.jpg",
  },
  {
    title: "BARBEQUE",
    subTitle: "",
    timing: "7.00 PM to 9.00 PM",
    items: ["Paneer Patato Capsicum", " Pineapple"],
    image: "/assets/images/barbeque.jpg",
  },
];
