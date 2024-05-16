"use client";
import { embedImage } from "@/helper/embedImage";
import { useMediaQueryFromBreakpoints } from "@/hooks/useMediaQueryFromBreakpoints";
import { bookTypes } from "@/types/books";
import { Group, Stack, Text, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CardBook = ({ item }: { item: bookTypes }) => {
  const router = useRouter();
  const isMobile = useMediaQueryFromBreakpoints();

  const renderProps = isMobile
    ? {
        w: 180,
        h: 268,
      }
    : {
        w: 200,
        h: 275,
      };

  return (
    <UnstyledButton onClick={() => router.push(`/books/${item.book_id}`)}>
      <Stack gap={3} align="center" justify="center">
        <Image
          src={embedImage(item.thumbnail)}
          width={renderProps.w}
          height={renderProps.h}
          alt="book"
          style={{
            borderRadius: 10,
          }}
        />
        <Text ta={"center"} fw={600} lineClamp={1} px={16}>
          {item.title}
        </Text>
        <Group justify="center" align="center" gap={3}>
          <Image src={"/star.svg"} width={24} height={24} alt="star" />
          <Text>{item.rating}/5</Text>
        </Group>
      </Stack>
    </UnstyledButton>
  );
};

export default CardBook;
