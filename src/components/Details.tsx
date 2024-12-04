import {
  Grid,
  GridCol,
  Image,
  List,
  ListItem,
  Text,
  Title,
} from "@mantine/core";
import { Engagement } from "types/card";
import { StyledContainer } from "@components/StyledContainer";

const Details: React.FC<Engagement> = ({
  galleryImages,
  image,
  title,
  subTitle,
  summary,
  description,
  points,
}) => {
  return (
    <StyledContainer>
      <Grid gutter="lg">
        <GridCol span={12}>
          <Image
            src={image}
            alt="Main Image"
            height={400}
            width="100%"
            radius="md"
          />
        </GridCol>

        <GridCol span={{ base: 12, md: 6 }}>
          <Title>{title}</Title>
          <big>{subTitle}</big>
          <Text mt="md">{summary}</Text>
          <Text mt="sm" ta="justify">
            {description}
          </Text>
          <List mt="lg">
            {points.map((point, index) => (
              <ListItem key={index}>{point}</ListItem>
            ))}
          </List>
        </GridCol>

        <GridCol span={{ base: 12, md: 6 }}>
          <Grid gutter="sm" align="center">
            {galleryImages.map((src, index) => {
              const height = 120 + (index % 2) * 30;
              return (
                <GridCol
                  key={index}
                  span={index > 0 && Math.floor(index / 2.3) % 2 === 0 ? 8 : 4}
                  style={{ marginTop: index % 2 === 0 ? 10 : 0 }}
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    height={height}
                    radius="md"
                  />
                </GridCol>
              );
            })}
          </Grid>
        </GridCol>
      </Grid>
    </StyledContainer>
  );
};

export default Details;
