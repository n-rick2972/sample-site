import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="ページが見つかりません" description="これは404ページです" />
      <div style={{ textAlign: "center", height: "70vh" }}>
        <h1>404: Not Found</h1>
        <p>ページが見つかりません</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
