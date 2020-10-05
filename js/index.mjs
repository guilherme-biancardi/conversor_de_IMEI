function $(name) {
    let obj = document.querySelectorAll(name)
    if (obj.length < 2) {
        return document.querySelector(name)
    }
    return obj
}

function hide(obj) {
    obj.style.display = 'none'
}

function show(obj) {
    obj.style.display = 'block'
}

function click(obj, e) {
    return obj.onclick = e
}

function format(num) {
    let imei = num.toString()
    let i = imei.substring(imei.indexOf('1') + 1)
    return i
}

function convert(imei) {
    let array_imei = imei.split(""), text = ''

    for (let i = 0; i < array_imei.length; i++) {
        if (i == 5) {
            if (array_imei[5] == 9) {
                for (let i = 0; i <= 5; i++) {
                    if (array_imei[i] == 9) {
                        array_imei[i - 1] = Number(array_imei[i - 1]) + 1
                        if (array_imei[i - 1] > 9) {
                            array_imei[i - 1] = format(array_imei[i - 1])
                        }
                    }
                }
            }
            array_imei[i] = Number(array_imei[i]) + 1
            array_imei[i] = format(array_imei[i])
        }
        if (i == 14) {
            array_imei[i] = Number(array_imei[i]) + 8
            if (array_imei[i] != 0) {
                array_imei[i] = format(array_imei[i])
            }
        }
    }

    for (let i = 0; i < array_imei.length; i++) {
        text += array_imei[i]
    }

    return text
}

export default {
    $,
    show,
    hide,
    click,
    format,
    convert
}