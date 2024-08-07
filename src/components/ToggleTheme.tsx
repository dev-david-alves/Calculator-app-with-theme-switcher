function ToggleTheme() {
  return (
    <div className="flex items-end gap-4">
      <span className="pb-1 text-[10px] uppercase text-white">Theme</span>
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between px-2 text-[9px] text-sm text-white">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <div className="bg-toggleBackgroundKeypadBackground flex h-6 min-w-20 items-center rounded-full pl-1">
          <div className="bg-secondaryKeyBackground h-[14px] min-h-[14px] w-[14px] min-w-[14px] cursor-pointer rounded-full hover:bg-[var(--secondary-key-background-hover)]"></div>
        </div>
      </div>
    </div>
  );
}

export default ToggleTheme;
