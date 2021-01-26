const [ $p , $h1 ] = document.querySelectorAll('#test');
var name = ''

$p.addEventListener('click', ( e ) => {
    e.target.style.cursor = 'pointer';
    e.target.innerHTML === 'OUTRO MENU' ? e.target.innerHTML = 'MENU DA INDEX' : e.target.innerHTML = 'OUTRO MENU';
});

$h1.addEventListener('click', ( e ) => {
    e.target.style.cursor = 'pointer';
    if(e.target.style.color !== 'red'){
        name = e.target.innerHTML.split(' ').pop();
        e.target.innerHTML = 'SOBRE A EMPRESA NÃO SOBRE VC';
        e.target.style.color = 'red';
    } else {
        e.target.innerHTML = `SOBRE VOCÊ ${name.toUpperCase()}`;
        e.target.style.color = 'yellow';
    }
});
