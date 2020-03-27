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
            if (event.code == 'KeyN') {
                console.log('work');
            } else {
                document.onkeyup = null;
            };
        };
    };
};