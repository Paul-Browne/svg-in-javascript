const A=(...e)=>{let t=[],i={};for(let n=0;n<e.length;n++)"object"==typeof e[n]?i={...i,...e[n]}:t.push(e[n]);return{Z:t.join(""),Y:Object.keys(i).map((e=>` ${e}="${i[e]}"`)).join("")}};export const[a,animate,animateMotion,animateTransform,circle,clipPath,defs,desc,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,image,line,linearGradient,marker,mask,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,script,stop,style,svg,symbol,text,title,textPath,tspan,use,view,fragment]=["a","animate","animateMotion","animateTransform","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","symbol","text","title","textPath","tspan","use","view","fragment"].map((e=>(...t)=>{const{Z:i,Y:n}=A(...t);return"fragment"==e?i:`<${e}${n}>${i}</${e}>`}));