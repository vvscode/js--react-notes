import demoData from "./demo-data";

const LS_ITEMS_KEY = "items";

let items = localStorage.getItem(LS_ITEMS_KEY);
try {
  items = JSON.parse(items);
} catch (e) {}

if (!Array.isArray(items)) {
  items = demoData;
}
items = items.map(item => ({
  ...item,
  date: item.date instanceof Date ? item.date : new Date(item.date)
}));

function saveItems() {
  localStorage.setItem(LS_ITEMS_KEY, JSON.stringify(items));
}

export const getItems = () =>
  new Promise(resolve => setTimeout(resolve, 1000, [...items]));

export const addItem = item => {
  item = {
    id: Date.now(),
    title: "Default title",
    description: "",
    priority: 1,
    date: new Date(),
    done: false,
    ...item
  };
  items = [...items, item];
  saveItems();
  return new Promise(resolve => setTimeout(resolve, 1000, item));
};
