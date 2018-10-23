export class FormComponent {
  constructor(mountPoint, passBack) {
    this.mountPoint = mountPoint;
    this.passBack = passBack;
  }

  querySelectors() {
    this.formField = this.mountPoint.querySelector(".list__form");
    this.textarea = this.mountPoint.querySelector(".list__textarea");
  }

  addEventListeners() {
    this.formField.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.textarea.value;
    this.passBack(value);
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
    this.addEventListeners();
  }

  render() {
    return `
    <form class="list__form">
      <div>
        <textarea class="list__textarea" rows="4" cols="60" required></textarea>
      </div>
      <div>
        <button>ADD</button>
      </div>
    </form>
    `;
  }
}
