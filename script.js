

let display = document.querySelector('.display-content');




// setInterval(() => {
//     display.style.opacity = (display.style.opacity == 0 ? 1 : 0);
// }, 400);






function addElement(element) {
    let get_elements = display.innerHTML;
    // console.log(get_elements)
    if (get_elements == 0) {
        display.innerHTML = element
    }
    else {
        display.innerHTML += element;
    }
    
    
};

function allClear() {
    console.log('cleared');
    
    display.innerHTML = 0;
    
}

function del() {
    let get_elements = display.innerHTML;
    console.log('del');
    let end = get_elements.length - 1;
    console.log(get_elements[end])
    if (get_elements == 'ERROR!'){
        display.innerHTML = 0;
    }
    else if (get_elements != 0) {
       get_elements = get_elements.slice(0, end);
        display.innerHTML = get_elements;
        if (get_elements.length == 0) {
            display.innerHTML = 0;
        } 
    }
    else {
        return null;
    }
    

}

function compute() {
    let get_elements = display.innerHTML;
    try{
        let answer = eval(get_elements);
        display.innerHTML = answer;
    }
    catch(e) {
        display.innerHTML = "ERROR!";
    }

}
