'use strict';

var img = document.getElementById('live-preview-current-variant'),
    more = document.getElementById('button-more'),
    less = document.getElementById('button-less'),
    previewcontainer = document.getElementById('live-preview'),
    element = document.createElement("DIV"),
    textSize = document.createTextNode("Size");

var variantContainer = document.getElementById("variants-container"),

//-->
// ESTE ES EL CONTENEDOR DE EL DISEÑO DE FONDO
    imgVariantContainer = document.createElement("img"),

// --<
    currentVariantDesign = document.getElementById("live-preview-current-variant"),
    imgCurrentModel = document.createElement("img"),
    currentdesign = document.getElementById("current-design"),
    h1titleDesign = document.createElement("h1"),
    imageFull = document.createElement("div"),
    fullViewContainer = document.getElementById("live-preview-current-variant-fullview"),
    modelFull = document.getElementById('live-preview-current'),
    formData = document.getElementById('send-data'),

// inputWidth = document.createElement("input"),
// inputHeight = document.createElement("input"),
    inputimgdesign = document.createElement("input"),
    inputtela = document.createElement("input"),
    inputimgModel = document.createElement("input"),
    inputDesignName = document.createElement("input"),
    modelFullContainer = document.getElementById('live-preview-current-variant-fullview');

function elemento(e) {
    var tag;
    if (e.srcElement) {
        tag = e.srcElement;
    } else if (e.target) {
        tag = e.target;
    }
    var h1content = document.createTextNode(" " + tag.alt);

    if (tag.tagName == "IMG" && tag.className == "variants-img") {
        //-->
        // ESTO DEFINE LOS ATRIBUTOS DEL DISEÑO DE FONDO DEL MODELO
        // imgVariantContainer.src = tag.src.replace("thumb", "large");
        // imgVariantContainer.src = tag.src;
        imgVariantContainer.id = "live-preview-current-variant";
        imgVariantContainer.className = "live-preview-current-variant";
        imgVariantContainer.alt = tag.alt;
        imgVariantContainer.style.backgroundImage = "url('" + tag.src + "')";
        imgVariantContainer.style.position = "absolute";
        imgVariantContainer.style.left = "1px";
        imgVariantContainer.style.top = "1px";
        imgVariantContainer.width = "1000";
        imgVariantContainer.height = "1000";
        imgVariantContainer.style.backgroundSize = "30%";
        imgVariantContainer.style.backgroundRepeat = "repeat";
        //--<

        //-->
        // CONTENEDOR DE VISTA PREVIAFINAL
        // imageFull.style.backgroundImage = "url('"+tag.src+"')";
        // imageFull.style.position = "absolute";
        // imageFull.style.left = "1px";
        // imageFull.style.top = "1px";
        // imageFull.style.width= document.getElementById("live-preview-current-variant").style.width;
        // imageFull.style.height= document.getElementById("live-preview-current-variant").style.height;
        // imageFull.style.backgroundSize = "30%";
        // imageFull.style.backgroundRepeat = "repeat";
        // imageFull.src = document.getElementById('live-preview-current-variant').src;
        // imageFull.className = "live-preview-current-variant";
        // imageFull.id = "live-preview-current-variant";
        // imageFull.alt = tag.alt;
        // imageFull.style.width = document.getElementById('live-preview-current-variant').style.width;
        // imageFull.style.height = document.getElementById('live-preview-current-variant').style.height;
        // fullViewContainer.prepend(imageFull);
        //--<

        // inputWidth.type = "text";
        // inputWidth.name = "width";
        // inputWidth.id= "inputWidth";
        // inputWidth.value = document.getElementById('live-preview-current-variant').style.width;
        // formData.prepend(inputWidth);
        //
        // inputHeight.type = "text";
        // inputHeight.name = "height";
        // inputHeight.id= "inputHeight";
        // inputHeight.value = document.getElementById('live-preview-current-variant').style.height;
        // formData.prepend(inputHeight);

        inputimgdesign.type = "hidden";
        inputimgdesign.name = "diseno";
        inputimgdesign.id = "inputImgDesign";
        var imageUrl = document.getElementById('live-preview-current-variant').style.backgroundImage,
            imageUrl1 = imageUrl.replace(/(url\(|\)|")/g, '');
        inputimgdesign.value = imageUrl1;
        formData.prepend(inputimgdesign);

        h1titleDesign.className = "current-design-title";
        h1titleDesign.id = "current-design-title";
        h1titleDesign.appendChild(h1content);

        var content = h1titleDesign.innerHTML;
        var firstWord = content.split(" ").splice(-1);
        console.log(firstWord);

        h1titleDesign.innerHTML = " " + firstWord;

        inputDesignName.type = "hidden";
        inputDesignName.name = "nombre";
        inputDesignName.id = "inputDesignName";
        inputDesignName.value = " " + firstWord;
        formData.prepend(inputDesignName);

        if (variantContainer.hasChildNodes()) {
            if (variantContainer.childNodes[3]) {
                variantContainer.removeChild(variantContainer.childNodes[0]);
                variantContainer.prepend(imgVariantContainer);
                variantContainer.removeChild(variantContainer.childNodes[1]);
                currentdesign.prepend(h1titleDesign);
            } else {
                variantContainer.removeChild(variantContainer.childNodes[0]);
                variantContainer.prepend(imgVariantContainer);
                currentdesign.prepend(h1titleDesign);
            }
        }
    } else if (tag.tagName == "IMG" && tag.className == "container-right-img") {

        modelFull.src = document.getElementById('live-preview-current').src;
        modelFull.className = "live-preview-current";
        modelFull.id = "live-preview-current";
        // modelFullContainer.prepend(modelFull);

        inputimgModel.type = "hidden";
        inputimgModel.name = "modelo";
        inputimgModel.id = "inputImgModel";
        inputimgModel.value = document.getElementById('live-preview-current').src;
        formData.prepend(inputimgModel);

        imgCurrentModel.src = tag.src;
        imgCurrentModel.className = "live-preview-current";
        imgCurrentModel.id = "live-preview-current";
        variantContainer.removeChild(variantContainer.childNodes[2]);
        document.getElementById("live-preview-current-variant").after(imgCurrentModel);
    }
}

//**************************************************************************
//**************************************************************************
//----->
//ZOOM IN AND ZOOM OUT WITH  CLICK ON BUTTON, PRESSING KEYS ON THE KEYBOARD
//----->
//**************************************************************************
//**************************************************************************
//
// window.addEventListener('keydown', function (ev) {
//     if (ev.key === 'ArrowUp') {
//         // document.getElementById('button-less').blur();
//         // document.getElementById('button-more').focus();
//         document.getElementById('button-more').click();
//     }
//     if (ev.key === 'ArrowDown') {
//         document.getElementById('button-less').click();
//     }
//     if (ev.key === '+') {
//         document.getElementById('button-more').click();
//     }
//     if (ev.key === '-') {
//         document.getElementById('button-less').click();
//     }
// });
//
// window.addEventListener("wheel", function (e) {
//     if (e.deltaY < 0) {
//         document.getElementById('button-more').click();
//     }
//     if (e.deltaY > 0) {
//         document.getElementById('button-less').click();
//     }
// });
//
// more.addEventListener('click', () => {
//     document.getElementById('live-preview-current-variant').style.height = document.getElementById('live-preview-current-variant').offsetHeight + document.getElementById('live-preview-current-variant').offsetHeight * 2 / 100 + 'px';
//     document.getElementById('live-preview-current-variant').style.width = document.getElementById('live-preview-current-variant').offsetWidth + document.getElementById('live-preview-current-variant').offsetWidth * 2 / 100 + 'px';
//     console.log('Alto ↑ ' + document.getElementById('live-preview-current-variant').offsetHeight);
//     console.log('Ancho ↑' + document.getElementById('live-preview-current-variant').offsetWidth);
//     if(document.getElementById('live-preview-current-variant').offsetHeight >= 2000){
//         more.classList.add("block-zoom-button");
//         more.disabled = true;
//         less.addEventListener('click', () => {
//             more.classList.add("zoom-button");
//             more.classList.remove("block-zoom-button");
//             more.disabled = false;
//         })
//     }
// });
//
// less.addEventListener('click', () => {
//     document.getElementById('live-preview-current-variant').style.height = document.getElementById('live-preview-current-variant').offsetHeight - document.getElementById('live-preview-current-variant').offsetHeight * 2 / 100 + 'px';
//     document.getElementById('live-preview-current-variant').style.width = document.getElementById('live-preview-current-variant').offsetWidth - document.getElementById('live-preview-current-variant').offsetWidth * 2 / 100 + 'px';
//     console.log('Alto ↓ ' + document.getElementById('live-preview-current-variant').offsetHeight);
//     console.log('Ancho ↓ ' + document.getElementById('live-preview-current-variant').offsetWidth);
//     if(document.getElementById('live-preview-current-variant').offsetHeight <= 100){
//         less.classList.remove("zoom-button");
//         less.classList.add("block-zoom-button");
//         less.disabled = true;
//         more.addEventListener('click', () => {
//             less.classList.add("zoom-button");
//             less.classList.remove("block-zoom-button");
//             less.disabled = false;
//         })
//     }
// });
//**************************************************************************
//**************************************************************************
//-----<
//**************************************************************************
//**************************************************************************


console.log('Alto ' + document.getElementById('live-preview-current-variant').offsetHeight);
console.log('Ancho ' + document.getElementById('live-preview-current-variant').offsetWidth);