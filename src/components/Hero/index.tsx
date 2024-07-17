"use client";
import { Button, Flex, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  const router = useRouter();

  return (
    <Flex
      justify={"center"}
      align={"center"}
      pos={"relative"}
      style={{ zIndex: 1 }}
      mih={"90vh"}
    >
      <Stack align="center">
        <Text
          fz={{ base: 50, md: 200 }}
          lh={{ base: 2, md: 0.9 }}
          ta={"center"}
          lts={{ base: 10, lg: 20 }}
          fw={600}
          className="bebas-neue-regular"
        >
          Let’s Improve Yourself
        </Text>
        <Button
          size="lg"
          radius={"lg"}
          w={"max-content"}
          onClick={() => router.push("/books")}
          rightSection={<FaArrowRight />}
          variant="outline"
          color={"white"}
        >
          Explore Books Now
        </Button>
      </Stack>
    </Flex>
  );
};

export default Hero;
