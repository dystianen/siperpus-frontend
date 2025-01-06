import colors from "@/config/colors";
import Marquee from "react-fast-marquee";
import { Container, Flex, Text } from "@mantine/core";

const Teams = () => {
  const listTeam1 = "Dystian En Yusgiantoro - Kevin Morientes Sinaga,";
  const listTeam2 = "Alfanoel Audrey - Dystian En Yusgiantoro.";
  return (
    <Container size={"xl"}>
      <Flex
        justify={"center"}
        direction={"column"}
        h={{ base: "100vh", xl: 600 }}
      >
        <Text fw={600} fz={32} c={colors.neutral[0]} ta={"center"}>
          Teams
        </Text>
        <Marquee gradient gradientColor="black">
          <Text
            fz={{ base: 50, lg: 120 }}
            mr={50}
            className="bebas-neue-regular"
          >
            {listTeam1}
          </Text>
        </Marquee>
        <Marquee gradient gradientColor="black" direction="right">
          <Text
            fz={{ base: 50, lg: 120 }}
            mr={50}
            className="bebas-neue-regular"
          >
            {listTeam2}
          </Text>
        </Marquee>
      </Flex>
    </Container>
  );
};

export default Teams;
