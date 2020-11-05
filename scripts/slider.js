// extend a Siema class by two methods
// addDots - to create a markup for dots
// updateDots - to update classes on dots on change callback
class SiemaWithDots extends Siema {
  addDots() {
    // create a contnier for all dots
    // add a class 'dots' for styling reason
    this.dots = document.createElement("div");
    this.dots.classList.add("dots");

    // loop through slides to create a number of dots
    for (let i = 0; i < this.innerElements.length; i++) {
      // create a dot
      const dot = document.createElement("button");

      // add a class to dot
      dot.classList.add("paginator-dot");

      // add an event handler to each of them
      dot.addEventListener("click", () => {
        this.goTo(i);
      });

      // append dot to a container for all of them
      this.dots.appendChild(dot);
    }

    // add the container full of dots after selector
    this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
  }

  updateDots() {
    // loop through all dots
    for (let i = 0; i < this.dots.querySelectorAll("button").length; i++) {
      // if current dot matches currentSlide prop, add a class to it, remove otherwise
      const addOrRemove = this.currentSlide === i ? "add" : "remove";
      this.dots
        .querySelectorAll("button")
        [i].classList[addOrRemove]("is-active");
    }
  }
}

let mySiema = new Siema({
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  duration: 500,    
  loop: true,
  perPage: {
    768: 2
  }
});

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
prev.addEventListener("click", () => mySiema.prev());
next.addEventListener("click", () => mySiema.next());

setInterval(() => mySiema.next(), 5000);



const mySiemaWithDots = new SiemaWithDots({
  selector: document.querySelector('.testimonials'),
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  duration: 500,    
  loop: true,
  onInit: function () {
    this.addDots();
    this.updateDots();  
  },
  onChange: function () {
      this.updateDots();  
  }
});

setInterval(() => mySiemaWithDots.next(), 5000);