import { Container, Card, CardImage } from "./BlogStyle";
import Image from "next/image";

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
          <CardImage>
            <Image src={blog.image} layout="fill" alt="blog" />
          </CardImage>
          <p>{blog.title}</p>
          <p>{blog.caption}</p>
        </Card>
      ))}
    </Container>
  );
};

export default Blog;
