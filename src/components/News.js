import React from "react";
import NewsItem from "./NewsItem";

const News = (props) => {
  let articles = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Helen Regan, Rob Picheta, Christian Edwards, Niamh Kennedy",
      title:
        "UN says fuel shortages will halt Gaza aid operations within a day - CNN",
      description:
        "The main United Nations agency in Gaza says it will have to halt aid operations within a day if fuel is not delivered, in what the organization says would mark the end of a “lifeline” for civilians.",
      url: "https://www.cnn.com/2023/10/25/middleeast/israel-hamas-gaza-war-wednesday-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/231025122410-un-aid-gaza-1021.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-10-26T04:38:00Z",
      content:
        "The main United Nations agency in Gaza says it will have to halt aid operations within a day if fuel is not delivered, in what the organization says would mark the end of a lifeline for civilians.\r\nW… [+10352 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "'HE PLAYED AMAZING' 👏 - Luka Doncic on rookie Dereck Lively II after Mavs' win | NBA on ESPN - ESPN",
      description:
        "Luka Doncic joins postgame after the Dallas Mavericks' 126-119 win over the San Antonio Spurs in their 2023-24 NBA season opener expressing his pride for his...",
      url: "https://www.youtube.com/watch?v=ZkTyRmDk9uk",
      urlToImage: "https://i.ytimg.com/vi/ZkTyRmDk9uk/maxresdefault.jpg",
      publishedAt: "2023-10-26T04:27:52Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Eonline.com",
      },
      author: "Kisha Forde",
      title:
        "Kris Jenner Shares Why She Cheated on Robert Kardashian - E! NEWS",
      description:
        "Kris Jenner opened up about why she says she cheated on her ex-husband Robert Kardashian, Sr. during the Oct. 26 episode of The Kardashians.",
      url: "https://www.eonline.com/news/1388464/kris-jenner-shares-why-she-cheated-on-robert-kardashian",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/2023924/rs_1200x1200-231024124412-KrisRobert_SPLIT_.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2023-10-26T04:00:00Z",
      content:
        "For Kris, her perspective comes amid watching Khloe navigate her co-parenting relationship with her ex Tristan Thompson, with whom she shares kids True, 5, and Tatum, 14 months. Despite the former co… [+757 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "UAW strike: Ford and union agree record pay rise in tentative deal - BBC.com",
      description:
        "The tentative deal with the striking union to end the six-week walkout includes a record pay rise.",
      url: "https://www.bbc.com/news/business-67224476",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/7673/production/_131532303_gettyimages-1728335830-1.jpg",
      publishedAt: "2023-10-26T03:45:13Z",
      content:
        "Ford and the United Auto Workers (UAW) union have reached a tentative deal, which includes a record pay rise, to end a nearly six-week strike.\r\nThe agreement would be the first settlement of strikes … [+2406 chars]",
    },
  ];
  return (
    <>  
        <div className="text-center ">
            NEWS Headlines
        </div>
        {articles.map((item, index) => (
            <div className="grid grid-cols-4 gap-4 " key={index}>
            <NewsItem heading={item.title} description={item.description} imageUrl={item.urlToImage} articleUrl={item.url} />
            </div>
        ))}
    </>
    );
};

export default News;
