import "../styles/globals.css";
import "antd/dist/antd.css";
import { Navbar } from "../components";
import { Layout, Space, Typography } from "antd";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "../app/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              CryptoDash <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link href="/">Home</Link>
              <Link href="/exchanges">Exchanges</Link>
              <Link href="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
