import { ref as _, openBlock as a, createElementBlock as p, toDisplayString as r } from "vue";
const l = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [c, s] of n)
    e[c] = s;
  return e;
}, m = { class: "button" }, u = {
  __name: "MyComponent",
  setup(t) {
    const n = _("我是组件内容");
    return (e, c) => (a(), p("button", m, r(n.value), 1));
  }
}, o = /* @__PURE__ */ l(u, [["__scopeId", "data-v-91ec60b4"]]);
o.install = function(t) {
  t.component(o.name, o);
};
const i = [o], f = (t) => {
  i.forEach((n) => {
    t.component(n.name, n);
  });
}, y = {
  install: f
};
export {
  o as MyComponent,
  y as default
};
