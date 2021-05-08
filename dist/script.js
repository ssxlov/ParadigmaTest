Array.prototype.multiget = function(){
  var args = Array.apply(null, arguments);
  var result = [];
  for(var i = 0; i < args.length; i++){
      result.push(this[args[i]]);
  }       

  return result;
}

var icons = [
    'b','c','d','e','f','g','h','i', 'j'
];

var slots = document.querySelector('.slots');
var cols = document.querySelectorAll('.col');
for(var i in cols) {
  if (!cols.hasOwnProperty(i))
    continue;
    
  var col = cols[i];
  var str = '';
  var firstThree = '';
  
  for(var x = 0; x < 30; x++) {
    var part = '<svg class="icon"><use xlink:href="#icon-'+icons[Math.floor(Math.random()*icons.length)]+'"></use></svg>';
    str += part
    if (x < 3) firstThree += part;
  }
  col.innerHTML = str+firstThree;
  
}

document.getElementById('spin_button').focus();

function spin(elem) {
  document.getElementById('taphere').style.display = "none"
  document.getElementById('spinbutton').classList.add('buttonclick')
  cols[0].childNodes[0].innerHTML = '<use xlink:href="#icon-a"></use>';
  cols[1].childNodes[1].innerHTML = '<use xlink:href="#icon-a"></use>';
  cols[2].childNodes[1].innerHTML = '<use xlink:href="#icon-a"></use>';
  cols[3].childNodes[2].innerHTML = '<use xlink:href="#icon-a"></use>';
  cols[4].childNodes[0].innerHTML = '<use xlink:href="#icon-a"></use>';
  elem.setAttribute('disabled', true);
  elem.classList.toggle('animate', true)
  elem.style.transition = "transform 1s"
  document.getElementById('spinbutton').src = '/src/buttonactive.png'
  slots.classList.toggle('spinning', true);
  window.setTimeout(function() {
    for(var i in cols) {
    if (!cols.hasOwnProperty(i))
      continue;
    var col = cols[i];
      cols[0].childNodes[30].innerHTML = '<use xlink:href="#icon-a"></use>';
      cols[1].childNodes[31].innerHTML = '<use xlink:href="#icon-a"></use>';
      cols[2].childNodes[31].innerHTML = '<use xlink:href="#icon-a"></use>';
      cols[3].childNodes[32].innerHTML = '<use xlink:href="#icon-a"></use>';
      cols[4].childNodes[30].innerHTML = '<use xlink:href="#icon-a"></use>';
      var icons = [
        'a','b','c','d','e','f','g','h','i', 'j'
];

      // var results = [
        
      //   icons[Math.floor(Math.random()*icons.length)],
      //   icons[Math.floor(Math.random()*icons.length)],
      //   icons[Math.floor(Math.random()*icons.length)]
      // ];
      
     console.log(icons[Math.floor(Math.random()*icons.length)]);
     function show_b() {
      document.getElementById("bonus").classList.add('bonus-show'),
      document.getElementById("slots").style.display = "none"
     }
      setTimeout(show_b,1500)
      // document.getElementById("chest").style.display = "block"
      // document.getElementById("chest").style.opacity= "1";
      // document.getElementById("chest").style.transition = "opacity 5s";

    var icons = col.querySelectorAll('.icon use');
    
    // for(var x = 0; x < 3; x++) {
      
    //   icons[x].setAttribute('xlink:href', '#icon-'+results[x]);
    //   icons[(icons.length-3)+x].setAttribute('xlink:href', '#icon-'+results[x]);
  
    // }
  }
  document.getElementById('icon-a').innerHTML = '<image href="/src/slot1gold.png" class="gold" height="80" width="100"></image>'
  //document.getElementsByClassName('gold').style.animation = 'animation: wiggle 0.4s linear infinite;';
  document.body.style = 'background: url(/src/background2.png); background-size: 100%; background-repeat: no-repeat;'
  }, 1500);
  
  window.setTimeout(function() {
    slots.classList.toggle('spinning', false);
    elem.classList.toggle('animate', false)
    elem.removeAttribute('disabled');
    elem.src = '/src/button.png'
    elem.focus();
  }.bind(elem), 1600);
}
function spinagain() {
  document.getElementById('bonus').classList.remove('bonus-show');
  document.getElementById("slots").style.display = "block";
  document.getElementById('spinbutton').style.display = 'none';
  document.getElementById('spin_button').innerHTML = '<img src="/src/button.png" alt="" onclick="spin2(this)" value="spin" id="spinbutton">'
  Array.prototype.multiget = function(){
    var args = Array.apply(null, arguments);
    var result = [];
    for(var i = 0; i < args.length; i++){
        result.push(this[args[i]]);
    }       
  
    return result;
  }
  
  var icons = [
      'b','c','e','f','g','h','i', 'j'
  ];
  
  var slots = document.querySelector('.slots');
  var cols = document.querySelectorAll('.col');
  for(var i in cols) {
    if (!cols.hasOwnProperty(i))
      continue;
      
    var col = cols[i];
    var str = '';
    var firstThree = '';
    
    for(var x = 0; x < 30; x++) {
      var part = '<svg class="icon"><use xlink:href="#icon-'+icons[Math.floor(Math.random()*icons.length)]+'"></use></svg>';
      str += part
      if (x < 3) firstThree += part;
    }
    col.innerHTML = str+firstThree;
    
  }
  
  document.getElementById('spin_button').focus();
  
}
function spin2(elem) {
  
  document.getElementById('spinbutton').classList.add('buttonclick')
  cols[0].childNodes[0].innerHTML = '<use xlink:href="#icon-d"></use>';
  cols[1].childNodes[1].innerHTML = '<use xlink:href="#icon-d"></use>';
  cols[2].childNodes[1].innerHTML = '<use xlink:href="#icon-d"></use>';
  cols[3].childNodes[2].innerHTML = '<use xlink:href="#icon-d"></use>';
  cols[4].childNodes[0].innerHTML = '<use xlink:href="#icon-d"></use>';
  elem.setAttribute('disabled', true);
  elem.classList.toggle('animate', true)
  elem.style.transition = "transform 1s"
  document.getElementById('spinbutton').src = '/src/buttonactive.png'
  slots.classList.toggle('spinning', true);
  window.setTimeout(function() {
    for(var i in cols) {
    if (!cols.hasOwnProperty(i))
      continue;
    var col = cols[i];
      cols[0].childNodes[30].innerHTML = '<use xlink:href="#icon-d"></use>';
      cols[1].childNodes[31].innerHTML = '<use xlink:href="#icon-d"></use>';
      cols[2].childNodes[31].innerHTML = '<use xlink:href="#icon-d"></use>';
      cols[3].childNodes[32].innerHTML = '<use xlink:href="#icon-d"></use>';
      cols[4].childNodes[30].innerHTML = '<use xlink:href="#icon-d"></use>';
      var icons = [
        'a','b','c','d','e','f','g','h','i', 'j'
];

      // var results = [
        
      //   icons[Math.floor(Math.random()*icons.length)],
      //   icons[Math.floor(Math.random()*icons.length)],
      //   icons[Math.floor(Math.random()*icons.length)]
      // ];
      
     console.log(icons[Math.floor(Math.random()*icons.length)]);
     function show_b() {
      document.getElementById("bonus2").classList.add('bonus-show'),
      document.getElementById("slots").style.display = "none"
     }
      setTimeout(show_b,1500)
      // document.getElementById("chest").style.display = "block"
      // document.getElementById("chest").style.opacity= "1";
      // document.getElementById("chest").style.transition = "opacity 5s";

    var icons = col.querySelectorAll('.icon use');
    
    // for(var x = 0; x < 3; x++) {
      
    //   icons[x].setAttribute('xlink:href', '#icon-'+results[x]);
    //   icons[(icons.length-3)+x].setAttribute('xlink:href', '#icon-'+results[x]);
  
    // }
  }
  document.getElementById('icon-d').innerHTML = '<image href="/src/slot4win.png" class="gold" height="80" width="100"></image>'
  //document.getElementsByClassName('gold').style.animation = 'animation: wiggle 0.4s linear infinite;';
  document.body.style = 'background: url(/src/background2.png); background-size: 100%; background-repeat: no-repeat;'
  }, 1500);
  
  window.setTimeout(function() {
    slots.classList.toggle('spinning', false);
    elem.classList.toggle('animate', false)
    elem.removeAttribute('disabled');
    elem.src = '/src/button.png'
    elem.focus();
  }.bind(elem), 1600);
}