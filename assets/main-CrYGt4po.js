var Tn=Object.defineProperty;var An=(a,r,e)=>r in a?Tn(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e;var S=(a,r,e)=>An(a,typeof r!="symbol"?r+"":r,e);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const Ln="/assets/emu-stu-logo-D3KqYaZd.png",At=Ln,vr="EMU-Stu",er="应急管理大学开源技术组织",Mn="技术服务校园，开源贡献社区",wt="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",Cn=[{label:"首页",href:"#",active:!0},{label:"技术博客",href:"/blog",active:!1}],Rn="https://github.com/EMU-Stu/EMU-Stu-Site",tr={related:[{label:"学校官网",href:"https://www.ncist.edu.cn/"},{label:"教务系统",href:"https://jwc.ncist.edu.cn/"},{label:"图书馆",href:"https://lib.ncist.edu.cn/"}],bottom:[{label:"想知道此网站是如何实现的？点击查看文章",href:Rn,underline:!0}]};class Nn extends HTMLElement{constructor(){super(...arguments);S(this,"_menuOpen",!1)}connectedCallback(){this.classList.add("sticky","top-0","z-50","block","w-full"),this.render(),this.setupEventListeners()}render(){const e=window.location.pathname.includes("/blog")||window.location.pathname.includes("/article"),t=Cn.map(i=>{let o=i.href,l=i.active;return e?i.label==="首页"?(o="/",l=!1):i.label==="技术博客"&&(o="#",l=!0):i.label==="首页"?(o="#",l=!0):i.label==="技术博客"&&(o="/blog",l=!1),{label:i.label,href:o,active:l}}),n=t.map(i=>`
      <a
        class="pb-1 border-b-2 font-label-md text-label-md transition-all duration-200 ${i.active?"text-primary dark:text-primary-fixed-dim border-primary dark:border-primary-fixed-dim":"text-on-surface-variant dark:text-surface-variant border-transparent hover:text-primary dark:hover:text-primary-fixed hover:border-primary/30 dark:hover:border-primary-fixed/30"}"
        href="${i.href}"
      >${i.label}</a>
    `).join(""),s=t.map(i=>`
      <a
        class="${i.active?"text-primary font-bold border-l-4 border-primary pl-4":"text-on-surface-variant hover:text-primary transition-colors duration-200 pl-5"} font-label-md text-label-md block py-3"
        href="${i.href}"
      >${i.label}</a>
    `).join("");this.innerHTML=`
      <header
        class="glass-panel w-full transition-all duration-300 shadow-sm"
        id="site-header"
      >
        <div class="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <!-- 品牌 -->
          <div class="flex items-center gap-3 cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
            <img
              alt="EMU-Stu Logo"
              class="h-12 w-auto object-contain transition-transform duration-300 hover:rotate-12"
              src="${At}"
            >
            <span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">
              ${vr}
            </span>
          </div>
 
          <!-- 桌面端导航链接 -->
          <nav class="hidden md:flex items-center gap-8" aria-label="主导航">
            ${n}
            <!-- 更多下拉菜单 -->
            <div class="relative group py-2">
              <button class="flex items-center gap-0.5 text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed pb-1 border-b-2 border-transparent hover:border-primary/30 dark:hover:border-primary-fixed/30 transition-all duration-200 font-label-md text-label-md cursor-pointer">
                <span>更多</span>
                <span class="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">keyboard_arrow_down</span>
              </button>
              <!-- 下拉菜单卡片 -->
              <div class="absolute right-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 w-44">
                <div class="bg-white dark:bg-[#191c1d] border border-outline-variant/30 rounded-2xl p-1.5 shadow-lg">
                  <a href="${e?"/#services-section":"#services-section"}" class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200">
                    <span class="material-symbols-outlined text-[18px]">grid_view</span>
                    <span>校园服务</span>
                  </a>
                  <div class="border-t border-outline-variant/20 my-1 mx-1"></div>
                  <a href="${e?"/#projects-section":"#projects-section"}" class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200">
                    <span class="material-symbols-outlined text-[18px]">terminal</span>
                    <span>开源项目</span>
                  </a>
                  <div class="border-t border-outline-variant/20 my-1 mx-1"></div>
                  <!-- TODO：不跳转页面，直接弹窗-->
                  <a href="#news-section" class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200">
                    <span class="material-symbols-outlined text-[18px]">campaign</span>
                    <span>开源交流群</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
 
          <!-- 操作按钮 -->
          <div class="flex items-center gap-4">
            <a
              href="https://github.com/EMU-Stu"
              target="_blank"
              class="flex bg-gradient-to-r from-primary to-[#003380] hover:from-[#003380] hover:to-primary text-on-primary font-label-md text-label-md p-2.5 md:px-5 md:py-2.5 rounded-xl transition-all duration-300 transform hover:scale-[1.03] shadow-md hover:shadow-lg items-center gap-2"
              id="header-github-btn"
              aria-label="GitHub"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="${wt}"/>
              </svg>
              <span class="hidden md:inline">GitHub</span>
            </a>
            <button
              class="md:hidden text-on-surface p-2 rounded-lg hover:bg-surface-container-high transition-colors"
              id="mobile-menu-toggle"
              aria-label="打开菜单"
              aria-expanded="false"
            >
              <span class="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
 
        <!-- 移动端菜单 -->
        <div
          class="md:hidden overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 border-t border-outline-variant/30"
          id="mobile-menu"
        >
          <nav class="py-4 px-margin-mobile bg-surface-container-lowest/90 backdrop-blur-md" aria-label="移动端导航">
            ${s}
            
            <!-- 移动端“更多”子导航 -->
            <div class="pl-5 py-2 border-l border-outline-variant/20 ml-2 mt-1 space-y-1">
              <span class="text-xs text-on-surface-variant/40 font-bold tracking-wider uppercase block mb-1">更多</span>
              <a href="${e?"/#services-section":"#services-section"}" class="flex items-center gap-2 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[16px] text-primary">grid_view</span>
                <span>校园服务</span>
              </a>
              <a href="${e?"/#projects-section":"#projects-section"}" class="flex items-center gap-2 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[16px] text-primary">terminal</span>
                <span>开源项目</span>
              </a>
              <a href="#news-section" class="flex items-center gap-2 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[16px] text-primary">campaign</span>
                <span>新闻活动</span>
              </a>
            </div>

            <div class="pt-4 mt-2 border-t border-outline-variant/30">
              <a
                href="https://github.com/EMU-Stu"
                target="_blank"
                class="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-[#003380] text-on-primary font-label-md text-label-md px-6 py-3 rounded-xl transition-all shadow-md"
                id="mobile-header-github-btn"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="${wt}"/>
                </svg>
                前往 GitHub
              </a>
            </div>
          </nav>
        </div>
      </header>
    `}setupEventListeners(){const e=this.querySelector("#mobile-menu-toggle"),t=this.querySelector("#mobile-menu");e==null||e.addEventListener("click",()=>{this._menuOpen=!this._menuOpen;const n=e.querySelector(".material-symbols-outlined");this._menuOpen?(t==null||t.classList.remove("max-h-0","opacity-0"),t==null||t.classList.add("max-h-[500px]","opacity-100"),n&&(n.textContent="close"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","关闭菜单")):(t==null||t.classList.add("max-h-0","opacity-0"),t==null||t.classList.remove("max-h-[500px]","opacity-100"),n&&(n.textContent="menu"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","打开菜单"))})}}customElements.define("emu-header",Nn);class $n extends HTMLElement{constructor(){super(...arguments);S(this,"_dialog",null);S(this,"_titleElement",null)}static get observedAttributes(){return["max-width","subtitle","title"]}attributeChangedCallback(e,t,n){t!==n&&this.update()}connectedCallback(){this.render()}get titleText(){return this.getAttribute("title")||""}set titleText(e){this.setAttribute("title",e)}showModal(){this._dialog&&(this._dialog.showModal(),document.body.style.overflow="hidden")}close(){this._dialog&&this._dialog.close()}update(){const e=this.getAttribute("title")||"",t=this.getAttribute("subtitle")||"",n=this.getAttribute("max-width")||"max-w-2xl";this._titleElement&&(this._titleElement.textContent=e);const s=this.querySelector(".dialog-subtitle");s&&(s.textContent=t,t?s.removeAttribute("style"):s.setAttribute("style","display: none;")),this._dialog&&(this._dialog.className=`bg-[#f5f6f8] dark:bg-[#151718] text-on-surface p-0 shadow-2xl ${n} w-[90%] md:w-full rounded-2xl border border-outline/10 dark:border-outline-variant/10 focus:outline-none overflow-hidden`)}render(){if(this._dialog)return;const e=this.getAttribute("title")||"",t=this.getAttribute("subtitle")||"",n=this.getAttribute("max-width")||"max-w-2xl",s=Array.from(this.childNodes);this.innerHTML="";const i=document.createElement("dialog");i.className=`bg-[#f5f6f8] dark:bg-[#151718] text-on-surface p-0 shadow-2xl ${n} w-[90%] md:w-full rounded-2xl border border-outline/10 dark:border-outline-variant/10 focus:outline-none overflow-hidden`,this._dialog=i;const o=document.createElement("div");o.className="relative p-6 md:p-8 flex flex-col items-center";const l=document.createElement("button");l.className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest/50 hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all duration-200 focus:outline-none z-10 cursor-pointer",l.setAttribute("aria-label","关闭浮窗"),l.innerHTML='<span class="material-symbols-outlined text-[20px]">close</span>',l.addEventListener("click",()=>this.close()),o.appendChild(l);const d=document.createElement("div");d.className="text-center mb-8";const u=document.createElement("span");u.className="dialog-subtitle text-xs font-bold tracking-wider text-primary/70 dark:text-primary-fixed-dim/70 uppercase mb-1 block font-mono",u.textContent=t,t||(u.style.display="none"),d.appendChild(u);const p=document.createElement("h3");p.className="text-2xl font-extrabold text-on-surface tracking-tight",p.textContent=e,this._titleElement=p,d.appendChild(p),o.appendChild(d);const h=document.createElement("div");h.className="w-full flex flex-col items-center",s.forEach(g=>h.appendChild(g)),o.appendChild(h);const x=document.createElement("div");x.className="text-center w-full mt-6 pt-4 border-t border-outline-variant/10",x.innerHTML='<p class="text-[10px] text-on-surface-variant/60 font-mono">Powered by EMU-Stu 开源技术组织</p>',o.appendChild(x),i.appendChild(o),this.appendChild(i),i.addEventListener("close",()=>{document.body.style.overflow="",this.dispatchEvent(new CustomEvent("close"))}),i.addEventListener("click",g=>{g.target===i&&this.close()})}}customElements.define("emu-float",$n);const rr="emu-lightbox-styles";function On(){if(document.getElementById(rr))return;const a=document.createElement("style");a.id=rr,a.textContent=`
      .emu-lightbox-dialog {
        padding: 0;
        margin: 0;
        border: none;
        background: transparent;
        width: 100vw;
        height: 100dvh;
        max-width: 100vw;
        max-height: 100dvh;
        overflow: hidden;
        opacity: 0;
        transition: opacity 0.25s ease, overlay 0.25s ease allow-discrete, display 0.25s ease allow-discrete;
      }
      .emu-lightbox-dialog[open] {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
      }
      @starting-style {
        .emu-lightbox-dialog[open] { opacity: 0; }
      }
      .emu-lightbox-dialog::backdrop {
        background: rgba(0, 0, 0, 0.78);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        opacity: 0;
        transition: opacity 0.25s ease, overlay 0.25s ease allow-discrete, display 0.25s ease allow-discrete;
      }
      .emu-lightbox-dialog[open]::backdrop { opacity: 1; }
      @starting-style {
        .emu-lightbox-dialog[open]::backdrop { opacity: 0; }
      }
      .emu-lightbox-img {
        max-width: 92vw;
        max-height: 92dvh;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45);
        touch-action: none;
        -webkit-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        will-change: transform;
        cursor: default;
      }
      .emu-lightbox-close {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.15);
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s ease;
        z-index: 1;
      }
      .emu-lightbox-close:hover { background: rgba(255, 255, 255, 0.3); }
    `,document.head.appendChild(a)}class In extends HTMLElement{constructor(){super(...arguments);S(this,"_open",()=>{});S(this,"_close",()=>{})}connectedCallback(){this.dataset.ready||(this.dataset.ready="1",On(),this._build())}open(e,t=""){this._open(e,t)}close(){this._close()}_build(){this.style.display="contents";const e=document.createElement("dialog");e.className="emu-lightbox-dialog";const t=document.createElement("button");t.className="emu-lightbox-close",t.setAttribute("aria-label","关闭图片预览"),t.innerHTML='<span class="material-symbols-outlined" style="font-size:28px;">close</span>';const n=document.createElement("img");n.className="emu-lightbox-img",n.alt="",e.appendChild(t),e.appendChild(n),this.appendChild(e);const s=5;let i=1,o=0,l=0,d="none",u=0,p=0,h=0,x=0,g=0,m=0,y=0,L=!1,A=0,O=0,F=0,q="";const j=(C=!1)=>{n.style.transition=C?"transform 0.25s ease":"none",n.style.transform=`translate(${o}px, ${l}px) scale(${i})`},Z=()=>{const C=Math.max(0,(n.clientWidth*i-window.innerWidth)/2),N=Math.max(0,(n.clientHeight*i-window.innerHeight)/2);o=Math.min(C,Math.max(-C,o)),l=Math.min(N,Math.max(-N,l))},Q=()=>{i=1,o=0,l=0,d="none",n.style.transition="",n.style.transform=""},pe=(C,N,K,ee=!1)=>{const re=Math.min(s,Math.max(1,K)),he=window.innerWidth/2,le=window.innerHeight/2,ce=re/i;o=(C-he)*(1-ce)+ce*o,l=(N-le)*(1-ce)+ce*l,i=re,i<=1.001&&(i=1,o=0,l=0),Z(),j(ee)};this._open=(C,N)=>{n.src=C,n.alt=N||"",Q(),e.open||(q=document.body.style.overflow,document.body.style.overflow="hidden",e.showModal())},this._close=()=>{e.open&&e.close()},e.addEventListener("close",()=>{document.body.style.overflow=q,Q()}),t.addEventListener("click",()=>this._close()),e.addEventListener("click",C=>{C.target===e&&this._close()}),n.addEventListener("touchstart",C=>{if(C.touches.length===2){d="pinch",L=!0;const N=C.touches[0],K=C.touches[1];u=Math.hypot(K.clientX-N.clientX,K.clientY-N.clientY),p=(N.clientX+K.clientX)/2,h=(N.clientY+K.clientY)/2,C.preventDefault()}else if(C.touches.length===1){const N=C.touches[0];m=x=N.clientX,y=g=N.clientY,L=!1,d=i>1?"pan":"none"}},{passive:!1}),n.addEventListener("touchmove",C=>{if(d==="pinch"&&C.touches.length>=2){const N=C.touches[0],K=C.touches[1],ee=Math.hypot(K.clientX-N.clientX,K.clientY-N.clientY),re=(N.clientX+K.clientX)/2,he=(N.clientY+K.clientY)/2;o+=re-p,l+=he-h;const le=Math.min(s,Math.max(1,i*ee/u)),ce=window.innerWidth/2,P=window.innerHeight/2,I=le/i;o=(re-ce)*(1-I)+I*o,l=(he-P)*(1-I)+I*l,i=le,u=ee,p=re,h=he,Z(),j(!1),C.preventDefault()}else if(d==="pan"&&C.touches.length===1){const N=C.touches[0];o+=N.clientX-x,l+=N.clientY-g,x=N.clientX,g=N.clientY,(Math.abs(N.clientX-m)>6||Math.abs(N.clientY-y)>6)&&(L=!0),Z(),j(!1),C.preventDefault()}},{passive:!1}),n.addEventListener("touchend",C=>{if(C.touches.length===0){const N=d==="pinch";if(d="none",!N&&!L){const K=Date.now(),ee=C.changedTouches[0];if(K-A<300&&Math.abs(ee.clientX-O)<30&&Math.abs(ee.clientY-F)<30){i>1?Q():pe(ee.clientX,ee.clientY,2.5,!0),A=0;return}A=K,O=ee.clientX,F=ee.clientY}i<=1.001?Q():(Z(),j(!0))}else if(C.touches.length===1){const N=C.touches[0];m=x=N.clientX,y=g=N.clientY,d=i>1?"pan":"none"}},{passive:!1}),n.addEventListener("wheel",C=>{C.preventDefault();const N=Math.exp(-C.deltaY*.0015);pe(C.clientX,C.clientY,i*N,!1)},{passive:!1})}}customElements.define("emu-lightbox",In);let Be=null;function yr(a,r=""){(!Be||!Be.isConnected)&&(Be=document.createElement("emu-lightbox"),document.body.appendChild(Be)),Be.open(a,r)}class Dn extends HTMLElement{connectedCallback(){this.render()}render(){const r=this.querySelector('[slot="content"]'),e=Array.from(this.childNodes).filter(d=>d!==r);this.innerHTML="",this.style.display||(this.style.display="inline-block"),this.style.verticalAlign||(this.style.verticalAlign="middle");const t=document.createElement("div");t.className="relative inline-flex items-center group/tooltip",e.forEach(d=>t.appendChild(d));const n=document.createElement("div");n.className="fixed p-3 bg-white dark:bg-[#1e2124] text-on-surface border border-outline-variant/30 dark:border-[#2f3336] rounded-xl shadow-lg invisible opacity-0 pointer-events-none transition-opacity duration-200 z-50 min-w-[260px] max-w-[calc(100vw-24px)] text-left text-xs whitespace-normal font-sans normal-case after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-2";const s=document.createElement("div");if(s.className="absolute top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-[#1e2124]",n.appendChild(s),r)r.removeAttribute("slot"),n.appendChild(r);else{const d=this.getAttribute("text")||"",u=document.createElement("span");u.textContent=d,n.appendChild(u)}t.appendChild(n),this.appendChild(t);let i=!1;const o=()=>{i=!0;const u=(t.firstElementChild||t).getBoundingClientRect();n.style.visibility="hidden",n.style.transition="none",n.style.position="fixed",n.style.left="-9999px",n.style.top="-9999px",n.style.transform="none";const p=n.getBoundingClientRect(),h=window.innerWidth||document.documentElement.clientWidth,x=u.left+(u.width-p.width)/2,g=u.top-p.height-8;let m=Math.max(12,x);m+p.width>h-12&&(m=h-12-p.width),n.style.left=`${m}px`,n.style.top=`${g}px`;const L=u.left+u.width/2-m,A=16,O=p.width-16,F=Math.max(A,Math.min(O,L));s.style.left=`${F}px`,s.style.transform="translateX(-50%)",requestAnimationFrame(()=>{requestAnimationFrame(()=>{i&&(n.style.transition="",n.style.visibility="visible",n.style.opacity="1",n.style.pointerEvents="auto")})})},l=()=>{i=!1,n.style.transition="",n.style.opacity="0",n.style.pointerEvents="none",setTimeout(()=>{i||(n.style.visibility="hidden")},200)};t.addEventListener("mouseenter",o),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mouseleave",l)}}customElements.define("emu-tooltip",Dn);class Pn extends HTMLElement{connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
      <section
        class="relative bg-gradient-to-br from-primary via-[#0a2e6b] to-[#001233] py-28 md:py-44 px-margin-mobile md:px-margin-desktop text-center overflow-hidden text-white"
        id="hero-section"
      >
        <!-- 霓虹模糊光晕背景装饰 -->
        <div class="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#385ba9]/15 blur-3xl pointer-events-none"></div>
        
        <!-- 背景轻微网孔图案（做叠加） -->
        <div class="absolute inset-0 hero-pattern opacity-5 mix-blend-overlay"></div>

        <!-- 水印 Logo -->
        <img
          alt="Watermark"
          class="absolute -right-20 top-20 opacity-5 w-[500px] h-auto pointer-events-none select-none"
          src="${At}"
        >

        <!-- 内容区 -->
        <div id="hero-content-wrapper" class="relative z-10 max-w-container-max mx-auto flex flex-col items-center transition-all duration-1000 ease-in-out">
          <h1
            class="font-headline-xl text-headline-xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 mb-4 max-w-4xl font-extrabold leading-tight tracking-tight"
          >
            应急管理大学开源技术组织
          </h1>
          <h2
            class="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary-fixed-dim to-white bg-clip-text text-transparent mb-8"
          >
            EMU-Stu
          </h2>
          <p class="font-body-lg text-body-lg text-blue-100/80 max-w-2xl mb-12 text-lg md:text-xl leading-relaxed">
            面向实验室、开源项目与技术协作的学生组织。<br>一起构建项目、分享想法、共同成长。
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <button
              class="flex items-center gap-2 bg-gradient-to-r from-primary-fixed-dim to-white text-primary font-bold font-label-md text-label-md px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300"
              id="hero-join-btn"
            >
              <span class="material-symbols-outlined text-[20px]">group_add</span>
              加入我们
            </button>
            <button
              class="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-label-md text-label-md px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-300"
              id="hero-portals-btn"
            >
              <span class="material-symbols-outlined text-[20px]">widgets</span>
              校园服务
            </button>
            <button
              class="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-label-md text-label-md px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-300"
              id="hero-projects-btn"
            >
              <span class="material-symbols-outlined text-[20px]">code</span>
              开源项目
            </button>
            <button
              class="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-label-md text-label-md px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-300"
              id="hero-labs-btn"
            >
              <span class="material-symbols-outlined text-[20px]">science</span>
              实验室介绍
            </button>

          </div>
        </div>

        <!-- 彩蛋标语展示容器 -->
        <div id="hero-easter-egg-container" class="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none opacity-0 transition-all duration-1000 ease-in-out translate-y-8"></div>
      </section>
    `}setupEventListeners(){const r=this.querySelector("#hero-join-btn"),e=this.querySelector("#hero-projects-btn"),t=this.querySelector("#hero-portals-btn"),n=this.querySelector("#hero-labs-btn");r==null||r.addEventListener("click",()=>{var s;(s=document.querySelector("#about-section"))==null||s.scrollIntoView({behavior:"smooth"})}),e==null||e.addEventListener("click",()=>{var s;(s=document.querySelector("#projects-section"))==null||s.scrollIntoView({behavior:"smooth"})}),t==null||t.addEventListener("click",()=>{var s;(s=document.querySelector("#services-section"))==null||s.scrollIntoView({behavior:"smooth"})}),n==null||n.addEventListener("click",()=>{var s;(s=document.querySelector("#labs-section"))==null||s.scrollIntoView({behavior:"smooth"})})}}customElements.define("emu-hero",Pn);const Bn="/assets/2025-2026-calendar--jsKTcZs.jpg",Hn=Object.freeze(Object.defineProperty({__proto__:null,default:Bn},Symbol.toStringTag,{value:"Module"})),zn="/assets/2025-2026-schedule-OcUtbm2V.jpg",jn=Object.freeze(Object.defineProperty({__proto__:null,default:zn},Symbol.toStringTag,{value:"Module"})),Un=[{icon:"restaurant",title:"校园食堂",description:"今日吃什么？查看各大食堂菜谱与就餐反馈",href:"#",soon:!1},{icon:"diversity_3",title:"校园社团",description:"了解校园缤纷社团，发现你的兴趣所在",href:"#",soon:!1},{icon:"map",title:"校园地图",description:"手绘与数字校园地图，快速定位教学楼与宿舍",href:"#"},{icon:"download",title:"资料下载",description:"校园常用表格、课件、软件及办公模版快速下载",href:"#"},{icon:"calendar_month",title:"校历查询",description:"查看最新学期安排，合理规划学习与假期时间",href:"#calendar"}],nr={newFeatureRequest:"https://acnpe6t9x5o7.feishu.cn/share/base/form/shrcn3EmVQLykJnNfFimFwNGRsg",featureFeedback:"https://acnpe6t9x5o7.feishu.cn/share/base/form/shrcn5HRkWpziz9ddvthLFAqbQE"},qn="/assets/survey-qrcode-feature-feedbck-CXXN6x3o.png",Gn="/assets/survey-qrcode-new-feature-request-DULuK1K3.png",ar=Object.assign({"../../assets/university_calendar/2025-2026-calendar.jpg":Hn,"../../assets/university_calendar/2025-2026-schedule.jpg":jn});class Fn extends HTMLElement{connectedCallback(){this.render(),this.initFeedbackDialog(),this.initCalendarDialog()}render(){const r=Un.map(e=>`
      <emu-service-card
        icon="${e.icon}"
        title="${e.title}"
        description="${e.description}"
        href="${e.href}"
        soon="${"soon"in e&&e.soon?"true":"false"}"
      ></emu-service-card>
    `).join("");this.innerHTML=`
      <section class="py-20 px-margin-mobile md:px-margin-desktop relative" id="portals-container">
        <!-- 装饰性光晕背景（浅） -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

        <div class="max-w-container-max mx-auto relative z-10">
          <!-- 头部标题栏（对齐开源项目模块） -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span class="text-xs md:text-sm font-bold tracking-wider text-primary/70 dark:text-primary-fixed-dim/70 uppercase mb-2 block font-mono">
                Campus Service
              </span>
              <h2 class="font-headline-lg text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none mb-2 select-all">
                校园服务
              </h2>
            </div>
            
            <!-- 统计信息与外链操作 -->
            <div class="flex flex-col items-start md:items-end gap-3">
              <p class="text-xs md:text-sm text-on-surface-variant/80 leading-relaxed text-left md:text-right max-w-md">
                想要更多校园服务？请点击：
              </p>

              <a
                href="#"
                id="feedback-trigger"
                class="inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-primary-fixed hover:underline group/link cursor-pointer"
              >
                请求/反馈服务
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">
                  north_east
                </span>
              </a>
            </div>
          </div>

          <!-- 卡片网格（移动端展示为 2 列） -->
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            ${r}
          </div>
        </div>
      </section>

      <!-- 反馈与需求弹窗 -->
      <emu-float
        id="feedback-dialog"
        max-width="max-w-3xl"
        subtitle="Feedback & Request"
        title="请求与反馈服务"
      >
        <!-- 二维码网格布局 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          <!-- 新功能请求 -->
          <a
            href="${nr.newFeatureRequest}"
            target="_blank"
            class="flex flex-col items-center group cursor-pointer w-full max-w-[280px] md:max-w-[320px] transition-transform duration-300"
          >
            <div class="overflow-hidden rounded-2xl shadow-md border border-outline-variant/10 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300 bg-white">
              <img
                src="${Gn}"
                alt="新功能请求"
                class="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <p class="text-xs text-on-surface-variant/80 mt-3 flex items-center gap-1 text-center group-hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-[14px]">open_in_new</span>
              点击或扫码提交新服务请求
            </p>
          </a>

          <!-- 功能反馈 -->
          <a
            href="${nr.featureFeedback}"
            target="_blank"
            class="flex flex-col items-center group cursor-pointer w-full max-w-[280px] md:max-w-[320px] transition-transform duration-300"
          >
            <div class="overflow-hidden rounded-2xl shadow-md border border-outline-variant/10 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300 bg-white">
              <img
                src="${qn}"
                alt="功能反馈"
                class="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <p class="text-xs text-on-surface-variant/80 mt-3 flex items-center gap-1 text-center group-hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-[14px]">open_in_new</span>
              点击或扫码提交功能反馈
            </p>
          </a>
        </div>
      </emu-float>

      <!-- 校历与作息表弹窗 -->
      <emu-float
        id="calendar-dialog"
        max-width="max-w-4xl"
        subtitle="University Calendar & Schedule"
        title="大学校历与作息表"
      >
        <!-- 控制器区域 (学年与类型切换) -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 w-full mb-6">
          <!-- 学年选择 (Chevron Selector) -->
          <div class="flex items-center gap-3 bg-[#e8eaed] dark:bg-[#25282a] px-3 py-1.5 rounded-full border border-outline/10 select-none w-full sm:w-auto justify-between sm:justify-start">
            <!-- Prev Tooltip Wrapper -->
            <div class="relative group/tooltip">
              <button
                id="btn-year-prev"
                class="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 cursor-pointer shadow-sm focus:outline-none text-on-surface"
                aria-label="前一年"
              >
                <span class="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <div id="tooltip-prev" class="hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-neutral-900/90 text-white text-[10px] rounded shadow-lg pointer-events-none whitespace-nowrap z-50 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200">
                没有更老的数据了
              </div>
            </div>
            
            <span id="calendar-year-label" class="text-xs font-bold text-on-surface min-w-[100px] text-center tracking-tight">学年加载中...</span>
            
            <!-- Next Tooltip Wrapper -->
            <div class="relative group/tooltip">
              <button
                id="btn-year-next"
                class="flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 cursor-pointer shadow-sm focus:outline-none text-on-surface"
                aria-label="后一年"
              >
                <span class="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
              <div id="tooltip-next" class="hidden absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-neutral-900/90 text-white text-[10px] rounded shadow-lg pointer-events-none whitespace-nowrap z-50 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200">
                没有更新的数据了
              </div>
            </div>
          </div>

          <!-- 类型选择 (Segmented Control) -->
          <div class="flex rounded-full bg-[#e8eaed] dark:bg-[#25282a] p-1 border border-outline/10 select-none w-full sm:w-auto">
            <button
              data-type="calendar"
              class="type-toggle-btn flex-1 sm:flex-initial px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer text-on-surface-variant/80 hover:text-on-surface"
            >
              大学校历
            </button>
            <button
              data-type="schedule"
              class="type-toggle-btn flex-1 sm:flex-initial px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer text-on-surface-variant/80 hover:text-on-surface"
            >
              作息时间表
            </button>
          </div>
        </div>

        <!-- 校历图片展示区 -->
        <div class="w-full overflow-y-auto max-h-[65vh] rounded-xl border border-outline-variant/10 bg-white flex justify-center p-2 mb-6 shadow-inner">
          <img
            id="calendar-img"
            src=""
            alt="学校校历"
            class="max-w-full h-auto object-contain rounded-lg transition-opacity duration-200 opacity-0 cursor-zoom-in"
          />
        </div>

        <!-- 下载/保存按钮及提示 -->
        <div class="flex flex-col items-center gap-3 w-full">
          <button
            id="calendar-download-btn"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container dark:bg-primary-fixed dark:text-on-primary hover:shadow-lg transition-all duration-200 cursor-pointer text-sm font-bold shadow-md focus:outline-none"
          >
            <span class="material-symbols-outlined text-[18px]">download</span>
            保存图片
          </button>
          <p class="text-[10px] text-on-surface-variant/60">
            提示：在手机端长按图片亦可直接保存至相册
          </p>
        </div>
      </emu-float>
    `}initFeedbackDialog(){const r=this.querySelector("#feedback-trigger"),e=this.querySelector("#feedback-dialog");!r||!e||r.addEventListener("click",t=>{t.preventDefault(),e.showModal()})}initCalendarDialog(){const r=this.querySelector("#calendar-dialog"),e=this.querySelector("#calendar-download-btn"),t=this.querySelector("#calendar-img"),n=this.querySelector("#calendar-year-label"),s=this.querySelector("#btn-year-prev"),i=this.querySelector("#btn-year-next"),o=this.querySelector("#tooltip-prev"),l=this.querySelector("#tooltip-next");if(!r)return;t==null||t.addEventListener("click",()=>{t.src&&yr(t.src,t.alt)});const d={};for(const m in ar){const L=(m.split("/").pop()||"").match(/^(\d{4}-\d{4})-(calendar|schedule)\.(png|jpg|jpeg|webp)$/i);if(L){const A=L[1],O=L[2].toLowerCase(),F=L[3],q=ar[m].default;d[A]||(d[A]={});const j=O==="calendar"?"校历":"作息时间表";d[A][O]={src:q,filename:`EMU-NCIST-${A}-${O.charAt(0).toUpperCase()+O.slice(1)}.${F}`,label:`${A} 学年 ${j}`}}}const u=Object.keys(d).sort((m,y)=>y.localeCompare(m));let p=0,h="calendar";const x=(m=!1)=>{if(u.length===0){n&&(n.textContent="暂无数据");return}const y=u[p];n&&(n.textContent=`${y} 学年`);const L=d[y];if(!L)return;let A=h;if(!L[A]){const Z=Object.keys(L)[0];Z&&(A=Z)}const O=L[A];if(!O||!t)return;this.querySelectorAll(".type-toggle-btn").forEach(Z=>{const Q=Z.getAttribute("data-type")||"",pe=!!L[Q];Z.classList.remove("bg-white","dark:bg-[#323639]","text-primary","dark:text-primary-fixed-dim","shadow-sm"),Z.classList.add("text-on-surface-variant/80","hover:text-on-surface"),pe?(Z.removeAttribute("disabled"),Z.classList.remove("opacity-40","cursor-not-allowed"),Q===A&&(Z.classList.remove("text-on-surface-variant/80","hover:text-on-surface"),Z.classList.add("bg-white","dark:bg-[#323639]","text-primary","dark:text-primary-fixed-dim","shadow-sm"))):(Z.setAttribute("disabled","true"),Z.classList.add("opacity-40","cursor-not-allowed"))});const q=p===u.length-1,j=p===0;s&&(q?(s.setAttribute("disabled","true"),s.classList.add("opacity-30","cursor-not-allowed"),s.classList.remove("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),s.classList.add("bg-transparent"),o&&o.classList.remove("hidden")):(s.removeAttribute("disabled"),s.classList.remove("opacity-30","cursor-not-allowed","bg-transparent"),s.classList.add("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),o&&o.classList.add("hidden"))),i&&(j?(i.setAttribute("disabled","true"),i.classList.add("opacity-30","cursor-not-allowed"),i.classList.remove("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),i.classList.add("bg-transparent"),l&&l.classList.remove("hidden")):(i.removeAttribute("disabled"),i.classList.remove("opacity-30","cursor-not-allowed","bg-transparent"),i.classList.add("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),l&&l.classList.add("hidden"))),m?(t.src=O.src,t.alt=O.label,t.classList.remove("opacity-0"),r.titleText=O.label):(t.style.opacity="0.3",setTimeout(()=>{t.src=O.src,t.alt=O.label,r.titleText=O.label,t.style.opacity="1"},100))};this.addEventListener("click",m=>{const y=m.target.closest("a");y&&y.getAttribute("href")==="#calendar"&&(m.preventDefault(),r.showModal(),x(!0))}),s&&s.addEventListener("click",m=>{m.preventDefault(),p<u.length-1&&(p++,x())}),i&&i.addEventListener("click",m=>{m.preventDefault(),p>0&&(p--,x())}),this.querySelectorAll(".type-toggle-btn").forEach(m=>{m.addEventListener("click",y=>{const A=y.currentTarget.getAttribute("data-type");A&&A!==h&&(h=A,x())})}),e&&e.addEventListener("click",m=>{if(m.preventDefault(),u.length===0)return;const y=u[p],L=d[y];if(!L)return;let A=h;if(!L[A]){const q=Object.keys(L)[0];q&&(A=q)}const O=L[A];if(!O)return;const F=document.createElement("a");F.href=O.src,F.download=O.filename,document.body.appendChild(F),F.click(),document.body.removeChild(F)})}}customElements.define("emu-services",Fn);class Zn extends HTMLElement{constructor(){super(...arguments);S(this,"handleClick",e=>{this.getAttribute("soon")==="true"&&e.preventDefault()})}static get observedAttributes(){return["icon","title","description","href","soon"]}connectedCallback(){this.style.display="block",this.render(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}attributeChangedCallback(){this.isConnected&&this.render()}render(){const e=this.getAttribute("icon")||"help",t=this.getAttribute("title")||"",n=this.getAttribute("description")||"",s=this.getAttribute("href")||"#",i=this.getAttribute("soon")==="true",o=i?"group flex flex-col items-center justify-center text-center gap-2 md:gap-4 h-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-4 md:p-8 shadow-sm relative overflow-hidden cursor-not-allowed select-none opacity-60":"group flex flex-col items-center justify-center text-center gap-2 md:gap-4 h-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 md:p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden",l=i?"":'<div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>',d=i?"w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container/60 text-secondary/70 flex items-center justify-center relative z-10":"w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary group-hover:scale-110 transition-all duration-300 relative z-10",u=i?"font-headline-md font-bold text-base md:text-headline-md text-on-surface/70 relative z-10":"font-headline-md font-bold text-base md:text-headline-md text-on-surface relative z-10 group-hover:text-primary transition-colors duration-300",p=i?"text-xs md:text-sm text-on-surface-variant/60 relative z-10 line-clamp-2 max-w-[240px] leading-relaxed":"text-xs md:text-sm text-on-surface-variant/80 relative z-10 line-clamp-2 max-w-[240px] leading-relaxed",h=i?`
        <div class="absolute top-1.5 right-1.5 md:top-3 md:right-3 bg-secondary-container text-on-secondary-container text-[8px] md:text-[10px] font-semibold px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full select-none border border-outline-variant/40 z-20">
          即将推出
        </div>
      `:"";this.innerHTML=`
      <a
        class="${o}"
        href="${i?"#":s}"
      >
        <!-- 悬浮渐变遮罩 -->
        ${l}

        <!-- 静态即将推出 Badge -->
        ${h}

        <!-- 图标容器 -->
        <div class="${d}">
          <span class="material-symbols-outlined text-xl md:text-3xl">${e}</span>
        </div>

        <!-- 标题 -->
        <h3 class="${u}">${t}</h3>

        <!-- 一句话介绍 -->
        ${n?`
          <p class="${p}">
            ${n}
          </p>
        `:""}
      </a>
    `}}customElements.define("emu-service-card",Zn);const Xn=[{name:"EmergencyTeleoperatedRobotSystem-Jetson",description:"应急遥操作机器人系统 Jetson 端：机器人主控核心，负责为客户端提供三维场景重建与目标检测功能，以及接收和处理来自客户端的控制指令。",languages:["C++","Python"],stars:48,color:"#3572A5",href:"https://github.com/EMU-Stu/EmergencyTeleoperatedRobotSystem-Jetson"},{name:"EmergencyTeleoperatedRobotSystem-Unity",description:"应急遥操作机器人系统 Unity 端：机器人控制客户端，基于 MRTK 框架并面向 HoloLens 2 平台开发，提供 3D 虚拟孪生、遥操作与三维现场呈现。",languages:["C#"],stars:62,color:"#178600",href:"https://github.com/EMU-Stu/EmergencyTeleoperatedRobotSystem-Unity"},{name:"skills",description:"校园相关 Agent Skills。",languages:["Markdown"],stars:128,color:"#083fa6",href:"https://github.com/EMU-Stu/skills"},{name:"EMU-Stu-Site",description:"EMU-Stu 官网源码。",languages:["TypeScript","HTML","CSS"],stars:35,color:"#3178c6",href:"https://github.com/EMU-Stu/EMU-Stu-Site"},{name:"EMU-Stu-Blog",description:"EMU-Stu 技术博客的内容仓库，包含所有的文章 Markdown 源文件与相关静态资源，欢迎你的投稿。",languages:["Markdown"],stars:28,color:"#083fa6",href:"https://github.com/EMU-Stu/EMU-Stu-Blog"},{name:"CUEDC-2024-Drone-code",description:"2024 年全国大学生电子设计竞赛无人机赛题方案。基于 Fast-LIO 激光 SLAM 实现室内自主定位，融合 PX4 飞控、STM32 下位机路径规划 与 OpenMV 视觉识别，完成自主航点飞行与目标检测任务。",languages:["C"],stars:56,color:"#555555",href:"https://github.com/EMU-Stu/CUEDC-2024-Drone-code"},{name:"IOT-lab-web",description:"物联网实验室实验室门户站点，基于 Next.js + Tailwind 的纯前端实验室站点，包含新生导览、毕业路径文章与项目索引。",languages:["TypeScript","CSS","JavaScript"],stars:0,color:"#3178c6",href:"https://github.com/EMU-Stu/IOT-lab-web"}];class Yn extends HTMLElement{constructor(){super(...arguments);S(this,"_displayedProjects",[])}connectedCallback(){this.shuffleProjects(),this.render(),this.loadCommitStats(),this.setupEventListeners()}shuffleProjects(){const e=[...Xn];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}this._displayedProjects=e.slice(0,4)}getLanguageColor(e,t){return{TypeScript:"#3178c6",JavaScript:"#f1e05a",HTML:"#e34c26",CSS:"#563d7c","C#":"#178600","C++":"#f34b7d",C:"#555555",Python:"#3572A5",Markdown:"#083fa6"}[e]||t}generateCardHtml(e){const t=e.languages.map(n=>`
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full" style="background-color: ${this.getLanguageColor(n,e.color)}"></span>
          <span>${n}</span>
        </div>
      `).join("");return`
      <a
        href="${e.href}"
        target="_blank"
        class="block border border-outline-variant/20 rounded-2xl p-6 bg-surface-container-lowest hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[170px] relative group cursor-pointer"
      >
        <div>
          <!-- 头部：GitHub 图标与项目名 -->
          <div class="flex items-center justify-between gap-4 mb-3 min-w-0">
            <div class="flex items-center gap-2 text-on-surface-variant min-w-0">
              <svg class="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                <path d="${wt}"/>
              </svg>
              <span class="font-mono text-sm tracking-tight text-on-surface-variant/80 flex-shrink-0">emu-stu /</span>
              <span class="font-mono font-bold text-primary group-hover:underline truncate" title="${e.name}">${e.name}</span>
            </div>
            
            <!-- 斜箭头外链图标 -->
            <span class="material-symbols-outlined text-[18px] text-on-surface-variant/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0">
              north_east
            </span>
          </div>
          
          <!-- 项目介绍 -->
          <p class="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-2">
            ${e.description}
          </p>
        </div>

        <!-- 底部栏：开发语言 -->
        <div class="flex items-center gap-4 pt-3 border-t border-outline-variant/10 text-xs text-on-surface-variant/70 font-mono flex-wrap">
          ${t}
        </div>
      </a>
    `}render(){const e=this._displayedProjects.map(t=>this.generateCardHtml(t)).join("");this.innerHTML=`
      <section class="py-20 px-margin-mobile md:px-margin-desktop relative" id="projects-container">
        <div class="max-w-container-max mx-auto">
          <!-- 头部标题栏 -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div class="flex items-center gap-3 mb-2 flex-wrap select-none">
                <span class="text-xs md:text-sm font-bold tracking-wider text-primary/70 dark:text-primary-fixed-dim/70 uppercase font-mono">
                  Open Source
                </span>
                <button 
                  id="view-heatmap-btn" 
                  class="inline-flex items-center gap-1.5 text-[10px] md:text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-2.5 py-0.5 rounded-full font-semibold transition-all cursor-pointer select-none border border-emerald-500/20 active:scale-95"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  组织活跃热力图
                </button>
              </div>
              <h2 class="font-mono text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none mb-2 select-all">
                <a href="https://github.com/emu-stu" target="_blank" class="inline-flex items-center gap-2 text-on-surface hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-300 group/gh">
                  github.com/emu-stu
                  <span class="material-symbols-outlined text-[0.6em] opacity-0 -translate-x-1 group-hover/gh:opacity-100 group-hover/gh:translate-x-0 transition-all duration-300">north_east</span>
                </a>
              </h2>
            </div>
            
            <!-- 组织数据统计信息与外链 -->
            <div class="flex flex-col items-start md:items-end">
              <p class="text-xs md:text-sm text-on-surface-variant/80 leading-relaxed text-left md:text-right max-w-md">
                所有项目代码<strong class="text-on-surface font-bold">完全开源</strong>，欢迎 Fork、Issue 与 PR<span id="commit-stats-span" style="display: none;"></span>
              </p>
            </div>
          </div>

          <!-- 4 个卡片的网格容器 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300" id="project-cards-container">
            ${e}
          </div>

          <!-- 底部控制按钮 -->
          <div class="flex justify-center items-center gap-4 mt-12">
            <button
              id="projects-shuffle-btn"
              class="flex items-center gap-2 border border-primary/20 hover:border-primary/50 text-primary dark:text-primary-fixed hover:bg-primary/5 font-label-md text-label-md px-6 py-3 rounded-xl transition-all duration-300 transform active:scale-95 shadow-sm hover:shadow"
            >
              <span class="material-symbols-outlined text-[20px] transition-transform duration-500" id="shuffle-icon">sync</span>
              随机换一批
            </button>
            <a
              href="https://github.com/EMU-Stu"
              target="_blank"
              class="flex items-center gap-2 bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md px-6 py-3 rounded-xl transition-all duration-300 transform active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
            >
              查看全部项目
              <span class="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>

          <!-- 组织整体活跃热力图弹窗组件挂载 -->
          <emu-activity-heatmap></emu-activity-heatmap>
        </div>
      </section>
    `}async loadCommitStats(){try{const e=await fetch("https://cdn.jsdelivr.net/gh/EMU-Stu/EMU-Stu-Site@stats-data/stats.json",{cache:"no-store"});if(!e.ok)throw new Error(`Failed to fetch stats: ${e.status}`);const t=await e.json();if(!Array.isArray(t))return;const n=480*60*1e3,s=new Date,i=s.getTime()+s.getTimezoneOffset()*60*1e3+n,o=[];for(let p=1;p<=7;p++){const h=new Date(i-p*24*60*60*1e3),x=h.getFullYear(),g=String(h.getMonth()+1).padStart(2,"0"),m=String(h.getDate()).padStart(2,"0");o.push(`${x}-${g}-${m}`)}const l=t.filter(p=>p&&o.includes(p.date)),d=l.reduce((p,h)=>p+(h.total_additions||0),0),u=l.reduce((p,h)=>p+(h.total_deletions||0),0);if(d>0){const p=this.querySelector("#commit-stats-span");if(p){const h=d.toLocaleString(),x=u.toLocaleString(),g=`${o[o.length-1]} 至 ${o[0]}`;p.innerHTML=`
            · 近一周新增代码 <span class="text-emerald-500 font-semibold font-mono">+${h}</span> 行
            <emu-tooltip style="vertical-align: -0.125em;">
              <span class="material-symbols-outlined select-none align-middle cursor-help text-[15px] text-on-surface-variant/50 hover:text-primary transition-colors duration-200 ml-0.5 relative top-[1px]">help</span>
              <div slot="content" class="min-w-[240px] select-none">
                <span class="block font-bold text-on-surface mb-2 text-xs">代码变更统计</span>
                <span class="block text-on-surface-variant/80 mb-1 text-[11px]">
                  统计区间：<span class="font-mono text-on-surface font-semibold">${g}</span>
                </span>
                <span class="flex items-center gap-4 text-on-surface-variant/80 mb-2.5 text-[11px]">
                  <span>新增：<strong class="text-emerald-500 font-mono font-semibold">+${h}</strong></span>
                  <span>删除：<strong class="text-error font-mono font-semibold">-${x}</strong></span>
                </span>
                <span class="block pt-2 border-t border-outline-variant/20">
                  <a href="/article?slug=code_change_stats_howto" class="text-primary hover:underline flex items-center gap-0.5 font-semibold text-[11px] cursor-pointer">
                    本功能是如何实现的？
                    <span class="material-symbols-outlined text-[10px]">north_east</span>
                  </a>
                </span>
              </div>
            </emu-tooltip>
          `,p.style.display="inline"}}}catch(e){console.error("加载项目代码提交统计数据失败:",e)}}setupEventListeners(){const e=this.querySelector("#projects-shuffle-btn"),t=this.querySelector("#project-cards-container"),n=this.querySelector("#shuffle-icon");e==null||e.addEventListener("click",()=>{n&&(n.classList.add("rotate-180"),setTimeout(()=>n.classList.remove("rotate-180"),500)),t&&(t.style.opacity="0"),setTimeout(()=>{this.shuffleProjects();const i=this._displayedProjects.map(o=>this.generateCardHtml(o)).join("");t&&(t.innerHTML=i,t.style.opacity="1")},300)});const s=this.querySelector("#view-heatmap-btn");s==null||s.addEventListener("click",i=>{i.preventDefault();const o=this.querySelector("emu-activity-heatmap");o&&o.open()})}}customElements.define("emu-projects",Yn);class Wn extends HTMLElement{constructor(){super(...arguments);S(this,"_historyData",[]);S(this,"_dataLoaded",!1)}connectedCallback(){this.renderBaseStructure(),this.fetchStats()}async fetchStats(){try{const e=await fetch("https://cdn.jsdelivr.net/gh/EMU-Stu/EMU-Stu-Site@stats-data/stats.json",{cache:"no-store"});if(!e.ok)throw new Error(`Failed to fetch stats: ${e.status}`);const t=await e.json();if(!Array.isArray(t))throw new Error("Data format error: expected an array");this._historyData=t,this._dataLoaded=!0}catch(e){console.error("加载组织活跃度统计失败:",e)}}renderBaseStructure(){this.innerHTML=`
      <dialog 
        id="heatmap-dialog" 
        class="rounded-2xl p-6 bg-surface-container-lowest text-on-surface border border-outline-variant/30 shadow-2xl max-w-3xl w-[92%] backdrop:bg-black/40 backdrop:backdrop-blur-sm focus:outline-none transition-all duration-300 opacity-0 scale-95"
      >
        <div class="flex items-center justify-between mb-5 select-none">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[22px]">calendar_month</span>
            <h3 class="font-mono font-bold text-base text-on-surface">组织活跃热力图</h3>
          </div>
          <button 
            id="close-heatmap-dialog" 
            class="material-symbols-outlined text-on-surface-variant/70 hover:text-on-surface transition-colors cursor-pointer text-[20px]"
          >
            close
          </button>
        </div>

        <!-- 控制栏（包含统计口径与时间范围说明） -->
        <div class="flex items-center justify-between mb-5 select-none text-xs">
          <span class="text-[11px] text-on-surface-variant/60 font-medium">统计口径：开源仓库代码变更行数 (+/-)</span>
          <span id="current-year-display" class="font-mono text-on-surface-variant/60 text-[11px]">数据范围：2025-05-01 至 今日</span>
        </div>

        <!-- 滚动热力图区 (2025-05-01至今横向滚动) - 加上高雅的边框包裹与轻质底色。移除 pl padding，将其分配到 sticky Y 轴中以保证滚动时完美剪裁遮挡 -->
        <div class="relative overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-outline-variant/30 scrollbar-track-transparent mb-6 border border-outline-variant/20 dark:border-[#2f3336] rounded-xl py-4 pr-4 pl-0 bg-surface-container-low/20">
          
          <div class="flex items-start w-max">
            <!-- 1. 左侧冻结列：包含月份行留白与星期 Y 轴，通过 sticky left-0 锁定，并使用实色背景遮挡滚动进入的元素 -->
            <div class="sticky left-0 z-20 bg-surface-container-lowest dark:bg-[#1a1d20] pl-4 pr-1.5 flex flex-col flex-shrink-0 select-none">
              <!-- 顶部对齐月份轴的留白 (h-4 + mb-1 + pt-1) = 24px -->
              <div class="h-[24px]"></div>
              <!-- 星期 Y 轴标签列 -->
              <div class="flex flex-col gap-[2px] text-[9px] text-on-surface-variant/50 font-mono text-right w-8">
                <div class="h-[20px] flex items-center justify-end"></div>
                <div class="h-[20px] flex items-center justify-end">周一</div>
                <div class="h-[20px] flex items-center justify-end"></div>
                <div class="h-[20px] flex items-center justify-end">周三</div>
                <div class="h-[20px] flex items-center justify-end"></div>
                <div class="h-[20px] flex items-center justify-end">周五</div>
                <div class="h-[20px] flex items-center justify-end"></div>
              </div>
            </div>

            <!-- 2. 右侧滚动内容区：包含月份行标尺与格子网格 -->
            <div class="flex flex-col flex-shrink-0">
              <!-- 月份行标尺 -->
              <div id="dialog-heatmap-months" class="relative h-4 mb-1"></div>
              <!-- 日历格子网格 -->
              <div id="dialog-heatmap-grid" class="flex gap-[2px] pt-1"></div>
            </div>
          </div>

        </div>

        <!-- 底部数据简报 -->
        <div class="bg-surface-container-low/50 rounded-xl p-4 mb-5 text-[11px] text-on-surface-variant leading-relaxed select-none">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="flex justify-between sm:flex-col sm:justify-start gap-1 pb-2 sm:pb-0 border-b sm:border-b-0 sm:border-r border-outline-variant/10">
              <span class="text-on-surface-variant/70">累计代码变更：</span>
              <strong id="year-total-lines" class="text-primary font-mono text-sm sm:mt-1">-- 行</strong>
            </div>
            <div class="flex justify-between sm:flex-col sm:justify-start gap-1 pb-2 sm:pb-0 border-b sm:border-b-0 sm:border-r border-outline-variant/10">
              <span class="text-on-surface-variant/70">活跃开发天数：</span>
              <strong id="year-active-days" class="text-on-surface font-mono text-sm sm:mt-1">-- 天</strong>
            </div>
            <div class="flex justify-between sm:flex-col sm:justify-start gap-1">
              <span class="text-on-surface-variant/70">单日最高变更：</span>
              <strong id="year-max-lines" class="text-on-surface font-mono text-sm sm:mt-1">-- 行</strong>
            </div>
          </div>
        </div>

        <!-- 底部图例 -->
        <div class="flex justify-end items-center gap-1.5 text-[10px] text-on-surface-variant/70 font-mono select-none">
          <span>少</span>
          <div class="flex gap-[2px]">
            <div class="w-[20px] h-[20px] rounded-[2px] bg-[#ebedf0] dark:bg-[#161b22]"></div>
            <div class="w-[20px] h-[20px] rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]"></div>
            <div class="w-[20px] h-[20px] rounded-[2px] bg-[#40c463] dark:bg-[#006d32]"></div>
            <div class="w-[20px] h-[20px] rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]"></div>
            <div class="w-[20px] h-[20px] rounded-[2px] bg-[#216e39] dark:bg-[#39d353]"></div>
          </div>
          <span>多</span>
        </div>
      </dialog>
    `;const e=this.querySelector("#heatmap-dialog"),t=this.querySelector("#close-heatmap-dialog");t==null||t.addEventListener("click",()=>this.close()),e==null||e.addEventListener("click",n=>{n.target===e&&this.close()})}open(){const e=this.querySelector("#heatmap-dialog");e&&(e.showModal(),requestAnimationFrame(()=>{e.classList.remove("opacity-0","scale-95")}),this.renderHeatmap(),this.scrollToLatest())}close(){const e=this.querySelector("#heatmap-dialog");if(!e)return;e.classList.add("opacity-0","scale-95");const t=()=>{e.close(),e.removeEventListener("transitionend",t)};e.addEventListener("transitionend",t)}scrollToLatest(){setTimeout(()=>{const e=this.querySelector(".overflow-x-auto");e&&(e.scrollLeft=e.scrollWidth)},50)}getDayVal(e){var u,p,h,x;const t=this._historyData.find(g=>g.date===e);if(!t)return{val:0,additions:0,deletions:0,commits:0,commitsTracked:!1,dateTracked:!1,score:0};const n=((u=t.metrics)==null?void 0:u.additions)??t.total_additions??0,s=((p=t.metrics)==null?void 0:p.deletions)??t.total_deletions??0,i=((h=t.metrics)==null?void 0:h.lines_changed)??n+s;let o=0,l=!1;typeof((x=t.metrics)==null?void 0:x.commits)=="number"?(o=t.metrics.commits,l=!0):t.repos&&t.repos.some(m=>{var y;return typeof((y=m.metrics)==null?void 0:y.commits)=="number"})&&(o=t.repos.reduce((m,y)=>{var L;return m+(((L=y.metrics)==null?void 0:L.commits)??0)},0),l=!0);const d=o*20+Math.log2(i+1)*10;return{val:i,additions:n,deletions:s,commits:o,commitsTracked:l,dateTracked:!0,score:d}}calculateYearQuantiles(e){const t=[];if(e.forEach(s=>{const{score:i}=this.getDayVal(s);i>0&&t.push(i)}),t.length===0)return{q25:1,q50:2,q75:3};t.sort((s,i)=>s-i);const n=s=>{const i=Math.floor(t.length*s);return t[Math.min(i,t.length-1)]};return{q25:n(.25),q50:n(.5),q75:n(.75)}}renderHeatmap(){if(!this._dataLoaded){const I=this.querySelector("#dialog-heatmap-grid");I&&(I.innerHTML='<span class="text-xs text-on-surface-variant/70 py-6">正在加载活跃度数据...</span>');return}const e=480*60*1e3,t=new Date,n=new Date(t.getTime()+t.getTimezoneOffset()*60*1e3+e),s=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,i=new Date(2025,4,1),o=n,l=i.getDay(),d=new Date(i.getTime()-l*24*60*60*1e3),u=o.getDay(),p=new Date(o.getTime()+(6-u)*24*60*60*1e3),h=[];let x=new Date(d);for(;x<=p;){const I=x.getFullYear(),U=String(x.getMonth()+1).padStart(2,"0"),X=String(x.getDate()).padStart(2,"0");h.push(`${I}-${U}-${X}`),x.setDate(x.getDate()+1)}const m=h.length/7,y="2025-05-01",L=h.filter(I=>I>=y&&I<=s);let A=0,O=0,F=0,q=0,j="";L.forEach(I=>{const{val:U,commits:X}=this.getDayVal(I);(U>0||X>0)&&(A+=U,O+=X,F++,U>q&&(q=U,j=I))});const Z=this.calculateYearQuantiles(L),Q=[];for(let I=0;I<m;I++){const U=[];for(let X=0;X<7;X++)U.push(h[I*7+X]);Q.push(U)}let pe="",C=-10,N="";Q.forEach((I,U)=>{const de=`${new Date(I[3]).getMonth()+1}月`;de!==N&&U-C>=3&&U<m-1&&(pe+=`<div class="absolute text-[10px] text-on-surface-variant/50 font-mono select-none whitespace-nowrap" style="left: calc(${U} * (20px + 2px));">${de}</div>`,N=de,C=U)});let K="";Q.forEach(I=>{let U="";I.forEach(X=>{const de=X>s;if(X<"2025-05-01"||de)U+=`
            <div class="w-[20px] h-[20px] relative flex-shrink-0">
              <div class="w-[20px] h-[20px] rounded-[2px] bg-transparent pointer-events-none"></div>
            </div>
          `;else{const{val:qe,additions:st,deletions:it,commits:ot,commitsTracked:lt,dateTracked:Pt,score:ke}=this.getDayVal(X);let Ae=0;ke>0&&(ke<=Z.q25?Ae=1:ke<=Z.q50?Ae=2:ke<=Z.q75?Ae=3:Ae=4);const ct=["bg-[#ebedf0] dark:bg-[#161b22] hover:scale-125 hover:z-10","bg-[#9be9a8] dark:bg-[#0e4429] hover:scale-125 hover:z-10","bg-[#40c463] dark:bg-[#006d32] hover:scale-125 hover:z-10","bg-[#30a14e] dark:bg-[#26a641] hover:scale-125 hover:z-10","bg-[#216e39] dark:bg-[#39d353] hover:scale-125 hover:z-10"],dt=qe.toLocaleString(),ut=lt?`<strong>${ot}</strong> 次`:'<span style="opacity:0.45;font-style:italic;">未统计</span>',pt=Pt?`<strong>${dt}</strong> 行${qe>0?` (新增 +${st.toLocaleString()} / 删除 -${it.toLocaleString()})`:""}`:'<span style="opacity:0.45;font-style:italic;">未统计</span>',ht=`提交次数：${ut}<br/>变更代码：${pt}`;U+=`
            <div class="w-[20px] h-[20px] relative flex-shrink-0 flex items-center justify-center">
              <emu-tooltip style="display: flex; width: 20px; height: 20px; align-items: center; justify-content: center;">
                <div 
                  class="w-[20px] h-[20px] rounded-[2px] ${ct[Ae]} cursor-pointer transition-all duration-200"
                  data-date="${X}"
                ></div>
                <div slot="content" class="min-w-[180px] p-0.5 select-none">
                  <span class="block font-bold text-on-surface mb-1.5 font-mono text-[11px]">${X}</span>
                  <span class="block text-on-surface-variant/90 text-[11px] leading-relaxed">${ht}</span>
                </div>
              </emu-tooltip>
            </div>
          `}}),K+=`<div class="flex flex-col gap-[2px]">${U}</div>`});const ee=this.querySelector("#dialog-heatmap-months");ee&&(ee.innerHTML=pe);const re=this.querySelector("#dialog-heatmap-grid");re&&(re.innerHTML=K);const he=this.querySelector("#year-total-lines");he&&(he.textContent=`${A.toLocaleString()} 行`);const le=this.querySelector("#year-total-commits");le&&(le.textContent=`${O.toLocaleString()} 次`);const ce=this.querySelector("#year-active-days");ce&&(ce.textContent=`${F} 天`);const P=this.querySelector("#year-max-lines");P&&(P.textContent=`${q.toLocaleString()} 行${j?` (${j})`:""}`)}}customElements.define("emu-activity-heatmap",Wn);const sr=[{name:"物联网实验室（AKA 数字孪生暨虚拟现实实验室）",code:"IoT-Lab",description:"开展物联网架构、嵌入式硬件开发与实时数据采集研究，结合数字孪生与虚拟现实技术实现物理世界的数字化映射。",department:"计算机科学与工程学院",professors:["陈超"],tags:["物联网","数字孪生","虚拟现实","嵌入式"],icon:"sensors",href:"https://emu-stu.github.io/IOT-lab-web/"},{name:"河北省安全生产与应急处置特种机器人重点实验室",code:"SER-Lab",description:"致力于应急救援、特种作业机器人的研发，开展智能环境感知、鲁棒控制及人机协作技术等关键课题攻关。",department:"应急管理学院",tags:["特种机器人","应急处置","智能控制","环境感知"],icon:"precision_manufacturing"},{name:"ArkLab方舟实验室",code:"Ark-Lab",description:"专注于学生技术创新与工程实践，覆盖全栈软件开发、算法研究及软硬件协同设计，培养核心技术人才。",department:"电子信息工程学院",tags:["软件工程","算法设计","技术创新","全栈开发"],icon:"sailing"},{name:"利刃网安攻防实验室",code:"Blade-Sec-Lab",description:"聚焦于网络空间安全，开展渗透测试、漏洞挖掘、红蓝对抗以及安全防御体系建设等核心攻防技术研究。",department:"计算机科学与工程学院",tags:["网络安全","漏洞挖掘","红蓝对抗","渗透测试"],icon:"shield_lock"}];class Kn extends HTMLElement{constructor(){super(...arguments);S(this,"_resizeObserver",null)}connectedCallback(){this.render(),this.setupResponsiveness()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}generateCardHtml(e){const t=e.tags.map(s=>`
        <span
          class="inline-block text-[10px] md:text-xs font-mono px-2 py-0.5 rounded-lg border border-primary/15 text-primary/80 bg-primary/5 transition-colors duration-300 whitespace-nowrap"
        >${s}</span>
      `).join(""),n=e.href?`
          <a
            href="${e.href}"
            target="_blank"
            onclick="event.stopPropagation()"
            class="labs-visit-btn inline-flex items-center gap-1 text-primary/60 hover:text-primary transition-colors duration-200 group/link shrink-0"
          >
            <span class="text-[11px] md:text-xs font-medium">访问网站</span>
            <span class="material-symbols-outlined text-[13px] md:text-[14px] group-hover/link:translate-x-0.5 transition-transform duration-200">arrow_forward</span>
          </a>
      `:"";return`
      <div
        class="labs-card border border-outline-variant/20 rounded-2xl p-5 md:p-7 bg-surface-container-lowest hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
      >
        <div>
          <!-- 头部：图标、实验室代号与名称 -->
          <div class="flex items-start justify-between mb-2.5 md:mb-4">
            <div class="flex items-center gap-3">
              <!-- 图标容器 -->
              <div
                class="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 bg-primary/10 transition-transform duration-300 group-hover:scale-110"
              >
                <span
                  class="material-symbols-outlined text-[20px] md:text-[24px] text-primary"
                >${e.icon}</span>
              </div>
              <div class="min-w-0">
                <span class="font-mono text-[10px] md:text-xs tracking-tight text-on-surface-variant/60 block truncate">${e.code}</span>
                <h3 class="font-bold text-on-surface text-sm md:text-base leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2" title="${e.name}">${e.name}</h3>
              </div>
            </div>
          </div>

          <!-- 实验室介绍 -->
          <p class="text-on-surface-variant text-xs md:text-sm leading-relaxed mb-2.5 md:mb-4 line-clamp-2 md:line-clamp-4" title="${e.description}">
            ${e.description}
          </p>
        </div>

        <div>
          <!-- 指导教师与所属院系 -->
          <div class="flex flex-col gap-1.5 md:gap-2 text-[11px] md:text-xs text-on-surface-variant/70 mb-2.5 md:mb-4">
            ${e.advisor?`
            <div class="flex items-center gap-1.5">
               <span class="material-symbols-outlined text-[12px] md:text-[14px]">person</span>
              <span class="truncate">${e.advisor}</span>
            </div>
            `:""}
            ${e.professors?`
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[12px] md:text-[14px]">school</span>
              <span class="truncate">教授：${Array.isArray(e.professors)?e.professors.join("、"):e.professors}</span>
            </div>
            `:""}
            <div class="flex items-start gap-1.5">
              <span class="material-symbols-outlined text-[12px] md:text-[14px] mt-0.5">apartment</span>
              <span class="leading-relaxed line-clamp-1">${e.department}</span>
            </div>
          </div>

          <!-- 底部：标签栏 + 访问按钮 -->
          <div class="flex items-end justify-between gap-2 pt-2.5 border-t border-outline-variant/10">
            <div class="labs-tags-grid min-w-0">
              ${t}
            </div>
            ${n}
          </div>
        </div>
      </div>
    `}render(){const e=sr.map(t=>this.generateCardHtml(t)).join("");this.innerHTML=`
      <style>
        /* 卡片固定宽度，高度自适应，由 flexbox 自动拉伸等高 */
        .labs-card {
          width: 280px;
          height: auto;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .labs-card {
            width: 380px;
            height: 340px;
          }
        }

        /* 滚动容器 */
        .labs-marquee-wrapper {
          overflow-x: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-overflow-scrolling: touch;
        }

        /* 滚动激活时允许手动滚动，隐藏滚动条 */
        .labs-marquee-wrapper.scroll-active {
          overflow-x: auto;
        }
        .labs-marquee-wrapper::-webkit-scrollbar {
          display: none;
        }
        .labs-marquee-wrapper {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .labs-marquee-track {
          display: flex;
          gap: 1rem;
          width: 100%;
          justify-content: center;
          padding-left: 16px;
          padding-right: 16px;
        }
        @media (min-width: 768px) {
          .labs-marquee-track {
            gap: 1.5rem;
            padding-left: 60px;
            padding-right: 60px;
          }
        }

        /* 滚动激活时的状态 */
        .labs-marquee-wrapper.scroll-active .labs-marquee-track {
          width: max-content;
          justify-content: flex-start;
        }

        /* 标签区域：最多展示 2 行，溢出隐藏 */
        .labs-tags-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          overflow: hidden;
          max-height: 2.75rem;
        }
        @media (min-width: 768px) {
          .labs-tags-grid {
            gap: 0.5rem;
            max-height: 3.25rem;
          }
        }
      </style>

      <section class="py-20 relative" id="labs-container">
        <!-- 头部标题栏（仍在 max-w 容器内，对齐其他模块） -->
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span class="text-xs md:text-sm font-bold tracking-wider text-primary/70 dark:text-primary-fixed-dim/70 uppercase mb-2 block font-mono">
                Research Labs
              </span>
              <h2 class="font-headline-lg text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none mb-2">
                实验室介绍
              </h2>
            </div>

            <!-- 右侧说明 -->
            <div class="flex flex-col items-start md:items-end">
              <p class="text-xs md:text-sm text-on-surface-variant/80 leading-relaxed text-left md:text-right max-w-md">
                深耕应急管理领域，组织成员参与多个<strong class="text-on-surface font-bold">校级重点实验室</strong>的科研项目
              </p>
            </div>
          </div>
        </div>

        <!-- 全宽区域 -->
        <div class="labs-marquee-wrapper" id="labs-marquee">
          <div class="labs-marquee-track" id="labs-track">
            ${e}
          </div>
        </div>
      </section>
    `}setupResponsiveness(){const e=this.querySelector("#labs-marquee"),t=this.querySelector("#labs-track");if(!e||!t)return;const n=sr.map(o=>this.generateCardHtml(o)).join("");let s=null,i=null;this._resizeObserver=new ResizeObserver(()=>{i===null&&(i=window.setTimeout(()=>{i=null,e.classList.remove("scroll-active"),t.style.width="max-content",t.style.justifyContent="flex-start",t.innerHTML=n;const o=e.clientWidth,d=t.scrollWidth>o;d!==s&&(s=d,d?(e.classList.add("scroll-active"),t.style.width="",t.style.justifyContent=""):(e.scrollLeft=0,t.style.width="",t.style.justifyContent=""))},150))}),this._resizeObserver.observe(e)}}customElements.define("emu-labs",Kn);const Qn=`---
excerpt: "EMU-Stu 官网首页统计近一周新增代码这行小字，背后其实有一套完整的自动化流水线。从每天凌晨自动跑脚本，到前端拿到数据展示出来，中间涉及 GitHub Actions、Python 脚本、独立数据分支和 jsDelivr CDN。"
category: "技术分享"
author: "何之洲"
date: "2026-05-27"
---

# Github 仓库如何统计代码变更行数

EMU-Stu 官网首页上「近一周新增代码 +XXXX 行」这行小字，背后其实有一套完整的自动化流水线。从每天凌晨自动跑脚本，到前端拿到数据展示出来，中间涉及 GitHub Actions、Python 脚本、独立数据分支和 jsDelivr CDN。这篇文章把整条链路拆开讲一遍。

![+N行?](images/stats-inline.png)

## 整体链路

整套方案**零成本**，**不需要服务器**，**不需要数据库**。

\`\`\`mermaid
sequenceDiagram
    participant gha as GitHub Actions
    participant script as Python 脚本
    participant gh as GitHub
    participant cdn as jsDelivr CDN
    participant frontend as 前端页面

    opt 定时任务：数据产出
        gha ->> gha: 每天 00:05 UTC+8 自动触发
        gha ->> script: checkout 主分支，执行统计脚本
        script ->> gh: 获取组织所有仓库列表
        gh -->> script: 返回仓库列表
        loop 每个仓库
            script ->> gh: 并发调用 GitHub Compare API，汇总增删行数
            gh -->> script: 返回增删行数数据
        end
        script ->> cdn: 拉取历史的 stats.json
        script ->> script: 计算总增删行数， 更新/追加 stats.json
        script ->> gh: push stats.json 至 stats-data 分支
    end

    opt 前端调用：数据消费
        frontend ->> cdn: fetch stats.json
        opt CDN 缓存过期 / 未命中
            cdn ->> gh: 回源拉取最新 stats.json (从 stats-data 分支)
            gh -->> cdn: 返回最新 stats.json 并更新缓存
        end
        cdn -->> frontend: 返回 stats.json
        frontend ->> frontend: 解析数据
        frontend -->> frontend: 渲染到页面
    end
\`\`\`

## 数据从哪来

GitHub 的 REST API 提供了仓库级别的对比接口。给定两个 commit SHA，\`/repos/{owner}/{repo}/compare/{base}...{head}\` 会返回每个文件的增删行数。思路就是：**对组织下每个仓库，找到目标日期的头尾两个 commit，调 compare 接口拿差异，最后加总。**

难点在于「找头尾 commit」这件事。

一个仓库在目标日期之前可能一个 commit 都没有（刚建的仓库），也可能当天没有任何提交。脚本对这些边界情况做了处理：

- 当天之前有提交、当天也有提交 → 取两个时间点的 commit 做 compare
- 当天之前没有提交、当天有提交 → 这是个新仓库，先找到最早的 root commit，再和当天最后一个 commit 做 compare
- 当天没有任何提交 → 跳过，增删都是 0

## 认证

如果你是个人账号下的仓库，可以直接使用[个人 PAT](https://github.com/settings/personal-access-tokens)。

由于 EMU-Stu 是一个组织，使用个人 PAT 来访问组织下的仓库不太合理。所以，这里是通过给组织添加一个 Github APP，然后使用 APP 生成临时 token。具体使用的是：[actions/create-github-app-token](https://github.com/actions/create-github-app-token) 这个 action。

## 每天自动运行

GitHub Actions 的 \`schedule\` 触发器只认 UTC 时间。要在北京时间凌晨 00:05 跑，cron 表达式得写成 \`5 16 * * *\`（UTC 16:05 = 北京时间 00:05）。

Github Actions 的步骤上面时序图已经画得很清楚了，这里不再赘述。

> [!TIP]
> **Github Actions 的 schedule 不保证准确触发**。
> Action 会根据 Github 服务器资源情况排队触发，所以设置了 00:05 的触发时机，但是实际却是 1、2 点触发的情况很正常。 具体可以看 [Github 官网](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule)。

## 数据存在哪

没有用数据库，也没用外部存储。\`stats-data\` 是仓库里的一个独立分支，里面只放一个文件 \`stats.json\`。

这么做的好处是：

- 不污染主分支的代码
- 数据文件可以通过 \`raw.githubusercontent.com\` 直接访问

\`stats.json\` 的结构很简单，就是一个数组，每个元素长这样：

\`\`\`json
{
  "date": "2025-05-26",
  "total_additions": 1523,
  "total_deletions": 432,
  "repos": [
    { "name": "EMU-Stu-Site", "additions": 800, "deletions": 200 },
    { "name": "IoT-lab-web", "additions": 723, "deletions": 232 }
  ]
}
\`\`\`

## CDN 作用是什么

其实只要用户的网络在霍格沃茨魔法学院修炼过，直接从 GitHub 拉也行，哈哈。

所以 CDN 的作用就是让**没有魔法学院网络连接的**用户也能正常 fetch 到数据，而不被墙。当然了，jsDelivr 偶尔也会抽风，但总体来说还行。

## 前端怎么展示

前端组件 \`emu-projects\` 在挂载时调用 \`loadCommitStats()\`，从 jsDelivr CDN 拉 \`stats.json\`：

\`\`\`
https://cdn.jsdelivr.net/gh/EMU-Stu/EMU-Stu-Site@stats-data/stats.json
\`\`\`

拿到数据后，按北京时间算出最近 7 天的日期列表，过滤出这 7 天的记录，把 \`total_additions\` 和 \`total_deletions\` 分别求和。

页面上只显示一行：「近一周新增代码 +X,XXX 行」。旁边有个问号图标，hover 上去会弹出 tooltip，展示完整的统计区间、新增数（绿色）和删除数（红色），还带了一个链接指向这篇文章。

![hover tooltip](images/stats-tooltip-final.png)

`,Vn=Object.freeze(Object.defineProperty({__proto__:null,default:Qn},Symbol.toStringTag,{value:"Module"}));function Jn(a,r){var u;const e=((u=a.split("/").pop())==null?void 0:u.replace(".md",""))||"untitled",t=r.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/),n={};let s=r;if(t){const p=t[1];s=t[2],p.split(`
`).forEach(h=>{const x=h.trim();if(!x||x.startsWith("#"))return;const g=x.indexOf(":");if(g!==-1){const m=x.slice(0,g).trim();let y=x.slice(g+1).trim();(y.startsWith('"')&&y.endsWith('"')||y.startsWith("'")&&y.endsWith("'"))&&(y=y.slice(1,-1)),n[m]=y}})}const i=s.match(/^\s*#\s+(.+)$/m);let o=n.title;i&&(o||(o=i[1].trim()),s=s.replace(/^\s*#\s+.+$/m,"").trim()),o||(o=e);const l=p=>p.slice(0,300).replace(/[#*`~_\-]/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/\s+/g," ").trim().slice(0,150)+"...",d=n.excerpt||l(s);return{slug:n.slug||e,title:o,excerpt:d,category:n.category||"技术沉淀",subCategory:n.subCategory||"General",author:n.author||"Anonymous",authorAvatar:n.authorAvatar||(n.author?n.author[0].toUpperCase():"A"),date:n.date||new Date().toISOString().split("T")[0],readTime:n.readTime||`${Math.max(1,Math.ceil(s.length/500))} min`,content:s,filePath:a}}const ir=Object.assign({"../../docs/articles/github_repo_code_change_stats_howto.md":Vn}),kr=[];for(const a in ir)try{const r=ir[a];let e="";if(typeof r=="string")e=r;else if(r&&typeof r.default=="string")e=r.default;else{console.warn(`[article.ts] Failed to load raw content for ${a}:`,r);continue}const t=Jn(a,e);kr.push(t)}catch(r){console.error(`[article.ts] Error parsing markdown article at ${a}:`,r)}const Et=[...kr].sort((a,r)=>new Date(r.date).getTime()-new Date(a.date).getTime()),ea=Et.map(a=>({category:a.category,subCategory:a.subCategory,href:`/article?slug=${a.slug}`,title:a.title,excerpt:a.excerpt,authorAvatar:a.authorAvatar,author:a.author,date:a.date,readTime:a.readTime}));class ta extends HTMLElement{constructor(){super(...arguments);S(this,"_currentCategory","全部");S(this,"_searchQuery","");S(this,"_currentPage",1);S(this,"_postsPerPage",4);S(this,"_categories",["全部","后端开发","前端架构","AI/ML","应急科技","开源治理"]);S(this,"_searchHandler",null);S(this,"_searchInput",null)}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this._searchHandler&&this._searchInput&&this._searchInput.removeEventListener("input",this._searchHandler)}getFilteredPosts(){return ea.filter(e=>{const t=this._currentCategory==="全部"||e.category===this._currentCategory,n=this._searchQuery.trim().toLowerCase(),s=!n||e.title.toLowerCase().includes(n)||e.excerpt.toLowerCase().includes(n);return t&&s})}generatePostHtml(e){return`
      <a 
        href="${e.href}" 
        class="block group border-b border-outline-variant/15 py-8 transition-all duration-300"
      >
        <!-- 卡片头部：分类标签与英文标签，以及右侧细长箭头 -->
        <div class="flex items-center justify-between mb-3.5">
          <div class="flex items-center gap-3">
            <span class="inline-block text-xs font-semibold px-2.5 py-0.5 rounded bg-primary/5 text-primary border border-primary/10 dark:bg-primary-fixed-dim/10 dark:text-primary-fixed-dim dark:border-primary-fixed-dim/20 transition-all duration-300">
              ${e.category}
            </span>
            <span class="text-xs text-on-surface-variant/60 dark:text-surface-variant/60 font-mono font-medium">${e.subCategory}</span>
          </div>
          
          <!-- 向右的小箭头，悬停时向右侧偏移 -->
          <span class="material-symbols-outlined text-[20px] text-on-surface-variant/40 group-hover:text-primary dark:group-hover:text-primary-fixed-dim group-hover:translate-x-1.5 transition-all duration-300 shrink-0">
            arrow_forward
          </span>
        </div>

        <!-- 标题 -->
        <h3 class="text-xl md:text-2xl font-extrabold text-on-surface group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors duration-300 mb-3 leading-snug tracking-tight">
          ${e.title}
        </h3>

        <!-- 文章简介 -->
        <p class="text-on-surface-variant/80 dark:text-surface-variant/80 text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
          ${e.excerpt}
        </p>

        <!-- 底部元数据栏 -->
        <div class="flex items-center gap-6 text-xs md:text-sm text-on-surface-variant/60 dark:text-surface-variant/60 font-mono">
          <!-- 作者 -->
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-full bg-primary/10 text-primary dark:bg-primary-fixed-dim/10 dark:text-primary-fixed-dim flex items-center justify-center font-bold text-[10px] uppercase shrink-0">
              ${e.authorAvatar}
            </div>
            <span class="font-medium">${e.author}</span>
          </div>
          
          <!-- 发表日期 -->
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px] shrink-0">calendar_today</span>
            <span>${e.date}</span>
          </div>

          <!-- 阅读耗时 -->
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px] shrink-0">schedule</span>
            <span>${e.readTime}</span>
          </div>
        </div>
      </a>
    `}generateTabsHtml(){return this._categories.map(e=>{const t=e===this._currentCategory;return`
        <button
          data-category="${e}"
          role="tab"
          aria-selected="${t}"
          class="category-tab px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${t?"bg-primary text-on-primary shadow-sm dark:bg-primary-fixed dark:text-on-primary-fixed":"bg-surface-container hover:bg-surface-container-high text-on-surface-variant dark:text-surface-variant dark:bg-surface-container/30 dark:hover:bg-surface-container/50"}"
        >
          ${e}
        </button>
      `}).join("")}generatePaginationHtml(e){if(e<=1)return"";let t="";const n=this._currentPage===1;t+=`
      <button
        id="blog-prev-btn"
        class="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant/20 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:pointer-events-none disabled:active:scale-100"
        ${n?"disabled":""}
        aria-label="上一页"
      >
        <span class="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>
    `;for(let i=1;i<=e;i++){const o=i===this._currentPage;t+=`
        <button
          data-page="${i}"
          class="page-num-btn w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 ${o?"bg-primary text-on-primary shadow-md dark:bg-primary-fixed dark:text-on-primary-fixed":"border border-outline-variant/20 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"}"
        >
          ${i}
        </button>
      `}const s=this._currentPage===e;return t+=`
      <button
        id="blog-next-btn"
        class="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant/20 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:pointer-events-none disabled:active:scale-100"
        ${s?"disabled":""}
        aria-label="下一页"
      >
        <span class="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
    `,`
      <div class="flex items-center justify-center gap-2 mt-12">
        ${t}
      </div>
    `}render(){const e=this.getFilteredPosts(),t=Math.ceil(e.length/this._postsPerPage);this._currentPage>t&&t>0&&(this._currentPage=1);const n=(this._currentPage-1)*this._postsPerPage,s=e.slice(n,n+this._postsPerPage);let i="";s.length>0?i=s.map(o=>this.generatePostHtml(o)).join(""):i=`
        <div class="flex flex-col items-center justify-center py-20 text-center text-on-surface-variant/50 dark:text-surface-variant/50">
          <span class="material-symbols-outlined text-[48px] mb-4">search_off</span>
          <p class="text-base font-semibold">没有找到相关的技术博客文章</p>
          <p class="text-xs mt-1 text-on-surface-variant/40 dark:text-surface-variant/40">尝试更换搜索词或选择其他分类标签</p>
        </div>
      `,this.innerHTML=`
      <style>
        /* 页面切换的过渡淡入淡出动画 */
        .blog-list-container {
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      </style>

      <section class="py-20 px-margin-mobile md:px-margin-desktop relative" id="blog-container">
        <div class="max-w-container-max mx-auto">
          
          <!-- 头部标题栏 -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span class="text-xs md:text-sm font-bold tracking-wider text-primary/70 dark:text-primary-fixed-dim/70 uppercase mb-2 block font-mono">
                Research Blog
              </span>
              <h2 class="font-headline-lg text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none mb-2">
                技术博客
              </h2>
            </div>
            
            <div class="flex flex-col items-start md:items-end">
              <p class="text-xs md:text-sm text-on-surface-variant/80 dark:text-surface-variant/80 leading-relaxed text-left md:text-right max-w-md">
                记录 EMU-Stu 的技术沉淀与研究心得，分享来自校园开源社区的第一手实战案例。
              </p>
            </div>
          </div>

          <!-- 工具栏：分类标签与搜索框 -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <!-- 分类标签按钮 -->
            <div class="flex items-center gap-2 flex-wrap overflow-x-auto pb-1 md:pb-0 scrollbar-none" id="blog-category-tabs" role="tablist" aria-label="文章分类">
              ${this.generateTabsHtml()}
            </div>
            
            <!-- 搜索框 -->
            <div class="relative w-full md:w-80 shrink-0">
              <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/50 dark:text-surface-variant/50 text-[20px]">
                search
              </span>
              <input
                type="text"
                id="blog-search-input"
                placeholder="在博客中搜索..."
                aria-label="搜索博客文章"
                value="${this._searchQuery}"
                class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant/30 bg-surface-container-low dark:bg-surface-container/20 focus:bg-surface-container-lowest dark:focus:bg-surface-container-lowest/10 focus:border-primary dark:focus:border-primary-fixed-dim outline-none text-sm text-on-surface transition-all duration-300 placeholder:text-on-surface-variant/40 dark:placeholder:text-surface-variant/40"
              />
            </div>
          </div>

          <!-- 文章列表容器 -->
          <div class="blog-list-container" id="blog-posts-list">
            ${i}
          </div>

          <!-- 分页器 -->
          <div id="blog-pagination-container">
            ${this.generatePaginationHtml(t)}
          </div>

          <!-- 投稿引导 Banner (列表底部) -->
          <div class="mt-16 p-8 rounded-2xl border border-outline-variant/20 bg-surface-container-low dark:bg-surface-container/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="space-y-1">
              <h3 class="text-lg md:text-xl font-extrabold text-on-surface">欢迎分享你的文章</h3>
              <p class="text-sm text-on-surface-variant/80 dark:text-surface-variant/80 leading-relaxed max-w-2xl">
                无论是在日常开发中折腾出的实战记录、比赛科研的避坑指南，还是对开源的想法，都欢迎向 EMU-Stu 投稿，把你的干货经验分享给更多小伙伴！
              </p>
            </div>
            <a
              href="https://github.com/EMU-Stu/EMU-Stu-Blog"
              target="_blank"
              class="flex-shrink-0 flex items-center gap-2 bg-primary hover:bg-primary/90 text-on-primary font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 transform active:scale-95 shadow-sm hover:shadow-md cursor-pointer font-mono"
            >
              前往仓库投稿
              <span class="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>

        </div>
      </section>
    `}refreshList(){const e=this.querySelector("#blog-posts-list"),t=this.querySelector("#blog-pagination-container"),n=this.getFilteredPosts(),s=Math.ceil(n.length/this._postsPerPage);this._currentPage>s&&s>0&&(this._currentPage=1);const i=(this._currentPage-1)*this._postsPerPage,o=n.slice(i,i+this._postsPerPage);e&&(e.style.opacity="0"),setTimeout(()=>{e&&(o.length>0?e.innerHTML=o.map(l=>this.generatePostHtml(l)).join(""):e.innerHTML=`
            <div class="flex flex-col items-center justify-center py-20 text-center text-on-surface-variant/50 dark:text-surface-variant/50">
              <span class="material-symbols-outlined text-[48px] mb-4">search_off</span>
              <p class="text-base font-semibold">没有找到相关的技术博客文章</p>
              <p class="text-xs mt-1 text-on-surface-variant/40 dark:text-surface-variant/40">尝试更换搜索词或选择其他分类标签</p>
            </div>
          `,e.style.opacity="1"),t&&(t.innerHTML=this.generatePaginationHtml(s),this.setupPaginationListeners())},200)}setupEventListeners(){var e;this.addEventListener("click",t=>{const s=t.target.closest(".category-tab");if(s){const i=s.dataset.category||"全部";this._currentCategory!==i&&(this._currentCategory=i,this._currentPage=1,this.querySelectorAll(".category-tab").forEach(l=>{l.className="category-tab px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-surface-container hover:bg-surface-container-high text-on-surface-variant dark:text-surface-variant dark:bg-surface-container/30 dark:hover:bg-surface-container/50",l.setAttribute("aria-selected","false")}),s.className="category-tab px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-primary text-on-primary shadow-sm dark:bg-primary-fixed dark:text-on-primary-fixed",s.setAttribute("aria-selected","true"),this.refreshList())}}),this._searchInput=this.querySelector("#blog-search-input"),this._searchHandler=()=>{this._searchInput&&(this._searchQuery=this._searchInput.value,this._currentPage=1,this.refreshList())},(e=this._searchInput)==null||e.addEventListener("input",this._searchHandler),this.setupPaginationListeners()}setupPaginationListeners(){const e=this.querySelector("#blog-prev-btn");e==null||e.addEventListener("click",()=>{this._currentPage>1&&(this._currentPage--,this.refreshList(),this.scrollToTop())});const t=this.querySelector("#blog-next-btn");t==null||t.addEventListener("click",()=>{const s=this.getFilteredPosts(),i=Math.ceil(s.length/this._postsPerPage);this._currentPage<i&&(this._currentPage++,this.refreshList(),this.scrollToTop())}),this.querySelectorAll(".page-num-btn").forEach(s=>{s.addEventListener("click",()=>{const i=parseInt(s.dataset.page||"1",10);this._currentPage!==i&&(this._currentPage=i,this.refreshList(),this.scrollToTop())})})}scrollToTop(){const e=this.querySelector("#blog-container");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}customElements.define("emu-blog",ta);const ra="modulepreload",na=function(a){return"/"+a},or={},aa=function(r,e,t){let n=Promise.resolve();if(e&&e.length>0){let i=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=i(e.map(d=>{if(d=na(d),d in or)return;or[d]=!0;const u=d.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":ra,u||(h.as="script"),h.crossOrigin="",h.href=d,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((x,g)=>{h.addEventListener("load",x),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return n.then(i=>{for(const o of i||[])o.status==="rejected"&&s(o.reason);return r().catch(s)})};function Lt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ne=Lt();function wr(a){Ne=a}var Ce={exec:()=>null};function Ie(a){let r=[];return e=>{let t=Math.max(0,Math.min(3,e-1)),n=r[t];return n||(n=a(t),r[t]=n),n}}function H(a,r=""){let e=typeof a=="string"?a:a.source,t={replace:(n,s)=>{let i=typeof s=="string"?s:s.source;return i=i.replace(oe.caret,"$1"),e=e.replace(n,i),t},getRegex:()=>new RegExp(e,r)};return t}var sa=((a="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+a)}catch{return!1}})(),oe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Ie(a=>new RegExp(`^ {0,${a}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Ie(a=>new RegExp(`^ {0,${a}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Ie(a=>new RegExp(`^ {0,${a}}(?:\`\`\`|~~~)`)),headingBeginRegex:Ie(a=>new RegExp(`^ {0,${a}}#`)),htmlBeginRegex:Ie(a=>new RegExp(`^ {0,${a}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Ie(a=>new RegExp(`^ {0,${a}}>`))},ia=/^(?:[ \t]*(?:\n|$))+/,oa=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,la=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ue=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ca=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Mt=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Er=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_r=H(Er).replace(/bull/g,Mt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),da=H(Er).replace(/bull/g,Mt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ct=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ua=/^[^\n]+/,Rt=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,pa=H(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Rt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ha=H(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Mt).getRegex(),rt="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Nt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ga=H("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Nt).replace("tag",rt).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Sr=H(Ct).replace("hr",Ue).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",rt).getRegex(),fa=H(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Sr).getRegex(),$t={blockquote:fa,code:oa,def:pa,fences:la,heading:ca,hr:Ue,html:ga,lheading:_r,list:ha,newline:ia,paragraph:Sr,table:Ce,text:ua},lr=H("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ue).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",rt).getRegex(),ma={...$t,lheading:da,table:lr,paragraph:H(Ct).replace("hr",Ue).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",lr).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",rt).getRegex()},ba={...$t,html:H(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Nt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ce,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:H(Ct).replace("hr",Ue).replace("heading",` *#{1,6} *[^
]`).replace("lheading",_r).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},xa=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,va=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Tr=/^( {2,}|\\)\n(?!\s*$)/,ya=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,De=/[\p{P}\p{S}]/u,nt=/[\s\p{P}\p{S}]/u,Ot=/[^\s\p{P}\p{S}]/u,ka=H(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,nt).getRegex(),Ar=/(?!~)[\p{P}\p{S}]/u,wa=/(?!~)[\s\p{P}\p{S}]/u,Ea=/(?:[^\s\p{P}\p{S}]|~)/u,_a=H(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",sa?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Lr=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Sa=H(Lr,"u").replace(/punct/g,De).getRegex(),Ta=H(Lr,"u").replace(/punct/g,Ar).getRegex(),Mr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Aa=H(Mr,"gu").replace(/notPunctSpace/g,Ot).replace(/punctSpace/g,nt).replace(/punct/g,De).getRegex(),La=H(Mr,"gu").replace(/notPunctSpace/g,Ea).replace(/punctSpace/g,wa).replace(/punct/g,Ar).getRegex(),Ma=H("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ot).replace(/punctSpace/g,nt).replace(/punct/g,De).getRegex(),Ca=H(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,De).getRegex(),Ra="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Na=H(Ra,"gu").replace(/notPunctSpace/g,Ot).replace(/punctSpace/g,nt).replace(/punct/g,De).getRegex(),$a=H(/\\(punct)/,"gu").replace(/punct/g,De).getRegex(),Oa=H(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ia=H(Nt).replace("(?:-->|$)","-->").getRegex(),Da=H("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ia).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ve=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Pa=H(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ve).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Cr=H(/^!?\[(label)\]\[(ref)\]/).replace("label",Ve).replace("ref",Rt).getRegex(),Rr=H(/^!?\[(ref)\](?:\[\])?/).replace("ref",Rt).getRegex(),Ba=H("reflink|nolink(?!\\()","g").replace("reflink",Cr).replace("nolink",Rr).getRegex(),cr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,It={_backpedal:Ce,anyPunctuation:$a,autolink:Oa,blockSkip:_a,br:Tr,code:va,del:Ce,delLDelim:Ce,delRDelim:Ce,emStrongLDelim:Sa,emStrongRDelimAst:Aa,emStrongRDelimUnd:Ma,escape:xa,link:Pa,nolink:Rr,punctuation:ka,reflink:Cr,reflinkSearch:Ba,tag:Da,text:ya,url:Ce},Ha={...It,link:H(/^!?\[(label)\]\((.*?)\)/).replace("label",Ve).getRegex(),reflink:H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ve).getRegex()},_t={...It,emStrongRDelimAst:La,emStrongLDelim:Ta,delLDelim:Ca,delRDelim:Na,url:H(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",cr).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:H(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",cr).getRegex()},za={..._t,br:H(Tr).replace("{2,}","*").getRegex(),text:H(_t.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ke={normal:$t,gfm:ma,pedantic:ba},He={normal:It,gfm:_t,breaks:za,pedantic:Ha},ja={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},dr=a=>ja[a];function ye(a,r){if(r){if(oe.escapeTest.test(a))return a.replace(oe.escapeReplace,dr)}else if(oe.escapeTestNoEncode.test(a))return a.replace(oe.escapeReplaceNoEncode,dr);return a}function ur(a){try{a=encodeURI(a).replace(oe.percentDecode,"%")}catch{return null}return a}function pr(a,r){var s;let e=a.replace(oe.findPipe,(i,o,l)=>{let d=!1,u=o;for(;--u>=0&&l[u]==="\\";)d=!d;return d?"|":" |"}),t=e.split(oe.splitPipe),n=0;if(t[0].trim()||t.shift(),t.length>0&&!((s=t.at(-1))!=null&&s.trim())&&t.pop(),r)if(t.length>r)t.splice(r);else for(;t.length<r;)t.push("");for(;n<t.length;n++)t[n]=t[n].trim().replace(oe.slashPipe,"|");return t}function Te(a,r,e){let t=a.length;if(t===0)return"";let n=0;for(;n<t&&a.charAt(t-n-1)===r;)n++;return a.slice(0,t-n)}function hr(a){let r=a.split(`
`),e=r.length-1;for(;e>=0&&oe.blankLine.test(r[e]);)e--;return r.length-e<=2?a:r.slice(0,e+1).join(`
`)}function Ua(a,r){if(a.indexOf(r[1])===-1)return-1;let e=0;for(let t=0;t<a.length;t++)if(a[t]==="\\")t++;else if(a[t]===r[0])e++;else if(a[t]===r[1]&&(e--,e<0))return t;return e>0?-2:-1}function qa(a,r=0){let e=r,t="";for(let n of a)if(n==="	"){let s=4-e%4;t+=" ".repeat(s),e+=s}else t+=n,e++;return t}function gr(a,r,e,t,n){let s=r.href,i=r.title||null,o=a[1].replace(n.other.outputLinkReplace,"$1");t.state.inLink=!0;let l={type:a[0].charAt(0)==="!"?"image":"link",raw:e,href:s,title:i,text:o,tokens:t.inlineTokens(o)};return t.state.inLink=!1,l}function Ga(a,r,e){let t=a.match(e.other.indentCodeCompensation);if(t===null)return r;let n=t[1];return r.split(`
`).map(s=>{let i=s.match(e.other.beginningSpace);if(i===null)return s;let[o]=i;return o.length>=n.length?s.slice(n.length):s}).join(`
`)}var Je=class{constructor(a){S(this,"options");S(this,"rules");S(this,"lexer");this.options=a||Ne}space(a){let r=this.rules.block.newline.exec(a);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(a){let r=this.rules.block.code.exec(a);if(r){let e=this.options.pedantic?r[0]:hr(r[0]),t=e.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e,codeBlockStyle:"indented",text:t}}}fences(a){let r=this.rules.block.fences.exec(a);if(r){let e=r[0],t=Ga(e,r[3]||"",this.rules);return{type:"code",raw:e,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:t}}}heading(a){let r=this.rules.block.heading.exec(a);if(r){let e=r[2].trim();if(this.rules.other.endingHash.test(e)){let t=Te(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:Te(r[0],`
`),depth:r[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(a){let r=this.rules.block.hr.exec(a);if(r)return{type:"hr",raw:Te(r[0],`
`)}}blockquote(a){let r=this.rules.block.blockquote.exec(a);if(r){let e=Te(r[0],`
`).split(`
`),t="",n="",s=[];for(;e.length>0;){let i=!1,o=[],l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))o.push(e[l]),i=!0;else if(!i)o.push(e[l]);else break;e=e.slice(l);let d=o.join(`
`),u=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");t=t?`${t}
${d}`:d,n=n?`${n}
${u}`:u;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,s,!0),this.lexer.state.top=p,e.length===0)break;let h=s.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){let x=h,g=x.raw+`
`+e.join(`
`),m=this.blockquote(g);s[s.length-1]=m,t=t.substring(0,t.length-x.raw.length)+m.raw,n=n.substring(0,n.length-x.text.length)+m.text;break}else if((h==null?void 0:h.type)==="list"){let x=h,g=x.raw+`
`+e.join(`
`),m=this.list(g);s[s.length-1]=m,t=t.substring(0,t.length-h.raw.length)+m.raw,n=n.substring(0,n.length-x.raw.length)+m.raw,e=g.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:t,tokens:s,text:n}}}list(a){let r=this.rules.block.list.exec(a);if(r){let e=r[1].trim(),t=e.length>1,n={type:"list",raw:"",ordered:t,start:t?+e.slice(0,-1):"",loose:!1,items:[]};e=t?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=t?e:"[*+-]");let s=this.rules.other.listItemRegex(e),i=!1;for(;a;){let l=!1,d="",u="";if(!(r=s.exec(a))||this.rules.block.hr.test(a))break;d=r[0],a=a.substring(d.length);let p=qa(r[2].split(`
`,1)[0],r[1].length),h=a.split(`
`,1)[0],x=!p.trim(),g=0;if(this.options.pedantic?(g=2,u=p.trimStart()):x?g=r[1].length+1:(g=p.search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=p.slice(g),g+=r[1].length),x&&this.rules.other.blankLine.test(h)&&(d+=h+`
`,a=a.substring(h.length+1),l=!0),!l){let m=this.rules.other.nextBulletRegex(g),y=this.rules.other.hrRegex(g),L=this.rules.other.fencesBeginRegex(g),A=this.rules.other.headingBeginRegex(g),O=this.rules.other.htmlBeginRegex(g),F=this.rules.other.blockquoteBeginRegex(g);for(;a;){let q=a.split(`
`,1)[0],j;if(h=q,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),j=h):j=h.replace(this.rules.other.tabCharGlobal,"    "),L.test(h)||A.test(h)||O.test(h)||F.test(h)||m.test(h)||y.test(h))break;if(j.search(this.rules.other.nonSpaceChar)>=g||!h.trim())u+=`
`+j.slice(g);else{if(x||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(p)||A.test(p)||y.test(p))break;u+=`
`+h}x=!h.trim(),d+=q+`
`,a=a.substring(q.length+1),p=j.slice(g)}}n.loose||(i?n.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(i=!0)),n.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),n.raw+=d}let o=n.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let l of n.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let d=l.tokens[0];if(l.task&&((d==null?void 0:d.type)==="text"||(d==null?void 0:d.type)==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),d.raw=d.raw.replace(this.rules.other.listReplaceTask,""),d.text=d.text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let p={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=p.checked,n.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=p.raw+l.tokens[0].raw,l.tokens[0].text=p.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(p)):l.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):l.tokens.unshift(p)}}else l.task&&(l.task=!1);if(!n.loose){let u=l.tokens.filter(h=>h.type==="space"),p=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));n.loose=p}}if(n.loose)for(let l of n.items){l.loose=!0;for(let d of l.tokens)d.type==="text"&&(d.type="paragraph")}return n}}html(a){let r=this.rules.block.html.exec(a);if(r){let e=hr(r[0]);return{type:"html",block:!0,raw:e,pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:e}}}def(a){let r=this.rules.block.def.exec(a);if(r){let e=r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=r[2]?r[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:e,raw:Te(r[0],`
`),href:t,title:n}}}table(a){var i;let r=this.rules.block.table.exec(a);if(!r||!this.rules.other.tableDelimiter.test(r[2]))return;let e=pr(r[1]),t=r[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=(i=r[3])!=null&&i.trim()?r[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:Te(r[0],`
`),header:[],align:[],rows:[]};if(e.length===t.length){for(let o of t)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<e.length;o++)s.header.push({text:e[o],tokens:this.lexer.inline(e[o]),header:!0,align:s.align[o]});for(let o of n)s.rows.push(pr(o,s.header.length).map((l,d)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[d]})));return s}}lheading(a){let r=this.rules.block.lheading.exec(a);if(r){let e=r[1].trim();return{type:"heading",raw:Te(r[0],`
`),depth:r[2].charAt(0)==="="?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(a){let r=this.rules.block.paragraph.exec(a);if(r){let e=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:e,tokens:this.lexer.inline(e)}}}text(a){let r=this.rules.block.text.exec(a);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(a){let r=this.rules.inline.escape.exec(a);if(r)return{type:"escape",raw:r[0],text:r[1]}}tag(a){let r=this.rules.inline.tag.exec(a);if(r)return!this.lexer.state.inLink&&this.rules.other.startATag.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(a){let r=this.rules.inline.link.exec(a);if(r){let e=r[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let s=Te(e.slice(0,-1),"\\");if((e.length-s.length)%2===0)return}else{let s=Ua(r[2],"()");if(s===-2)return;if(s>-1){let i=(r[0].indexOf("!")===0?5:4)+r[1].length+s;r[2]=r[2].substring(0,s),r[0]=r[0].substring(0,i).trim(),r[3]=""}}let t=r[2],n="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(t);s&&(t=s[1],n=s[3])}else n=r[3]?r[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?t=t.slice(1):t=t.slice(1,-1)),gr(r,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer,this.rules)}}reflink(a,r){let e;if((e=this.rules.inline.reflink.exec(a))||(e=this.rules.inline.nolink.exec(a))){let t=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=r[t.toLowerCase()];if(!n){let s=e[0].charAt(0);return{type:"text",raw:s,text:s}}return gr(e,n,e[0],this.lexer,this.rules)}}emStrong(a,r,e=""){let t=this.rules.inline.emStrongLDelim.exec(a);if(!(!t||!t[1]&&!t[2]&&!t[3]&&!t[4]||t[4]&&e.match(this.rules.other.unicodeAlphaNumeric))&&(!(t[1]||t[3])||!e||this.rules.inline.punctuation.exec(e))){let n=[...t[0]].length-1,s,i,o=n,l=0,d=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,r=r.slice(-1*a.length+n);(t=d.exec(r))!==null;){if(s=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!s)continue;if(i=[...s].length,t[3]||t[4]){o+=i;continue}else if((t[5]||t[6])&&n%3&&!((n+i)%3)){l+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o+l);let u=[...t[0]][0].length,p=a.slice(0,n+t.index+u+i);if(Math.min(n,i)%2){let x=p.slice(1,-1);return{type:"em",raw:p,text:x,tokens:this.lexer.inlineTokens(x)}}let h=p.slice(2,-2);return{type:"strong",raw:p,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(a){let r=this.rules.inline.code.exec(a);if(r){let e=r[2].replace(this.rules.other.newLineCharGlobal," "),t=this.rules.other.nonSpaceChar.test(e),n=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return t&&n&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:r[0],text:e}}}br(a){let r=this.rules.inline.br.exec(a);if(r)return{type:"br",raw:r[0]}}del(a,r,e=""){let t=this.rules.inline.delLDelim.exec(a);if(t&&(!t[1]||!e||this.rules.inline.punctuation.exec(e))){let n=[...t[0]].length-1,s,i,o=n,l=this.rules.inline.delRDelim;for(l.lastIndex=0,r=r.slice(-1*a.length+n);(t=l.exec(r))!==null;){if(s=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!s||(i=[...s].length,i!==n))continue;if(t[3]||t[4]){o+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o);let d=[...t[0]][0].length,u=a.slice(0,n+t.index+d+i),p=u.slice(n,-n);return{type:"del",raw:u,text:p,tokens:this.lexer.inlineTokens(p)}}}}autolink(a){let r=this.rules.inline.autolink.exec(a);if(r){let e,t;return r[2]==="@"?(e=r[1],t="mailto:"+e):(e=r[1],t=e),{type:"link",raw:r[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}url(a){var e;let r;if(r=this.rules.inline.url.exec(a)){let t,n;if(r[2]==="@")t=r[0],n="mailto:"+t;else{let s;do s=r[0],r[0]=((e=this.rules.inline._backpedal.exec(r[0]))==null?void 0:e[0])??"";while(s!==r[0]);t=r[0],r[1]==="www."?n="http://"+r[0]:n=r[0]}return{type:"link",raw:r[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(a){let r=this.rules.inline.text.exec(a);if(r){let e=this.lexer.state.inRawBlock;return{type:"text",raw:r[0],text:r[0],escaped:e}}}},me=class St{constructor(r){S(this,"tokens");S(this,"options");S(this,"state");S(this,"inlineQueue");S(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=r||Ne,this.options.tokenizer=this.options.tokenizer||new Je,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:oe,block:Ke.normal,inline:He.normal};this.options.pedantic?(e.block=Ke.pedantic,e.inline=He.pedantic):this.options.gfm&&(e.block=Ke.gfm,this.options.breaks?e.inline=He.breaks:e.inline=He.gfm),this.tokenizer.rules=e}static get rules(){return{block:Ke,inline:He}}static lex(r,e){return new St(e).lex(r)}static lexInline(r,e){return new St(e).inlineTokens(r)}lex(r){r=r.replace(oe.carriageReturn,`
`),this.blockTokens(r,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(r,e=[],t=!1){var s,i,o;this.tokenizer.lexer=this,this.options.pedantic&&(r=r.replace(oe.tabCharGlobal,"    ").replace(oe.spaceLine,""));let n=1/0;for(;r;){if(r.length<n)n=r.length;else{this.infiniteLoopError(r.charCodeAt(0));break}let l;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(l=u.call({lexer:this},r,e))?(r=r.substring(l.raw.length),e.push(l),!0):!1))continue;if(l=this.tokenizer.space(r)){r=r.substring(l.raw.length);let u=e.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:e.push(l);continue}if(l=this.tokenizer.code(r)){r=r.substring(l.raw.length);let u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):e.push(l);continue}if(l=this.tokenizer.fences(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.heading(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.hr(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.blockquote(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.list(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.html(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.def(r)){r=r.substring(l.raw.length);let u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title},e.push(l));continue}if(l=this.tokenizer.table(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.lheading(r)){r=r.substring(l.raw.length),e.push(l);continue}let d=r;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0,p=r.slice(1),h;this.options.extensions.startBlock.forEach(x=>{h=x.call({lexer:this},p),typeof h=="number"&&h>=0&&(u=Math.min(u,h))}),u<1/0&&u>=0&&(d=r.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(d))){let u=e.at(-1);t&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(l),t=d.length!==r.length,r=r.substring(l.raw.length);continue}if(l=this.tokenizer.text(r)){r=r.substring(l.raw.length);let u=e.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(l);continue}if(r){this.infiniteLoopError(r.charCodeAt(0));break}}return this.state.top=!0,e}inline(r,e=[]){return this.inlineQueue.push({src:r,tokens:e}),e}inlineTokens(r,e=[]){var d,u,p,h,x;this.tokenizer.lexer=this;let t=r,n=null;if(this.tokens.links){let g=Object.keys(this.tokens.links);if(g.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(t))!==null;)g.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(t))!==null;)t=t.slice(0,n.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(t))!==null;)s=n[2]?n[2].length:0,t=t.slice(0,n.index+s)+"["+"a".repeat(n[0].length-s-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);t=((u=(d=this.options.hooks)==null?void 0:d.emStrongMask)==null?void 0:u.call({lexer:this},t))??t;let i=!1,o="",l=1/0;for(;r;){if(r.length<l)l=r.length;else{this.infiniteLoopError(r.charCodeAt(0));break}i||(o=""),i=!1;let g;if((h=(p=this.options.extensions)==null?void 0:p.inline)!=null&&h.some(y=>(g=y.call({lexer:this},r,e))?(r=r.substring(g.raw.length),e.push(g),!0):!1))continue;if(g=this.tokenizer.escape(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.tag(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.link(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.reflink(r,this.tokens.links)){r=r.substring(g.raw.length);let y=e.at(-1);g.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=g.raw,y.text+=g.text):e.push(g);continue}if(g=this.tokenizer.emStrong(r,t,o)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.codespan(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.br(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.del(r,t,o)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.autolink(r)){r=r.substring(g.raw.length),e.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(r))){r=r.substring(g.raw.length),e.push(g);continue}let m=r;if((x=this.options.extensions)!=null&&x.startInline){let y=1/0,L=r.slice(1),A;this.options.extensions.startInline.forEach(O=>{A=O.call({lexer:this},L),typeof A=="number"&&A>=0&&(y=Math.min(y,A))}),y<1/0&&y>=0&&(m=r.substring(0,y+1))}if(g=this.tokenizer.inlineText(m)){r=r.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(o=g.raw.slice(-1)),i=!0;let y=e.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=g.raw,y.text+=g.text):e.push(g);continue}if(r){this.infiniteLoopError(r.charCodeAt(0));break}}return e}infiniteLoopError(r){let e="Infinite loop on byte: "+r;if(this.options.silent)console.error(e);else throw new Error(e)}},et=class{constructor(a){S(this,"options");S(this,"parser");this.options=a||Ne}space(a){return""}code({text:a,lang:r,escaped:e}){var s;let t=(s=(r||"").match(oe.notSpaceStart))==null?void 0:s[0],n=a.replace(oe.endingNewline,"")+`
`;return t?'<pre><code class="language-'+ye(t)+'">'+(e?n:ye(n,!0))+`</code></pre>
`:"<pre><code>"+(e?n:ye(n,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}def(a){return""}heading({tokens:a,depth:r}){return`<h${r}>${this.parser.parseInline(a)}</h${r}>
`}hr(a){return`<hr>
`}list(a){let r=a.ordered,e=a.start,t="";for(let i=0;i<a.items.length;i++){let o=a.items[i];t+=this.listitem(o)}let n=r?"ol":"ul",s=r&&e!==1?' start="'+e+'"':"";return"<"+n+s+`>
`+t+"</"+n+`>
`}listitem(a){return`<li>${this.parser.parse(a.tokens)}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let r="",e="";for(let n=0;n<a.header.length;n++)e+=this.tablecell(a.header[n]);r+=this.tablerow({text:e});let t="";for(let n=0;n<a.rows.length;n++){let s=a.rows[n];e="";for(let i=0;i<s.length;i++)e+=this.tablecell(s[i]);t+=this.tablerow({text:e})}return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+t+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){let r=this.parser.parseInline(a.tokens),e=a.header?"th":"td";return(a.align?`<${e} align="${a.align}">`:`<${e}>`)+r+`</${e}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${ye(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:r,tokens:e}){let t=this.parser.parseInline(e),n=ur(a);if(n===null)return t;a=n;let s='<a href="'+a+'"';return r&&(s+=' title="'+ye(r)+'"'),s+=">"+t+"</a>",s}image({href:a,title:r,text:e,tokens:t}){t&&(e=this.parser.parseInline(t,this.parser.textRenderer));let n=ur(a);if(n===null)return ye(e);a=n;let s=`<img src="${a}" alt="${ye(e)}"`;return r&&(s+=` title="${ye(r)}"`),s+=">",s}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:ye(a.text)}},Dt=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}checkbox({raw:a}){return a}},be=class Tt{constructor(r){S(this,"options");S(this,"renderer");S(this,"textRenderer");this.options=r||Ne,this.options.renderer=this.options.renderer||new et,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Dt}static parse(r,e){return new Tt(e).parse(r)}static parseInline(r,e){return new Tt(e).parseInline(r)}parse(r){var t,n;this.renderer.parser=this;let e="";for(let s=0;s<r.length;s++){let i=r[s];if((n=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&n[i.type]){let l=i,d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){e+=d||"";continue}}let o=i;switch(o.type){case"space":{e+=this.renderer.space(o);break}case"hr":{e+=this.renderer.hr(o);break}case"heading":{e+=this.renderer.heading(o);break}case"code":{e+=this.renderer.code(o);break}case"table":{e+=this.renderer.table(o);break}case"blockquote":{e+=this.renderer.blockquote(o);break}case"list":{e+=this.renderer.list(o);break}case"checkbox":{e+=this.renderer.checkbox(o);break}case"html":{e+=this.renderer.html(o);break}case"def":{e+=this.renderer.def(o);break}case"paragraph":{e+=this.renderer.paragraph(o);break}case"text":{e+=this.renderer.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return e}parseInline(r,e=this.renderer){var n,s;this.renderer.parser=this;let t="";for(let i=0;i<r.length;i++){let o=r[i];if((s=(n=this.options.extensions)==null?void 0:n.renderers)!=null&&s[o.type]){let d=this.options.extensions.renderers[o.type].call({parser:this},o);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){t+=d||"";continue}}let l=o;switch(l.type){case"escape":{t+=e.text(l);break}case"html":{t+=e.html(l);break}case"link":{t+=e.link(l);break}case"image":{t+=e.image(l);break}case"checkbox":{t+=e.checkbox(l);break}case"strong":{t+=e.strong(l);break}case"em":{t+=e.em(l);break}case"codespan":{t+=e.codespan(l);break}case"br":{t+=e.br(l);break}case"del":{t+=e.del(l);break}case"text":{t+=e.text(l);break}default:{let d='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return t}},Qe,ze=(Qe=class{constructor(a){S(this,"options");S(this,"block");this.options=a||Ne}preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}emStrongMask(a){return a}provideLexer(a=this.block){return a?me.lex:me.lexInline}provideParser(a=this.block){return a?be.parse:be.parseInline}},S(Qe,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),S(Qe,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Qe),Fa=class{constructor(...a){S(this,"defaults",Lt());S(this,"options",this.setOptions);S(this,"parse",this.parseMarkdown(!0));S(this,"parseInline",this.parseMarkdown(!1));S(this,"Parser",be);S(this,"Renderer",et);S(this,"TextRenderer",Dt);S(this,"Lexer",me);S(this,"Tokenizer",Je);S(this,"Hooks",ze);this.use(...a)}walkTokens(a,r){var t,n;let e=[];for(let s of a)switch(e=e.concat(r.call(this,s)),s.type){case"table":{let i=s;for(let o of i.header)e=e.concat(this.walkTokens(o.tokens,r));for(let o of i.rows)for(let l of o)e=e.concat(this.walkTokens(l.tokens,r));break}case"list":{let i=s;e=e.concat(this.walkTokens(i.items,r));break}default:{let i=s;(n=(t=this.defaults.extensions)==null?void 0:t.childTokens)!=null&&n[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let l=i[o].flat(1/0);e=e.concat(this.walkTokens(l,r))}):i.tokens&&(e=e.concat(this.walkTokens(i.tokens,r)))}}return e}use(...a){let r=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(e=>{let t={...e};if(t.async=this.defaults.async||t.async||!1,e.extensions&&(e.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let s=r.renderers[n.name];s?r.renderers[n.name]=function(...i){let o=n.renderer.apply(this,i);return o===!1&&(o=s.apply(this,i)),o}:r.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=r[n.level];s?s.unshift(n.tokenizer):r[n.level]=[n.tokenizer],n.start&&(n.level==="block"?r.startBlock?r.startBlock.push(n.start):r.startBlock=[n.start]:n.level==="inline"&&(r.startInline?r.startInline.push(n.start):r.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(r.childTokens[n.name]=n.childTokens)}),t.extensions=r),e.renderer){let n=this.defaults.renderer||new et(this.defaults);for(let s in e.renderer){if(!(s in n))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let i=s,o=e.renderer[i],l=n[i];n[i]=(...d)=>{let u=o.apply(n,d);return u===!1&&(u=l.apply(n,d)),u||""}}t.renderer=n}if(e.tokenizer){let n=this.defaults.tokenizer||new Je(this.defaults);for(let s in e.tokenizer){if(!(s in n))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let i=s,o=e.tokenizer[i],l=n[i];n[i]=(...d)=>{let u=o.apply(n,d);return u===!1&&(u=l.apply(n,d)),u}}t.tokenizer=n}if(e.hooks){let n=this.defaults.hooks||new ze;for(let s in e.hooks){if(!(s in n))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let i=s,o=e.hooks[i],l=n[i];ze.passThroughHooks.has(s)?n[i]=d=>{if(this.defaults.async&&ze.passThroughHooksRespectAsync.has(s))return(async()=>{let p=await o.call(n,d);return l.call(n,p)})();let u=o.call(n,d);return l.call(n,u)}:n[i]=(...d)=>{if(this.defaults.async)return(async()=>{let p=await o.apply(n,d);return p===!1&&(p=await l.apply(n,d)),p})();let u=o.apply(n,d);return u===!1&&(u=l.apply(n,d)),u}}t.hooks=n}if(e.walkTokens){let n=this.defaults.walkTokens,s=e.walkTokens;t.walkTokens=function(i){let o=[];return o.push(s.call(this,i)),n&&(o=o.concat(n.call(this,i))),o}}this.defaults={...this.defaults,...t}}),this}setOptions(a){return this.defaults={...this.defaults,...a},this}lexer(a,r){return me.lex(a,r??this.defaults)}parser(a,r){return be.parse(a,r??this.defaults)}parseMarkdown(a){return(r,e)=>{let t={...e},n={...this.defaults,...t},s=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&t.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=a),n.async)return(async()=>{let i=n.hooks?await n.hooks.preprocess(r):r,o=await(n.hooks?await n.hooks.provideLexer(a):a?me.lex:me.lexInline)(i,n),l=n.hooks?await n.hooks.processAllTokens(o):o;n.walkTokens&&await Promise.all(this.walkTokens(l,n.walkTokens));let d=await(n.hooks?await n.hooks.provideParser(a):a?be.parse:be.parseInline)(l,n);return n.hooks?await n.hooks.postprocess(d):d})().catch(s);try{n.hooks&&(r=n.hooks.preprocess(r));let i=(n.hooks?n.hooks.provideLexer(a):a?me.lex:me.lexInline)(r,n);n.hooks&&(i=n.hooks.processAllTokens(i)),n.walkTokens&&this.walkTokens(i,n.walkTokens);let o=(n.hooks?n.hooks.provideParser(a):a?be.parse:be.parseInline)(i,n);return n.hooks&&(o=n.hooks.postprocess(o)),o}catch(i){return s(i)}}}onError(a,r){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,a){let t="<p>An error occurred:</p><pre>"+ye(e.message+"",!0)+"</pre>";return r?Promise.resolve(t):t}if(r)return Promise.reject(e);throw e}}},Re=new Fa;function z(a,r){return Re.parse(a,r)}z.options=z.setOptions=function(a){return Re.setOptions(a),z.defaults=Re.defaults,wr(z.defaults),z};z.getDefaults=Lt;z.defaults=Ne;z.use=function(...a){return Re.use(...a),z.defaults=Re.defaults,wr(z.defaults),z};z.walkTokens=function(a,r){return Re.walkTokens(a,r)};z.parseInline=Re.parseInline;z.Parser=be;z.parser=be.parse;z.Renderer=et;z.TextRenderer=Dt;z.Lexer=me;z.lexer=me.lex;z.Tokenizer=Je;z.Hooks=ze;z.parse=z;z.options;z.setOptions;z.use;z.walkTokens;z.parseInline;be.parse;me.lex;const fr=[{type:"note",icon:'<svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'},{type:"tip",icon:'<svg class="octicon octicon-light-bulb mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>'},{type:"important",icon:'<svg class="octicon octicon-report mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>'},{type:"warning",icon:'<svg class="octicon octicon-alert mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>'},{type:"caution",icon:'<svg class="octicon octicon-stop mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'}];function Za(a){return a.length?Object.values([...fr,...a].reduce((r,e)=>(r[e.type]=e,r),{})):fr}function mr(a){return`^(?:\\[!${a.toUpperCase()}])\\s*?
*`}function Xa(a){return a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase()}function Ya(a={}){const{className:r="markdown-alert",variants:e=[]}=a,t=Za(e);return{walkTokens(n){var s,i,o,l;if(n.type!=="blockquote")return;const d=t.find(({type:u})=>new RegExp(mr(u)).test(n.text));if(d){const{type:u,icon:p,title:h=Xa(u),titleClassName:x=`${r}-title`}=d,g=new RegExp(mr(u));Object.assign(n,{type:"alert",meta:{className:r,variant:u,icon:p,title:h,titleClassName:x}});const m=(s=n.tokens)==null?void 0:s[0];if((i=m.raw)!=null&&i.replace(g,"").trim()){const y=m.tokens[0];Object.assign(y,{raw:y.raw.replace(g,""),text:y.text.replace(g,"")}),((o=m.tokens[1])==null?void 0:o.type)==="br"&&m.tokens.splice(1,1)}else(l=n.tokens)==null||l.shift()}},extensions:[{name:"alert",level:"block",renderer({meta:n,tokens:s=[]}){let i=`<div class="${n.className} ${n.className}-${n.variant}">
`;return i+=`<p class="${n.titleClassName}">`,i+=n.icon,i+=n.title,i+=`</p>
`,i+=this.parser.parse(s),i+=`</div>
`,i}}]}}function Wa(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var kt,br;function Ka(){if(br)return kt;br=1;function a(c){return c instanceof Map?c.clear=c.delete=c.set=function(){throw new Error("map is read-only")}:c instanceof Set&&(c.add=c.clear=c.delete=function(){throw new Error("set is read-only")}),Object.freeze(c),Object.getOwnPropertyNames(c).forEach(f=>{const v=c[f],R=typeof v;(R==="object"||R==="function")&&!Object.isFrozen(v)&&a(v)}),c}class r{constructor(f){f.data===void 0&&(f.data={}),this.data=f.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function e(c){return c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(c,...f){const v=Object.create(null);for(const R in c)v[R]=c[R];return f.forEach(function(R){for(const V in R)v[V]=R[V]}),v}const n="</span>",s=c=>!!c.scope,i=(c,{prefix:f})=>{if(c.startsWith("language:"))return c.replace("language:","language-");if(c.includes(".")){const v=c.split(".");return[`${f}${v.shift()}`,...v.map((R,V)=>`${R}${"_".repeat(V+1)}`)].join(" ")}return`${f}${c}`};class o{constructor(f,v){this.buffer="",this.classPrefix=v.classPrefix,f.walk(this)}addText(f){this.buffer+=e(f)}openNode(f){if(!s(f))return;const v=i(f.scope,{prefix:this.classPrefix});this.span(v)}closeNode(f){s(f)&&(this.buffer+=n)}value(){return this.buffer}span(f){this.buffer+=`<span class="${f}">`}}const l=(c={})=>{const f={children:[]};return Object.assign(f,c),f};class d{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(f){this.top.children.push(f)}openNode(f){const v=l({scope:f});this.add(v),this.stack.push(v)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(f){return this.constructor._walk(f,this.rootNode)}static _walk(f,v){return typeof v=="string"?f.addText(v):v.children&&(f.openNode(v),v.children.forEach(R=>this._walk(f,R)),f.closeNode(v)),f}static _collapse(f){typeof f!="string"&&f.children&&(f.children.every(v=>typeof v=="string")?f.children=[f.children.join("")]:f.children.forEach(v=>{d._collapse(v)}))}}class u extends d{constructor(f){super(),this.options=f}addText(f){f!==""&&this.add(f)}startScope(f){this.openNode(f)}endScope(){this.closeNode()}__addSublanguage(f,v){const R=f.root;v&&(R.scope=`language:${v}`),this.add(R)}toHTML(){return new o(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function p(c){return c?typeof c=="string"?c:c.source:null}function h(c){return m("(?=",c,")")}function x(c){return m("(?:",c,")*")}function g(c){return m("(?:",c,")?")}function m(...c){return c.map(v=>p(v)).join("")}function y(c){const f=c[c.length-1];return typeof f=="object"&&f.constructor===Object?(c.splice(c.length-1,1),f):{}}function L(...c){return"("+(y(c).capture?"":"?:")+c.map(R=>p(R)).join("|")+")"}function A(c){return new RegExp(c.toString()+"|").exec("").length-1}function O(c,f){const v=c&&c.exec(f);return v&&v.index===0}const F=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function q(c,{joinWith:f}){let v=0;return c.map(R=>{v+=1;const V=v;let J=p(R),E="";for(;J.length>0;){const w=F.exec(J);if(!w){E+=J;break}E+=J.substring(0,w.index),J=J.substring(w.index+w[0].length),w[0][0]==="\\"&&w[1]?E+="\\"+String(Number(w[1])+V):(E+=w[0],w[0]==="("&&v++)}return E}).map(R=>`(${R})`).join(f)}const j=/\b\B/,Z="[a-zA-Z]\\w*",Q="[a-zA-Z_]\\w*",pe="\\b\\d+(\\.\\d+)?",C="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",N="\\b(0b[01]+)",K="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",ee=(c={})=>{const f=/^#![ ]*\//;return c.binary&&(c.begin=m(f,/.*\b/,c.binary,/\b.*/)),t({scope:"meta",begin:f,end:/$/,relevance:0,"on:begin":(v,R)=>{v.index!==0&&R.ignoreMatch()}},c)},re={begin:"\\\\[\\s\\S]",relevance:0},he={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[re]},le={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[re]},ce={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},P=function(c,f,v={}){const R=t({scope:"comment",begin:c,end:f,contains:[]},v);R.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const V=L("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return R.contains.push({begin:m(/[ ]+/,"(",V,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),R},I=P("//","$"),U=P("/\\*","\\*/"),X=P("#","$"),de={scope:"number",begin:pe,relevance:0},Ee={scope:"number",begin:C,relevance:0},qe={scope:"number",begin:N,relevance:0},st={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[re,{begin:/\[/,end:/\]/,relevance:0,contains:[re]}]},it={scope:"title",begin:Z,relevance:0},ot={scope:"title",begin:Q,relevance:0},lt={begin:"\\.\\s*"+Q,relevance:0};var ke=Object.freeze({__proto__:null,APOS_STRING_MODE:he,BACKSLASH_ESCAPE:re,BINARY_NUMBER_MODE:qe,BINARY_NUMBER_RE:N,COMMENT:P,C_BLOCK_COMMENT_MODE:U,C_LINE_COMMENT_MODE:I,C_NUMBER_MODE:Ee,C_NUMBER_RE:C,END_SAME_AS_BEGIN:function(c){return Object.assign(c,{"on:begin":(f,v)=>{v.data._beginMatch=f[1]},"on:end":(f,v)=>{v.data._beginMatch!==f[1]&&v.ignoreMatch()}})},HASH_COMMENT_MODE:X,IDENT_RE:Z,MATCH_NOTHING_RE:j,METHOD_GUARD:lt,NUMBER_MODE:de,NUMBER_RE:pe,PHRASAL_WORDS_MODE:ce,QUOTE_STRING_MODE:le,REGEXP_MODE:st,RE_STARTERS_RE:K,SHEBANG:ee,TITLE_MODE:it,UNDERSCORE_IDENT_RE:Q,UNDERSCORE_TITLE_MODE:ot});function Ae(c,f){c.input[c.index-1]==="."&&f.ignoreMatch()}function ct(c,f){c.className!==void 0&&(c.scope=c.className,delete c.className)}function dt(c,f){f&&c.beginKeywords&&(c.begin="\\b("+c.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",c.__beforeBegin=Ae,c.keywords=c.keywords||c.beginKeywords,delete c.beginKeywords,c.relevance===void 0&&(c.relevance=0))}function ut(c,f){Array.isArray(c.illegal)&&(c.illegal=L(...c.illegal))}function pt(c,f){if(c.match){if(c.begin||c.end)throw new Error("begin & end are not supported with match");c.begin=c.match,delete c.match}}function ht(c,f){c.relevance===void 0&&(c.relevance=1)}const Xr=(c,f)=>{if(!c.beforeMatch)return;if(c.starts)throw new Error("beforeMatch cannot be used with starts");const v=Object.assign({},c);Object.keys(c).forEach(R=>{delete c[R]}),c.keywords=v.keywords,c.begin=m(v.beforeMatch,h(v.begin)),c.starts={relevance:0,contains:[Object.assign(v,{endsParent:!0})]},c.relevance=0,delete v.beforeMatch},Yr=["of","and","for","in","not","or","if","then","parent","list","value"],Wr="keyword";function Bt(c,f,v=Wr){const R=Object.create(null);return typeof c=="string"?V(v,c.split(" ")):Array.isArray(c)?V(v,c):Object.keys(c).forEach(function(J){Object.assign(R,Bt(c[J],f,J))}),R;function V(J,E){f&&(E=E.map(w=>w.toLowerCase())),E.forEach(function(w){const M=w.split("|");R[M[0]]=[J,Kr(M[0],M[1])]})}}function Kr(c,f){return f?Number(f):Qr(c)?0:1}function Qr(c){return Yr.includes(c.toLowerCase())}const Ht={},Le=c=>{console.error(c)},zt=(c,...f)=>{console.log(`WARN: ${c}`,...f)},$e=(c,f)=>{Ht[`${c}/${f}`]||(console.log(`Deprecated as of ${c}. ${f}`),Ht[`${c}/${f}`]=!0)},Ge=new Error;function jt(c,f,{key:v}){let R=0;const V=c[v],J={},E={};for(let w=1;w<=f.length;w++)E[w+R]=V[w],J[w+R]=!0,R+=A(f[w-1]);c[v]=E,c[v]._emit=J,c[v]._multi=!0}function Vr(c){if(Array.isArray(c.begin)){if(c.skip||c.excludeBegin||c.returnBegin)throw Le("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ge;if(typeof c.beginScope!="object"||c.beginScope===null)throw Le("beginScope must be object"),Ge;jt(c,c.begin,{key:"beginScope"}),c.begin=q(c.begin,{joinWith:""})}}function Jr(c){if(Array.isArray(c.end)){if(c.skip||c.excludeEnd||c.returnEnd)throw Le("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ge;if(typeof c.endScope!="object"||c.endScope===null)throw Le("endScope must be object"),Ge;jt(c,c.end,{key:"endScope"}),c.end=q(c.end,{joinWith:""})}}function en(c){c.scope&&typeof c.scope=="object"&&c.scope!==null&&(c.beginScope=c.scope,delete c.scope)}function tn(c){en(c),typeof c.beginScope=="string"&&(c.beginScope={_wrap:c.beginScope}),typeof c.endScope=="string"&&(c.endScope={_wrap:c.endScope}),Vr(c),Jr(c)}function rn(c){function f(E,w){return new RegExp(p(E),"m"+(c.case_insensitive?"i":"")+(c.unicodeRegex?"u":"")+(w?"g":""))}class v{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(w,M){M.position=this.position++,this.matchIndexes[this.matchAt]=M,this.regexes.push([M,w]),this.matchAt+=A(w)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const w=this.regexes.map(M=>M[1]);this.matcherRe=f(q(w,{joinWith:"|"}),!0),this.lastIndex=0}exec(w){this.matcherRe.lastIndex=this.lastIndex;const M=this.matcherRe.exec(w);if(!M)return null;const ae=M.findIndex((Pe,ft)=>ft>0&&Pe!==void 0),te=this.matchIndexes[ae];return M.splice(0,ae),Object.assign(M,te)}}class R{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(w){if(this.multiRegexes[w])return this.multiRegexes[w];const M=new v;return this.rules.slice(w).forEach(([ae,te])=>M.addRule(ae,te)),M.compile(),this.multiRegexes[w]=M,M}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(w,M){this.rules.push([w,M]),M.type==="begin"&&this.count++}exec(w){const M=this.getMatcher(this.regexIndex);M.lastIndex=this.lastIndex;let ae=M.exec(w);if(this.resumingScanAtSamePosition()&&!(ae&&ae.index===this.lastIndex)){const te=this.getMatcher(0);te.lastIndex=this.lastIndex+1,ae=te.exec(w)}return ae&&(this.regexIndex+=ae.position+1,this.regexIndex===this.count&&this.considerAll()),ae}}function V(E){const w=new R;return E.contains.forEach(M=>w.addRule(M.begin,{rule:M,type:"begin"})),E.terminatorEnd&&w.addRule(E.terminatorEnd,{type:"end"}),E.illegal&&w.addRule(E.illegal,{type:"illegal"}),w}function J(E,w){const M=E;if(E.isCompiled)return M;[ct,pt,tn,Xr].forEach(te=>te(E,w)),c.compilerExtensions.forEach(te=>te(E,w)),E.__beforeBegin=null,[dt,ut,ht].forEach(te=>te(E,w)),E.isCompiled=!0;let ae=null;return typeof E.keywords=="object"&&E.keywords.$pattern&&(E.keywords=Object.assign({},E.keywords),ae=E.keywords.$pattern,delete E.keywords.$pattern),ae=ae||/\w+/,E.keywords&&(E.keywords=Bt(E.keywords,c.case_insensitive)),M.keywordPatternRe=f(ae,!0),w&&(E.begin||(E.begin=/\B|\b/),M.beginRe=f(M.begin),!E.end&&!E.endsWithParent&&(E.end=/\B|\b/),E.end&&(M.endRe=f(M.end)),M.terminatorEnd=p(M.end)||"",E.endsWithParent&&w.terminatorEnd&&(M.terminatorEnd+=(E.end?"|":"")+w.terminatorEnd)),E.illegal&&(M.illegalRe=f(E.illegal)),E.contains||(E.contains=[]),E.contains=[].concat(...E.contains.map(function(te){return nn(te==="self"?E:te)})),E.contains.forEach(function(te){J(te,M)}),E.starts&&J(E.starts,w),M.matcher=V(M),M}if(c.compilerExtensions||(c.compilerExtensions=[]),c.contains&&c.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return c.classNameAliases=t(c.classNameAliases||{}),J(c)}function Ut(c){return c?c.endsWithParent||Ut(c.starts):!1}function nn(c){return c.variants&&!c.cachedVariants&&(c.cachedVariants=c.variants.map(function(f){return t(c,{variants:null},f)})),c.cachedVariants?c.cachedVariants:Ut(c)?t(c,{starts:c.starts?t(c.starts):null}):Object.isFrozen(c)?t(c):c}var an="11.11.1";class sn extends Error{constructor(f,v){super(f),this.name="HTMLInjectionError",this.html=v}}const gt=e,qt=t,Gt=Symbol("nomatch"),on=7,Ft=function(c){const f=Object.create(null),v=Object.create(null),R=[];let V=!0;const J="Could not find the language '{}', did you forget to load/include a language module?",E={disableAutodetect:!0,name:"Plain text",contains:[]};let w={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:u};function M(b){return w.noHighlightRe.test(b)}function ae(b){let T=b.className+" ";T+=b.parentNode?b.parentNode.className:"";const B=w.languageDetectRe.exec(T);if(B){const Y=_e(B[1]);return Y||(zt(J.replace("{}",B[1])),zt("Falling back to no-highlight mode for this block.",b)),Y?B[1]:"no-highlight"}return T.split(/\s+/).find(Y=>M(Y)||_e(Y))}function te(b,T,B){let Y="",ne="";typeof T=="object"?(Y=b,B=T.ignoreIllegals,ne=T.language):($e("10.7.0","highlight(lang, code, ...args) has been deprecated."),$e("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ne=b,Y=T),B===void 0&&(B=!0);const fe={code:Y,language:ne};Ze("before:highlight",fe);const Se=fe.result?fe.result:Pe(fe.language,fe.code,B);return Se.code=fe.code,Ze("after:highlight",Se),Se}function Pe(b,T,B,Y){const ne=Object.create(null);function fe(k,_){return k.keywords[_]}function Se(){if(!$.keywords){se.addText(W);return}let k=0;$.keywordPatternRe.lastIndex=0;let _=$.keywordPatternRe.exec(W),D="";for(;_;){D+=W.substring(k,_.index);const G=ve.case_insensitive?_[0].toLowerCase():_[0],ie=fe($,G);if(ie){const[we,_n]=ie;if(se.addText(D),D="",ne[G]=(ne[G]||0)+1,ne[G]<=on&&(We+=_n),we.startsWith("_"))D+=_[0];else{const Sn=ve.classNameAliases[we]||we;xe(_[0],Sn)}}else D+=_[0];k=$.keywordPatternRe.lastIndex,_=$.keywordPatternRe.exec(W)}D+=W.substring(k),se.addText(D)}function Xe(){if(W==="")return;let k=null;if(typeof $.subLanguage=="string"){if(!f[$.subLanguage]){se.addText(W);return}k=Pe($.subLanguage,W,!0,Jt[$.subLanguage]),Jt[$.subLanguage]=k._top}else k=mt(W,$.subLanguage.length?$.subLanguage:null);$.relevance>0&&(We+=k.relevance),se.__addSublanguage(k._emitter,k.language)}function ge(){$.subLanguage!=null?Xe():Se(),W=""}function xe(k,_){k!==""&&(se.startScope(_),se.addText(k),se.endScope())}function Wt(k,_){let D=1;const G=_.length-1;for(;D<=G;){if(!k._emit[D]){D++;continue}const ie=ve.classNameAliases[k[D]]||k[D],we=_[D];ie?xe(we,ie):(W=we,Se(),W=""),D++}}function Kt(k,_){return k.scope&&typeof k.scope=="string"&&se.openNode(ve.classNameAliases[k.scope]||k.scope),k.beginScope&&(k.beginScope._wrap?(xe(W,ve.classNameAliases[k.beginScope._wrap]||k.beginScope._wrap),W=""):k.beginScope._multi&&(Wt(k.beginScope,_),W="")),$=Object.create(k,{parent:{value:$}}),$}function Qt(k,_,D){let G=O(k.endRe,D);if(G){if(k["on:end"]){const ie=new r(k);k["on:end"](_,ie),ie.isMatchIgnored&&(G=!1)}if(G){for(;k.endsParent&&k.parent;)k=k.parent;return k}}if(k.endsWithParent)return Qt(k.parent,_,D)}function vn(k){return $.matcher.regexIndex===0?(W+=k[0],1):(yt=!0,0)}function yn(k){const _=k[0],D=k.rule,G=new r(D),ie=[D.__beforeBegin,D["on:begin"]];for(const we of ie)if(we&&(we(k,G),G.isMatchIgnored))return vn(_);return D.skip?W+=_:(D.excludeBegin&&(W+=_),ge(),!D.returnBegin&&!D.excludeBegin&&(W=_)),Kt(D,k),D.returnBegin?0:_.length}function kn(k){const _=k[0],D=T.substring(k.index),G=Qt($,k,D);if(!G)return Gt;const ie=$;$.endScope&&$.endScope._wrap?(ge(),xe(_,$.endScope._wrap)):$.endScope&&$.endScope._multi?(ge(),Wt($.endScope,k)):ie.skip?W+=_:(ie.returnEnd||ie.excludeEnd||(W+=_),ge(),ie.excludeEnd&&(W=_));do $.scope&&se.closeNode(),!$.skip&&!$.subLanguage&&(We+=$.relevance),$=$.parent;while($!==G.parent);return G.starts&&Kt(G.starts,k),ie.returnEnd?0:_.length}function wn(){const k=[];for(let _=$;_!==ve;_=_.parent)_.scope&&k.unshift(_.scope);k.forEach(_=>se.openNode(_))}let Ye={};function Vt(k,_){const D=_&&_[0];if(W+=k,D==null)return ge(),0;if(Ye.type==="begin"&&_.type==="end"&&Ye.index===_.index&&D===""){if(W+=T.slice(_.index,_.index+1),!V){const G=new Error(`0 width match regex (${b})`);throw G.languageName=b,G.badRule=Ye.rule,G}return 1}if(Ye=_,_.type==="begin")return yn(_);if(_.type==="illegal"&&!B){const G=new Error('Illegal lexeme "'+D+'" for mode "'+($.scope||"<unnamed>")+'"');throw G.mode=$,G}else if(_.type==="end"){const G=kn(_);if(G!==Gt)return G}if(_.type==="illegal"&&D==="")return W+=`
`,1;if(vt>1e5&&vt>_.index*3)throw new Error("potential infinite loop, way more iterations than matches");return W+=D,D.length}const ve=_e(b);if(!ve)throw Le(J.replace("{}",b)),new Error('Unknown language: "'+b+'"');const En=rn(ve);let xt="",$=Y||En;const Jt={},se=new w.__emitter(w);wn();let W="",We=0,Me=0,vt=0,yt=!1;try{if(ve.__emitTokens)ve.__emitTokens(T,se);else{for($.matcher.considerAll();;){vt++,yt?yt=!1:$.matcher.considerAll(),$.matcher.lastIndex=Me;const k=$.matcher.exec(T);if(!k)break;const _=T.substring(Me,k.index),D=Vt(_,k);Me=k.index+D}Vt(T.substring(Me))}return se.finalize(),xt=se.toHTML(),{language:b,value:xt,relevance:We,illegal:!1,_emitter:se,_top:$}}catch(k){if(k.message&&k.message.includes("Illegal"))return{language:b,value:gt(T),illegal:!0,relevance:0,_illegalBy:{message:k.message,index:Me,context:T.slice(Me-100,Me+100),mode:k.mode,resultSoFar:xt},_emitter:se};if(V)return{language:b,value:gt(T),illegal:!1,relevance:0,errorRaised:k,_emitter:se,_top:$};throw k}}function ft(b){const T={value:gt(b),illegal:!1,relevance:0,_top:E,_emitter:new w.__emitter(w)};return T._emitter.addText(b),T}function mt(b,T){T=T||w.languages||Object.keys(f);const B=ft(b),Y=T.filter(_e).filter(Yt).map(ge=>Pe(ge,b,!1));Y.unshift(B);const ne=Y.sort((ge,xe)=>{if(ge.relevance!==xe.relevance)return xe.relevance-ge.relevance;if(ge.language&&xe.language){if(_e(ge.language).supersetOf===xe.language)return 1;if(_e(xe.language).supersetOf===ge.language)return-1}return 0}),[fe,Se]=ne,Xe=fe;return Xe.secondBest=Se,Xe}function ln(b,T,B){const Y=T&&v[T]||B;b.classList.add("hljs"),b.classList.add(`language-${Y}`)}function bt(b){let T=null;const B=ae(b);if(M(B))return;if(Ze("before:highlightElement",{el:b,language:B}),b.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",b);return}if(b.children.length>0&&(w.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(b)),w.throwUnescapedHTML))throw new sn("One of your code blocks includes unescaped HTML.",b.innerHTML);T=b;const Y=T.textContent,ne=B?te(Y,{language:B,ignoreIllegals:!0}):mt(Y);b.innerHTML=ne.value,b.dataset.highlighted="yes",ln(b,B,ne.language),b.result={language:ne.language,re:ne.relevance,relevance:ne.relevance},ne.secondBest&&(b.secondBest={language:ne.secondBest.language,relevance:ne.secondBest.relevance}),Ze("after:highlightElement",{el:b,result:ne,text:Y})}function cn(b){w=qt(w,b)}const dn=()=>{Fe(),$e("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function un(){Fe(),$e("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Zt=!1;function Fe(){function b(){Fe()}if(document.readyState==="loading"){Zt||window.addEventListener("DOMContentLoaded",b,!1),Zt=!0;return}document.querySelectorAll(w.cssSelector).forEach(bt)}function pn(b,T){let B=null;try{B=T(c)}catch(Y){if(Le("Language definition for '{}' could not be registered.".replace("{}",b)),V)Le(Y);else throw Y;B=E}B.name||(B.name=b),f[b]=B,B.rawDefinition=T.bind(null,c),B.aliases&&Xt(B.aliases,{languageName:b})}function hn(b){delete f[b];for(const T of Object.keys(v))v[T]===b&&delete v[T]}function gn(){return Object.keys(f)}function _e(b){return b=(b||"").toLowerCase(),f[b]||f[v[b]]}function Xt(b,{languageName:T}){typeof b=="string"&&(b=[b]),b.forEach(B=>{v[B.toLowerCase()]=T})}function Yt(b){const T=_e(b);return T&&!T.disableAutodetect}function fn(b){b["before:highlightBlock"]&&!b["before:highlightElement"]&&(b["before:highlightElement"]=T=>{b["before:highlightBlock"](Object.assign({block:T.el},T))}),b["after:highlightBlock"]&&!b["after:highlightElement"]&&(b["after:highlightElement"]=T=>{b["after:highlightBlock"](Object.assign({block:T.el},T))})}function mn(b){fn(b),R.push(b)}function bn(b){const T=R.indexOf(b);T!==-1&&R.splice(T,1)}function Ze(b,T){const B=b;R.forEach(function(Y){Y[B]&&Y[B](T)})}function xn(b){return $e("10.7.0","highlightBlock will be removed entirely in v12.0"),$e("10.7.0","Please use highlightElement now."),bt(b)}Object.assign(c,{highlight:te,highlightAuto:mt,highlightAll:Fe,highlightElement:bt,highlightBlock:xn,configure:cn,initHighlighting:dn,initHighlightingOnLoad:un,registerLanguage:pn,unregisterLanguage:hn,listLanguages:gn,getLanguage:_e,registerAliases:Xt,autoDetection:Yt,inherit:qt,addPlugin:mn,removePlugin:bn}),c.debugMode=function(){V=!1},c.safeMode=function(){V=!0},c.versionString=an,c.regex={concat:m,lookahead:h,either:L,optional:g,anyNumberOfTimes:x};for(const b in ke)typeof ke[b]=="object"&&a(ke[b]);return Object.assign(c,ke),c},Oe=Ft({});return Oe.newInstance=()=>Ft({}),kt=Oe,Oe.HighlightJS=Oe,Oe.default=Oe,kt}var Qa=Ka();const ue=Wa(Qa),xr="[A-Za-z$_][0-9A-Za-z$_]*",Va=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Ja=["true","false","null","undefined","NaN","Infinity"],Nr=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],$r=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Or=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],es=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ts=[].concat(Or,Nr,$r);function Ir(a){const r=a.regex,e=(P,{after:I})=>{const U="</"+P[0].slice(1);return P.input.indexOf(U,I)!==-1},t=xr,n={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(P,I)=>{const U=P[0].length+P.index,X=P.input[U];if(X==="<"||X===","){I.ignoreMatch();return}X===">"&&(e(P,{after:U})||I.ignoreMatch());let de;const Ee=P.input.substring(U);if(de=Ee.match(/^\s*=/)){I.ignoreMatch();return}if((de=Ee.match(/^\s+extends\s+/))&&de.index===0){I.ignoreMatch();return}}},o={$pattern:xr,keyword:Va,literal:Ja,built_in:ts,"variable.language":es},l="[0-9](_?[0-9])*",d=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},x={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},g={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},y={className:"string",begin:"`",end:"`",contains:[a.BACKSLASH_ESCAPE,h]},A={className:"comment",variants:[a.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),a.C_BLOCK_COMMENT_MODE,a.C_LINE_COMMENT_MODE]},O=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,x,g,m,y,{match:/\$\d+/},p];h.contains=O.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(O)});const F=[].concat(A,h.contains),q=F.concat([{begin:/(\s*)\(/,end:/\)/,keywords:o,contains:["self"].concat(F)}]),j={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:q},Z={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,r.concat(t,"(",r.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},Q={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Nr,...$r]}},pe={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},C={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[j],illegal:/%/},N={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function K(P){return r.concat("(?!",P.join("|"),")")}const ee={match:r.concat(/\b/,K([...Or,"super","import"].map(P=>`${P}\\s*\\(`)),t,r.lookahead(/\s*\(/)),className:"title.function",relevance:0},re={begin:r.concat(/\./,r.lookahead(r.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},he={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},j]},le="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+a.UNDERSCORE_IDENT_RE+")\\s*=>",ce={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(le)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[j]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:q,CLASS_REFERENCE:Q},illegal:/#(?![$_A-z])/,contains:[a.SHEBANG({label:"shebang",binary:"node",relevance:5}),pe,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,x,g,m,y,A,{match:/\$\d+/},p,Q,{scope:"attr",match:t+r.lookahead(":"),relevance:0},ce,{begin:"("+a.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[A,a.REGEXP_MODE,{className:"function",begin:le,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:a.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:q}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:n.begin,end:n.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},C,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+a.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[j,a.inherit(a.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},re,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[j]},ee,N,Z,he,{match:/\$[(.]/}]}}const tt="[A-Za-z$_][0-9A-Za-z$_]*",Dr=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Pr=["true","false","null","undefined","NaN","Infinity"],Br=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Hr=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],zr=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],jr=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ur=[].concat(zr,Br,Hr);function rs(a){const r=a.regex,e=(P,{after:I})=>{const U="</"+P[0].slice(1);return P.input.indexOf(U,I)!==-1},t=tt,n={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(P,I)=>{const U=P[0].length+P.index,X=P.input[U];if(X==="<"||X===","){I.ignoreMatch();return}X===">"&&(e(P,{after:U})||I.ignoreMatch());let de;const Ee=P.input.substring(U);if(de=Ee.match(/^\s*=/)){I.ignoreMatch();return}if((de=Ee.match(/^\s+extends\s+/))&&de.index===0){I.ignoreMatch();return}}},o={$pattern:tt,keyword:Dr,literal:Pr,built_in:Ur,"variable.language":jr},l="[0-9](_?[0-9])*",d=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},x={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},g={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},y={className:"string",begin:"`",end:"`",contains:[a.BACKSLASH_ESCAPE,h]},A={className:"comment",variants:[a.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),a.C_BLOCK_COMMENT_MODE,a.C_LINE_COMMENT_MODE]},O=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,x,g,m,y,{match:/\$\d+/},p];h.contains=O.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(O)});const F=[].concat(A,h.contains),q=F.concat([{begin:/(\s*)\(/,end:/\)/,keywords:o,contains:["self"].concat(F)}]),j={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:q},Z={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,r.concat(t,"(",r.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},Q={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Br,...Hr]}},pe={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},C={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[j],illegal:/%/},N={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function K(P){return r.concat("(?!",P.join("|"),")")}const ee={match:r.concat(/\b/,K([...zr,"super","import"].map(P=>`${P}\\s*\\(`)),t,r.lookahead(/\s*\(/)),className:"title.function",relevance:0},re={begin:r.concat(/\./,r.lookahead(r.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},he={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},j]},le="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+a.UNDERSCORE_IDENT_RE+")\\s*=>",ce={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(le)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[j]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:q,CLASS_REFERENCE:Q},illegal:/#(?![$_A-z])/,contains:[a.SHEBANG({label:"shebang",binary:"node",relevance:5}),pe,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,x,g,m,y,A,{match:/\$\d+/},p,Q,{scope:"attr",match:t+r.lookahead(":"),relevance:0},ce,{begin:"("+a.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[A,a.REGEXP_MODE,{className:"function",begin:le,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:a.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:q}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:n.begin,end:n.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},C,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+a.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[j,a.inherit(a.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},re,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[j]},ee,N,Z,he,{match:/\$[(.]/}]}}function qr(a){const r=a.regex,e=rs(a),t=tt,n=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],s={begin:[/namespace/,/\s+/,a.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:n},contains:[e.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},l=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],d={$pattern:tt,keyword:Dr.concat(l),literal:Pr,built_in:Ur.concat(n),"variable.language":jr},u={className:"meta",begin:"@"+t},p=(m,y,L)=>{const A=m.contains.findIndex(O=>O.label===y);if(A===-1)throw new Error("can not find mode to replace");m.contains.splice(A,1,L)};Object.assign(e.keywords,d),e.exports.PARAMS_CONTAINS.push(u);const h=e.contains.find(m=>m.scope==="attr"),x=Object.assign({},h,{match:r.concat(t,r.lookahead(/\s*\?:/))});e.exports.PARAMS_CONTAINS.push([e.exports.CLASS_REFERENCE,h,x]),e.contains=e.contains.concat([u,s,i,x]),p(e,"shebang",a.SHEBANG()),p(e,"use_strict",o);const g=e.contains.find(m=>m.label==="func.def");return g.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}function Gr(a){const r=a.regex,e=r.concat(/[\p{L}_]/u,r.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),t=/[\p{L}0-9._:-]+/u,n={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=a.inherit(s,{begin:/\(/,end:/\)/}),o=a.inherit(a.APOS_STRING_MODE,{className:"string"}),l=a.inherit(a.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:t,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,l,o,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,i,l,o]}]}]},a.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},n,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:r.concat(/</,r.lookahead(r.concat(e,r.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:e,relevance:0,starts:d}]},{className:"tag",begin:r.concat(/<\//,r.lookahead(r.concat(e,/>/))),contains:[{className:"name",begin:e,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const ns=a=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:a.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:a.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),as=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],ss=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],is=[...as,...ss],os=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),ls=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),cs=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),ds=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function us(a){const r=a.regex,e=ns(a),t={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},n="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",o=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[e.BLOCK_COMMENT,t,e.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},e.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+ls.join("|")+")"},{begin:":(:)?("+cs.join("|")+")"}]},e.CSS_VARIABLE,{className:"attribute",begin:"\\b("+ds.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[e.BLOCK_COMMENT,e.HEXCOLOR,e.IMPORTANT,e.CSS_NUMBER_MODE,...o,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...o,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},e.FUNCTION_DISPATCH]},{begin:r.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:n,attribute:os.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...o,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+is.join("|")+")\\b"}]}}function ps(a){const r=a.regex,e=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],o={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},l={className:"meta",begin:/^(>>>|\.\.\.) /},d={className:"subst",begin:/\{/,end:/\}/,keywords:o,illegal:/#/},u={begin:/\{\{/,relevance:0},p={className:"string",contains:[a.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[a.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[a.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[a.BACKSLASH_ESCAPE,l,u,d]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[a.BACKSLASH_ESCAPE,l,u,d]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[a.BACKSLASH_ESCAPE,u,d]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[a.BACKSLASH_ESCAPE,u,d]},a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]},h="[0-9](_?[0-9])*",x=`(\\b(${h}))?\\.(${h})|\\b(${h})\\.`,g=`\\b|${t.join("|")}`,m={className:"number",relevance:0,variants:[{begin:`(\\b(${h})|(${x}))[eE][+-]?(${h})[jJ]?(?=${g})`},{begin:`(${x})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${g})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${g})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`},{begin:`\\b(${h})[jJ](?=${g})`}]},y={className:"comment",begin:r.lookahead(/# type:/),end:/$/,keywords:o,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},L={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:["self",l,m,p,a.HASH_COMMENT_MODE]}]};return d.contains=[p,m,l],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:o,illegal:/(<\/|\?)|=>/,contains:[l,m,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},p,y,a.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,e],scope:{1:"keyword",3:"title.function"},contains:[L]},{variants:[{match:[/\bclass/,/\s+/,e,/\s*/,/\(\s*/,e,/\s*\)/]},{match:[/\bclass/,/\s+/,e]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[m,L,p]}]}}function hs(a){const r={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},e={match:/[{}[\],:]/,className:"punctuation",relevance:0},t=["true","false","null"],n={scope:"literal",beginKeywords:t.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:t},contains:[r,e,a.QUOTE_STRING_MODE,n,a.C_NUMBER_MODE,a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Fr(a){const r=a.regex,e={},t={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[e]}]};Object.assign(e,{className:"variable",variants:[{begin:r.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},t]});const n={className:"subst",begin:/\$\(/,end:/\)/,contains:[a.BACKSLASH_ESCAPE]},s=a.inherit(a.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[a.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},o={className:"string",begin:/"/,end:/"/,contains:[a.BACKSLASH_ESCAPE,e,n]};n.contains.push(o);const l={match:/\\"/},d={className:"string",begin:/'/,end:/'/},u={match:/\\'/},p={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},a.NUMBER_MODE,e]},h=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],x=a.SHEBANG({binary:`(${h.join("|")})`,relevance:10}),g={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[a.inherit(a.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},m=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],y=["true","false"],L={match:/(\/[a-z._-]+)+/},A=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],O=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],F=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],q=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:m,literal:y,built_in:[...A,...O,"set","shopt",...F,...q]},contains:[x,a.SHEBANG(),g,p,s,i,L,o,l,d,u,e]}}function Zr(a){const r=a.regex,e={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},t={begin:"^[-\\*]{3,}",end:"$"},n={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},s={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},i={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},o=/[A-Za-z][A-Za-z0-9+.-]*/,l={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:r.concat(/\[.+?\]\(/,o,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},d={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},p=a.inherit(d,{contains:[]}),h=a.inherit(u,{contains:[]});d.contains.push(h),u.contains.push(p);let x=[e,l];return[d,u,p,h].forEach(L=>{L.contains=L.contains.concat(x)}),x=x.concat(d,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:x},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:x}]}]},e,s,d,u,{className:"quote",begin:"^>\\s+",contains:x,end:"$"},n,t,l,i,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}ue.registerLanguage("javascript",Ir);ue.registerLanguage("js",Ir);ue.registerLanguage("typescript",qr);ue.registerLanguage("ts",qr);ue.registerLanguage("html",Gr);ue.registerLanguage("xml",Gr);ue.registerLanguage("css",us);ue.registerLanguage("python",ps);ue.registerLanguage("json",hs);ue.registerLanguage("bash",Fr);ue.registerLanguage("shell",Fr);ue.registerLanguage("markdown",Zr);ue.registerLanguage("md",Zr);z.setOptions({gfm:!0,breaks:!1});const at=new z.Renderer;at.heading=function({text:a,depth:r}){const e=a.toLowerCase().replace(/<[^>]+>/g,"").replace(/[^\w一-鿿]+/g,"-").replace(/^-|-$/g,"");return`<h${r} id="${e}">${a}</h${r}>`};function je(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}at.code=function({text:a,lang:r}){if(r==="mermaid")return`<div class="mermaid">${a}</div>`;const e=r&&ue.getLanguage(r);let t="";const n=e?`language-${r}`:"language-plaintext";if(e)try{t=ue.highlight(a,{language:r}).value}catch{t=je(a)}else t=je(a);return`<div class="code-block-wrapper"><div class="code-block-header">${r?`<span class="code-lang-label">${je(r)}</span>`:""}<button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.parentElement.querySelector('code').textContent).then(()=>{this.textContent='已复制';setTimeout(()=>{this.textContent='复制'},1500)})">复制</button></div><pre><code class="hljs ${n}">${t}</code></pre></div>`};at.image=function({href:a,title:r,text:e}){let t;/^https?:\/\//.test(a)?t=a:t=`/images/${a.split("/").pop()||a}`;const n=r?` title="${je(r)}"`:"";return`<img src="${t}" alt="${je(e)}"${n}>`};z.use(Ya());z.use({renderer:at});function gs(a){return z.parse(a)}class fs extends HTMLElement{constructor(){super(...arguments);S(this,"_toc",[]);S(this,"_activeId","");S(this,"_article",null);S(this,"_renderedHtml","");S(this,"_scrollHandler",null);S(this,"_headingOffsets",[])}connectedCallback(){const t=new URLSearchParams(window.location.search).get("slug")||window.location.hash.replace("#/","");this._article=Et.find(n=>n.slug===t)||Et[0]||null;try{this.render(),this._article&&(this._buildTOC(),this._cloneTOCToDrawer(),this._setupScrollTracking(),this._setupMobileDrawer())}catch(n){console.error("[emu-article] Error in connectedCallback:",n)}}disconnectedCallback(){this._scrollHandler&&window.removeEventListener("scroll",this._scrollHandler)}_buildTOC(){const e=this.querySelector("#article-toc-list");if(!e||!this._article)return;const t=this.querySelector("#article-body");t&&(this._toc=[],t.querySelectorAll("h2, h3").forEach(n=>{const s=n.getAttribute("id")||"";this._toc.push({id:s,text:n.textContent||"",level:n.tagName==="H2"?2:3})}),e.innerHTML=this._toc.map((n,s)=>{const i=n.level===3?"pl-4":"",o=s===0?"toc-active":"toc-inactive";return`
          <a href="#${n.id}"
             data-toc-id="${n.id}"
             class="toc-item ${o} block py-1.5 text-sm rounded-lg transition-all duration-200 ${i}">
            ${n.text}
          </a>
        `}).join(""))}_setupScrollTracking(){const e=this.querySelector("#article-body"),t=this.querySelector("#article-progress-bar"),n=this.querySelector("#article-toc-list");if(!e)return;this._cacheHeadingOffsets();const s=n?Array.from(n.querySelectorAll(".toc-item")):[];this._scrollHandler=()=>{var l;if(t){const d=this.querySelector("#article-container");if(d){const u=d.getBoundingClientRect(),p=d.scrollHeight-window.innerHeight,h=Math.min(100,Math.max(0,-u.top/p*100));t.style.width=`${h}%`}}const i=window.scrollY+100;let o=((l=this._toc[0])==null?void 0:l.id)||"";for(const d of this._headingOffsets)if(d.top<=i)o=d.id;else break;o!==this._activeId&&(this._activeId=o,s.forEach(d=>{d.dataset.tocId===o?(d.classList.remove("toc-inactive"),d.classList.add("toc-active")):(d.classList.remove("toc-active"),d.classList.add("toc-inactive"))}))},window.addEventListener("scroll",this._scrollHandler,{passive:!0}),this._scrollHandler()}_cacheHeadingOffsets(){const e=this.querySelector("#article-body");e&&(this._headingOffsets=[],e.querySelectorAll("h2, h3").forEach(t=>{this._headingOffsets.push({id:t.id,top:t.getBoundingClientRect().top+window.scrollY})}))}_setupMobileDrawer(){const e=this.querySelector("#toc-toggle-btn"),t=this.querySelector("#toc-drawer"),n=this.querySelector("#toc-drawer-overlay"),s=this.querySelector("#toc-drawer-close");if(!e||!t||!n)return;const i=()=>{t.classList.remove("translate-y-full"),n.classList.remove("opacity-0","pointer-events-none"),document.body.style.overflow="hidden"},o=()=>{t.classList.add("translate-y-full"),n.classList.add("opacity-0","pointer-events-none"),document.body.style.overflow=""};e.addEventListener("click",i),s==null||s.addEventListener("click",o),n.addEventListener("click",o),t.addEventListener("click",l=>{const d=l.target.closest(".toc-item");if(!d)return;l.preventDefault();const u=d.getAttribute("href");o(),u&&requestAnimationFrame(()=>{const p=document.querySelector(u);p&&p.scrollIntoView({behavior:"smooth",block:"start"})})})}_setupImageLightbox(){const e=this.querySelector("#article-body");e&&e.addEventListener("click",t=>{const n=t.target;if(n.tagName==="IMG"&&n.closest(".article-prose")){const s=n;yr(s.src,s.alt)}})}render(){if(!this._article){this.innerHTML=`
        <section class="py-20 px-margin-mobile md:px-margin-desktop">
            <div class="max-w-container-max mx-auto text-center">
                <span class="material-symbols-outlined text-[48px] text-on-surface-variant/30 mb-4 block">article</span>
                <p class="text-on-surface-variant/50 text-base">暂无文章内容</p>
            </div>
        </section>`;return}this._renderedHtml=gs(this._article.content);const e=this._renderedHtml;this.innerHTML=`
      <style>${this._getStyles()}</style>

      <!-- 阅读进度条 -->
      <div class="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
        <div id="article-progress-bar"
             class="h-full bg-gradient-to-r from-primary to-primary-container dark:from-primary-fixed-dim dark:to-primary-fixed rounded-r-full transition-[width] duration-100 ease-out"
             style="width: 0%">
        </div>
      </div>

      <section class="pt-8 pb-20 px-margin-mobile md:px-margin-desktop relative" id="article-container">
        <div class="max-w-[1100px] mx-auto">

          <!-- 返回按钮 -->
          <a href="/blog"
             class="inline-flex items-center gap-1.5 text-sm text-on-surface-variant/60 dark:text-surface-variant/60 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200 mb-8 group">
            <span class="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform duration-200">arrow_back</span>
            返回博客列表
          </a>

          <!-- 文章头部 -->
          <header class="mb-10 pb-8 border-b border-outline-variant/15">
            <div class="flex items-center gap-3 mb-4">
              <span class="inline-block text-xs font-semibold px-2.5 py-0.5 rounded bg-primary/5 text-primary border border-primary/10 dark:bg-primary-fixed-dim/10 dark:text-primary-fixed-dim dark:border-primary-fixed-dim/20">
                ${this._article.category}
              </span>
              <span class="text-xs text-on-surface-variant/50 dark:text-surface-variant/50 font-mono">${this._article.subCategory}</span>
            </div>

            <h1 class="font-headline-xl text-3xl md:text-[2.75rem] font-bold text-on-surface dark:text-surface leading-tight tracking-tight mb-5">
              ${this._article.title}
            </h1>


            <div class="flex flex-wrap items-center gap-5 text-sm text-on-surface-variant/60 dark:text-surface-variant/60 font-mono">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full bg-primary/10 text-primary dark:bg-primary-fixed-dim/10 dark:text-primary-fixed-dim flex items-center justify-center font-bold text-[11px] uppercase">
                  ${this._article.authorAvatar}
                </div>
                <span class="font-medium text-on-surface-variant/80 dark:text-surface-variant/80">${this._article.author}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px]">calendar_today</span>
                <span>${this._article.date}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px]">schedule</span>
                <span>${this._article.readTime}</span>
              </div>
            </div>
          </header>

          <!-- 主体布局：TOC + 内容 -->
          <div class="flex gap-12 relative">

            <!-- 左侧目录（桌面端） -->
            <aside class="hidden lg:block w-56 shrink-0">
              <div class="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-none flex flex-col justify-between gap-8">
                <div>
                  <h4 class="text-xs font-bold tracking-widest uppercase text-on-surface-variant/40 dark:text-surface-variant/40 mb-4 font-mono">
                    On this page
                  </h4>
                  <nav id="article-toc-list" class="space-y-0.5 border-l border-outline-variant/15 pl-4">
                    <!-- TOC 由 JS 动态填充 -->
                  </nav>
                </div>

                <!-- 投稿引导 -->
                <div class="pt-6 border-t border-outline-variant/15 text-xs text-on-surface-variant/60 dark:text-surface-variant/60">
                  <p class="mb-2 leading-relaxed">想要分享你的研究成果或技术实战？欢迎投稿！</p>
                  <a
                    href="https://github.com/EMU-Stu/EMU-Stu-Blog"
                    target="_blank"
                    class="inline-flex items-center gap-1 text-primary dark:text-primary-fixed-dim hover:underline font-semibold"
                  >
                    前往博客仓库投稿
                    <span class="material-symbols-outlined text-[14px]">north_east</span>
                  </a>
                </div>
              </div>
            </aside>

            <!-- 文章正文 -->
            <article id="article-body" class="article-prose flex-1 min-w-0">
              ${e}
            </article>
          </div>

        </div>
      </section>

      <!-- 移动端目录按钮 -->
      <button id="toc-toggle-btn"
              class="lg:hidden fixed bottom-6 right-5 z-40 w-11 h-11 rounded-full bg-primary text-on-primary shadow-lg flex items-center justify-center active:scale-95 transition-transform dark:bg-primary-fixed dark:text-on-primary-fixed"
              aria-label="打开目录"
              aria-expanded="false">
        <span class="material-symbols-outlined text-[20px]">toc</span>
      </button>

      <!-- 移动端目录抽屉遮罩 -->
      <div id="toc-drawer-overlay"
           class="lg:hidden fixed inset-0 z-40 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-300">
      </div>

      <!-- 移动端目录抽屉 -->
      <div id="toc-drawer"
           class="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest dark:bg-surface-container rounded-t-2xl shadow-2xl max-h-[60vh] overflow-y-auto translate-y-full transition-transform duration-300 ease-out">
        <div class="sticky top-0 bg-surface-container-lowest dark:bg-surface-container rounded-t-2xl border-b border-outline-variant/10 px-5 py-4 flex items-center justify-between">
          <h4 class="text-sm font-bold text-on-surface dark:text-surface font-mono tracking-wide">目录</h4>
          <button id="toc-drawer-close" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors" aria-label="关闭目录">
            <span class="material-symbols-outlined text-[20px] text-on-surface-variant">close</span>
          </button>
        </div>
        <nav class="p-5 space-y-1" id="toc-drawer-list">
          <!-- 克隆桌面端 TOC -->
        </nav>
      </div>
    `,this._renderMermaid(),this._setupImageLightbox()}async _renderMermaid(){const e=this.querySelectorAll(".mermaid");if(e.length!==0)try{const{default:t}=await aa(async()=>{const{default:n}=await import("./mermaid.core-Dt6DKv4c.js").then(s=>s.aH);return{default:n}},[]);t.initialize({startOnLoad:!1,theme:document.documentElement.classList.contains("dark")?"dark":"default",securityLevel:"loose",fontFamily:"'Hanken Grotesk', sans-serif"}),await t.run({nodes:e})}catch(t){console.warn("[emu-article] mermaid render error:",t)}}_cloneTOCToDrawer(){const e=this.querySelector("#article-toc-list"),t=this.querySelector("#toc-drawer-list");e&&t&&(t.innerHTML=e.innerHTML)}_getStyles(){return`
      /* ── 文章正文排版 ── */
      .article-prose h2 {
        font-family: 'Hanken Grotesk', sans-serif;
        font-size: 1.625rem;
        font-weight: 700;
        line-height: 1.3;
        margin-top: 3rem;
        margin-bottom: 1rem;
        color: var(--color-on-surface);
        letter-spacing: -0.01em;
        scroll-margin-top: 6rem;
      }
      .article-prose h3 {
        font-family: 'Hanken Grotesk', sans-serif;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.4;
        margin-top: 2.25rem;
        margin-bottom: 0.75rem;
        color: var(--color-on-surface);
        scroll-margin-top: 6rem;
      }
      .article-prose p {
        font-size: 1.0625rem;
        line-height: 1.8;
        margin-bottom: 1.25rem;
        color: var(--color-on-surface-variant);
      }
      .dark .article-prose h2,
      .dark .article-prose h3 {
        color: var(--color-surface);
      }
      .dark .article-prose p {
        color: var(--color-surface-variant);
      }

      /* ── 链接 ── */
      .article-prose a {
        color: var(--color-primary);
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-thickness: 1px;
        text-decoration-color: rgba(0,31,84,0.3);
        transition: all 0.2s;
      }
      .article-prose a:hover {
        text-decoration-color: var(--color-primary);
      }
      .dark .article-prose a {
        color: var(--color-primary-fixed-dim);
        text-decoration-color: rgba(177,197,255,0.3);
      }
      .dark .article-prose a:hover {
        text-decoration-color: var(--color-primary-fixed-dim);
      }

      /* ── 图片 ── */
      .article-prose img {
        max-width: 100%;
        height: auto;
        margin: 1.75rem 0;
        border-radius: 12px;
        border: 1px solid var(--color-outline-variant);
        cursor: zoom-in;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .article-prose img:hover {
        transform: scale(1.01);
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      }
      .dark .article-prose img {
        border-color: rgba(255,255,255,0.06);
      }
      .dark .article-prose img:hover {
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      }

      /* ── 加粗 ── */
      .article-prose strong {
        font-weight: 700;
        color: var(--color-on-surface);
      }
      .dark .article-prose strong {
        color: var(--color-surface);
      }

      /* ── 引用块 ── */
      .article-prose blockquote {
        margin: 1.75rem 0;
        padding: 1.25rem 1.5rem;
        border-left: 3px solid var(--color-primary);
        background: linear-gradient(135deg, rgba(0,31,84,0.04), rgba(0,51,128,0.02));
        border-radius: 0 12px 12px 0;
        font-style: normal;
      }
      .article-prose blockquote p {
        margin-bottom: 0;
        color: var(--color-on-surface-variant);
        font-style: italic;
      }
      .dark .article-prose blockquote {
        background: linear-gradient(135deg, rgba(177,197,255,0.06), rgba(218,226,255,0.03));
        border-left-color: var(--color-primary-fixed-dim);
      }
      .dark .article-prose blockquote p {
        color: var(--color-surface-variant);
      }

      /* ── 行内代码 ── */
      .article-prose :not(pre) > code {
        font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
        font-size: 0.875em;
        padding: 0.15em 0.4em;
        border-radius: 6px;
        background: var(--color-surface-container-high);
        color: var(--color-primary);
        font-weight: 500;
      }
      .dark .article-prose :not(pre) > code {
        background: rgba(177,197,255,0.12);
        color: var(--color-primary-fixed-dim);
      }

      /* ── 代码块 ── */
      .code-block-wrapper {
        position: relative;
        margin: 1.75rem 0;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid var(--color-outline-variant);
      }
      .code-block-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.4rem 0.75rem;
        background: var(--color-surface-container);
        border-bottom: 1px solid var(--color-outline-variant);
      }
      .code-lang-label {
        font-family: 'Work Sans', sans-serif;
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--color-on-surface-variant);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.65;
      }
      .dark .code-lang-label {
        color: var(--color-surface-variant);
      }
      .code-copy-btn {
        font-family: 'Work Sans', sans-serif;
        font-size: 0.7rem;
        font-weight: 600;
        padding: 0.2rem 0.6rem;
        border-radius: 6px;
        border: 1px solid var(--color-outline-variant);
        background: var(--color-surface-container-lowest);
        color: var(--color-on-surface-variant);
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s;
      }
      .code-block-wrapper:hover .code-copy-btn {
        opacity: 1;
      }
      .code-copy-btn:hover {
        background: var(--color-surface-container-high);
        color: var(--color-on-surface);
      }
      .article-prose .code-block-wrapper pre {
        margin: 0;
        border: none;
        border-radius: 0;
      }
      .article-prose pre code {
        display: block;
        padding: 1.25rem 1.5rem;
        font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
        font-size: 0.875rem;
        line-height: 1.7;
        overflow-x: auto;
        background: var(--color-surface-container-low);
      }
      .dark .article-prose pre {
        border-color: rgba(255,255,255,0.06);
      }
      .dark .article-prose pre code {
        background: rgba(25,28,29,0.6);
      }
      .dark .code-block-wrapper {
        border-color: rgba(255,255,255,0.06);
      }
      .dark .code-block-header {
        background: rgba(255,255,255,0.03);
        border-bottom-color: rgba(255,255,255,0.06);
      }

      /* ── 暗色模式 code token 覆盖 ── */
      .dark .article-prose code.hljs {
        color: #c9d1d9;
      }
      .dark .article-prose .hljs-keyword,
      .dark .article-prose .hljs-selector-tag,
      .dark .article-prose .hljs-literal { color: #ff7b72; }
      .dark .article-prose .hljs-string,
      .dark .article-prose .hljs-title,
      .dark .article-prose .hljs-name,
      .dark .article-prose .hljs-type,
      .dark .article-prose .hljs-attribute { color: #a5d6ff; }
      .dark .article-prose .hljs-comment,
      .dark .article-prose .hljs-quote { color: #8b949e; }
      .dark .article-prose .hljs-number,
      .dark .article-prose .hljs-regexp,
      .dark .article-prose .hljs-params { color: #ffa657; }
      .dark .article-prose .hljs-built_in { color: #79c0ff; }
      .dark .article-prose .hljs-title.function_ { color: #d2a8ff; }
      .dark .article-prose .hljs-variable { color: #ffa657; }
      .dark .article-prose .hljs-symbol { color: #7ee787; }

      /* ── GitHub Alerts (marked-alert) ── */
      .markdown-alert {
        margin: 1.75rem 0;
        padding: 1rem 1.25rem;
        border-radius: 10px;
        border: 1px solid;
        border-left-width: 4px;
      }
      .markdown-alert-title {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-weight: 700;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
      }
      .markdown-alert-title svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
      }
      .markdown-alert > p {
        font-size: 0.9375rem;
        line-height: 1.7;
        color: var(--color-on-surface-variant);
      }
      .markdown-alert > p:last-child { margin-bottom: 0; }

      .markdown-alert-note      { background: rgba(9,105,218,0.06);  border-color: rgba(9,105,218,0.3); }
      .markdown-alert-tip       { background: rgba(9,105,218,0.06);  border-color: rgba(9,105,218,0.3); }
      .markdown-alert-important { background: rgba(130,80,223,0.06); border-color: rgba(130,80,223,0.3); }
      .markdown-alert-warning   { background: rgba(210,153,34,0.08); border-color: rgba(210,153,34,0.4); }
      .markdown-alert-caution   { background: rgba(218,54,51,0.06);  border-color: rgba(218,54,51,0.3); }

      .markdown-alert-note .markdown-alert-title      { color: #0969da; }
      .markdown-alert-tip .markdown-alert-title       { color: #0969da; }
      .markdown-alert-important .markdown-alert-title  { color: #8250df; }
      .markdown-alert-warning .markdown-alert-title    { color: #9a6700; }
      .markdown-alert-caution .markdown-alert-title    { color: #cf222e; }

      .dark .markdown-alert-note      { background: rgba(56,139,253,0.1);  border-color: rgba(56,139,253,0.25); }
      .dark .markdown-alert-tip       { background: rgba(56,139,253,0.1);  border-color: rgba(56,139,253,0.25); }
      .dark .markdown-alert-important { background: rgba(163,113,247,0.1); border-color: rgba(163,113,247,0.25); }
      .dark .markdown-alert-warning   { background: rgba(210,153,34,0.1);  border-color: rgba(210,153,34,0.25); }
      .dark .markdown-alert-caution   { background: rgba(248,81,73,0.1);   border-color: rgba(248,81,73,0.25); }

      .dark .markdown-alert-note .markdown-alert-title      { color: #58a6ff; }
      .dark .markdown-alert-tip .markdown-alert-title       { color: #58a6ff; }
      .dark .markdown-alert-important .markdown-alert-title  { color: #bc8cff; }
      .dark .markdown-alert-warning .markdown-alert-title    { color: #e3b341; }
      .dark .markdown-alert-caution .markdown-alert-title    { color: #ff7b72; }
      .dark .markdown-alert > p { color: var(--color-surface-variant); }

      /* ── Mermaid 图表 ── */
      .mermaid {
        display: block;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        text-align: center;
        margin: 2rem 0;
        padding: 1.5rem;
        border-radius: 12px;
        background: var(--color-surface-container-lowest);
        border: 1px solid var(--color-outline-variant);
      }
      .dark .mermaid {
        background: rgba(25,28,29,0.4);
        border-color: rgba(255,255,255,0.06);
      }
      .mermaid svg {
        display: inline-block;
        max-width: 100%;
        height: auto;
      }

      /* ── 列表 ── */
      .article-prose ul {
        list-style-type: disc;
      }
      .article-prose ol {
        list-style-type: decimal;
      }
      .article-prose ul, .article-prose ol {
        margin: 1rem 0 1.25rem 1.5rem;
        color: var(--color-on-surface-variant);
      }
      .article-prose li {
        margin-bottom: 0.5rem;
        line-height: 1.75;
        padding-left: 0.25rem;
      }
      .article-prose li::marker {
        color: var(--color-primary);
      }
      .dark .article-prose ul,
      .dark .article-prose ol {
        color: var(--color-surface-variant);
      }
      .dark .article-prose li::marker {
        color: var(--color-primary-fixed-dim);
      }

      /* ── 表格 ── */
      .article-prose table {
        width: 100%;
        margin: 1.75rem 0;
        border-collapse: separate;
        border-spacing: 0;
        border: 1px solid var(--color-outline-variant);
        border-radius: 12px;
        overflow: hidden;
        font-size: 0.9375rem;
      }
      .article-prose thead {
        background: var(--color-surface-container);
      }
      .article-prose th {
        padding: 0.75rem 1rem;
        text-align: left;
        font-weight: 600;
        color: var(--color-on-surface);
        border-bottom: 1px solid var(--color-outline-variant);
      }
      .article-prose td {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--color-outline-variant);
        color: var(--color-on-surface-variant);
      }
      .article-prose tr:last-child td {
        border-bottom: none;
      }
      .dark .article-prose table {
        border-color: rgba(255,255,255,0.06);
      }
      .dark .article-prose thead {
        background: rgba(255,255,255,0.03);
      }
      .dark .article-prose th {
        color: var(--color-surface);
        border-bottom-color: rgba(255,255,255,0.06);
      }
      .dark .article-prose td {
        color: var(--color-surface-variant);
        border-bottom-color: rgba(255,255,255,0.06);
      }

      /* ── 分隔线 ── */
      .article-prose hr {
        margin: 2.5rem 0;
        border: none;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--color-outline-variant), transparent);
      }

      /* ── 滚动条美化 ── */
      .article-prose ::-webkit-scrollbar {
        height: 6px;
      }
      .article-prose ::-webkit-scrollbar-track {
        background: transparent;
      }
      .article-prose ::-webkit-scrollbar-thumb {
        background: var(--color-outline-variant);
        border-radius: 3px;
      }

      /* ── TOC 目录项状态 ── */
      .toc-item {
        color: var(--color-on-surface-variant);
        opacity: 0.5;
        font-weight: 400;
        border-left: 2px solid transparent;
        margin-left: -17px;
        padding-left: 14px;
      }
      .toc-item:hover {
        opacity: 0.8;
        color: var(--color-primary);
        background: rgba(0,31,84,0.04);
      }
      .toc-item.toc-active {
        color: var(--color-primary);
        opacity: 1;
        font-weight: 600;
        border-left-color: var(--color-primary);
        background: rgba(0,31,84,0.06);
      }
      .dark .toc-item {
        color: var(--color-surface-variant);
        opacity: 0.45;
      }
      .dark .toc-item:hover {
        opacity: 0.75;
        color: var(--color-primary-fixed-dim);
        background: rgba(177,197,255,0.05);
      }
      .dark .toc-item.toc-active {
        color: var(--color-primary-fixed-dim);
        opacity: 1;
        border-left-color: var(--color-primary-fixed-dim);
        background: rgba(177,197,255,0.08);
      }
    `}}customElements.define("emu-article",fs);class ms extends HTMLElement{connectedCallback(){this.render()}render(){const r=tr.related.map(t=>`
        <li>
          <a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="${t.href}" target="_blank" rel="noopener noreferrer">
            ${t.label}
          </a>
        </li>
      `).join(""),e=tr.bottom.map(t=>`
            <a class="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-all duration-300 ${t.underline?"underline decoration-1 underline-offset-4 decoration-on-surface-variant/30 hover:decoration-primary":""}" href="${t.href}" target="_blank" rel="noopener noreferrer">
              ${t.label}
            </a>
          `).join("");this.innerHTML=`
      <footer class="bg-surface-container-low dark:bg-surface-dim border-t border-outline-variant/30 w-full" id="site-footer">
        <div class="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
 
          <!-- 上半部分：品牌 + 链接 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-outline-variant/30 pb-12">
 
            <!-- 品牌信息 -->
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <img
                  alt="EMU-Stu Logo"
                  class="h-8 w-auto object-contain opacity-60 dark:opacity-80 transition-opacity hover:opacity-100"
                  src="${At}"
                >
                <span class="font-headline-md text-lg font-bold text-on-surface dark:text-surface-bright tracking-tight">
                  ${vr}
                </span>
              </div>
              <p class="font-body-md text-sm text-on-surface-variant dark:text-surface-variant max-w-sm mb-6 leading-relaxed">
                ${er}<br>${Mn}
              </p>
              <div class="flex gap-4">
                <a
                  class="w-10 h-10 rounded-xl bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary dark:hover:bg-primary-fixed dark:hover:text-on-primary-fixed transform hover:scale-105 transition-all duration-300"
                  href="https://www.ncist.edu.cn/"
                  target="_blank"
                  aria-label="官网"
                >
                  <span class="material-symbols-outlined text-[20px]">public</span>
                </a>
                <a
                  class="w-10 h-10 rounded-xl bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary dark:hover:bg-primary-fixed dark:hover:text-on-primary-fixed transform hover:scale-105 transition-all duration-300"
                  href="https://github.com/EMU-Stu"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <span class="material-symbols-outlined text-[20px]">forum</span>
                </a>
                <a
                  class="w-10 h-10 rounded-xl bg-surface-container-high dark:bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary dark:hover:bg-primary-fixed dark:hover:text-on-primary-fixed transform hover:scale-105 transition-all duration-300"
                  href="https://github.com/EMU-Stu/EMU-Stu-Site"
                  target="_blank"
                  aria-label="分享"
                >
                  <span class="material-symbols-outlined text-[20px]">share</span>
                </a>
              </div>
            </div>
 
            <!-- 相关链接 -->
            <div class="text-left md:text-right">
              <h4 class="font-headline-md text-base text-on-surface dark:text-surface-bright mb-5 font-bold">相关链接</h4>
              <ul class="space-y-3">
                ${r}
              </ul>
            </div>
          </div>
 
          <!-- 下半部分：版权 + 底部导航 -->
          <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="font-body-sm text-sm text-on-surface-variant dark:text-surface-variant">
              © ${new Date().getFullYear()} ${er}.
            </p>
            <nav class="flex flex-wrap justify-center gap-6" aria-label="页脚导航">
              ${e}
            </nav>
          </div>
        </div>
      </footer>
    `}}customElements.define("emu-footer",ms);class bs extends HTMLElement{constructor(){super(...arguments);S(this,"_clickCount",0);S(this,"_clickTimer",null);S(this,"_inputBuffer",[]);S(this,"_isActive",!1);S(this,"_clickHandler",null);S(this,"_keydownHandler",null)}connectedCallback(){this.setupStyles(),this.setupEventListeners(),console.log('[EMU-Stu] Win气泡彩蛋已加载。提示：连击 Logo 3次 或键盘输入 "win" 触发！')}disconnectedCallback(){this._clickHandler&&document.removeEventListener("click",this._clickHandler),this._keydownHandler&&window.removeEventListener("keydown",this._keydownHandler)}setupStyles(){const e=document.createElement("style");e.textContent=`
      /* win 气泡外层容器，只负责屏幕定位和无顿挫的平滑位移 */
      .win-bubble-wrapper {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        will-change: transform;
      }

      /* win 气泡通用样式，只负责外观和缩放/渐变动画 */
      .win-bubble {
        background: linear-gradient(135deg, #007aff 0%, #00c6ff 100%);
        color: #ffffff;
        padding: 8px 16px;
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif;
        font-weight: 600;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0, 122, 255, 0.35);
        opacity: 0;
        transform: scale(0);
        will-change: transform, opacity;
      }

      /* 右下缺口气泡 (发送方风格) */
      .win-bubble.bubble-right {
        border-radius: 20px 20px 8px 20px;
      }

      /* 左下缺口气泡 (接收方风格) */
      .win-bubble.bubble-left {
        border-radius: 20px 20px 20px 8px;
      }

      /* 气泡平移漂移 keyframes */
      @keyframes win-fly {
        0% {
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(var(--tx-end), var(--ty-end), 0);
        }
      }

      /* 气泡缩放与淡入淡出 keyframes */
      @keyframes win-scale-fade {
        0% {
          opacity: 0;
          transform: scale(0.2);
        }
        /* 快速膨胀到稍微过载的大小，营造充盈的气泡弹性 */
        12% {
          opacity: 1;
          transform: scale(1.15);
        }
        /* 微弱回缩 */
        24% {
          opacity: 1;
          transform: scale(0.97);
        }
        /* 稳定到标准尺寸，并持续保持到漂流末期 */
        34%, 80% {
          opacity: 1;
          transform: scale(1);
        }
        /* 顺滑地缩小并淡出 */
        100% {
          opacity: 0;
          transform: scale(0.1);
        }
      }

      /* 心跳呼吸动效（用于标语第二行） */
      @keyframes heartbeat-scale {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.06);
        }
      }
      .animate-pulse-scale {
        animation: heartbeat-scale 2.5s infinite ease-in-out;
      }
    `,this.appendChild(e)}setupEventListeners(){this._clickHandler=e=>{e.target.closest('emu-header img[alt="EMU-Stu Logo"]')&&this.handleLogoClick()},document.addEventListener("click",this._clickHandler),this._keydownHandler=e=>{const t=document.activeElement;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)||e.key.length===1&&/[a-zA-Z]/.test(e.key)&&(this._inputBuffer.push(e.key.toLowerCase()),this._inputBuffer.length>5&&this._inputBuffer.shift(),this._inputBuffer.join("").endsWith("win")&&(this.triggerWinEasterEgg(),this._inputBuffer=[]))},window.addEventListener("keydown",this._keydownHandler)}handleLogoClick(){this._clickCount++,this._clickTimer&&window.clearTimeout(this._clickTimer),this._clickCount>=3?(this.triggerWinEasterEgg(),this._clickCount=0):this._clickTimer=window.setTimeout(()=>{this._clickCount=0},1500)}triggerWinEasterEgg(){if(this._isActive)return;this._isActive=!0,console.log("🚀 迎大(win)！冲鸭！全新交互彩蛋触发成功！"),window.scrollTo({top:0,behavior:"smooth"});const e=document.querySelector("emu-hero #hero-content-wrapper"),t=document.querySelector("emu-hero #hero-easter-egg-container");setTimeout(()=>{e&&(e.style.opacity="0",e.style.transform="translateY(-30px) scale(0.96)",e.style.pointerEvents="none")},150),setTimeout(()=>{this.spawnWinBubbles()},200),setTimeout(()=>{t&&(t.innerHTML=`
          <div 
            style="
              opacity: 0;
              transform: translateY(20px);
              transition: all 1.2s cubic-bezier(0.25, 1, 0.5, 1);
            "
            class="easter-egg-line1 font-headline-md font-bold text-2xl md:text-4xl lg:text-5xl text-white mb-6 tracking-wide drop-shadow-md text-center px-4"
          >
            和优秀的人，做有挑战的事。
          </div>
          <div 
            style="
              opacity: 0;
              transform: translateY(20px);
              transition: all 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.3s;
            "
            class="easter-egg-line2 font-headline-lg font-extrabold text-3xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#007aff] dark:from-[#8ab4f8] dark:to-[#4285f4] tracking-wider drop-shadow-lg text-center animate-pulse-scale"
          >
            应大冲鸭！
          </div>
        `,t.style.opacity="1",t.style.transform="translateY(0)",requestAnimationFrame(()=>{const n=t.querySelector(".easter-egg-line1"),s=t.querySelector(".easter-egg-line2");n&&(n.style.opacity="1",n.style.transform="translateY(0)"),s&&(s.style.opacity="1",s.style.transform="translateY(0)")}))},1e3),setTimeout(()=>{this.restoreHero()},6e3)}spawnWinBubbles(){const t=document.createDocumentFragment(),n=[];for(let s=0;s<50;s++){const i=document.createElement("div");i.className="win-bubble-wrapper";const o=document.createElement("div"),l=Math.random()>.5?"bubble-right":"bubble-left";o.className=`win-bubble ${l}`,o.textContent="win";const d=Math.floor(Math.random()*53)+32;o.style.width=`${d}px`,o.style.height=`${d*.72}px`,o.style.fontSize=`${d*.32}px`;const u=Math.random()*90+5,p=Math.random()*80+10;i.style.left=`${u}vw`,i.style.top=`${p}vh`;const h=(Math.random()-.5)*90,x=-Math.random()*120-40;i.style.setProperty("--tx-end",`${h}px`),i.style.setProperty("--ty-end",`${x}px`);const g=Math.random()*1.6,m=Math.random()*.8+2.2;i.style.animation=`win-fly ${m}s cubic-bezier(0.16, 1, 0.3, 1) ${g}s forwards`,o.style.animation=`win-scale-fade ${m}s cubic-bezier(0.25, 1, 0.5, 1) ${g}s forwards`,i.appendChild(o),t.appendChild(i),n.push(i)}document.body.appendChild(t),setTimeout(()=>{n.forEach(s=>s.remove())},5500)}restoreHero(){const e=document.querySelector("emu-hero #hero-content-wrapper"),t=document.querySelector("emu-hero #hero-easter-egg-container");t&&(t.style.opacity="0",t.style.transform="translateY(12px)"),setTimeout(()=>{t&&(t.innerHTML=""),e&&(e.style.opacity="1",e.style.transform="translateY(0) scale(1)",e.style.pointerEvents="auto"),this._isActive=!1},1e3)}}customElements.define("emu-easter-egg",bs);if(typeof window<"u"){document.addEventListener("gesturestart",r=>{r.preventDefault()}),document.addEventListener("touchstart",r=>{r.touches.length>1&&r.preventDefault()},{passive:!1});let a=0;document.addEventListener("touchend",r=>{const e=Date.now();e-a<=300&&r.preventDefault(),a=e},{passive:!1})}export{aa as _,Wa as g};
