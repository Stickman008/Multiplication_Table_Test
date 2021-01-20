calculateButton = document.getElementById("calculate");

function multiple(){
    output_table = document.getElementById("output");
    input_number = document.getElementById("input");
    let text = ''

    let number = Number(input_number.value);

    if(number===0) return;
    for(let i=1;i<=12;i++){
        text += number+' ';
        text += 'x ';
        text += i+' = ';
        text += i*number
        text += '<br>';
    }
    //console.log(output_table.innerHTML);
    output_table.innerHTML = text;
}

calculateButton.addEventListener("click", multiple);

