import { ListComponent } from "./List";

export class FormComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
  }

  querySelectors() {
    this.formField = this.mountPoint.querySelector(".list__textarea");
    this.submitButton = this.mountPoint.querySelector(".list__button");
    this.outputField = this.mountPoint.querySelector(".list__output");
  }

  addEventListeners() {
    this.submitButton.addEventListener("click", this.handleSubmit.bind(this));
  }

  handleSubmit() {
    const value = this.formField.value;
    const item = new ListComponent(this.outputField, { text: value });
    item.mount();
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
    this.addEventListeners();
  }

  render() {
    return `
    <div>
      <textarea class="list__textarea" rows="4" cols="60"></textarea>
    </div>
    <div>
      <button class="list__button">ADD</button>
    </div>
    <div>
      <ul class="list__output"></ul>
    </div>
    `;
  }
}
