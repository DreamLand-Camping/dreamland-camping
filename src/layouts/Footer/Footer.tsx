import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Image,
  AspectRatio,
  SimpleGrid,
  Title,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  Icon,
  IconAt,
  IconPhone,
  IconMapPin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import classes from "./index.module.css";
import { Link } from "react-router-dom";
import { companyInfo } from "@constants/CompanyInfo";

function ContactIcon({
  icon: Icon,
  value,
}: {
  icon: Icon;
  value: React.ReactNode;
}) {
  return (
    <Group>
      <Icon className="icon fs-20" />
      <Text>{value}</Text>
    </Group>
  );
}

const Footer: React.FC = () => {
  const { name, description, socialLinks } = companyInfo;
  const { title, email, phone, address } = companyInfo.contact;

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.logo}>
          <AspectRatio ratio={4 / 3}>
            <Image
              src={"logo.jpg"}
              style={{ borderRadius: rem(4) }}
              height={72}
            />
          </AspectRatio>
          <Text size="xs" c="dimmed" className={classes.description}>
            {description}
          </Text>
        </Group>
        <SimpleGrid px="lg" spacing="0" mt="sm">
          <Title>{title}</Title>
          <ContactIcon icon={IconAt} value={email} />
          <ContactIcon icon={IconPhone} value={phone} />
          <ContactIcon icon={IconMapPin} value={address} />
        </SimpleGrid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </Text>
        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link
              to={socialLinks.facebook}
              className={classes.link}
              target="_blank"
            >
              <IconBrandFacebook className="icon fs-18" stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link
              to={socialLinks.youtube}
              className={classes.link}
              target="_blank"
            >
              <IconBrandYoutube className="icon fs-18" stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link
              to={socialLinks.instagram}
              className={classes.link}
              target="_blank"
            >
              <IconBrandInstagram className="icon fs-18" stroke={1.5} />
            </Link>
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
