import { Tag } from "./Tag";

const styles = {
  container: `min-w-[1200px] min-h-[600px] relative flex flex-col justify-end bg-[#141624] bg-opacity-40 rounded-[12px]`,
  image: `absolute w-[1200px] h-[600px] top-0 left-0 -z-10 rounded-[12px] bg-cover bg-no-repeat bg-center`,
  content: `p-10 border-solid border-[1px] border-[#E8E8EA] max-w-[598px] bg-white rounded-xl ml-[11px] mb-[13px]`,
  title: `text-[36px] font-semibold leading-[40px] text-[#181A2A] pt-4 pb-6`,
  date: `leading-6 text-[#97989F]`,
};

export const CarouselContent = ({ image, label, title, date }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="defaultImage" />
      <div className={styles.content}>
        <Tag tag={label} />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};
