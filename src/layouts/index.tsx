import { AppShell, RemoveScroll } from "@mantine/core";
import classes from "./index.module.css";
import MegaHeader from "@layouts/Header/MegaHeader";
import Footer from "@layouts/Footer/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppShell header={{ height: 74 }} className={classes.root}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <MegaHeader />
      </AppShell.Header>
      <AppShell.Main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </AppShell.Main>

      <Footer />
    </AppShell>
  );
};

export default Layout;
