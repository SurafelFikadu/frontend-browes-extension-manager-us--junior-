function ClickMoonSun() {
    let MoonSun = document.getElementById('moon-sun');
    let MoonImg = "assets/images/icon-moon.svg";
    let SunImg = "assets/images/icon-sun.svg";
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    let exLogo = document.getElementById('ex-logo');
    let extension = document.querySelector('.ex')
    let list = document.querySelector('.list');
    let li = document.querySelectorAll('li');
    let box = document.querySelectorAll('.box');
    let title = document.getElementsByClassName('title');
    let para = document.querySelectorAll('.para');
    let remove = document.querySelectorAll('.remove');
    let sure = document.querySelector('.sure');
    let btns = document.querySelectorAll('.btns button')

    if(MoonSun.src.includes(SunImg)) {
        btns.forEach(item => {
            item.classList.add('btn-light')
        })
        sure.classList.add('sure-light');
        MoonSun.src = MoonImg
        body.classList.add('light')
        header.classList.add('header-light')
        MoonSun.classList.add('h-img2-light')
        exLogo.src = 'assets/images/logo.svg'
        extension.classList.add('ex-light');
        list.classList.add('list-light');
        li.forEach((item)=> {
            item.classList.add('li-light')
        })
        box.forEach((item) => {
            item.classList.add('box-light')
        })
        for (let i = 0; i < title.length; i++) {
            title[i].classList.add('title-light')
        }
        para.forEach((item) => {
            item.classList.add('para-light')
        })
        remove.forEach(item => {
            item.classList.add('remove-light')
        })
    }
    else {
        btns.forEach(item => {
            item.classList.remove('btn-light')
        })
        sure.classList.remove('sure-light');
        MoonSun.src = SunImg
        body.classList.remove('light')
        header.classList.remove('header-light')
        MoonSun.classList.remove('h-img2-light')
        exLogo.src = 'assets/images/extension-logo.png'
        extension.classList.remove('ex-light');
        list.classList.remove('list-light');
        li.forEach((item)=> {
            item.classList.remove('li-light')
        })
        box.forEach((item) => {
            item.classList.remove('box-light')
        })
        for(let i = 0; i < title.length; i++) {
            title[i].classList.remove('title-light')
        }
        para.forEach((item) => {
            item.classList.remove('para-light')
        })
        remove.forEach(item => {
            item.classList.remove('remove-light')
        })
    }
}

const all = document.getElementById('all');
const active = document.getElementById('active');
const inactive = document.getElementById('inactive');

let box = document.getElementsByClassName('box');
let checkbox = document.getElementsByClassName('checkbox');

const Active = () => {
    for(let i=0; i < box.length; i++) {
        box[i].classList.remove('none')
        box[i].classList.remove('block')
        if(active.checked) {
            for(let i = 0; i < checkbox.length; i++) {
                if(!checkbox[i].checked) {
                    box[i].classList.add('none');
                }
            }
        }
    }
}

const Inactive = () => {
    for(let i=0; i < box.length; i++) {
        box[i].classList.remove('none')
        box[i].classList.remove('block')
        if(inactive.checked) {
            for(let i = 0; i < checkbox.length; i++) {
                if(checkbox[i].checked) {
                    box[i].classList.add('none');
                }
            }
        }
    }
}

const All = () => {
    for(let i=0; i<box.length; i++) {
        box[i].classList.remove('none');
        box[i].classList.add('block');
    }
}

// removeButtons.forEach(btn => {
//     btn.addEventListener('click', function () {
//         this.parentElement.remove();
//     })
// })

let removeButtons = document.querySelectorAll('.remove');
removeButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        let sure = document.querySelector('.sure');
        let header = document.querySelector('header');
        let exList = document.querySelector('.ex-list');
        let main = document.querySelector('main');

        header.classList.add('dimmed');
        exList.classList.add('dimmed');
        main.classList.add('dimmed');
        sure.classList.remove('none');

        let removeBtn = document.querySelector('.remove-btn');
        let cancelBtn = document.querySelector('.cancel-btn');

        removeBtn.addEventListener('click', () => {
            const boxx = this.closest('.box');
            boxx.remove();

            header.classList.remove('dimmed');
            exList.classList.remove('dimmed');
            main.classList.remove('dimmed');
            sure.classList.add('none');
        })

        cancelBtn.addEventListener('click', () => {
            header.classList.remove('dimmed');
            exList.classList.remove('dimmed');
            main.classList.remove('dimmed');
            sure.classList.add('none');
        })

        // const boxx = this.closest('.box');
        // boxx.remove();
    })
})