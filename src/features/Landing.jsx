import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
    <>
      <Image src={humanImg} w={400} />
    </>
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
