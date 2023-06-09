const string = "|/-\\";

let timer = 0;
while (timer < 5000) {
  for (const char of string) {
    setTimeout(function() {
      process.stdout.write('\r' + char);
    }, timer);
    timer += 100;
  }
}

setTimeout(function() {
  process.stdout.write("\n");
}, timer);