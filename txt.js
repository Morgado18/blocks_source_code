   document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
    document.addEventListener('keydown', function(event){
        if (event.ctrlKey && event.key === 'u') {
            event.preventDefault();
        }
        if (event.ctrlKey && event.key === 'U') {
            event.preventDefault();
        }
        if(event.key === 'F12'){
            event.preventDefault();
        }
        if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') {
            event.preventDefault();
        }
        if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'i') {
            event.preventDefault();
        }
    })
