import { FormComponent } from "./Form";

export class MainComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
  }

  querySelectors() {
    this.formPoint = this.mountPoint.querySelector(".list__form");
    this.itemsPoint = this.mountPoint.querySelector(".list__items");
  }

  mountChildren() {
    let arrayList = [];
    this.form = new FormComponent(this.formPoint, arrayList);
    this.form.mount();
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
      </div>
    `;
  }
}
