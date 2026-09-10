/*
  HOW TO ADD YOUR OWN PRODUCTS
  ----------------------------
  Copy one block below and edit the values. Fields:
    title      -> product name shown on the card
    price      -> current price, e.g. "Rs 2,499"
    wasPrice   -> optional original price (leave "" if none)
    image      -> a direct image link (product photo URL)
    link       -> YOUR affiliate link (AliExpress / Daraz / Temu). Not shown
                 as visible text — the "Get this deal" button opens it via
                 JavaScript when tapped.
    source     -> "AliExpress" | "Daraz" | "Temu"  (shown as a small tag)
    category   -> "electronics" | "home" | "fashion" | "gadgets"  (or add your own,
                  just also add a matching chip in script.js -> CATEGORIES)

  Keep the platform tag (source) on every card — AliExpress, Daraz and Temu
  affiliate programs require the link to be identifiable as a partner link.
  It can stay small and subtle, it just can't be hidden completely.
*/

const PRODUCTS = [
  {
    title: "Wireless earbuds with charging case",
    price: "Rs 2,199",
    wasPrice: "Rs 3,400",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Earbuds",
    link: "#REPLACE-WITH-YOUR-ALIEXPRESS-AFFILIATE-LINK",
    source: "AliExpress",
    category: "electronics"
  },
  {
    title: "Portable blender bottle, USB rechargeable",
    price: "Rs 1,850",
    wasPrice: "",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Blender",
    link: "#REPLACE-WITH-YOUR-DARAZ-AFFILIATE-LINK",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Adjustable laptop stand, aluminum",
    price: "Rs 2,650",
    wasPrice: "Rs 3,100",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Laptop+Stand",
    link: "#REPLACE-WITH-YOUR-TEMU-AFFILIATE-LINK",
    source: "Temu",
    category: "gadgets"
  },
  {
    title: "Minimalist analog watch, leather strap",
    price: "Rs 1,999",
    wasPrice: "",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Watch",
    link: "#REPLACE-WITH-YOUR-DARAZ-AFFILIATE-LINK",
    source: "Daraz",
    category: "fashion"
  },
  {
    title: "LED ring light with tripod, 10 inch",
    price: "Rs 2,900",
    wasPrice: "Rs 3,800",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Ring+Light",
    link: "#REPLACE-WITH-YOUR-ALIEXPRESS-AFFILIATE-LINK",
    source: "AliExpress",
    category: "gadgets"
  },
  {
    title: "Non-stick cookware set, 3 pieces",
    price: "Rs 4,250",
    wasPrice: "",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Cookware",
    link: "#REPLACE-WITH-YOUR-TEMU-AFFILIATE-LINK",
    source: "Temu",
    category: "home"
  },
  {
    title: "Foldable sunglasses with hard case",
    price: "Rs 1,300",
    wasPrice: "Rs 1,700",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Sunglasses",
    link: "#REPLACE-WITH-YOUR-ALIEXPRESS-AFFILIATE-LINK",
    source: "AliExpress",
    category: "fashion"
  },
  {
    title: "Mechanical keyboard, compact 60%",
    price: "Rs 5,400",
    wasPrice: "",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Keyboard",
    link: "#REPLACE-WITH-YOUR-DARAZ-AFFILIATE-LINK",
    source: "Daraz",
    category: "electronics"
  },
  {
    title: "Smart LED desk lamp, touch control",
    price: "Rs 1,650",
    wasPrice: "Rs 2,100",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Desk+Lamp",
    link: "#REPLACE-WITH-YOUR-TEMU-AFFILIATE-LINK",
    source: "Temu",
    category: "home"
  }
];

