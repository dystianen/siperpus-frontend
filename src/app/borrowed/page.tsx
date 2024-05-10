"use client";
import { embedImage } from "@/helper/embedImage";
import {
  useGetBorrowedBooksQuery,
  useLazyGetTotalFineQuery,
  usePostReturnBookMutation,
  usePostReviewBookMutation,
} from "@/redux/slice/books.api";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Container,
  FileButton,
  Grid,
  Group,
  Modal,
  Rating,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import Image from "next/image";
import dayjs from "dayjs";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { toast } from "react-toastify";
import { MdFileCopy } from "react-icons/md";
import { borrowedTypes } from "@/types/books";
import { useForm, yupResolver } from "@mantine/form";
import * as y from "yup";

const schemaValidation = y.object().shape({
  rating: y.number().required("Rating is required!"),
  review: y.string().required("Review is required!"),
});

const Borrowed = () => {
  const { data: borrowed } = useGetBorrowedBooksQuery();
  const [openedReview, { open: openReview, close: closeReview }] =
    useDisclosure(false);
  const [openedPayment, { open: openPayment, close: closePayment }] =
    useDisclosure(false);
  const [detailBook, setDetailBook] = useState<any>({});
  const [file, setFile] = useState<File | null>(null);
  const [returnBook, resReturnBook] = usePostReturnBookMutation();
  const [getTotalFine, resTotalFine] = useLazyGetTotalFineQuery();
  const isTotalFine = Number(resTotalFine.data?.total_fine) > 0;
  const [submitReview] = usePostReviewBookMutation();

  const { getInputProps, onSubmit } = useForm({
    validate: yupResolver(schemaValidation),
    initialValues: {
      rating: 0,
      review: "",
    },
  });

  const handleOpenPopupReview = (item: borrowedTypes) => {
    setDetailBook(item);
    getTotalFine(item.borrow_id)
      .unwrap()
      .then(() => {
        openReview();
      });
  };

  const handlePay = onSubmit((values) => {
    submitReview({
      book_id: detailBook.book_id,
      rating: values.rating,
      review: values.review,
    })
      .unwrap()
      .then(() => {
        closeReview();
        openPayment();
      });
  });

  const handleSubmit = onSubmit((values) => {
    if (!isTotalFine) {
      submitReview({
        book_id: detailBook.book_id,
        rating: values.rating,
        review: values.review,
      });
    }

    returnBook(detailBook.borrow_id)
      .unwrap()
      .then(() => {
        closeReview();
        closePayment();
        toast("Returned book successfully!");
      });
  });

  const renderPay = isTotalFine
    ? {
        buttonLabel: "Pay",
        onClick: handlePay,
      }
    : {
        buttonLabel: "Return",
        onClick: handleSubmit,
      };

  const getColorBadge = (status: string) => {
    let color = "";
    switch (status) {
      case "process_borrowed":
        color = "yellow";
        break;
      case "borrowed":
        color = "blue";
        break;
      case "process_return":
        color = "orange";
        break;
      case "done":
        color = "lime";
        break;
    }

    return color;
  };

  return (
    <Container size={"lg"}>
      <Text fw={600} fz={32} mb={24} c={"neutral.8"}>
        Borrowed Books
      </Text>

      <Grid>
        {borrowed?.map((it, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Card shadow="sm">
              <Group wrap="nowrap" align="start">
                <Image
                  src={embedImage(it.thumbnail)}
                  width={70}
                  height={100}
                  alt={it.title}
                />
                <Stack gap={0}>
                  <Text fw={600}>{it.title}</Text>
                  <Text>
                    Due date : {dayjs(it.due_date).format("DD, MMM YYYY")}
                  </Text>
                  <Text>status : <Badge color={getColorBadge(it.status)}>{it.status.replace("_", " ")}</Badge></Text>
                  {it.status === "borrowed" && (
                    <Button
                      color={"success.9"}
                      size="xs"
                      w={"max-content"}
                      variant="outline"
                      onClick={() => handleOpenPopupReview(it)}
                    >
                      Return
                    </Button>
                  )}
                </Stack>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* POPUP REVIEW */}
      <Modal
        opened={openedReview}
        onClose={closeReview}
        centered
        withCloseButton={false}
      >
        <Stack align="center">
          <Card radius={"md"} p={0}>
            <Image
              src={embedImage(detailBook.thumbnail)}
              width={200}
              height={270}
              alt={detailBook.title}
            />
          </Card>

          <Stack gap={2} align="center">
            <Text fw={600}>Rate for Book</Text>
            <Rating {...getInputProps("rating")} size={"xl"} />
          </Stack>

          <Stack gap={2} align="center" w={"80%"}>
            <Text fw={600}>Review for Book</Text>
            <Textarea
              {...getInputProps("review")}
              rows={4}
              w={"100%"}
              placeholder="commentar..."
            />
          </Stack>

          <Group>
            <Button px={32} color="red" onClick={closeReview}>
              Cancel
            </Button>
            <Button
              px={32}
              color="success.9"
              onClick={() => renderPay.onClick()}
            >
              {renderPay.buttonLabel}
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* POPUP BAYAR */}
      <Modal
        opened={openedPayment}
        onClose={closePayment}
        centered
        withCloseButton={false}
      >
        <Stack align="center">
          <Text fw={600} ta={"center"}>
            Scan the QR below to make your transaction
          </Text>

          <Image src={"/QR.jpeg"} width={250} height={300} alt="QR" />

          <Stack gap={0}>
            <Text fw={600} c={"red"}>
              TOTAL FINE : Rp. {resTotalFine.data?.total_fine}
            </Text>
            <Group align="center">
              <Text>
                BCA : <span style={{ color: "blue" }}>0901952689</span>
              </Text>
              <ActionIcon variant="light">
                <MdFileCopy />
              </ActionIcon>
            </Group>
            <Text>Name : Dystian En Yusgiantoro</Text>
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => (
                <Button {...props} mt={16}>
                  Upload proof of payment
                </Button>
              )}
            </FileButton>
            {file && (
              <Text size="sm" mt="xs">
                Picked file: {file.name}
              </Text>
            )}
          </Stack>

          <Group my={16}>
            <Button px={32} color="red" onClick={closePayment}>
              Cancel
            </Button>
            <Button
              px={32}
              color="success.9"
              loading={resReturnBook.isLoading}
              onClick={() => handleSubmit()}
              disabled={!file}
            >
              Return
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Container>
  );
};

export default Borrowed;
