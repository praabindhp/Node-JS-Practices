const { createReadStream } = require("fs");

const Stream = createReadStream("./Streams/Content/Big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

Stream.on("data", (result) => {
  console.log(result);
});

Stream.on("error", (err) => {
    console.log(err);
});

Stream.on("end", () => {
  console.log("Done With This Task");
});