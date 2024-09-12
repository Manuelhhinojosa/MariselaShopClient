// for production

// shop component
let isItJ = false;

// cart component
let cartCount = 6;

// home component
const homeImgUrl =
  "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png";

const homeImgUrl2 =
  "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png";

// for shop and product components
const jArr = [
  {
    id: 1,
    available: false,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png",
  },
  {
    id: 2,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png",
  },
  {
    id: 3,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png",
  },
  {
    id: 4,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png",
  },
  {
    id: 5,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png",
  },
  {
    id: 6,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png",
  },
];

const printsArr = [
  {
    id: 7,
    available: false,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
  },
  {
    id: 8,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
  },
  {
    id: 9,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
  },
  {
    id: 10,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
  },
  {
    id: 11,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
  },
  {
    id: 12,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
  },
];

// for About component
const aboutImgUrl =
  "https://res.cloudinary.com/mangud/image/upload/v1724854077/mariselaShopClient/Screen_Shot_2024-08-28_at_10.06.14_AM_kxt4cz.png";

const aboutPageText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit,ipsum impedit, dolores est tenetur pariatur deserunt vel ad.";

// for FAQ compnent
const questionsAndAnswers = [
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  "This is a question?",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
];

// for reviews component
const reviews = [
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
    author: "First Last",
  },
];

const orders = [
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "new",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "new",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "new",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "processing",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "processing",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "processing",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "sent",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "sent",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "sent",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "delivered",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "delivered",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "delivered",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "cancelled",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "cancelled",
    date: "this is the date",
  },
  {
    id: 1,
    productId: 2,
    productName: "product name",
    type: "print",
    cost: "$100.00",
    nameOfClient: "Manuel Hinojosa",
    adress: "this is the Address",
    status: "cancelled",
    date: "this is the date",
  },
];

const data = {
  isItJ,
  cartCount,
  homeImgUrl,
  homeImgUrl2,
  jArr,
  printsArr,
  aboutImgUrl,
  aboutPageText,
  questionsAndAnswers,
  reviews,
  orders,
};

export default data;
