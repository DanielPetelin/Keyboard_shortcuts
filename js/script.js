let flag = false;

// document.onkeydown = function (event) {
//     console.log(event);

//     if (event.code == 'AltLeft') flag = true;
//     if (event.code == 'KeyN' && flag) {
//         flag = false;
//         console.log('work');
//     };
// };

document.onkeydown = function (event) {
    // console.log(event);

    if (event.code == 'AltLeft') {
        document.onkeyup = function (event) {
            if (event.code == 'KeyA') {
                console.log('Вы нажали AltLeft и a');
            } else if (event.code == 'KeyB') {
                console.log('Вы нажали AltLeft и b');
            } else if (event.code == 'KeyC') {
                console.log('Вы нажали AltLeft и c');
            };
        };
    };

    if (event.code == 'ShiftLeft') {
        document.onkeyup = function (event) {
            if (event.code == 'KeyA') {
                console.log('Вы нажали ShiftLeft и a');
            } else if (event.code == 'KeyB') {
                console.log('Вы нажали ShiftLeft и b');
            } else if (event.code == 'KeyC') {
                console.log('Вы нажали ShiftLeft и c');
            };
        };
    };
};