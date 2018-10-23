export class ListComponent {
  constructor(mountPoint, arrayList) {
    this.mountPoint = mountPoint;
    this.arrayList = arrayList;
  }

  querySelectors() {
    // debugger;
    this.listItem = this.mountPoint.querySelector(".list__item");
    this.arrayList.forEach(item => {
      this.listItem.innerHTML += `<li>${item}</li>`;
    });
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
  }

  render() {
    return `
    <ul class="list__item"></ul>
    `;
  }
}
