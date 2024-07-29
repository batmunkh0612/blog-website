import { Profile } from "./Profile";
import { Tag } from "./Tag";

const defaultImage =
  "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGaAS6boAe1jt7IE16J3AhBdS4oh-R64BcF71O~vpOVG45MXQ7Mz7kbSES0YcMtROk1bQJg5lD7Pey3sJaXn5N0QP0fleDa~h1h-~K0XVSFWWPSjIBV6GKQSbgDnVSDkPYjP3Gr4aInjtgZDc2KCGSP2L2kBUlsGQC9pz1eGLEsP821zltTv3G2QLm-qzI6oY7Uq8qKIoCDXS7UJnDSqSXSNEH2ssjK0TKRWbHpUkzG5fHO8-EUqCqIPZkyRpsDVVKkCLUWMk8rwjpCpqsqity7ufQz2SmZUDB-69xb44sZWpSjPIySFeYq8VZPpMlUj6tLEvHw7PEsv71o5OCRp6Q__";


const styles = {
  postContainer:
    "min-w-[392px] max-w-[392px] p-4 flex flex-col justify-center items-center gap-4 rounded-xl border-[1px] border-solid border-[#E8E8EA]",
  postImage: "min-w-[360px] max-w-[360px] min-h-[240px] rounded-md",
  textContent: "flex w-full flex-col p-2 items-start",
  shortInfo: "flex items-center gap-5",
  title: "mt-4 mb-5 text-[24px] font-semibold leading-[28px] text-[#181A2A]",
  date: "text-[#97989F] text-[16px] leading-[24px] font-normal",
};

export const Post = ({
  image = defaultImage,
  alt = "image",
  label = "Technology",
  title = "The Impact of Technology on the Workplace: How Technology is Changing",
  date = "August 20, 2022",
  username = "Ernie Smith",
  profileImage,
  onClick
}) => {
  return (
    <div className={styles.postContainer} onClick={onClick}>
      <img src={image} alt={alt} className={styles.postImage} />
      <div className={styles.textContent}>
        <Tag tag={label} isPrimary={false} />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.shortInfo}>
          {profileImage ? (
            <Profile image={profileImage} username={username} />
          ) : null}
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};
