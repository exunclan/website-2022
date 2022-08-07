export default function ComingSoon() {
  return (
    <div className="flex flex-col h-[calc(100vh-102px)] w-full justify-center items-center">
      <video playsInline autoPlay loop muted width="500">
        <source
          src="https://cdn.discordapp.com/attachments/918142261693399081/924294738947997756/transparent-4.webm"
          type="video/mp4"
        />
      </video>
      <h1 className="text-center text-5xl md:text-6xl font-semibold text-primary">
        Coming Soon!
      </h1>
    </div>
  );
}
