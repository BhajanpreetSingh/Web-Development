

// i have used one code to understand the functions , that how functions Worker, 
// i have changed statements place for checking the code that if we are changing the
//  places of statments what errors would we get


var f = 56;

s();
h();
function s(){
    var f = 43;
    console.log(f);
}

function h(){
        var f = 90;
        console.log(f);
}


console.log(f);

