import { Image, Card, Text, Group } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconStar } from "@tabler/icons-react";
import classes from "./CarouselCard.module.css";
import { RoomDetails } from "types/room";

function CarouselCard({
  initialSlide,
  room,
}: {
  initialSlide: number;
  room: RoomDetails;
}) {
  const slides = room.images.map((image, index) => (
    <Carousel.Slide key={index}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
          initialSlide={initialSlide}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {room.title}
        </Text>

        <Group gap={5}>
          <IconStar className="icon fs-16" />
          <Text fz="xs" fw={500}>
            {room.rating}
          </Text>
        </Group>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {room.description}
      </Text>

      <Group justify="space-between" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            ₹{room.price}
          </Text>
          <Text span fz="sm" c="dimmed">
            {" "}
            / {room.period}
          </Text>
        </div>
      </Group>
    </Card>
  );
}

export default CarouselCard;
