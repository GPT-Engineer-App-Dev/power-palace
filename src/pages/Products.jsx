import { useState } from "react";
import { Input, InputGroup, InputLeftElement, Box, Image, SimpleGrid, Text, Link } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", image: "/images/laptop.jpg", description: "High performance laptop" },
  { id: 2, name: "Smartphone", image: "/images/smartphone.jpg", description: "Latest model smartphone" },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", description: "Noise-cancelling headphones" }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery)
  );

  return (
    <Box p={4}>
      <InputGroup mb={4}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={8}>
        {filteredProducts.map(product => (
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