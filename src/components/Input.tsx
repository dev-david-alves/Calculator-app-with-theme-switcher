const Input = ({ value }: { value: string }) => {
  return (
    <input
      value={value.replace(".", ",")}
      disabled
      className="bg-screenBackground w-full rounded-md px-4 py-6 text-right text-4xl text-white"
    />
  );
};

export default Input;
