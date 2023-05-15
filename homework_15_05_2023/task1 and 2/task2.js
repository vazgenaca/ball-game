//Գրել ֆունկցիա որը desctructure կանի հետևյալ array-ը։ 0, 1 և մնացածը անդամները ։
// ['foo', 'bar', 'hello', 'bye', 'lorem', 'ipsum']

const arr = ['foo', 'bar', 'hello', 'bye', 'lorem', 'ipsum'];

function desctructure (first, second, ...rest) {
    console.log(first, second, ...rest);
}

desctructure(arr);