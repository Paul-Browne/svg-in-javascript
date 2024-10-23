// manually minify from https://minify-js.com/

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
        attributes: Object.keys(attributes).map(key => {
            const quoteType = /"/.test(attributes[key]) ? "'" : '"';
            return ` ${key}=${quoteType}${attributes[key]}${quoteType}`
        }).join('')

    }
}

// all svg elements are listed here except 'switch' which is a reserved keyword in javascript
export const [a,animate,animateMotion,animateTransform,circle,clipPath,defs,desc,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,image,line,linearGradient,marker,mask,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,script,stop,style,svg,symbol,text,title,textPath,tspan,use,view,fragment] = ['a','animate','animateMotion','animateTransform','circle','clipPath','defs','desc','ellipse','feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feDropShadow','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence','filter','foreignObject','g','image','line','linearGradient','marker','mask','metadata','mpath','path','pattern','polygon','polyline','radialGradient','rect','script','set','stop','style','svg','symbol','text','title','textPath','tspan','use','view','fragment'].map(element => (...args) => {
    const { content, attributes } = argumentative(...args);
    if(element == "fragment") return content
    return `<${element}${attributes}>${content}</${element}>`;
})
