const user = document.querySelectorAll('.user')
const mobFilter = document.querySelectorAll('.mob-filter')
const userName = document.querySelector('.user-details .user-details-head h1')
const userDetails = document.querySelector('.user-details')
const accod = document.querySelectorAll('.m-head')


user.forEach(user =>{
    if(screen.width < "1024"){
        user.dataset.target = "#userDetails";
        console.log(screen.width)
    }
    user.addEventListener('click', function(e){
        userDetails.classList.remove('active')
        let headTitle = this.querySelector("h1").innerText
        userName.innerText = headTitle
        userDetails.classList.add('active')
    })
    
})
mobFilter.forEach(mobFilter =>{
    if(screen.width < "1024"){
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