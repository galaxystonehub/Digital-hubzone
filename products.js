/*
  HOW TO ADD MORE PRODUCTS
  -------------------------
  Copy one block below and edit the values. Fields:
    title, price, wasPrice, image, link, source, category

  Some products below still use a placeholder image (image field starts
  with "https://placehold.co"). Send the real product photo whenever you
  have it and it can be swapped in.
*/

const PRODUCTS = [
  {
    title: "2-in-1 Kitchen Spray Oil Dispenser",
    price: "Rs 650",
    wasPrice: "Rs 1,898",
    image: "oil-dispenser.jpg",
    link: "https://s.click.aliexpress.com/e/_c444O7vr",
    source: "AliExpress",
    category: "home"
  },
  {
    title: "Eyebrow Trimming Scissors with Comb",
    price: "Rs 589",
    wasPrice: "Rs 1,600",
    image: "eyebrow-trimmer.jpg",
    link: "https://s.click.aliexpress.com/e/_c3XgKjBj",
    source: "AliExpress",
    category: "beauty"
  },
  {
    title: "3D Flame Essential Oil Diffuser Humidifier",
    price: "Rs 11,405",
    wasPrice: "Rs 22,816",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Oil+Diffuser",
    link: "https://s.click.aliexpress.com/e/_c3Pjfzkz",
    source: "AliExpress",
    category: "home"
  },
  {
    title: "Portable Handheld Fan with LED Display",
    price: "Rs 5,869",
    wasPrice: "Rs 11,985",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Handheld+Fan",
    link: "https://s.click.aliexpress.com/e/_c3Fc8iYt",
    source: "AliExpress",
    category: "gadgets"
  },
  {
    title: "Square Zirconia Wedding Ring Set",
    price: "Rs 1,037",
    wasPrice: "",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Ring+Set",
    link: "https://s.click.aliexpress.com/e/_c2uO9BAt",
    source: "AliExpress",
    category: "fashion"
  },
  {
    title: "Lenovo LE302 Wireless Bluetooth Earphones",
    price: "Rs 4,758",
    wasPrice: "Rs 5,440",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Lenovo+LE302",
    link: "https://s.click.aliexpress.com/e/_c31uXiWl",
    source: "AliExpress",
    category: "electronics"
  },
  {
    title: "Lenovo LE209 Wireless Bluetooth Earphones",
    price: "Rs 5,462",
    wasPrice: "Rs 11,880",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Lenovo+LE209",
    link: "https://s.click.aliexpress.com/e/_c2RK6dpn",
    source: "AliExpress",
    category: "electronics"
  },
  {
    title: "2-in-1 Spray Massage Scalp Comb",
    price: "Rs 2,867",
    wasPrice: "Rs 6,240",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Massage+Comb",
    link: "https://s.click.aliexpress.com/e/_c3URU3xF",
    source: "AliExpress",
    category: "beauty"
  },
  {
    title: "Coffee Mug Warmer with Timer",
    price: "Rs 5,487",
    wasPrice: "Rs 10,978",
    image: "mug-warmer.jpg",
    link: "https://s.click.aliexpress.com/e/_c3ivmOfJ",
    source: "AliExpress",
    category: "home"
  },
  {
    title: "X8 Turbo Jet Fan Blower",
    price: "Rs 5,866",
    wasPrice: "Rs 12,228",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Jet+Blower",
    link: "https://s.click.aliexpress.com/e/_c4OIjlbx",
    source: "AliExpress",
    category: "gadgets"
  },
  {
    title: "Vintage Persian Style Area Rug",
    price: "Rs 7,250",
    wasPrice: "Rs 12,949",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Area+Rug",
    link: "https://s.click.aliexpress.com/e/_c31J7cTf",
    source: "AliExpress",
    category: "home"
  },
  {
    title: "Maca & Ginseng Capsules, 10000mg",
    price: "Rs 2,169",
    wasPrice: "Rs 4,337",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Maca+Capsules",
    link: "https://s.click.aliexpress.com/e/_c3dxkdBx",
    source: "AliExpress",
    category: "health"
  },
  {
    title: "Portable Mini Handheld Fan, Type-C",
    price: "Rs 1,878",
    wasPrice: "Rs 4,001",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Mini+Fan",
    link: "https://s.click.aliexpress.com/e/_c3Y8bZgd",
    source: "AliExpress",
    category: "gadgets"
  },
  {
    title: "Lenovo LP75 TWS Bluetooth Headphones",
    price: "Rs 5,548",
    wasPrice: "Rs 6,353",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Lenovo+LP75",
    link: "https://s.click.aliexpress.com/e/_c3sbsMiH",
    source: "AliExpress",
    category: "electronics"
  },
  {
    title: "Xiaomi Mijia Handheld Garment Steamer",
    price: "Rs 13,564",
    wasPrice: "Rs 21,581",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Garment+Steamer",
    link: "https://s.click.aliexpress.com/e/_c3e0MCRf",
    source: "AliExpress",
    category: "home"
  },
  {
    title: "240W USB Type-C Fast Charging Cable",
    price: "Rs 669",
    wasPrice: "Rs 1,399",
    image: "https://placehold.co/400x400/eee/1c1f26?text=USB-C+Cable",
    link: "https://s.click.aliexpress.com/e/_c3oNnygZ",
    source: "AliExpress",
    category: "electronics"
  },
  {
    title: "Butterfly Floral Throw Pillow Covers",
    price: "Rs 1,058",
    wasPrice: "Rs 1,061",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Pillow+Covers",
    link: "https://s.click.aliexpress.com/e/_c3QMPqO9",
    source: "AliExpress",
    category: "home"
  },
  {
    title: "RGB LED Strip Lights with App Control",
    price: "Rs 843",
    wasPrice: "Rs 846",
    image: "https://placehold.co/400x400/eee/1c1f26?text=LED+Strip",
    link: "https://s.click.aliexpress.com/e/_c3pKITCd",
    source: "AliExpress",
    category: "home"
  },
  {
    title: "Mini GPS Tracker for Vehicles",
    price: "Rs 1,189",
    wasPrice: "Rs 2,167",
    image: "https://placehold.co/400x400/eee/1c1f26?text=GPS+Tracker",
    link: "https://s.click.aliexpress.com/e/_c3o5oHUH",
    source: "AliExpress",
    category: "gadgets"
  },
  {
    title: "Electric Callus Remover Foot File",
    price: "Rs 3,834",
    wasPrice: "",
    image: "https://placehold.co/400x400/eee/1c1f26?text=Callus+Remover",
    link: "https://s.click.aliexpress.com/e/_c3PvC8fn",
    source: "AliExpress",
    category: "beauty"
  }
];
