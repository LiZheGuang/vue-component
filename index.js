import MyComponent from "./src/index";

//按需引入
export { MyComponent };

const components = [MyComponent];

const install = (App) => {
  components.forEach((item) => {
    App.component(item.name, item);
  });
};

export default {
  install,
};
