export function Loading() {
  return (
    <lottie-player
      src="https://assets2.lottiefiles.com/temp/lf20_Tw0dyZ.json"
      background="transparent"
      speed="1"
      style={{
        width: "full",
        height: "full",
        margin: "auto",
        position: "absolute",
        "z-index": 50,
      }}
      loop
      autoplay
    ></lottie-player>
  );
}
