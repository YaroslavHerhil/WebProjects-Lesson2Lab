// let student = {
//     name: "name",
//     adr: {
//         houseNumber: 12,
//         street: "street",
//         city: "city",
//         country: "country",
//         test: {
//             test: "test",
//             test1: "test2",
//             test2: "test3",
//             test3: "test4",
//         }
//     },
//     nameTwo: "nameTwo",
//     adrTwo: {
//         houseNumber: 34,
//         street: "streetTwo",
//         city: "cityTwo",
//         country: "countryTwo"
//     }
// };
// analog_foreach(student);


function is_object(value){
    return value !== null && typeof value === 'object';
}

function object_fields(value){
    for(let temp in value)
    {
        if(is_object(value[temp]))
        {
            object_fields(value[temp]);
        }
        else{
            alert(temp + " : "+ value[temp]);
        }
    }
}
//-------------------------------------------------------------------


let rectangle = {
    left_bottom:{
        X: 12,
        Y: 10
    },
    right_bottom:{
        X: 18,
        Y: 10
    },
    right_top:{
        X: 18,
        Y: 14
    },
    left_top:{
        X: 12,
        Y: 14
    }
};

//1
function rectangle_points(rect){
    for(let temp in rectangle)
    {
        alert(`${temp} - X:${rect[temp].X}|Y:${rect[temp].Y}`);
    }
}


//2
function rectangle_width(rect)
{
    let width = Math.abs(rect.right_bottom.X - rect.left_bottom.X);
    alert(`Width of the rectangle - ${width}`);
}

//3
function rectangle_height(rect)
{
    let height = Math.abs(rect.right_bottom.Y - rect.right_top.Y);
    return
}

//4
function rectangle_area(rect){
}