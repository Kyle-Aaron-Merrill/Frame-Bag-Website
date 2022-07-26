setTimeout(function(){
    document.body.className="";
},500);


let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        if(this.classList.contains('burger-button') && !this.classList.contains('active')){
            this.classList.add('active');
            document.getElementById('dropdown').classList.add('active');
            document.getElementById('site-banner').classList.add('active');
            document.getElementById('site-nav').classList.add('active');
            document.getElementById('site-container').classList.add('active');
        }
        else{
            this.classList.remove('active');
            document.getElementById('dropdown').classList.remove('active');
            document.getElementById('site-banner').classList.remove('active');
            document.getElementById('site-nav').classList.remove('active');
            document.getElementById('site-container').classList.remove('active');
        }
    })
});

function imageSlider(){
    let 
}