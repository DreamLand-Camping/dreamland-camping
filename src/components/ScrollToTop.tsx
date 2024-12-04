import { IconArrowBigUpLinesFilled } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
            <IconArrowBigUpLinesFilled className="icon fs-16" />
          </Button>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollToTop;
