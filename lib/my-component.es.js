import { ref as a, openBlock as l, createElementBlock as p, toDisplayString as r } from "vue";
const m = (n, o) => {
  const e = n.__vccOpts || n;
  for (const [c, _] of o)
    e[c] = _;
  return e;
}, h = { class: "button" }, u = {
  name: "MyComponent",
  setup(n) {
    const o = a("我是组件内容");
    return (e, c) => (l(), p("button", h, r(o.value), 1));
  }
}, t = /* @__PURE__ */ m(u, [["__scopeId", "data-v-91ec60b4"]]);
t.install = function(n) {
  n.component(t.name, t);
};
const s = [t], f = (n) => {
  console.log(s, "components"), s.forEach((o) => {
    console.log(o, "jhhhh"), console.log(o.name, "hhhh"), n.component(o.name, o);
  });
}, i = {
  install: f
};
export {
  t as MyComponent,
  i as default
};
