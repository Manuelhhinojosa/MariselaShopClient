// for production
let isItJ = false;

const homeImgUrl =
  "https://res.cloudinary.com/mangud/image/upload/v1724348584/mariselaShopClient/Screen_Shot_2024-08-22_at_1.42.14_PM_d1v3tj.png";

const homeImgUrl2 =
  "https://res.cloudinary.com/mangud/image/upload/v1724357016/mariselaShopClient/Screen_Shot_2024-08-22_at_4.03.27_PM_j7t4lo.png";

// for production
const jArr = [
  {
    id: 1,
    available: false,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724613457/mariselaShopClient/Screen_Shot_2024-08-25_at_3.17.27_PM_xnxhbs.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724684658/mariselaShopClient/Screen_Shot_2024-08-26_at_11.03.23_AM_xiisrh.png",
  },
  {
    id: 2,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724613457/mariselaShopClient/Screen_Shot_2024-08-25_at_3.17.27_PM_xnxhbs.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724684658/mariselaShopClient/Screen_Shot_2024-08-26_at_11.03.23_AM_xiisrh.png",
  },
  {
    id: 3,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724613457/mariselaShopClient/Screen_Shot_2024-08-25_at_3.17.27_PM_xnxhbs.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724684658/mariselaShopClient/Screen_Shot_2024-08-26_at_11.03.23_AM_xiisrh.png",
  },
  {
    id: 4,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724613457/mariselaShopClient/Screen_Shot_2024-08-25_at_3.17.27_PM_xnxhbs.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724684658/mariselaShopClient/Screen_Shot_2024-08-26_at_11.03.23_AM_xiisrh.png",
  },
  {
    id: 5,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724613457/mariselaShopClient/Screen_Shot_2024-08-25_at_3.17.27_PM_xnxhbs.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724684658/mariselaShopClient/Screen_Shot_2024-08-26_at_11.03.23_AM_xiisrh.png",
  },
  {
    id: 6,
    available: true,
    title: "Lorem ipsum dolor",
    shortDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    cost: "$100.00",
    img: "https://res.cloudinary.com/mangud/image/upload/v1724613457/mariselaShopClient/Screen_Shot_2024-08-25_at_3.17.27_PM_xnxhbs.png",
    img2: "https://res.cloudinary.com/mangud/image/upload/v1724684658/mariselaShopClient/Screen_Shot_2024-08-26_at_11.03.23_AM_xiisrh.png",
  },
];

// for production
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

const aboutImgUrl =
  "https://res.cloudinary.com/mangud/image/upload/v1724355625/mariselaShopClient/Screen_Shot_2024-08-22_at_3.40.17_PM_iu57cr.png";

// for production
const aboutPageText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit, ipsum impedit, dolores est tenetur pariatur deserunt vel ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique, nulla consectetur iste velit,ipsum impedit, dolores est tenetur pariatur deserunt vel ad.";

// for production
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

// for production
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
export default {
  isItJ,
  homeImgUrl,
  homeImgUrl2,
  jArr,
  printsArr,
  aboutImgUrl,
  aboutPageText,
  questionsAndAnswers,
  reviews,
};
