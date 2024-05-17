"use client";
import { Box, Text } from "@mantine/core";
import ParticleAbsolute from "../ParticleAbsolute";
import { useMediaQueryFromBreakpoints } from "@/hooks/useMediaQueryFromBreakpoints";
import { motion } from "framer-motion";

const Motivations = () => {
  const isMobile = useMediaQueryFromBreakpoints();
  return (
    <Box pos={"relative"} my={100}>
      <Box
        pos={"relative"}
        style={{
          zIndex: 2,
        }}
      >
        <Text fw={600} fz={32} c={"neutral.3"} ta={"center"}>
          Motivations
        </Text>

        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Text
            fz={{ base: 40, md: 80 }}
            ta={"center"}
            c={"success.9"}
            lh={{ base: "50px", md: "120px" }}
            style={{
              zIndex: 2,
            }}
          >
            &quot;Today a <span style={{ fontWeight: 700 }}>Reader</span>,{" "}
            <br /> tomorrow a <span style={{ fontWeight: 700 }}>Leader</span>
            .&quot; 
          </Text>
        </motion.div>
      </Box>

      {!isMobile && (
        <>
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
            position={{ top: 10, right: 0 }}
          />
        </>
      )}
    </Box>
  );
};

export default Motivations;
