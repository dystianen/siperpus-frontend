"use client";
import CardBook from "@/components/CardBook";
import EmptyState from "@/components/EmptyState";
import RenderBooks from "@/components/Rendering/RenderBooks";
import { useGetCollectionFavoriteBooksQuery } from "@/redux/slice/books.api";
import { Container, Grid, Text } from "@mantine/core";

const FavoriteBooks = () => {
  const {
    data: collections,
    isSuccess,
    isFetching,
  } = useGetCollectionFavoriteBooksQuery();

  return (
    <Container size={"lg"}>
      <Text fw={600} fz={32} mb={24} c={"neutral.3"}>
        Favorite Books
      </Text>

      <RenderBooks isFetching={isFetching}>
        {isSuccess && collections!.length > 0 ? (
          <Grid>
            {collections?.map((it, index) => (
              <Grid.Col key={index} span={{ base: 6, md: 4, lg: 3 }}>
                <CardBook item={it} />
              </Grid.Col>
            ))}
          </Grid>
        ) : (
          <EmptyState />
        )}
      </RenderBooks>
    </Container>
  );
};

export default FavoriteBooks;
