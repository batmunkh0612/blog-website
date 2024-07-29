export const Button = ({ text = "Load More" }) => {
  return (
    <button className="px-5 py-3 rounded-md border-[1px] border-solid custom-border w-fit m-auto">
      {text}
    </button>
  );
};
