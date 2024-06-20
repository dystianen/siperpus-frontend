import colors from "@/config/colors";
import Marquee from "react-fast-marquee";
import { Flex, Text } from "@mantine/core";

const Teams = () => {
  const listTeam1 = "Dystian En Yusgiantoro - Annisa,";
  const listTeam2 = "Dirga utama sidalle - Bentar Revikasha.";
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      h={{ base: "100vh", xl: 600 }}
    >
      <Text fw={600} fz={32} c={colors.neutral[0]} ta={"center"}>
        Teams
      </Text>
      <Marquee>
        <Text fz={{ base: 50, lg: 100 }} mr={50} className="bebas-neue-regular">
          {listTeam1}
        </Text>
      </Marquee>
      <Marquee direction="right">
        <Text fz={{ base: 50, lg: 100 }} mr={50} className="bebas-neue-regular">
          {listTeam2}
        </Text>
      </Marquee>
    </Flex>
  );
};

export default Teams;
