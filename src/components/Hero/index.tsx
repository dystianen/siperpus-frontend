"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import ParticleAbsolute from "../ParticleAbsolute";
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
            c={"success.9"}
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
            color="success.9"
            bg={"white"}
          >
            Explore Books Now
          </Button>
          <Card radius={"md"}>
            <Group justify="space-between">
              <Group gap={"xs"}>
                <Image
                  src={"/star.svg"}
                  w={{ base: 20, md: 35 }}
                  h={{ base: 20, md: 35 }}
                  alt="star"
                />
                <Text fw={600} fz={{ base: 16, md: 24 }} c={"neutral.8"}>
                  100K Users
                </Text>
              </Group>

              <Avatar.Group>
                {Array.from({ length: 4 }).map((_, index) => (
                  <Avatar key={index} fz={{ base: "sm", md: "lg" }} />
                ))}
                <Avatar fz={{ base: "sm", md: "lg" }}>5+</Avatar>
              </Avatar.Group>
            </Group>
          </Card>
        </Stack>

        <Image
          src={"/psm.png"}
          w={{ base: 370, xl: 550 }}
          h={{ base: 400, xl: 650 }}
          alt="psm"
          style={{
            zIndex: 2,
          }}
        />
      </Flex>
    </Box>
  );
};

export default Hero;
