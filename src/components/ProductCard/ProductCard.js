import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

export const ProductCard = ({ product }) => {
  return (
    <Flex
      data-testid="product-card"
      flexDirection="column"
      backgroundColor="gray.50"
      padding={5}
      borderRadius={4}
    >
      <Image
        src={product.image}
        data-testid="image"
        alt="Rolex"
        width="250px"
        height="250px"
      />
      <Text fontSize="lg" fontWeight="500" marginTop="10px">
        {product.title}
      </Text>
      <Text color="#78C752" fontWeight="600">
        ${product.price}
      </Text>

      <Button onClick={() => addToCart(product)} marginTop={5}>
        <FiShoppingCart style={{ marginRight: "10px" }} />
        Add to cart
      </Button>
    </Flex>
  );
};
