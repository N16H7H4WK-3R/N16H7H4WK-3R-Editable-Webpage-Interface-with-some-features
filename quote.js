setInterval(() => {
  let date;
  let time;
  let a = new Date();
  const hour = a.getHours();
  const f1 = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  date = a.toLocaleDateString(undefined, f1);
  time = ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("Time").innerHTML = hour + time + " on <br> " + date;
}, 1000);

// for random quotes

function init() {
  const words = [
    "Programming is not about what you know; its about what you can figure out",
    "The most disastrous thing that you can ever learn is your first programming language",
    "The most important thing in programming is variable names. A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment",
    "Good code is its own best documentation.",
    "Its hard to write a simple, efficient program when you have a complicated, inefficient mind",
    "Code is like humor. When you have to explain it, its bad",
    "The only way to learn a new programming language is by writing programs in it",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in",
    "Programming is a lot like sex. One mistake and you have to support it for the rest of your life",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
  ];

  function onClick() {
    const index = Math.floor(Math.random() * words.length);
    const word = words[index];
    document.getElementById("output").innerHTML = word;
  }

  document.getElementById("target").addEventListener("click", onClick);
}