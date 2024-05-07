"use client";
import { Box, Grid, Skeleton } from "@mantine/core";
import React, { ReactNode } from "react";

type conditionalRenderingTypes = {
  isFetching: boolean;
  children: ReactNode;
};
const RenderingBooks = ({
  isFetching,
  children,
}: conditionalRenderingTypes) => {
  return (
    <Box pos={"relative"}>
      {isFetching ? (
        <Grid>
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid.Col key={index} span={3}>
              <Skeleton w={"100%"} h={300} radius={"md"} />
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        children
      )}
    </Box>
  );
};

export default RenderingBooks;
