function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}


function start(){
    hideElementById('header')
    hideElementById('footer')
    
}

function success(){
    hideElementById('header')
    hideElementById('ticket')
    hideElementById('footer')
    showElementById('success')
}