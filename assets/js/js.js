const display = document.querySelector('.display');


(function () {
    btnClick();

    function btnClick() {
        document.addEventListener('click', function (e) {
            const el = e.target;
            const className = el.classList;
            displayError();
            
            if (className.contains('btn-num')) {
                btnForDisplay(el.innerText);
            }
            if (className.contains('btn-clear')) {
                clearDislplay();
            }
            if (className.contains('btn-del')) {
                delDisplay();
            }
            if (className.contains('btn-eq')) {
                Calculate();
            }
        }.bind(this));
    }

    //functions 
    function btnForDisplay(value) {
        display.value += value;
    }
    function clearDislplay() {
        display.value = '';
    }
    function delDisplay() {
        display.value = display.value.slice(0, -1);
    }
    function displayError(){
        if (display.value === "Error") {
            clearDislplay();
        }
    }
    function Calculate() {
        let mathCount = display.value;        
        try {
            let result = eval(mathCount);
            if (typeof (result) != 'number') {
                display.value = 'Error';
            } else {
                display.value = result;
            }
        } catch (error) {
            console.log(error);
            display.value = 'Error';
        }
    }

})();

