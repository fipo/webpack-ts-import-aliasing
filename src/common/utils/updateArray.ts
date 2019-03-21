const updateArray = (array, item, action) => {
  const newArray: string[] = array.slice();

  if (action) {
    newArray.splice(0, 0, item);
  } else {
    const index = newArray.indexOf(item);
    newArray.splice(index, 1);
  }

  return newArray;
};

export default updateArray;
