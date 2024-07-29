const styles = {
  username: "text-[#97989F] text-[16px] leading-[24px] font-normal",
};
export const Profile = ({ image, username }) => {
  return (
    <div className="flex gap-3 items-center">
      <img src={image} alt="profile" className="size-9 rounded-[28px]" />
      <p className={styles.username}>{username}</p>
    </div>
  );
};
