const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

// vamos criar uma funcao para nao escrever muitas vezes a linha abaixo
//    bg: window.getComputedStyle(html).getPropertyValue("--bg")
const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    // pegar esse estile do css
    //bg: window.getComputedStyle(html).getPropertyValue("--bg")
    bg: getStyle(html, "__bg")
    , bgPanel: getStyle(html, "__bg-panel")
    , colorHeadings: getStyle(html, "__color-headings")
    , colorText: getStyle(html, "__color-text")
}

const darkMode = {
    bg: "#333333"
    , bgPanel: "#434343"
    , colorHeadings: "#3664ff"
    , colorText: "#b5b5b5"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    //console.log(colors)
    Object.keys(colors).map(key =>
        html.style.setProperty( transformKey(key), colors[key])    
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
})

