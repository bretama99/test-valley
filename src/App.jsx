import Header from "./components/header/Header";
import "./App.css";
import Residencies from "./components/residencies/Residencies";
import Slider from "./components/sliders/Slider";
import Hotdeal from "./components/hotdeal/Hotdeal";
import Second from "./components/second/Second";
// import Axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import React, { useEffect, useState } from "react";
function App() {
  //first api
  const [seconds, setSeconds] = useState([]);
  const fetchData = () => {
    fetch("https://api.testvalley.kr/main-banner/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSeconds(data);
      });
  };

  //second api
  const [thirds, setThirds] = useState([]);
  const fetchDataThird = () => {
    fetch("https://api.testvalley.kr/main-shortcut/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setThirds(data);
      });
  };

  //third api
  const [fourths, setFourths] = useState([]);
  const [fivths, setFivths] = useState([]);
  const [sixths, setSixths] = useState([]);
  const [sevenths, setSevenths] = useState([]);
  const [eighths, setEighths] = useState([]);
  const [ninths, setNinths] = useState([]);
  const [tenths, setTenths] = useState([]);
  const [elevenths, setElevenths] = useState([]);
  const [lasts, setLasts] = useState([]);

  const fetchDataFourths = () => {
    fetch("https://api.testvalley.kr/collections?prearrangedDiscount")
      .then((response) => {
        return response.json();
      })
      .then((data) => {});
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.testvalley.kr/collections?prearrangedDiscount`
      );
      const filtered2 = response.data.items.filter((em) => {
        return em.title === "New In";
      });
      setFivths(filtered2);

      const filtered1 = response.data.items.filter((em) => {
        return em.type === "SINGLE" && em.viewType === "TILE";
      });
      setFourths(filtered1);

      //fiv
      const filtered3 = response.data.items.filter((em) => {
        return em.subtitle === "#LG #앱코 #BOSE";
      });
      setSixths(filtered3);

      //six

      const filtered4 = response.data.items.filter((em) => {
        return em.subtitle === "#병행수입 아닌 정품 제품으로 확실한  AS보장!";
      });
      setSevenths(filtered4);

      //seventh
      const filtered5 = response.data.items.filter((em) => {
        return (
          em.subtitle === "오직 테스트밸리에서만! 30일 체험해보고 구매하자"
        );
      });
      setEighths(filtered5);

      //eighth
      const filtered6 = response.data.items.filter((em) => {
        return em.subtitle === "저렴한 거격과 보장된 성능, 더함 TV";
      });
      setNinths(filtered6);

      //camera bundle no need to filter
      const filtered7 = response.data.items.filter((em) => {
        return em.title === "품절임박! 마지막 수량 한정특가 상품";
      });
      setTenths(filtered7);

      //switch filtering
      const filtered8 = response.data.items.filter((em) => {
        return em.title === "게임기기 최저가 & 신작 모음";
      });
      setElevenths(filtered8);

      const filtered9 = response.data.items.filter((em) => {
        return em.title === "판매량 TOP7  가성비 인기가전 모음";
      });
      setLasts(filtered8);
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataThird();
    fetchDataFourths();
    getData();
  }, []);

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
      </div>
      <Slider seconds={seconds} />
      <Residencies thirds={thirds} />
      <Hotdeal seconds={fourths} title="HOT DEAL" subtitle="HAPPY HOUR" />
      {fivths[0] != undefined ? (
        <Second
          seconds={fivths[0] != undefined ? fivths[0].items : undefined}
          title={fivths[0].title}
          subtitle={fivths[0].subtitle}
        />
      ) : null}

      {sixths[0] != undefined ? (
        <Second
          seconds={sixths[0] != undefined ? sixths[0].items : undefined}
          title={sixths[0].title}
          subtitle={sixths[0].subtitle}
        />
      ) : null}

      {sevenths[0] != undefined ? (
        <Second
          seconds={sevenths[0] != undefined ? sevenths[0].items : undefined}
          title={sevenths[0].title}
          subtitle={sevenths[0].subtitle}
        />
      ) : null}

      {eighths[0] != undefined ? (
        <Second
          seconds={eighths[0] != undefined ? eighths[0].items : undefined}
          title={eighths[0].title}
          subtitle={eighths[0].subtitle}
        />
      ) : null}

      {ninths[0] != undefined ? (
        <Second
          seconds={ninths[0] != undefined ? ninths[0].items : undefined}
          title={ninths[0].title}
          subtitle={ninths[0].subtitle}
        />
      ) : null}

      {tenths[0] != undefined ? (
        <Second
          seconds={tenths[0] != undefined ? tenths[0].items : undefined}
          title={tenths[0].title}
          subtitle={tenths[0].description}
        />
      ) : null}
      {lasts[0] != undefined ? (
        <Second
          seconds={lasts[0] != undefined ? lasts[0].items : undefined}
          title={lasts[0].title}
          subtitle={lasts[0].subtitle}
        />
      ) : null}
    </div>
  );
}

export default App;
