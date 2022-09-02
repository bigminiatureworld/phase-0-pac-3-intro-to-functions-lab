function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  expect(shout("hello")).toEqual("HELLO");
  function logShout(string) {
    console.log(); string.toUpperCase();
  }