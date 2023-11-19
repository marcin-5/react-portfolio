import { Header } from "@/features/Header";
import { Landing } from "@/features/Landing";
import { LatestProjects } from "@/features/LatestProjects";
import { Box } from "@chakra-ui/react";

export function App() {
  return (
    <Box p={20}>
      <Header />
      <Landing />
      <LatestProjects />
    </Box>
  );
}
