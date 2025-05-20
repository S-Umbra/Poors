document.querySelector('a[href="#ej3"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#ej3').style.display = 'flex';
  });

  
  document.querySelector('.cerrar-cesta').addEventListener('click', function() {
    document.querySelector('#ej3').style.display = 'none';
  });

  
  function agregarACesta(nombre, precio) {
    const lista = document.getElementById('lista-cesta');
  
    
    const item = document.createElement('li');
    item.classList.add('item-cesta');
  
   
    const texto = document.createElement('span');
    texto.textContent = `${nombre} - $${precio}`;
  
    
    const eliminar = document.createElement('a');
    eliminar.textContent = '  ✖';
    eliminar.classList.add('eliminar-item');
    eliminar.addEventListener('click', function () {
      item.remove();
      
      const totalSpan = document.getElementById('total-cesta');
      let total = parseFloat(totalSpan.textContent);
      total -= precio;
      totalSpan.textContent = total.toFixed(2);
    });
  
   
    item.appendChild(texto);
    item.appendChild(eliminar);
  
    
    lista.appendChild(item);
  
    
    const totalSpan = document.getElementById('total-cesta');
    let total = parseFloat(totalSpan.textContent);
    total += precio;
    totalSpan.textContent = total.toFixed(2);
  }

  
document.querySelectorAll('.ropa-hover').forEach(function(elemento) {
    elemento.addEventListener('click', function() {
      const nombre = this.dataset.nombre;
      const precio = parseFloat(this.dataset.precio);
      agregarACesta(nombre, precio);
    });
  });

document.querySelector('.mas').addEventListener('click', function(e) {
    const bento = document.querySelector('.BentoStyle');
    const boton = document.querySelector('.mas');
  
    if (boton.textContent === "Ver menos") {
      bento.style.maxHeight = "600px";
      boton.textContent = "Ver más";
    } else {
      bento.style.maxHeight = "2000px"; 
      boton.textContent = "Ver menos";
    }
    boton.scrollIntoView({ behavior: 'smooth', block: 'center' });

});
  

document.querySelector('menu-button').addEventListener('click', function () {
  const menu = document.querySelector('menu');
  menu.classList.toggle('show');
});
