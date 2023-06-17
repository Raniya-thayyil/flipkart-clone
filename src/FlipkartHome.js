import logo from "./logo.svg";
import "./App.css";
import Header from "./components/headers/Header";
import FirstNav from "./components/mobileview/FirstNav";
import Carousel from "./components/mobileview/Carousel";
import ThreeImages from "./components/mobileview/ThreeImages";
import TwoImages from "./components/mobileview/TwoImages";
import ElectronicList from "./components/mobileview/ElectronicList";
import InterestingFind from "./components/mobileview/InterestingFind";
import Whishlist from "./components/mobileview/Whishlist";
import DesktopHeader from "./components/headers/DesktopHeader";

import "./FlipkartHome.css";
import NavHeader from "./components/desktopview/NavHeader";
import CarouselDesktop from "./components/desktopview/CarouselDesktop";
import TopOffers from "./components/desktopview/TopOffers";
import AcMobiles from "./components/desktopview/AcMobiles";
import TopDeals from "./components/desktopview/TopDeals";
import Advertisement from "./components/desktopview/Advertisement";
import FeaturedBrand from "./components/desktopview/FeaturedBrand";
import Sponsored from "./components/mobileview/Sponsored";

import { useState, useEffect } from "react";

function FlipkartHome() {
  //   const [components, setComponents] = useState([])

  //   const [nav,setNav] = useState([]);
  //   const [threeImages, setThreeImages] = useState([])
  //   const [twoImages, setTwoImages] = useState([])
  //   const [electronics, setElectronics] = useState([])
  //   const [finds, setFinds] = useState([])
  //   const [priceDrop, setPriceDrop] = useState([])
  //   const [sponsored, setSponsored] = useState([])
  //   const [carousels, setCarousels] = useState([])

  //   const [desktopHeader, setDesktopHeader] = useState([])
  //   const [desktopCarousel, setDesktopCarousel] = useState([])
  //   const [topOffer, setTopOffers] = useState([])
  //   const [acMobiles, setAcMobiles] = useState([])
  //   const [topDeals, setDeals] = useState([])
  //   const [ads, setAds] = useState([])
  //   const [features, setFeatures] = useState([])

  //   const fetchData = () => {
  //     fetch(
  //       "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-clone/main/public/data.json"
  //     )
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setComponents(data)

  //         // console.log(Object.keys(data));

  //         setNav(data.navbar);
  //         setThreeImages(data.threeImages)
  //         setTwoImages(data.TwoImages)
  //         setElectronics(data.electronicsList)
  //         setFinds(data.interestingFinds)
  //         setPriceDrop(data.pricedropAlert)
  //         setSponsored(data.sponsored)
  //         setCarousels(data.flashingImages)
  //         setDesktopHeader(data.headNavList)
  //         setDesktopCarousel(data.carousel)
  //         setTopOffers(data.topOffers)
  //         setAcMobiles(data.acMobiles)
  //         setDeals(data.topDeals)
  //         setAds(data.ads)
  //         setFeatures(data.featuredBrand)

  //       });
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //     let arr = [];
  //     Object.keys(components).map((keyItem) => {
  //       let componentsObj = {
  //         key: keyItem,
  //         value: components[keyItem],
  //       };
  //       arr.push(componentsObj)
  //     });
  //     console.log(arr);

  //   return (
  //     <div>
  //       <div className="mobile">
  //         <Header />
  //         <FirstNav navList={nav}/>
  //         <Carousel carouselList={carousels}/>
  //         <ThreeImages threeImagesList={threeImages}/>
  //         <TwoImages twoImagesList={twoImages}/>
  //         <ElectronicList electronicsList={electronics} />
  //         <InterestingFind findsList={finds}/>
  //         <Whishlist alerts={priceDrop}/>
  //         <Sponsored sponsoredList={sponsored}/>
  //       </div>
  //       <div className="desktop">
  //         <DesktopHeader />
  //         <NavHeader navList={desktopHeader}/>
  //         <div className="container">
  //           <CarouselDesktop carouselList={desktopCarousel}/>
  //           <TopOffers offersList={topOffer}/>
  //           <AcMobiles acMobilesLists={acMobiles}/>
  //           <TopDeals dealsList={topDeals}/>
  //           <Advertisement adsList={ads}/>
  //           <FeaturedBrand featuresList={features}/>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  const [components, setComponents] = useState([]);

  const [nav, setNav] = useState([]);
  const [threeImages, setThreeImages] = useState([]);
  const [twoImages, setTwoImages] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [finds, setFinds] = useState([]);
  const [priceDrop, setPriceDrop] = useState([]);
  const [sponsored, setSponsored] = useState([]);
  const [carousels, setCarousels] = useState([]);

  const [desktopHeader, setDesktopHeader] = useState([]);
  const [desktopCarousel, setDesktopCarousel] = useState([]);
  const [topOffer, setTopOffers] = useState([]);
  const [acMobiles, setAcMobiles] = useState([]);
  const [topDeals, setDeals] = useState([]);
  const [ads, setAds] = useState([]);
  const [features, setFeatures] = useState([]);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-clone/main/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComponents(data);

        setNav(data.navbar);
        setThreeImages(data.threeImages);
        setTwoImages(data.TwoImages);
        setElectronics(data.electronicsList);
        setFinds(data.interestingFinds);
        setPriceDrop(data.pricedropAlert);
        setSponsored(data.sponsored);
        setCarousels(data.flashingImages);
        setDesktopHeader(data.headNavList);
        setDesktopCarousel(data.carousel);
        setTopOffers(data.topOffers);
        setAcMobiles(data.acMobiles);
        setDeals(data.topDeals);
        setAds(data.ads);
        setFeatures(data.featuredBrand);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  let arr = [];
  Object.keys(components).map((keyItem) => {
    let componentsObj = {
      key: keyItem,
      value: components[keyItem],
    };
    arr.push(componentsObj);
  });

  const getData = (items) => {
    if (items.key === "navbar") {
      // console.log(items);
      return <FirstNav navList={items.value} />;
      // console.log(items.value);
    }
    else if (items.key === 'flashingImages') {
      return <Carousel carouselList={items.value} />   


    }
  };

  // const getDatas = (arr) => {
  // {arr.map(
  //   (item, id) =>
  //     item.key === "navbar" ? <FirstNav navList={item.value} /> : []

  //   // getData(item)
  // )}
  //  {arr.map(
  //   (item, id) =>
  //     item.key === "flashingImages" ? <Carousel carouselList={item.value} /> : []

  //   // getData(item)
  // )}

  // }

  return (
    <div>
      <div className="mobile">
        <Header />
        {arr.map((item, id) => getData(item))}
        {/* <Carousel carouselList={carousels} /> */}
        <ThreeImages threeImagesList={threeImages} />
        <TwoImages twoImagesList={twoImages} />
        <ElectronicList electronicsList={electronics} />
        <InterestingFind findsList={finds} />
        <Whishlist alerts={priceDrop} />
        <Sponsored sponsoredList={sponsored} />
      </div>
      <div className="desktop">
        <DesktopHeader />
        <NavHeader navList={desktopHeader} />
        <div className="container">
          <CarouselDesktop carouselList={desktopCarousel} />
          <TopOffers offersList={topOffer} />
          <AcMobiles acMobilesLists={acMobiles} />
          <TopDeals dealsList={topDeals} />
          <Advertisement adsList={ads} />
          <FeaturedBrand featuresList={features} />
        </div>
      </div>
    </div>
  );
}

export default FlipkartHome;
