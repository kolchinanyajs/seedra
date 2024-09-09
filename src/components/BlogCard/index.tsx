import React from "react";
import styles from "./page.module.scss";
import Button from "../Button";
import Image from "next/image";
import classNames from "classnames";

interface IBlogCard {
  time: string;
  image: string;
  title: string;
  description?: string;
  className?: string[];
}

const BlogCard = ({
  className,
  time,
  image,
  title,
  description,
}: IBlogCard) => {
  return (
    <article
      className={classNames(
        styles.blogcard,
        className && className.map((cls) => styles[cls])
      )}
    >
      <div className={styles.blogcard__content}>
        <time className={`${styles.blogcard__time} regular-14`}>
          <Image src="/clock.svg" alt="calendar" width={24} height={24} />
          {time}
        </time>
        <h3
          className={`${styles.blogcard__title} h3`}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        <p className={`${styles.blogcard__description} regular-14`}>
          {description}
        </p>
        <Button variant="secondary">Read</Button>
      </div>
      <div className={styles.blogcard__image}>
        {image && <Image src={image} alt="blog" fill priority={true} />}
      </div>
    </article>
  );
};

export default BlogCard;
