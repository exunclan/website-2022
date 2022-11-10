import Image from "next/image";
import videoData from "../../data/videos";

export default function Videos({ aboutRef }) {
  return (
    <>
      <div className="w-full" ref={aboutRef}>
        {videoData.map((element, index) => {
          return (
            <>
              <h2
                key={index}
                className="text-4xl mt-24 text-primary text-left font-bold"
              >
                Exun {element.year} Videos
              </h2>
              <div
                key={index}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2"
              >
                {element.data.map((item, i) => {
                  return (
                    <>
                      <div key={i} className="flex flex-col p-6 mx-2 sm:mx-12">
                        <img
                          className="object-cover h-52 lg:h-64 rounded-t"
                          src={`https://img.youtube.com/vi/${
                            item.link.split("v=")[1]
                          }/hqdefault.jpg`}
                          alt="Video Image"
                          key={i}
                        />
                        <a
                          key={i}
                          href={item.link}
                          className="bg-blue-500 inline-block text-white font-semibold rounded-b cursor-pointer py-4 text-center"
                        >
                          {item.heading}
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
