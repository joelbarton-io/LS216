const transactions = [
  { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];


function transactionsFor(targetId, transList) {
  return transList.filter(obj => obj.id === targetId);
}

function isItemAvailable(targetId, list) {
  const item = transactionsFor(targetId, list);
  const minus = count(item, 'out');
  const plus = count(item, 'in');
  return plus > minus;
}

function count(item, movementCommand) {
  const group = item.filter((tran) => tran.movement === movementCommand);
  // console.log(group.reduce((acc, curr = 0) => acc + curr, 0))
  // return
  let result = 0;
  group.forEach(trans => {
    result += trans.quantity;
  });

  return result;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
