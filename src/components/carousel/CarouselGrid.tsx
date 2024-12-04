import {
  Badge,
  Container,
  Grid,
  GridCol,
  Group,
  Text,
  Title,
} from "@mantine/core";
import CarouselCard from "@components/carousel/CarouselCard";
import AnimatedSection from "@components/AnimatedSection";
import { rooms } from "@constants/Rooms";
import { companyInfo } from "@constants/CompanyInfo";

const CarouselGrid: React.FC = () => {
  const { title, subtitle, description } = companyInfo.roomsTopBar;

  return (
    <>
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            {title}
          </Badge>
        </Group>

        <Title order={2} ta="center" mt="sm">
          {subtitle}
        </Title>

        <Text c="dimmed" ta="center" mt="md">
          {description}
        </Text>
      </Container>
      <Grid>
        <GridCol span={{ base: 12, sm: 4 }}>
          <AnimatedSection animationType="left">
            <CarouselCard initialSlide={0} room={rooms[0]} />
          </AnimatedSection>
        </GridCol>
        <GridCol span={{ base: 12, sm: 4 }}>
          <AnimatedSection animationType="top">
            <CarouselCard initialSlide={1} room={rooms[1]} />
          </AnimatedSection>
        </GridCol>
        <GridCol span={{ base: 12, sm: 4 }}>
          <AnimatedSection animationType="right">
            <CarouselCard initialSlide={2} room={rooms[2]} />
          </AnimatedSection>
        </GridCol>
      </Grid>
    </>
  );
};

export default CarouselGrid;
