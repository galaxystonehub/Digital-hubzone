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
    image: "oil-diffuser.jpg",
    link: "https://s.click.aliexpress.com/e/_c3Pjfzkz",
    source: "AliExpress",
    category: "home"
  },
  {
    title: "Portable Handheld Fan with LED Display",
    price: "Rs 5,869",
    wasPrice: "Rs 11,985",
    image: "handheld-fan.jpg",
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
    image: "massage-comb.jpg",
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
  },
  {
    title: "Mesh Laundry Bag for Shoes & Delicates",
    price: "Rs 1,221",
    wasPrice: "Rs 2,499",
    image: "laundry-bag.jpg",
    link: "https://s.click.aliexpress.com/e/_c4TQC0rX",
    source: "AliExpress",
    category: "home"
  },
  {
    title: "4D Bionic Neck & Shoulder Massager",
    price: "Rs 13,692",
    wasPrice: "Rs 31,896",
    image: "neck-massager.jpg",
    link: "https://s.click.aliexpress.com/e/_c3BVKjNB",
    source: "AliExpress",
    category: "health"
  },
  {
    title: "Daraz Product 1 (add name)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://static-01.daraz.pk/p/44597d89eb506f9bf710fd6080f80874.jpg",
    link: "https://s.daraz.pk/s.Xpq78?cc",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Daraz Product 2 (add name)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://static-01.daraz.pk/p/8dd8b1e6ac97d6f8fe8ba13df58bf2da.jpg",
    link: "https://s.daraz.pk/s.XpqQ2?cc",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Daraz Product 3 (add name)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://pk-live-21.slatic.net/kf/S2a8e7076b56447ebb11dcf5dc2dbcc58s.jpg",
    link: "https://s.daraz.pk/s.Xpq9W?cc",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Daraz Product 4 (add name)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://pk-live-21.slatic.net/kf/S306dd72c7a14484e8e18863a91f37ee9F.jpg",
    link: "https://s.daraz.pk/s.Xpqkd?cc",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Daraz Product 5 (add name)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://static-01.daraz.pk/p/9a8f70d7f2444c9addc95cd68192ea17.png",
    link: "https://s.daraz.pk/s.XpqPa?cc",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Daraz Product 6 (add name)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://static-01.daraz.pk/p/793e0ec9d011bafdcd3d67716709bc30.png",
    link: "https://s.daraz.pk/s.Xpqlo?cc",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Daraz Product 7 (add name)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://static-01.daraz.pk/p/dd17a56d9e0e16d1d4231513c3e5bb90.png",
    link: "https://s.daraz.pk/s.XpqOF?cc",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Daraz Product 8 (add name)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://static-01.daraz.pk/p/3f264c5afeaa46baa9175820b4c84cbc.jpg",
    link: "https://s.daraz.pk/s.Xpqm5?cc",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Daraz Product 9 (add name - same photo as #8, confirm if different product)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://static-01.daraz.pk/p/3f264c5afeaa46baa9175820b4c84cbc.jpg",
    link: "https://s.daraz.pk/s.Xpqne?cc",
    source: "Daraz",
    category: "home"
  },
  {
    title: "Daraz Product 10 (add name)",
    price: "Rs 0",
    wasPrice: "",
    image: "https://static-01.daraz.pk/p/0d7f6bbe7c5f131a781c0b0b2cdbca07.png",
    link: "https://s.daraz.pk/s.XpqM9?cc",
    source: "Daraz",
    category: "home"
  }
];
