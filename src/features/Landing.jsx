import humanImg from "@/assets/images/human.png";
import { Badge, Box, Flex, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const SKILLS = [
  { label: "React" },
  { label: "Redux" },
  { label: "ES6" },
  { label: "TypeScript" },
  { label: "Node.js" },
  { label: "HTML" },
  { label: "CSS" },
  { label: "Bootstrap" },
  { label: "Vercel" },
  { label: "ChakraUI" },
  { label: "Firebase" },
];

export function Landing() {
  const { t } = useTranslation("home");
  const leftSection = (
    <Box align="center" color="secondary">
      <Heading fontSize={{ base: "2xl", md: "4xl", xl: "6xl" }} my={2} whiteSpace="pre-line">
        {t("greetings")}
      </Heading>
      <Text fontSize={{ base: "lg", xl: "xl" }} fontWeight={600}>
        {t("iAmDev")} <br /> {t("location")}
      </Text>
      <Wrap mt={"14"}>
        {SKILLS.map((skill) => (
          <WrapItem key={skill.label}>
            <Badge w={130} px={3} py={3} bg={skill.label} color={"white"} borderRadius={3}>
              {skill.label}
            </Badge>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
  const rightSection = (
    <Box mt={{ base: 20, md: 0 }}>
      <Flex justify="flex-end">
        <Badge bg="primary.light" borderRadius={7} p={3} textAlign="ceter">
          <Text p={3}>{t("rtl")}</Text>
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
