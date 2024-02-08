import { Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CategoryCard } from "./CategoryCard";

export const EventCard = ({ event }) => {
  const date = event.startTime.split("T")[0];
  const start = event.startTime.split("T")[1].slice(0, 5);
  const end = event.endTime.split("T")[1].slice(0, 5);

  return (
    <Card 
      variant="filled" 
      paddingBottom={4} 
      align="center"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      maxWidth="200px"
      maxHeight="400px"
      height="100%"
      mt={8}
      mb={8}

      _hover={{
        opacity: 0.9,
        transform: "rotate(5deg)",
        filter: "auto",
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
        bg: 'gray.100' // Zmiana koloru tła przy najechaniu
      }}
    >
      <Image
        src={event.image}
        alt={event.title}
        boxSize="xs"
        maxHeight="150px"
        borderTopRadius={6}
        transition="transform 0.3s ease"
        _hover={{ transform: 'scale(1.1)' }} // Zwiększenie obrazu przy najechaniu
      />
      <Heading padding={2} fontSize="lg">{event.title}</Heading>
      <Flex maxWidth="xs" wrap="wrap">
        <Text fontSize="xs" align="center" transition="color 0.3s ease" _hover={{ color: 'blue.500' }}>{event.description}</Text> {/* Zmiana koloru tekstu przy najechaniu */}
      </Flex>

      <br />
      <p style={{ fontSize: "10px" }}>📅 {date}</p>
      <p style={{ fontSize: "10px" }}>
        🕑 {start} - {end}
      </p> 
      <br /> 🎯 click me
      <CategoryCard event={event} />
    </Card>
  );
};
