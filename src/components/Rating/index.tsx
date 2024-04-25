import React from "react";
import styles from "./page.module.scss";
import Star from "../Icons/Stars/Star";
import StarHalf from "../Icons/Stars/StarHalf";
import StarEmpty from "../Icons/Stars/StarEmpty";

interface IRating {
  rating: number;
  ratingCount: number;
}

const Rating = ({ rating, ratingCount }: IRating) => {
  // Округляем рейтинг до ближайшего 0.5, чтобы определить количество полных и наполовину заполненных звезд
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  // Создаем массив, который будет содержать компоненты звезд для отображения
  const stars = [];

  // Добавляем полные звезды
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <li key={i} className={styles.rating__item}>
        <Star />
      </li>
    );
  }

  // Добавляем наполовину заполненную звезду, если есть
  if (hasHalfStar) {
    stars.push(
      <li key="half" className={styles.rating__item}>
        <StarHalf />
      </li>
    );
  }

  // Добавляем пустые звезды до общего количества звезд (5)
  while (stars.length < 5) {
    stars.push(
      <li key={stars.length} className={styles.rating__item}>
        <StarEmpty />
      </li>
    );
  }

  return (
    <div className={styles.rating}>
      <ul className={styles.rating__list}>{stars}</ul>
      <span className={`${styles.rating__count} regular-14`}>
        ({ratingCount})
      </span>
    </div>
  );
};

export default Rating;
