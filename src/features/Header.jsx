import flagENImg from "@/assets/images/flag-en.png";
import hashImg from "@/assets/images/hash.png";
import logoImg from "@/assets/images/logo-d.png";
import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation("home");
  return (
    <Flex justify={"space-between"} px={{ base: 0, md: 12, xl: 36 }}>
      <Image src={logoImg} h={14} />
      <HStack>
        <Link
          display="flex"
          href="mailto:marcin_5@mail.ru?subject=Contacting you from your portfolio"
          fontSize="lg"
          fontWeight={800}
        >
          <Image src={hashImg} h={8} mr={3} />
          {t("otw")}
        </Link>
        <Image src={flagENImg} h={8} pl={{ base: 5, md: 10, xl: 20 }} cursor="pointer" />
      </HStack>
    </Flex>
  );
}
