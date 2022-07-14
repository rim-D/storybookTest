export const createButton = ({
    whiteMode = true, 
    borderWidth = 1,
    borderColor,
    backgroundColor,
    color,
    label = '교육문의',
    btnType = 'primary',
    elementType = 'button'
}) => {
    const btn = document.createElement(`${elementType}`);  
          btn.style.backgroundColor = backgroundColor;
          btn.style.border = `${borderWidth}px solid ${borderColor}`;
          btn.style.color = color;
          btn.innerText = label;

          const mode = whiteMode ? '-white' : '';
          btn.className = [`btn_${btnType} -radius`, mode].join(' ');

          return btn;
};