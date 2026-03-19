import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "Forest Haven",
    maxCapacity: 2,
    regularPrice: 220,
    discount: 0,
    image: imageUrl + "cabin-forest-haven.jpg",
    description:
      "A cozy retreat for couples, Forest Haven offers rustic charm with modern comforts. Enjoy a queen-size bed, a fireplace, and a private deck overlooking the woods.",
  },
  {
    name: "Lakeside Retreat",
    maxCapacity: 4,
    regularPrice: 340,
    discount: 40,
    image: imageUrl + "cabin-lakeside-retreat.jpg",
    description:
      "Nestled by the lake, this cabin is perfect for small families. Features include two bedrooms, a full kitchen, and a deck with stunning water views.",
  },
  {
    name: "Mountain View Lodge",
    maxCapacity: 6,
    regularPrice: 480,
    discount: 60,
    image: imageUrl + "cabin-mountain-view.jpg",
    description:
      "Spacious and inviting, Mountain View Lodge accommodates up to six guests. Enjoy panoramic views, a large living area, and a hot tub on the deck.",
  },
  {
    name: "Riverside Cabin",
    maxCapacity: 3,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "cabin-riverside.jpg",
    description:
      "A charming riverside cabin with one bedroom and a loft. Perfect for couples or small groups who love fishing and the sound of flowing water.",
  },
  {
    name: "Cedarwood Chalet",
    maxCapacity: 8,
    regularPrice: 650,
    discount: 100,
    image: imageUrl + "cabin-cedarwood.jpg",
    description:
      "Designed for larger groups, Cedarwood Chalet offers four bedrooms, a gourmet kitchen, and a spacious deck with outdoor seating and a fire pit.",
  },
  {
    name: "Pinecone Cottage",
    maxCapacity: 2,
    regularPrice: 200,
    discount: 20,
    image: imageUrl + "cabin-pinecone.jpg",
    description:
      "A romantic hideaway with rustic interiors, Pinecone Cottage is ideal for couples. Features include a king-size bed, spa shower, and private garden patio.",
  },
  {
    name: "Summit Lodge",
    maxCapacity: 10,
    regularPrice: 1200,
    discount: 150,
    image: imageUrl + "cabin-summit.jpg",
    description:
      "The ultimate cabin for large families or groups. Summit Lodge boasts multiple living areas, five bedrooms, and breathtaking mountain views from every window.",
  },
  {
    name: "Birchwood Escape",
    maxCapacity: 5,
    regularPrice: 400,
    discount: 50,
    image: imageUrl + "cabin-birchwood.jpg",
    description:
      "A mid-sized cabin surrounded by birch trees. Includes three bedrooms, a cozy fireplace, and a deck with a hot tub for relaxing evenings.",
  },
];
