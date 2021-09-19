import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";
import Link from "next/link";
import { useGetCryptosQuery } from "../services/cryptoApi";

import { Navbar } from "../components";
import SimpleCryptocurrencies from "../components/SimpleCryptocurrencies";

const { Title } = Typography;

export default function Home() {
  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link href="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <SimpleCryptocurrencies />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link href="/news">Show More</Link>
        </Title>
      </div>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link href="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
    </>
  );
}
