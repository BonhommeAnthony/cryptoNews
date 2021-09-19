import { useRouter } from "next/router";

const CryptoDetails = () => {
  const router = useRouter();
  const { coinId } = router.query;

  return <p>CoinId: {coinId}</p>;
};

export default CryptoDetails;
