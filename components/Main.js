import { FormComponent } from "./Form";
import { ListComponent } from "./Form";

export class MainComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
  }

  render() {
    return `
      <h2>Hello World</h2>
    `;
  }
}
