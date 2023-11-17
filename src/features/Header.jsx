import bubbleImg from "@/assets/images/bubble.png";
import flagENImg from "@/assets/images/flag-en.png";
import logoImg from "@/assets/images/logo-d.png";
import { Flex, HStack, Image, Link } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justify={"space-between"} px={12}>
      <Image src={logoImg} h={12} />
      <HStack spacing={3}>
        <Image src={bubbleImg} h={12} />
        <Link
          href="mailto:marcin_5@mail.ru?subject=Contacting you from your portfolio"
          fontSize="lg"
          fontWeight={800}
        >
          Hire me
        </Link>
        <Image src={flagENImg} h={8} pl={20} cursor="pointer" />
      </HStack>
    </Flex>
  );
}
