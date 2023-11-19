import { HStack, Icon, Link } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
export function Footer() {
  return (
    <HStack justify="center" h={130} bg="secondary" spacing={5}>
      <Link href="https://github.com/marcin-5" isExternal>
        <Icon as={BsGithub} w={8} h={8} color="white" />
      </Link>
      <Link href="https://www.linkedin.com/in/marcin-bojara-142857e" isExternal>
        <Icon borderRadius={5} as={BsLinkedin} w={8} h={8} color="#0075b5" bg="white" />
      </Link>
    </HStack>
  );
}
