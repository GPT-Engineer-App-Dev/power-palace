import { Box, Image, SimpleGrid, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", image: "/images/laptop.jpg", description: "High performance laptop" },
  { id: 2, name: "Smartphone", image: "/images/smartphone.jpg", description: "Latest model smartphone" },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", description: "Noise-cancelling headphones" }
];

const Products = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={8}>
        {products.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Text fontSize="xl" fontWeight="bold">
                {product.name}
              </Text>
              <Text mt={4}>{product.description}</Text>
              <Link as={RouterLink} to={`/products/${product.id}`} color="blue.500" mt={4} display="block">
                View Details
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;