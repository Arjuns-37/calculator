// Function to calculate love percentage
function love(name1, name2) {
   
    name1 = name1.toLowerCase().replace(/\s/g, '');
    name2 = name2.toLowerCase().replace(/\s/g, '');
    const combinedName = name1 + name2;
    let total = 0;
    for (let i = 0; i < combinedName.length; i++) {
        total += combinedName.charCodeAt(i);
    }
    const percentage = total % 100;
    return percentage;
    
}   
// Handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Avoiding automatic submission
    
    const name1 = document.getElementById('yourName').value;
    const name2 = document.getElementById('partnerName').value;

    const lovePercentage = love(name1, name2);
    document.querySelector('form').style.display = 'none';
    
    
    // Display the result
    const resultDiv = document.createElement('div');
    resultDiv.className='input';
    resultDiv.textContent = `Love percentage between ${name1} and ${name2} is ${lovePercentage}% 💌💌`;
    document.querySelector('.box').appendChild(resultDiv);
    
});

