export const getData = (key) => {
  // 判断是否支持本地存储
  if (!localStorage)
    return;
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(`Error getting item ${key} from localStorage`, error);
  }
}

export const setData = (key, item) => {
  if (!localStorage)
    return;
  try {
    return localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error(`Error setting item ${key} from localStorage`, error);
  }
}