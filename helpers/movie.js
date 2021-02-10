const cleanName = (name) => {
    return name
        .trim()
        .normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
}

const validateLike = (bodyParam) => {
    return bodyParam.likes === true || bodyParam.likes === false;
}

const validateMongoId = (id) => {
    return (
        typeof id === 'string' &&
        id.length === 24
    )
}

exports.validateLike = validateLike;

exports.cleanName = cleanName;

exports.validateMongoId = validateMongoId ;