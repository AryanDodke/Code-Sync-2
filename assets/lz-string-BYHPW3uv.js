import{g as U}from"./charenc-CI8Jn5z4.js";var _={exports:{}},O;function k(){return O||(O=1,function(S){var g=function(){var A=String.fromCharCode,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",y={};function j(r,o){if(!y[r]){y[r]={};for(var f=0;f<r.length;f++)y[r][r.charAt(f)]=f}return y[r][o]}var d={compressToBase64:function(r){if(r==null)return"";var o=d._compress(r,6,function(f){return m.charAt(f)});switch(o.length%4){default:case 0:return o;case 1:return o+"===";case 2:return o+"==";case 3:return o+"="}},decompressFromBase64:function(r){return r==null?"":r==""?null:d._decompress(r.length,32,function(o){return j(m,r.charAt(o))})},compressToUTF16:function(r){return r==null?"":d._compress(r,15,function(o){return A(o+32)})+" "},decompressFromUTF16:function(r){return r==null?"":r==""?null:d._decompress(r.length,16384,function(o){return r.charCodeAt(o)-32})},compressToUint8Array:function(r){for(var o=d.compress(r),f=new Uint8Array(o.length*2),e=0,i=o.length;e<i;e++){var p=o.charCodeAt(e);f[e*2]=p>>>8,f[e*2+1]=p%256}return f},decompressFromUint8Array:function(r){if(r==null)return d.decompress(r);for(var o=new Array(r.length/2),f=0,e=o.length;f<e;f++)o[f]=r[f*2]*256+r[f*2+1];var i=[];return o.forEach(function(p){i.push(A(p))}),d.decompress(i.join(""))},compressToEncodedURIComponent:function(r){return r==null?"":d._compress(r,6,function(o){return M.charAt(o)})},decompressFromEncodedURIComponent:function(r){return r==null?"":r==""?null:(r=r.replace(/ /g,"+"),d._decompress(r.length,32,function(o){return j(M,r.charAt(o))}))},compress:function(r){return d._compress(r,16,function(o){return A(o)})},_compress:function(r,o,f){if(r==null)return"";var e,i,p={},w={},v="",x="",u="",h=2,a=3,c=2,l=[],n=0,s=0,t;for(t=0;t<r.length;t+=1)if(v=r.charAt(t),Object.prototype.hasOwnProperty.call(p,v)||(p[v]=a++,w[v]=!0),x=u+v,Object.prototype.hasOwnProperty.call(p,x))u=x;else{if(Object.prototype.hasOwnProperty.call(w,u)){if(u.charCodeAt(0)<256){for(e=0;e<c;e++)n=n<<1,s==o-1?(s=0,l.push(f(n)),n=0):s++;for(i=u.charCodeAt(0),e=0;e<8;e++)n=n<<1|i&1,s==o-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1}else{for(i=1,e=0;e<c;e++)n=n<<1|i,s==o-1?(s=0,l.push(f(n)),n=0):s++,i=0;for(i=u.charCodeAt(0),e=0;e<16;e++)n=n<<1|i&1,s==o-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1}h--,h==0&&(h=Math.pow(2,c),c++),delete w[u]}else for(i=p[u],e=0;e<c;e++)n=n<<1|i&1,s==o-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1;h--,h==0&&(h=Math.pow(2,c),c++),p[x]=a++,u=String(v)}if(u!==""){if(Object.prototype.hasOwnProperty.call(w,u)){if(u.charCodeAt(0)<256){for(e=0;e<c;e++)n=n<<1,s==o-1?(s=0,l.push(f(n)),n=0):s++;for(i=u.charCodeAt(0),e=0;e<8;e++)n=n<<1|i&1,s==o-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1}else{for(i=1,e=0;e<c;e++)n=n<<1|i,s==o-1?(s=0,l.push(f(n)),n=0):s++,i=0;for(i=u.charCodeAt(0),e=0;e<16;e++)n=n<<1|i&1,s==o-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1}h--,h==0&&(h=Math.pow(2,c),c++),delete w[u]}else for(i=p[u],e=0;e<c;e++)n=n<<1|i&1,s==o-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1;h--,h==0&&(h=Math.pow(2,c),c++)}for(i=2,e=0;e<c;e++)n=n<<1|i&1,s==o-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1;for(;;)if(n=n<<1,s==o-1){l.push(f(n));break}else s++;return l.join("")},decompress:function(r){return r==null?"":r==""?null:d._decompress(r.length,32768,function(o){return r.charCodeAt(o)})},_decompress:function(r,o,f){var e=[],i=4,p=4,w=3,v="",x=[],u,h,a,c,l,n,s,t={val:f(0),position:o,index:1};for(u=0;u<3;u+=1)e[u]=u;for(a=0,l=Math.pow(2,2),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;switch(a){case 0:for(a=0,l=Math.pow(2,8),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;s=A(a);break;case 1:for(a=0,l=Math.pow(2,16),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;s=A(a);break;case 2:return""}for(e[3]=s,h=s,x.push(s);;){if(t.index>r)return"";for(a=0,l=Math.pow(2,w),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;switch(s=a){case 0:for(a=0,l=Math.pow(2,8),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;e[p++]=A(a),s=p-1,i--;break;case 1:for(a=0,l=Math.pow(2,16),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=o,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;e[p++]=A(a),s=p-1,i--;break;case 2:return x.join("")}if(i==0&&(i=Math.pow(2,w),w++),e[s])v=e[s];else if(s===p)v=h+h.charAt(0);else return null;x.push(v),e[p++]=h+v.charAt(0),i--,h=v,i==0&&(i=Math.pow(2,w),w++)}}};return d}();S!=null?S.exports=g:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return g})}(_)),_.exports}var z=k();const B=U(z);export{B as l};
