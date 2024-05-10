"use client";
import { Box, Flex, Skeleton, Stack } from "@mantine/core";
import React, { ReactNode } from "react";

type conditionalRenderingTypes = {
  isFetching: boolean;
  children: ReactNode;
};
const RenderingSidebar = ({
  isFetching,
  children,
}: conditionalRenderingTypes) => {
  return (
    <Box pos={"relative"}>
      {isFetching ? (
        <Flex direction={{ base: "row", lg: "column" }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} w={180} h={50} radius={"md"} />
          ))}
        </Flex>
      ) : (
        children
      )}
    </Box>
  );
};

export default RenderingSidebar;
