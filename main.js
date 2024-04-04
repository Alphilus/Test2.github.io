// Bài 1
function getStringHasMaxLength(strings){
    let maxLength = 0;
    for(let i = 0; i < strings.length; i++){
        if(strings[i].length > maxLength){
            maxLength = strings[i].length;
        }
    }
    let result = strings.filter(str => str.length === maxLength)
    return result;
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));

//Bài 2
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

function userAbove25(users) {
    let isStatus = false; 
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 25) {
            isStatus = true; 
            break; 
        }
    }

    return isStatus;
}
console.log(userAbove25(users));

//Bài 3
function getcountElements(arr){
    let count = {};
    for(let element of arr){
        if (count[element]){
            count[element]++;
        } else {
            count[element] = 1;
        }
    }
    return count;
}

console.log(getcountElements(["one", "two", "three", "one", "one", "three"]));
