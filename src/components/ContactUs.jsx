import { useRef } from "react";
import { CustomButton } from "./CustomButton";

const styles = {
  input: {
    default:
      "focus-visible:border-transparent focus-visible:ring-0  w-[225px] h-[38px] p-[14px] pl-5 flex-shrink-0 rounded-[5px] border-solid border-[#DCDDDF] border-[1px] bg-white",
    fullWidth:
      "w-full h-[38px] p-[14px] pl-5 flex-shrink-0 rounded-[5px] border-solid border-[#DCDDDF] border-[1px] bg-white",
    fullHeight:
      "w-full h-[134px] p-[14px] pl-5 flex-shrink-0 rounded-[5px] border-solid border-[#DCDDDF] border-[1px] bg-white",
  },
};

const Input = ({ placeholder, fullWidth, fullHeight }) => {
  return (
    <>
      {fullHeight ? (
        <textarea
          placeholder={placeholder}
          className={styles.input.fullHeight}
        />
      ) : (
        <input
          placeholder={placeholder}
          className={fullWidth ? styles.input.fullWidth : styles.input.default}
        />
      )}
    </>
  );
};

const Address = ({ title = "Address", text = "1328 Oak Ridge Drive, Saint Louis, Missouri"}) => {
  return <div className="flex flex-col p-4 gap-[10px] rounded-[10px] border-[#E8E8EA] border-[1px] border-solid max-w-[292px]">
    <h2 className="text-[#000] text-[24px] font-semibold leading-10">{title}</h2>
    <p className="text-[#696a75] leading-[26px] text-[18px]">{text}</p>
  </div>
}

export const ContactUs = () => {
  const formRef = useRef();
  
  return (
    <div className="flex max-w-[895px] flex-col items-center m-auto gap-[50px]">
      <div className="max-w-[769px] flex flex-col items-center gap-[30px] py-[14px] px-[10px] pb-[0px] flex-shrink-0">
        <div className="flex flex-col gap-5 max-w-[624px] text-[#696A75] leading-6">
          <h1 className="text-[#000] text-[36px] font-semibold leading-[40px]">
            Contact Us
          </h1>
          <p className="font-Plus-Jakarta-Sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex gap-[50px]">
          <Address />
          <Address title="Contact" text="313-332-8662 info@email.com" />
        </div>
      </div>
      <div className="pt-[29px] pl-[35px] pb-[26px] rounded-[10px] bg-[#f6f6f7] min-w-[643px]">
        <h3 className="text-[#000] text-[18px] font-semibold leading-6 mb-[24px]">
          Leave a Message
        </h3>
        <div>
          <form ref={formRef} className="flex flex-col max-w-[478px] h-[317px] flex-shrink-0 gap-5">
            <div className="flex gap-7">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
            </div>
            <Input placeholder="Subject" fullWidth />
            <Input placeholder="Write a message" fullHeight />
            <CustomButton text="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
};
