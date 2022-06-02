class AudioRecording {
  constructor() {}
  start = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        //
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

var test = new AudioRecording();
Recording = () => {
  test.start();
};
