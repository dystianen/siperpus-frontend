"use client";
import embedImage from "@/helper/embedImage";
import {
  useGetDetailBookQuery,
  usePostAddFavoriteMutation,
  usePostBorrowedBookMutation,
} from "@/redux/slice/books.api";
import {
  Button,
  Container,
  Grid,
  Group,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { useParams, useRouter } from "next/navigation";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { useCheckLoggedIn } from "@/hooks/useCheckLoggedIn";
import { useSetAtom } from "jotai";
import { openedPopupLogin } from "@/store/GlobalState";
import { toast } from "react-toastify";
import Image from "next/image";
import RenderDetailBook from "@/components/Rendering/RenderDetailBook";
import { useDisclosure } from "@mantine/hooks";
import colors from "@/config/colors";

const DetailBook = () => {
  const isLoggedIn = useCheckLoggedIn();
  const setOpenPopupLogin = useSetAtom(openedPopupLogin);
  const router = useRouter();
  const { id } = useParams();
  const { data: detail, isFetching } = useGetDetailBookQuery(id as string);
  const [postFavorite, resSaveFavorite] = usePostAddFavoriteMutation();
  const [submitBorrow, resSubmitBorrow] = usePostBorrowedBookMutation();
  const [opened, { open, close }] = useDisclosure(false);

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

  const handleBorrowed = () => {
    if (isLoggedIn) {
      submitBorrow(detail?.book_id as string)
        .unwrap()
        .then(() => {
          toast("Borrow book successfully!");
          close();
          router.push("/borrowed");
        });
    } else {
      setOpenPopupLogin(true);
    }
  };

  return (
    <Container size={"lg"} mb={50}>
      <Text fw={600} fz={32} c={colors.neutral[0]}>
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
              style={{
                borderRadius: 10,
              }}
            />

            <Stack>
              <Text fw={600} fz={32} c={colors.primary[0]}>
                {detail.title}
              </Text>
              {bookData.map((it, index) => (
                <Grid key={index}>
                  <Grid.Col span={3}>
                    <Text c={colors.neutral[1]}>{it.key}</Text>
                  </Grid.Col>
                  <Grid.Col span={9}>
                    <Text c={colors.neutral[1]}>: {it.value}</Text>
                  </Grid.Col>
                </Grid>
              ))}
              <Text fw={600} fz={25} c={colors.neutral[0]}>
                Synopsis
              </Text>
              <Text
                c={colors.neutral[1]}
                lineClamp={4}
                dangerouslySetInnerHTML={{ __html: detail.synopsis }}
              />

              <Group>
                <Button
                  variant="outline"
                  leftSection={<BsBookmarkPlusFill />}
                  color={colors.primary[0]}
                  bg={"white"}
                  disabled={detail.is_save}
                  loading={resSaveFavorite.isLoading}
                  onClick={() => handleSavetoFavorite(detail.book_id)}
                >
                  Save to Favorite
                </Button>
                <Button
                  leftSection={<FaPlus />}
                  bg={colors.primary[0]}
                  onClick={open}
                >
                  Borrow
                </Button>
              </Group>
            </Stack>
          </Group>
        )}
      </RenderDetailBook>

      <Modal opened={opened} onClose={close} centered withCloseButton={false}>
        <Text fw={600} fz={24} ta={"center"}>
          Are you sure you want to borrow &quot;{detail?.title}&quot; book?
        </Text>

        <Group my={16} justify="center">
          <Button px={32} color="red" onClick={close}>
            Cancel
          </Button>
          <Button
            px={32}
            color={colors.primary[0]}
            loading={resSubmitBorrow.isLoading}
            onClick={handleBorrowed}
          >
            Oke
          </Button>
        </Group>
      </Modal>
    </Container>
  );
};

export default DetailBook;
