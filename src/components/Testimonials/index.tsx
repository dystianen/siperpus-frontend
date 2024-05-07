import { Box, Group, Stack, Text } from "@mantine/core";
import ParticleAbsolute from "../ParticleAbsolute";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { useGetReviewsQuery } from "@/redux/slice/books.api";

const Testimonials = () => {
  const { data: reviews } = useGetReviewsQuery();
  console.log("🚀 ~ Testimonials ~ reviews:", reviews);
  return (
    <Box pos={"relative"}>
      <ParticleAbsolute
        src="/particle4.png"
        w={200}
        h={200}
        position={{ top: -100, left: -50 }}
      />

      <Text fw={600} fz={48} c={"primary.1"} ta={"center"}>
        Testimonials
      </Text>

      <Carousel withIndicators withControls={false} loop align={"center"} mt={32}>
        {reviews?.map((it, index) => (
          <>
            {it.review !== "" && (
              <Carousel.Slide key={index}>
                <Group wrap={"nowrap"}>
                  <Image
                    src={"/fikri.png"}
                    width={412}
                    height={309}
                    alt="testimoni"
                  />

                  <Stack gap={0} ml={32}>
                    <Text c={"primary.1"} fz={40}>
                      &quot;{it.review}&quot; 
                    </Text>
                    <Group>
                      <Image
                        src={"/star.svg"}
                        width={41}
                        height={42}
                        alt="star"
                      />
                      <Text fw={600} fz={32}>
                        {it.rating}/5
                      </Text>
                    </Group>
                  </Stack>
                </Group>
              </Carousel.Slide>
            )}
          </>
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
