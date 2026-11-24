/* Systembild consulting.nicolaslekai.com — gepackt aus system3d.src.js und three.js 0.187.0 (MIT-Lizenz, https://threejs.org). Nicht von Hand aendern: assets/system3d/bauen.sh */
(()=>{var Hh=0,Jl=1,zh=2;var Hi=1,Gh=2,As=3,_i=0,ze=1,nn=2,zi=0,qe=1,Ir=2,$l=3,Kl=4,kh=5;var Gi=100,Vh=101,Wh=102,Xh=103,qh=104,Yh=200,Zh=201,Jh=202,$h=203,Ql=204,jl=205,Kh=206,Qh=207,jh=208,tu=209,eu=210,nu=211,iu=212,su=213,ru=214,Aa=0,Ra=1,Ca=2,ds=3,Ia=4,Pa=5,La=6,Da=7,ho=0,au=1,ou=2,fn=0,tc=1,ec=2,nc=3,ic=4,sc=5,rc=6,ac=7;var oc=300,ki=301,Rs=302,uo=303,fo=304,fs=1e3,An=1001,Na=1002,Be=1003,lu=1004;var Pr=1005;var Qe=1006,po=1007;var Kn=1008;var sn=1009,lc=1010,cc=1011,Cs=1012,mo=1013,bn=1014,pn=1015,En=1016,go=1017,_o=1018,Vi=1020,hc=35902,uc=35899,dc=1021,fc=1022,Tn=1023,qn=1026,Qn=1027,xo=1028,yo=1029,xi=1030,vo=1031;var Mo=1033,Lr=33776,Dr=33777,Nr=33778,Ur=33779,So=35840,bo=35841,Eo=35842,To=35843,wo=36196,Ao=37492,Ro=37496,Co=37488,Io=37489,Fr=37490,Po=37491,Lo=37808,Do=37809,No=37810,Uo=37811,Fo=37812,Oo=37813,Bo=37814,Ho=37815,zo=37816,Go=37817,ko=37818,Vo=37819,Wo=37820,Xo=37821,qo=36492,Yo=36494,Zo=36495,Jo=36283,$o=36284,Or=36285,Ko=36286;var Ks=2300,Ua=2301,Ta=2302,Ol=2303,Bl=2400,Hl=2401,zl=2402;var cu=3200;var Br=0,hu=1,jn="",Ke="srgb",Qs="srgb-linear",js="linear",me="srgb";var wa=7680;var uu=519,du=512,fu=513,pu=514,pc=515,mu=516,gu=517,mc=518,gc=519,_c=35044;var xc="300 es",un=2e3,ps=2001;function Sd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _u(){let i=tr("canvas");return i.style.display="block",i}var jc={},ms=null;function er(...i){let t="THREE."+i.shift();ms?ms("log",t,...i):console.log(t,...i)}function xu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=xu(i);let t="THREE."+i.shift();if(ms)ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=xu(i);let t="THREE."+i.shift();if(ms)ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ci(...i){let t=i.join(" ");t in jc||(jc[t]=!0,zt(...i))}function yu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var vu={[Aa]:Aa,[Ca]:La,[Ia]:Ia,[ds]:Pa,[Ra]:Ra,[La]:Ca,[Da]:Da,[Pa]:ds},Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hl=Math.PI/180,Fa=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Ed(i,t){return(i%t+t)%t}function ul(i,t,e){return(1-e)*i+e*t}function Mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Su(i,t){if(t.constructor===Float32Array)return i;let e=Qo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function bu(i,t){if(t.constructor===Float32Array)return i;let e=Qo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ec=class Ec{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ec.prototype.isVector2=!0;var st=Ec,In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],p=n[s+3],d=r[a+0],l=r[a+1],g=r[a+2],x=r[a+3];if(p!==x||c!==d||h!==l||u!==g){let f=c*d+h*l+u*g+p*x;f<0&&(d=-d,l=-l,g=-g,x=-x,f=-f);let m=1-o;if(f<.9995){let v=Math.acos(f),T=Math.sin(v);m=Math.sin(m*v)/T,o=Math.sin(o*v)/T,c=c*m+d*o,h=h*m+l*o,u=u*m+g*o,p=p*m+x*o}else{c=c*m+d*o,h=h*m+l*o,u=u*m+g*o,p=p*m+x*o;let v=1/Math.sqrt(c*c+h*h+u*u+p*p);c*=v,h*=v,u*=v,p*=v}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],p=r[a],d=r[a+1],l=r[a+2],g=r[a+3];return t[e]=o*g+u*p+c*l-h*d,t[e+1]=c*g+u*d+h*p-o*l,t[e+2]=h*g+u*l+o*d-c*p,t[e+3]=u*g-o*p-c*d-h*l,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),p=o(r/2),d=c(n/2),l=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*p+h*l*g,this._y=h*l*p-d*u*g,this._z=h*u*g+d*l*p,this._w=h*u*p-d*l*g;break;case"YXZ":this._x=d*u*p+h*l*g,this._y=h*l*p-d*u*g,this._z=h*u*g-d*l*p,this._w=h*u*p+d*l*g;break;case"ZXY":this._x=d*u*p-h*l*g,this._y=h*l*p+d*u*g,this._z=h*u*g+d*l*p,this._w=h*u*p-d*l*g;break;case"ZYX":this._x=d*u*p-h*l*g,this._y=h*l*p+d*u*g,this._z=h*u*g-d*l*p,this._w=h*u*p+d*l*g;break;case"YZX":this._x=d*u*p+h*l*g,this._y=h*l*p+d*u*g,this._z=h*u*g-d*l*p,this._w=h*u*p-d*l*g;break;case"XZY":this._x=d*u*p-h*l*g,this._y=h*l*p-d*u*g,this._z=h*u*g+d*l*p,this._w=h*u*p+d*l*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){let l=.5/Math.sqrt(d+1);this._w=.25/l,this._x=(u-c)*l,this._y=(r-h)*l,this._z=(a-s)*l}else if(n>o&&n>p){let l=2*Math.sqrt(1+n-o-p);this._w=(u-c)/l,this._x=.25*l,this._y=(s+a)/l,this._z=(r+h)/l}else if(o>p){let l=2*Math.sqrt(1+o-n-p);this._w=(r-h)/l,this._x=(s+a)/l,this._y=.25*l,this._z=(c+u)/l}else{let l=2*Math.sqrt(1+p-n-o);this._w=(a-s)/l,this._x=(r+h)/l,this._y=(c+u)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Tc=class Tc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*h+a*p-o*u,this.y=n+c*u+o*h-r*p,this.z=s+c*p+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tc.prototype.isVector3=!0;var I=Tc,dl=new I,th=new In,wc=class wc{constructor(t,e,n,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],p=n[7],d=n[2],l=n[5],g=n[8],x=s[0],f=s[3],m=s[6],v=s[1],T=s[4],y=s[7],E=s[2],w=s[5],_=s[8];return r[0]=a*x+o*v+c*E,r[3]=a*f+o*T+c*w,r[6]=a*m+o*y+c*_,r[1]=h*x+u*v+p*E,r[4]=h*f+u*T+p*w,r[7]=h*m+u*y+p*_,r[2]=d*x+l*v+g*E,r[5]=d*f+l*T+g*w,r[8]=d*m+l*y+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],p=u*a-o*h,d=o*c-u*r,l=h*r-a*c,g=e*p+n*d+s*l;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=p*x,t[1]=(s*h-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=l*x,t[7]=(n*c-h*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ci("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fl.makeScale(t,e)),this}rotate(t){return Ci("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return Ci("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wc.prototype.isMatrix3=!0;var Xt=wc,fl=new Xt,eh=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){let i={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qs]:{primaries:t,whitePoint:n,transfer:js,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:n,transfer:me,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),i}var oe=Td();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,Oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=tr("canvas")),Yi.width=t.width,Yi.height=t.height;let s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wd=0,gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pl(s[a].image)):r.push(pl(s[a]))}else r=pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Ad=0,ml=new I,je=class i extends Cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=An,s=An,r=Qe,a=Kn,o=Tn,c=sn,h=i.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=yi(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=oc;je.DEFAULT_ANISOTROPY=1;var Ac=class Ac{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],p=c[8],d=c[1],l=c[5],g=c[9],x=c[2],f=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(p-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+x)<.1&&Math.abs(g+f)<.1&&Math.abs(h+l+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(h+1)/2,y=(l+1)/2,E=(m+1)/2,w=(u+d)/4,_=(p+x)/4,S=(g+f)/4;return T>y&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=_/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=S/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=_/r,s=S/r),this.set(n,s,r,e),this}let v=Math.sqrt((f-g)*(f-g)+(p-x)*(p-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(p-x)/v,this.z=(d-u)/v,this.w=Math.acos((h+l+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ac.prototype.isVector4=!0;var Ee=Ac,Ba=class extends Cn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new je({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var co=class co{constructor(t,e,n,s,r,a,o,c,h,u,p,d,l,g,x,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,p,d,l,g,x,f)}set(t,e,n,s,r,a,o,c,h,u,p,d,l,g,x,f){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=u,m[10]=p,m[14]=d,m[3]=l,m[7]=g,m[11]=x,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new co().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,l=a*p,g=o*u,x=o*p;e[0]=c*u,e[4]=-c*p,e[8]=h,e[1]=l+g*h,e[5]=d-x*h,e[9]=-o*c,e[2]=x-d*h,e[6]=g+l*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*u,l=c*p,g=h*u,x=h*p;e[0]=d+x*o,e[4]=g*o-l,e[8]=a*h,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=l*o-g,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*u,l=c*p,g=h*u,x=h*p;e[0]=d-x*o,e[4]=-a*p,e[8]=g+l*o,e[1]=l+g*o,e[5]=a*u,e[9]=x-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*u,l=a*p,g=o*u,x=o*p;e[0]=c*u,e[4]=g*h-l,e[8]=d*h+x,e[1]=c*p,e[5]=x*h+d,e[9]=l*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,l=a*h,g=o*c,x=o*h;e[0]=c*u,e[4]=x-d*p,e[8]=g*p+l,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=l*p+g,e[10]=d-x*p}else if(t.order==="XZY"){let d=a*c,l=a*h,g=o*c,x=o*h;e[0]=c*u,e[4]=-p,e[8]=h*u,e[1]=d*p+x,e[5]=a*u,e[9]=l*p-g,e[2]=g*p-l,e[6]=o*u,e[10]=x*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Cd)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),si.crossVectors(n,rn),si.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),si.crossVectors(n,rn)),si.normalize(),Jr.crossVectors(rn,si),s[0]=si.x,s[4]=Jr.x,s[8]=rn.x,s[1]=si.y,s[5]=Jr.y,s[9]=rn.y,s[2]=si.z,s[6]=Jr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],p=n[5],d=n[9],l=n[13],g=n[2],x=n[6],f=n[10],m=n[14],v=n[3],T=n[7],y=n[11],E=n[15],w=s[0],_=s[4],S=s[8],L=s[12],C=s[1],P=s[5],O=s[9],N=s[13],R=s[2],B=s[6],W=s[10],H=s[14],Q=s[3],k=s[7],K=s[11],j=s[15];return r[0]=a*w+o*C+c*R+h*Q,r[4]=a*_+o*P+c*B+h*k,r[8]=a*S+o*O+c*W+h*K,r[12]=a*L+o*N+c*H+h*j,r[1]=u*w+p*C+d*R+l*Q,r[5]=u*_+p*P+d*B+l*k,r[9]=u*S+p*O+d*W+l*K,r[13]=u*L+p*N+d*H+l*j,r[2]=g*w+x*C+f*R+m*Q,r[6]=g*_+x*P+f*B+m*k,r[10]=g*S+x*O+f*W+m*K,r[14]=g*L+x*N+f*H+m*j,r[3]=v*w+T*C+y*R+E*Q,r[7]=v*_+T*P+y*B+E*k,r[11]=v*S+T*O+y*W+E*K,r[15]=v*L+T*N+y*H+E*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],p=t[6],d=t[10],l=t[14],g=t[3],x=t[7],f=t[11],m=t[15],v=c*l-h*d,T=o*l-h*p,y=o*d-c*p,E=a*l-h*u,w=a*d-c*u,_=a*p-o*u;return e*(x*v-f*T+m*y)-n*(g*v-f*E+m*w)+s*(g*T-x*E+m*_)-r*(g*y-x*w+f*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],u=t[10];return e*(a*u-o*h)-n*(r*u-o*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],p=t[9],d=t[10],l=t[11],g=t[12],x=t[13],f=t[14],m=t[15],v=e*o-n*a,T=e*c-s*a,y=e*h-r*a,E=n*c-s*o,w=n*h-r*o,_=s*h-r*c,S=u*x-p*g,L=u*f-d*g,C=u*m-l*g,P=p*f-d*x,O=p*m-l*x,N=d*m-l*f,R=v*N-T*O+y*P+E*C-w*L+_*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/R;return t[0]=(o*N-c*O+h*P)*B,t[1]=(s*O-n*N-r*P)*B,t[2]=(x*_-f*w+m*E)*B,t[3]=(d*w-p*_-l*E)*B,t[4]=(c*C-a*N-h*L)*B,t[5]=(e*N-s*C+r*L)*B,t[6]=(f*y-g*_-m*T)*B,t[7]=(u*_-d*y+l*T)*B,t[8]=(a*O-o*C+h*S)*B,t[9]=(n*C-e*O-r*S)*B,t[10]=(g*w-x*y+m*v)*B,t[11]=(p*y-u*w-l*v)*B,t[12]=(o*L-a*P-c*S)*B,t[13]=(e*P-n*L+s*S)*B,t[14]=(x*T-g*E-f*v)*B,t[15]=(u*E-p*T+d*v)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,p=o+o,d=r*h,l=r*u,g=r*p,x=a*u,f=a*p,m=o*p,v=c*h,T=c*u,y=c*p,E=n.x,w=n.y,_=n.z;return s[0]=(1-(x+m))*E,s[1]=(l+y)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(l-y)*w,s[5]=(1-(d+m))*w,s[6]=(f+v)*w,s[7]=0,s[8]=(g+T)*_,s[9]=(f-v)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),c=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let h=1/a,u=1/o,p=1/c;return _n.elements[0]*=h,_n.elements[1]*=h,_n.elements[2]*=h,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=p,_n.elements[9]*=p,_n.elements[10]*=p,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=un,c=!1){let h=this.elements,u=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),l=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===un)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ps)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=p,h[9]=l,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un,c=!1){let h=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),l=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===un)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ps)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=p,h[9]=0,h[13]=l,h[2]=0,h[6]=0,h[10]=g,h[14]=x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};co.prototype.isMatrix4=!0;var pe=co,Zi=new I,_n=new pe,Rd=new I(0,0,0),Cd=new I(1,1,1),si=new I,Jr=new I,rn=new I,ih=new pe,sh=new In,Pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],p=s[2],d=s[6],l=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,l),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,l),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,l),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,l),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,l));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,l),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Id=0,rh=new I,Ji=new In,Hn=new pe,$r=new I,Bs=new I,Pd=new I,Ld=new In,ah=new I(1,0,0),oh=new I(0,1,0),lh=new I(0,0,1),ch={type:"added"},Dd={type:"removed"},$i={type:"childadded",child:null},gl={type:"childremoved",child:null},Se=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Pn,n=new In,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Xt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Bs,$r,this.up):Hn.lookAt($r,Bs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Hn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),$i.child=t,this.dispatchEvent($i),$i.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let p=c[h];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),l=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),l.length>0&&(n.animations=l),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Se.DEFAULT_UP=new I(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ce=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nd={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let x of t.hand.values()){let f=e.getJointPose(x,n),m=this._getHandJoint(h,x);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let u=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],d=u.position.distanceTo(p.position),l=.02,g=.005;h.inputState.pinching&&d>l+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=l-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function _l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Ed(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_l(a,r,t+1/3),this.g=_l(a,r,t),this.b=_l(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return oe.workingToColorSpace(We.copy(this),t),Math.round(te(We.r*255,0,255))*65536+Math.round(te(We.g*255,0,255))*256+Math.round(te(We.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let p=a-o;switch(h=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ke){oe.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Kr);let n=ul(ri.h,Kr.h,e),s=ul(ri.s,Kr.s,e),r=ul(ri.l,Kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Ot;Ot.NAMES=Eu;var sr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ii=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new I,zn=new I,xl=new I,Gn=new I,Ki=new I,Qi=new I,hh=new I,yl=new I,vl=new I,Ml=new I,Sl=new Ee,bl=new Ee,El=new Ee,Wn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),zn.subVectors(n,e),xl.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(zn),c=xn.dot(xl),h=zn.dot(zn),u=zn.dot(xl),p=a*h-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,l=(h*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-l-g,g,l)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Sl.setScalar(0),bl.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(t,e),bl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Sl,r.x),a.addScaledVector(bl,r.y),a.addScaledVector(El,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),zn.subVectors(t,e),xn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),Qi.subVectors(r,n),yl.subVectors(t,n);let c=Ki.dot(yl),h=Qi.dot(yl);if(c<=0&&h<=0)return e.copy(n);vl.subVectors(t,s);let u=Ki.dot(vl),p=Qi.dot(vl);if(u>=0&&p<=u)return e.copy(s);let d=c*p-u*h;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),e.copy(n).addScaledVector(Ki,a);Ml.subVectors(t,r);let l=Ki.dot(Ml),g=Qi.dot(Ml);if(g>=0&&l<=g)return e.copy(r);let x=l*h-c*g;if(x<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Qi,o);let f=u*g-l*p;if(f<=0&&p-u>=0&&l-g>=0)return hh.subVectors(r,s),o=(p-u)/(p-u+(l-g)),e.copy(s).addScaledVector(hh,o);let m=1/(f+x+d);return a=x*m,o=d*m,e.copy(n).addScaledVector(Ki,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},dn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),jr.subVectors(this.max,Hs),ji.subVectors(t.a,Hs),ts.subVectors(t.b,Hs),es.subVectors(t.c,Hs),ai.subVectors(ts,ji),oi.subVectors(es,ts),Ti.subVectors(ji,es);let e=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ti.z,Ti.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ti.z,0,-Ti.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ti.y,Ti.x,0];return!Tl(e,ji,ts,es,jr)||(e=[1,0,0,0,1,0,0,0,1],!Tl(e,ji,ts,es,jr))?!1:(ta.crossVectors(ai,oi),e=[ta.x,ta.y,ta.z],Tl(e,ji,ts,es,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},kn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,Qr=new dn,ji=new I,ts=new I,es=new I,ai=new I,oi=new I,Ti=new I,Hs=new I,jr=new I,ta=new I,wi=new I;function Tl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){wi.fromArray(i,r);let o=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=t.dot(wi),h=e.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var Le=new I,ea=new st,Ud=0,Ce=class extends Cn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=pn,this.version=0,this._normalizationScale=t!==void 0?Qo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Su(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):bu(t,this.array)}};var rr=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ar=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Fd=new dn,zs=new I,wl=new I,Ln=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(wl)),this.expandByPoint(zs.copy(t.center).sub(wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Od=0,hn=new pe,Al=new Se,ns=new I,an=new dn,Gs=new dn,Oe=new I,_e=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?ar:rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Al.lookAt(t),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ee(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(an.min,Gs.min),an.expandByPoint(Oe),Oe.addVectors(an.max,Gs.max),an.expandByPoint(Oe)):(an.expandByPoint(Gs.min),an.expandByPoint(Gs.max))}an.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Oe.fromBufferAttribute(o,h),c&&(ns.fromBufferAttribute(t,h),Oe.add(ns)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],h=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new I,c[L]=new I;let u=new I,p=new I,d=new I,l=new st,g=new st,x=new st,f=new I,m=new I;function v(L,C,P){h[L]=h[C]=h[P]=1,u.fromBufferAttribute(n,L),p.fromBufferAttribute(n,C),d.fromBufferAttribute(n,P),l.fromBufferAttribute(r,L),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,P),p.sub(u),d.sub(u),g.sub(l),x.sub(l);let O=1/(g.x*x.y-x.x*g.y);isFinite(O)&&(f.copy(p).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(O),m.copy(d).multiplyScalar(g.x).addScaledVector(p,-x.x).multiplyScalar(O),o[L].add(f),o[C].add(f),o[P].add(f),c[L].add(m),c[C].add(m),c[P].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,C=T.length;L<C;++L){let P=T[L],O=P.start,N=P.count;for(let R=O,B=O+N;R<B;R+=3)v(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let y=new I,E=new I,w=new I,_=new I;function S(L){w.fromBufferAttribute(s,L),_.copy(w);let C=o[L];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),E.crossVectors(_,C);let O=E.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,O)}for(let L=0,C=n.count;L<C;++L)h[L]&&S(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,l=n.count;d<l;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,h=new I,u=new I,p=new I;if(t)for(let d=0,l=t.count;d<l;d+=3){let g=t.getX(d+0),x=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,f),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,f),o.add(u),c.add(u),h.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,h.x,h.y,h.z)}else for(let d=0,l=e.count;d<l;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,p=o.normalized,d=new h.constructor(c.length*u),l=0,g=0;for(let x=0,f=c.length;x<f;x++){o.isInterleavedBufferAttribute?l=c[x]*o.data.stride+o.offset:l=c[x]*u;for(let m=0;m<u;m++)d[g++]=h[l++]}return new Ce(d,u,p)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,p=h.length;u<p;u++){let d=h[u],l=t(d,n);c.push(l)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let p=0,d=h.length;p<d;p++){let l=h[p];u.push(l.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],p=r[h];for(let d=0,l=p.length;d<l;d++)u.push(p[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},or=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=uh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=uh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function uh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=yi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var $e=new I,xs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Qo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Su(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):bu(t,this.data.array)}},Rl=new I,Bd=new I,Hd=new Xt,vn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Rl.subVectors(n,e).cross(Bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Rl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hd.getNormalMatrix(t),s=this.coplanarPoint(Rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zd=0,on=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=qe,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=jl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wa,this.stencilZFail=wa,this.stencilZPass=wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Dn=class extends on{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},is,ks=new I,ss=new I,rs=new I,as=new st,Vs=new st,Tu=new pe,na=new I,Ws=new I,ia=new I,dh=new st,Cl=new st,fh=new st,Yn=class extends Se{constructor(t=new Dn){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new or(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new xs(n,3,0,!1)),is.setAttribute("uv",new xs(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new st(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;sa(na.set(-.5,-.5,0),rs,a,ss,s,r),sa(Ws.set(.5,-.5,0),rs,a,ss,s,r),sa(ia.set(.5,.5,0),rs,a,ss,s,r),dh.set(0,0),Cl.set(1,0),fh.set(1,1);let o=t.ray.intersectTriangle(na,Ws,ia,!1,ks);if(o===null&&(sa(Ws.set(-.5,.5,0),rs,a,ss,s,r),Cl.set(0,1),o=t.ray.intersectTriangle(na,ia,Ws,!1,ks),o===null))return;let c=t.ray.origin.distanceTo(ks);c<t.near||c>t.far||e.push({distance:c,point:ks.clone(),uv:Wn.getInterpolation(ks,na,Ws,ia,dh,Cl,fh,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function sa(i,t,e,n,s,r){as.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Vs.x=r*as.x-s*as.y,Vs.y=s*as.x+r*as.y):Vs.copy(as),i.copy(t),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(Tu)}var Vn=new I,Il=new I,ra=new I,aa=new I,ys=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Il.copy(t).add(e).multiplyScalar(.5),ra.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(Il);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ra),o=aa.dot(this.direction),c=-aa.dot(ra),h=aa.lengthSq(),u=Math.abs(1-a*a),p,d,l,g;if(u>0)if(p=a*c-o,d=a*o-c,g=r*u,p>=0)if(d>=-g)if(d<=g){let x=1/u;p*=x,d*=x,l=p*(p+a*d+2*o)+d*(a*p+d+2*c)+h}else d=r,p=Math.max(0,-(a*d+o)),l=-p*p+d*(d+2*c)+h;else d=-r,p=Math.max(0,-(a*d+o)),l=-p*p+d*(d+2*c)+h;else d<=-g?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),l=-p*p+d*(d+2*c)+h):d<=g?(p=0,d=Math.min(Math.max(-r,-c),r),l=d*(d+2*c)+h):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),l=-p*p+d*(d+2*c)+h);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),l=-p*p+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Il).addScaledVector(ra,d),l}intersectSphere(t,e){if(t.radius<0)return null;Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,c=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,c=(t.min.z-d.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,l=t.z-a.z,g=e.x-a.x,x=e.y-a.y,f=e.z-a.z,m=n.x-a.x,v=n.y-a.y,T=n.z-a.z,y=Math.abs(c),E=Math.abs(h),w=Math.abs(u),_,S,L,C,P,O,N,R,B,W,H,Q;if(y>=E&&y>=w?(L=c,O=p,B=g,Q=m,c>=0?(_=h,S=u,C=d,P=l,N=x,R=f,W=v,H=T):(_=u,S=h,C=l,P=d,N=f,R=x,W=T,H=v)):E>=w?(L=h,O=d,B=x,Q=v,h>=0?(_=u,S=c,C=l,P=p,N=f,R=g,W=T,H=m):(_=c,S=u,C=p,P=l,N=g,R=f,W=m,H=T)):(L=u,O=l,B=f,Q=T,u>=0?(_=c,S=h,C=p,P=d,N=g,R=x,W=m,H=v):(_=h,S=c,C=d,P=p,N=x,R=g,W=v,H=m)),L===0)return null;let k=_/L,K=S/L,j=1/L,bt=C-k*O,Ft=P-K*O,Y=N-k*B,pt=R-K*B,Et=W-k*Q,Nt=H-K*Q,xt=Et*pt-Nt*Y,Ut=bt*Nt-Ft*Et,Vt=Y*Ft-pt*bt;if(s){if(xt<0||Ut<0||Vt<0)return null}else if((xt<0||Ut<0||Vt<0)&&(xt>0||Ut>0||Vt>0))return null;let Tt=xt+Ut+Vt;if(Tt===0)return null;let Gt=j*(xt*O+Ut*B+Vt*Q);return(Tt>0?Gt<0:Gt>0)?null:this.at(Gt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class extends on{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ph=new pe,Ai=new ys,oa=new Ln,mh=new I,la=new I,ca=new I,ha=new I,Pl=new I,ua=new I,gh=new I,da=new I,Jt=class extends Se{constructor(t=new _e,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],p=r[c];u!==0&&(Pl.fromBufferAttribute(p,t),a?ua.addScaledVector(Pl,u):ua.addScaledVector(Pl.sub(e),u))}e.add(ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(oa.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(oa,mh)===null||Ai.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(ph),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,l=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let f=d[g],m=a[f.materialIndex],v=Math.max(f.start,l.start),T=Math.min(o.count,Math.min(f.start+f.count,l.start+l.count));for(let y=v,E=T;y<E;y+=3){let w=o.getX(y),_=o.getX(y+1),S=o.getX(y+2);s=fa(this,m,t,n,h,u,p,w,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,l.start),x=Math.min(o.count,l.start+l.count);for(let f=g,m=x;f<m;f+=3){let v=o.getX(f),T=o.getX(f+1),y=o.getX(f+2);s=fa(this,a,t,n,h,u,p,v,T,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let f=d[g],m=a[f.materialIndex],v=Math.max(f.start,l.start),T=Math.min(c.count,Math.min(f.start+f.count,l.start+l.count));for(let y=v,E=T;y<E;y+=3){let w=y,_=y+1,S=y+2;s=fa(this,m,t,n,h,u,p,w,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,l.start),x=Math.min(c.count,l.start+l.count);for(let f=g,m=x;f<m;f+=3){let v=f,T=f+1,y=f+2;s=fa(this,a,t,n,h,u,p,v,T,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Gd(i,t,e,n,s,r,a,o){let c;if(t.side===ze?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===_i,o),c===null)return null;da.copy(o),da.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(da);return h<e.near||h>e.far?null:{distance:h,point:da.clone(),object:i}}function fa(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,la),i.getVertexPosition(c,ca),i.getVertexPosition(h,ha);let u=Gd(i,t,e,n,la,ca,ha,gh);if(u){let p=new I;Wn.getBarycoord(gh,la,ca,ha,p),s&&(u.uv=Wn.getInterpolatedAttribute(s,o,c,h,p,new st)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,c,h,p,new st)),a&&(u.normal=Wn.getInterpolatedAttribute(a,o,c,h,p,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:h,normal:new I,materialIndex:0};Wn.getNormal(la,ca,ha,d.normal),u.face=d,u.barycoord=p}return u}var lr=class extends je{constructor(t=null,e=1,n=1,s,r,a,o,c,h=Be,u=Be,p,d){super(null,a,o,c,h,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=class extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},os=new pe,_h=new pe,pa=[],xh=new dn,kd=new pe,Xs=new Jt,qs=new Ln,Mn=class extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),xh.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),qs.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),_h.multiplyMatrices(n,os),Xs.matrixWorld=_h,Xs.raycast(t,pa);for(let a=0,o=pa.length;a<o;a++){let c=pa[a];c.instanceId=r,c.object=this,e.push(c)}pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(s*this.count),s,this.count,xo,pn));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ri=new Ln,Vd=new st(.5,.5),ma=new I,ci=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],p=r[5],d=r[6],l=r[7],g=r[8],x=r[9],f=r[10],m=r[11],v=r[12],T=r[13],y=r[14],E=r[15];if(s[0].setComponents(h-a,l-u,m-g,E-v).normalize(),s[1].setComponents(h+a,l+u,m+g,E+v).normalize(),s[2].setComponents(h+o,l+p,m+x,E+T).normalize(),s[3].setComponents(h-o,l-p,m-x,E-T).normalize(),n)s[4].setComponents(c,d,f,y).normalize(),s[5].setComponents(h-c,l-d,m-f,E-y).normalize();else if(s[4].setComponents(h-c,l-d,m-f,E-y).normalize(),e===un)s[5].setComponents(h+c,l+d,m+f,E+y).normalize();else if(e===ps)s[5].setComponents(c,d,f,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);let e=Vd.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yh=new pe,za=class i{constructor(){this.coordinateSystem=un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];yh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ci),n[s].setFromProjectionMatrix(yh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ci),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var hi=class extends on{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ga=new I,ka=new I,vh=new pe,Ys=new ys,ga=new Ln,Ll=new I,Mh=new I,Va=class extends Se{constructor(t=new _e,e=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ga.fromBufferAttribute(e,s-1),ka.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ga.distanceTo(ka);t.setAttribute("lineDistance",new ee(n,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;vh.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(vh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let l=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=l,f=g-1;x<f;x+=h){let m=u.getX(x),v=u.getX(x+1),T=_a(this,t,Ys,c,m,v,x);T&&e.push(T)}if(this.isLineLoop){let x=u.getX(g-1),f=u.getX(l),m=_a(this,t,Ys,c,x,f,g-1);m&&e.push(m)}}else{let l=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=l,f=g-1;x<f;x+=h){let m=_a(this,t,Ys,c,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=_a(this,t,Ys,c,g-1,l,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _a(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),ka.fromBufferAttribute(o,r),e.distanceSqToSegment(Ga,ka,Ll,Mh)>n)return;Ll.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Ll);if(!(h<t.near||h>t.far))return{distance:h,point:Mh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Sh=new I,bh=new I,Pi=class extends Va{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Sh.fromBufferAttribute(e,s),bh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sh.distanceTo(bh);t.setAttribute("lineDistance",new ee(n,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ui=class extends on{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eh=new pe,Gl=new ys,xa=new Ln,ya=new I,Li=class extends Se{constructor(t=new _e,e=new ui){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,t.ray.intersectsSphere(xa)===!1)return;Eh.copy(s).invert(),Gl.copy(t.ray).applyMatrix4(Eh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,p=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),l=Math.min(h.count,a.start+a.count);for(let g=d,x=l;g<x;g++){let f=h.getX(g);ya.fromBufferAttribute(p,f),Th(ya,f,c,s,t,e,this)}}else{let d=Math.max(0,a.start),l=Math.min(p.count,a.start+a.count);for(let g=d,x=l;g<x;g++)ya.fromBufferAttribute(p,g),Th(ya,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Th(i,t,e,n,s,r,a){let o=Gl.distanceSqToPoint(i);if(o<e){let c=new I;Gl.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var cr=class extends je{constructor(t=[],e=ki,n,s,r,a,o,c,h,u){super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hr=class extends je{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zn=class extends je{constructor(t,e,n=bn,s,r,a,o=Be,c=Be,h,u=qn,p=1){if(u!==qn&&u!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ur=class extends Zn{constructor(t,e=bn,n=ki,s,r,a=Be,o=Be,c,h=qn){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},dr=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},he=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],p=[],d=0,l=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ee(h,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(p,2));function g(x,f,m,v,T,y,E,w,_,S,L){let C=y/_,P=E/S,O=y/2,N=E/2,R=w/2,B=_+1,W=S+1,H=0,Q=0,k=new I;for(let K=0;K<W;K++){let j=K*P-N;for(let bt=0;bt<B;bt++){let Ft=bt*C-O;k[x]=Ft*v,k[f]=j*T,k[m]=R,h.push(k.x,k.y,k.z),k[x]=0,k[f]=0,k[m]=w>0?1:-1,u.push(k.x,k.y,k.z),p.push(bt/_),p.push(1-K/S),H+=1}}for(let K=0;K<S;K++)for(let j=0;j<_;j++){let bt=d+j+B*K,Ft=d+j+B*(K+1),Y=d+(j+1)+B*(K+1),pt=d+(j+1)+B*K;c.push(bt,Ft,pt),c.push(Ft,Y,pt),Q+=6}o.addGroup(l,Q,L),l+=Q,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var di=class i extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],h=new I,u=new st;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let l=n+p/e*s;h.x=t*Math.cos(l),h.y=t*Math.sin(l),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(o,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xe=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],l=[],g=0,x=[],f=n/2,m=0;v(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ee(p,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(l,2));function v(){let y=new I,E=new I,w=0,_=(e-t)/n;for(let S=0;S<=r;S++){let L=[],C=S/r,P=C*(e-t)+t;for(let O=0;O<=s;O++){let N=O/s,R=N*c+o,B=Math.sin(R),W=Math.cos(R);E.x=P*B,E.y=-C*n+f,E.z=P*W,p.push(E.x,E.y,E.z),y.set(B,_,W).normalize(),d.push(y.x,y.y,y.z),l.push(N,1-C),L.push(g++)}x.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let C=x[L][S],P=x[L+1][S],O=x[L+1][S+1],N=x[L][S+1];(t>0||L!==0)&&(u.push(C,P,N),w+=3),(e>0||L!==r-1)&&(u.push(P,O,N),w+=3)}h.addGroup(m,w,0),m+=w}function T(y){let E=g,w=new st,_=new I,S=0,L=y===!0?t:e,C=y===!0?1:-1;for(let O=1;O<=s;O++)p.push(0,f*C,0),d.push(0,C,0),l.push(.5,.5),g++;let P=g;for(let O=0;O<=s;O++){let R=O/s*c+o,B=Math.cos(R),W=Math.sin(R);_.x=L*W,_.y=f*C,_.z=L*B,p.push(_.x,_.y,_.z),d.push(0,C,0),w.x=B*.5+.5,w.y=W*.5*C+.5,l.push(w.x,w.y),g++}for(let O=0;O<s;O++){let N=E+O,R=P+O;y===!0?u.push(R,R+1,N):u.push(R+1,R,N),S+=3}h.addGroup(m,S,y===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fr=class i extends xe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,l=(a-u)/d;return(s+l)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new st:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new pe;for(let l=0;l<=t;l++){let g=l/t;s[l]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),d<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let l=1;l<=t;l++){if(r[l]=r[l-1].clone(),a[l]=a[l-1].clone(),o.crossVectors(s[l-1],s[l]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(te(s[l-1].dot(s[l]),-1,1));r[l].applyMatrix4(c.makeRotationAxis(o,g))}a[l].crossVectors(s[l],r[l])}if(e===!0){let l=Math.acos(te(r[0].dot(r[t]),-1,1));l/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(l=-l);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],l*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ms=class extends ln{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new st){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=c-this.aX,l=h-this.aY;c=d*u-l*p+this.aX,h=d*p+l*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wa=class extends Ms{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,p){let d=(a-r)/h-(o-r)/(h+u)+(o-a)/u,l=(o-a)/u-(c-a)/(u+p)+(c-o)/p;d*=u,l*=u,s(a,o,d,l)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var wh=new I,Ah=new I,Dl=new yc,Nl=new yc,Ul=new yc,fi=class extends ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(Ah.subVectors(s[0],s[1]).add(s[0]),h=Ah);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(wh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=wh),this.curveType==="centripetal"||this.curveType==="chordal"){let l=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(p),l),x=Math.pow(p.distanceToSquared(d),l),f=Math.pow(d.distanceToSquared(u),l);x<1e-4&&(x=1),g<1e-4&&(g=x),f<1e-4&&(f=x),Dl.initNonuniformCatmullRom(h.x,p.x,d.x,u.x,g,x,f),Nl.initNonuniformCatmullRom(h.y,p.y,d.y,u.y,g,x,f),Ul.initNonuniformCatmullRom(h.z,p.z,d.z,u.z,g,x,f)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(h.x,p.x,d.x,u.x,this.tension),Nl.initCatmullRom(h.y,p.y,d.y,u.y,this.tension),Ul.initCatmullRom(h.z,p.z,d.z,u.z,this.tension));return n.set(Dl.calc(c),Nl.calc(c),Ul.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Wd(i,t){let e=1-i;return e*e*t}function Xd(i,t){return 2*(1-i)*i*t}function qd(i,t){return i*i*t}function Js(i,t,e,n){return Wd(i,t)+Xd(i,e)+qd(i,n)}function Yd(i,t){let e=1-i;return e*e*e*t}function Zd(i,t){let e=1-i;return 3*e*e*i*t}function Jd(i,t){return 3*(1-i)*i*i*t}function $d(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Yd(i,t)+Zd(i,e)+Jd(i,n)+$d(i,s)}var pr=class extends ln{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xa=class extends ln{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y),$s(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mr=class extends ln{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends ln{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gr=class extends ln{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ss=class extends ln{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y),Js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Rh(o,c.x,h.x,u.x,p.x),Rh(o,c.y,h.y,u.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},Ya=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:fi,CubicBezierCurve:pr,CubicBezierCurve3:Xa,EllipseCurve:Ms,LineCurve:mr,LineCurve3:qa,QuadraticBezierCurve:gr,QuadraticBezierCurve3:Ss,SplineCurve:_r}),Za=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ya[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ya[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},xr=class extends Za{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mr(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new gr(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new pr(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let h=new Ms(t,e,n,s,r,a,o,c);if(this.curves.length>0){let p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Di=class extends xr{constructor(t){super(t),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xr().fromJSON(s))}return this}};function Kd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=wu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(n&&(r=nf(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let u=o,p=c;for(let d=e;d<s;d+=e){let l=i[d],g=i[d+1];l<o&&(o=l),g<c&&(c=g),l>u&&(u=l),g>p&&(p=g)}h=Math.max(u-o,p-c),h=h!==0?32767/h:0}return yr(r,a,e,o,c,h,0),a}function wu(i,t,e,n,s){let r;if(s===pf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ch(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ch(a/n|0,i[a],i[a+1],r);return r&&bs(r,r.next)&&(Mr(r),r=r.next),r}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||we(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&lf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?jd(i,n,s,r):Qd(i)){t.push(c.i,i.i,h.i),Mr(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=tf(Ni(i),t),yr(i,t,e,n,s,r,2)):a===2&&ef(i,t,e,n,s,r):yr(Ni(i),t,e,n,s,r,1);break}}}function Qd(i){let t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,u=Math.min(s,r,a),p=Math.min(o,c,h),d=Math.max(s,r,a),l=Math.max(o,c,h),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=p&&g.y<=l&&Zs(s,o,r,c,a,h,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(we(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,p=r.y,d=a.y,l=Math.min(o,c,h),g=Math.min(u,p,d),x=Math.max(o,c,h),f=Math.max(u,p,d),m=kl(l,g,t,e,n),v=kl(x,f,t,e,n),T=i.prevZ,y=i.nextZ;for(;T&&T.z>=m&&y&&y.z<=v;){if(T.x>=l&&T.x<=x&&T.y>=g&&T.y<=f&&T!==s&&T!==a&&Zs(o,u,c,p,h,d,T.x,T.y)&&we(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=l&&y.x<=x&&y.y>=g&&y.y<=f&&y!==s&&y!==a&&Zs(o,u,c,p,h,d,y.x,y.y)&&we(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=m;){if(T.x>=l&&T.x<=x&&T.y>=g&&T.y<=f&&T!==s&&T!==a&&Zs(o,u,c,p,h,d,T.x,T.y)&&we(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=v;){if(y.x>=l&&y.x<=x&&y.y>=g&&y.y<=f&&y!==s&&y!==a&&Zs(o,u,c,p,h,d,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function tf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!bs(n,s)&&Ru(n,e,e.next,s)&&vr(n,s)&&vr(s,n)&&(t.push(n.i,e.i,s.i),Mr(e),Mr(e.next),e=i=s),e=e.next}while(e!==i);return Ni(e)}function ef(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&uf(a,o)){let c=Cu(a,o);a=Ni(a,a.next),c=Ni(c,c.next),yr(a,t,e,n,s,r,0),yr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function nf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=wu(i,o,c,n,!1);h===h.next&&(h.steiner=!0),s.push(hf(h))}s.sort(sf);for(let r=0;r<s.length;r++)e=rf(s[r],e);return e}function sf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function rf(i,t){let e=af(i,t);if(!e)return t;let n=Cu(e,i);return Ni(n,n.next),Ni(e,e.next)}function af(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(bs(i,e))return e;do{if(bs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,h=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Au(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);vr(e,i)&&(p<u||p===u&&(e.x>a.x||e.x===a.x&&of(a,e)))&&(a=e,u=p)}e=e.next}while(e!==o);return a}function of(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function lf(i,t,e,n){let s=i;do s.z===0&&(s.z=kl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cf(s)}function cf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let h=0;h<e&&(o++,a=a.nextZ,!!a);h++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function kl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Au(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Zs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Au(i,t,e,n,s,r,a,o)}function uf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!df(i,t)&&(vr(i,t)&&vr(t,i)&&ff(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||bs(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bs(i,t){return i.x===t.x&&i.y===t.y}function Ru(i,t,e,n){let s=Ma(we(i,t,e)),r=Ma(we(i,t,n)),a=Ma(we(e,n,i)),o=Ma(we(e,n,t));return!!(s!==r&&a!==o||s===0&&va(i,e,t)||r===0&&va(i,n,t)||a===0&&va(e,i,n)||o===0&&va(e,t,n))}function va(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ma(i){return i>0?1:i<0?-1:0}function df(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ru(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function ff(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cu(i,t){let e=Vl(i.i,i.x,i.y),n=Vl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ch(i,t,e,n){let s=Vl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Wl=class{static triangulate(t,e,n=2){return Kd(t,e,n)}},Rn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ih(t),Ph(n,t);let a=t.length;e.forEach(Ih);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Ph(n,e[c]);let o=Wl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Ih(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ph(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Sr=class i extends _e{constructor(t=new Di([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let h=t[o];a(h)}this.setAttribute("position",new ee(s,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function a(o){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,l=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:l-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:mf,T,y=!1,E,w,_,S;if(m){T=m.getSpacedPoints(u),y=!0,d=!1;let et=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(u,et),w=new I,_=new I,S=new I}d||(f=0,l=0,g=0,x=0);let L=o.extractPoints(h),C=L.shape,P=L.holes;if(!Rn.isClockWise(C)){C=C.reverse();for(let et=0,ht=P.length;et<ht;et++){let at=P[et];Rn.isClockWise(at)&&(P[et]=at.reverse())}}function N(et){let at=10000000000000001e-36,wt=et[0];for(let yt=1;yt<=et.length;yt++){let Yt=yt%et.length,Lt=et[Yt],ne=Lt.x-wt.x,se=Lt.y-wt.y,de=ne*ne+se*se,F=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(wt.x),Math.abs(wt.y)),Ie=at*F*F;if(de<=Ie){et.splice(Yt,1),yt--;continue}wt=Lt}}N(C),P.forEach(N);let R=P.length,B=C;for(let et=0;et<R;et++){let ht=P[et];C=C.concat(ht)}function W(et,ht,at){return ht||kt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ht,at)}let H=C.length;function Q(et,ht,at){let wt,yt,Yt,Lt=et.x-ht.x,ne=et.y-ht.y,se=at.x-et.x,de=at.y-et.y,F=Lt*Lt+ne*ne,Ie=Lt*de-ne*se;if(Math.abs(Ie)>Number.EPSILON){let jt=Math.sqrt(F),ye=Math.sqrt(se*se+de*de),mt=ht.x-ne/jt,Re=ht.y+Lt/jt,Ht=at.x-de/ye,Wt=at.y+se/ye,A=((Ht-mt)*de-(Wt-Re)*se)/(Lt*de-ne*se);wt=mt+Lt*A-et.x,yt=Re+ne*A-et.y;let M=wt*wt+yt*yt;if(M<=2)return new st(wt,yt);Yt=Math.sqrt(M/2)}else{let jt=!1;Lt>Number.EPSILON?se>Number.EPSILON&&(jt=!0):Lt<-Number.EPSILON?se<-Number.EPSILON&&(jt=!0):Math.sign(ne)===Math.sign(de)&&(jt=!0),jt?(wt=-ne,yt=Lt,Yt=Math.sqrt(F)):(wt=Lt,yt=ne,Yt=Math.sqrt(F/2))}return new st(wt/Yt,yt/Yt)}let k=[];for(let et=0,ht=B.length,at=ht-1,wt=et+1;et<ht;et++,at++,wt++)at===ht&&(at=0),wt===ht&&(wt=0),k[et]=Q(B[et],B[at],B[wt]);let K=[],j,bt=k.concat();for(let et=0,ht=R;et<ht;et++){let at=P[et];j=[];for(let wt=0,yt=at.length,Yt=yt-1,Lt=wt+1;wt<yt;wt++,Yt++,Lt++)Yt===yt&&(Yt=0),Lt===yt&&(Lt=0),j[wt]=Q(at[wt],at[Yt],at[Lt]);K.push(j),bt=bt.concat(j)}let Ft;if(f===0)Ft=Rn.triangulateShape(B,P);else{let et=[],ht=[];for(let at=0;at<f;at++){let wt=at/f,yt=l*Math.cos(wt*Math.PI/2),Yt=g*Math.sin(wt*Math.PI/2)+x;for(let Lt=0,ne=B.length;Lt<ne;Lt++){let se=W(B[Lt],k[Lt],Yt);Ut(se.x,se.y,-yt),wt===0&&et.push(se)}for(let Lt=0,ne=R;Lt<ne;Lt++){let se=P[Lt];j=K[Lt];let de=[];for(let F=0,Ie=se.length;F<Ie;F++){let jt=W(se[F],j[F],Yt);Ut(jt.x,jt.y,-yt),wt===0&&de.push(jt)}wt===0&&ht.push(de)}}Ft=Rn.triangulateShape(et,ht)}let Y=Ft.length,pt=g+x;for(let et=0;et<H;et++){let ht=d?W(C[et],bt[et],pt):C[et];y?(_.copy(E.normals[0]).multiplyScalar(ht.x),w.copy(E.binormals[0]).multiplyScalar(ht.y),S.copy(T[0]).add(_).add(w),Ut(S.x,S.y,S.z)):Ut(ht.x,ht.y,0)}for(let et=1;et<=u;et++)for(let ht=0;ht<H;ht++){let at=d?W(C[ht],bt[ht],pt):C[ht];y?(_.copy(E.normals[et]).multiplyScalar(at.x),w.copy(E.binormals[et]).multiplyScalar(at.y),S.copy(T[et]).add(_).add(w),Ut(S.x,S.y,S.z)):Ut(at.x,at.y,p/u*et)}for(let et=f-1;et>=0;et--){let ht=et/f,at=l*Math.cos(ht*Math.PI/2),wt=g*Math.sin(ht*Math.PI/2)+x;for(let yt=0,Yt=B.length;yt<Yt;yt++){let Lt=W(B[yt],k[yt],wt);Ut(Lt.x,Lt.y,p+at)}for(let yt=0,Yt=P.length;yt<Yt;yt++){let Lt=P[yt];j=K[yt];for(let ne=0,se=Lt.length;ne<se;ne++){let de=W(Lt[ne],j[ne],wt);y?Ut(de.x,de.y+T[u-1].y,T[u-1].x+at):Ut(de.x,de.y,p+at)}}}Et(),Nt();function Et(){let et=s.length/3;if(d){let ht=0,at=H*ht;for(let wt=0;wt<Y;wt++){let yt=Ft[wt];Vt(yt[2]+at,yt[1]+at,yt[0]+at)}ht=u+f*2,at=H*ht;for(let wt=0;wt<Y;wt++){let yt=Ft[wt];Vt(yt[0]+at,yt[1]+at,yt[2]+at)}}else{for(let ht=0;ht<Y;ht++){let at=Ft[ht];Vt(at[2],at[1],at[0])}for(let ht=0;ht<Y;ht++){let at=Ft[ht];Vt(at[0]+H*u,at[1]+H*u,at[2]+H*u)}}n.addGroup(et,s.length/3-et,0)}function Nt(){let et=s.length/3,ht=0;xt(B,ht),ht+=B.length;for(let at=0,wt=P.length;at<wt;at++){let yt=P[at];xt(yt,ht),ht+=yt.length}n.addGroup(et,s.length/3-et,1)}function xt(et,ht){let at=et.length;for(;--at>=0;){let wt=at,yt=at-1;yt<0&&(yt=et.length-1);for(let Yt=0,Lt=u+f*2;Yt<Lt;Yt++){let ne=H*Yt,se=H*(Yt+1),de=ht+wt+ne,F=ht+yt+ne,Ie=ht+yt+se,jt=ht+wt+se;Tt(de,F,Ie,jt)}}}function Ut(et,ht,at){c.push(et),c.push(ht),c.push(at)}function Vt(et,ht,at){Gt(et),Gt(ht),Gt(at);let wt=s.length/3,yt=v.generateTopUV(n,s,wt-3,wt-2,wt-1);$t(yt[0]),$t(yt[1]),$t(yt[2])}function Tt(et,ht,at,wt){Gt(et),Gt(ht),Gt(wt),Gt(ht),Gt(at),Gt(wt);let yt=s.length/3,Yt=v.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);$t(Yt[0]),$t(Yt[1]),$t(Yt[3]),$t(Yt[1]),$t(Yt[2]),$t(Yt[3])}function Gt(et){s.push(c[et*3+0]),s.push(c[et*3+1]),s.push(c[et*3+2])}function $t(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ya[s.type]().fromJSON(s)),new i(n,t.options)}},mf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new st(r,a),new st(o,c),new st(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],p=t[n*3+2],d=t[s*3],l=t[s*3+1],g=t[s*3+2],x=t[r*3],f=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new st(a,1-c),new st(h,1-p),new st(d,1-g),new st(x,1-m)]:[new st(o,1-c),new st(u,1-p),new st(l,1-g),new st(f,1-m)]}};function gf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Sn=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,p=t/o,d=e/c,l=[],g=[],x=[],f=[];for(let m=0;m<u;m++){let v=m*d-a;for(let T=0;T<h;T++){let y=T*p-r;g.push(y,-v,0),x.push(0,0,1),f.push(T/o),f.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let T=v+h*m,y=v+h*(m+1),E=v+1+h*(m+1),w=v+1+h*m;l.push(T,y,w),l.push(y,E,w)}this.setIndex(l),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ui=class i extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],h=[],u=[],p=t,d=(e-t)/s,l=new I,g=new st;for(let x=0;x<=s;x++){for(let f=0;f<=n;f++){let m=r+f/n*a;l.x=p*Math.cos(m),l.y=p*Math.sin(m),c.push(l.x,l.y,l.z),h.push(0,0,1),g.x=(l.x/e+1)/2,g.y=(l.y/e+1)/2,u.push(g.x,g.y)}p+=d}for(let x=0;x<s;x++){let f=x*(n+1);for(let m=0;m<n;m++){let v=m+f,T=v,y=v+n+1,E=v+n+2,w=v+1;o.push(T,y,w),o.push(y,E,w)}}this.setIndex(o),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Jn=class i extends _e{constructor(t=new Di([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let u=0;u<t.length;u++)h(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(a,2));function h(u){let p=s.length/3,d=u.extractPoints(e),l=d.shape,g=d.holes;Rn.isClockWise(l)===!1&&(l=l.reverse());for(let f=0,m=g.length;f<m;f++){let v=g[f];Rn.isClockWise(v)===!0&&(g[f]=v.reverse())}let x=Rn.triangulateShape(l,g);for(let f=0,m=g.length;f<m;f++){let v=g[f];l=l.concat(v)}for(let f=0,m=l.length;f<m;f++){let v=l[f];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let f=0,m=x.length;f<m;f++){let v=x[f],T=v[0]+p,y=v[1]+p,E=v[2]+p;n.push(T,y,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return _f(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function _f(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var $n=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],p=new I,d=new I,l=[],g=[],x=[],f=[];for(let m=0;m<=n;m++){let v=[],T=m/n,y=a+T*o,E=t*Math.cos(y),w=Math.sqrt(t*t-E*E),_=0;m===0&&a===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let L=S/e,C=s+L*r;p.x=-w*Math.cos(C),p.y=E,p.z=w*Math.sin(C),g.push(p.x,p.y,p.z),d.copy(p).normalize(),x.push(d.x,d.y,d.z),f.push(L+_,1-T),v.push(h++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let T=u[m][v+1],y=u[m][v],E=u[m+1][v],w=u[m+1][v+1];(m!==0||a>0)&&l.push(T,y,w),(m!==n-1||c<Math.PI)&&l.push(y,E,w)}this.setIndex(l),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var en=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],h=[],u=[],p=[],d=new I,l=new I,g=new I;for(let x=0;x<=n;x++){let f=a+x/n*o;for(let m=0;m<=s;m++){let v=m/s*r;l.x=(t+e*Math.cos(f))*Math.cos(v),l.y=(t+e*Math.cos(f))*Math.sin(v),l.z=e*Math.sin(f),h.push(l.x,l.y,l.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),g.subVectors(l,d).normalize(),u.push(g.x,g.y,g.z),p.push(m/s),p.push(x/n)}}for(let x=1;x<=n;x++)for(let f=1;f<=s;f++){let m=(s+1)*x+f-1,v=(s+1)*(x-1)+f-1,T=(s+1)*(x-1)+f,y=(s+1)*x+f;c.push(m,v,y),c.push(v,T,y)}this.setIndex(c),this.setAttribute("position",new ee(h,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Fi=class i extends _e{constructor(t=new Ss(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,h=new st,u=new I,p=[],d=[],l=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ee(p,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(l,2));function x(){for(let T=0;T<e;T++)f(T);f(r===!1?e:0),v(),m()}function f(T){u=t.getPointAt(T/e,u);let y=a.normals[T],E=a.binormals[T];for(let w=0;w<=s;w++){let _=w/s*Math.PI*2,S=Math.sin(_),L=-Math.cos(_);c.x=L*y.x+S*E.x,c.y=L*y.y+S*E.y,c.z=L*y.z+S*E.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,p.push(o.x,o.y,o.z)}}function m(){for(let T=1;T<=e;T++)for(let y=1;y<=s;y++){let E=(s+1)*(T-1)+(y-1),w=(s+1)*T+(y-1),_=(s+1)*T+y,S=(s+1)*(T-1)+y;g.push(E,w,S),g.push(w,_,S)}}function v(){for(let T=0;T<=e;T++)for(let y=0;y<=s;y++)h.x=T/e,h.y=y/s,l.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var br=class extends on{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ot(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Lh(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Lh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function Lh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Iu={clone:Wi,merge:Ye},yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends on{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new st().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ja=class extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ae=class extends on{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Es=class extends Ae{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ci('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Er=class extends on{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ho,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},$a=class extends on{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends on{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ls(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Sa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var pi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qa=class extends pi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hl:r=t,o=2*e-n;break;case zl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hl:a=t,c=2*n-e;break;case zl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,l=this._weightNext,g=(n-e)/(s-e),x=g*g,f=x*g,m=-d*f+2*d*x-d*g,v=(1+d)*f+(-1.5-2*d)*x+(-.5+d)*g+1,T=(-1-l)*f+(1.5+l)*x+.5*g,y=l*f-l*x;for(let E=0;E!==o;++E)r[E]=m*a[u+E]+v*a[h+E]+T*a[c+E]+y*a[p+E];return r}},ja=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[h+d]*p+a[c+d]*u;return r}},to=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},eo=class extends pi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-e)/(s-e),x=1-g;for(let f=0;f!==o;++f)r[f]=a[h+f]*x+a[c+f]*g;return r}let d=o*2,l=t-1;for(let g=0;g!==o;++g){let x=a[h+g],f=a[c+g],m=l*d+g*2,v=p[m],T=p[m+1],y=t*d+g*2,E=u[y],w=u[y+1],_=Sf(n,e,v,E,s);r[g]=Pu(_,x,T,w,f)}return r}};function Pu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Mf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Sf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Pu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Mf(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ls(e,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ls(t.times,Array),values:ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Sa(t.settings)&&(n.settings={inTangents:ls(t.settings.inTangents,Array),outTangents:ls(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new eo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case Ua:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break;case Ol:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Sa(this.settings)&&(Dh(this.settings.inTangents,t),Dh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Sa(this.settings)&&(Nh(this.settings.inTangents,t),Nh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){kt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){kt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&bd(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){kt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ta,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let p=o*n,d=p-n,l=p+n;for(let g=0;g!==n;++g){let x=e[p+g];if(x!==e[d+g]||x!==e[l+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let l=0;l!==n;++l)e[d+l]=e[p+l]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Sa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Dh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Nh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Ua;var mi=class extends cn{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Ks;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};no.prototype.ValueTypeName="color";var io=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};io.prototype.ValueTypeName="number";var so=class extends pi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)In.slerpFlat(r,0,a,h-o,a,h,c);return r}},Tr=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new so(this.times,this.values,this.getValueSize(),t)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends cn{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Ks;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};ro.prototype.ValueTypeName="vector";var ao=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return h.push(u,p),this},this.removeHandler=function(u){let p=h.indexOf(u);return p!==-1&&h.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=h.length;p<d;p+=2){let l=h[p],g=h[p+1];if(l.global&&(l.lastIndex=0),l.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lu=new ao,oo=class{constructor(t){this.manager=t!==void 0?t:Lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends Se{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},wr=class extends Ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fl=new pe,Uh=new I,Fh=new I,Ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ci,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===ps||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ba=new I,Ea=new In,wn=new I,Rr=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ba,Ea,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ba,Ea,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Ea,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},li=new I,Oh=new st,Bh=new st,Xe=class extends Rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,Bh),e.subVectors(Bh,Oh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xl=class extends Ar{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0}},Oi=class extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Cr=class extends Rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ql=class extends Ar{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ql}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var cs=-90,hs=1,ws=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Xe(cs,hs,t,e);r.layers=this.layers,this.add(r);let a=new Xe(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new Xe(cs,hs,t,e);o.layers=this.layers,this.add(o);let c=new Xe(cs,hs,t,e);c.layers=this.layers,this.add(c);let h=new Xe(cs,hs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),l=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,l),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},lo=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Mc="\\[\\]\\.:\\/",bf=new RegExp("["+Mc+"]","g"),Sc="[^"+Mc+"]",Ef="[^"+Mc.replace("\\.","")+"]",Tf=/((?:WC+[\/:])*)/.source.replace("WC",Sc),wf=/(WCOD+)?/.source.replace("WCOD",Ef),Af=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),Rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),Cf=new RegExp("^"+Tf+wf+Af+Rf+"$"),If=["material","materials","bones","map"],Yl=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bf,"")}static parseTrackName(t){let e=Cf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);If.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Yl;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F_=new Float32Array(1);var Rc=class Rc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Rc.prototype.isMatrix2=!0;var Zl=Rc;function bc(i,t,e,n){let s=Pf(n);switch(e){case dc:return i*t;case xo:return i*t/s.components*s.byteLength;case yo:return i*t/s.components*s.byteLength;case xi:return i*t*2/s.components*s.byteLength;case vo:return i*t*2/s.components*s.byteLength;case fc:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case Mo:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:case To:return Math.max(i,16)*Math.max(t,8)/4;case So:case Eo:return Math.max(i,8)*Math.max(t,8)/2;case wo:case Ao:case Co:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Fr:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qo:case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Or:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pf(i){switch(i){case sn:case lc:return{byteLength:1,components:1};case Cs:case cc:case En:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case bn:case mo:case pn:return{byteLength:4,components:1};case hc:case uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function td(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Of(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,p=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,u),o.onUploadCallback();let l;if(h instanceof Float32Array)l=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)l=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?l=i.HALF_FLOAT:l=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)l=i.SHORT;else if(h instanceof Uint32Array)l=i.UNSIGNED_INT;else if(h instanceof Int32Array)l=i.INT;else if(h instanceof Int8Array)l=i.BYTE;else if(h instanceof Uint8Array)l=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)l=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:l,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,h){let u=c.array,p=c.updateRanges;if(i.bindBuffer(h,o),p.length===0)i.bufferSubData(h,0,u);else{p.sort((l,g)=>l.start-g.start);let d=0;for(let l=1;l<p.length;l++){let g=p[d],x=p[l];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,p[d]=x)}p.length=d+1;for(let l=0,g=p.length;l<g;l++){let x=p[l];i.bufferSubData(h,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,op=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ep=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Up=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Bf,alphahash_pars_fragment:Hf,alphamap_fragment:zf,alphamap_pars_fragment:Gf,alphatest_fragment:kf,alphatest_pars_fragment:Vf,aomap_fragment:Wf,aomap_pars_fragment:Xf,batching_pars_vertex:qf,batching_vertex:Yf,begin_vertex:Zf,beginnormal_vertex:Jf,bsdfs:$f,iridescence_fragment:Kf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:ep,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:ap,common:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Cp,envmap_vertex:yp,fog_vertex:vp,fog_pars_vertex:Mp,fog_fragment:Sp,fog_pars_fragment:bp,gradientmap_pars_fragment:Ep,lightmap_pars_fragment:Tp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Rp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Pp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Np,lights_physical_pars_fragment:Up,lights_fragment_begin:Fp,lights_fragment_maps:Op,lights_fragment_end:Bp,lightprobes_pars_fragment:Hp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Vp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:$p,morphcolor_vertex:Kp,morphnormal_vertex:Qp,morphtarget_pars_vertex:jp,morphtarget_vertex:tm,normal_fragment_begin:em,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:vm,shadowmap_vertex:Mm,shadowmask_pars_fragment:Sm,skinbase_vertex:bm,skinning_pars_vertex:Em,skinning_vertex:Tm,skinnormal_vertex:wm,specularmap_fragment:Am,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Im,transmission_fragment:Pm,transmission_pars_fragment:Lm,uv_pars_fragment:Dm,uv_pars_vertex:Nm,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Om,background_frag:Bm,backgroundCube_vert:Hm,backgroundCube_frag:zm,cube_vert:Gm,cube_frag:km,depth_vert:Vm,depth_frag:Wm,distance_vert:Xm,distance_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:$m,meshbasic_vert:Km,meshbasic_frag:Qm,meshlambert_vert:jm,meshlambert_frag:t0,meshmatcap_vert:e0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:u0,points_frag:d0,shadow_vert:f0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},Mt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Fn={basic:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ye([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ye([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ye([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ye([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ye([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ye([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Ye([Mt.common,Mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Ye([Mt.lights,Mt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Fn.physical={uniforms:Ye([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var jo={r:0,b:0,g:0},_0=new pe,ed=new Xt;ed.set(-1,0,0,0,1,0,0,0,1);function x0(i,t,e,n,s,r){let a=new Ot(0),o=s===!0?0:1,c,h,u=null,p=0,d=null;function l(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=t.get(T,y)}return T}function g(v){let T=!1,y=l(v);y===null?f(a,o):y&&y.isColor&&(f(y,1),T=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,T){let y=l(T);y&&y.isCubeTexture?(h===void 0&&(h=new Jt(new he(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Wi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ed),h.material.toneMapped=oe.getTransfer(y.colorSpace)!==me,(u!==y||p!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,p=y.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Jt(new Sn(2,2),new Nn({name:"BackgroundMaterial",uniforms:Wi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=oe.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,T){v.getRGB(jo,vc(i)),e.buffers.color.setClear(jo.r,jo.g,jo.b,T,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,f(a,o)},render:g,addToRenderList:x,dispose:m}}function y0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(P,O,N,R,B){let W=!1,H=p(P,R,N,O);r!==H&&(r=H,h(r.object)),W=l(P,R,N,B),W&&g(P,R,N,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(P,O,N,R),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function h(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function p(P,O,N,R){let B=R.wireframe===!0,W=n[O.id];W===void 0&&(W={},n[O.id]=W);let H=P.isInstancedMesh===!0?P.id:0,Q=W[H];Q===void 0&&(Q={},W[H]=Q);let k=Q[N.id];k===void 0&&(k={},Q[N.id]=k);let K=k[B];return K===void 0&&(K=d(c()),k[B]=K),K}function d(P){let O=[],N=[],R=[];for(let B=0;B<e;B++)O[B]=0,N[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:N,attributeDivisors:R,object:P,attributes:{},index:null}}function l(P,O,N,R){let B=r.attributes,W=O.attributes,H=0,Q=N.getAttributes();for(let k in Q)if(Q[k].location>=0){let j=B[k],bt=W[k];if(bt===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(bt=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(bt=P.instanceColor)),j===void 0||j.attribute!==bt||bt&&j.data!==bt.data)return!0;H++}return r.attributesNum!==H||r.index!==R}function g(P,O,N,R){let B={},W=O.attributes,H=0,Q=N.getAttributes();for(let k in Q)if(Q[k].location>=0){let j=W[k];j===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let bt={};bt.attribute=j,j&&j.data&&(bt.data=j.data),B[k]=bt,H++}r.attributes=B,r.attributesNum=H,r.index=R}function x(){let P=r.newAttributes;for(let O=0,N=P.length;O<N;O++)P[O]=0}function f(P){m(P,0)}function m(P,O){let N=r.newAttributes,R=r.enabledAttributes,B=r.attributeDivisors;N[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),B[P]!==O&&(i.vertexAttribDivisor(P,O),B[P]=O)}function v(){let P=r.newAttributes,O=r.enabledAttributes;for(let N=0,R=O.length;N<R;N++)O[N]!==P[N]&&(i.disableVertexAttribArray(N),O[N]=0)}function T(P,O,N,R,B,W,H){H===!0?i.vertexAttribIPointer(P,O,N,B,W):i.vertexAttribPointer(P,O,N,R,B,W)}function y(P,O,N,R){x();let B=R.attributes,W=N.getAttributes(),H=O.defaultAttributeValues;for(let Q in W){let k=W[Q];if(k.location>=0){let K=B[Q];if(K===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let j=K.normalized,bt=K.itemSize,Ft=t.get(K);if(Ft===void 0)continue;let Y=Ft.buffer,pt=Ft.type,Et=Ft.bytesPerElement,Nt=pt===i.INT||pt===i.UNSIGNED_INT||K.gpuType===mo;if(K.isInterleavedBufferAttribute){let xt=K.data,Ut=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,Vt=K.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Tt=0;Tt<k.locationSize;Tt++)m(k.location+Tt,xt.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Tt=0;Tt<k.locationSize;Tt++)f(k.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Tt=0;Tt<k.locationSize;Tt++)T(k.location+Tt,bt/k.locationSize,pt,j,Ut*Et,(Vt+bt/k.locationSize*Tt)*Et,Nt)}else{if(K.isInstancedBufferAttribute){for(let xt=0;xt<k.locationSize;xt++)m(k.location+xt,K.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xt=0;xt<k.locationSize;xt++)f(k.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let xt=0;xt<k.locationSize;xt++)T(k.location+xt,bt/k.locationSize,pt,j,bt*Et,bt/k.locationSize*xt*Et,Nt)}}else if(H!==void 0){let j=H[Q];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(k.location,j);break;case 3:i.vertexAttrib3fv(k.location,j);break;case 4:i.vertexAttrib4fv(k.location,j);break;default:i.vertexAttrib1fv(k.location,j)}}}}v()}function E(){L();for(let P in n){let O=n[P];for(let N in O){let R=O[N];for(let B in R){let W=R[B];for(let H in W)u(W[H].object),delete W[H];delete R[B]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let N in O){let R=O[N];for(let B in R){let W=R[B];for(let H in W)u(W[H].object),delete W[H];delete R[B]}}delete n[P.id]}function _(P){for(let O in n){let N=n[O];for(let R in N){let B=N[R];if(B[P.id]===void 0)continue;let W=B[P.id];for(let H in W)u(W[H].object),delete W[H];delete B[P.id]}}}function S(P){for(let O in n){let N=n[O],R=P.isInstancedMesh===!0?P.id:0,B=N[R];if(B!==void 0){for(let W in B){let H=B[W];for(let Q in H)u(H[Q].object),delete H[Q];delete B[W]}delete N[R],Object.keys(N).length===0&&delete n[O]}}}function L(){C(),a=!0,r!==s&&(r=s,h(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:f,disableUnusedAttributes:v}}function v0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let l=0;l<u;l++)d+=h[l];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function M0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Tn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==sn&&_!==pn&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(zt("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:l,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:E,samples:w}}function S0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vn,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let l=p.length!==0||d||n!==0||s;return s=d,n=p.length,l},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,l){let g=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,m=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?u(null):h();else{let v=r?0:n,T=v*4,y=m.clippingState||null;c.value=y,y=u(g,d,T,l);for(let E=0;E!==T;++E)y[E]=e[E];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,l,g){let x=p!==null?p.length:0,f=null;if(x!==0){if(f=c.value,g!==!0||f===null){let m=l+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<m)&&(f=new Float32Array(m));for(let T=0,y=l;T!==x;++T,y+=4)a.copy(p[T]).applyMatrix4(v,o),a.normal.toArray(f,y),f[y+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}var Gr=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new he(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:zi});r.uniforms.tEquirect.value=e;let a=new Jt(s,r),o=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Qe),new ws(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Du=256,b0=3,E0=20,nd=256,id=16,T0=3,w0=new I,A0=new Ot,Ps=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ws(1,10,null),this._boxMesh=new Jt(new he(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=w0}=r,c=this._renderer;this._setSize(a);let h=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,d=c.autoClearColor,l=c.autoClearDepth,g=c.autoClearStencil,x=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(t.background=c.getClearColor(A0));let f=new ws(n,s,u);return f.position.copy(o),f.update(c,t),c.autoClear=p,c.autoClearColor=d,c.autoClearDepth=l,c.autoClearStencil=g,t.background=x,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Du,Mu(t))}_fromTexture(t,e){t.mapping===ki||t.mapping===Rs?this._setSize(t.image.length===0?Du:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Nu(t,!1,!1),n=Math.log2(t)-b0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Nu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ki||t.mapping===Rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Uu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=R0(),this._integrationMaterial=C0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/id);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-T0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(nd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=I0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Nu(i,t,e){return new Gr(i,{minFilter:Kn,generateMipmaps:t,type:En,colorSpace:Qs,depthBuffer:e})}function kr(i,t,e){return new Nn({name:i,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:ze,blending:zi,depthTest:!1,depthWrite:!1})}function R0(){return kr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function C0(){return kr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:id}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function I0(){return kr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${E0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Uu(){return kr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Fu(){return kr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,l=!1){return d==null?null:l?a(d):r(d)}function r(d){if(d&&d.isTexture){let l=d.mapping;if(l===uo||l===fo)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new Gr(g.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",h),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let l=d.mapping,g=l===uo||l===fo,x=l===ki||l===Rs;if(g||x){let f=e.get(d),m=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Ps(i)),f=g?n.fromEquirectangular(d,f):n.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),f.texture;if(f!==void 0)return f.texture;{let v=d.image;return g&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Ps(i)),f=g?n.fromEquirectangular(d):n.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),d.addEventListener("dispose",u),f.texture):null}}}return d}function o(d,l){return l===uo?d.mapping=ki:l===fo&&(d.mapping=Rs),d}function c(d){let l=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&l++;return l===g}function h(d){let l=d.target;l.removeEventListener("dispose",h);let g=t.get(l);g!==void 0&&(t.delete(l),g.dispose())}function u(d){let l=d.target;l.removeEventListener("dispose",u);let g=e.get(l);g!==void 0&&(e.delete(l),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function L0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ci("WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let f in g.attributes)t.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function h(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function u(g){let x=g.attributes;for(let f in x)t.update(x[f],i.ARRAY_BUFFER)}function p(g){let x=g.index,f=g.attributes.position,m=0;if(f===void 0)return;let v=x!==null?x.array.length:f.array.length/3-1,T=f.count>=65535?ar:rr,y=new T(Math.ceil(v/3)*6,1),E=y.array;if(x!==null){let _=x.array;m=x.version;for(let S=0,L=0;S<v;S+=3){let C=_[S+0],P=_[S+1],O=_[S+2];E[L++]=C,E[L++]=P,E[L++]=P,E[L++]=O,E[L++]=O,E[L++]=C}}else{m=f.version;for(let _=0,S=0;_<v;_+=3){let L=_+0,C=_+1,P=_+2;E[S++]=L,E[S++]=C,E[S++]=C,E[S++]=P,E[S++]=P,E[S++]=L}}y.version=m;let w=r.get(g);w&&t.remove(w),r.set(g,y)}function d(g){let x=r.get(g);if(x){let f=g.index;f!==null&&x.version<f.version&&p(g)}else p(g);return r.get(g)}function l(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:h,update:u,getWireframeAttribute:d,dispose:l}}function N0(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function h(p,d,l){l!==0&&(i.drawElementsInstanced(n,d,r,p*a,l),e.update(d,n,l))}function u(p,d,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,l);let x=0;for(let f=0;f<l;f++)x+=d[f];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function U0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function F0(i,t,e){let n=new WeakMap,s=new Ee;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let l=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;l===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let y=o.attributes.position.count*T,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*E*4*p),_=new nr(w,y,E,p);_.type=pn,_.needsUpdate=!0;let S=T*4;for(let C=0;C<p;C++){let P=f[C],O=m[C],N=v[C],R=y*E*4*C;for(let B=0;B<P.count;B++){let W=B*S;l===!0&&(s.fromBufferAttribute(P,B),w[R+W+0]=s.x,w[R+W+1]=s.y,w[R+W+2]=s.z,w[R+W+3]=0),g===!0&&(s.fromBufferAttribute(O,B),w[R+W+4]=s.x,w[R+W+5]=s.y,w[R+W+6]=s.z,w[R+W+7]=0),x===!0&&(s.fromBufferAttribute(N,B),w[R+W+8]=s.x,w[R+W+9]=s.y,w[R+W+10]=s.z,w[R+W+11]=N.itemSize===4?s.w:1)}}d={count:p,texture:_,size:new st(y,E)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let l=0;for(let x=0;x<h.length;x++)l+=h[x];let g=o.morphTargetsRelative?1:1-l;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function O0(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,p=h.geometry,d=t.get(h,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let l=h.skeleton;r.get(l)!==u&&(l.update(),r.set(l,u))}return d}function o(){r=new WeakMap}function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var B0={[tc]:"LINEAR_TONE_MAPPING",[ec]:"REINHARD_TONE_MAPPING",[nc]:"CINEON_TONE_MAPPING",[ic]:"ACES_FILMIC_TONE_MAPPING",[rc]:"AGX_TONE_MAPPING",[ac]:"NEUTRAL_TONE_MAPPING",[sc]:"CUSTOM_TONE_MAPPING"};function H0(i,t,e,n,s,r){let a=new tn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=null,u=new _e;u.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ee([0,2,0,0,2,0],2));let p=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Jt(u,p),l=new Cr(-1,1,1,-1,0,1),g=null,x=null,f=!1,m,v=null,T=[],y=!1;this.setSize=function(E,w){a.setSize(E,w),o!==null&&o.setSize(E,w),c!==null&&c.setSize(E,w);for(let _=0;_<T.length;_++){let S=T[_];S.setSize&&S.setSize(E,w)}},this.setEffects=function(E){T=E,y=T.length>0&&T[0].isRenderPass===!0;let w=a.width,_=a.height;T.length>0&&o===null&&(o=new tn(w,_,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new tn(w,_,{type:En,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&T.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&h===null&&(h=new Zn(w,_),r===!0&&(h.format=Qn,h.type=Vi)),a.dispose(),a.depthTexture=S?h:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<T.length;L++){let C=T[L];C.setSize&&C.setSize(w,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(h)}},this.begin=function(E,w){if(f||E.toneMapping===fn&&T.length===0)return!1;if(v=w,w!==null){let _=w.width,S=w.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return y===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=fn,!0},this.hasRenderPass=function(){return y},this.end=function(E,w){E.toneMapping=m,f=!0;let _=a,S=o;for(let L=0;L<T.length;L++){let C=T[L];C.enabled!==!1&&(C.render(E,S,_,w),C.needsSwap!==!1&&(_=S,S=S===o?c:o))}if(g!==E.outputColorSpace||x!==E.toneMapping){g=E.outputColorSpace,x=E.toneMapping,p.defines={},oe.getTransfer(g)===me&&(p.defines.SRGB_TRANSFER="");let L=B0[x];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(v),E.render(d,l),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),p.dispose()}}var sd=new je,rd=new Zn(1,1),ad=new ur(1),od=new nr,ld=new Ha,cd=new cr,Ou=[],Bu=[],Hu=new Float32Array(16),zu=new Float32Array(9),Gu=new Float32Array(4);function Ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ou[s];if(r===void 0&&(r=new Float32Array(s),Ou[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nl(i,t){let e=Bu[t];e===void 0&&(e=new Int32Array(t),Bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function z0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),Ne(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;zu.set(n),i.uniformMatrix3fv(this.addr,!1,zu),Ne(e,n)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Hu.set(n),i.uniformMatrix4fv(this.addr,!1,Hu),Ne(e,n)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function K0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function il(i){return i.version===0&&(i.compareFunction=gc,i.needsUpdate=!0),i}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=il(rd):r=sd,e.setTexture2D(t||r,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ld,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=il(ad):r=cd,e.setTextureCube(t||r,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||od,s)}function rg(i){switch(i){case 5126:return z0;case 35664:return G0;case 35665:return k0;case 35666:return V0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return $0;case 5125:return K0;case 36294:return Q0;case 36295:return j0;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}function ag(i,t){i.uniform1fv(this.addr,t)}function og(i,t){let e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function lg(i,t){let e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function cg(i,t){let e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function hg(i,t){let e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ug(i,t){let e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dg(i,t){let e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fg(i,t){i.uniform1iv(this.addr,t)}function pg(i,t){i.uniform2iv(this.addr,t)}function mg(i,t){i.uniform3iv(this.addr,t)}function gg(i,t){i.uniform4iv(this.addr,t)}function _g(i,t){i.uniform1uiv(this.addr,t)}function xg(i,t){i.uniform2uiv(this.addr,t)}function yg(i,t){i.uniform3uiv(this.addr,t)}function vg(i,t){i.uniform4uiv(this.addr,t)}function Mg(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=il(rd):a=sd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Sg(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ld,r[a])}function bg(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=il(ad):a=cd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Eg(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||od,r[a])}function Tg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return yg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Eg}}var Pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rg(e.type)}},Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},Dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function ku(i,t){i.seq.push(t),i.map[t.id]=t}function wg(i,t,e){let n=i.name,s=n.length;for(Cc.lastIndex=0;;){let r=Cc.exec(n),a=Cc.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){ku(e,h===void 0?new Pc(o,i,t):new Lc(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Dc(o),ku(e,p)),e=p}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);wg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Vu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ag=37297,Rg=0;function Cg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wu=new Xt;function Ig(i){oe._getMatrix(Wu,oe.workingColorSpace,i);let t=`mat3( ${Wu.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case js:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Cg(i.getShaderSource(t),o)}else return r}function Pg(i,t){let e=Ig(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Lg={[tc]:"Linear",[ec]:"Reinhard",[nc]:"Cineon",[ic]:"ACESFilmic",[rc]:"AgX",[ac]:"Neutral",[sc]:"Custom"};function Dg(i,t){let e=Lg[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tl=new I;function Ng(){oe.getLuminanceCoefficients(tl);let i=tl.x.toFixed(4),t=tl.y.toFixed(4),e=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Fg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function zr(i){return i!==""}function qu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Yu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(Bg,Hg)}function Hg(i,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Nc(e)}var zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(i){return i.replace(zg,Gg)}function Gg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ju(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var kg={[Hi]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function Vg(i){return kg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wg={[Rs]:"ENVMAP_MODE_REFRACTION"};function Xg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Wg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qg={[ho]:"ENVMAP_BLENDING_MULTIPLY",[au]:"ENVMAP_BLENDING_MIX",[ou]:"ENVMAP_BLENDING_ADD"};function Yg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qg[i.combine]||"ENVMAP_BLENDING_NONE"}function Zg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Vg(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Xg(e),p=Yg(e),d=Ug(e),l=Fg(r),g=s.createProgram(),x,f,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,l].filter(zr).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,l].filter(zr).join(`
`),f.length>0&&(f+=`
`)):(x=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,l,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),f=[Ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,l,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==fn?Dg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),Ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),a=Nc(a),a=qu(a,e),a=Yu(a,e),o=Nc(o),o=qu(o,e),o=Yu(o,e),a=Zu(a),o=Zu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=m+x+a,T=m+f+o,y=Vu(s,s.VERTEX_SHADER,v),E=Vu(s,s.FRAGMENT_SHADER,T);s.attachShader(g,y),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(y)||"",N=s.getShaderInfoLog(E)||"",R=P.trim(),B=O.trim(),W=N.trim(),H=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,E);else{let k=Xu(s,y,"vertex"),K=Xu(s,E,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+k+`
`+K)}else R!==""?zt("WebGLProgram: Program Info Log:",R):(B===""||W==="")&&(Q=!1);Q&&(C.diagnostics={runnable:H,programLog:R,vertexShader:{log:B,prefix:x},fragmentShader:{log:W,prefix:f}})}s.deleteShader(y),s.deleteShader(E),_=new Is(s,g),S=Og(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,Ag)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}var Jg=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fc(t),e.set(t,n)),n}},Fc=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function $g(i){return i===xi||i===Fr||i===Or}function Kg(i,t,e,n,s,r){let a=new ir,o=new Uc,c=new Set,h=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function l(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,L,C,P,O){let N=C.fog,R=P.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=t.get(_.envMap||B,W),Q=d[_.type],k=n.precision;_.precision!==null&&(k=n.getMaxPrecision(_.precision),k!==_.precision&&zt("WebGLProgram.getParameters:",_.precision,"not supported, using",k,"instead."));let K=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,j=K!==void 0?K.length:0,bt=0;R.morphAttributes.position!==void 0&&(bt=1),R.morphAttributes.normal!==void 0&&(bt=2),R.morphAttributes.color!==void 0&&(bt=3);let Ft,Y,pt,Et;if(Q){let vt=Fn[Q];Ft=vt.vertexShader,Y=vt.fragmentShader}else{Ft=_.vertexShader,Y=_.fragmentShader;let vt=o.getVertexShaderStage(_),ge=o.getFragmentShaderStage(_);o.update(_,vt,ge),pt=vt.id,Et=ge.id}let Nt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ut=P.isInstancedMesh===!0,Vt=P.isBatchedMesh===!0,Tt=!!_.map,Gt=!!_.matcap,$t=!!H,et=$t&&H.isPMREMTexture===!0,ht=!!_.aoMap,at=!!_.lightMap,wt=!!_.bumpMap&&_.wireframe===!1,yt=!!_.normalMap,Yt=!!_.displacementMap,Lt=!!_.emissiveMap,ne=!!_.metalnessMap,se=!!_.roughnessMap,de=_.anisotropy>0,F=_.clearcoat>0,Ie=_.diffuseRoughness>0,jt=_.dispersion>0,ye=_.retroreflectivity>0,mt=_.iridescence>0,Re=_.sheen>0,Ht=_.transmission>0,Wt=de&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,G=F&&!!_.clearcoatRoughnessMap,nt=Ie&&!!_.diffuseRoughnessMap,tt=mt&&!!_.iridescenceMap,ot=mt&&!!_.iridescenceThicknessMap,gt=Re&&!!_.sheenColorMap,Z=Re&&!!_.sheenRoughnessMap,J=!!_.specularMap,ut=!!_.specularColorMap,D=!!_.specularIntensityMap,$=Ht&&!!_.transmissionMap,q=Ht&&!!_.thicknessMap,dt=!!_.gradientMap,rt=!!_.alphaMap,lt=_.alphaTest>0,Dt=!!_.alphaHash,Kt=!!_.extensions,it=fn;_.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(it=i.toneMapping);let Bt=et?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Zt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Ft,fragmentShader:Y,defines:_.defines,customVertexShaderID:pt,customFragmentShaderID:Et,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:k,batching:Vt,batchingColor:Vt&&P._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&P.instanceColor!==null,instancingMorph:Ut&&P.morphTexture!==null,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Tt,matcap:Gt,envMap:$t,envMapMode:$t&&H.mapping,envMapPMREM:et,envMapMaxLod:et?Bt.length-1:null,envMapSize:et?Bt[0].width:null,aoMap:ht,lightMap:at,bumpMap:wt,normalMap:yt,displacementMap:Yt,emissiveMap:Lt,normalMapObjectSpace:yt&&_.normalMapType===hu,normalMapTangentSpace:yt&&_.normalMapType===Br,packedNormalMap:yt&&_.normalMapType===Br&&$g(_.normalMap.format),metalnessMap:ne,roughnessMap:se,anisotropy:de,anisotropyMap:Wt,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:Ie,diffuseRoughnessMap:nt,dispersion:jt,retroreflection:ye,iridescence:mt,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:Re,sheenColorMap:gt,sheenRoughnessMap:Z,specularMap:J,specularColorMap:ut,specularIntensityMap:D,transmission:Ht,transmissionMap:$,thicknessMap:q,gradientMap:dt,opaque:_.transparent===!1&&_.blending===qe&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:Dt,combine:_.combine,mapUv:Tt&&l(_.map.channel),aoMapUv:ht&&l(_.aoMap.channel),lightMapUv:at&&l(_.lightMap.channel),bumpMapUv:wt&&l(_.bumpMap.channel),normalMapUv:yt&&l(_.normalMap.channel),displacementMapUv:Yt&&l(_.displacementMap.channel),emissiveMapUv:Lt&&l(_.emissiveMap.channel),metalnessMapUv:ne&&l(_.metalnessMap.channel),roughnessMapUv:se&&l(_.roughnessMap.channel),anisotropyMapUv:Wt&&l(_.anisotropyMap.channel),clearcoatMapUv:A&&l(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&l(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&l(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&l(_.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&l(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&l(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&l(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&l(_.sheenRoughnessMap.channel),specularMapUv:J&&l(_.specularMap.channel),specularColorMapUv:ut&&l(_.specularColorMap.channel),specularIntensityMapUv:D&&l(_.specularIntensityMap.channel),transmissionMapUv:$&&l(_.transmissionMap.channel),thicknessMapUv:q&&l(_.thicknessMap.channel),alphaMapUv:rt&&l(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(yt||de),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!R.attributes.uv&&(Tt||rt),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&yt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:bt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Tt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Kt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&_.extensions.multiDraw===!0||Vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(f(S,_),m(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function f(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let S=d[_.type],L;if(S){let C=Fn[S];L=Iu.clone(C.uniforms)}else L=_.uniforms;return L}function T(_,S){let L=u.get(S);return L!==void 0?++L.usedTimes:(L=new Zg(i,S,_,s),h.push(L),u.set(S,L)),L}function y(_){if(--_.usedTimes===0){let S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:E,programs:h,dispose:w}}function Qg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function $u(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ku(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let l=0;return d.isInstancedMesh&&(l+=2),d.isSkinnedMesh&&(l+=1),l}function o(d,l,g,x,f,m){let v=i[t];return v===void 0?(v={id:d.id,object:d,geometry:l,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:f,group:m},i[t]=v):(v.id=d.id,v.object=d,v.geometry=l,v.material=g,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=f,v.group=m),t++,v}function c(d,l,g,x,f,m,v){v.reversedDepth===!0&&(f=-f);let T=o(d,l,g,x,f,m);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function h(d,l,g,x,f,m){let v=o(d,l,g,x,f,m);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(d,l){e.length>1&&e.sort(d||jg),n.length>1&&n.sort(l||$u),s.length>1&&s.sort(l||$u)}function p(){for(let d=t,l=i.length;d<l;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:p,sort:u}}function t_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ku,i.set(n,[a])):s>=r.length?(a=new Ku,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function e_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Ot};break;case"SpotLight":e={position:new I,direction:new I,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function n_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r_(i){let t=new e_,e=n_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);let s=new I,r=new pe,a=new pe;function o(h){let u=0,p=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let l=0,g=0,x=0,f=0,m=0,v=0,T=0,y=0,E=0,w=0,_=0,S=0,L=0,C=0;h.sort(s_);for(let O=0,N=h.length;O<N;O++){let R=h[O],B=R.color,W=R.intensity,H=R.distance,Q=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===xi?Q=R.shadow.map.texture:Q=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=B.r*W,p+=B.g*W,d+=B.b*W;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],W);C++}else if(R.isSunLight){let k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,j=e.get(R);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=Q;let bt=K.getViewportCount();for(let Ft=0;Ft<bt;Ft++)n.sunShadowMatrix[x+Ft]=K.getMatrix(Ft),n.sunShadowCascade[x+Ft]=K._cascadeData[Ft];x+=bt,g++}n.sun[l]=k,l++}else if(R.isDirectionalLight){let k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,j=e.get(R);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=R.shadow.matrix,E++}n.directional[f]=k,f++}else if(R.isSpotLight){let k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(B).multiplyScalar(W),k.distance=H,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[v]=k;let K=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,K.updateMatrices(R),R.castShadow&&L++),n.spotLightMatrix[v]=K.matrix,R.castShadow){let j=e.get(R);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=Q,_++}v++}else if(R.isRectAreaLight){let k=t.get(R);k.color.copy(B).multiplyScalar(W),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[T]=k,T++}else if(R.isPointLight){let k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let K=R.shadow,j=e.get(R);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=R.shadow.matrix,w++}n.point[m]=k,m++}else if(R.isHemisphereLight){let k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(W),k.groundColor.copy(R.groundColor).multiplyScalar(W),n.hemi[y]=k,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let P=n.hash;(P.sunLength!==l||P.directionalLength!==f||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==T||P.hemiLength!==y||P.numSunShadows!==g||P.numDirectionalShadows!==E||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==S||P.numLightProbes!==C)&&(n.sun.length=l,n.directional.length=f,n.spot.length=v,n.rectArea.length=T,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,P.sunLength=l,P.directionalLength=f,P.pointLength=m,P.spotLength=v,P.rectAreaLength=T,P.hemiLength=y,P.numSunShadows=g,P.numDirectionalShadows=E,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=S,P.numLightProbes=C,n.version=i_++)}function c(h,u){let p=0,d=0,l=0,g=0,x=0,f=0,m=u.matrixWorldInverse;for(let v=0,T=h.length;v<T;v++){let y=h[v];if(y.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),p++}else if(y.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(y.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let E=n.point[l];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),l++}else if(y.isHemisphereLight){let E=n.hemi[f];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),f++}}}return{setup:o,setupView:c,state:n}}function Qu(i){let t=new r_(i),e=[],n=[],s=[];function r(p){u.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function c(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function h(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function a_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Qu(i),t.set(s,[o])):r>=a.length?(o=new Qu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],h_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ju=new pe,Hr=new I,Ic=new I;function u_(i,t,e){let n=new ci,s=new st,r=new st,a=new Ee,o=new $a,c=new Ka,h={},u=e.maxTextureSize,p={[_i]:ze,[ze]:_i,[nn]:nn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:o_,fragmentShader:l_}),l=d.clone();l.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Jt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hi;let m=this.type;this.render=function(w,_,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===Gh&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hi);let L=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(zi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=m!==this.type;N&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(B=>B.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,B=w.length;R<B;R++){let W=w[R],H=W.shadow;if(H===void 0){zt("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Q=H.getFrameExtents();s.multiply(Q),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,H.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=k,H.map===null||N===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===As){if(W.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new tn(s.x,s.y,{format:xi,type:En,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new Zn(s.x,s.y,pn),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=qn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Be,H.map.depthTexture.magFilter=Be}else W.isPointLight?(H.map=new Gr(s.x),H.map.depthTexture=new ur(s.x,bn)):(H.map=new tn(s.x,s.y),H.map.depthTexture=new Zn(s.x,s.y,bn)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=qn,this.type===Hi?(H.map.depthTexture.compareFunction=k?mc:pc,H.map.depthTexture.minFilter=Qe,H.map.depthTexture.magFilter=Qe):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Be,H.map.depthTexture.magFilter=Be);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let K=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,S);let j=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let bt=0;bt<K;bt++){let Ft=H.getCamera(bt);if(W.isPointLight){let Y=H.camera,pt=H.matrix,Et=W.distance||Y.far;Et!==Y.far&&(Y.far=Et,Y.updateProjectionMatrix()),Hr.setFromMatrixPosition(W.matrixWorld),Y.position.copy(Hr),Ic.copy(Y.position),Ic.add(c_[bt]),Y.up.copy(h_[bt]),Y.lookAt(Ic),Y.updateMatrixWorld(),pt.makeTranslation(-Hr.x,-Hr.y,-Hr.z),ju.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ju,Y.coordinateSystem,Y.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(H.map),i.clear());let Y=H.getViewport(bt);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),O.viewport(a)}n=H.getFrustum(bt),y(_,S,Ft,W,j,this.type)}H.isPointLightShadow!==!0&&this.type===As&&v(H,S),H.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(L,C,P)};function v(w,_){let S=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,l.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,l.needsUpdate=!0),w.mapPass===null?w.mapPass=new tn(s.x,s.y,{format:xi,type:En}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,S,d,x,null),l.uniforms.shadow_pass.value=w.mapPass.texture,l.uniforms.resolution.value.set(w.map.width,w.map.height),l.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,S,l,x,null)}function T(w,_,S,L){let C=null,P=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)C=P;else if(C=S.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=C.uuid,N=_.uuid,R=h[O];R===void 0&&(R={},h[O]=R);let B=R[N];B===void 0&&(B=C.clone(),R[N]=B,_.addEventListener("dispose",E)),C=B}if(C.visible=_.visible,C.wireframe=_.wireframe,L===As?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:p[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=S}return C}function y(w,_,S,L,C,P){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===As)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let R=t.update(w),B=w.material;if(Array.isArray(B)){let W=R.groups;for(let H=0,Q=W.length;H<Q;H++){let k=W[H],K=B[k.materialIndex];if(K&&K.visible){let j=T(w,K,L,P);w.onBeforeShadow(i,w,_,S,R,j,k),i.renderBufferDirect(S,null,R,j,w,k),w.onAfterShadow(i,w,_,S,R,j,k)}}}else if(B.visible){let W=T(w,B,L,P);w.onBeforeShadow(i,w,_,S,R,W,null),i.renderBufferDirect(S,null,R,W,w,null),w.onAfterShadow(i,w,_,S,R,W,null)}}let N=w.children;for(let R=0,B=N.length;R<B;R++)y(N[R],_,S,L,C,P)}function E(w){w.target.removeEventListener("dispose",E);for(let S in h){let L=h[S],C=w.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function d_(i,t){function e(){let D=!1,$=new Ee,q=null,dt=new Ee(0,0,0,0);return{setMask:function(rt){q!==rt&&!D&&(i.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){D=rt},setClear:function(rt,lt,Dt,Kt,it){it===!0&&(rt*=Kt,lt*=Kt,Dt*=Kt),$.set(rt,lt,Dt,Kt),dt.equals($)===!1&&(i.clearColor(rt,lt,Dt,Kt),dt.copy($))},reset:function(){D=!1,q=null,dt.set(-1,0,0,0)}}}function n(){let D=!1,$=!1,q=null,dt=null,rt=null;return{setReversed:function(lt){if($!==lt){let Dt=t.get("EXT_clip_control");lt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),$=lt;let Kt=rt;rt=null,this.setClear(Kt)}},getReversed:function(){return $},setTest:function(lt){lt?xt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(lt){q!==lt&&!D&&(i.depthMask(lt),q=lt)},setFunc:function(lt){if($&&(lt=vu[lt]),dt!==lt){switch(lt){case Aa:i.depthFunc(i.NEVER);break;case Ra:i.depthFunc(i.ALWAYS);break;case Ca:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=lt}},setLocked:function(lt){D=lt},setClear:function(lt){rt!==lt&&(rt=lt,$&&(lt=1-lt),i.clearDepth(lt))},reset:function(){D=!1,q=null,dt=null,rt=null,$=!1}}}function s(){let D=!1,$=null,q=null,dt=null,rt=null,lt=null,Dt=null,Kt=null,it=null;return{setTest:function(Bt){D||(Bt?xt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Bt){$!==Bt&&!D&&(i.stencilMask(Bt),$=Bt)},setFunc:function(Bt,Zt,vt){(q!==Bt||dt!==Zt||rt!==vt)&&(i.stencilFunc(Bt,Zt,vt),q=Bt,dt=Zt,rt=vt)},setOp:function(Bt,Zt,vt){(lt!==Bt||Dt!==Zt||Kt!==vt)&&(i.stencilOp(Bt,Zt,vt),lt=Bt,Dt=Zt,Kt=vt)},setLocked:function(Bt){D=Bt},setClear:function(Bt){it!==Bt&&(i.clearStencil(Bt),it=Bt)},reset:function(){D=!1,$=null,q=null,dt=null,rt=null,lt=null,Dt=null,Kt=null,it=null}}}let r=new e,a=new n,o=new s,c={},h=new WeakMap,u={},p={},d={},l=new WeakMap,g=[],x=null,f=!1,m=null,v=null,T=null,y=null,E=null,w=null,_=null,S=new Ot(0,0,0),L=0,C=!1,P=null,O=null,N=null,R=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Q>=2);let K=null,j={},bt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Y=new Ee().fromArray(bt),pt=new Ee().fromArray(Ft);function Et(D,$,q,dt){let rt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(D,lt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<q;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D($+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return lt}let Nt={};Nt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(ds),wt(!1),yt(Jl),xt(i.CULL_FACE),ht(zi);function xt(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ut(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Vt(D,$){return d[D]!==$?(i.bindFramebuffer(D,$),d[D]=$,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Tt(D,$){let q=g,dt=!1;if(D){q=l.get($),q===void 0&&(q=[],l.set($,q));let rt=D.textures;if(q.length!==rt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Dt=rt.length;lt<Dt;lt++)q[lt]=i.COLOR_ATTACHMENT0+lt;q.length=rt.length,dt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,dt=!0);dt&&i.drawBuffers(q)}function Gt(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let $t={[Gi]:i.FUNC_ADD,[Vh]:i.FUNC_SUBTRACT,[Wh]:i.FUNC_REVERSE_SUBTRACT};$t[Xh]=i.MIN,$t[qh]=i.MAX;let et={[Yh]:i.ZERO,[Zh]:i.ONE,[Jh]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[eu]:i.SRC_ALPHA_SATURATE,[jh]:i.DST_COLOR,[Kh]:i.DST_ALPHA,[$h]:i.ONE_MINUS_SRC_COLOR,[jl]:i.ONE_MINUS_SRC_ALPHA,[tu]:i.ONE_MINUS_DST_COLOR,[Qh]:i.ONE_MINUS_DST_ALPHA,[nu]:i.CONSTANT_COLOR,[iu]:i.ONE_MINUS_CONSTANT_COLOR,[su]:i.CONSTANT_ALPHA,[ru]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(D,$,q,dt,rt,lt,Dt,Kt,it,Bt){if(D===zi){f===!0&&(Ut(i.BLEND),f=!1);return}if(f===!1&&(xt(i.BLEND),f=!0),D!==kh){if(D!==m||Bt!==C){if((v!==Gi||E!==Gi)&&(i.blendEquation(i.FUNC_ADD),v=Gi,E=Gi),Bt)switch(D){case qe:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ir:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",D);break}else switch(D){case qe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $l:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",D);break}T=null,y=null,w=null,_=null,S.set(0,0,0),L=0,m=D,C=Bt}return}rt=rt||$,lt=lt||q,Dt=Dt||dt,($!==v||rt!==E)&&(i.blendEquationSeparate($t[$],$t[rt]),v=$,E=rt),(q!==T||dt!==y||lt!==w||Dt!==_)&&(i.blendFuncSeparate(et[q],et[dt],et[lt],et[Dt]),T=q,y=dt,w=lt,_=Dt),(Kt.equals(S)===!1||it!==L)&&(i.blendColor(Kt.r,Kt.g,Kt.b,it),S.copy(Kt),L=it),m=D,C=!1}function at(D,$){D.side===nn?Ut(i.CULL_FACE):xt(i.CULL_FACE);let q=D.side===ze;$&&(q=!q),wt(q),D.blending===qe&&D.transparent===!1?ht(zi):ht(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let dt=D.stencilWrite;o.setTest(dt),dt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function yt(D){D!==Hh?(xt(i.CULL_FACE),D!==O&&(D===Jl?i.cullFace(i.BACK):D===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),O=D}function Yt(D){D!==N&&(H&&i.lineWidth(D),N=D)}function Lt(D,$,q){D?(xt(i.POLYGON_OFFSET_FILL),(R!==$||B!==q)&&(R=$,B=q,a.getReversed()&&($=-$,q=-q),i.polygonOffset($,q))):Ut(i.POLYGON_OFFSET_FILL)}function ne(D){D?xt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function se(D){D===void 0&&(D=i.TEXTURE0+W-1),K!==D&&(i.activeTexture(D),K=D)}function de(D,$,q){q===void 0&&(K===null?q=i.TEXTURE0+W-1:q=K);let dt=j[q];dt===void 0&&(dt={type:void 0,texture:void 0},j[q]=dt),(dt.type!==D||dt.texture!==$)&&(K!==q&&(i.activeTexture(q),K=q),i.bindTexture(D,$||Nt[D]),dt.type=D,dt.texture=$)}function F(){let D=j[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ie(){try{i.compressedTexImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function jt(){try{i.compressedTexImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function ye(){try{i.texSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function mt(){try{i.texSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Re(){try{i.compressedTexSubImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function Ht(){try{i.compressedTexSubImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function Wt(){try{i.texStorage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function M(){try{i.texImage2D(...arguments)}catch(D){kt("WebGLState:",D)}}function G(){try{i.texImage3D(...arguments)}catch(D){kt("WebGLState:",D)}}function nt(D){return p[D]!==void 0?p[D]:i.getParameter(D)}function tt(D,$){p[D]!==$&&(i.pixelStorei(D,$),p[D]=$)}function ot(D){Y.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function gt(D){pt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),pt.copy(D))}function Z(D,$){let q=h.get($);q===void 0&&(q=new WeakMap,h.set($,q));let dt=q.get(D);dt===void 0&&(dt=i.getUniformBlockIndex($,D.name),i.uniformBlockBinding($,dt,dt),q.set(D,dt))}function J(D,$,q){let rt=h.get($).get(D);c[rt]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,q),c[rt]=q)}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},K=null,j={},d={},c={},l=new WeakMap,g=[],x=null,f=!1,m=null,v=null,T=null,y=null,E=null,w=null,_=null,S=new Ot(0,0,0),L=0,C=!1,P=null,O=null,N=null,R=null,B=null,Y.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Ut,bindFramebuffer:Vt,drawBuffers:Tt,useProgram:Gt,setBlending:ht,setMaterial:at,setFlipSided:wt,setCullFace:yt,setLineWidth:Yt,setPolygonOffset:Lt,setScissorTest:ne,activeTexture:se,bindTexture:de,unbindTexture:F,compressedTexImage2D:Ie,compressedTexImage3D:jt,texImage2D:M,texImage3D:G,pixelStorei:tt,getParameter:nt,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Wt,texStorage3D:A,texSubImage2D:ye,texSubImage3D:mt,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ht,scissor:ot,viewport:gt,reset:ut}}function f_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new st,u=new WeakMap,p=new Set,d,l=new WeakMap,g=new Set,x=new FinalizationRegistry(A=>g.delete(A)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return f?new OffscreenCanvas(A,M):tr("canvas")}function v(A,M,G){let nt=1,tt=Wt(A);if((tt.width>G||tt.height>G)&&(nt=G/Math.max(tt.width,tt.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ot=Math.floor(nt*tt.width),gt=Math.floor(nt*tt.height);d===void 0&&(d=m(ot,gt));let Z=M?m(ot,gt):d;return Z.width=ot,Z.height=gt,Z.getContext("2d").drawImage(A,0,0,ot,gt),zt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ot+"x"+gt+")."),Z}else return"data"in A&&zt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function T(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,M,G,nt,tt,ot=!1){if(A!==null){if(i[A]!==void 0)return i[A];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;nt&&(gt=t.get("EXT_texture_norm16"),gt||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8),G===i.UNSIGNED_SHORT&&gt&&(Z=gt.R16_EXT),G===i.SHORT&&gt&&(Z=gt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),M===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8),G===i.UNSIGNED_SHORT&&gt&&(Z=gt.RG16_EXT),G===i.SHORT&&gt&&(Z=gt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_SHORT&&gt&&(Z=gt.RGB16_EXT),G===i.SHORT&&gt&&(Z=gt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),M===i.RGBA){let J=ot?js:oe.getTransfer(tt);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=J===me?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&gt&&(Z=gt.RGBA16_EXT),G===i.SHORT&&gt&&(Z=gt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(A,M){let G;return A?M===null||M===bn||M===Vi?G=i.DEPTH24_STENCIL8:M===pn?G=i.DEPTH32F_STENCIL8:M===Cs&&(G=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bn||M===Vi?G=i.DEPTH_COMPONENT24:M===pn?G=i.DEPTH_COMPONENT32F:M===Cs&&(G=i.DEPTH_COMPONENT16),G}function S(A,M){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==Qe?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function L(A){let M=new WeakRef(A);n.get(A).__ref=M,g.add(M),x.register(A,M,M)}function C(A){let M=n.get(A).__ref;M!==void 0&&(g.delete(M),x.unregister(M))}function P(A){N(A.target)}function O(A){R(A.target)}function N(A){A.removeEventListener("dispose",P),C(A),W(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&p.delete(A)}function R(A){A.removeEventListener("dispose",O),C(A),Q(A)}function B(){for(let A of g){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?R(M):N(M))}g.clear(),p.clear()}function W(A){let M=n.get(A);if(M.__webglInit===void 0)return;let G=A.source,nt=l.get(G);if(nt){let tt=nt[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&H(A),Object.keys(nt).length===0&&l.delete(G)}n.remove(A)}function H(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let G=A.source,nt=l.get(G);delete nt[M.__cacheKey],a.memory.textures--}function Q(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&N(G),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(M.__webglFramebuffer[tt]))for(let ot=0;ot<M.__webglFramebuffer[tt].length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[tt][ot]);else i.deleteFramebuffer(M.__webglFramebuffer[tt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[tt])}else{if(Array.isArray(M.__webglFramebuffer))for(let tt=0;tt<M.__webglFramebuffer.length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[tt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let tt=0;tt<M.__webglColorRenderbuffer.length;tt++)M.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[tt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let nt=A.textures;for(let tt=0,ot=nt.length;tt<ot;tt++){let gt=n.get(nt[tt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(nt[tt])}n.remove(A)}let k=0;function K(){k=0}function j(){return k}function bt(A){k=A}function Ft(){let A=k;return A>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function Y(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function pt(A,M){let G=n.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let nt=A.image;if(nt===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(G,A,M);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function Et(A,M){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){at(G,A,M);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function Nt(A,M){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){at(G,A,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function xt(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){wt(G,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}let Ut={[fs]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},Vt={[Be]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Tt={[du]:i.NEVER,[gc]:i.ALWAYS,[fu]:i.LESS,[pc]:i.LEQUAL,[pu]:i.EQUAL,[mc]:i.GEQUAL,[mu]:i.GREATER,[gu]:i.NOTEQUAL};function Gt(A,M){if(M.type===pn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Qe||M.magFilter===po||M.magFilter===Pr||M.magFilter===Kn||M.minFilter===Qe||M.minFilter===po||M.minFilter===Pr||M.minFilter===Kn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ut[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ut[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ut[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Vt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Vt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Tt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Be||M.minFilter!==Pr&&M.minFilter!==Kn||M.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $t(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P),L(M));let nt=M.source,tt=l.get(nt);tt===void 0&&(tt={},l.set(nt,tt));let ot=Y(M);if(ot!==A.__cacheKey){tt[ot]===void 0&&(tt[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),tt[ot].usedTimes++;let gt=tt[A.__cacheKey];gt!==void 0&&(tt[A.__cacheKey].usedTimes--,gt.usedTimes===0&&H(M)),A.__cacheKey=ot,A.__webglTexture=tt[ot].texture}return G}function et(A,M,G){return Math.floor(Math.floor(A/G)/M)}function ht(A,M,G,nt){let ot=A.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,nt,M.data);else{ot.sort((D,$)=>D.start-$.start);let gt=0;for(let D=1;D<ot.length;D++){let $=ot[gt],q=ot[D],dt=$.start+$.count,rt=et(q.start,M.width,4),lt=et($.start,M.width,4);q.start<=dt+1&&rt===lt&&et(q.start+q.count-1,M.width,4)===rt?$.count=Math.max($.count,q.start+q.count-$.start):(++gt,ot[gt]=q)}ot.length=gt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let D=0,$=ot.length;D<$;D++){let q=ot[D],dt=Math.floor(q.start/4),rt=Math.ceil(q.count/4),lt=dt%M.width,Dt=Math.floor(dt/M.width),Kt=rt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,lt,Dt,Kt,it,G,nt,M.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function at(A,M,G){let nt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=i.TEXTURE_3D);let tt=$t(A,M),ot=M.source;e.bindTexture(nt,A.__webglTexture,i.TEXTURE0+G);let gt=n.get(ot);if(ot.version!==gt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let it=oe.getPrimaries(oe.workingColorSpace),Bt=M.colorSpace===jn?null:oe.getPrimaries(M.colorSpace),Zt=M.colorSpace===jn||it===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let J=v(M.image,!1,s.maxTextureSize);J=Ht(M,J);let ut=r.convert(M.format,M.colorSpace),D=r.convert(M.type),$=w(M.internalFormat,ut,D,M.normalized,M.colorSpace,M.isVideoTexture);Gt(nt,M);let q,dt=M.mipmaps,rt=M.isVideoTexture!==!0,lt=gt.__version===void 0||tt===!0,Dt=ot.dataReady,Kt=S(M,J);if(M.isDepthTexture)$=_(M.format===Qn,M.type),lt&&(rt?e.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ut,D,null));else if(M.isDataTexture)if(dt.length>0){rt&&lt&&e.texStorage2D(i.TEXTURE_2D,Kt,$,dt[0].width,dt[0].height);for(let it=0,Bt=dt.length;it<Bt;it++)q=dt[it],rt?Dt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ut,D,q.data):e.texImage2D(i.TEXTURE_2D,it,$,q.width,q.height,0,ut,D,q.data);M.generateMipmaps=!1}else rt?(lt&&e.texStorage2D(i.TEXTURE_2D,Kt,$,J.width,J.height),Dt&&ht(M,J,ut,D)):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ut,D,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){rt&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,$,dt[0].width,dt[0].height,J.depth);for(let it=0,Bt=dt.length;it<Bt;it++)if(q=dt[it],M.format!==Tn)if(ut!==null)if(rt){if(Dt)if(M.layerUpdates.size>0){let Zt=bc(q.width,q.height,M.format,M.type);for(let vt of M.layerUpdates){let ge=q.data.subarray(vt*Zt/q.data.BYTES_PER_ELEMENT,(vt+1)*Zt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,vt,q.width,q.height,1,ut,ge)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ut,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,$,q.width,q.height,J.depth,0,q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ut,D,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,$,q.width,q.height,J.depth,0,ut,D,q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{rt&&lt&&e.texStorage2D(i.TEXTURE_2D,Kt,$,dt[0].width,dt[0].height);for(let it=0,Bt=dt.length;it<Bt;it++)q=dt[it],M.format!==Tn?ut!==null?rt?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ut,q.data):e.compressedTexImage2D(i.TEXTURE_2D,it,$,q.width,q.height,0,q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Dt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,ut,D,q.data):e.texImage2D(i.TEXTURE_2D,it,$,q.width,q.height,0,ut,D,q.data)}else if(M.isDataArrayTexture)if(rt){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,$,J.width,J.height,J.depth),Dt)if(M.layerUpdates.size>0){let it=bc(J.width,J.height,M.format,M.type);for(let Bt of M.layerUpdates){let Zt=J.data.subarray(Bt*it/J.data.BYTES_PER_ELEMENT,(Bt+1)*it/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Bt,J.width,J.height,1,ut,D,Zt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,D,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,ut,D,J.data);else if(M.isData3DTexture)rt?(lt&&e.texStorage3D(i.TEXTURE_3D,Kt,$,J.width,J.height,J.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,D,J.data)):e.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,ut,D,J.data);else if(M.isFramebufferTexture){if(lt)if(rt)e.texStorage2D(i.TEXTURE_2D,Kt,$,J.width,J.height);else{let it=J.width,Bt=J.height;for(let Zt=0;Zt<Kt;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,$,it,Bt,0,ut,D,null),it>>=1,Bt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),J.parentNode!==it){it.appendChild(J),p.add(M),it.onpaint=Bt=>{let Zt=Bt.changedElements;for(let vt of p)Zt.includes(vt.image)&&(vt.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Zt=i.RGBA,vt=i.RGBA,ge=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Zt,vt,ge,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(dt.length>0){if(rt&&lt){let it=Wt(dt[0]);e.texStorage2D(i.TEXTURE_2D,Kt,$,it.width,it.height)}for(let it=0,Bt=dt.length;it<Bt;it++)q=dt[it],rt?Dt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ut,D,q):e.texImage2D(i.TEXTURE_2D,it,$,ut,D,q);M.generateMipmaps=!1}else if(rt){if(lt){let it=Wt(J);e.texStorage2D(i.TEXTURE_2D,Kt,$,it.width,it.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,D,J)}else e.texImage2D(i.TEXTURE_2D,0,$,ut,D,J);T(M)&&M.mipmapsAutoUpdate===!0&&y(nt),gt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function wt(A,M,G){if(M.image.length!==6)return;let nt=$t(A,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let ot=n.get(tt);if(tt.version!==ot.__version||nt===!0){e.activeTexture(i.TEXTURE0+G);let gt=oe.getPrimaries(oe.workingColorSpace),Z=M.colorSpace===jn?null:oe.getPrimaries(M.colorSpace),J=M.colorSpace===jn||gt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,$=[];for(let vt=0;vt<6;vt++)!ut&&!D?$[vt]=v(M.image[vt],!0,s.maxCubemapSize):$[vt]=D?M.image[vt].image:M.image[vt],$[vt]=Ht(M,$[vt]);let q=$[0],dt=r.convert(M.format,M.colorSpace),rt=r.convert(M.type),lt=w(M.internalFormat,dt,rt,M.normalized,M.colorSpace),Dt=M.isVideoTexture!==!0,Kt=ot.__version===void 0||nt===!0,it=tt.dataReady,Bt=S(M,q);Gt(i.TEXTURE_CUBE_MAP,M);let Zt;if(M.isDepthTexture){if(lt=_(M.format===Qn,M.type),Kt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,lt,q.width,q.height);else for(let vt=0;vt<6;vt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,q.width,q.height,0,dt,rt,null)}else if(ut){Dt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,lt,q.width,q.height);for(let vt=0;vt<6;vt++){Zt=$[vt].mipmaps;for(let ge=0;ge<Zt.length;ge++){let Ue=Zt[ge];M.format!==Tn?dt!==null?Dt?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ge,0,0,Ue.width,Ue.height,dt,Ue.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ge,lt,Ue.width,Ue.height,0,Ue.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ge,0,0,Ue.width,Ue.height,dt,rt,Ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ge,lt,Ue.width,Ue.height,0,dt,rt,Ue.data)}}}else{if(Zt=M.mipmaps,Dt&&Kt){Zt.length>0&&Bt++;let vt=Wt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,lt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(D){Dt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,$[vt].width,$[vt].height,dt,rt,$[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,$[vt].width,$[vt].height,0,dt,rt,$[vt].data);for(let ge=0;ge<Zt.length;ge++){let ni=Zt[ge].image[vt].image;Dt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ge+1,0,0,ni.width,ni.height,dt,rt,ni.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ge+1,lt,ni.width,ni.height,0,dt,rt,ni.data)}}else{Dt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,dt,rt,$[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,dt,rt,$[vt]);for(let ge=0;ge<Zt.length;ge++){let Ue=Zt[ge];Dt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ge+1,0,0,dt,rt,Ue.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ge+1,lt,dt,rt,Ue.image[vt])}}}T(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ot.__version=tt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function yt(A,M,G,nt,tt,ot){let gt=r.convert(G.format,G.colorSpace),Z=r.convert(G.type),J=w(G.internalFormat,gt,Z,G.normalized,G.colorSpace),ut=n.get(M),D=n.get(G);if(D.__renderTarget=M,!ut.__hasExternalTextures){let $=Math.max(1,M.width>>ot),q=Math.max(1,M.height>>ot);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ot,J,$,q,M.depth,0,gt,Z,null):e.texImage2D(tt,ot,J,$,q,0,gt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,tt,D.__webglTexture,0,ye(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,tt,D.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(A,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let nt=M.depthTexture,tt=nt&&nt.isDepthTexture?nt.type:null,ot=_(M.stencilBuffer,tt),gt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(M),ot,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(M),ot,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ot,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,A)}else{let nt=M.textures;for(let tt=0;tt<nt.length;tt++){let ot=nt[tt],gt=r.convert(ot.format,ot.colorSpace),Z=r.convert(ot.type),J=w(ot.internalFormat,gt,Z,ot.normalized,ot.colorSpace);mt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(M),J,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(M),J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(A,M,G){let nt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(M.depthTexture);tt.__renderTarget=M;let ot=nt?M.depthTexture.image[0]:M.depthTexture.image;(!tt.__webglTexture||ot.width!==M.width||ot.height!==M.height)&&(ot.width=M.width,ot.height=M.height,M.depthTexture.needsUpdate=!0),nt?xt(M.depthTexture,0):pt(M.depthTexture,0);let gt=tt.__webglTexture,Z=ye(M),J=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ut=M.depthTexture.format===Qn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===qn)mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,J,gt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ut,J,gt,0);else if(M.depthTexture.format===Qn)mt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,J,gt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ut,J,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(A){let M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let nt=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),nt){let tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,nt.removeEventListener("dispose",tt)};nt.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=nt}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let nt=0;nt<6;nt++)Lt(M.__webglFramebuffer[nt],A,nt);else A.texture.mipmaps.length>0?Lt(M.__webglFramebuffer[0],A,0):Lt(M.__webglFramebuffer,A,0);else if(G){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]===void 0)M.__webglDepthbuffer[nt]=i.createRenderbuffer(),Yt(M.__webglDepthbuffer[nt],A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ot)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Yt(M.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,M,G){let nt=n.get(A);M!==void 0&&yt(nt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ne(A)}function de(A){let M=A.texture,G=n.get(A),nt=n.get(M);A.addEventListener("dispose",O),L(A);let tt=A.textures,ot=A.isWebGLCubeRenderTarget===!0,gt=tt.length>1;if(gt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=M.version,a.memory.textures++),ot){G.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0){G.__webglFramebuffer[Z]=[];for(let J=0;J<M.mipmaps.length;J++)G.__webglFramebuffer[Z][J]=i.createFramebuffer()}else G.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)G.__webglFramebuffer[Z]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(gt)for(let Z=0,J=tt.length;Z<J;Z++){let ut=n.get(tt[Z]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&mt(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Z=0;Z<tt.length;Z++){let J=tt[Z];G.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Z]);let ut=r.convert(J.format,J.colorSpace),D=r.convert(J.type),$=w(J.internalFormat,ut,D,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),q=ye(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,$,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,G.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)yt(G.__webglFramebuffer[Z][J],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else yt(G.__webglFramebuffer[Z],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);T(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let Z=0,J=tt.length;Z<J;Z++){let ut=tt[Z],D=n.get(ut),$=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,D.__webglTexture),Gt($,ut),yt(G.__webglFramebuffer,A,ut,i.COLOR_ATTACHMENT0+Z,$,0),T(ut)&&y($)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,nt.__webglTexture),Gt(Z,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)yt(G.__webglFramebuffer[J],A,M,i.COLOR_ATTACHMENT0,Z,J);else yt(G.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,Z,0);T(M)?y(Z):M.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ne(A)}function F(A){let M=A.textures;for(let G=0,nt=M.length;G<nt;G++){let tt=M[G];if(T(tt)&&tt.mipmapsAutoUpdate===!0){let ot=E(A),gt=n.get(tt).__webglTexture;e.bindTexture(ot,gt),y(ot),e.unbindTexture()}}}let Ie=[];function jt(A){if(A.samples>0){if(mt(A)===!1){let M=A.textures,G=A.width,nt=A.height,tt=i.COLOR_BUFFER_BIT,ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(A),Z=M.length>1;if(Z)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);let D=n.get(M[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,G,nt,0,0,G,nt,tt,i.NEAREST),c===!0&&(Ie.length=0,Ie.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ie.push(ot),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);let D=n.get(M[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ye(A){return Math.min(s.maxSamples,A.samples)}function mt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(A){let M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Ht(A,M){let G=A.colorSpace,nt=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Qs&&G!==jn&&(oe.getTransfer(G)===me?(nt!==Tn||tt!==sn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",G)),M}function Wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=Ft,this.resetTextureUnits=K,this.getTextureUnits=j,this.setTextureUnits=bt,this.setTexture2D=pt,this.setTexture2DArray=Et,this.setTexture3D=Nt,this.setTextureCube=xt,this.rebindTextures=se,this.setupRenderTarget=de,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=mt,this.dispose=B}function p_(i,t){function e(n,s=jn){let r,a=oe.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lc)return i.BYTE;if(n===cc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===dc)return i.ALPHA;if(n===fc)return i.RGB;if(n===Tn)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Qn)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===yo)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Nr||n===Ur)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===bo||n===Eo||n===To)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Ao||n===Ro||n===Co||n===Io||n===Fr||n===Po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Ao)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Co)return r.COMPRESSED_R11_EAC;if(n===Io)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fr)return r.COMPRESSED_RG11_EAC;if(n===Po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===Ho||n===zo||n===Go||n===ko||n===Vo||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Yo||n===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qo)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===$o||n===Or||n===Ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Nn({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends Cn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,p=null,d=null,l=null,g=null,x=typeof XRWebGLBinding<"u",f=new Oc,m={},v=e.getContextAttributes(),T=null,y=null,E=[],w=[],_=new st,S=null,L=null,C=new Xe;C.viewport=new Ee;let P=new Xe;P.viewport=new Ee;let O=[C,P],N=new lo,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let pt=E[Y];return pt===void 0&&(pt=new _s,E[Y]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Y){let pt=E[Y];return pt===void 0&&(pt=new _s,E[Y]=pt),pt.getGripSpace()},this.getHand=function(Y){let pt=E[Y];return pt===void 0&&(pt=new _s,E[Y]=pt),pt.getHandSpace()};function W(Y){let pt=w.indexOf(Y.inputSource);if(pt===-1)return;let Et=E[pt];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,h||a),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<E.length;Y++){let pt=w[Y];pt!==null&&(w[Y]=null,E[Y].disconnect(pt))}R=null,B=null,f.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(T),l=null,d=null,p=null,s=null,y=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),L!==null){let Y=L.camera;Y.fov=L.fov,Y.zoom=L.zoom,Y.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:l},this.getBinding=function(){return p===null&&x&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Nt=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=v.stencil?Qn:qn,Nt=v.stencil?Vi:bn);let Ut={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new tn(d.textureWidth,d.textureHeight,{format:Tn,type:sn,depthTexture:new Zn(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Et={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};l=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:l}),t.setPixelRatio(1),t.setSize(l.framebufferWidth,l.framebufferHeight,!1),y=new tn(l.framebufferWidth,l.framebufferHeight,{format:Tn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function Q(Y){for(let pt=0;pt<Y.removed.length;pt++){let Et=Y.removed[pt],Nt=w.indexOf(Et);Nt>=0&&(w[Nt]=null,E[Nt].disconnect(Et))}for(let pt=0;pt<Y.added.length;pt++){let Et=Y.added[pt],Nt=w.indexOf(Et);if(Nt===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=w.length){w.push(Et),Nt=Ut;break}else if(w[Ut]===null){w[Ut]=Et,Nt=Ut;break}if(Nt===-1)break}let xt=E[Nt];xt&&xt.connect(Et)}}function k(Y,pt){pt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(pt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let pt=Y.near,Et=Y.far;f.texture!==null&&(f.depthNear>0&&(pt=f.depthNear),f.depthFar>0&&(Et=f.depthFar)),N.near=P.near=C.near=pt,N.far=P.far=C.far=Et,(R!==N.near||B!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,B=N.far),N.layers.mask=Y.layers.mask|6,C.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let Nt=Y.parent,xt=N.cameras;k(N,Nt);for(let Ut=0;Ut<xt.length;Ut++)k(xt[Ut],Nt);N.projectionMatrix.copy(C.projectionMatrix),N.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&Y.isPerspectiveCamera&&(L={camera:Y,fov:Y.fov,zoom:Y.zoom}),K(Y,N,Nt)};function K(Y,pt,Et){Et===null?Y.matrix.copy(pt.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(pt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(pt.projectionMatrix),Y.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Fa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&l===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=Y)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(N)},this.getCameraTexture=function(Y){return m[Y]};let j=null;function bt(Y,pt){if(u=pt.getViewerPose(h||a),g=pt,u!==null){let Et=u.views;l!==null&&(t.setRenderTargetFramebuffer(y,l.framebuffer),t.setRenderTarget(y));let Nt=!1;Et.length!==N.cameras.length&&(N.cameras.length=0,Nt=!0);for(let Tt=0;Tt<Et.length;Tt++){let Gt=Et[Tt],$t=null;if(l!==null)$t=l.getViewport(Gt);else{let ht=p.getViewSubImage(d,Gt);$t=ht.viewport,Tt===0&&(t.setRenderTargetTextures(y,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(y))}let et=O[Tt];et===void 0&&(et=new Xe,et.layers.enable(Tt),et.viewport=new Ee,O[Tt]=et),et.matrix.fromArray(Gt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Gt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set($t.x,$t.y,$t.width,$t.height),Tt===0&&(N.matrix.copy(et.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Nt===!0&&N.cameras.push(et)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){p=n.getBinding();let Tt=p.getDepthInformation(Et[0]);Tt&&Tt.isValid&&Tt.texture&&f.init(Tt,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),p=n.getBinding();for(let Tt=0;Tt<Et.length;Tt++){let Gt=Et[Tt].camera;if(Gt){let $t=m[Gt];$t||($t=new dr,m[Gt]=$t);let et=p.getCameraImage(Gt);$t.sourceTexture=et}}}}for(let Et=0;Et<E.length;Et++){let Nt=w[Et],xt=E[Et];Nt!==null&&xt!==void 0&&xt.update(Nt,pt,h||a)}j&&j(Y,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),g=null}let Ft=new td;Ft.setAnimationLoop(bt),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}},__=new pe,hd=new Xt;hd.set(-1,0,0,0,1,0,0,0,1);function x_(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,vc(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,v,T,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(f,m):m.isMeshLambertMaterial?(r(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(f,m),p(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&l(f,m,y)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),x(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?c(f,m,v,T):m.isSpriteMaterial?h(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===ze&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===ze&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let v=t.get(m),T=v.envMap,y=v.envMapRotation;T&&(f.envMap.value=T,f.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(hd),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function c(f,m,v,T){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*v,f.scale.value=T*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function p(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function l(f,m,v){f.ior.value=m.ior,m.diffuseRoughness>0&&(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function x(f,m){let v=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y_(i,t,e,n){let s={},r={};function a(v,T){let y=T.program;n.uniformBlockBinding(v,y,s[v.id])}function o(v,T){let y=s[v.id];y===void 0&&(g(v),y=c(v),s[v.id]=y,v.addEventListener("dispose",f));let E=T.program;n.updateUBOMapping(v,E);let w=t.render.frame;r[v.id]!==w&&(h(v),r[v.id]=w)}function c(v){let T=i.createBuffer(),y=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function h(v){let T=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,_=y.length;w<_;w++){let S=y[w];if(Array.isArray(S))for(let L=0,C=S.length;L<C;L++)u(S[L],w,L,E);else u(S,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,T,y,E){if(d(v,T,y,E)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){let C=_[L],P=x(C,!0);p(C,v.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,v.__data)}}function p(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function d(v,T,y,E){let w=v.value,_=T+"_"+y;if(Array.isArray(w)){E[_]===void 0&&(E[_]=[]);let S=E[_],L=!1;for(let C=0;C<w.length;C++)l(w[C],S,C)===!0&&(L=!0);return L}return l(w,E,_)}function l(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let E=T[y];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function g(v){let T=v.uniforms,y=0,E=16;for(let _=0,S=T.length;_<S;_++){let L=Array.isArray(T[_])?T[_]:[T[_]];for(let C=0,P=L.length;C<P;C++){let O=L[C],N=Array.isArray(O.value)?O.value:[O.value],R=Array.isArray(T[_])||Array.isArray(O.value),B=y;for(let H=0,Q=N.length;H<Q;H++){let k=N[H],K=x(k,R),j=y%E,bt=j%K.boundary,Ft=j+bt;y+=bt,Ft!==0&&E-Ft<K.storage&&(y+=E-Ft),H===0&&(B=y),y+=K.storage}let W=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new W((y-B)/Float32Array.BYTES_PER_ELEMENT),O.__offset=B}}let w=y%E;return w>0&&(y+=E-w),v.__size=y,v.__cache={},this}function x(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function f(v){let T=v.target;T.removeEventListener("dispose",f),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var v_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function M_(){return Un===null&&(Un=new lr(v_,16,16,xi,En),Un.name="DFG_LUT",Un.minFilter=Qe,Un.magFilter=Qe,Un.wrapS=An,Un.wrapT=An,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var el=class{constructor(t={}){let{canvas:e=_u(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:l=sn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=l,f=new Set([Mo,vo,yo]),m=new Set([sn,bn,Cs,Vi,go,_o]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,w=null,_=[],S=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,O=null,N=null,R=null,B=null;this._outputColorSpace=Ke;let W=0,H=0,Q=null,k=-1,K=null,j=new Ee,bt=new Ee,Ft=null,Y=new Ot(0),pt=0,Et=e.width,Nt=e.height,xt=1,Ut=null,Vt=null,Tt=new Ee(0,0,Et,Nt),Gt=new Ee(0,0,Et,Nt),$t=!1,et=new ci,ht=new za,at=!1,wt=!1,yt=new pe,Yt=new I,Lt=new Ee,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function de(){return Q===null?xt:1}let F=n;function Ie(b,U){return e.getContext(b,U)}let jt,ye,mt,Re,Ht,Wt,A,M,G,nt,tt,ot,gt,Z,J,ut,D,$,q,dt,rt,lt,Dt;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),F===null){let U="webgl2";if(F=Ie(U,b),F===null)throw Ie(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(b){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),kt("WebGLRenderer: "+b.message),b}function Kt(){jt=new L0(F),jt.init(),rt=new p_(F,jt),ye=new M0(F,jt,t,rt),mt=new d_(F,jt),ye.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),N=F.createFramebuffer(),R=F.createFramebuffer(),B=F.createFramebuffer(),Re=new U0(F),Ht=new Qg,Wt=new f_(F,jt,mt,Ht,ye,rt,Re),A=new P0(C),M=new Of(F),lt=new y0(F,M),G=new D0(F,M,Re,lt),nt=new O0(F,G,M,lt,Re),$=new F0(F,ye,Wt),J=new S0(Ht),tt=new Kg(C,A,jt,ye,lt,J),ot=new x_(C,Ht),gt=new t_,Z=new a_(jt),D=new x0(C,A,mt,nt,g,c),ut=new u_(C,nt,ye),Dt=new y_(F,Re,ye,mt),q=new v0(F,jt,Re),dt=new N0(F,jt,Re),Re.programs=tt.programs,C.capabilities=ye,C.extensions=jt,C.properties=Ht,C.renderLists=gt,C.shadowMap=ut,C.state=mt,C.info=Re}x!==sn&&(L=new H0(x,e.width,e.height,o,s,r));let it=new Bc(C,F);this.xr=it,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=jt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=jt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(b){b!==void 0&&(xt=b,this.setSize(Et,Nt,!1))},this.getSize=function(b){return b.set(Et,Nt)},this.setSize=function(b,U,X=!0){if(it.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=b,Nt=U,e.width=Math.floor(b*xt),e.height=Math.floor(U*xt),X===!0&&(e.style.width=b+"px",e.style.height=U+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Et*xt,Nt*xt).floor()},this.setDrawingBufferSize=function(b,U,X){Et=b,Nt=U,xt=X,e.width=Math.floor(b*X),e.height=Math.floor(U*X),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===sn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(j)},this.getViewport=function(b){return b.copy(Tt)},this.setViewport=function(b,U,X,z){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,U,X,z),mt.viewport(j.copy(Tt).multiplyScalar(de()).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,U,X,z){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,U,X,z),mt.scissor(bt.copy(Gt).multiplyScalar(de()).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(b){mt.setScissorTest($t=b)},this.setOpaqueSort=function(b){Ut=b},this.setTransparentSort=function(b){Vt=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,X=!0){let z=0;if(b){let V=!1;if(Q!==null){let _t=Q.texture.format;V=f.has(_t)}if(V){let _t=Q.texture.type,At=m.has(_t),ft=D.getClearColor(),St=D.getClearAlpha(),Pt=ft.r,qt=ft.g,re=ft.b;At?(v[0]=Pt,v[1]=qt,v[2]=re,v[3]=St,F.clearBufferuiv(F.COLOR,0,v)):(T[0]=Pt,T[1]=qt,T[2]=re,T[3]=St,F.clearBufferiv(F.COLOR,0,T))}else z|=F.COLOR_BUFFER_BIT}U&&(z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),D.dispose(),gt.dispose(),Z.dispose(),Wt.dispose(),Ht.dispose(),A.dispose(),nt.dispose(),G.dispose(),lt.dispose(),Dt.dispose(),tt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Vc),it.removeEventListener("sessionend",Wc),Si.stop()};function Bt(b){b.preventDefault(),er("WebGLRenderer: Context Lost."),P=!0}function Zt(){er("WebGLRenderer: Context Restored."),P=!1;let b=Re.autoReset,U=ut.enabled,X=ut.autoUpdate,z=ut.needsUpdate,V=ut.type;Kt(),Re.autoReset=b,ut.enabled=U,ut.autoUpdate=X,ut.needsUpdate=z,ut.type=V}function vt(b){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ge(b){let U=b.target;U.removeEventListener("dispose",ge),Ue(U)}function Ue(b){ni(b),Ht.remove(b)}function ni(b){let U=Ht.get(b).programs;U!==void 0&&(U.forEach(function(X){tt.releaseProgram(X)}),b.isShaderMaterial&&tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,X,z,V,_t){U===null&&(U=ne);let At=V.isMesh&&V.matrixWorld.determinantAffine()<0,ft=yd(b,U,X,z,V);mt.setMaterial(z,At);let St=X.index,Pt=1;if(z.wireframe===!0){if(St=G.getWireframeAttribute(X),St===void 0)return;Pt=2}let qt=X.drawRange,re=X.attributes.position,Rt=qt.start*Pt,ae=(qt.start+qt.count)*Pt;_t!==null&&(Rt=Math.max(Rt,_t.start*Pt),ae=Math.min(ae,(_t.start+_t.count)*Pt)),St!==null?(Rt=Math.max(Rt,0),ae=Math.min(ae,St.count)):re!=null&&(Rt=Math.max(Rt,0),ae=Math.min(ae,re.count));let Pe=ae-Rt;if(Pe<0||Pe===1/0)return;lt.setup(V,z,ft,X,St);let Me,ve=q;if(St!==null&&(Me=M.get(St),ve=dt,ve.setIndex(Me)),V.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*de()),ve.setMode(F.LINES)):ve.setMode(F.TRIANGLES);else if(V.isLine){let Ge=z.linewidth;Ge===void 0&&(Ge=1),mt.setLineWidth(Ge*de()),V.isLineSegments?ve.setMode(F.LINES):V.isLineLoop?ve.setMode(F.LINE_LOOP):ve.setMode(F.LINE_STRIP)}else V.isPoints?ve.setMode(F.POINTS):V.isSprite&&ve.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ve.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ge=V._multiDrawStarts,Ct=V._multiDrawCounts,Je=V._multiDrawCount,fe=St?M.get(St).bytesPerElement:1,bi=Ht.get(z).currentProgram.getUniforms();for(let ke=0;ke<Je;ke++)bi.setValue(F,"_gl_DrawID",ke),ve.render(Ge[ke]/fe,Ct[ke])}else if(V.isInstancedMesh)ve.renderInstances(Rt,Pe,V.count);else if(X.isInstancedBufferGeometry){let Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ct=Math.min(X.instanceCount,Ge);ve.renderInstances(Rt,Pe,Ct)}else ve.render(Rt,Pe)};function kc(b,U,X,z){O!==null&&b.isNodeMaterial&&O.setObject(z,b),at===!0&&J.setState(b,X,!1),b.transparent===!0&&b.side===nn&&b.forceSinglePass===!1?(b.side=ze,b.needsUpdate=!0,Os(b,U,z),b.side=_i,b.needsUpdate=!0,Os(b,U,z),b.side=nn):Os(b,U,z)}this.compile=function(b,U,X=null){X===null&&(X=b),O!==null&&O.renderStart(b,U,X),w=Z.get(X),w.init(U),S.push(w),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),b!==X&&b.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),wt=this.localClippingEnabled,at=J.init(this.clippingPlanes,wt),at===!0&&J.setGlobalState(this.clippingPlanes,U),O!==null&&ut.render(w.state.shadowsArray,X,U);let z=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let _t=V.material;if(_t)if(Array.isArray(_t))for(let At=0;At<_t.length;At++){let ft=_t[At];kc(ft,X,U,V),z.add(ft)}else kc(_t,X,U,V),z.add(_t)}),w=S.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(b,U,X=null){let z=this.compile(b,U,X);return new Promise(V=>{function _t(){if(z.forEach(function(At){let St=Ht.get(At).currentProgram;(St===void 0||St.isReady())&&z.delete(At)}),z.size===0){V(b);return}setTimeout(_t,10)}jt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ll=null;function _d(b){ll&&ll(b)}function Vc(){Si.stop()}function Wc(){Si.start()}let Si=new td;Si.setAnimationLoop(_d),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){ll=b,it.setAnimationLoop(b),b===null?Si.stop():Si.start()},it.addEventListener("sessionstart",Vc),it.addEventListener("sessionend",Wc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(b,U);let X=it.enabled===!0&&it.isPresenting===!0,z=L!==null&&(Q===null||X)&&L.begin(C,Q);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,Q),w=Z.get(b,S.length),w.init(U),w.state.textureUnits=Wt.getTextureUnits(),S.push(w),yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ht.setFromArrayCamera(U):et.setFromProjectionMatrix(yt,un,U.reversedDepth),wt=this.localClippingEnabled,at=J.init(this.clippingPlanes,wt),E=gt.get(b,_.length),E.init(),_.push(E),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let At=C.xr.getDepthSensingMesh();At!==null&&cl(At,U,-1/0,C.sortObjects)}cl(b,U,0,C.sortObjects),E.finish(),O!==null&&O.updateLights(w.state.lightsArray),C.sortObjects===!0&&E.sort(Ut,Vt),se=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,se&&D.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),at===!0&&J.beginShadows();let V=w.state.shadowsArray;if(ut.render(V,b,U),at===!0&&J.endShadows(),(z&&L.hasRenderPass())===!1){let At=E.opaque,ft=E.transmissive;if(w.setupLights(),U.isArrayCamera){let St=U.cameras;if(ft.length>0)for(let Pt=0,qt=St.length;Pt<qt;Pt++){let re=St[Pt];qc(At,ft,b,re)}se&&D.render(b);for(let Pt=0,qt=St.length;Pt<qt;Pt++){let re=St[Pt];Xc(E,b,re,re.viewport)}}else ft.length>0&&qc(At,ft,b,U),se&&D.render(b),Xc(E,b,U)}Q!==null&&H===0&&(Wt.updateMultisampleRenderTarget(Q),Wt.updateRenderTargetMipmap(Q)),z&&L.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),lt.resetDefaultState(),k=-1,K=null,S.pop(),S.length>0?(w=S[S.length-1],Wt.setTextureUnits(w.state.textureUnits),at===!0&&J.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,O!==null&&O.renderEnd()};function cl(b,U,X,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let At=U.isArrayCamera?ht:et;if(!b.frustumCulled||b.intersectsFrustum(At)){z&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(yt);let ft=nt.update(b),St=b.material;St.visible&&E.push(b,ft,St,X,Lt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let At=U.isArrayCamera?ht:et;if(!b.frustumCulled||b.intersectsFrustum(At)){let ft=nt.update(b),St=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(yt)),Array.isArray(St)){let Pt=ft.groups;for(let qt=0,re=Pt.length;qt<re;qt++){let Rt=Pt[qt],ae=St[Rt.materialIndex];ae&&ae.visible&&E.push(b,ft,ae,X,Lt.z,Rt,U)}}else St.visible&&E.push(b,ft,St,X,Lt.z,null,U)}}}let _t=b.children;for(let At=0,ft=_t.length;At<ft;At++)cl(_t[At],U,X,z)}function Xc(b,U,X,z){let{opaque:V,transmissive:_t,transparent:At}=b;w.setupLightsView(X),at===!0&&J.setGlobalState(C.clippingPlanes,X),z&&mt.viewport(j.copy(z)),V.length>0&&Yr(V,U,X),_t.length>0&&Yr(_t,U,X),At.length>0&&Yr(At,U,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function qc(b,U,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Rt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new tn(1,1,{generateMipmaps:!0,type:Rt?En:sn,minFilter:Kn,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let _t=w.state.transmissionRenderTarget[z.id],At=z.viewport||j;_t.setSize(At.z*C.transmissionResolutionScale,At.w*C.transmissionResolutionScale);let ft=C.getRenderTarget(),St=C.getActiveCubeFace(),Pt=C.getActiveMipmapLevel();C.setRenderTarget(_t),C.getClearColor(Y),pt=C.getClearAlpha(),pt<1&&C.setClearColor(16777215,.5),C.clear(),se&&D.render(X);let qt=C.toneMapping;C.toneMapping=fn;let re=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),at===!0&&J.setGlobalState(C.clippingPlanes,z),Yr(b,X,z),Wt.updateMultisampleRenderTarget(_t),Wt.updateRenderTargetMipmap(_t),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ae=0,Pe=U.length;ae<Pe;ae++){let Me=U[ae],{object:ve,geometry:Ge,material:Ct,group:Je}=Me;if(Ct.side===nn&&ve.layers.test(z.layers)){let fe=Ct.side;Ct.side=ze,Ct.needsUpdate=!0,Yc(ve,X,z,Ge,Ct,Je),Ct.side=fe,Ct.needsUpdate=!0,Rt=!0}}Rt===!0&&(Wt.updateMultisampleRenderTarget(_t),Wt.updateRenderTargetMipmap(_t))}C.setRenderTarget(ft,St,Pt),C.setClearColor(Y,pt),re!==void 0&&(z.viewport=re),C.toneMapping=qt}function Yr(b,U,X){let z=U.isScene===!0?U.overrideMaterial:null;for(let V=0,_t=b.length;V<_t;V++){let At=b[V],{object:ft,geometry:St,group:Pt}=At,qt=At.material;qt.allowOverride===!0&&z!==null&&(qt=z),ft.layers.test(X.layers)&&Yc(ft,U,X,St,qt,Pt)}}function Yc(b,U,X,z,V,_t){O!==null&&V.isNodeMaterial&&O.setObject(b,V),b.onBeforeRender(C,U,X,z,V,_t),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(C,U,X,z,b,_t),V.transparent===!0&&V.side===nn&&V.forceSinglePass===!1?(V.side=ze,V.needsUpdate=!0,C.renderBufferDirect(X,U,z,V,b,_t),V.side=_i,V.needsUpdate=!0,C.renderBufferDirect(X,U,z,V,b,_t),V.side=nn):C.renderBufferDirect(X,U,z,V,b,_t),b.onAfterRender(C,U,X,z,V,_t)}function Zc(b){let U=0;for(let X of b)X.texture!==null&&U++;return U}function Os(b,U,X){U.isScene!==!0&&(U=ne);let z=Ht.get(b),V=w.state.lights,_t=w.state.shadowsArray,At=V.state.version,ft=tt.getParameters(b,V.state,_t,U,X,w.state.lightProbeGridArray),St=tt.getProgramCacheKey(ft),Pt=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let qt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=A.get(b.envMap||z.environment,qt),z.envMapRotation=z.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Pt===void 0&&(b.addEventListener("dispose",ge),Pt=new Map,z.programs=Pt,z.programVariants=new Map);let re=Pt.get(St);if(re!==void 0){if(z.currentProgram===re&&z.lightsStateVersion===At)return $c(b,ft),re}else ft.uniforms=tt.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,X,ft),b.onBeforeCompile(ft,C),re=tt.acquireProgram(ft,St),Pt.set(St,re),z.uniforms=ft.uniforms;let Rt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=J.uniform),$c(b,ft),z.needsLights=Md(b),z.lightsStateVersion=At,z.needsLights&&(Rt.ambientLightColor.value=V.state.ambient,Rt.lightProbe.value=V.state.probe,Rt.sunLights.value=V.state.sun,Rt.sunLightShadows.value=V.state.sunShadow,Rt.directionalLights.value=V.state.directional,Rt.directionalLightShadows.value=V.state.directionalShadow,Rt.spotLights.value=V.state.spot,Rt.spotLightShadows.value=V.state.spotShadow,Rt.rectAreaLights.value=V.state.rectArea,Rt.ltc_1.value=V.state.rectAreaLTC1,Rt.ltc_2.value=V.state.rectAreaLTC2,Rt.pointLights.value=V.state.point,Rt.pointLightShadows.value=V.state.pointShadow,Rt.hemisphereLights.value=V.state.hemi,Rt.sunShadowMatrix.value=V.state.sunShadowMatrix,Rt.sunShadowCascade.value=V.state.sunShadowCascade,Rt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Rt.spotLightMatrix.value=V.state.spotLightMatrix,Rt.spotLightMap.value=V.state.spotLightMap,Rt.pointShadowMatrix.value=V.state.pointShadowMatrix),z.numLightProbeGrids=Zc(w.state.lightProbeGridArray),z.currentProgram=re,z.uniformsList=null,re}function xd(b,U,X,z,V){let _t=Ht.get(b),At=_t.currentProgram.id+","+z+","+V,ft=_t.programVariants.get(At);return ft===void 0?(ft=Os(b,U,X),_t.programVariants.set(At,ft)):(_t.currentProgram=ft,_t.uniformsList=null,_t.outputColorSpace=z,_t.toneMapping=V),ft}function Jc(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Is.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function $c(b,U){let X=Ht.get(b);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function yd(b,U,X,z,V){U.isScene!==!0&&(U=ne),Wt.resetTextureUnits();let _t=U.fog,At=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,ft=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:oe.workingColorSpace,St=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Pt=A.get(z.envMap||At,St),qt=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,re=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Rt=!!X.morphAttributes.position,ae=!!X.morphAttributes.normal,Pe=!!X.morphAttributes.color,Me=fn;z.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Me=C.toneMapping);let ve=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ge=ve!==void 0?ve.length:0,Ct=Ht.get(z),Je=w.state.lights;if(at===!0&&(wt===!0||b!==K)){let Te=b===K&&z.id===k;J.setState(z,b,Te)}let fe=!1,bi=!1;z.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==Je.state.version||V.isBatchedMesh&&Ct.batching===!1||!V.isBatchedMesh&&Ct.batching===!0||V.isBatchedMesh&&Ct.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ct.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ct.instancing===!1||!V.isInstancedMesh&&Ct.instancing===!0||V.isSkinnedMesh&&Ct.skinning===!1||!V.isSkinnedMesh&&Ct.skinning===!0||V.isInstancedMesh&&Ct.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ct.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ct.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ct.instancingMorph===!1&&V.morphTexture!==null||Ct.envMap!==Pt||z.fog===!0&&Ct.fog!==_t||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==J.numPlanes||Ct.numIntersection!==J.numIntersection)||Ct.vertexAlphas!==qt||Ct.vertexTangents!==re||Ct.morphTargets!==Rt||Ct.morphNormals!==ae||Ct.morphColors!==Pe||Ct.morphTargetsCount!==Ge||Ct.numLightProbeGrids!==Zc(w.state.lightProbeGridArray)?fe=!0:(Ct.outputColorSpace!==ft||Ct.toneMapping!==Me)&&(bi=!0):(fe=!0,Ct.__version=z.version);let ke=Ct.currentProgram;(fe===!0||bi===!0)&&(ke=bi===!0?xd(z,U,V,ft,Me):Os(z,U,V),O&&z.isNodeMaterial&&O.onUpdateProgram(z,ke,Ct));let Zr=!1,ii=!1,Ei=!1,ue=ke.getUniforms(),He=Ct.uniforms;if(mt.useProgram(ke.program)&&(Zr=!0,ii=!0,Ei=!0),z.id!==k&&(k=z.id,ii=!0),Zr||K!==b){mt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ue.setValue(F,"projectionMatrix",b.projectionMatrix),ue.setValue(F,"viewMatrix",b.matrixWorldInverse);let Fe=ue.map.cameraPosition;Fe!==void 0&&Fe.setValue(F,Yt.setFromMatrixPosition(b.matrixWorld)),ye.logarithmicDepthBuffer&&ue.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,ii=!0,Ei=!0)}if(Ct.needsLights&&(Je.state.sunShadowMap.length>0&&ue.setValue(F,"sunShadowMap",Je.state.sunShadowMap,Wt),Je.state.directionalShadowMap.length>0&&ue.setValue(F,"directionalShadowMap",Je.state.directionalShadowMap,Wt),Je.state.spotShadowMap.length>0&&ue.setValue(F,"spotShadowMap",Je.state.spotShadowMap,Wt),Je.state.pointShadowMap.length>0&&ue.setValue(F,"pointShadowMap",Je.state.pointShadowMap,Wt)),V.isSkinnedMesh){ue.setOptional(F,V,"bindMatrix"),ue.setOptional(F,V,"bindMatrixInverse");let Te=V.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ue.setValue(F,"boneTexture",Te.boneTexture,Wt))}V.isBatchedMesh&&(ue.setOptional(F,V,"batchingTexture"),ue.setValue(F,"batchingTexture",V._matricesTexture,Wt),ue.setOptional(F,V,"batchingIdTexture"),ue.setValue(F,"batchingIdTexture",V._indirectTexture,Wt),ue.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&ue.setValue(F,"batchingColorTexture",V._colorsTexture,Wt));let gn=X.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&$.update(V,X,ke),(ii||Ct.receiveShadow!==V.receiveShadow)&&(Ct.receiveShadow=V.receiveShadow,ue.setValue(F,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(He.envMapIntensity.value=U.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=M_()),ii){if(ue.setValue(F,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&vd(He,Ei),_t&&z.fog===!0&&ot.refreshFogUniforms(He,_t),ot.refreshMaterialUniforms(He,z,xt,Nt,w.state.transmissionRenderTarget[b.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let Te=y,Fe=0;for(let Bn of w.state.lightProbeGridArray)Bn.texture!==null&&(Te.textures[Fe]=Bn.texture,Te.min[Fe]=Bn.boundingBox.min,Te.max[Fe]=Bn.boundingBox.max,Te.resolution[Fe]=Bn.resolution,Fe++);for(let Bn in Te)Te[Bn].length=Fe;He.probesSH.value=Te.textures,He.probesMin.value=Te.min,He.probesMax.value=Te.max,He.probesResolution.value=Te.resolution}Is.upload(F,Jc(Ct),He,Wt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Is.upload(F,Jc(Ct),He,Wt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(F,"center",V.center),ue.setValue(F,"modelViewMatrix",V.modelViewMatrix),ue.setValue(F,"normalMatrix",V.normalMatrix),ue.setValue(F,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let Te=z.uniformsGroups;for(let Fe=0,Bn=Te.length;Fe<Bn;Fe++){let Qc=Te[Fe];Dt.update(Qc,ke),Dt.bind(Qc,ke)}}return ke}function vd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Md(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(b,U,X){let z=Ht.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ht.get(b.texture).__webglTexture=U,Ht.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let X=Ht.get(b);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,X=0){Q=b,W=U,H=X;let z=null,V=!1,_t=!1;if(b){let ft=Ht.get(b);if(ft.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(F.FRAMEBUFFER,ft.__webglFramebuffer),j.copy(b.viewport),bt.copy(b.scissor),Ft=b.scissorTest,mt.viewport(j),mt.scissor(bt),mt.setScissorTest(Ft),k=-1;return}else if(ft.__webglFramebuffer===void 0)Wt.setupRenderTarget(b);else if(ft.__hasExternalTextures)Wt.rebindTextures(b,Ht.get(b.texture).__webglTexture,Ht.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let qt=b.depthTexture;if(ft.__boundDepthTexture!==qt){if(qt!==null&&Ht.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(b)}}let St=b.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(_t=!0);let Pt=Ht.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?z=Pt[U][X]:z=Pt[U],V=!0):b.samples>0&&Wt.useMultisampledRTT(b)===!1?z=Ht.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?z=Pt[X]:z=Pt,j.copy(b.viewport),bt.copy(b.scissor),Ft=b.scissorTest}else j.copy(Tt).multiplyScalar(xt).floor(),bt.copy(Gt).multiplyScalar(xt).floor(),Ft=$t;if(X!==0&&(z=N),mt.bindFramebuffer(F.FRAMEBUFFER,z)&&mt.drawBuffers(b,z),mt.viewport(j),mt.scissor(bt),mt.setScissorTest(Ft),V){let ft=Ht.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,X)}else if(_t){let ft=U;for(let St=0;St<b.textures.length;St++){let Pt=Ht.get(b.textures[St]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+St,Pt.__webglTexture,X,ft)}}else if(b!==null&&X!==0){let ft=Ht.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,X)}k=-1};function Kc(b){let U=Ht.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=ye.textureFormatReadable(b.format),U.__typeReadable=ye.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,X,z,V,_t,At,ft=0){if(!(b&&b.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(St=St[At],Array.isArray(St)&&(St=St[0])),St){mt.bindFramebuffer(F.FRAMEBUFFER,St);try{let Pt=b.textures[ft],qt=Pt.format,re=Pt.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Rt=Kc(Pt);if(Rt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&X>=0&&X<=b.height-V&&F.readPixels(U,X,z,V,rt.convert(qt),rt.convert(re),_t)}finally{let Pt=Q!==null?Ht.get(Q).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(b,U,X,z,V,_t,At,ft=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(St=St[At],Array.isArray(St)&&(St=St[0])),St)if(U>=0&&U<=b.width-z&&X>=0&&X<=b.height-V){mt.bindFramebuffer(F.FRAMEBUFFER,St);let Pt=b.textures[ft],qt=Pt.format,re=Pt.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Rt=Kc(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ae),F.bufferData(F.PIXEL_PACK_BUFFER,_t.byteLength,F.STREAM_READ),F.readPixels(U,X,z,V,rt.convert(qt),rt.convert(re),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Pe=Q!==null?Ht.get(Q).__webglFramebuffer:null;mt.bindFramebuffer(F.FRAMEBUFFER,Pe);let Me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await yu(F,Me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ae),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_t),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ae),F.deleteSync(Me),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,X=0){let z=Math.pow(2,-X),V=Math.floor(b.image.width*z),_t=Math.floor(b.image.height*z),At=U!==null?U.x:0,ft=U!==null?U.y:0;Wt.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,At,ft,V,_t),mt.unbindTexture()},this.copyTextureToTexture=function(b,U,X=null,z=null,V=0,_t=0){let At,ft,St,Pt,qt,re,Rt,ae,Pe,Me=b.isCompressedTexture?b.mipmaps[_t]:b.image;if(X!==null)At=X.max.x-X.min.x,ft=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Pt=X.min.x,qt=X.min.y,re=X.isBox3?X.min.z:0;else{let ue=Math.pow(2,-V);At=Math.floor(Me.width*ue),ft=Math.floor(Me.height*ue),b.isDataArrayTexture?St=Me.depth:b.isData3DTexture?St=Math.floor(Me.depth*ue):St=1,Pt=0,qt=0,re=0}z!==null?(Rt=z.x,ae=z.y,Pe=z.z):(Rt=0,ae=0,Pe=0);let ve=rt.convert(U.format),Ge=rt.convert(U.type),Ct;U.isData3DTexture?(Wt.setTexture3D(U,0),Ct=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Wt.setTexture2DArray(U,0),Ct=F.TEXTURE_2D_ARRAY):(Wt.setTexture2D(U,0),Ct=F.TEXTURE_2D),mt.activeTexture(F.TEXTURE0),mt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),mt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),mt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Je=mt.getParameter(F.UNPACK_ROW_LENGTH),fe=mt.getParameter(F.UNPACK_IMAGE_HEIGHT),bi=mt.getParameter(F.UNPACK_SKIP_PIXELS),ke=mt.getParameter(F.UNPACK_SKIP_ROWS),Zr=mt.getParameter(F.UNPACK_SKIP_IMAGES);mt.pixelStorei(F.UNPACK_ROW_LENGTH,Me.width),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me.height),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),mt.pixelStorei(F.UNPACK_SKIP_ROWS,qt),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,re);let ii=b.isDataArrayTexture||b.isData3DTexture,Ei=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let ue=Ht.get(b),He=Ht.get(U),gn=Ht.get(ue.__renderTarget),Te=Ht.get(He.__renderTarget);mt.bindFramebuffer(F.READ_FRAMEBUFFER,gn.__webglFramebuffer),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Fe=0;Fe<St;Fe++)ii&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(b).__webglTexture,V,re+Fe),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(U).__webglTexture,_t,Pe+Fe)),F.blitFramebuffer(Pt,qt,Pt+At,qt+ft,Rt,ae,Rt+At,ae+ft,F.DEPTH_BUFFER_BIT,F.NEAREST);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||Ht.has(b)){let ue=Ht.get(b),He=Ht.get(U);mt.bindFramebuffer(F.READ_FRAMEBUFFER,R),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let gn=0;gn<St;gn++)ii?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ue.__webglTexture,V,re+gn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ue.__webglTexture,V),Ei?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.__webglTexture,_t,Pe+gn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,He.__webglTexture,_t),V!==0?F.blitFramebuffer(Pt,qt,Pt+At,qt+ft,Rt,ae,Rt+At,ae+ft,F.COLOR_BUFFER_BIT,F.NEAREST):Ei?F.copyTexSubImage3D(Ct,_t,Rt,ae,Pe+gn,Pt,qt,At,ft):F.copyTexSubImage2D(Ct,_t,Rt,ae,Pt,qt,At,ft);mt.bindFramebuffer(F.READ_FRAMEBUFFER,null),mt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ei?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Ct,_t,Rt,ae,Pe,At,ft,St,ve,Ge,Me.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ct,_t,Rt,ae,Pe,At,ft,St,ve,Me.data):F.texSubImage3D(Ct,_t,Rt,ae,Pe,At,ft,St,ve,Ge,Me):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_t,Rt,ae,At,ft,ve,Ge,Me.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_t,Rt,ae,Me.width,Me.height,ve,Me.data):F.texSubImage2D(F.TEXTURE_2D,_t,Rt,ae,At,ft,ve,Ge,Me);mt.pixelStorei(F.UNPACK_ROW_LENGTH,Je),mt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),mt.pixelStorei(F.UNPACK_SKIP_PIXELS,bi),mt.pixelStorei(F.UNPACK_SKIP_ROWS,ke),mt.pixelStorei(F.UNPACK_SKIP_IMAGES,Zr),_t===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Ct),mt.unbindTexture()},this.initRenderTarget=function(b){Ht.get(b).__webglFramebuffer===void 0&&Wt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Wt.setTextureCube(b,0):b.isData3DTexture?Wt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Wt.setTexture2DArray(b,0):Wt.setTexture2D(b,0),mt.unbindTexture()},this.resetState=function(){W=0,H=0,Q=null,mt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var sl=class extends Ii{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new he;t.deleteAttribute("uv");let e=new Ae({side:ze}),n=new Ae,s=new Oi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Mn(t,n,6),o=new Se;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Jt(t,Ds(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let h=new Jt(t,Ds(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);let u=new Jt(t,Ds(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let p=new Jt(t,Ds(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let d=new Jt(t,Ds(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let l=new Jt(t,Ds(100));l.position.set(0,20,0),l.scale.set(1,.1,1),this.add(l)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ds(i){return new Er({color:0,emissive:16777215,emissiveIntensity:i})}function dd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new _e;c.morphTargetsRelative=o;let h=0;for(let u=0;u<i.length;++u){let p=i[u],d=0,l=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(p.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in p.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(p.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(p.morphAttributes[g]),l++}if(l!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(t){let g;if(e)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,g,u),h+=g}}if(e){let u=0,p=[];for(let d=0;d<i.length;++d){let l=i[d].index;for(let g=0;g<l.count;++g)p.push(l.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(p)}for(let u in r){let p=ud(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,p)}for(let u in a){let p=a[u][0].length;if(p!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<p;++d){let l=[];for(let x=0;x<a[u].length;++x)l.push(a[u][x][d]);let g=ud(l);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}}return c}function ud(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Ce(a,e,n),c=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute){let p=c/e;for(let d=0,l=u.count;d<l;d++)for(let g=0;g<e;g++){let x=u.getComponent(d,g);o.setComponent(d+p,g,x)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var le=16744289,fd=16119287,Wr=.62,Hc=[.071,.13,.041],Us=1.85,vi=1.25,Ns=9,rl=8,ei=.86,b_=4,mn=Math.PI/180,Vr=i=>Math.min(1,Math.max(0,i)),al=()=>new Promise(i=>{setTimeout(i,0)});function On(i,t,e){let n=Vr((e-i)/(t-i));return n*n*(3-2*n)}var ti=(i,t,e)=>i+(t-i)*e;function Gc(i){let t=i*9301+49297;return()=>(t=(t*9301+49297)%233280)/233280}function Xi(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,{c:e,g:e.getContext("2d")}}function qi(i){let t=new hr(i);return t.colorSpace=Ke,t.anisotropy=8,t}function pd(i,t){let{c:e,g:n}=Xi(128,128),s=n.createRadialGradient(64,64,0,64,64,64);return s.addColorStop(0,`rgba(${i},${t})`),s.addColorStop(.3,`rgba(${i},${t*.42})`),s.addColorStop(.65,`rgba(${i},${t*.1})`),s.addColorStop(1,`rgba(${i},0)`),n.fillStyle=s,n.fillRect(0,0,128,128),qi(e)}function E_(){let{c:i,g:t}=Xi(64,64);t.fillStyle="#5f5f5f",t.fillRect(0,0,64,64),t.fillStyle="#090909";for(let n=0;n<4;n++)for(let s=0;s<4;s++)t.beginPath(),t.arc(s*16+(n%2?12:4),n*16+8,4.6,0,Math.PI*2),t.fill();let e=qi(i);return e.wrapS=e.wrapT=fs,e}function It(i,t,e,n,s,r,a){i.fillStyle=a,i.beginPath(),i.roundRect(t,e,n,s,Math.min(r,n/2,s/2)),i.fill()}function T_(i,t,e,n){let{c:s,g:r}=Xi(i,t),a=Gc(n),o="#ff7f61",c="#0f0f0f",h="#191919",u="#222222",p="#373737",d="#4f4f4f",l=i/100;r.fillStyle=c,r.fillRect(0,0,i,t);let g=(x,f,m,v,T,y)=>m.forEach((E,w)=>It(r,x,f+w*(v+T),E,v,v/2,y));if(e==="dash"){It(r,0,0,i,6*l,0,h);for(let E=0;E<3;E++)It(r,(2+E*2.2)*l,2.2*l,1.4*l,1.4*l,l,d);It(r,i-14*l,1.8*l,11*l,2.4*l,1.2*l,o),It(r,0,6*l,6.5*l,t,0,"#151515");for(let E=0;E<6;E++)It(r,1.9*l,(9+E*6)*l,2.7*l,2.7*l,.7*l,E===1?o:p);for(let E=0;E<3;E++){let w=(9+E*30)*l;It(r,w,9*l,27.5*l,13*l,1.4*l,h),It(r,w+2*l,11.5*l,(8+a()*8)*l,1.2*l,l,p),It(r,w+2*l,15*l,(10+a()*9)*l,3.4*l,l,E===0?o:"#d4d4d4")}let x=9*l,f=25*l,m=57.5*l,v=t-28*l;It(r,x,f,m,v,1.4*l,h),r.strokeStyle="#2a2a2a",r.lineWidth=Math.max(1,l*.15);for(let E=1;E<5;E++)r.beginPath(),r.moveTo(x+2*l,f+v*E/5),r.lineTo(x+m-2*l,f+v*E/5),r.stroke();let T=[];for(let E=0;E<=12;E++)T.push([x+3*l+(m-6*l)*E/12,f+v*(.78-.5*(E/12)-.16*a())]);let y=r.createLinearGradient(0,f,0,f+v);y.addColorStop(0,"rgba(236,117,90,0.34)"),y.addColorStop(1,"rgba(236,117,90,0)"),r.beginPath(),T.forEach(([E,w],_)=>_?r.lineTo(E,w):r.moveTo(E,w)),r.lineTo(T[12][0],f+v-l),r.lineTo(T[0][0],f+v-l),r.closePath(),r.fillStyle=y,r.fill(),r.beginPath(),T.forEach(([E,w],_)=>_?r.lineTo(E,w):r.moveTo(E,w)),r.strokeStyle=o,r.lineWidth=l*.55,r.lineJoin="round",r.stroke(),It(r,69*l,f,28*l,v,1.4*l,h);for(let E=0;E<7;E++){let w=f+2.5*l+E*((v-4*l)/7);It(r,71*l,w,1.6*l,1.6*l,l,E%3===0?o:d),It(r,74.5*l,w+.2*l,(9+a()*11)*l,1.2*l,l,p)}}else if(e==="chat"){It(r,0,0,27*l,t,0,"#151515"),It(r,3*l,3*l,21*l,3.4*l,1.7*l,u);for(let f=0;f<6;f++){let m=(10+f*8.4)*l;f===1&&It(r,1.5*l,m-1.5*l,24*l,7.4*l,1.4*l,u),r.fillStyle=f===1?o:d,r.beginPath(),r.arc(5.5*l,m+2.2*l,1.9*l,0,Math.PI*2),r.fill(),It(r,9.5*l,m+.6*l,(7+a()*7)*l,1.2*l,l,"#d4d4d4"),It(r,9.5*l,m+3*l,(9+a()*5)*l,l,l,p)}let x=5*l;for(let f=0;f<5;f++){let m=f%2===1,v=(24+a()*22)*l,T=1+Math.floor(a()*3),y=(3.2+T*2.4)*l,E=m?i-v-4*l:31*l;It(r,E,x,v,y,1.8*l,m?o:u);for(let w=0;w<T;w++)It(r,E+2*l,x+2*l+w*2.4*l,(v-4*l)*(w===T-1?.55+a()*.3:1),l,l,m?"#393939":d);if(x+=y+2.2*l,x>t-14*l)break}It(r,31*l,t-8*l,i-35*l,5*l,2.5*l,h),r.fillStyle=o,r.beginPath(),r.arc(i-7*l,t-5.5*l,1.7*l,0,Math.PI*2),r.fill()}else if(e==="doc"){It(r,0,0,i,6*l,0,h);for(let x=0;x<4;x++)It(r,(3+x*9)*l,2.2*l,6.5*l,1.5*l,l,x?p:"#d4d4d4");It(r,5*l,10*l,56*l,t,.8*l,"#d7d7d7"),It(r,10*l,15*l,26*l,2.6*l,l,"#282828");for(let x=0;x<14;x++)It(r,10*l,(22+x*3.1)*l,(x%5===4?24+a()*12:46)*l,1.15*l,l,"#8a8a8a");It(r,66*l,10*l,30*l,t-14*l,1.4*l,h),It(r,69*l,13.5*l,14*l,1.6*l,l,"#d4d4d4");for(let x=0;x<4;x++){let f=(19+x*6)*l;r.strokeStyle=o,r.lineWidth=l*.4,r.beginPath(),r.arc(70.6*l,f+.7*l,1.3*l,0,Math.PI*2),x<3?(r.fillStyle=o,r.fill()):r.stroke(),It(r,74*l,f,(10+a()*9)*l,1.3*l,l,d)}It(r,69*l,t-13*l,24*l,5.6*l,2.8*l,o),It(r,75*l,t-10.9*l,12*l,1.4*l,l,"#2c2c2c")}else if(e==="tablet"){It(r,0,0,i,8*l,0,h),It(r,5*l,3*l,22*l,2.2*l,l,"#d4d4d4"),It(r,i-14*l,2.4*l,9*l,3.4*l,1.7*l,o);for(let x=0;x<4;x++){let f=(5+x%2*46)*l,m=(13+Math.floor(x/2)*34)*l;It(r,f,m,43*l,30*l,2*l,h),It(r,f+3*l,m+3*l,(12+a()*10)*l,1.6*l,l,d);for(let v=0;v<7;v++){let T=(5+a()*14)*l;It(r,f+(4+v*5.2)*l,m+26*l-T,3*l,T,.8*l,v===4&&x===0?o:p)}}g(5*l,84*l,[0,1,2,3,4,5].map(()=>(40+a()*48)*l),1.6*l,4.6*l,p),It(r,5*l,84*l+2*6.2*l,62*l,1.6*l,l,o)}else if(e==="timeline"){It(r,0,0,i,5*l,0,"#1b1b1b");for(let y=0;y<3;y++)It(r,(2+y*2.2)*l,1.8*l,1.4*l,1.4*l,l,"#4b4b4b");let x=t*.42;[[2,47],[51,47]].forEach(([y,E],w)=>{It(r,y*l,7*l,E*l,x,.8*l,"#050505");let _=r.createLinearGradient(0,7*l,0,7*l+x);_.addColorStop(0,"#2c2c2c"),_.addColorStop(.62,w?"#c9897b":"#9a7a74"),_.addColorStop(1,"#3a3638"),It(r,(y+1)*l,8*l,(E-2)*l,x-2*l,.6*l,_),r.fillStyle="rgba(12,12,12,0.85)",r.fillRect((y+1)*l,8*l+x*.7,(E-2)*l,x*.3-2*l),r.beginPath(),r.ellipse((y+E*(w?.6:.42))*l,8*l+x*.62,x*.09,x*.3,0,0,Math.PI*2),r.fill()});let f=9*l+x,m=t-f-2*l;It(r,2*l,f,96*l,m,.8*l,"#161616");let v=5,T=m/(v+.6);for(let y=0;y<v;y++){let E=f+.6*T+y*T;It(r,2.5*l,E+T*.15,6*l,T*.7,.5*l,"#272727");let w=9.5*l;for(;w<96*l;){let _=(6+a()*16)*l;a()>.18&&It(r,w,E+T*.15,Math.min(_,97*l-w),T*.7,.6*l,y<3?a()>.72?o:"#5f5f5f":"#3b3b3b"),w+=_+.6*l}}r.fillStyle=o,r.fillRect(58*l,f,.35*l,m),r.beginPath(),r.moveTo(56.8*l,f),r.lineTo(59.5*l,f),r.lineTo(58.15*l,f+1.6*l),r.fill()}else if(e==="grade"){It(r,0,0,i,t,0,"#141414");let x=t*.5,f=r.createLinearGradient(0,3*l,0,3*l+x);f.addColorStop(0,"#2c2c2c"),f.addColorStop(.65,"#c9897b"),f.addColorStop(1,"#3a3638"),It(r,3*l,3*l,56*l,x,.8*l,f),r.fillStyle="rgba(12,12,12,0.85)",r.fillRect(3*l,3*l+x*.72,56*l,x*.28),r.beginPath(),r.ellipse(26*l,3*l+x*.62,x*.1,x*.32,0,0,Math.PI*2),r.fill(),It(r,62*l,3*l,35*l,x,.8*l,"#050505");for(let T=0;T<320;T++){let y=63*l+a()*33*l,E=3*l+x*(.2+.25*Math.sin(y/i*9)+.4*a());r.fillStyle=T%3?"rgba(220,220,222,0.55)":o,r.fillRect(y,E,.4*l,.4*l)}let m=6*l+x,v=Math.min(12*l,(t-m-3*l)/2.2);for(let T=0;T<3;T++){let y=(18+T*32)*l,E=m+v*1.1;r.fillStyle="#5d5d5d",r.beginPath(),r.arc(y,E,v,0,Math.PI*2),r.fill(),r.fillStyle="#1f1f1f",r.beginPath(),r.arc(y,E,v*.8,0,Math.PI*2),r.fill(),r.strokeStyle="#3b3b3b",r.lineWidth=.3*l,r.beginPath(),r.moveTo(y-v*.8,E),r.lineTo(y+v*.8,E),r.moveTo(y,E-v*.8),r.lineTo(y,E+v*.8),r.stroke(),r.fillStyle=T===1?o:"#d6d7da",r.beginPath(),r.arc(y+v*.28*(T-1||.6),E-v*.22,v*.13,0,Math.PI*2),r.fill()}}else if(e==="scopes"){It(r,0,0,i,t,0,"#111111");let x=t-4*l,f=31*l;for(let m=0;m<3;m++){let v=(1.5+m*32.5)*l,T=2*l;if(It(r,v,T,f,x,l,"#1d1d1d"),m===1)for(let y=0;y<260;y++){let E=v+1.5*l+a()*(f-3*l),w=T+x*(.25+.22*Math.sin(E/i*14)+.38*a());r.fillStyle=y%3?"rgba(220,220,222,0.6)":o,r.fillRect(E,w,.35*l,.35*l)}else for(let y of[.27,.73]){let E=v+f*y,w=T+x/2,_=x*.36;r.fillStyle="#5d5d5d",r.beginPath(),r.arc(E,w,_,0,Math.PI*2),r.fill(),r.fillStyle="#1f1f1f",r.beginPath(),r.arc(E,w,_*.8,0,Math.PI*2),r.fill(),r.fillStyle=y<.5&&m===0?o:"#d6d7da",r.beginPath(),r.arc(E+_*.2,w-_*.2,_*.16,0,Math.PI*2),r.fill()}}}else if(e==="board"){It(r,0,0,i,t,0,"#f7f7f5"),It(r,0,0,i,8*l,0,"#ececee"),It(r,5*l,3*l,22*l,2.2*l,l,"#9c9c9c"),It(r,i-14*l,2.4*l,9*l,3.4*l,1.7*l,o);for(let x=0;x<6;x++){let f=(5+x%2*46)*l,m=(12+Math.floor(x/2)*29)*l;It(r,f,m,43*l,21*l,1.2*l,"#ffffff"),r.strokeStyle="#c9cbcf",r.lineWidth=.35*l,r.strokeRect(f,m,43*l,21*l),r.strokeStyle="#585858",r.lineWidth=.45*l,r.beginPath(),r.moveTo(f+4*l,m+17*l),r.lineTo(f+(14+a()*10)*l,m+(6+a()*6)*l),r.lineTo(f+39*l,m+15*l),r.stroke(),r.beginPath(),r.ellipse(f+(24+a()*8)*l,m+11*l,2.2*l,5*l,0,0,Math.PI*2),r.stroke(),x===3&&(r.strokeStyle=o,r.lineWidth=.9*l,r.strokeRect(f-.6*l,m-.6*l,44.2*l,22.2*l)),It(r,f,m+23*l,(14+a()*18)*l,1.4*l,l,"#c4c6ca")}}else{It(r,0,0,i,16*l,0,h),It(r,34*l,2.5*l,32*l,5*l,2.5*l,"#000"),r.fillStyle=o,r.beginPath(),r.arc(12*l,11*l,3.4*l,0,Math.PI*2),r.fill(),It(r,19*l,9.6*l,34*l,2.8*l,1.4*l,"#d4d4d4");let x=22*l;for(let f=0;f<8;f++){let m=f%2===1,v=(38+a()*34)*l,T=1+Math.floor(a()*2.6),y=(7+T*4.6)*l,E=m?i-v-6*l:6*l;It(r,E,x,v,y,4*l,m?o:u);for(let w=0;w<T;w++)It(r,E+4*l,x+4.4*l+w*4.6*l,(v-8*l)*(w===T-1?.6:1),1.8*l,l,m?"#393939":d);if(x+=y+4*l,x>t-34*l)break}It(r,6*l,t-18*l,i-12*l,11*l,5.5*l,h),r.fillStyle=o,r.beginPath(),r.arc(i-13*l,t-12.5*l,3.6*l,0,Math.PI*2),r.fill()}return qi(s)}function Ze(i,t,e,n){let s=Math.min(.008,e*.2),r=new Sr(Fs(i,t,n),{depth:e-s*2,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:8});return r.translate(0,0,-(e-s*2)/2),r}function Fs(i,t,e){let n=-i/2,s=-t/2,r=new Di;return r.moveTo(n+e,s),r.lineTo(n+i-e,s),r.quadraticCurveTo(n+i,s,n+i,s+e),r.lineTo(n+i,s+t-e),r.quadraticCurveTo(n+i,s+t,n+i-e,s+t),r.lineTo(n+e,s+t),r.quadraticCurveTo(n,s+t,n,s+t-e),r.lineTo(n,s+e),r.quadraticCurveTo(n,s,n+e,s),r}function Mi(i,t,e){let n=new Jn(Fs(i,t,e),6),s=n.attributes.position,r=n.attributes.uv;for(let a=0;a<s.count;a++)r.setXY(a,s.getX(a)/i+.5,s.getY(a)/t+.5);return n}function ct(i,t,e,n=0,s=0,r=0){let a=new Jt(t,e);return a.position.set(n,s,r),a.castShadow=!0,i.add(a),a}function Xr(i){return{alu:new Ae({color:13882841,metalness:1,roughness:.3}),dark:new Ae({color:2894892,metalness:.45,roughness:.5}),key:new Ae({color:15921908,metalness:0,roughness:.55}),glass:new Ae({color:723723,metalness:.2,roughness:.12}),screen:new ie({map:i}),sheen:new Ae({color:0,metalness:1,roughness:.07,envMapIntensity:1.5,transparent:!0,opacity:.32,depthWrite:!1,blending:Ir})}}function qr(i,t,e,n){let s=new Jt(new Sn(e,n),new ie({map:t,transparent:!0,depthWrite:!1,opacity:.4}));s.rotation.x=-Math.PI/2,s.position.y=.007,s.renderOrder=-1,i.add(s)}function w_(i,t,e,n,s,r,a,o){let c=e/s*.84,h=n/r*.8,u=new Mn(new he(c,.012,h),t,s*r),p=new Se,d=0;for(let l=0;l<r;l++)for(let g=0;g<s;g++){let x=l===r-1&&g>s*.28&&g<s*.68;p.position.set(-e/2+(g+.5)*(e/s),a,o-n/2+(l+.5)*(n/r)),p.scale.setScalar(x?0:1),p.updateMatrix(),u.setMatrixAt(d++,p.matrix)}i.add(u),ct(i,new he(e*.38,.012,h),t,-e*.02,a,o+n/2-n/r/2).castShadow=!1}function A_(i,t,e){let n=new ce,s=Xr(i);ct(n,Ze(2,1.16,.05,.05),s.alu,0,1.04,0),ct(n,new Jn(Fs(1.96,1.12,.04)),s.glass,0,1.04,.0262).castShadow=!1,ct(n,Mi(1.9,1.06,.02),s.screen,0,1.04,.027).castShadow=!1,ct(n,Mi(1.9,1.06,.02),s.sheen,0,1.04,.0278).castShadow=!1,ct(n,new he(.03,.005,.004),new ie({color:le}),.9,.475,.027).castShadow=!1;let r=ct(n,new he(.17,.66,.035),s.alu,0,.36,-.07);r.rotation.x=7*mn,ct(n,new xe(.035,.035,.05,16),s.dark,0,.72,-.045).rotation.x=Math.PI/2,ct(n,Ze(.7,.46,.022,.07),s.alu,0,.014,-.03).rotation.x=-Math.PI/2;let a=ct(n,new Jn(Fs(1.7,.56,.05)),new Ae({color:14606306,roughness:.9}),.12,.004,.72);a.rotation.x=-Math.PI/2,a.castShadow=!1;let o=new ce;o.position.set(-.08,0,.72),ct(o,Ze(.96,.34,.03,.04),s.alu,0,.018,0).rotation.x=-Math.PI/2,w_(o,s.key,.9,.28,15,5,.039,0),n.add(o),ct(n,new $n(.09,20,12),s.alu,.62,.012,.74).scale.set(.72,.3,1.15);let h=new ce;h.position.set(.72,0,.02),ct(h,Ze(.46,.46,.11,.07),s.alu,0,.058,0).rotation.x=-Math.PI/2,ct(h,new he(.012,.012,.004),new ie({color:le}),-.17,.05,.232).castShadow=!1,n.add(h);let u=new fi([new I(.1,.62,-.06),new I(.22,.2,-.16),new I(.5,.03,-.2),new I(.7,.05,-.2)]);return ct(n,new Fi(u,24,.009,5),s.dark),qr(n,t,2.7,2.6),n.userData.plug=new I(.72,.05,-.24),n.userData.label=new I(0,1.84,0),n}function md(i,t,e,n,s,r){let a=new ce,o=Xr(n);o.alu.color.setHex(12896204),o.alu.roughness=.34;let c=Math.min(i,t)*.13,h=new ce;if(h.rotation.x=-e*mn,ct(h,Ze(i,t,.036,c),o.alu,0,t/2+.02,0),ct(h,new Jn(Fs(i*.975,t*.985,c*.92)),o.glass,0,t/2+.02,.0188).castShadow=!1,ct(h,Mi(i*.93,t*.955,c*.72),o.screen,0,t/2+.02,.0196).castShadow=!1,ct(h,new he(.012,t*.11,.008),o.dark,i/2+.002,t*.72,0).castShadow=!1,ct(h,Mi(i*.93,t*.955,c*.72),o.sheen,0,t/2+.02,.0204).castShadow=!1,a.add(h),i>.6)ct(a,new xe(.011,.011,.62,10),o.alu,i/2+.16,.012,.16).rotation.set(Math.PI/2,0,.12),ct(a,new fr(.011,.04,10),o.dark,i/2+.123,.012,-.176).rotation.set(-Math.PI/2,0,.12);else{let u=ct(a,new en(.13,.004,6,48),new ie({color:le}),0,.037,-.07);u.rotation.x=Math.PI/2,u.castShadow=!1}return ct(a,Ze(i*.7,.34,.034,.06),o.dark,0,.018,-.07).rotation.x=-Math.PI/2,ct(a,new he(i*.5,.05,.03),o.dark,0,.05,-.115),qr(a,s,i*2.2,t*1.35),i*2.4,t*1.5,t*.55,a.userData.plug=new I(0,.03,-.26),a.userData.label=new I(0,t+.3,-t*.25),a}function R_(i,t){let e=new ce,n=1.55,s=new ce;s.scale.setScalar(n),e.add(s);let r=Xr(i),a=new Ae({color:4144959,metalness:.5,roughness:.4}),o=new Ae({color:1579032,metalness:.3,roughness:.48}),c=new Ae({color:2829099,metalness:0,roughness:.85}),h=new ie({color:le}),u=E=>(E.rotation.x=Math.PI/2,E),p=1.16,d=new ce;d.position.set(0,p,-.04),ct(d,Ze(.3,.3,.52,.05),a,0,0,-.06),ct(d,Ze(.24,.19,.1,.02),o,0,-.01,-.37),ct(d,new he(.32,.02,.46),r.alu,0,.162,-.06);for(let E of[-.161,.161])ct(d,new he(.012,.24,.4),r.alu,E,0,-.06);u(ct(d,new xe(.022,.022,.42,16),r.alu,0,.27,-.04));for(let E of[.12,-.2])ct(d,new he(.035,.1,.035),r.alu,0,.215,E);u(ct(d,new xe(.1,.1,.05,40),r.alu,0,0,.225)),u(ct(d,new xe(.098,.09,.4,40),o,0,0,.45));for(let[E,w,_]of[[.33,.106,c],[.46,.108,r.alu],[.58,.112,c]])u(ct(d,new xe(w,w,.045,40),_,0,0,E));u(ct(d,new xe(.118,.11,.04,40),o,0,0,.66)),ct(d,new di(.095,40),r.glass,0,0,.681).castShadow=!1;let l=new ce;l.position.set(0,0,.8),ct(l,new he(.44,.03,.2),o,0,.165,0),ct(l,new he(.44,.03,.2),o,0,-.165,0);for(let E of[-.205,.205])ct(l,new he(.03,.36,.2),o,E,0,0);ct(l,new he(.44,.008,.2),o,0,.2,.1).rotation.x=-.35,d.add(l);for(let E of[-.06,.06])u(ct(d,new xe(.011,.011,.8,10),r.alu,E,-.19,.28));ct(d,new he(.06,.12,.07),o,.13,-.14,.46),ct(d,new xe(.045,.045,.03,24),r.alu,.175,-.14,.46).rotation.z=Math.PI/2;let g=new ce;g.position.set(-.32,.3,.04),g.rotation.set(-.1,-1.15,0),ct(g,Ze(.36,.24,.035,.025),o,0,0,0),ct(g,Mi(.33,.21,.012),r.screen,0,0,.0182).castShadow=!1,ct(g,Mi(.33,.21,.012),r.sheen,0,0,.0192).castShadow=!1,d.add(g),ct(d,new xe(.012,.012,.22,8),r.alu,-.22,.22,.04).rotation.z=.95,ct(d,new he(.03,.018,.01),new ie({color:le}),.09,.1,.205).castShadow=!1,s.add(d),ct(s,new he(.2,.04,.3),o,0,p-.175,-.04),ct(s,new xe(.1,.12,.13,28),o,0,p-.255,-.04),ct(s,new xe(.014,.014,.55,10),r.alu,-.1,p-.3,-.36).rotation.set(1.15,0,.3);let f=new I(0,p-.33,-.04);ct(s,new xe(.09,.07,.07,24),o,f.x,f.y,f.z);let m=new I(0,1,0),v=(E,w,_,S)=>{let L=ct(s,new xe(_,_,E.distanceTo(w),10),S,(E.x+w.x)/2,(E.y+w.y)/2,(E.z+w.z)/2);return L.quaternion.setFromUnitVectors(m,w.clone().sub(E).normalize()),L};v(f,new I(0,.5,-.04),.022,o);let T=new I(0,.2,-.04);[.35,2.44,4.53].forEach(E=>{let w=new I(Math.sin(E)*.64,.02,-.04+Math.cos(E)*.64),_=new I(Math.cos(E),0,-Math.sin(E)).multiplyScalar(.022);v(f.clone().add(_),w.clone().add(_),.013,r.alu),v(f.clone().sub(_),w.clone().sub(_),.013,r.alu),v(f.clone().lerp(w,.4),f.clone().lerp(w,.47),.042,o),v(f.clone().lerp(w,.04),f.clone().lerp(w,.1),.042,o),ct(s,new $n(.03,12,8),c,w.x,.02,w.z),v(T,f.clone().lerp(w,.78),.008,r.alu)});let y=new fi([new I(.1,p-.08,-.33),new I(.2,p-.3,-.36),new I(.2,.4,-.2),new I(.14,.05,-.08),new I(.1,.02,0)]);return ct(s,new Fi(y,40,.011,6),h),qr(s,t,1.8,1.8),e.userData.plug=new I(.1*n,.03,0),e.userData.label=new I(0,(p+.52)*n,0),e}function C_(i){let t=new ce,e=Xr(null),n=1.5,s=1.5,r=.72,a=.22;ct(t,Ze(n,s,r,a),e.alu,0,r/2+.03,0).rotation.x=-Math.PI/2,ct(t,new xe(n*.36,n*.36,.03,64),e.dark,0,.015,0).castShadow=!1;let o=s/2+.002;for(let p of[-.5,-.38])ct(t,Ze(.07,.03,.01,.012),e.dark,p,.18,o).castShadow=!1;ct(t,Ze(.2,.02,.01,.008),e.dark,-.12,.18,o).castShadow=!1,ct(t,new he(n-.5,.012,.004),e.dark,0,.07,o).castShadow=!1;let c=new Mn(new he(.035,.012,.006),new ie,6),h=new Se,u=new Ot;for(let p=0;p<6;p++)h.position.set(.3+p*.065,.18,o+.003),h.updateMatrix(),c.setMatrixAt(p,h.matrix),c.setColorAt(p,u.setHex(p%3?10263708:le));return t.add(c),qr(t,i,2.3,2.3),t.userData.leds=c,t.userData.blink=[0,1,2,3,4,5],t.userData.plugs=[new I(-n/2-.01,.1,.36),new I(-n/2-.01,.1,.12)],t.userData.label=new I(0,r+.42,0),t}function I_(i,t){let e=new ce,n=Xr(i),s=new Ae({color:3947580,metalness:.4,roughness:.42}),r=new Ae({color:2368548,metalness:.2,roughness:.6}),a=new Es({color:855309,roughness:.12,clearcoat:1,clearcoatRoughness:.08}),o=2,c=1.1;ct(e,Ze(o,c,.12,.08),s,0,.06,0).rotation.x=-Math.PI/2,ct(e,Ze(o,.42,.14,.06),s,0,.19,-c/2+.21).rotation.x=-Math.PI/2;let h=ct(e,new Jn(Fs(o-.08,.62,.05)),r,0,.1206,.2);h.rotation.x=-Math.PI/2,h.castShadow=!1;for(let x of[-.6,0,.6])ct(e,new en(.2,.034,14,48),n.alu,x,.128,.2).rotation.x=Math.PI/2,ct(e,new $n(.155,32,20),a,x,.14,.2);let u=new Se,p=new Mn(new xe(.034,.038,.05,20),n.alu,12);for(let x=0;x<12;x++)u.position.set(-.88+x*.16,.285,-.22),u.updateMatrix(),p.setMatrixAt(x,u.matrix);p.castShadow=!0,e.add(p);let d=new Ae({color:5000268,roughness:.6}),l=new Mn(new he(.1,.02,.06),d,14);for(let x=0;x<14;x++)u.position.set(-.84+x*.13,.128,.47),u.updateMatrix(),l.setMatrixAt(x,u.matrix);e.add(l),ct(e,new he(.1,.022,.06),new ie({color:le}),.98-.14,.13,.47).castShadow=!1;let g=new ce;return g.position.set(0,.25,-.45),g.rotation.x=-.5,ct(g,Ze(1.24,.32,.04,.03),s,0,.16,0),ct(g,Mi(1.16,.26,.015),n.screen,0,.16,.021).castShadow=!1,ct(g,Mi(1.16,.26,.015),n.sheen,0,.16,.022).castShadow=!1,e.add(g),qr(e,t,2.8,1.8),e.userData.plug=new I(-o/2-.01,.06,-.15),e.userData.label=new I(0,.85,-.25),e}function P_(i){let t=new ce,e=new Es({color:16514043,roughness:.3,clearcoat:.7,clearcoatRoughness:.2}),n=new Ae({color:15330028,roughness:.5});ct(t,new xe(ei-.05,ei,.16,96),e,0,.08,0),ct(t,new en(ei-.06,.028,12,96),e,0,.158,0).rotation.x=Math.PI/2,ct(t,new xe(ei-.1,ei-.1,.01,96),n,0,.165,0).castShadow=!1;let s=new ie({color:le,transparent:!0}),r=ct(t,new en(ei-.34,.024,10,96),s,0,.172,0);r.rotation.x=Math.PI/2,r.castShadow=!1;let a=new ie({map:i,color:le,transparent:!0,opacity:.16,depthWrite:!1}),o=ct(t,new Sn(1.9,1.9),a,0,.176,0);o.rotation.x=-Math.PI/2,o.castShadow=!1;let c=Us-vi*Wr*.9,h=.17,u=new ie({color:le,transparent:!0}),p=ct(t,new xe(.012,.018,c-h,12),u,0,(c+h)/2,0);return p.castShadow=!1,{group:t,glow:[s,u,a],spine:p}}function L_(){let i=new ce;i.position.y=.7,i.scale.setScalar(1.3);let t=new ce;i.add(t);let e=new Ae({color:13224393,metalness:.9,roughness:.28}),n=new ie({color:new Ot(le),transparent:!0}),s=new ie({color:new Ot(le),transparent:!0});ct(t,Ze(.3,.23,.1,.045),e,0,-.035,0);let r=ct(t,new en(.085,.024,10,28,Math.PI),e,0,.1,0);r.castShadow=!0;for(let c of[-.085,.085])ct(t,new xe(.024,.024,.05,10),e,c,.085,0);ct(t,new di(.034,20),n,0,-.015,.0515).castShadow=!1,ct(t,new Sn(.026,.07),n,0,-.062,.0515).castShadow=!1;let a=ct(i,new en(.33,.007,6,96),s,0,-.03,0);a.rotation.x=Math.PI/2,a.castShadow=!1;let o=ct(i,new en(.4,.003,4,96),s,0,-.03,0);return o.rotation.x=Math.PI/2,o.castShadow=!1,{group:i,face:t,glow:[n,s]}}function D_(i){let t=new ce;t.position.y=Us,t.scale.setScalar(Wr);let e=new ce;t.add(e);let n=new Ot(le),{c:s,g:r}=Xi(4,32),a=r.createLinearGradient(0,0,0,32);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(.5,"rgba(255,255,255,0.9)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,4,32);let o=qi(s),c=[];for(let S=0;S<Ns;S++){let L=(-68+136/(Ns-1)*S)*mn,C=vi*Math.sin(L),P=vi*Math.cos(L),O=new ce;O.position.y=C;let N=new Jt(new xe(P,P,.012,96,1),new ie({color:16777215,transparent:!0,opacity:.55,side:nn,depthWrite:!1})),R=new Jt(new en(P,.0105,6,160),new ie({color:n,transparent:!0}));R.rotation.x=Math.PI/2;let B=new Jt(new xe(P,P,.07,96,1,!0),new ie({map:o,color:le,transparent:!0,opacity:.3,depthWrite:!1,blending:qe,side:nn})),W=new Jt(new en(P*.6,.004,4,96),new ie({color:le,transparent:!0,opacity:.4}));W.rotation.x=Math.PI/2;let H=Math.round(8+P*12),Q=new Float32Array(H*6);for(let Vt=0;Vt<H;Vt++){let Tt=Vt/H*Math.PI*2,Gt=P*(Vt%3===0?.6:.82);Q.set([Gt*Math.cos(Tt),0,Gt*Math.sin(Tt),P*Math.cos(Tt),0,P*Math.sin(Tt)],Vt*6)}let k=new _e;k.setAttribute("position",new Ce(Q,3));let K=new Pi(k,new hi({color:le,transparent:!0,opacity:.2})),j=Math.round(6+P*12),bt=new Float32Array(j*3);for(let Vt=0;Vt<j;Vt++){let Tt=Vt/j*Math.PI*2;bt[Vt*3]=P*Math.cos(Tt),bt[Vt*3+2]=P*Math.sin(Tt)}let Ft=new _e;Ft.setAttribute("position",new Ce(bt,3));let Y=new Li(Ft,new ui({map:i,color:le,size:.1,transparent:!0,depthWrite:!1,blending:qe})),pt=new ce;for(let Vt=0;Vt<2;Vt++){let Tt=new Jt(new he(.11,.02,.028),new ie({color:5000268,transparent:!0})),Gt=Vt*Math.PI+S;Tt.position.set(P*Math.cos(Gt),0,P*Math.sin(Gt)),Tt.rotation.y=-Gt+Math.PI/2,pt.add(Tt)}let Et=Math.round(20+P*44),Nt=new Float32Array(Et*6);for(let Vt=0;Vt<Et;Vt++){let Tt=Vt/Et*Math.PI*2,Gt=P*1.022,$t=P*(Vt%4===0?1.075:1.045);Nt.set([Gt*Math.cos(Tt),0,Gt*Math.sin(Tt),$t*Math.cos(Tt),0,$t*Math.sin(Tt)],Vt*6)}let xt=new _e;xt.setAttribute("position",new Ce(Nt,3));let Ut=new Pi(xt,new hi({color:le,transparent:!0,opacity:.34}));O.add(N,B,R,W,K,Ut,Y,pt),e.add(O),c.push({layer:O,disc:N,rim:R,band:B,inner:W,spokeLines:K,scale:Ut,nodes:Y,packets:pt,y:C,r:P})}let h=new Float32Array((Ns-1)*rl*6),u=new _e;u.setAttribute("position",new Ce(h,3));let p=new Pi(u,new hi({color:le,transparent:!0,opacity:.42}));e.add(p);let d=new Jt(new xe(.008,.008,vi*1.9,8),new ie({color:n,transparent:!0}));e.add(d);let l=[[1.5,62,.21],[1.68,-48,-.15],[1.84,14,.09]].map(([S,L,C])=>{let P=new ce;P.rotation.set(L*mn,0,18*mn);let O=new ce,N=new Jt(new en(S,.003,4,160),new ie({color:le,transparent:!0,opacity:.32}));N.rotation.x=Math.PI/2;let R=new Jt(new $n(.03,12,8),new ie({color:5000268,transparent:!0}));R.position.x=S;let B=new Yn(new Dn({map:i,color:le,transparent:!0,opacity:0,depthWrite:!1,blending:qe}));return B.position.x=S,B.scale.setScalar(.3),O.add(N,R,B),P.add(O),t.add(P),{turn:O,line:N,moon:R,glint:B,speed:C}}),g=new Jt(new $n(.07,20,14),new ie({color:le,transparent:!0})),x=new Yn(new Dn({map:i,color:le,transparent:!0,opacity:0,depthWrite:!1,blending:qe}));t.add(g,x);let f=[0,60,120].map(S=>{let L=new Jt(new en(vi*1.012,.0022,4,160),new ie({color:le,transparent:!0,opacity:0}));return L.rotation.y=S*mn,e.add(L),L}),m=150,v=new Float32Array(m*3),T=Gc(5);for(let S=0;S<m;S++){let L=T()*2-1,C=T()*Math.PI*2,P=vi*.9*Math.cbrt(T()),O=Math.sqrt(1-L*L);v.set([P*O*Math.cos(C),P*L,P*O*Math.sin(C)],S*3)}let y=new _e;y.setAttribute("position",new Ce(v,3));let E=new Li(y,new ui({map:i,color:le,size:.04,transparent:!0,opacity:0,depthWrite:!1,blending:qe}));e.add(E);let w=new Yn(new Dn({map:i,color:le,transparent:!0,opacity:0,depthWrite:!1,blending:qe}));w.scale.setScalar(5.2),t.add(w);function _(S,L,C){t.visible=L>.001,e.rotation.set(.38*Math.sin(S*Hc[0]*3),S*Hc[1],.3*Math.sin(S*Hc[2]*3+1));let P=[];for(let N=0;N<Ns;N++){let R=c[N],B=On(0,1,L*(Ns+1.5)-N);P[N]=S*.06+.5*Math.sin(S*.11+N*1.3),R.layer.rotation.y=-P[N],R.layer.scale.setScalar(ti(.94,1,B)),R.layer.visible=B>.001,R.disc.material.opacity=.55*B,R.rim.material.opacity=B*Math.min(1,(.6+.4*(N%2?.6:1))*(1+C*.5)),R.band.material.opacity=B*(.14+C*.12),R.inner.material.opacity=.4*B,R.spokeLines.material.opacity=.2*B,R.scale.material.opacity=.34*B,R.nodes.material.opacity=B*Math.min(1,.85+C*.4),R.packets.rotation.y=S*(.5+.13*(N%4))*(N%2?-1:1);for(let W of R.packets.children)W.material.opacity=B;R.vis=B}let O=0;for(let N=0;N<Ns-1;N++){let R=c[N],B=c[N+1],W=Math.min(R.vis,B.vis)>.5;for(let H=0;H<rl;H++){let Q=P[N]+H/rl*Math.PI*2,k=P[N+1]+(H+.5)/rl*Math.PI*2;h[O++]=R.r*Math.cos(Q),h[O++]=R.y,h[O++]=R.r*Math.sin(Q),W?(h[O++]=B.r*Math.cos(k),h[O++]=B.y,h[O++]=B.r*Math.sin(k)):(h[O++]=R.r*Math.cos(Q),h[O++]=R.y,h[O++]=R.r*Math.sin(Q))}}u.attributes.position.needsUpdate=!0,p.material.opacity=.42*L,d.material.opacity=L*.5;for(let N of l)N.turn.rotation.y=S*N.speed,N.line.material.opacity=.32*L,N.moon.material.opacity=L,N.glint.material.opacity=L*.5;g.material.opacity=L,g.scale.setScalar(1+.1*Math.sin(S*2.1)+C*.5),x.material.opacity=L*Math.min(1,.3+C*.3),x.scale.setScalar(1.05+.12*Math.sin(S*2.1)+C*.6);for(let N of f)N.material.opacity=.17*L;E.material.opacity=.35*L,E.rotation.y=-S*.09,w.material.opacity=L*(.08+C*.08)}return{group:t,update:_}}function N_(){let i=new ce,t=[],{c:e,g:n}=Xi(256,256),s=n.createRadialGradient(128,128,0,128,128,128);s.addColorStop(0,"rgba(255,255,255,0.9)"),s.addColorStop(.5,"rgba(255,255,255,0.4)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,256,256);let r=new Jt(new di(8,72),new ie({map:qi(e),transparent:!0,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.renderOrder=-4,i.add(r);let{c:a,g:o}=Xi(1024,1024);o.strokeStyle="rgba(42,42,42,0.55)",o.lineWidth=1.4;for(let S=0;S<=16;S++)o.beginPath(),o.moveTo(S*64,0),o.lineTo(S*64,1024),o.stroke(),o.beginPath(),o.moveTo(0,S*64),o.lineTo(1024,S*64),o.stroke();o.strokeStyle="rgba(42,42,42,0.9)",o.lineWidth=2;for(let S=0;S<=16;S+=2)for(let L=0;L<=16;L+=2)o.beginPath(),o.moveTo(S*64-7,L*64),o.lineTo(S*64+7,L*64),o.moveTo(S*64,L*64-7),o.lineTo(S*64,L*64+7),o.stroke();o.globalCompositeOperation="destination-in";let c=o.createRadialGradient(512,512,40,512,512,330);c.addColorStop(0,"rgba(0,0,0,0.5)"),c.addColorStop(.6,"rgba(0,0,0,0.2)"),c.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=c,o.fillRect(0,0,1024,1024);let h=new ie({map:qi(a),transparent:!0,depthWrite:!1,opacity:.16});h.userData.strength=.16,t.push(h);let u=new Jt(new Sn(17,17),h);u.rotation.x=-Math.PI/2,u.position.y=.002,u.renderOrder=-3,i.add(u);let p=new Jt(new Sn(22,22),new br({opacity:.16}));p.rotation.x=-Math.PI/2,p.position.y=.004,p.receiveShadow=!0,p.renderOrder=-2,i.add(p);let d=new ce;d.position.y=.012;let l=(S,L,C)=>{let P=new ie({color:L,transparent:!0,opacity:C,side:nn,depthWrite:!1});P.userData.strength=C,t.push(P);let O=new Jt(S,P);return O.rotation.x=-Math.PI/2,O};for(let[S,L,C]of[[0,70,1],[84,34,.5],[130,96,1],[240,22,.5],[272,64,.8]])d.add(l(new Ui(1.86,1.9,96,1,S*mn,L*mn),C===1?12172224:le,.85*C));d.add(l(new Ui(1.62,1.628,128),le,.35)),i.add(d);let g=new ie({color:10658466,transparent:!0,opacity:.5,depthWrite:!1});g.userData.strength=.5,t.push(g);let x=new Mn(new he(.008,.001,.09),g,120),f=new Se;for(let S=0;S<120;S++){let L=S/120*Math.PI*2,C=S%10===0;f.position.set(Math.cos(L)*(2.1+(C?.04:0)),.012,Math.sin(L)*(2.1+(C?.04:0))),f.rotation.y=-L+Math.PI/2,f.scale.z=C?1.9:1,f.updateMatrix(),x.setMatrixAt(S,f.matrix)}i.add(x);let{c:m,g:v}=Xi(256,256),T=v.createRadialGradient(128,128,0,128,128,128);T.addColorStop(0,"rgba(255,127,97,0.32)"),T.addColorStop(.4,"rgba(255,127,97,0.1)"),T.addColorStop(1,"rgba(255,127,97,0)"),v.fillStyle=T,v.fillRect(0,0,256,256);let y=new ie({map:qi(m),transparent:!0,depthWrite:!1,opacity:0}),E=new Jt(new di(2.6,64),y);E.rotation.x=-Math.PI/2,E.position.y=.003,E.renderOrder=-3,i.add(E);let w=new ie({color:le,transparent:!0,opacity:0,side:nn,depthWrite:!1}),_=new Jt(new Ui(.985,1,128),w);return _.rotation.x=-Math.PI/2,_.position.y=.013,_.visible=!1,i.add(_),{group:i,ring:d,marks:t,pool:y,pulse:_}}function gd(i,t,e,n){let s=Math.atan2(t.z,t.x),r=new I(Math.cos(s),0,Math.sin(s)),a=new I(-r.z,0,r.x),o=Math.hypot(t.x,t.z),c=n==="thin"?.016:.024,h=[t.clone(),new I(t.x,c,t.z).addScaledVector(r,-.32),r.clone().multiplyScalar(o*.58).addScaledVector(a,e).setY(c),r.clone().multiplyScalar(1.7).addScaledVector(a,e*.3).setY(c),r.clone().multiplyScalar(ei+.02).setY(.06)],u=new fi(h,!1,"catmullrom",.5),p=120,d=n==="thin"?5:8,l=n==="lit",g=new Fi(u,p,l?.021:n==="thin"?.011:.018,d,!1),x=l?new ie({color:le}):new Ae({color:n==="thin"?13816790:15790322,roughness:.55,metalness:0}),f=new Jt(g,x);f.castShadow=n!=="thin",g.setDrawRange(0,0),i.add(f);let m=[];if(n!=="thin"){let v=new ie({color:le}),T=ct(i,new he(.07,.05,.1),v,t.x,Math.max(.03,t.y),t.z);T.rotation.y=-s;let y=ct(i,new he(.1,.06,.08),v,r.x*(ei+.01),.05,r.z*(ei+.01));y.rotation.y=-s+Math.PI/2,m.push(T,y)}return{mesh:f,curve:u,lit:l,count:p*d*6,perSegment:d*6,ends:m}}function ol(i,t){i.visible=t>.001,i.visible&&i.traverse(e=>{if(!e.material)return;let n=e.material.userData;n.base===void 0&&(n.base=e.material.opacity,n.glassy=e.material.transparent),e.material.transparent=n.glassy||t<.999,e.material.opacity=n.base*t})}function U_(i){i.updateMatrixWorld(!0);let t=new Map;i.traverse(e=>{if(!e.isMesh||e.isInstancedMesh)return;let n=`${e.material.uuid}|${e.castShadow}|${e.receiveShadow}|${e.renderOrder}`;t.has(n)||t.set(n,[]),t.get(n).push(e)});for(let e of t.values()){if(e.length<2)continue;let n=e.map(r=>{let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(let o of Object.keys(a.attributes))["position","normal","uv"].includes(o)||a.deleteAttribute(o);return a.clearGroups(),a.applyMatrix4(r.matrixWorld)}),s=new Jt(dd(n),e[0].material);s.castShadow=e[0].castShadow,s.receiveShadow=e[0].receiveShadow,s.renderOrder=e[0].renderOrder;for(let r of e)r.removeFromParent();i.add(s)}}var zc=class{constructor(t){this.figure=t,this.reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.fixed=t.dataset.standbild?t.dataset.standbild.split(",").map(Number):null,this.progress=this.fixed?this.fixed[0]:this.reduced?1:0,this.time=this.fixed?this.fixed[1]:14,this.energy=0,this.pointer={x:0,y:0,sx:0,sy:0},this.visible=!1,this.playing=!1,this.raf=0,this.span=11.2,this.frames=0,this.slow=0,this.labels=[],this.wave=2,this.shadowAt=-1,this.narrow=t.clientWidth/Math.max(1,t.clientHeight)<1.6,this.handheld=window.matchMedia("(pointer: coarse)").matches;let e=document.createElement("canvas");e.setAttribute("aria-hidden","true"),this.canvas=e,this.renderer=new el({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.ratio=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.ratio),this.renderer.toneMapping=fn,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hi,this.renderer.shadowMap.autoUpdate=!1,this.scene=new Ii,this.scene.background=new Ot(fd),this.scene.fog=new sr(fd,16,34),this.camera=new Xe(30,2,.1,80),this.ready=this.init().catch(n=>{console.warn("Systembild: 3D nicht verf\xFCgbar, Standbild bleibt.",n),this.stop(),e.remove(),t.classList.remove("s3d-live")})}async init(){let t=this.figure,e=this.canvas;await al();let n=new Ps(this.renderer);this.scene.environment=n.fromScene(new sl,.04).texture,this.scene.environmentIntensity=.95,n.dispose(),await al(),this.warmTarget=new tn(32,32),await this.build(),this.composer=null,this.bloom={enabled:!1},this.resize(),this.warmTarget.dispose(),await al(),t.appendChild(e),this.buildLabels(),this.render(),t.classList.add("s3d-live"),new ResizeObserver(()=>{this.resize(),this.render()}).observe(t),!this.fixed&&!this.reduced&&(new IntersectionObserver(s=>{let r=s[s.length-1];if(this.visible=r.isIntersecting,!this.visible){this.stop(),this.reset();return}r.intersectionRatio>=.06&&(this.playing=!0),this.start()},{threshold:[0,.06]}).observe(t),document.addEventListener("visibilitychange",()=>document.hidden?this.stop():this.visible&&this.start()),window.matchMedia("(hover: hover) and (pointer: fine)").matches&&(t.addEventListener("pointermove",s=>{let r=t.getBoundingClientRect();this.pointer.x=(s.clientX-r.left)/r.width*2-1,this.pointer.y=(s.clientY-r.top)/r.height*2-1}),t.addEventListener("pointerleave",()=>{this.pointer.x=0,this.pointer.y=0}))),e.addEventListener("webglcontextlost",s=>{s.preventDefault(),this.stop(),t.classList.remove("s3d-live")})}solo(t,e){let n=this.scene.children.filter(r=>r!==t&&!r.isLight),s=n.map(r=>r.visible);for(let r of n)r.visible=!1;e(),n.forEach((r,a)=>{r.visible=s[a]})}async prime(t,e=!1){this.scene.add(t),e&&ol(t,.5),this.renderer.setRenderTarget(null),await this.renderer.compileAsync(t,this.camera,this.scene),this.renderer.shadowMap.needsUpdate=!0,this.solo(t,()=>this.renderer.render(this.scene,this.camera)),this.renderer.setRenderTarget(null),await al()}async build(){this.scene.add(new wr(16777215,14277341,1.15));let t=new Bi(16777215,1.55);t.position.set(-5,11,7),t.castShadow=!0,t.shadow.mapSize.setScalar(this.handheld?1024:2048),Object.assign(t.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:1,far:30}),t.shadow.bias=-4e-4,t.shadow.radius=9,this.scene.add(t);let e=new Bi(16777215,.45);e.position.set(3,2.5,9),this.scene.add(e);let n=new Bi(16777215,.55);n.position.set(7,5,-8),this.scene.add(n),this.coreLight=new Oi(le,0,12,1.4),this.coreLight.position.set(0,Us,0),this.scene.add(this.coreLight),this.camera.position.set(0,6,15),this.camera.lookAt(0,1.2,0),this.camera.updateMatrixWorld();let s=pd("255,255,255",1),r=pd("0,0,0",.9),a=E_(),o=N_();this.ring=o.ring,this.marks=o.marks,this.pool=o.pool,this.pulse=o.pulse,await this.prime(o.group),this.dock=P_(s,a),await this.prime(this.dock.group,!0),this.lock=L_(),await this.prime(this.lock.group,!0),this.gate=0,this.core=D_(s),await this.prime(this.core.group);let c=N=>Math.round(N*(this.handheld?.5:1)),h=(N,R,B,W)=>T_(c(N),c(R),B,W),u=[[()=>R_(h(512,320,"grade",3),r),-4.5,.7,72,0,"camera"],[()=>A_(h(1280,716,"timeline",7),r,s),-2.4,-2.7,18,.04,"desk"],[()=>C_(r),2.35,-2.6,-22,.08,"server"],[()=>{let N=md(1,1.34,20,h(900,1208,"board",5),r,s);return N.userData.plug.set(-.66,.03,-.06),N},4.45,.45,-36,.11,"tablet"],[()=>I_(h(1024,230,"scopes",11),r),2.55,2.95,-18,.14,"laptop"],[()=>md(.36,.74,14,h(450,930,"phone",9),r,s),-1.7,3.35,14,.17,"phone"]],p=this.narrow?.66:1,d=this.narrow?.95:1;this.devices=[];for(let[N,R,B,W,H,Q]of u){let k=N();U_(k),k.position.set(R*p,0,B*d),k.rotation.y=W*mn,k.updateMatrixWorld(!0),this.devices.push({obj:k,at:H,key:Q,anchor:k.localToWorld(k.userData.label.clone())}),await this.prime(k,!0)}let[l,g,x,f,m,v]=this.devices.map(N=>N.obj);this.rack=x,this.coreAnchor=new I(1.12*Wr,Us+vi*Wr*.72,0);let T=(N,R)=>N.localToWorld(R.clone());this.cableGroup=new ce;let y=[[T(l,l.userData.plug),.45,"lit",0],[T(g,g.userData.plug),.5,"grey",.07],[T(x,x.userData.plugs[0]),-.45,"lit",.14],[T(x,x.userData.plugs[1]),-.15,"grey",.2],[T(f,f.userData.plug),-.3,"grey",.27],[T(m,m.userData.plug),-.4,"lit",.34],[T(v,v.userData.plug),.3,"grey",.4]];this.cables=[];let E=new ce;y.forEach(([N,R,B,W],H)=>{let Q=gd(this.cableGroup,N,R,B);Q.at=W,Q.phase=H*.37%1,Q.speed=.11+H%3*.018,Q.last=Q.phase,Q.dots=[1,.5,.25].map(K=>{let j=new Yn(new Dn({map:s,color:Q.lit?16777215:le,transparent:!0,opacity:0,depthWrite:!1,blending:qe}));return j.scale.setScalar((Q.lit?.4:.28)*(.55+.45*K)),j.userData.k=K,E.add(j),j}),this.cables.push(Q);let k=gd(this.cableGroup,N.clone().add(new I(.05,0,.05)),R*.72+.1,"thin");k.at=W+.03,k.dots=[],this.cables.push(k)}),await this.prime(this.cableGroup),this.risers=[0,1,2].map(()=>{let N=new Yn(new Dn({map:s,color:le,transparent:!0,opacity:0,depthWrite:!1,blending:qe}));return N.scale.setScalar(.34),N.userData.t=2,E.add(N),N});let w=220,_=new Float32Array(w*3),S=Gc(21);for(let N=0;N<w;N++)_.set([(S()-.5)*13,S()*5.5,(S()-.5)*11],N*3);let L=new _e;L.setAttribute("position",new Ce(_,3)),this.dust=new Li(L,new ui({map:s,color:14737632,size:.04,transparent:!0,opacity:0,depthWrite:!1,blending:qe})),E.add(this.dust),await this.prime(E),this.center=new I(0,1.2,0),this.bounds=[];let C=new dn,P=new I;for(let N of this.devices)N.obj.updateMatrixWorld(!0),N.obj.traverse(R=>{if(!(!R.isMesh||R.isInstancedMesh||R.renderOrder===-1||!R.geometry)){R.geometry.boundingBox||R.geometry.computeBoundingBox(),C.copy(R.geometry.boundingBox).applyMatrix4(R.matrixWorld);for(let B=0;B<8;B++)P.set(B&1?C.max.x:C.min.x,B&2?C.max.y:C.min.y,B&4?C.max.z:C.min.z),this.bounds.push({p:P.clone(),label:!1})}}),N.key&&this.bounds.push({p:N.anchor.clone(),label:!0});let O=1.9*Wr;for(let N=0;N<48;N++){let R=1-2*(N+.5)/48,B=Math.sqrt(1-R*R),W=N*2.39996;this.bounds.push({p:new I(Math.cos(W)*B*O,Us+R*O,Math.sin(W)*B*O),label:!1})}for(let N=0;N<16;N++){let R=N/16*Math.PI*2;this.bounds.push({p:new I(Math.cos(R)*2.2,0,Math.sin(R)*2.2),label:!1})}this.bounds.push({p:this.coreAnchor.clone(),label:!0})}fit(t,e){let n=new I(Math.sin(t)*Math.cos(e),Math.sin(e),Math.cos(t)*Math.cos(e)),s=n.clone().negate(),r=new I().crossVectors(s,new I(0,1,0)).normalize(),a=new I().crossVectors(r,s),o=Math.tan(this.camera.fov*mn/2),c=o*this.camera.aspect,h=this.labels.length>0&&this.w>760,u=Math.max(1,this.w),p=Math.max(1,this.h),d=Math.max(14,Math.min(u,p)*.035),l=[],g=new I;for(let _ of this.bounds)_.label&&!h||(g.copy(_.p).sub(this.center),l.push([g.dot(r),g.dot(a),g.dot(s),2*(_.label?84:d)/u,2*(_.label?52:d)/p,2*(_.label?0:d)/p]));let x=_=>{let S=-1/0,L=1/0,C=-1/0,P=1/0;for(let[O,N,R,B,W,H]of l){let Q=(_+R)*c,k=(_+R)*o;S=Math.max(S,O-(1-B)*Q),L=Math.min(L,O+(1-B)*Q),C=Math.max(C,N-(1-W)*k),P=Math.min(P,N+(1-H)*k)}return[S,L,C,P]},f=2,m=120;for(let _=0;_<30;_++){let S=(f+m)/2,[L,C,P,O]=x(S);L<=C&&P<=O?m=S:f=S}let[v,T,y,E]=x(m),w=this.center.clone().addScaledVector(r,(v+T)/2).addScaledVector(a,(y+E)/2);return{d:m,target:w,dir:n}}buildLabels(){let t={};try{t=JSON.parse(this.figure.dataset.marken||"{}")}catch{t={}}let e=(n,s,r)=>{if(!n)return;let a=document.createElement("span");a.className="s3d-marke",a.textContent=n,a.setAttribute("aria-hidden","true"),this.figure.appendChild(a),this.labels.push({el:a,anchor:s,at:r})};for(let n of this.devices)e(t[n.key],n.anchor,n.at+.16);e(t.core,this.coreAnchor,.86)}resize(){let t=Math.max(1,this.figure.clientWidth),e=Math.max(1,this.figure.clientHeight);this.w=t,this.h=e,this.renderer.setPixelRatio(this.ratio),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}reset(){this.playing=!1,this.progress=0,this.energy=0,this.gate=0,this.wave=2;for(let t of this.risers)t.userData.t=2;this.render()}start(){if(this.raf)return;let t=performance.now(),e=n=>{let s=(n-t)/1e3,r=Math.min(.05,s);t=n,this.time+=r,this.playing&&(this.progress=Math.min(1,this.progress+r/b_)),this.pointer.sx+=(this.pointer.x-this.pointer.sx)*(1-Math.exp(-r*3)),this.pointer.sy+=(this.pointer.y-this.pointer.sy)*(1-Math.exp(-r*3)),this.energy*=Math.exp(-r*2.2),this.watch(s),this.render(r),this.raf=requestAnimationFrame(e)};this.raf=requestAnimationFrame(e)}watch(t){this.frames>90||(this.frames+=1,!(this.frames<12)&&(t>.034&&(this.slow+=1),this.frames===90&&this.slow>30&&(this.bloom.enabled=!1,this.ratio=Math.min(this.ratio,1.25),this.renderer.shadowMap.enabled=this.slow<60,this.resize())))}stop(){cancelAnimationFrame(this.raf),this.raf=0}render(t=0){this.pose(t),this.draw()}pose(t){let e=this.progress,n=this.time;for(let d of this.devices){let l=On(d.at,d.at+.16,e);ol(d.obj,l),d.obj.position.y=ti(-.22,0,l),d.obj.scale.setScalar(ti(.96,1,l))}ol(this.dock.group,On(.26,.42,e));let s=On(.84,.96,e);for(let d of this.cables){let l=On(.34+d.at*.5,.62+d.at*.5,e);if(d.mesh.visible=l>0,d.mesh.geometry.setDrawRange(0,Math.floor(l*d.count/d.perSegment)*d.perSegment),d.ends.length&&(d.ends[0].visible=l>0,d.ends[1].visible=l>.98),!d.dots.length)continue;let g=(n*d.speed+d.phase)%1;if(s>.5&&g<d.last&&t>0){this.energy=Math.min(1,this.energy+(d.lit?.45:.28));let x=this.risers.find(f=>f.userData.t>=1);x&&(x.userData.t=0,this.gate=1),this.wave>=1&&(this.wave=0)}d.last=g;for(let x of d.dots){let f=g-(1-x.userData.k)*.035;x.visible=s>0&&f>.02,x.visible&&(x.position.copy(d.curve.getPointAt(Vr(f))),x.material.opacity=s*x.userData.k*Math.sin(Math.PI*Vr(f))**.5)}}let r=On(.58,.92,e);this.core.update(n,r,this.energy),this.coreLight.intensity=r*(3+this.energy*4);for(let d of this.dock.glow)d.opacity=(d.map?.16:1)*On(.5,.75,e)*(d.map?1+this.energy:1);for(let d of this.risers){t>0&&d.userData.t<1&&(d.userData.t+=t*1.6);let l=d.userData.t;d.visible=l<1&&r>.5,d.position.set(0,ti(.2,Us-vi*.6,l),0),d.material.opacity=Math.sin(Math.PI*Vr(l))}ol(this.lock.group,0),this.gate*=Math.exp(-t*3);for(let d of this.lock.glow)d.color.setHex(le).multiplyScalar(1.15+this.gate*1.1);this.ring.rotation.y=n*.05;let a=ti(.4,1,On(.1,.6,e));for(let d of this.marks)d.opacity=d.userData.strength*a;if(this.pool.opacity=r*(.7+this.energy*.3),t>0&&this.wave<1&&(this.wave+=t*.5),this.pulse.visible=this.wave<1&&r>.5,this.pulse.scale.setScalar(ti(.9,5.2,this.wave)),this.pulse.material.opacity=.55*(1-Vr(this.wave))**2,this.dust.visible=!1,t>0){let d=this.dust.geometry.attributes.position;for(let l=0;l<d.count;l++)d.setY(l,(d.getY(l)+t*(.05+l%7*.012))%5.5);d.needsUpdate=!0}if(t>0&&Math.random()<t*14){let d=this.rack.userData.leds,l=this.rack.userData.blink,g=l[Math.floor(Math.random()*l.length)];d.setColorAt(g,Math.random()<.6?new Ot(le):new Ot(4473924)),d.instanceColor.needsUpdate=!0}let o=On(0,1,e),c=(ti(-18,3,o)+3*Math.sin(n*.12)*o+this.pointer.sx*3)*mn,h=(ti(40,this.narrow?46:25,o)-this.pointer.sy*1.4)*mn,u=this.fit(c,h);this.camera.position.copy(u.target).addScaledVector(u.dir,u.d*ti(1.12,1,o)),this.camera.lookAt(u.target),this.camera.updateMatrixWorld(),this.lock.face.rotation.y=c;let p=new I;for(let d of this.labels){p.copy(d.anchor).project(this.camera);let l=On(d.at,d.at+.12,e);d.el.style.opacity=l.toFixed(3),d.el.style.transform=`translate3d(${((p.x*.5+.5)*this.w).toFixed(1)}px,${((-p.y*.5+.5)*this.h).toFixed(1)}px,0) translate(-50%,-100%)`}}draw(){this.progress!==this.shadowAt&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowAt=this.progress),this.bloom.enabled?this.composer.render():this.renderer.render(this.scene,this.camera)}};for(let i of document.querySelectorAll("[data-system3d]"))if(!i.dataset.s3dReady){i.dataset.s3dReady="1";try{i.s3d=new zc(i)}catch(t){console.warn("Systembild: 3D nicht verf\xFCgbar, Standbild bleibt.",t)}}})();
