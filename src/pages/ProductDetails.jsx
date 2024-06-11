import { useParams } from "react-router-dom";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

const products = [
  { id: 1, name: "Laptop", image: "/images/laptop.jpg", description: "High performance laptop", details: "This laptop features a high-performance CPU, plenty of RAM, and a fast SSD. Perfect for all your computing needs." },
  { id: 2, name: "Smartphone", image: "/images/smartphone.jpg", description: "Latest model smartphone", details: "This smartphone comes with the latest features, including a high-resolution camera, fast processor, and long-lasting battery." },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", description: "Noise-cancelling headphones", details: "Experience the best sound quality with these noise-cancelling headphones, perfect for music lovers and audiophiles." }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <Heading mt={4}>{product.name}</Heading>
      <Text mt={4}>{product.description}</Text>
      <Text mt={4}>{product.details}</Text>
    </Box>
  );
};

export default ProductDetails;