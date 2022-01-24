const body = document.querySelector('body');

const addBtn = document.getElementById('btnAdd');
addBtn.addEventListener('click', function(){
    const p = document.createElement('p');
    p.textContent = 'Ce paragraphe viens de s\'ajouter';
    this.insertAdjacentElement('afterend',p);
});

const changeBtn = document.getElementById('btnChange');
changeBtn.addEventListener('click', function(){
    this.nextElementSibling.textContent = 'hello';
});

const styleBtn = document.getElementById('btnStyle');
styleBtn.addEventListener('click', function(){
    this.nextElementSibling.style.color = 'red';
});

const page2Btn = document.getElementById('page2Btn');
const page1 = document.getElementById('page_1');
const page2 = document.getElementById('page_2');
page2Btn.addEventListener('click', function(){
    page2.style.display = 'block';
    page1.style.display = 'none'
});

const input =  document.getElementById('password');

document.getElementById('validBtn')
    .addEventListener('click', function(){
        if(input.value.length !== 6){
            alert('CODE INVALIDE')
        } else {
            alert('Javascript sert aussi à faire d\'autre chose comme récupérer des données servies par une API mais nous allons nous concentrer sur ce que nous venons de voir')
        }
    });