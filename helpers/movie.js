const cleanName = (name) => {
    return name
        .trim()
        .normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
}

const validateLike = (likes) => {
    return (likes === true || likes === false);
}

const validateRate = (rate) => {
    console.log(rate === null)
    return rate === null || typeof rate === 'number' && rate >=0 && rate <= 5;
}

const validateMongoId = (id) => {
    return (
        typeof id === 'string' &&
        id.length === 24
    )
}

exports.validateLike = validateLike;
exports.cleanName = cleanName;
exports.validateRate = validateRate;
exports.validateMongoId = validateMongoId ;