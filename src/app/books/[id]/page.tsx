"use client";
import { embedImage } from "@/helper/embedImage";
import {
  useGetCollectionFavoriteBooksQuery,
  useGetDetailBookQuery,
  usePostAddFavoriteMutation,
} from "@/redux/slice/books.api";
import { Button, Container, Grid, Group, Stack, Text } from "@mantine/core";
import { useParams } from "next/navigation";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { useCheckLoggedIn } from "@/hooks/useCheckLoggedIn";
import { useSetAtom } from "jotai";
import { openedPopupLogin } from "@/config/GlobalState";
import { toast } from "react-toastify";
import Image from "next/image";
import RenderDetailBook from "@/components/Rendering/RenderDetailBook";

const DetailBook = () => {
  const isLoggedIn = useCheckLoggedIn();
  const setOpenPopupLogin = useSetAtom(openedPopupLogin);
  const { id } = useParams();
  const { data: detail, isFetching } = useGetDetailBookQuery(id as string);
  const { data: favorite } = useGetCollectionFavoriteBooksQuery();
  const [postFavorite, resSaveFavorite] = usePostAddFavoriteMutation();

  const bookData = [
    {
      key: "Category",
      value: detail?.category_name,
    },
    {
      key: "Writer",
      value: detail?.writer,
    },
    {
      key: "Publisher",
      value: detail?.publisher,
    },
    {
      key: "Year Publication",
      value: detail?.year_publication,
    },
  ];

  const handleSavetoFavorite = (book_id: string) => {
    if (isLoggedIn) {
      postFavorite(book_id)
        .unwrap()
        .then(() => {
          toast("Save to favorite successfully.");
        });
    } else {
      setOpenPopupLogin(true);
    }
  };

  return (
    <Container size={"lg"}>
      <Text fw={600} fz={40} c={"neutral.8"}>
        Detail Book
      </Text>
      <RenderDetailBook isFetching={isFetching}>
        {detail && (
          <Group gap={"xl"} align="start" wrap="nowrap" mt={20}>
            <Image
              src={embedImage(detail.thumbnail)}
              width={400}
              height={450}
              alt="book"
            />

            <Stack>
              <Text fw={600} fz={32} c={"success.9"}>
                {detail.title}
              </Text>
              {bookData.map((it, index) => (
                <Grid key={index}>
                  <Grid.Col span={3}>
                    <Text>{it.key}</Text>
                  </Grid.Col>
                  <Grid.Col span={9}>
                    <Text>: {it.value}</Text>
                  </Grid.Col>
                </Grid>
              ))}
              <Text fw={600} fz={25} c={"neutral.8"}>
                Synopsis
              </Text>
              <Text
                c={"neutral.8"}
                dangerouslySetInnerHTML={{ __html: detail.synopsis }}
              />

              <Group>
                <Button
                  variant="outline"
                  leftSection={<BsBookmarkPlusFill />}
                  color={"success.9"}
                  bg={"white"}
                  disabled={detail.is_save}
                  loading={resSaveFavorite.isLoading}
                  onClick={() => handleSavetoFavorite(detail.book_id)}
                >
                  Save to Favorite
                </Button>
                <Button leftSection={<FaPlus />} bg={"success.9"}>
                  Borrow
                </Button>
              </Group>
            </Stack>
          </Group>
        )}
      </RenderDetailBook>
    </Container>
  );
};

export default DetailBook;
