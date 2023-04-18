const { writeFileSync } = require("fs");
for (let i = 1; i < 1001; i++) {
  writeFileSync(
    "./Streams/Content/Big.txt",
    `\nHowdy, Welcome To Praabindh's World - ${i}`,
    { flag: "a" }
  );
}