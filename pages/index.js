import SetHead from "../components/head/index";
import Footer from "../components/footer/index";
import Product from "../components/Product/index";

const DUMMY_MEETUPS = [
  {
    product_id: 1,
    product_name: "Neutrogena Alcohol-Free Toner",
    image_path: "https://www.jeban.com/userfiles/uploads/2017/06/img_4017-.jpg",
    price: 472,
  },
  {
    product_id: 2,
    product_name: "Thayers Witch Hazel Alcohol Free Toner (Unscented)",
    image_path: "https://cf.shopee.co.th/file/5415450021f20f2b2d06d90cf997818f",
    price: 549,
  },
  {
    product_id: 3,
    product_name: "Some By Mi AHA-BHA-PHA 30 Days Miracle Toner",
    image_path: "https://cf.shopee.co.th/file/93d0fddf2820e93e9b66002ded974da6",
    price: 662,
  },
  {
    product_id: 4,

    product_name: "Eucerin DermatoClean Clarifying Toner",
    image_path: "https://cf.shopee.co.th/file/4cd452f33b74f883154528ea82439f49",
    price: 700,
  },
  {
    product_id: 5,

    product_name: "Pixi Glow Tonic Exfoliating Toner",
    image_path:
      "http://cdn.shopify.com/s/files/1/1463/5858/products/250mL-GLow-Tonic_grande.jpg?v=1605823445",
    price: 552,
  },
  {
    product_id: 6,

    product_name: "ZA True White Ex Essence Lotion N",
    image_path:
      "https://s1.konvy.com/static/experience/2019/1026/15720782622185.jpg",
    price: 349,
  },
  {
    product_id: 7,

    product_name: "Olay White Radiance Super Serum",
    image_path: "https://pbs.twimg.com/media/ErxG7zsUYAADEZw.jpg:large",

    price: 445,
  },
  {
    product_id: 8,

    product_name: "Sulwhasoo Essential Balancing Water",
    image_path: "https://cf.shopee.co.th/file/b9982147c5205e179047da38e6202789",
    price: 948,
  },
  {
    product_id: 9,

    product_name: "Origins Mega-Mushroom Lotion",
    image_path:
      "https://m.origins.co.th/media/export/cms/products/1000x1000/origins_sku_0PX901_1000x1000_2.jpg",
    price: 343,
  },
  {
    product_id: 10,
    product_name: "SK-II Facial Treatment Essence",
    image_path:
      "https://th-test-11.slatic.net/shop/bcec524030ccd4e61ff965164beca276.jpeg",
    price: 645,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Product data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS,
    },
  };
}
