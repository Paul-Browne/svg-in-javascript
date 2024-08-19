const allElements = ['animate','animateMotion','animateTransform','circle','clipPath','defs','desc','ellipse','feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feDropShadow','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence','filter','foreignObject','g','image','line','linearGradient','marker','mask','metadata','mpath','path','pattern','polygon','polyline','radialGradient','rect','set','stop','svg','switch','symbol','text','textPath','tspan','use','view'];

const argumentative = (...args) => {
    let content = [];
    let attributes = {};
    for (let i = 0; i < args.length; i++) {
        if(typeof args[i] === 'object'){
            attributes = {
                ...attributes,
                ...args[i]
            }
        }else{
            content.push(args[i])
        }
    }
    return {
        content: content.join(''),
        attributes: Object.keys(attributes).map(key => ` ${key}="${attributes[key]}"`).join('')
    }
}

const svgjs = allElements.reduce((acc, element) => {
    acc[element] = (...args) => {
        const { content, attributes } = argumentative(...args);
        return `<${element}${attributes}>${content}</${element}>`;
    }
    return acc;
}, {})

export default svgjs
