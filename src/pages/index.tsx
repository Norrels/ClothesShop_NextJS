import Image from "next/future/image";
import { useKeenSlider } from "keen-slider/react";
import { Handbag } from "phosphor-react";
import { HomeContainer, Product } from "../styles/pages/home";
import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { CartButton } from "../styles/components/cartButton";
import { ProductsProps } from "../contexts/CartContext";
import { useCart } from "../hooks/useCart";
import { MouseEvent } from "react";

export interface HomeProps {
  products: ProductsProps[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { addToCart, checkeIfProductIsInCart } = useCart();

  function handleAddProductToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: ProductsProps
  ) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width={520} height={480} />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <CartButton
                    color={"green"}
                    title={
                      checkeIfProductIsInCart(product.id)
                        ? "Produto já adicionado"
                        : "Adicionar produto"
                    }
                    disabled={checkeIfProductIsInCart(product.id)}
                    onClick={(e) => handleAddProductToCart(e, product)}
                  >
                    <Handbag color="#fff" size={25} weight={"regular"} />
                  </CartButton>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id
    };
  });

  return {
    props: {
      products,
    },
    revalidate: (60 * 60) / 2, // 2 hours
  };
};
