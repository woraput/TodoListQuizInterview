const Footer = () => {
  return (
    <footer className="p-layout-tablet xl:p-layout-desktop inline-flex w-full items-center justify-between bg-gray-300">
      <div className="flex flex-col items-start gap-1 md:flex-row md:items-center">
        <p className="text-md font-extrabold xl:text-2xl">Todo Toyou</p>
        <p className="text-xs xl:text-sm">By Woraput Sangchart</p>
      </div>
      <div className="flex flex-col items-start gap-1 md:flex-row xl:gap-4">
        <p className="text-xs xl:text-base">
          Contact:{" "}
          <a href="mailto:woraput@kkumail" className="text-xs xl:text-base">
            <u>woraput@kkumail</u>
          </a>{" "}
        </p>
        <p className="text-xs xl:text-base">Tel: 085-4579229</p>
      </div>
    </footer>
  );
};

export default Footer;
