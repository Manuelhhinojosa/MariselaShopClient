import { createSlice } from "@reduxjs/toolkit";

export const productsStateSlice = createSlice({
  name: "productsStateSlice",
  initialState: {
    jewelleryArr: [
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
        stock: 0,
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
        stock: 10,
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
        stock: 0,
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
        stock: 0,
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
        stock: 0,
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
        stock: 0,
      },
    ],

    printsArr: [
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
        stock: 0,
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
        stock: 0,
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
        stock: 0,
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
        stock: 0,
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
        stock: 0,
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
        stock: 0,
      },
    ],
    cartCount: 6,

    reviews: [
      {
        review:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
        author: "First Last",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
        author: "First Last",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
        author: "First Last",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
        author: "First Last",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
        author: "First Last",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
        author: "First Last",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
        author: "First Last",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
      {
        review:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam porro alias debitis inventore eius reprehenderit ratione similique,",
        author: "First Last",
        img: "https://res.cloudinary.com/mangud/image/upload/v1724854079/mariselaShopClient/Screen_Shot_2024-08-28_at_10.05.40_AM_zdwch8.png",
        img2: "https://res.cloudinary.com/mangud/image/upload/v1724685369/mariselaShopClient/Screen_Shot_2024-08-26_at_11.15.58_AM_enynii.png",
      },
    ],
    ordersArr: [
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
      {
        id: 1,
        productId: 2,
        productName: "product name",
        type: "print",
        cost: "$100.00",
        nameOfClient: "Manuel Hinojosa",
        email: "email@email.com",
        adress: "this is the Address",
        date: "this is the date",
      },
    ],
  },
  reducers: {},
});

export default productsStateSlice.reducer;
