import {
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Image,
  useMantineTheme,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, useNavigate } from "react-router-dom";
import classes from "./index.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import { activities } from "@constants/Activities";
import { events } from "@constants/Events";
import { companyInfo } from "@constants/CompanyInfo";
import { Engagement } from "types/card";

function createLinks(links: Engagement[]) {
  const navigate = useNavigate();

  return links.map((item, index) => (
    <UnstyledButton
      className={classes.subLink}
      key={item.title}
      p={"xs"}
      onClick={() => navigate("/" + item.path)}
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <Image
            src={item.src}
            className="icon fs-22"
            alt={`Gallery image ${index + 1}`}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.summary}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
}

function createHoverCard(color: string, text: string, links: JSX.Element[]) {
  return (
    <HoverCard
      width={600}
      position="bottom"
      radius="md"
      shadow="md"
      withinPortal
    >
      <HoverCard.Target>
        <Box className={classes.link}>
          <Center inline>
            <Box component="span" mr={5}>
              {text}
            </Box>
            <IconChevronDown className="icon fs-16" color={color} />
          </Center>
        </Box>
      </HoverCard.Target>

      <HoverCard.Dropdown className="overflow-hidden">
        <Group justify="space-between" px="md">
          <Text fw={500}>{text}</Text>
        </Group>

        <Divider my="sm" />

        <SimpleGrid cols={2} spacing={0}>
          {links}
        </SimpleGrid>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

function createCollapsable(color: string, text: string, links: JSX.Element[]) {
  const [isOpened, { toggle: toggleLinks }] = useDisclosure(false);

  return (
    <>
      <UnstyledButton className={classes.link} onClick={toggleLinks}>
        <Center inline>
          <Box component="span" mr={5}>
            {text}
          </Box>
          <IconChevronDown className="icon fs-16" color={color} />
        </Center>
      </UnstyledButton>
      <Collapse in={isOpened}>{links}</Collapse>
    </>
  );
}

const MegaHeader: React.FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();
  const color = theme.colors.brand[6];
  const activityLinks = createLinks(activities);
  const eventLinks = createLinks(events);
  const { name, header, bookingLink } = companyInfo;

  return (
    <>
      <div className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image src={"logo.jpg"} height={72} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <Button me={rem(6)} radius="lg">
              <Link to={bookingLink} className={classes.link} target="_blank">
                Book Now
              </Link>
            </Button>
            <Link to="/" className={classes.link}>
              {header.home}
            </Link>
            {createHoverCard(color, header.linkWithSubLinks[1], eventLinks)}
            {createHoverCard(color, header.linkWithSubLinks[0], activityLinks)}
            {header.links.map((item, index) => {
              return (
                <Link key={index} to={item.path} className={classes.link}>
                  {item.name}
                </Link>
              );
            })}
          </Group>

          <Group hiddenFrom="sm">
            <Button me={rem(6)} radius="lg">
              <Link to={bookingLink} className={classes.link} target="_blank">
                Book Now
              </Link>
            </Button>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className="burger"
            />
          </Group>
        </Group>
      </div>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={name}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link to="/" className={classes.link}>
            {header.home}
          </Link>
          {createCollapsable(color, header.linkWithSubLinks[1], eventLinks)}
          {createCollapsable(color, header.linkWithSubLinks[0], activityLinks)}
          {header.links.map((item, index) => {
            return (
              <Link key={index} to={item.path} className={classes.link}>
                {item.name}
              </Link>
            );
          })}
        </ScrollArea>
      </Drawer>
    </>
  );
};

export default MegaHeader;
