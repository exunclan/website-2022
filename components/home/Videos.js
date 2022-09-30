import Image from "next/image";
import youtubeThumbnail from 'youtube-thumbnail';
import videoData from '../../data/videos'

export default function Videos({ aboutRef }) {
    console.log(videoData)
    return (
        <>
            <div className="w-full" ref={aboutRef}>
                {videoData.map((element) => {
                    return (
                        <>
                            <h2 className="text-4xl mt-24 text-primary text-left font-bold">
                                Exun {element.year} Videos
                            </h2>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                                {element.data.map((item) => {
                                    return (
                                        <>
                                            <div className="flex flex-col p-6 mx-12">
                                                <img
                                                    className="object-cover h-52 lg:h-64"
                                                    src={youtubeThumbnail(item.link).high.url}
                                                    alt="Video Image"
                                                />
                                                <a href={item.link} className="bg-blue-500 inline-block text-white font-semibold rounded cursor-pointer py-4 text-center">{item.heading}</a>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
}
  
