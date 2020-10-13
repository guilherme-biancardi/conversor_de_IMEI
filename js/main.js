import _ from './index.mjs'

const imei = _.$('.imei'),
    res = _.$('.res'),
    result = _.$('.result'),
    error = _.$('.error'),
    buttons = [_.$('.btn'), _.$('.btnRes')]

imei.oninput = () => {
    imei.value = imei.value.replace(/[^0-9]/g, '');
}
_.click(buttons[0], () => {
    let text = imei.value

    if (text.length < 15) {
        _.$('.content').style.animation = 'error .1s';
        _.$('.content').style.animation = 'animation-iteration-count: 3';
        _.show(error)
    } else {
        _.hide(error)
        res.innerHTML = _.convert(text)
        _.show(result)
    }
})

_.click(buttons[1], () => {
    _.hide(result)
    imei.value = ''
})