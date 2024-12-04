import { Container, Grid, GridCol } from "@mantine/core";
import HeroImageBackground from "@components/HeroImage";
import Banner from "@components/Banner";
import Features from "@components/features";
import CarouselGrid from "@components/carousel/CarouselGrid";
import ImageGallery from "@components/ImageGallery";
import MapFrame from "@components/MapFrame";

const Home: React.FC = () => {
  return (
    <>
      <HeroImageBackground />
      <Container className="overflow-hidden">
        <Grid gutter="xl">
          <GridCol>
            <Features />
          </GridCol>
          <GridCol>
            <CarouselGrid />
          </GridCol>
          <GridCol>
            <Banner />
          </GridCol>
          <GridCol>
            <ImageGallery />
          </GridCol>
          <GridCol>
            <MapFrame />
          </GridCol>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
