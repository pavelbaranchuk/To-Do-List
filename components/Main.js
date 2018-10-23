import { FormComponent } from "./Form";
import { ListComponent } from "./List";

export class MainComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
    this.arrayList = [];
  }

  passBack(value) {
    this.arrayList.push(value);
    this.mount();
  }

  querySelectors() {
    this.formPoint = this.mountPoint.querySelector(".list__form");
    this.itemsPoint = this.mountPoint.querySelector(".list__items");
    this.outputField = this.mountPoint.querySelector(".list__output");
  }

  mountChildren() {
    this.form = new FormComponent(this.formPoint, this.passBack.bind(this));
    this.form.mount();
    const list = new ListComponent(this.outputField, this.arrayList);
    list.mount();
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
    this.mountChildren();
  }

  render() {
    return `
      <div class="list">
        <div class="list__form"></div>
        <div class="list__output"></div>
      </div>
    `;
  }
}
