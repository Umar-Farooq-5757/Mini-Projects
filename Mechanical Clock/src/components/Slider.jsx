const Slider = ({ st, end, selected }) => {
  let l = [];
  for (let i = st; i <= end; i++) {
    l.push(i);
  }
  const itemHeightForBigScreens = 42;
  const itemHeightForSmallScreens = 38;
  const transform =
    window.innerWidth >= 640
      ? selected * itemHeightForBigScreens
      : selected * itemHeightForSmallScreens;
  return (
    <div
      className={`bg-[#818181] transition-all slider flex flex-col gap-0 w-fit h-fit p-0.5 sm:p-2 rounded-md`}
      style={{ transform: `translateY(calc(43vh - ${transform}px))` }}
    >
      {l.map((el) => {
        return (
          <div
            key={el}
            className={`${
              selected == el &&
              "rounded-full bg-white/20 backdrop-blur-sm shadow-lg border-white/30 scale-105 sm:scale-110"
            } text-center py-1 px-3 transition-all border border-[#818181] font-mono text-white font-semibold text-lg sm:text-2xl`}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
