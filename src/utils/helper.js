export const filterData = (searchText, restaurants) => {
  const filteredData = restaurants.filter((item) =>
    item?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
};
