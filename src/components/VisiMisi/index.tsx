import { Box, Card, SimpleGrid, Stack, Text } from "@mantine/core";
import React from "react";
import { GiGate } from "react-icons/gi";
import { FaBookReader, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const styleIcon = {
  fontSize: "5rem",
  color: "#0b131d",
};

const VisiMisi = () => {
  const data = [
    {
      icon: <GiGate style={styleIcon} />,
      text: "Menjadi gerbang ilmu pengetahuan dan pusat informasi bagi masyarakat.",
    },
    {
      icon: <FaBookReader style={styleIcon} />,
      text: "Meningkatkan minat baca dan budaya literasi di masyarakat.",
    },
    {
      icon: <FaUsers style={styleIcon} />,
      text: "Menjadi mitra strategis dalam mencerdaskan bangsa dan membangun masyarakat yang berpengetahuan.",
    },
  ];

  return (
    <Box>
      <Text fw={600} fz={32} c={"neutral.3"} ta={"center"}>
        Visi & Misi
      </Text>
      <SimpleGrid cols={3} mt={32}>
        {data.map((it, index) => (
          <motion.div
            key={index}
            initial={{
              y: 100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5 * index,
            }}
            viewport={{
              once: true,
            }}
          >
            <Card
              bg={"rgba(255,255,255,.5)"}
              radius={"xl"}
              shadow="xl"
              h={"100%"}
            >
              <Stack align="center">
                {it.icon}
                <Text ta={"center"}>{it.text}</Text>
              </Stack>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default VisiMisi;
