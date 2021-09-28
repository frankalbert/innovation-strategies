const filterAndOrderArrayByProps = function ({
  arrayToSearch = [],
  search = "",
  searchByProp = "",
  orderByProp = searchByProp,
  order = null,
}) {
  return arrayToSearch
    .filter((item) => {
      return searchByProp
        ? item[searchByProp].toLowerCase().includes(search.toLowerCase())
        : [];
    })
    .sort((a, b) => {
      const transformA = orderByProp ? a[orderByProp].toUpperCase() : "";
      const transformB = orderByProp ? b[orderByProp].toUpperCase() : "";

      let typeComparation = 0;
      if (transformA > transformB) {
        typeComparation = 1;
      } else if (transformA < transformB) {
        typeComparation = -1;
      }
      return order === 1
        ? typeComparation
        : order === 2
        ? typeComparation * -1
        : 0;
    });
};

module.exports = {
  filterAndOrderArrayByProps,
};
