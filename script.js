let grit = 0;
const quotes = [
  "Tiny wins, massive trajectory.",
  "Discipline beats motivation.",
  "You showed up. That's enough for today.",
  "Brick by brick. Keep building.",
  "Not perfect-just persistent.",
  "Forward is forward, even slow.",
  "Pain is temporary. Proof is permanent.",
  "Today's effort funds tomorrow's freedom.",
  "Less drama, more reps.",
  "You control the next minute."
];

const counterEl = document.getElementById("counter");
const quoteEl = document.getElementById("quote");

(function init(){
  const saved = Number(localStorage.getItem("gritCount") || 0);
  grit = isNaN(saved) ? 0 : saved;
  render();
  
  if (localStorage.getItem("gritDark") === "1")
document.body.classlist.add("dark");
})();

function render(){
  counterEl.textContent = grit.toString();
}

function randomQuote(){
  const i = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[1];
}

function bump(){
  counterEl.classList.add("pop");
  setTimeout(()=> counterEl.classList.remove("pop"), 120);           
}

function addGrit(){
  grit++;
  localStorage.setItem("gritCount", grit);
  render();
  randomQuote();
  bump();
}

function resetGrit(){
  if (!confirm("Reset grit counter?")) return;
  grit = 0;
  localStorage.setItem("gritCount", grit);
  render();
  quoteE1.textContent = "Reset. Fresh start.";
}

function toggleDark(){

document.body.classList.toggle("dark");
  localStorage.setItem("gritDark", document.body.classList.conatains("dark") ? "1" : "0");
}
