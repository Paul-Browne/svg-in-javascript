const a=["animate","animateMotion","animateTransform","circle","clipPath","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tspan","use","view"],f=(...t)=>{let n=[],i={};for(let e=0;e<t.length;e++)typeof t[e]=="object"?i={...i,...t[e]}:n.push(t[e]);return{content:n.join(""),attributes:Object.keys(i).map(e=>` ${e}="${i[e]}"`).join("")}},r=a.reduce((t,n)=>(t[n]=(...i)=>{const{content:e,attributes:o}=f(...i);return`<${n}${o}>${e}</${n}>`},t),{});var s=r;export{s as default};