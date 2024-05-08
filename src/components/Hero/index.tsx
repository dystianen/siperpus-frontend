import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import ParticleAbsolute from "../ParticleAbsolute";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  const router = useRouter();

  return (
    <Box>
      <ParticleAbsolute
        src="/particle1.png"
        w={200}
        h={150}
        position={{ top: 100, left: 0 }}
      />
      <Flex
        justify={"space-between"}
        align={"center"}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack>
          <Text
            fz={{ base: 50, md: 80 }}
            c={"primary.0"}
            lh={{ base: "60px", md: "100px" }}
          >
            Let’s <span style={{ fontWeight: 700 }}>Improve</span> <br />{" "}
            Yourself by <br /> <span style={{ fontWeight: 700 }}>Reading</span>
          </Text>
          <Button
            size="lg"
            radius={"lg"}
            w={"max-content"}
            onClick={() => router.push("/books")}
            rightSection={<FaArrowRight />}
            variant="outline"
            color="primary.0"
            bg={"white"}
          >
            Explore Books Now
          </Button>
          <Card radius={"md"}>
            <Group justify="space-between">
              <Group>
                <Image src={"/star.svg"} width={50} height={50} alt="star" />
                <Text fw={600} fz={28} c={"primary.1"}>
                  100K Users
                </Text>
              </Group>

              <Avatar.Group>
                <Avatar size={"lg"} />
                <Avatar size={"lg"} />
                <Avatar size={"lg"} />
                <Avatar size={"lg"} />
                <Avatar size={"lg"}>5+</Avatar>
              </Avatar.Group>
            </Group>
          </Card>
        </Stack>

        <Image src={"/psm.png"} width={450} height={650} alt="psm" />
      </Flex>
    </Box>
  );
};

export default Hero;
