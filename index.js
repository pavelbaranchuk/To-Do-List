import { MainComponent } from "./components/Main";

const root = document.getElementById("root");

const todo = new MainComponent(root);

todo.mount();
