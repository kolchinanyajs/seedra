import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import BlogCard from "../BlogCard";
import Button from "../Button";

const data = [
  {
    className: ["_horizontal", "_green"],
    time: "12.09.2021",
    image: "/blog-1.png",
    title: "How to&nbsp;plant spinach correctly in&nbsp;winter",
    description:
      "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months",
  },
  {
    className: ["_vertical"],
    time: "12.09.2021",
    image: "/blog-2.png",
    title: "How to plant spinach correctly in winter",
    description:
      "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months",
  },
  {
    time: "12.09.2021",
    image: "/blog-3.png",
    title: "How to plant spinach correctly in winter",
  },
  {
    time: "12.09.2021",
    image: "/blog-3.png",
    title: "How to plant spinach correctly in winter",
  },
];

const Blog = () => {
  return (
    <section className={styles.blog}>
      <Container className={styles.blog__container}>
        <header className={styles.blog__header}>
          <h2 className={`${styles.blog__title} h2`}>Our blog.</h2>
          <Button className={`${styles.blog__button}`} variant="border">
            Go to our blog
          </Button>
        </header>
        <div className={styles.blog__cards}>
          {data.map(({ className, time, image, title, description }, index) => (
            <BlogCard
              key={index}
              className={className}
              time={time}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
