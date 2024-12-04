import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import CafeMenu from "@pages/CafeMenu";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import Layout from "@layouts/index";
import ScrollToTop from "@components/ScrollToTop";
import Details from "@components/Details";
import { activities } from "@constants/Activities";
import { events } from "@constants/Events";
import { Engagement } from "types/card";

function createRoutes(items: Engagement[]) {
  return items.map((item, index) => (
    <Route key={index} path={item.path} element={<Details {...item} />} />
  ));
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />

      <Layout
        children={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cafe-menu" element={<CafeMenu />} />
            {createRoutes(activities)}
            {createRoutes(events)}
          </Routes>
        }
      />
    </Router>
  );
};

export default App;
