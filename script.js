// let tg = window.Telegram.WebApp;
// let buy = document.getElementById('buy');
// let order = document.getElementById('order');
// tg.expand()

// buy.addEventListener('click', () => {
//     document.getElementById('main').style.display = 'none'
//     document.getElementById('form').style.display = 'block'
//     document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + ' ' + tg.initDataUnsafe.user.last_name
// })

// order.addEventListener('click', () => {
//     document.getElementById('error').innerText = ''
//     let name = document.getElementById('user_name').value
//     let email = document.getElementById('user_email').value
//     let phone = document.getElementById('user_phone').value
//     if(name.length < 5){
//         document.getElementById('error').innerText = 'ошибка в name'
//         return
//     }
//     if (email.length < 5) {
//         document.getElementById('error').innerText = 'ошибка email'
//         return
//     }
//     if (phone.length < 5){
//         document.getElementById('error').innerText = 'ошибка в phone'
//         return
//     }

//     let data = {
//         name: name,
//         email: email,
//         phone: phone 
//     }

//     tg.sendData(JSON.stringify(data))

// tg.close()
// })



let count = 0

const clickableImage = document.getElementById('clickableImage');
const clickCount = document.getElementById('clickCount');


clickableImage.addEventListener('click', () => {
    count++;
    clickCount.textContent = count;
});