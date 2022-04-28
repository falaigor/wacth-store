import { useState, useEffect } from "react";
import Head from "next/head";
import {
  Center,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useCartStore } from "../../store/cart";

export default function Home() {
  const { products, error } = useFetchProducts();
  const [term, setTerm] = useState("");
  const [localProducts, setLocalProducts] = useState([]);
  const addToCart = useCartStore((store) => store.actions.add);

  useEffect(() => {
    if (term === "") setLocalProducts(products);

    setLocalProducts(
      products.filter(({ title }) => {
        return title.toLowerCase().indexOf(term.toLowerCase()) > -1;
      })
    );
  }, [products, term]);

  const renderErrorMessage = () => {
    if (!error) return null;

    return <Text data-testid="server-error">Server is down</Text>;
  };

  const renderProductListOrMessage = () => {
    if (localProducts.length === 0 && !error) {
      return <Text data-testid="no-products">No Products</Text>;
    }

    return localProducts.map((product) => (
      <ProductCard product={product} key={product.id} addToCart={addToCart} />
    ));
  };

  const renderProductQuantity = () => {
    return localProducts.length === 1
      ? "1 Product"
      : `${localProducts.length} Products`;
  };

  return (
    <main data-testid="product-list">
      <Head>
        <title>Watch Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header doSearch={(term) => setTerm(term)} />

      <VStack alignItems="center" justifyContent="center">
        <Container paddingY={10}>
          <Center>
            <Heading>Trending</Heading>
          </Center>
          <Center>
            <Text color="gray.400">{renderProductQuantity()}</Text>
          </Center>
        </Container>

        <Container maxWidth="container.xl">
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            {renderErrorMessage()}
            {renderProductListOrMessage()}
          </Grid>
        </Container>
      </VStack>

      <Footer />
    </main>
  );
}
