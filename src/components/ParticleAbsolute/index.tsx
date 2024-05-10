import { Box } from "@mantine/core";
import Image from "next/image";

type PositionType = {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
};

type ParticleStarAbsoluteType = {
  src: string;
  position: PositionType;
  w: number;
  h: number;
};

const ParticleAbsolute = ({ src, position, w, h }: ParticleStarAbsoluteType) => {
  return (
    <Box
      pos="absolute"
      {...position}
      style={{
        zIndex: 1
      }}
    >
      <Image
        src={src}
        width={w}
        height={h}
        alt="Image"
      />
    </Box>
  );
};

export default ParticleAbsolute;
