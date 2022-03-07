import React, { useState } from "react";
import moment from "moment";
import "../styles/News.css";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { SectionStyled } from "../styles/Main.styled";
import { BannerImgStyled } from "../styles/Banner.styled";
import { NewsTextBanner, NewsBannerContainer } from "../styles/Banner.styled";
import NewsLogo from "../assets/NewsLogo.svg";

const News = ({ simplified }) => {
  //categorize in cryptocurrency
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 50,
  });
  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((preValue) => preValue + 4);
  };

  if (!cryptoNews?.value) return <h1>Loading..</h1>;

  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  return (
    <>
      <SectionStyled>
        <NewsBannerContainer>
          <BannerImgStyled>
            <img
              className="news-logo"
              src={NewsLogo}
              style={{ height: 400, width: "auto", marginBottom: "30px" }}
            />
          </BannerImgStyled>
          <NewsTextBanner>
            <h1>Crypto News</h1>
            <p>It is always important to be in tune with the latest news.</p>
          </NewsTextBanner>
        </NewsBannerContainer>
      </SectionStyled>
      <div className="main-container">
        {cryptoNews.value.slice(0, visible).map((news, i) => (
          <div className="news-container" key={i}>
            <div className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <img
                    className="news-img"
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt=""
                  />
                  <div
                    className="news-title"
                    style={{
                      fontWeight: "800",
                      color: "#484848",
                    }}
                  >
                    {news.name.length > 85
                      ? `${news.name.substring(0, 85)}...`
                      : news.name}
                  </div>
                </div>
                <p>
                  {news.description.length > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>

                <div className="provider-container">
                  <div className="provider-align">
                    <img
                      className="provider-img"
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt=""
                    />
                    <div className="provider-name">
                      {news.provider[0]?.name}
                    </div>
                  </div>
                  <div className="provider-date">
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="btnContainer">
        <button onClick={showMoreItems} className="loadBtn">
          Load More
        </button>
      </div>
    </>
  );
};

export default News;
