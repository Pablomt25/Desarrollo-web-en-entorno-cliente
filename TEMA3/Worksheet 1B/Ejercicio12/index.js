function todasArrays(array) {
    return array.reduce((flat, currentArray) => {
        return flat.concat(currentArray);
    }, []);
}

const exampleArray = [[1, 5, 4], [3, 10], [2, 5]];
const result = todasArrays(exampleArray);
console.log(result);

