"use client";
import { Box, Group, Skeleton } from "@mantine/core";
import React, { ReactNode } from "react";

type conditionalRenderingTypes = {
  isFetching: boolean;
  children: ReactNode;
};
const RenderDetailBook = ({
  isFetching,
  children,
}: conditionalRenderingTypes) => {
  return (
    <Box>
      {isFetching ? (
        <Group wrap="nowrap" align="start">
          <Skeleton w={400} h={450} radius={"md"} />
          <Skeleton w={"100%"} h={400} radius={"md"} />
        </Group>
      ) : (
        children
      )}
    </Box>
  );
};

export default RenderDetailBook;
