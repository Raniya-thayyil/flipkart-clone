import logo from "./logo.svg";
import "./App.css";
import Header from "./components/mobileview/Header";
import FirstNav from "./components/mobileview/FirstNav";
import Carousel from "./components/mobileview/Carousel";
import ThreeImages from "./components/mobileview/ThreeImages";
import TwoImages from "./components/mobileview/TwoImages";
import ElectronicList from "./components/mobileview/ElectronicList";
import InterestingFind from "./components/mobileview/InterestingFind";
import Whishlist from "./components/mobileview/Whishlist";
import DesktopHeader from "./components/desktopview/DesktopHeader";

import "./MobileDesktop.css";
import NavHeader from "./components/desktopview/NavHeader";
import CarouselDesktop from "./components/desktopview/CarouselDesktop";
import TopOffers from "./components/desktopview/TopOffers";
import AcMobiles from "./components/desktopview/AcMobiles";
import TopDeals from "./components/desktopview/TopDeals";
import Advertisement from "./components/desktopview/Advertisement";
import FeaturedBrand from "./components/desktopview/FeaturedBrand";
import Sponsored from "./components/mobileview/Sponsored";

function MobileDesktop() {
  return (
    <div>
      <div className="mobile">
        <Header />
        <FirstNav />
        <Carousel />
        <ThreeImages />
        <TwoImages />
        <ElectronicList />
        <InterestingFind />
        <Whishlist />
        <Sponsored/>
      </div>
      <div className="desktop">
        <DesktopHeader />
        <NavHeader />
        <div className="container">
          <CarouselDesktop />
          <TopOffers />
          <AcMobiles />
          <TopDeals />
          <Advertisement />
          <FeaturedBrand />
        </div>
      </div>
    </div>
  );
}

export default MobileDesktop;
