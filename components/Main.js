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
    this.form = new FormComponent(this.formPoint);
    this.form.mount();
    // this.listItems = new ListComponent(this.itemsPoint);
    // this.listItems.mount();
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
