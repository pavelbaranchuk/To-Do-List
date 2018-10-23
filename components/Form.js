import { ListComponent } from "./List";

export class FormComponent {
  constructor(mountPoint, arrayList) {
    this.mountPoint = mountPoint;
    this.arrayList = arrayList;
  }

  querySelectors() {
    this.formField = this.mountPoint.querySelector(".list__form");
    this.textarea = this.mountPoint.querySelector(".list__textarea");
    this.outputField = this.mountPoint.querySelector(".list__output");
  }

  addEventListeners() {
    this.formField.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = this.textarea.value;
    this.arrayList.push(value);
    const item = new ListComponent(this.outputField, this.arrayList);
    item.mount();
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
    <div class="list__output"></div>
    `;
  }
}
