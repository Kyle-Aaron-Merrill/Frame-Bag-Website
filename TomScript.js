let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        if(this.classList.contains('active')){
            this.classList.remove('active');
        }
        else{
            this.classList.add('active');
        }
        if(this.classList.contains('burger-button')){
            document.getElementById('dropdown').classList.add('active');
            document.getElementById('site-banner').classList.add('active');
        }
    })
});
