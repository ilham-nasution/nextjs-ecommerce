import { Container, Card } from "./BlogStyle";

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
    <Container>
      {blogList.map((blog) => (
        <Card key={blog.image}>
          <img src={blog.image} alt="blog" />
          <p>{blog.title}</p>
          <p>{blog.caption}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Blog;
