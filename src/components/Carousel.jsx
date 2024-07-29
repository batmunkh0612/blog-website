import { useState } from "react";
import { CarouselContent } from "./CarouselContent";

const styles = {
  section: "max-w-[1200px] overflow-hidden",
  sliderContainer: "flex transition-transform duration-500 ease-out",
  buttonsContainer: "flex gap-[9px] mt-[11px] justify-end",
  button:
    "size-10 rounded-md border-[1px] border-solid border-[#696A75] flex items-center justify-center",
};

const backIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="17"
    viewBox="0 0 9 17"
    fill="none">
    <path
      d="M8.5 16L1 8.5L8.5 1"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const forwardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="17"
    viewBox="0 0 9 17"
    fill="none">
    <path
      d="M1 1L8.5 8.5L1 16"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Carousel = ({ mockData }) => {
  let [currentIndex, setCurrentIndex] = useState(0);

  const handleClickBack = () =>
    setCurrentIndex(
      currentIndex === 0 ? mockData.length - 1 : currentIndex - 1
    );

  const handleClickForward = () =>
    setCurrentIndex(
      currentIndex === mockData.length - 1 ? 0 : currentIndex + 1
    );

  return (
    <section className={styles.section}>
      <div
        className={styles.sliderContainer}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {mockData.map((data, index) => {
          return (
            <CarouselContent
              key={index}
              image={data.social_image}
              label={data.tag_list[0]}
              title={data.title}
              date={data.published_at}
            />
          );
        })}
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.button} onClick={handleClickBack}>
          {backIcon}
        </div>
        <div className={styles.button} onClick={handleClickForward}>
          {forwardIcon}
        </div>
      </div>
    </section>
  );
};
