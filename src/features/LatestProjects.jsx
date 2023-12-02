import { ProjectsAPI } from "@/api/projects";
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import { Badge, Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const LatestProjects = () => {
  const [projects, setProjects] = useState();
  const { t, i18n } = useTranslation("home");

  async function fetchAll() {
    const projectsResponse = await ProjectsAPI.fetchAll();
    setProjects(projectsResponse);
  }
  useEffect(() => {
    fetchAll();
  }, []);

  const renderProject = ({ id, desc, images, technologies, title }) => {
    return (
      <WrapItem key={id} flexDir={"column"}>
        <ImageSlider imageList={images.map((img) => img.downloadURL)} />
        <Heading size="md" color="secondary" mt={3}>
          <Box
            display={"inline-block"}
            bg={"primary.dark"}
            w={25}
            h={1}
            mr={3}
            verticalAlign={"middle"}
          />
          {title}
        </Heading>
        <Text>{desc[i18n.language]}</Text>
        <Wrap mt={"2"} maxWidth={350}>
          {technologies.map((tech, i) => (
            <WrapItem key={i}>
              <Badge w={111} px={3} py={1} bg={tech} color={"white"} borderRadius={3}>
                {tech}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </WrapItem>
    );
  };
  return (
    <Flex direction={"column"} w="100%">
      <Heading>{t("latestProjects")}</Heading>
      <Wrap mt={10} spacing={16}>
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
};
