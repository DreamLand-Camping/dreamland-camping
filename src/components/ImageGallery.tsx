import { Skeleton, Grid, Image, GridCol, Title } from "@mantine/core";
import { useState } from "react";
import { StyledContainer } from "@components/StyledContainer";
import AnimatedSection from "@components/AnimatedSection";
import { gallery } from "@constants/Gallery";

function getDirection(index: number): "top" | "left" | "bottom" | "right" {
  switch (index) {
    case 2:
    case 5:
      return "top";
    case 1:
    case 6:
      return "right";
    case 3:
    case 4:
      return "left";
    default:
      return "bottom";
  }
}

const ImageGallery: React.FC = () => {
  const { title, images } = gallery;

  const [imageStates, setImageStates] = useState(
    Array(images.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setImageStates((prev) => {
      const newimageStates = [...prev];
      newimageStates[index] = true;
      return newimageStates;
    });
  };

  const handleImageError = (index: number) => {
    setImageStates((prev) => {
      const newImageStates = [...prev];
      newImageStates[index] = false;
      return newImageStates;
    });
  };

  return (
    <StyledContainer>
      <Title ta="center" m="sm">
        {title}
      </Title>
      <Grid gutter="md" align="center">
        {images.map((src, index) => {
          const height = 200 + (index % 3) * 50;
          const offset = (index % 4) * 10;

          return (
            <GridCol
              key={index}
              span={{ base: 6, sm: 3 }}
              style={{ marginTop: offset }}
            >
              {!imageStates[index] && <Skeleton height={height} width="100%" />}
              <AnimatedSection animationType={getDirection(index)}>
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                  style={{
                    display: imageStates[index] ? "block" : "none",
                    height,
                  }}
                />
              </AnimatedSection>
            </GridCol>
          );
        })}
      </Grid>
    </StyledContainer>
  );
};

export default ImageGallery;
