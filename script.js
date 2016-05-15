// generate the graph's bars using this data array

data = [
  'green', 100,
  'yellow', 50,
  'orange', 10,
  'purple', 75,
  'brown', 52,
  'lime', 16,
  'coral', 71,
  'cyan', 85,
  'linen', 22,
  'maroon', 55,
  'navy', 91,
  'olive', 41,
  'peru', 34,
  'pink', 43,
  'silver', 11,
  'tan', 60,
  'salmon', 87,
  'wheat', 12
]


for (var i = 0; i < data.length; i+=2) {
    document.write('<br />');
 
    var bar = document.createElement('div');
    bar.setAttribute('class', 'bar');
    document.getElementById('frame').appendChild(bar);

    if (i < data.length) {
    bar.style.backgroundColor = data[i];
    bar.style.height = data[i+1] * 4 + 'px';
    bar.style.left = i * 20 +'px';
    }    
}