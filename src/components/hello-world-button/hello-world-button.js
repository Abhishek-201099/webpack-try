import "./hello-world-button.css";

class HelloWorldButton {
  render() {
    const btn = document.createElement("button");
    btn.innerHTML = "Print";
    btn.classList.add("hello-world-button");
    const body = document.querySelector("body");
    btn.addEventListener("click", function () {
      const p = document.createElement("p");
      p.classList.add("hello-world-text");
      p.textContent = "Hello World";
      body.appendChild(p);
    });
    body.appendChild(btn);
  }
}

export default HelloWorldButton;
