const user = document.querySelectorAll('.user')
const userH = document.querySelectorAll('.user h1')
const mobFilter = document.querySelectorAll('.mob-filter')
const userName = document.querySelector('.user-details .user-details-head h1')
const userDetails = document.querySelector('.user-details')
const accod = document.querySelectorAll('.m-head')

// userH.forEach(user =>{
//     user.addEventListener('click', function(e){
//         console.log(e.target.innerText)
//         userDetails.classList.remove('active')
//         userName.innerText = e.target.innerText
//         userDetails.classList.add('active')
//         user.classList.add('active')
//     })
// })
user.forEach(user =>{
    if(screen.width < "1024"){
        // user.setAttribute('data-target', "number");
        user.dataset.target = "#userDetails";
        console.log(screen.width)
    }
    user.addEventListener('click', function(e){
        // console.log(e.target)
        userDetails.classList.remove('active')
        let headTitle = this.querySelector("h1").innerText
        userName.innerText = headTitle
        userDetails.classList.add('active')
    })
    
})
mobFilter.forEach(mobFilter =>{
    if(screen.width < "1024"){
        // user.setAttribute('data-target', "number");
        mobFilter.dataset.target = "#mobileModal";
        console.log(screen.width)
    }    
})
accod.forEach(accord =>{
    accord.addEventListener('click', function(e){
        
        if(this.querySelector("#accord").innerText === '+' ){
            this.querySelector("#accord").innerText = '-';
        }else{
            this.querySelector("#accord").innerText = '+';
        }
    })
})