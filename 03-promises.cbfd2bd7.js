function e(e,t){return new Promise(((n,o)=>{const u=Math.random()>.3;setTimeout((()=>{u?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),u=document.querySelector('input[name="amount"]');!function(t,n,o){for(let u=1;u<=o;u++)e(u,t).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch(((e,t)=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),t+=n}(Number(n.value),Number(o.value),Number(u.value))}));
//# sourceMappingURL=03-promises.cbfd2bd7.js.map
