import { Box, Container, VStack, Text, Heading, Image, Button, SimpleGrid, Link, Flex, Spacer, HStack, Input, InputGroup, InputRightElement, IconButton, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
const [category, setCategory] = useState("");
const [priceRange, setPriceRange] = useState([0, 1000]);
const [rating, setRating] = useState(0);

  const handleSearch = () => {
    // Implement the search functionality here
    console.log("Searching for:", searchQuery);
};

const handleFilter = () => {
    // Implement the filtering functionality here
    console.log("Filtering products with:", { category, priceRange, rating });
};

  return (
    <Box>
      {/* Navigation Bar */}
      <Box bg="blue.800" color="white" px={4} py={2}>
        <Flex alignItems="center">
          <Heading size="md">ElectroShop</Heading>
          <InputGroup size="md" maxW="300px" mr={4}>
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                h="1.75rem"
                size="sm"
                onClick={handleSearch}
                icon={<FaSearch />}
                aria-label="Search"
              />
            </InputRightElement>
          </InputGroup>
          <Spacer />
          <HStack spacing={4}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/products">Products</Link>
            <Link as={RouterLink} to="/about">About Us</Link>
            <Link as={RouterLink} to="/contact">Contact Us</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.100" py={10} textAlign="center">
        <Container maxW="container.lg">
          <Heading mb={4}>Welcome to ElectroShop</Heading>
          <Text mb={6}>Your one-stop shop for the latest electronics</Text>
          <Button colorScheme="blue" size="lg">Shop Now</Button>
        </Container>
      </Box>

      {/* Filter Products */}
      <Box py={10}>
        <Container maxW="container.lg">
          <Heading mb={6} textAlign="center">Filter Products</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10} mb={6}>
            <Box>
              <Text mb={2}>Category</Text>
              <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
              </Select>
            </Box>
            <Box>
              <Text mb={2}>Price Range</Text>
              <Slider aria-label="price-range" defaultValue={1000} min={0} max={1000} step={50} onChangeEnd={(val) => setPriceRange([0, val])}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text mt={2}>Up to ${priceRange[1]}</Text>
            </Box>
            <Box>
              <Text mb={2}>Rating</Text>
              <Select placeholder="Select rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="1">1 Star & Up</option>
                <option value="2">2 Stars & Up</option>
                <option value="3">3 Stars & Up</option>
                <option value="4">4 Stars & Up</option>
                <option value="5">5 Stars</option>
              </Select>
            </Box>
          </SimpleGrid>
          <Button colorScheme="blue" onClick={handleFilter}>Apply Filters</Button>
        </Container>
      </Box>

      {/* Featured Products */}
      <Box py={10}>
        <Container maxW="container.lg">
          <Heading mb={6} textAlign="center">Featured Products</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 1</Heading>
                <Text mb={4}>Description of Product 1</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 2</Heading>
                <Text mb={4}>Description of Product 2</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 3</Heading>
                <Text mb={4}>Description of Product 3</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
              <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
              <Link href="https://instagram.com" isExternal><FaInstagram /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;