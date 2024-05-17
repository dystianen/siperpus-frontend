import { Box, Flex, Group, Stack, Text } from "@mantine/core";
import ParticleAbsolute from "../ParticleAbsolute";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { useGetReviewsQuery } from "@/redux/slice/books.api";

const Testimonials = () => {
  const { data: reviews } = useGetReviewsQuery();

  return (
    <Box pos={"relative"}>
      <ParticleAbsolute
        src="/particle4.png"
        w={200}
        h={200}
        position={{ top: -100, left: -50 }}
      />

      <Text fw={600} fz={32} c={"neutral.3"} ta={"center"}>
        Testimonials
      </Text>

      <Carousel
        withIndicators
        withControls={false}
        loop
        align={"center"}
        mt={32}
        styles={{
          indicators: {
            bottom: -32
          }
        }}
      >
        {reviews?.map(
          (it, index) =>
            it.review !== "" && (
              <Carousel.Slide key={index}>
                <Flex direction={{ base: "column", lg: "row" }}>
                  <Image
                    src={"/fikri.png"}
                    width={412}
                    height={309}
                    alt="testimoni"
                  />

                  <Stack gap={0} ml={32}>
                    <Text c={"neutral.5"} fz={24}>
                      &quot;{it.review}&quot; 
                    </Text>
                    <Group align="center" gap={4}>
                      <Image
                        src={"/star.svg"}
                        width={30}
                        height={30}
                        alt="star"
                      />
                      <Text fw={600} fz={24} c={"neutral.5"}>
                        {it.rating}/5
                      </Text>
                    </Group>
                  </Stack>
                </Flex>
              </Carousel.Slide>
            )
        )}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
