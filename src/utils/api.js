import demoData from "./demo-data";

const LS_ITEMS_KEY = "items";

export const getItems = () =>
  new Promise(resolve => {
    let items = localStorage.getItem(LS_ITEMS_KEY);
    let ret;
    try {
      items = JSON.parse(items);
    } catch (e) {}

    if (Array.isArray(items)) {
      ret = items;
    } else {
      ret = demoData;
    }
    setTimeout(resolve, 1000, ret);
  });
