import { Footer, Navbar } from "../components";

export const BasicLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen gap-[100px]">
      <div className="max-w-[1216px] min-w-[1216px] m-auto flex flex-col gap-[100px] flex-grow">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
