var first_number = 1;
var second_number = 5;
document.querySelector('.first_number').textContent = first_number;
document.querySelector('.second_number').textContent = second_number;
var i = 0;
var total_numbers = 0;

// For Loop


for(i = 0 ; i < (second_number - first_number) ; i++)
{
    total_numbers++;
    document.querySelector('.final_result').textContent = total_numbers;

}

/*
while(i < (second_number -  first_number))
{
    total_numbers++;
    i++;
    document.querySelector('.final_result').textContent = total_numbers;

}
*/