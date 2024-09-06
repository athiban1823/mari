let subMenu = document.getElementById("submenu");
let subMenu2 = document.getElementById("submenu2");

function toggleMenu(){
    subMenu.classList.toggle("open");
}
function togglemenu(){
    subMenu2.classList.toggle("open2");
}

const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.mini');
const searchBox=document.querySelector('#search');


// search
searchBox.addEventListener('keyup',(e)=>{
    searchText=e.target.value.toLowerCase().trim();
    boxes.forEach((box)=>{
        const data=box.dataset.iteam;
        if(data.includes(searchText)){
            box.style.display='block';
        }
        else{
            box.style.display='none';
        }
    });
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked');
});

// buttons
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const btnFilter=e.target.dataset.filter;

        boxes.forEach((box)=>{
            if(btnFilter=='all'){
                box.style.display='block';
            }
            else{
                const boxFilter=box.dataset.iteam;
                if(boxFilter==btnFilter){
                    box.style.display='block';
                }
                else{
                    box.style.display='none';
                }
            }
        });
    });
});

function setActiveBtn(e){ 
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
        e.target.classList.add('btn-clicked');
}


const btncart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnclose=document.querySelector('#cart-close');


btncart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});
btnclose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});