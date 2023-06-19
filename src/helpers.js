const choices = (items) => items[Math.floor(Math.random() * items.length)];

const remove = (items, item) => {
  const index = items.indexOf(item);
  if (index === -1) {
    return undefined;
  } else {
    return items.splice(index, 1)[0];
  }
};

export { choices, remove };
