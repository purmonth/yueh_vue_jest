import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

test("render without error", () => {
  const wrapper = mount(Counter);
  const appComponent = wrapper.find('#IncrementButton'); 
  expect(appComponent.exists()).toBe(true);
});

test("increments counter value on click", async () => {
  const wrapper = mount(Counter);
  const button = wrapper.find("#IncrementButton");
  const text = wrapper.find("p");
  expect(text.text()).toContain("Total clicks: 0");
  await button.trigger("click");
  expect(text.text()).toContain("Total clicks: 1");
});

test("decrease counter value on click", async () => {
  const wrapper = mount(Counter);
  const button = wrapper.find("#DecrementButton");
  const text = wrapper.find("p");
  expect(text.text()).toContain("Total clicks: 0");
  await button.trigger("click");
  expect(text.text()).toContain("Total clicks: -1");
});
