// Գրել ֆունկցիա որը desctructure կանի հետևյալ object-ը և կտպի արժեքները։ 
// { color: 'white', size: 20, material: 'cutton'  }

let obj = {
    color: 'white',
    size: 20,
    material: 'cutton',
}

function desctructure ({color, size, material}) {
    console.log(color, size, material);
}

desctructure(obj);