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
      mih={{ base: "90vh", xl: "80vh" }}
    >
      <Stack align="center">
        <Text
          fz={{ base: 50, md: 100 }}
          lh={{ base: "60px", md: "150px" }}
          ta={"center"}
          lts={{ base: 10, lg: 20 }}
          fw={600}
          className="bebas-neue-regular"
        >
          Let’s Improve Yourself <br /> by Reading
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
