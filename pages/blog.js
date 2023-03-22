import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { getAllBlogs } from "../utils/mdQueries";

const Blog = (props) => {
  return (
    <Layout>
      <div className="wrapper">
        <div className="container">
          <h1>Blog</h1>
          <p>エンジニアの日常生活をお届けします</p>
          {props.blogs.map((blog, index) => {
            return (
              <div key={index} className="blogCard">
                <div className="cardContainer">
                  <h3>{blog.frontmatter.title}</h3>
                  <p>{blog.frontmatter.excerpt}</p>
                  <p>{blog.frontmatter.date}</p>
                  <Link href={`/blog/${blog.slug}`}>Read More</Link>
                </div>
                <div className="blogImg">
                  <Image
                    src={blog.frontmatter.image}
                    alt="card-image"
                    height={300}
                    width={1000}
                    quality={90}
                    priority
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Blog;

export async function getStaticProps() {
  const { orderedBlogs } = await getAllBlogs();

  return {
    props: {
      blogs: orderedBlogs,
    },
  };
}
