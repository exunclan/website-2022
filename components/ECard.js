export default function ECard({
  bgColor,
  image,
  imageClassName,
  imageSubtitle,
  name,
  description,
  buttonText,
  link,
}) {
  return (
    <div
      href="#"
      className={`flex flex-col items-center rounded-lg shadow-md lg:flex-row lg:max-w-xl`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col items-center justify-center w-full rounded-t-lg p-4 h-auto w-11/12 lg:rounded-none lg:rounded-l-lg">
        <img
          className={
            "mt-12 mx-12 " +
            (!imageSubtitle ? "mb-12 " : "") +
            (imageClassName ?? "")
          }
          src={image}
          alt=""
        />
        {imageSubtitle && (
          <h3 className="text-xl text-accent-dark font-bold mt-3 text-center">
            {imageSubtitle}
          </h3>
        )}
      </div>
      <div className="flex flex-col justify-evenly py-8 pl-12 pr-6 leading-normal bg-[#F4F8FF] h-full lg:w-[150%]">
        <h5
          className={
            "mb-2 text-xl font-semibold tracking-tight text-accent " +
            (name === "Final_final_okaythisoneisfinal.psd" ? "break-all" : "")
          }
        >
          {name}
        </h5>
        <p
          className="mb-3 text-[#435A7E] text-sm tracking-wider mt-1 pr-4"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-sm text-white font-medium tracking-wider rounded-md py-2 px-4 uppercase self-end"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
