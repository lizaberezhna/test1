// Додатковий JavaScript код
console.log('California Housing Price Predictor завантажено');

// Додаткові функції можна додати тут
function showExample(exampleType) {
    const examples = {
        'average': [3.87, 28.6, 5.43, 1.10, 1425, 3.10, 35.63, -119.57],
        'expensive': [8.33, 41.0, 6.98, 1.02, 322, 2.56, 37.88, -122.23],
        'cheap': [1.91, 17.0, 4.05, 1.13, 6485, 4.69, 34.05, -118.25]
    };
    
    if (examples[exampleType]) {
        const fields = ['medinc', 'age', 'rooms', 'bedrooms', 'population', 'occupancy', 'latitude', 'longitude'];
        fields.forEach((field, index) => {
            document.getElementById(field).value = examples[exampleType][index];
        });
        alert(`Завантажено приклад: ${exampleType}`);
    }
}

// Додаємо обробники для прикладів
document.addEventListener('DOMContentLoaded', function() {
    // Можна додати кнопки для прикладів
    const exampleDiv = document.createElement('div');
    exampleDiv.innerHTML = `
        <p>Приклади:</p>
        <button onclick="showExample('average')">Середня нерухомість</button>
        <button onclick="showExample('expensive')">Дорога нерухомість</button>
        <button onclick="showExample('cheap')">Дешева нерухомість</button>
    `;
    document.querySelector('.container').appendChild(exampleDiv);
});