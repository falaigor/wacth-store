import Head from "next/head";
import { Center, Container, Grid, Heading, VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard/ProductCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Watch Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <VStack alignItems="center" justifyContent="center">
        <Container paddingY={10}>
          <Center>
            <Heading>Trending</Heading>
          </Center>
        </Container>

        <Container maxWidth="container.xl">
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Grid>
        </Container>
      </VStack>

      <Footer />
    </div>
  );
}
