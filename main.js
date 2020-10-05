import _ from './index.mjs'

const imei = _.$('.imei'),
    res = _.$('.res'),
    result = _.$('.result'),
    error = _.$('.error'),
    buttons = [_.$('.btn'), _.$('.btnRes')]


_.click(buttons[0], () => {
    let text = imei.value

    if (text.length < 15) {
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