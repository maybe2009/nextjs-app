export default function Banner() {
  return (
    <div className="flex flex-col justify-center w-[343px] h-[200px] bg-[url('/images/basket_1x.png')] bg-no-repeat bg-center rounded-2xl">
      <div className="flex flex-col justify-center gap-y-4 pl-4 pr-4 pt-2 pb-2">
        <div className="customize-text-h1 w-[220px] h-[80px]">
          Everyday Low Price
        </div>
        <div className="customize-text-body w-fit px-4 py-2 bg-brand-primary text-icon-invert rounded-[999px]">
          Button
        </div>
      </div>
    </div>
  );
}
