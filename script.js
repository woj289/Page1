function onInputBlur(input) {
        if(input.value == '')
                input.value = input.defaultValue;
}

function onInputFocus(input) {
        if(input.value == '' || input.value == input.defaultValue)
                input.value = '';
}
