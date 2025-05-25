document.querySelectorAll('.input-wrapper').forEach(wrapper => {
    const input = wrapper.querySelector('input[type="text"]');
    const colorPicker = wrapper.querySelector('.color-picker');
    const fontPicker = wrapper.querySelector('.font-picker');
    const fontSizePicker = wrapper.querySelector('.font-size-picker');
    const deleteBtn = wrapper.querySelector('.delete-btn');
    colorPicker.value = rgbToHex(getComputedStyle(input).color);
    colorPicker.addEventListener('input', () => {
      input.style.color = colorPicker.value;
    });
    fontPicker.addEventListener('change', () => {
      input.style.fontFamily = fontPicker.value;
    });
    fontSizePicker.addEventListener('input', () => {
      input.style.fontSize = fontSizePicker.value + "px";
    });

    deleteBtn.addEventListener('click', () => {
      wrapper.remove();
    });
  });
  function rgbToHex(rgb) {
    let result;
    if (rgb && rgb.indexOf('rgb') !== -1) {
      let arr = rgb.match(/\d+/g);
      result = "#" + arr.map(x => {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }).join('');
    }
    return result || rgb;
  }
  