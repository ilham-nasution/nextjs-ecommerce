import styles from "../styles/Blog.module.css";

const blogList = [
  {
    image: "/blog1.jpg",
    title: "Amsterdam Flagship Store",
    caption: "Find us at Singel 465",
  },
  {
    image: "/blog2.jpg",
    title: "SHOE Laundry Store",
    caption: "Let us clean your shoes",
  },
];

const Blog = () => {
  return (
    <div className={styles.container}>
      {blogList.map((blog) => (
        <div key={blog.image} className={styles.card}>
          <img src={blog.image} alt="blog" />
          <p>{blog.title}</p>
          <p>{blog.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
