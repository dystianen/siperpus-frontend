import { Box, Text } from "@mantine/core";
import ParticleAbsolute from "../ParticleAbsolute";

const Motivations = () => {
  return (
    <Box pos={"relative"} my={100}>
      <ParticleAbsolute
        src="/particle2.png"
        w={200}
        h={200}
        position={{ top: 10, left: -100 }}
      />
      <ParticleAbsolute
        src="/particle3.png"
        w={200}
        h={170}
        position={{ top: 10, right: -60 }}
      />

      <Box style={{ zIndex: 999 }}>
        <Text fw={600} fz={40} c={"primary.1"} ta={"center"}>
          Motivations
        </Text>

        <Text
          fz={{ base: 50, md: 80 }}
          ta={"center"}
          c={"primary.0"}
          lh={{ base: "50px", md: "120px" }}
        >
          &quot;Today a <span style={{ fontWeight: 700 }}>Reader</span>, <br />{" "}
          tomorrow a <span style={{ fontWeight: 700 }}>Leader</span>
          .&quot; 
        </Text>
      </Box>
    </Box>
  );
};

export default Motivations;