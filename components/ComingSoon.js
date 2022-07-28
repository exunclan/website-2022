export default function ComingSoon() {
  return (
    <div className="flex flex-col h-[calc(100vh-235px)] w-full justify-center items-center">
      <video playsInline autoPlay loop muted width="600">
        <source
          src="https://cdn.discordapp.com/attachments/918142261693399081/924294738947997756/transparent-4.webm"
          type="video/mp4"
        />
      </video>
      <h1 className="text-6xl font-semibold text-primary">Coming Soon!</h1>
    </div>
  );
}
