function groupElements() {
    const allDivs = Array.from(document.querySelectorAll('div'));
    const group = allDivs.reduce((acc, el) => {
        if (acc[el.className]) {
            acc[el.className].push(el)
        } else {
            acc[el.className] = [el];
        }
        return acc;
    }, {});
    return group;
}


function analzePercent() {
    let group = groupElements();
    group = Object.keys(group).reduce((acc, key) => {
        acc[key] = group[key].length;
        acc.total += acc[key];
        return acc;
    }, {total: 0})
    const percents = {};
    for (let color in group) {
        percents[color] = (group[color]/group.total * 100) + '%';
    }
    alert(JSON.stringify(percents, null, 2));
}
document.getElementById('percents').addEventListener('click', analzePercent);

function changeSmallest() {
    const all = Array.from(document.querySelectorAll('div'));
    const smallEls = all.reduce((acc, el) => {
        if (!acc[el.className]) {
            acc[el.className] = el;
        }
        const preWidth = parseInt(acc[el.className].style.width);
        const compareWidth = parseInt(el.style.width);
        if (preWidth > compareWidth) {
            acc[el.className] = el;
        }
        return acc;
    }, {});
    Object.values(smallEls).forEach(el => el.style.backgroundColor = 'orange');
}
document.getElementById('smallest').addEventListener('click', changeSmallest);

document.addEventListener('click', ev => {
    if (ev.target.tagName === 'DIV') {
        ev.target.style.borderRadius = '50%';
    }
});

document.getElementById('move').addEventListener('click', (el) => {
    const groups = groupElements();
    Object.values(groups).forEach((colorArr, i) => {
        colorArr.forEach((el) => {
            switch (i) {
                case 0:
                    el.style.left = 0;
                    break;
                case 1:
                    const left = window.screen.availWidth - parseInt(el.style.width);
                    el.style.left = `${left}px`;
                    break;
                case 2:
                    el.style.top = 0;
                    break;
                case 3:
                    // I'm bit lazy )
                    el.style.removeProperty('top');
                    el.style.bottom = 0;
                    break;
            }
        });
    })
});

// 4 -----------------
//  Ստեղծել button, որի click֊ը 
// դեղինները կտանի էկրանի աջ անկունը, կանաչները ձաք, կապույտները վերև, կարմիրները ներգև։



