import _ from "lodash";

export class ListComponent {
  constructor(mountPoint, props = {}) {
    this.mountPoint = mountPoint;
    this.props = props;
  }

  querySelectors() {
    this.listItem = this.mountPoint.querySelector(".list__item");
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
  }

  render() {
    return `
    <li class="list__item">${this.props.text}</li>
    `;
  }
}
