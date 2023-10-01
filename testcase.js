const {open, close} = require(`node:fs`);
const {spawn} = require(`node:child_process`);

const filePath = `/tmp/file`;

open(filePath, `w`, 0o755, (err, fd) => {
  if (err) throw err;
  close(fd, err => {
    if (err) throw err;
    // Wait a bit to be sure there's no race condition there
    setTimeout(() => {
      spawn(filePath);
    }, 1000);
  });
});
