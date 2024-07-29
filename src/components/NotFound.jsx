import { CustomButton } from "./CustomButton"

export const NotFound = () => {
    return <div className="flex min-h-[208px] justify-center items-center gap-10 m-auto w-[642px]">
        <h3 className="text-[#000] text-[72px] font-semibold leading-[72px]">
            404
        </h3>
        <p className="w-[1px] h-[156px] bg-[#E8E8EA]" />
        <div className="flex flex-col gap-5 py-2">
            <h5 className="text-[#000] text-[24px] font-semibold leading-10">Page Not Found</h5>
            <p className="text-[#696A75] text-[18px] leading-[26px]">
                We're sorry, This page is unknown or does not exist the page you are looking for.
            </p>
            <CustomButton text={"Back To Home"} />
        </div>
    </div>
}