import { Badge, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";

export function Landing() {
  const leftSection = (
    <Box align="center" color="secondary">
      <Heading fontSize={{ base: "2xl", md: "4xl", xl: "6xl" }} my={2}>
        Hi, my name
        <br /> is Marcin.
      </Heading>
      <Text fontSize={{ base: "lg", xl: "xl" }} fontWeight={600}>
        I am a developer <br /> located in Poland.
      </Text>
    </Box>
  );
  const rightSection = (
    <Box mt={{ base: 20, md: 0 }}>
      <Flex justify="flex-end">
        <Badge bg="primary.light" borderRadius={7} p={3} textAlign="ceter">
          <Text p={3}>Ready to learn</Text>
        </Badge>
      </Flex>
      <Image src={humanImg} w={400} />
    </Box>
  );

  return (
    <Flex
      justify="space-evenly"
      direction={{ base: "column", md: "row" }}
      mt={{ base: 50, md: 150 }}
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
}
