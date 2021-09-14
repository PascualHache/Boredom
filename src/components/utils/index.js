/**
 * Shuffle array algorythm Durstenfeld, an optimized version of Fisher-Yates
 * https://medium.com/@omar.rashid2/fisher-yates-shuffle-a2aa15578d2f
 **/

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function filterObjById(obj, id) {
  return obj.filter((el) => el.id === id)[0] || [];
}

export function deleteElementFromArray(arr, el) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
