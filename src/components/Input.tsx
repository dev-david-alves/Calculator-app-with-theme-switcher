const Input = ({ value }: { value: string }) => {
  return (
    <div className="w-full min-w-full rounded-md bg-screenBackground px-4 py-6">
      {/* Replace all dots with commas */}
      <p className="text-header text-right text-4xl">
        {value.replace(/\./g, ",")}
      </p>
    </div>
  );
};

export default Input;
