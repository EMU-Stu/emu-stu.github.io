var Vr=Object.defineProperty;var Qr=(a,r,e)=>r in a?Vr(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e;var y=(a,r,e)=>Qr(a,typeof r!="symbol"?r+"":r,e);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const Jr="/assets/emu-stu-logo-D3KqYaZd.png",Nt=Jr,Pn="EMU-Stu",sn="应急管理大学开源技术组织",ea="技术服务校园，开源贡献社区",At="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",ta=[{label:"首页",href:"#",active:!0},{label:"技术博客",href:"/blog",active:!1}],kt=[{label:"校园活动",path:"/activity",href:"/activity"}],na="https://github.com/EMU-Stu/EMU-Stu-Site",on={related:[{label:"学校官网",href:"https://www.ncist.edu.cn/"},{label:"教务系统",href:"https://jwc.ncist.edu.cn/"},{label:"图书馆",href:"https://lib.ncist.edu.cn/"}],bottom:[{label:"想知道此网站是如何实现的？点击查看文章",href:na,underline:!0}]};class ra extends HTMLElement{constructor(){super(...arguments);y(this,"_menuOpen",!1)}connectedCallback(){this.classList.add("sticky","top-0","z-50","block","w-full"),this.render(),this.setupEventListeners()}render(){const e=window.location.pathname,t=e.includes("/blog")||e.includes("/article"),n=kt.find(w=>e.includes(w.path))??null,s=t||n!==null,i=ta.map(w=>{let H=w.href,D=w.active;return w.label==="首页"?(H=s?"/":"#",D=!s):w.label==="技术博客"&&(H=t?"#":"/blog",D=t),{label:w.label,href:H,active:D}}),o=i.find(w=>w.label==="首页"),l=i.find(w=>w.label==="技术博客"),c=s?"/":"",u=n?`
      <a
        class="pb-1 border-b-2 font-label-md text-label-md transition-all duration-200 text-primary dark:text-primary-fixed-dim border-primary dark:border-primary-fixed-dim"
        href="${n.href}"
      >${n.label}</a>
    `:"",p=w=>`
      <a
        class="pb-1 border-b-2 font-label-md text-label-md transition-all duration-200 ${w.active?"text-primary dark:text-primary-fixed-dim border-primary dark:border-primary-fixed-dim":"text-on-surface-variant dark:text-surface-variant border-transparent hover:text-primary dark:hover:text-primary-fixed hover:border-primary/30 dark:hover:border-primary-fixed/30"}"
        href="${w.href}"
      >${w.label}</a>
    `,h=w=>`
      <a
        class="${w.active?"text-primary font-bold border-l-4 border-primary pl-4":"text-on-surface-variant hover:text-primary transition-colors duration-200 pl-5"} font-label-md text-label-md block py-3"
        href="${w.href}"
      >${w.label}</a>
    `,b=(o?p(o):"")+(l?p(l):""),g=n?`
      <a
        class="text-primary font-bold border-l-4 border-primary pl-4 font-label-md text-label-md block py-3"
        href="${n.href}"
      >${n.label}</a>
    `:"",f=(o?h(o):"")+g+(l?h(l):""),v=kt.filter(w=>w.path!==(n==null?void 0:n.path)).map(w=>`
                  <a href="${w.href}" class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200">
                    <span class="material-symbols-outlined text-[18px]">event</span>
                    <span>${w.label}</span>
                  </a>
                  <div class="border-t border-outline-variant/20 my-1 mx-1"></div>
      `).join(""),E=kt.filter(w=>w.path!==(n==null?void 0:n.path)).map(w=>`
              <a href="${w.href}" class="flex items-center gap-2 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[16px] text-primary">event</span>
                <span>${w.label}</span>
              </a>
      `).join(""),T=s?"window.location.href='/'":"window.scrollTo({top: 0, behavior: 'smooth'})";this.innerHTML=`
      <header
        class="glass-panel w-full transition-all duration-300 shadow-sm"
        id="site-header"
      >
        <div class="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <!-- 品牌 -->
          <div class="flex items-center gap-3 cursor-pointer" onclick="${T}">
            <img
              alt="EMU-Stu Logo"
              class="h-12 w-auto object-contain transition-transform duration-300 hover:rotate-12"
              src="${Nt}"
            >
            <span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">
              ${Pn}
            </span>
          </div>
 
          <!-- 桌面端导航链接 -->
          <nav class="hidden md:flex items-center gap-8" aria-label="主导航">
            ${b}
            ${u}
            <!-- 更多下拉菜单 -->
            <div class="relative group py-2">
              <button class="flex items-center gap-0.5 text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed pb-1 border-b-2 border-transparent hover:border-primary/30 dark:hover:border-primary-fixed/30 transition-all duration-200 font-label-md text-label-md cursor-pointer">
                <span>更多</span>
                <span class="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">keyboard_arrow_down</span>
              </button>
              <!-- 下拉菜单卡片 -->
              <div class="absolute right-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 w-44">
                <div class="bg-white dark:bg-[#191c1d] border border-outline-variant/30 rounded-2xl p-1.5 shadow-lg">
                  ${v}
                  <a href="${c}#services-section" class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200">
                    <span class="material-symbols-outlined text-[18px]">grid_view</span>
                    <span>校园服务</span>
                  </a>
                  <div class="border-t border-outline-variant/20 my-1 mx-1"></div>
                  <a href="${c}#projects-section" class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200">
                    <span class="material-symbols-outlined text-[18px]">terminal</span>
                    <span>开源项目</span>
                  </a>
                  <div class="border-t border-outline-variant/20 my-1 mx-1"></div>
                  <!-- TODO：不跳转页面，直接弹窗-->
                  <a href="${c}#news-section" class="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200">
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
                <path d="${At}"/>
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
            ${f}
            
            <!-- 移动端“更多”子导航 -->
            <div class="pl-5 py-2 border-l border-outline-variant/20 ml-2 mt-1 space-y-1">
              <span class="text-xs text-on-surface-variant/40 font-bold tracking-wider uppercase block mb-1">更多</span>
              ${E}
              <a href="${c}#services-section" class="flex items-center gap-2 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[16px] text-primary">grid_view</span>
                <span>校园服务</span>
              </a>
              <a href="${c}#projects-section" class="flex items-center gap-2 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-[16px] text-primary">terminal</span>
                <span>开源项目</span>
              </a>
              <a href="${c}#news-section" class="flex items-center gap-2 py-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
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
                  <path d="${At}"/>
                </svg>
                前往 GitHub
              </a>
            </div>
          </nav>
        </div>
      </header>
    `}setupEventListeners(){const e=this.querySelector("#mobile-menu-toggle"),t=this.querySelector("#mobile-menu");e==null||e.addEventListener("click",()=>{this._menuOpen=!this._menuOpen;const n=e.querySelector(".material-symbols-outlined");this._menuOpen?(t==null||t.classList.remove("max-h-0","opacity-0"),t==null||t.classList.add("max-h-[500px]","opacity-100"),n&&(n.textContent="close"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","关闭菜单")):(t==null||t.classList.add("max-h-0","opacity-0"),t==null||t.classList.remove("max-h-[500px]","opacity-100"),n&&(n.textContent="menu"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","打开菜单"))})}}customElements.define("emu-header",ra);const ln="emu-float-styles";function aa(){if(document.getElementById(ln))return;const a=document.createElement("style");a.id=ln,a.textContent=`
    /* fill: backwards（而非 both）——动画结束后回退到基础样式 transform: none（关键字），
       而不是 fill-forwards 残留的 matrix(1,0,0,1,0,0)。后者虽视觉等同 none，却会让 dialog
       成为 position:fixed 后代的包含块，导致弹窗内 fixed 定位的 tooltip 坐标整体偏移。 */
    emu-float dialog[open]:not([data-closing]) {
      animation: emu-float-enter 0.28s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    }
    emu-float dialog[data-closing] {
      animation: emu-float-leave 0.14s ease-in both;
      pointer-events: none;
    }
    @keyframes emu-float-enter {
      from { opacity: 0; transform: scale(0.94) translateY(12px); }
      to   { opacity: 1; transform: none; }
    }
    @keyframes emu-float-leave {
      from { opacity: 1; transform: none; }
      to   { opacity: 0; transform: scale(0.94) translateY(8px); }
    }
    emu-float dialog[open]::backdrop {
      background: rgba(0, 0, 0, 0.48);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }
    emu-float dialog[open]:not([data-closing])::backdrop {
      animation: emu-backdrop-enter 0.28s ease forwards;
    }
    emu-float dialog[data-closing]::backdrop {
      animation: emu-backdrop-leave 0.14s ease-in forwards;
    }
    @keyframes emu-backdrop-enter {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes emu-backdrop-leave {
      from { opacity: 1; }
      to   { opacity: 0; }
    }
  `,document.head.appendChild(a)}class sa extends HTMLElement{constructor(){super(...arguments);y(this,"_dialog",null);y(this,"_titleElement",null);y(this,"_closing",!1);y(this,"_closeTimer",null)}static get observedAttributes(){return["max-width","subtitle","title"]}attributeChangedCallback(e,t,n){t!==n&&this.update()}connectedCallback(){aa(),this.render()}get titleText(){return this.getAttribute("title")||""}set titleText(e){this.setAttribute("title",e)}showModal(){if(this._dialog){if(this._closing){this._closing=!1,this._closeTimer!==null&&(clearTimeout(this._closeTimer),this._closeTimer=null),delete this._dialog.dataset.closing,document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";return}this._dialog.showModal(),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"}}close(){!this._dialog||!this._dialog.open||this._closing||(this._closing=!0,this._dialog.dataset.closing="1",this._closeTimer=setTimeout(()=>{this._dialog&&(this._dialog.close(),delete this._dialog.dataset.closing),this._closing=!1,this._closeTimer=null},160))}update(){const e=this.getAttribute("title")||"",t=this.getAttribute("subtitle")||"",n=this.getAttribute("max-width")||"max-w-2xl";this._titleElement&&(this._titleElement.textContent=e);const s=this.querySelector(".dialog-subtitle");s&&(s.textContent=t,t?s.removeAttribute("style"):s.setAttribute("style","display: none;")),this._dialog&&(this._dialog.className=`bg-[#f5f6f8] dark:bg-[#151718] text-on-surface p-0 shadow-2xl ${n} w-[90%] md:w-full rounded-2xl border border-outline/10 dark:border-outline-variant/10 focus:outline-none overflow-hidden`)}render(){if(this._dialog)return;const e=this.getAttribute("title")||"",t=this.getAttribute("subtitle")||"",n=this.getAttribute("max-width")||"max-w-2xl",s=Array.from(this.childNodes);this.innerHTML="";const i=document.createElement("dialog");i.className=`bg-[#f5f6f8] dark:bg-[#151718] text-on-surface p-0 shadow-2xl ${n} w-[90%] md:w-full rounded-2xl border border-outline/10 dark:border-outline-variant/10 focus:outline-none overflow-hidden`,i.dataset.emu="1",this._dialog=i;const o=document.createElement("button");o.className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest/50 hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all duration-200 focus:outline-none z-10 cursor-pointer",o.setAttribute("aria-label","关闭浮窗"),o.innerHTML='<span class="material-symbols-outlined text-[20px]">close</span>',o.addEventListener("click",()=>this.close()),i.appendChild(o);const l=document.createElement("div");l.className="max-h-[90dvh] w-full overflow-y-auto overscroll-contain";const c=document.createElement("div");c.className="relative p-6 md:p-8 flex flex-col items-center";const u=document.createElement("div");u.className="text-center mb-8";const p=document.createElement("span");p.className="dialog-subtitle text-xs font-bold tracking-wider text-primary/70 dark:text-primary-fixed-dim/70 uppercase mb-1 block font-mono",p.textContent=t,t||(p.style.display="none"),u.appendChild(p);const h=document.createElement("h3");h.className="text-2xl font-extrabold text-on-surface tracking-tight",h.textContent=e,this._titleElement=h,u.appendChild(h),c.appendChild(u);const b=document.createElement("div");b.className="w-full flex flex-col items-center",s.forEach(f=>b.appendChild(f)),c.appendChild(b);const g=document.createElement("div");g.className="text-center w-full mt-6 pt-4 border-t border-outline-variant/10",g.innerHTML='<p class="text-[10px] text-on-surface-variant/60 font-mono">Powered by EMU-Stu 开源技术组织</p>',c.appendChild(g),l.appendChild(c),i.appendChild(l),this.appendChild(i),i.addEventListener("close",()=>{document.body.style.overflow="",document.documentElement.style.overflow="",this.dispatchEvent(new CustomEvent("close"))}),i.addEventListener("cancel",f=>{f.preventDefault(),this.close()}),i.addEventListener("click",f=>{f.target===i&&this.close()})}}customElements.define("emu-float",sa);const cn="emu-lightbox-styles";function ia(){if(document.getElementById(cn))return;const a=document.createElement("style");a.id=cn,a.textContent=`
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
        /* 关闭时用较快的淡出 */
        transition: opacity 0.15s ease-in, overlay 0.3s allow-discrete, display 0.3s allow-discrete;
      }
      .emu-lightbox-dialog[open] {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        /* 开启时用柔和的 spring 曲线 */
        transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), overlay 0.3s allow-discrete, display 0.3s allow-discrete;
      }
      @starting-style {
        .emu-lightbox-dialog[open] { opacity: 0; }
      }
      .emu-lightbox-dialog::backdrop {
        background: rgba(0, 0, 0, 0.78);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        opacity: 0;
        transition: opacity 0.15s ease-in, overlay 0.3s allow-discrete, display 0.3s allow-discrete;
      }
      .emu-lightbox-dialog[open]::backdrop {
        opacity: 1;
        transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), overlay 0.3s allow-discrete, display 0.3s allow-discrete;
      }
      @starting-style {
        .emu-lightbox-dialog[open]::backdrop { opacity: 0; }
      }
      .emu-lightbox-img-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(0.88);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .emu-lightbox-dialog[open] .emu-lightbox-img-wrap {
        transform: scale(1);
      }
      @starting-style {
        .emu-lightbox-dialog[open] .emu-lightbox-img-wrap { transform: scale(0.88); }
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
    `,document.head.appendChild(a)}class oa extends HTMLElement{constructor(){super(...arguments);y(this,"_open",()=>{});y(this,"_close",()=>{})}connectedCallback(){this.dataset.ready||(this.dataset.ready="1",ia(),this._build())}open(e,t=""){this._open(e,t)}close(){this._close()}_build(){this.style.display="contents";const e=document.createElement("dialog");e.className="emu-lightbox-dialog",e.dataset.emu="1";const t=document.createElement("button");t.className="emu-lightbox-close",t.setAttribute("aria-label","关闭图片预览"),t.innerHTML='<span class="material-symbols-outlined" style="font-size:28px;">close</span>';const n=document.createElement("div");n.className="emu-lightbox-img-wrap";const s=document.createElement("img");s.className="emu-lightbox-img",s.alt="",n.appendChild(s),e.appendChild(t),e.appendChild(n),this.appendChild(e);const i=5;let o=1,l=0,c=0,u="none",p=0,h=0,b=0,g=0,f=0,v=0,E=0,T=!1,w=0,H=0,D=0,G="",Z="";const V=($=!1)=>{s.style.transition=$?"transform 0.25s ease":"none",s.style.transform=`translate(${l}px, ${c}px) scale(${o})`},ie=()=>{const $=Math.max(0,(s.clientWidth*o-window.innerWidth)/2),O=Math.max(0,(s.clientHeight*o-window.innerHeight)/2);l=Math.min($,Math.max(-$,l)),c=Math.min(O,Math.max(-O,c))},ue=()=>{o=1,l=0,c=0,u="none",s.style.transition="",s.style.transform=""},ge=($,O,W,ee=!1)=>{const ae=Math.min(i,Math.max(1,W)),pe=window.innerWidth/2,B=window.innerHeight/2,I=ae/o;l=($-pe)*(1-I)+I*l,c=(O-B)*(1-I)+I*c,o=ae,o<=1.001&&(o=1,l=0,c=0),ie(),V(ee)};this._open=($,O)=>{s.src=$,s.alt=O||"",ue(),e.open||(G=document.body.style.overflow,Z=document.documentElement.style.overflow,document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",e.showModal())},this._close=()=>{e.open&&e.close()},e.addEventListener("close",()=>{document.body.style.overflow=G,document.documentElement.style.overflow=Z,ue()}),t.addEventListener("click",()=>this._close()),e.addEventListener("click",$=>{$.target===e&&this._close()}),s.addEventListener("touchstart",$=>{if($.touches.length===2){u="pinch",T=!0;const O=$.touches[0],W=$.touches[1];p=Math.hypot(W.clientX-O.clientX,W.clientY-O.clientY),h=(O.clientX+W.clientX)/2,b=(O.clientY+W.clientY)/2,$.preventDefault()}else if($.touches.length===1){const O=$.touches[0];v=g=O.clientX,E=f=O.clientY,T=!1,u=o>1?"pan":"none"}},{passive:!1}),s.addEventListener("touchmove",$=>{if(u==="pinch"&&$.touches.length>=2){const O=$.touches[0],W=$.touches[1],ee=Math.hypot(W.clientX-O.clientX,W.clientY-O.clientY),ae=(O.clientX+W.clientX)/2,pe=(O.clientY+W.clientY)/2;l+=ae-h,c+=pe-b;const B=Math.min(i,Math.max(1,o*ee/p)),I=window.innerWidth/2,U=window.innerHeight/2,F=B/o;l=(ae-I)*(1-F)+F*l,c=(pe-U)*(1-F)+F*c,o=B,p=ee,h=ae,b=pe,ie(),V(!1),$.preventDefault()}else if(u==="pan"&&$.touches.length===1){const O=$.touches[0];l+=O.clientX-g,c+=O.clientY-f,g=O.clientX,f=O.clientY,(Math.abs(O.clientX-v)>6||Math.abs(O.clientY-E)>6)&&(T=!0),ie(),V(!1),$.preventDefault()}},{passive:!1}),s.addEventListener("touchend",$=>{if($.touches.length===0){const O=u==="pinch";if(u="none",!O&&!T){const W=Date.now(),ee=$.changedTouches[0];if(W-w<300&&Math.abs(ee.clientX-H)<30&&Math.abs(ee.clientY-D)<30){o>1?ue():ge(ee.clientX,ee.clientY,2.5,!0),w=0;return}w=W,H=ee.clientX,D=ee.clientY}o<=1.001?ue():(ie(),V(!0))}else if($.touches.length===1){const O=$.touches[0];v=g=O.clientX,E=f=O.clientY,u=o>1?"pan":"none"}},{passive:!1}),s.addEventListener("wheel",$=>{$.preventDefault();const O=Math.exp(-$.deltaY*.0015);ge($.clientX,$.clientY,o*O,!1)},{passive:!1})}}customElements.define("emu-lightbox",oa);let Ue=null;function Bn(a,r=""){(!Ue||!Ue.isConnected)&&(Ue=document.createElement("emu-lightbox"),document.body.appendChild(Ue)),Ue.open(a,r)}if(typeof window<"u"){const a=()=>{};window.addEventListener("touchstart",a,{capture:!0,passive:!0}),window.addEventListener("touchmove",a,{capture:!0,passive:!0}),window.addEventListener("touchend",a,{capture:!0,passive:!0})}class la extends HTMLElement{connectedCallback(){this.render()}render(){const r=this.querySelector('[slot="content"]'),e=Array.from(this.childNodes).filter(p=>p!==r);this.innerHTML="",this.style.display||(this.style.display="inline-block"),this.style.verticalAlign||(this.style.verticalAlign="middle");const t=document.createElement("div");t.className="relative inline-flex items-center group/tooltip",e.forEach(p=>t.appendChild(p));const n=document.createElement("div");n.className="fixed p-3 bg-white dark:bg-[#1e2124] text-on-surface border border-outline-variant/30 dark:border-[#2f3336] rounded-xl shadow-lg invisible opacity-0 pointer-events-none transition-opacity duration-200 z-50 min-w-[260px] max-w-[calc(100vw-24px)] text-left text-xs whitespace-normal font-sans normal-case after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-2";const s=document.createElement("div");if(s.className="absolute top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-[#1e2124]",n.appendChild(s),r)r.removeAttribute("slot"),n.appendChild(r);else{const p=this.getAttribute("text")||"",h=document.createElement("span");h.textContent=p,n.appendChild(h)}t.appendChild(n),this.appendChild(t);let i=!1;const o=()=>{i=!0;const h=(t.firstElementChild||t).getBoundingClientRect();n.style.visibility="hidden",n.style.transition="none",n.style.position="fixed",n.style.left="-9999px",n.style.top="-9999px",n.style.transform="none";const b=n.getBoundingClientRect(),g=window.innerWidth||document.documentElement.clientWidth,f=h.left+(h.width-b.width)/2,v=h.top-b.height-8;let E=Math.max(12,f);E+b.width>g-12&&(E=g-12-b.width),n.style.left=`${E}px`,n.style.top=`${v}px`;const w=h.left+h.width/2-E,H=16,D=b.width-16,G=Math.max(H,Math.min(D,w));s.style.left=`${G}px`,s.style.transform="translateX(-50%)",requestAnimationFrame(()=>{requestAnimationFrame(()=>{i&&(n.style.transition="",n.style.visibility="visible",n.style.opacity="1",n.style.pointerEvents="auto")})})},l=()=>{i=!1,n.style.transition="",n.style.opacity="0",n.style.pointerEvents="none",setTimeout(()=>{i||(n.style.visibility="hidden")},200)},c=this.hasAttribute("manual-touch"),u=typeof window.matchMedia=="function"?window.matchMedia("(hover: hover)").matches:!0;c&&!u||(t.addEventListener("mouseenter",o),t.addEventListener("mouseleave",l)),c||t.addEventListener("touchstart",o,{passive:!0})}}customElements.define("emu-tooltip",la);const dn="emu-select-styles";function ca(){if(document.getElementById(dn))return;const a=document.createElement("style");a.id=dn,a.textContent=`
    @keyframes emu-select-pop {
      from { opacity: 0; transform: translateY(-6px) scale(0.98); }
      to   { opacity: 1; transform: none; }
    }
    emu-select [data-panel] { animation: emu-select-pop 0.16s cubic-bezier(0.16, 1, 0.3, 1) backwards; transform-origin: top; }
    emu-select [data-list]::-webkit-scrollbar { width: 6px; }
    emu-select [data-list]::-webkit-scrollbar-thumb { background: rgba(116,119,130,0.30); border-radius: 9999px; }
    emu-select [data-list]::-webkit-scrollbar-track { background: transparent; }
  `,document.head.appendChild(a)}const nt=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");class da extends HTMLElement{constructor(){super(...arguments);y(this,"_options",[]);y(this,"_value",null);y(this,"_open",!1);y(this,"_onDocClick",e=>{this.contains(e.target)||this.closePanel()});y(this,"_onKeydown",e=>{var t;e.key==="Escape"&&this._open&&(this.closePanel(),(t=this.querySelector("[data-trigger]"))==null||t.focus())})}static get observedAttributes(){return["placeholder","clearable","aria-label"]}connectedCallback(){ca(),this.render(),this.bindEvents(),document.addEventListener("click",this._onDocClick),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){document.removeEventListener("click",this._onDocClick),document.removeEventListener("keydown",this._onKeydown)}attributeChangedCallback(){this.isConnected&&this.render()}get options(){return this._options}set options(e){this._options=Array.isArray(e)?e.slice():[],this._value&&!this._options.includes(this._value)&&(this._value=null),this.isConnected&&this.render()}get value(){return this._value}set value(e){const t=e&&this._options.includes(e)?e:null;t!==this._value&&(this._value=t,this.isConnected&&this.render())}get clearable(){return this.hasAttribute("clearable")}get placeholder(){return this.getAttribute("placeholder")||"请选择"}emitChange(){this.dispatchEvent(new CustomEvent("emu-select-change",{detail:{value:this._value},bubbles:!0}))}openPanel(){this._open||(document.querySelectorAll("emu-select").forEach(e=>{e!==this&&e._open&&(e._open=!1)}),this._open=!0,document.querySelectorAll("emu-select").forEach(e=>e.render()))}closePanel(){this._open&&(this._open=!1,this.render())}togglePanel(){this._open?this.closePanel():this.openPanel()}selectOption(e){this._value=this._value===e?null:e,this._open=!1,this.render(),this.emitChange()}clearValue(){this._value!==null&&(this._value=null,this.render(),this.emitChange())}bindEvents(){this.addEventListener("click",e=>{const t=e.target;if(e.stopPropagation(),t.closest("[data-clear]")){this.clearValue();return}if(t.closest("[data-trigger]")){this.togglePanel();return}const n=t.closest("[data-option]");if(n){this.selectOption(n.getAttribute("data-option"));return}})}render(){const e=this._value!==null,t=e?this._value:this.placeholder,n=this.getAttribute("aria-label")||this.placeholder,s=e?"border-primary/40 text-on-surface dark:border-primary-fixed-dim/40":"border-outline-variant/60 text-on-surface-variant/80 hover:text-on-surface hover:border-primary/30",i=this.clearable&&e?`<span data-clear role="button" tabindex="0" aria-label="清除选择" title="清除选择"
            class="material-symbols-outlined text-[18px] shrink-0 text-on-surface-variant/55 hover:text-error transition-colors cursor-pointer">close</span>`:`<span aria-hidden="true" class="material-symbols-outlined text-[18px] shrink-0 text-on-surface-variant/60 transition-transform duration-200 ${this._open?"rotate-180":""}">expand_more</span>`,o=this._open?this.panelHTML():"";this.innerHTML=`
      <div class="relative inline-block text-left">
        <button data-trigger type="button" aria-haspopup="listbox" aria-expanded="${this._open}" aria-label="${nt(n)}"
          class="inline-flex items-center gap-1.5 h-9 pl-3 pr-2.5 rounded-full border bg-surface-container-lowest text-xs font-semibold transition-all cursor-pointer ${s}">
          <span class="truncate max-w-[10rem] md:max-w-[14rem]">${nt(t)}</span>
          ${i}
        </button>
        ${o}
      </div>
    `}panelHTML(){return this._options.length===0?`<div data-panel class="absolute left-0 z-40 mt-1.5 min-w-[12rem] rounded-xl border border-outline-variant/60 bg-surface-container-lowest dark:bg-[#1e2124] shadow-lg p-2">
        <p class="px-2 py-3 text-xs text-on-surface-variant/55 text-center">暂无选项</p>
      </div>`:`<div data-panel role="listbox" class="absolute left-0 z-40 mt-1.5 min-w-[13rem] max-w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-outline-variant/60 bg-surface-container-lowest dark:bg-[#1e2124] shadow-lg p-1.5">
      <div data-list class="flex flex-col gap-0.5 max-h-72 overflow-y-auto">${this._options.map(t=>{const n=t===this._value,s=n?"bg-primary/10 text-primary dark:bg-primary-fixed-dim/15 dark:text-primary-fixed-dim font-semibold":"text-on-surface/85 hover:bg-on-surface-variant/[0.06]",i=n?'<span class="material-symbols-outlined text-[16px] shrink-0">check</span>':'<span class="w-4 shrink-0"></span>';return`<button data-option="${nt(t)}" role="option" aria-selected="${n}" type="button"
          class="w-full flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs text-left transition-colors cursor-pointer ${s}">
          ${i}<span class="truncate">${nt(t)}</span>
        </button>`}).join("")}</div>
    </div>`}}customElements.define("emu-select",da);class ua extends HTMLElement{connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
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
          src="${Nt}"
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
    `}setupEventListeners(){const r=this.querySelector("#hero-join-btn"),e=this.querySelector("#hero-projects-btn"),t=this.querySelector("#hero-portals-btn"),n=this.querySelector("#hero-labs-btn");r==null||r.addEventListener("click",()=>{var s;(s=document.querySelector("#about-section"))==null||s.scrollIntoView({behavior:"smooth"})}),e==null||e.addEventListener("click",()=>{var s;(s=document.querySelector("#projects-section"))==null||s.scrollIntoView({behavior:"smooth"})}),t==null||t.addEventListener("click",()=>{var s;(s=document.querySelector("#services-section"))==null||s.scrollIntoView({behavior:"smooth"})}),n==null||n.addEventListener("click",()=>{var s;(s=document.querySelector("#labs-section"))==null||s.scrollIntoView({behavior:"smooth"})})}}customElements.define("emu-hero",ua);const pa="/assets/2025-2026-calendar--jsKTcZs.jpg",ha=Object.freeze(Object.defineProperty({__proto__:null,default:pa},Symbol.toStringTag,{value:"Module"})),ga="/assets/2025-2026-schedule-OcUtbm2V.jpg",ma=Object.freeze(Object.defineProperty({__proto__:null,default:ga},Symbol.toStringTag,{value:"Module"})),fa=[{icon:"event",title:"校园活动",description:"篮球赛、讲座、招聘会、社团活动……按月/周/日查看校园活动日历",href:"/activity",soon:!1},{icon:"restaurant",title:"校园食堂",description:"今日吃什么？查看各大食堂菜谱与就餐反馈",href:"#",soon:!1},{icon:"diversity_3",title:"校园社团",description:"了解校园缤纷社团，发现你的兴趣所在",href:"#",soon:!1},{icon:"map",title:"校园地图",description:"手绘与数字校园地图，快速定位教学楼与宿舍",href:"#"},{icon:"download",title:"资料下载",description:"校园常用表格、课件、软件及办公模版快速下载",href:"#"},{icon:"calendar_month",title:"校历查询",description:"查看最新学期安排，合理规划学习与假期时间",href:"#calendar"}],un={newFeatureRequest:"https://acnpe6t9x5o7.feishu.cn/share/base/form/shrcn3EmVQLykJnNfFimFwNGRsg",featureFeedback:"https://acnpe6t9x5o7.feishu.cn/share/base/form/shrcn5HRkWpziz9ddvthLFAqbQE"},ba="/assets/survey-qrcode-feature-feedbck-CXXN6x3o.png",xa="/assets/survey-qrcode-new-feature-request-DULuK1K3.png",pn=Object.assign({"../../assets/university_calendar/2025-2026-calendar.jpg":ha,"../../assets/university_calendar/2025-2026-schedule.jpg":ma});class va extends HTMLElement{connectedCallback(){this.render(),this.initFeedbackDialog(),this.initCalendarDialog()}render(){const r=fa.map(e=>`
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
            href="${un.newFeatureRequest}"
            target="_blank"
            class="flex flex-col items-center group cursor-pointer w-full max-w-[280px] md:max-w-[320px] transition-transform duration-300"
          >
            <div class="overflow-hidden rounded-2xl shadow-md border border-outline-variant/10 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300 bg-white">
              <img
                src="${xa}"
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
            href="${un.featureFeedback}"
            target="_blank"
            class="flex flex-col items-center group cursor-pointer w-full max-w-[280px] md:max-w-[320px] transition-transform duration-300"
          >
            <div class="overflow-hidden rounded-2xl shadow-md border border-outline-variant/10 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300 bg-white">
              <img
                src="${ba}"
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
        </div>
      </emu-float>
    `}initFeedbackDialog(){const r=this.querySelector("#feedback-trigger"),e=this.querySelector("#feedback-dialog");!r||!e||r.addEventListener("click",t=>{t.preventDefault(),e.showModal()})}initCalendarDialog(){const r=this.querySelector("#calendar-dialog"),e=this.querySelector("#calendar-download-btn"),t=this.querySelector("#calendar-img"),n=this.querySelector("#calendar-year-label"),s=this.querySelector("#btn-year-prev"),i=this.querySelector("#btn-year-next"),o=this.querySelector("#tooltip-prev"),l=this.querySelector("#tooltip-next");if(!r)return;t==null||t.addEventListener("click",()=>{t.src&&Bn(t.src,t.alt)});const c={};for(const f in pn){const E=(f.split("/").pop()||"").match(/^(\d{4}-\d{4})-(calendar|schedule)\.(png|jpg|jpeg|webp)$/i);if(E){const T=E[1],w=E[2].toLowerCase(),H=E[3],D=pn[f].default;c[T]||(c[T]={});const G=w==="calendar"?"校历":"作息时间表";c[T][w]={src:D,filename:`EMU-NCIST-${T}-${w.charAt(0).toUpperCase()+w.slice(1)}.${H}`,label:`${T} 学年 ${G}`}}}const u=Object.keys(c).sort((f,v)=>v.localeCompare(f));let p=0,h="calendar";const b=(f=!1)=>{if(u.length===0){n&&(n.textContent="暂无数据");return}const v=u[p];n&&(n.textContent=`${v} 学年`);const E=c[v];if(!E)return;let T=h;if(!E[T]){const Z=Object.keys(E)[0];Z&&(T=Z)}const w=E[T];if(!w||!t)return;this.querySelectorAll(".type-toggle-btn").forEach(Z=>{const V=Z.getAttribute("data-type")||"",ie=!!E[V];Z.classList.remove("bg-white","dark:bg-[#323639]","text-primary","dark:text-primary-fixed-dim","shadow-sm"),Z.classList.add("text-on-surface-variant/80","hover:text-on-surface"),ie?(Z.removeAttribute("disabled"),Z.classList.remove("opacity-40","cursor-not-allowed"),V===T&&(Z.classList.remove("text-on-surface-variant/80","hover:text-on-surface"),Z.classList.add("bg-white","dark:bg-[#323639]","text-primary","dark:text-primary-fixed-dim","shadow-sm"))):(Z.setAttribute("disabled","true"),Z.classList.add("opacity-40","cursor-not-allowed"))});const D=p===u.length-1,G=p===0;s&&(D?(s.setAttribute("disabled","true"),s.classList.add("opacity-30","cursor-not-allowed"),s.classList.remove("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),s.classList.add("bg-transparent"),o&&o.classList.remove("hidden")):(s.removeAttribute("disabled"),s.classList.remove("opacity-30","cursor-not-allowed","bg-transparent"),s.classList.add("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),o&&o.classList.add("hidden"))),i&&(G?(i.setAttribute("disabled","true"),i.classList.add("opacity-30","cursor-not-allowed"),i.classList.remove("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),i.classList.add("bg-transparent"),l&&l.classList.remove("hidden")):(i.removeAttribute("disabled"),i.classList.remove("opacity-30","cursor-not-allowed","bg-transparent"),i.classList.add("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),l&&l.classList.add("hidden"))),f?(t.src=w.src,t.alt=w.label,t.classList.remove("opacity-0"),r.titleText=w.label):(t.style.opacity="0.3",setTimeout(()=>{t.src=w.src,t.alt=w.label,r.titleText=w.label,t.style.opacity="1"},100))};this.addEventListener("click",f=>{const v=f.target.closest("a");v&&v.getAttribute("href")==="#calendar"&&(f.preventDefault(),r.showModal(),b(!0))}),s&&s.addEventListener("click",f=>{f.preventDefault(),p<u.length-1&&(p++,b())}),i&&i.addEventListener("click",f=>{f.preventDefault(),p>0&&(p--,b())}),this.querySelectorAll(".type-toggle-btn").forEach(f=>{f.addEventListener("click",v=>{const T=v.currentTarget.getAttribute("data-type");T&&T!==h&&(h=T,b())})}),e&&e.addEventListener("click",f=>{if(f.preventDefault(),u.length===0)return;const v=u[p],E=c[v];if(!E)return;let T=h;if(!E[T]){const D=Object.keys(E)[0];D&&(T=D)}const w=E[T];if(!w)return;const H=document.createElement("a");H.href=w.src,H.download=w.filename,document.body.appendChild(H),H.click(),document.body.removeChild(H)})}}customElements.define("emu-services",va);class ya extends HTMLElement{constructor(){super(...arguments);y(this,"handleClick",e=>{this.getAttribute("soon")==="true"&&e.preventDefault()})}static get observedAttributes(){return["icon","title","description","href","soon"]}connectedCallback(){this.style.display="block",this.render(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}attributeChangedCallback(){this.isConnected&&this.render()}render(){const e=this.getAttribute("icon")||"help",t=this.getAttribute("title")||"",n=this.getAttribute("description")||"",s=this.getAttribute("href")||"#",i=this.getAttribute("soon")==="true",o=i?"group flex flex-col items-center justify-center text-center gap-2 md:gap-4 h-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-4 md:p-8 shadow-sm relative overflow-hidden cursor-not-allowed select-none opacity-60":"group flex flex-col items-center justify-center text-center gap-2 md:gap-4 h-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 md:p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden",l=i?"":'<div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>',c=i?"w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container/60 text-secondary/70 flex items-center justify-center relative z-10":"w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary group-hover:scale-110 transition-all duration-300 relative z-10",u=i?"font-headline-md font-bold text-base md:text-headline-md text-on-surface/70 relative z-10":"font-headline-md font-bold text-base md:text-headline-md text-on-surface relative z-10 group-hover:text-primary transition-colors duration-300",p=i?"text-xs md:text-sm text-on-surface-variant/60 relative z-10 line-clamp-2 max-w-[240px] leading-relaxed":"text-xs md:text-sm text-on-surface-variant/80 relative z-10 line-clamp-2 max-w-[240px] leading-relaxed",h=i?`
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
        <div class="${c}">
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
    `}}customElements.define("emu-service-card",ya);const ka=[{name:"EmergencyTeleoperatedRobotSystem-Jetson",description:"应急遥操作机器人系统 Jetson 端：机器人主控核心，负责为客户端提供三维场景重建与目标检测功能，以及接收和处理来自客户端的控制指令。",languages:["C++","Python"],stars:48,color:"#3572A5",href:"https://github.com/EMU-Stu/EmergencyTeleoperatedRobotSystem-Jetson"},{name:"EmergencyTeleoperatedRobotSystem-Unity",description:"应急遥操作机器人系统 Unity 端：机器人控制客户端，基于 MRTK 框架并面向 HoloLens 2 平台开发，提供 3D 虚拟孪生、遥操作与三维现场呈现。",languages:["C#"],stars:62,color:"#178600",href:"https://github.com/EMU-Stu/EmergencyTeleoperatedRobotSystem-Unity"},{name:"skills",description:"校园相关 Agent Skills。",languages:["Markdown"],stars:128,color:"#083fa6",href:"https://github.com/EMU-Stu/skills"},{name:"EMU-Stu-Site",description:"EMU-Stu 官网源码。",languages:["TypeScript","HTML","CSS"],stars:35,color:"#3178c6",href:"https://github.com/EMU-Stu/EMU-Stu-Site"},{name:"EMU-Stu-Blog",description:"EMU-Stu 技术博客的内容仓库，包含所有的文章 Markdown 源文件与相关静态资源，欢迎你的投稿。",languages:["Markdown"],stars:28,color:"#083fa6",href:"https://github.com/EMU-Stu/EMU-Stu-Blog"},{name:"CUEDC-2024-Drone-code",description:"2024 年全国大学生电子设计竞赛无人机赛题方案。基于 Fast-LIO 激光 SLAM 实现室内自主定位，融合 PX4 飞控、STM32 下位机路径规划 与 OpenMV 视觉识别，完成自主航点飞行与目标检测任务。",languages:["C"],stars:56,color:"#555555",href:"https://github.com/EMU-Stu/CUEDC-2024-Drone-code"},{name:"IOT-lab-web",description:"物联网实验室实验室门户站点，基于 Next.js + Tailwind 的纯前端实验室站点，包含新生导览、毕业路径文章与项目索引。",languages:["TypeScript","CSS","JavaScript"],stars:0,color:"#3178c6",href:"https://github.com/EMU-Stu/IOT-lab-web"}];class wa extends HTMLElement{constructor(){super(...arguments);y(this,"_displayedProjects",[])}connectedCallback(){this.shuffleProjects(),this.render(),this.loadCommitStats(),this.setupEventListeners()}shuffleProjects(){const e=[...ka];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}this._displayedProjects=e.slice(0,4)}getLanguageColor(e,t){return{TypeScript:"#3178c6",JavaScript:"#f1e05a",HTML:"#e34c26",CSS:"#563d7c","C#":"#178600","C++":"#f34b7d",C:"#555555",Python:"#3572A5",Markdown:"#083fa6"}[e]||t}generateCardHtml(e){const t=e.languages.map(n=>`
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
                <path d="${At}"/>
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
          <emu-contribution-heatmap></emu-contribution-heatmap>
        </div>
      </section>
    `}async loadCommitStats(){try{const e=await fetch("https://cdn.jsdelivr.net/gh/EMU-Stu/EMU-Stu-Site@stats-data/stats.json",{cache:"no-store"});if(!e.ok)throw new Error(`Failed to fetch stats: ${e.status}`);const t=await e.json();if(!Array.isArray(t))return;const n=480*60*1e3,s=new Date,i=s.getTime()+s.getTimezoneOffset()*60*1e3+n,o=[];for(let p=1;p<=7;p++){const h=new Date(i-p*24*60*60*1e3),b=h.getFullYear(),g=String(h.getMonth()+1).padStart(2,"0"),f=String(h.getDate()).padStart(2,"0");o.push(`${b}-${g}-${f}`)}const l=t.filter(p=>p&&o.includes(p.date)),c=l.reduce((p,h)=>p+(h.total_additions||0),0),u=l.reduce((p,h)=>p+(h.total_deletions||0),0);if(c>0){const p=this.querySelector("#commit-stats-span");if(p){const h=c.toLocaleString(),b=u.toLocaleString(),g=`${o[o.length-1]} 至 ${o[0]}`;p.innerHTML=`
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
                  <span>删除：<strong class="text-error font-mono font-semibold">-${b}</strong></span>
                </span>
                <span class="block pt-2 border-t border-outline-variant/20">
                  <a href="/article?slug=code_change_stats_howto" class="text-primary hover:underline flex items-center gap-0.5 font-semibold text-[11px] cursor-pointer">
                    本功能是如何实现的？
                    <span class="material-symbols-outlined text-[10px]">north_east</span>
                  </a>
                </span>
              </div>
            </emu-tooltip>
          `,p.style.display="inline"}}}catch(e){console.error("加载项目代码提交统计数据失败:",e)}}setupEventListeners(){const e=this.querySelector("#projects-shuffle-btn"),t=this.querySelector("#project-cards-container"),n=this.querySelector("#shuffle-icon");e==null||e.addEventListener("click",()=>{n&&(n.classList.add("rotate-180"),setTimeout(()=>n.classList.remove("rotate-180"),500)),t&&(t.style.opacity="0"),setTimeout(()=>{this.shuffleProjects();const i=this._displayedProjects.map(o=>this.generateCardHtml(o)).join("");t&&(t.innerHTML=i,t.style.opacity="1")},300)});const s=this.querySelector("#view-heatmap-btn");s==null||s.addEventListener("click",i=>{i.preventDefault();const o=this.querySelector("emu-contribution-heatmap");o&&o.open()})}}customElements.define("emu-projects",wa);class Ea extends HTMLElement{constructor(){super(...arguments);y(this,"_historyData",[]);y(this,"_dataLoaded",!1);y(this,"_touchTip",null);y(this,"_touchTipArrow",null);y(this,"_touchTipBody",null);y(this,"_touchScrubReady",!1)}connectedCallback(){this.renderBaseStructure(),this.fetchStats()}async fetchStats(){try{const e=await fetch("https://cdn.jsdelivr.net/gh/EMU-Stu/EMU-Stu-Site@stats-data/stats.json",{cache:"no-store"});if(!e.ok)throw new Error(`Failed to fetch stats: ${e.status}`);const t=await e.json();if(!Array.isArray(t))throw new Error("Data format error: expected an array");this._historyData=t,this._dataLoaded=!0}catch(e){console.error("加载组织活跃度统计失败:",e)}}renderBaseStructure(){this.innerHTML=`
      <emu-float title="组织活跃热力图" subtitle="Org Contribution Heatmap" max-width="max-w-3xl">

        <!-- 控制栏（包含统计口径与时间范围说明） -->
        <div class="w-full flex items-center justify-between mb-5 select-none text-xs">
          <span class="text-[11px] text-on-surface-variant/60 font-medium">统计口径：开源仓库代码变更行数 (+/-)</span>
          <span id="current-year-display" class="font-mono text-on-surface-variant/60 text-[11px]">数据范围：2025-05-01 至 今日</span>
        </div>

        <!-- 滚动热力图区：移除 pl padding，将其分配到 sticky Y 轴以保证滚动时完美剪裁遮挡 -->
        <div class="w-full relative overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-outline-variant/30 scrollbar-track-transparent mb-6 border border-outline-variant/20 dark:border-[#2f3336] rounded-xl py-4 pr-4 pl-0 bg-surface-container-low/20">

          <div class="flex items-start w-max">
            <!-- 左侧冻结列：sticky left-0，实色背景遮挡水平滚动进入的元素 -->
            <div class="sticky left-0 z-20 bg-[#f5f6f8] dark:bg-[#151718] pl-4 pr-1.5 flex flex-col flex-shrink-0 select-none">
              <div class="h-[24px]"></div>
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

            <!-- 右侧滚动内容区 -->
            <div class="flex flex-col flex-shrink-0">
              <div id="dialog-heatmap-months" class="relative h-4 mb-1"></div>
              <div id="dialog-heatmap-grid" class="flex gap-[2px] pt-1"></div>
            </div>
          </div>

        </div>

        <!-- 底部数据简报 -->
        <div class="w-full bg-surface-container-low/50 rounded-xl p-4 mb-5 text-[11px] text-on-surface-variant leading-relaxed select-none">
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
        <div class="w-full flex justify-end items-center gap-1.5 text-[10px] text-on-surface-variant/70 font-mono select-none">
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

      </emu-float>
    `}open(){const e=this.querySelector("emu-float");e&&(e.showModal(),this.renderHeatmap(),this.setupTouchScrub(),this.scrollToLatest())}close(){const e=this.querySelector("emu-float");e==null||e.close()}cellTooltipHTML(e){const{val:t,additions:n,deletions:s,commits:i,commitsTracked:o,dateTracked:l}=this.getDayVal(e),c=t.toLocaleString(),u=o?`<strong>${i}</strong> 次`:'<span style="opacity:0.45;font-style:italic;">未统计</span>',p=l?`<strong>${c}</strong> 行${t>0?` (新增 +${n.toLocaleString()} / 删除 -${s.toLocaleString()})`:""}`:'<span style="opacity:0.45;font-style:italic;">未统计</span>',h=`提交次数：${u}<br/>变更代码：${p}`;return`<span class="block font-bold text-on-surface mb-1.5 font-mono text-[11px]">${e}</span><span class="block text-on-surface-variant/90 text-[11px] leading-relaxed">${h}</span>`}setupTouchScrub(){if(this._touchScrubReady)return;const e=this.querySelector("#dialog-heatmap-grid");if(!e)return;this._touchScrubReady=!0;const t=320,n=12,s=500;let i=null,o=!1,l=0,c=0,u=null;const p=()=>{i!==null&&(clearTimeout(i),i=null)},h=(E,T)=>{const w=document.elementFromPoint(E,T),H=w==null?void 0:w.closest("[data-date]");return H&&e.contains(H)?H:null},b=E=>{!E||E===u||(u=E,this.showTouchTip(E))};e.addEventListener("touchstart",E=>{if(E.touches.length!==1)return;const T=E.touches[0];l=T.clientX,c=T.clientY,o=!1,u=null,p(),i=setTimeout(()=>{o=!0,i=null,navigator.vibrate&&navigator.vibrate(10),b(h(l,c))},t)},{passive:!0}),e.addEventListener("touchmove",E=>{const T=E.touches[0];if(T){if(!o){Math.hypot(T.clientX-l,T.clientY-c)>n&&p();return}E.preventDefault(),b(h(T.clientX,T.clientY))}},{passive:!1});const g=()=>{p(),o&&(o=!1,u=null,this.hideTouchTip())};e.addEventListener("touchend",g),e.addEventListener("touchcancel",g);let f=null;const v=()=>{e.setAttribute("data-touch-suppress",""),f&&clearTimeout(f),f=setTimeout(()=>{e.removeAttribute("data-touch-suppress"),f=null},s)};if(!document.getElementById("heatmap-touch-suppress-style")){const E=document.createElement("style");E.id="heatmap-touch-suppress-style",E.textContent=`
        [data-touch-suppress] emu-tooltip > .group\\/tooltip {
          pointer-events: none !important;
        }
      `,document.head.appendChild(E)}e.addEventListener("touchstart",v,{capture:!0,passive:!0}),e.addEventListener("touchend",v,{capture:!0,passive:!0})}ensureTouchTip(){if(this._touchTip)return this._touchTip;const e=document.createElement("div");e.className="fixed p-3 bg-white dark:bg-[#1e2124] text-on-surface border border-outline-variant/30 dark:border-[#2f3336] rounded-xl shadow-lg invisible opacity-0 pointer-events-none transition-opacity duration-150 z-50 text-left text-xs whitespace-normal font-sans normal-case",e.style.minWidth="180px",e.style.maxWidth="calc(100vw - 24px)";const t=document.createElement("div");t.className="absolute top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-[#1e2124]",e.appendChild(t);const n=document.createElement("div");return n.className="p-0.5 select-none",e.appendChild(n),(this.querySelector("emu-float dialog")||this).appendChild(e),this._touchTip=e,this._touchTipArrow=t,this._touchTipBody=n,e}showTouchTip(e){const t=e.getAttribute("data-date");if(!t)return;const n=this.ensureTouchTip();this._touchTipBody.innerHTML=this.cellTooltipHTML(t),n.style.visibility="hidden",n.style.left="-9999px",n.style.top="-9999px";const s=e.getBoundingClientRect(),i=n.getBoundingClientRect(),o=window.innerWidth||document.documentElement.clientWidth,l=s.left+(s.width-i.width)/2;let c=Math.max(12,l);c+i.width>o-12&&(c=o-12-i.width);const u=s.top-i.height-8;n.style.left=`${c}px`,n.style.top=`${u}px`;const p=s.left+s.width/2,h=Math.max(16,Math.min(i.width-16,p-c));this._touchTipArrow.style.left=`${h}px`,this._touchTipArrow.style.transform="translateX(-50%)",n.style.visibility="visible",n.style.opacity="1"}hideTouchTip(){this._touchTip&&(this._touchTip.style.opacity="0",this._touchTip.style.visibility="hidden")}scrollToLatest(){setTimeout(()=>{const e=this.querySelector(".overflow-x-auto");e&&(e.scrollLeft=e.scrollWidth)},50)}getDayVal(e){var u,p,h,b;const t=this._historyData.find(g=>g.date===e);if(!t)return{val:0,additions:0,deletions:0,commits:0,commitsTracked:!1,dateTracked:!1,score:0};const n=((u=t.metrics)==null?void 0:u.additions)??t.total_additions??0,s=((p=t.metrics)==null?void 0:p.deletions)??t.total_deletions??0,i=((h=t.metrics)==null?void 0:h.lines_changed)??n+s;let o=0,l=!1;typeof((b=t.metrics)==null?void 0:b.commits)=="number"?(o=t.metrics.commits,l=!0):t.repos&&t.repos.some(f=>{var v;return typeof((v=f.metrics)==null?void 0:v.commits)=="number"})&&(o=t.repos.reduce((f,v)=>{var E;return f+(((E=v.metrics)==null?void 0:E.commits)??0)},0),l=!0);const c=o*20+Math.log2(i+1)*10;return{val:i,additions:n,deletions:s,commits:o,commitsTracked:l,dateTracked:!0,score:c}}calculateYearQuantiles(e){const t=[];if(e.forEach(s=>{const{score:i}=this.getDayVal(s);i>0&&t.push(i)}),t.length===0)return{q25:1,q50:2,q75:3};t.sort((s,i)=>s-i);const n=s=>{const i=Math.floor(t.length*s);return t[Math.min(i,t.length-1)]};return{q25:n(.25),q50:n(.5),q75:n(.75)}}renderHeatmap(){if(!this._dataLoaded){const I=this.querySelector("#dialog-heatmap-grid");I&&(I.innerHTML='<span class="text-xs text-on-surface-variant/70 py-6">正在加载活跃度数据...</span>');return}const e=480*60*1e3,t=new Date,n=new Date(t.getTime()+t.getTimezoneOffset()*60*1e3+e),s=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,i=new Date(2025,4,1),o=n,l=i.getDay(),c=new Date(i.getTime()-l*24*60*60*1e3),u=o.getDay(),p=new Date(o.getTime()+(6-u)*24*60*60*1e3),h=[];let b=new Date(c);for(;b<=p;){const I=b.getFullYear(),U=String(b.getMonth()+1).padStart(2,"0"),F=String(b.getDate()).padStart(2,"0");h.push(`${I}-${U}-${F}`),b.setDate(b.getDate()+1)}const f=h.length/7,v="2025-05-01",E=h.filter(I=>I>=v&&I<=s);let T=0,w=0,H=0,D=0,G="";E.forEach(I=>{const{val:U,commits:F}=this.getDayVal(I);(U>0||F>0)&&(T+=U,w+=F,H++,U>D&&(D=U,G=I))});const Z=this.calculateYearQuantiles(E),V=[];for(let I=0;I<f;I++){const U=[];for(let F=0;F<7;F++)U.push(h[I*7+F]);V.push(U)}let ie="",ue=-10,ge="";V.forEach((I,U)=>{const ce=`${new Date(I[3]).getMonth()+1}月`;ce!==ge&&U-ue>=3&&U<f-1&&(ie+=`<div class="absolute text-[10px] text-on-surface-variant/50 font-mono select-none whitespace-nowrap" style="left: calc(${U} * (20px + 2px));">${ce}</div>`,ge=ce,ue=U)});let $="";V.forEach(I=>{let U="";I.forEach(F=>{const ce=F>s;if(F<"2025-05-01"||ce)U+=`
            <div class="w-[20px] h-[20px] relative flex-shrink-0">
              <div class="w-[20px] h-[20px] rounded-[2px] bg-transparent pointer-events-none"></div>
            </div>
          `;else{const{score:Re}=this.getDayVal(F);let Ae=0;Re>0&&(Re<=Z.q25?Ae=1:Re<=Z.q50?Ae=2:Re<=Z.q75?Ae=3:Ae=4),U+=`
            <div class="w-[20px] h-[20px] relative flex-shrink-0 flex items-center justify-center">
              <emu-tooltip manual-touch style="display: flex; width: 20px; height: 20px; align-items: center; justify-content: center;">
                <div
                  class="w-[20px] h-[20px] rounded-[2px] ${["bg-[#ebedf0] dark:bg-[#161b22] hover:scale-125 hover:z-10","bg-[#9be9a8] dark:bg-[#0e4429] hover:scale-125 hover:z-10","bg-[#40c463] dark:bg-[#006d32] hover:scale-125 hover:z-10","bg-[#30a14e] dark:bg-[#26a641] hover:scale-125 hover:z-10","bg-[#216e39] dark:bg-[#39d353] hover:scale-125 hover:z-10"][Ae]} cursor-pointer transition-all duration-200"
                  data-date="${F}"
                ></div>
                <div slot="content" class="min-w-[180px] p-0.5 select-none">
                  ${this.cellTooltipHTML(F)}
                </div>
              </emu-tooltip>
            </div>
          `}}),$+=`<div class="flex flex-col gap-[2px]">${U}</div>`});const O=this.querySelector("#dialog-heatmap-months");O&&(O.innerHTML=ie);const W=this.querySelector("#dialog-heatmap-grid");W&&(W.innerHTML=$);const ee=this.querySelector("#year-total-lines");ee&&(ee.textContent=`${T.toLocaleString()} 行`);const ae=this.querySelector("#year-total-commits");ae&&(ae.textContent=`${w.toLocaleString()} 次`);const pe=this.querySelector("#year-active-days");pe&&(pe.textContent=`${H} 天`);const B=this.querySelector("#year-max-lines");B&&(B.textContent=`${D.toLocaleString()} 行${G?` (${G})`:""}`)}}customElements.define("emu-contribution-heatmap",Ea);const De={sports:{key:"sports",label:"体育",dot:"bg-emerald-500",text:"text-emerald-700 dark:text-emerald-300",chipBg:"bg-emerald-50 dark:bg-emerald-500/10",chipBorder:"border-emerald-200/80 dark:border-emerald-500/25"},arts:{key:"arts",label:"文艺",dot:"bg-fuchsia-500",text:"text-fuchsia-700 dark:text-fuchsia-300",chipBg:"bg-fuchsia-50 dark:bg-fuchsia-500/10",chipBorder:"border-fuchsia-200/80 dark:border-fuchsia-500/25"},recruitment:{key:"recruitment",label:"招聘",dot:"bg-amber-500",text:"text-amber-700 dark:text-amber-300",chipBg:"bg-amber-50 dark:bg-amber-500/10",chipBorder:"border-amber-200/80 dark:border-amber-500/25"},academic:{key:"academic",label:"学术",dot:"bg-blue-500",text:"text-blue-700 dark:text-blue-300",chipBg:"bg-blue-50 dark:bg-blue-500/10",chipBorder:"border-blue-200/80 dark:border-blue-500/25"},volunteer:{key:"volunteer",label:"公益",dot:"bg-teal-500",text:"text-teal-700 dark:text-teal-300",chipBg:"bg-teal-50 dark:bg-teal-500/10",chipBorder:"border-teal-200/80 dark:border-teal-500/25"},club:{key:"club",label:"社团",dot:"bg-violet-500",text:"text-violet-700 dark:text-violet-300",chipBg:"bg-violet-50 dark:bg-violet-500/10",chipBorder:"border-violet-200/80 dark:border-violet-500/25"},exam:{key:"exam",label:"考试",dot:"bg-rose-500",text:"text-rose-700 dark:text-rose-300",chipBg:"bg-rose-50 dark:bg-rose-500/10",chipBorder:"border-rose-200/80 dark:border-rose-500/25"}},it=["sports","arts","recruitment","academic","volunteer","club","exam"],Dn={campus:{key:"campus",label:"校园级",badge:"bg-primary/10 text-primary dark:bg-primary-fixed-dim/15 dark:text-primary-fixed-dim border border-primary/15 dark:border-primary-fixed-dim/20"},college:{key:"college",label:"学院级",badge:"bg-secondary/10 text-secondary dark:bg-secondary-fixed-dim/15 dark:text-secondary-fixed-dim border border-secondary/15 dark:border-secondary-fixed-dim/20"}},_a=["应急技术与管理学院","安全工程学院","环境与灾害治理学院","计算机科学与工程学院","文法学院","理学院","矿山安全学院","防灾减灾工程学院","应急装备学院","经济管理学院","马克思主义学院","体育学院（应急避险与逃生训练中心）","地球科学与工程学院","化工安全学院","信息与控制工程学院","地震工程与建筑安全学院","外国语学院"],Sa=["次元动漫社","弦音吉他社","光影摄影社","雄辩社","聚点街舞社","智造机器人社"],ze=a=>String(a).padStart(2,"0");function rt(a){return a.replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\n/g,"\\n")}function hn(a,r){return`${a.replace(/-/g,"")}T${r.replace(":","")}00`}function Ta(a){const r=[...a].sort((s,i)=>`${s.date}${s.start}`.localeCompare(`${i.date}${i.start}`)),e=new Date,t=`${e.getUTCFullYear()}${ze(e.getUTCMonth()+1)}${ze(e.getUTCDate())}T${ze(e.getUTCHours())}${ze(e.getUTCMinutes())}${ze(e.getUTCSeconds())}Z`,n=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//EMU-Stu//Campus Activity//CN","CALSCALE:GREGORIAN","METHOD:PUBLISH","X-WR-CALNAME:校园活动","X-WR-CALDESC:EMU-Stu 校园活动日历订阅","X-WR-TIMEZONE:Asia/Shanghai","REFRESH-INTERVAL;VALUE=DURATION:PT12H","X-PUBLISHED-TTL:PT12H"];for(const s of r){const i=s.end??s.start,o=`分类：${De[s.category].label} / 级别：${Dn[s.level].label}${s.organizer?` / 主办：${s.organizer}`:""}`,l=s.description?`${s.description}
${o}`:o;n.push("BEGIN:VEVENT",`UID:${s.id}@emu-stu`,`DTSTAMP:${t}`,`DTSTART:${hn(s.date,s.start)}`,`DTEND:${hn(s.date,i)}`,`SUMMARY:${rt(s.title)}`,`LOCATION:${rt(s.location)}`,`DESCRIPTION:${rt(l)}`,`CATEGORIES:${rt(De[s.category].label)}`,"END:VEVENT")}return n.push("END:VCALENDAR"),n.join(`\r
`)}const Aa="https://cdn.jsdelivr.net/gh/EMU-Stu/EMU-Stu-Site@stats-data/activities.json",gn="webcal://cdn.jsdelivr.net/gh/EMU-Stu/EMU-Stu-Site@stats-data/activities.ics",La=new Set(it),Ca=new Set(["campus","college"]),Ma=/^\d{4}-\d{2}-\d{2}$/,mn=/^([01]\d|2[0-3]):[0-5]\d$/,ye=a=>typeof a=="string"?a.trim():"";function $a(a){if(!a||typeof a!="object")return null;const r=a,e=ye(r.id),t=ye(r.title),n=ye(r.category),s=ye(r.level),i=ye(r.date),o=ye(r.start),l=ye(r.location);if(!e||!t||!l||!La.has(n)||!Ca.has(s)||!Ma.test(i)||!mn.test(o))return null;const c={id:e,title:t,category:n,level:s,date:i,start:o,location:l},u=ye(r.end);u&&mn.test(u)&&(c.end=u);const p=ye(r.organizer);p&&(c.organizer=p);const h=ye(r.description);return h&&(c.description=h),c}async function Na(){const a=await fetch(Aa,{cache:"no-store"});if(!a.ok)throw new Error(`HTTP ${a.status}`);const r=await a.json();if(!Array.isArray(r))throw new Error("数据格式错误：应为数组");const e=[];for(const t of r){const n=$a(t);n&&e.push(n)}return e}const fn="emu-activity-calendar-styles",wt=["日","一","二","三","四","五","六"],bn=["一","二","三","四","五","六","日"],Et=2,_t=4,xn=a=>String(a).padStart(2,"0"),Pe=a=>`${a.getFullYear()}-${xn(a.getMonth()+1)}-${xn(a.getDate())}`,vn=a=>{const[r,e,t]=a.split("-").map(Number);return new Date(r,e-1,t)},qe=(a,r)=>{const e=new Date(a);return e.setDate(e.getDate()+r),e},Ra=(a,r)=>{const e=new Date(a);return e.setMonth(e.getMonth()+r),e},St=a=>{const r=new Date(a),e=(r.getDay()+6)%7;return r.setDate(r.getDate()-e),r},Ge=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),yn=["","bg-primary/[0.04] dark:bg-primary-fixed-dim/[0.05]","bg-primary/[0.07] dark:bg-primary-fixed-dim/[0.10]","bg-primary/[0.11] dark:bg-primary-fixed-dim/[0.15]","bg-primary/[0.16] dark:bg-primary-fixed-dim/[0.22]"],kn=a=>a<=0?0:a===1?1:a===2?2:a<=4?3:4;function Oa(){if(document.getElementById(fn))return;const a=document.createElement("style");a.id=fn,a.textContent=`
    @keyframes eac-fade-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    .eac-in { animation: eac-fade-up 0.42s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
    .eac-day { transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease; }
    .eac-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
    .eac-scroll::-webkit-scrollbar-thumb { background: rgba(116,119,130,0.30); border-radius: 9999px; }
    .eac-scroll::-webkit-scrollbar-track { background: transparent; }
  `,document.head.appendChild(a)}class Ia extends HTMLElement{constructor(){super(...arguments);y(this,"view","month");y(this,"current",new Date);y(this,"selected",Pe(new Date));y(this,"selectedCollege",null);y(this,"selectedClub",null);y(this,"active",new Set(it));y(this,"todayStr",Pe(new Date));y(this,"activities",[]);y(this,"dataState","loading")}connectedCallback(){Oa();const e=window.innerWidth||document.documentElement.clientWidth||0;e>0&&e<=767&&(this.view="week"),this.renderShell(),this.bindEvents(),this.loadData()}async loadData(){this.dataState="loading",this.renderAll();try{this.activities=await Na(),this.dataState="ready"}catch(e){console.error("加载校园活动失败:",e),this.dataState="error"}this.renderAll()}passesFilter(e){return!(this.selectedCollege&&(e.level!=="college"||!(e.organizer??"").includes(this.selectedCollege))||this.selectedClub&&(e.category!=="club"||!(e.organizer??"").includes(this.selectedClub))||!this.active.has(e.category))}activitiesOn(e){return this.activities.filter(t=>t.date===e&&this.passesFilter(t)).sort((t,n)=>t.start.localeCompare(n.start))}renderShell(){const e=gn;this.innerHTML=`
      <section class="py-12 md:py-20 px-margin-mobile md:px-margin-desktop relative" id="activity-container">
        <div class="absolute top-0 right-[8%] w-[480px] h-[480px] rounded-full bg-primary/5 dark:bg-primary-fixed-dim/5 blur-3xl pointer-events-none"></div>

        <div class="max-w-container-max mx-auto relative z-10">
          <!-- 标题区 -->
          <div class="mb-8 md:mb-10">
            <span class="text-xs md:text-sm font-bold tracking-wider text-primary/70 dark:text-primary-fixed-dim/70 uppercase mb-2 block font-mono">
              Campus Activities
            </span>
            <h2 class="font-headline-lg text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none mb-3">
              校园活动
            </h2>
            <p class="text-sm md:text-base text-on-surface-variant/80 leading-relaxed max-w-2xl">
              篮球赛、讲座、社团例会、招聘会、志愿活动、考试……校园里每天都在发生精彩。按天、周、月查看活动安排，点击某天即可展开当日议程。
            </p>
          </div>

          <!-- 工具栏：时间导航 + 视图切换 + 订阅 -->
          <div class="flex flex-col gap-3 md:gap-4 mb-5">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-center gap-1.5 md:gap-2">
                <button id="nav-prev" aria-label="上一段" class="flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface-variant hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer">
                  <span class="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <h3 id="period-title" class="font-headline-md text-lg md:text-2xl font-bold text-on-surface tracking-tight text-center px-1 whitespace-nowrap"></h3>
                <button id="nav-next" aria-label="下一段" class="flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface-variant hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer">
                  <span class="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
                <button id="nav-today" class="hidden sm:inline-flex items-center gap-1 px-3 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-xs font-semibold text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all cursor-pointer">
                  <span class="material-symbols-outlined text-[16px]">today</span>今天
                </button>
              </div>

              <div class="flex items-center gap-2">
                <div id="view-switch" class="flex rounded-full bg-[#e8eaed] dark:bg-[#25282a] p-1 border border-outline/10 select-none"></div>
                <button id="subscribe-btn" class="inline-flex items-center gap-1.5 px-3 md:px-4 h-9 rounded-full bg-primary text-on-primary dark:bg-primary-fixed dark:text-on-primary-fixed hover:shadow-md transition-all cursor-pointer text-xs font-bold">
                  <span class="material-symbols-outlined text-[18px]">calendar_add_on</span>
                  <span class="hidden sm:inline">订阅日历</span>
                </button>
              </div>
            </div>

            <!-- 筛选：学院 + 社团 + 分类图例 -->
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex flex-wrap items-center gap-2 min-w-0">
                <span class="text-[11px] font-semibold text-on-surface-variant/60 uppercase tracking-wider hidden md:inline shrink-0">学院</span>
                <emu-select id="college-select" placeholder="全部学院" clearable aria-label="按学院筛选活动"></emu-select>
                <span class="text-[11px] font-semibold text-on-surface-variant/60 uppercase tracking-wider hidden md:inline shrink-0 ml-1">社团</span>
                <emu-select id="club-select" placeholder="全部社团" clearable aria-label="按社团筛选活动"></emu-select>
              </div>
              <div id="legend" class="flex flex-wrap items-center gap-1.5"></div>
            </div>
          </div>

          <!-- 主体：日历 + 议程 -->
          <div id="cal-layout" class="grid grid-cols-1 gap-5 lg:gap-6 items-start">
            <div id="calendar-pane" class="min-w-0"></div>
            <aside id="agenda-pane" class="lg:sticky lg:top-24 rounded-2xl border border-outline-variant/60 bg-surface-container-lowest/70 dark:bg-[#1b1d1e]/50 backdrop-blur-sm shadow-sm overflow-hidden"></aside>
          </div>
        </div>

        <!-- 订阅日历浮窗 -->
        <emu-float title="订阅校园活动日历" subtitle="Subscribe" max-width="max-w-lg">
          <div class="w-full flex flex-col gap-5 text-left">
            <p class="text-sm text-on-surface-variant/80 leading-relaxed">
              订阅后，校园活动会自动出现在你的日历 App 里，后续新增或调整也会自动同步，无需重复导入。
            </p>

            <!-- 订阅链接 + 复制 -->
            <div class="flex flex-col gap-1.5">
              <span class="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant/55 font-mono">订阅链接</span>
              <div class="flex items-center gap-2 rounded-xl border border-outline-variant/60 bg-surface-container-lowest/80 dark:bg-[#1b1d1e]/60 p-1.5 pl-3">
                <span class="material-symbols-outlined text-[18px] text-primary/70 dark:text-primary-fixed-dim/70 shrink-0">link</span>
                <input id="sub-url" readonly value="${e}" aria-label="订阅链接" class="flex-1 min-w-0 bg-transparent text-xs md:text-sm font-mono text-on-surface/85 outline-none truncate" />
                <button data-copy-sub type="button" class="shrink-0 inline-flex items-center gap-1 px-3 h-8 rounded-lg bg-primary text-on-primary dark:bg-primary-fixed dark:text-on-primary-fixed text-xs font-bold hover:shadow-md transition-all cursor-pointer">
                  <span class="material-symbols-outlined text-[16px]">content_copy</span><span class="copy-label">复制</span>
                </button>
              </div>
            </div>

            <!-- 一键在 Apple 日历订阅 -->
            <a href="${e}" class="inline-flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-primary text-on-primary dark:bg-primary-fixed dark:text-on-primary-fixed font-bold text-sm hover:shadow-lg transition-all cursor-pointer">
              <span class="material-symbols-outlined text-[20px]">event_available</span>
              在 Apple 日历中订阅
            </a>

            <!-- 手动订阅指引 -->
            <div class="rounded-xl border border-outline-variant/50 bg-surface-container-low/40 dark:bg-[#1b1d1e]/40 p-4 flex flex-col gap-3">
              <span class="text-xs font-bold text-on-surface flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] text-primary/70 dark:text-primary-fixed-dim/70">help</span>无法自动跳转？手动订阅
              </span>
              <div class="flex flex-col gap-2.5 text-[12px] text-on-surface-variant/80 leading-relaxed">
                <div><span class="font-semibold text-on-surface/85">Mac</span>：打开「日历」App → 顶部「文件」→「新建日历订阅」→ 粘贴上方链接 → 「订阅」。</div>
                <div><span class="font-semibold text-on-surface/85">iPhone / iPad</span>：「设置」→「日历」→「账户」→「添加账户」→「其他」→「添加已订阅的日历」→ 粘贴链接。</div>
              </div>
            </div>

            <!-- 其他日历 / 下载兜底 -->
            <div class="flex items-center justify-between gap-3 pt-1">
              <span class="text-[11px] text-on-surface-variant/55 leading-snug">Google / Outlook 同样可用此链接添加</span>
              <button data-download-ics type="button" class="shrink-0 inline-flex items-center gap-1.5 px-3 h-9 rounded-lg border border-outline-variant/60 text-on-surface-variant hover:text-primary hover:border-primary/30 text-xs font-semibold transition-all cursor-pointer">
                <span class="material-symbols-outlined text-[16px]">download</span><span class="dl-label">下载 .ics</span>
              </button>
            </div>
          </div>
        </emu-float>
      </section>
    `}bindEvents(){this.addEventListener("click",n=>{const s=n.target,i=s.closest("[data-goto-day]");if(i){const u=i.getAttribute("data-goto-day");this.selected=u,this.current=vn(u),this.view="day",this.renderAll();return}const o=s.closest("[data-view]");if(o){this.view=o.getAttribute("data-view"),this.renderAll();return}const l=s.closest("[data-cat]");if(l){const u=l.getAttribute("data-cat");this.active.has(u)?this.active.delete(u):this.active.add(u),this.active.size===0&&(this.active=new Set(it)),this.renderAll();return}const c=s.closest("[data-day]");if(c){this.selected=c.getAttribute("data-day"),this.renderAll(!1);return}if(s.closest("#nav-prev"))return this.navigate(-1);if(s.closest("#nav-next"))return this.navigate(1);if(s.closest("#nav-today"))return this.current=new Date,this.selected=this.todayStr,this.renderAll();if(s.closest("[data-retry]"))return void this.loadData();if(s.closest("#subscribe-btn"))return this.openSubscribe();if(s.closest("[data-copy-sub]"))return this.copySubscribeUrl();if(s.closest("[data-download-ics]"))return this.downloadICS()}),this.addEventListener("keydown",n=>{const s=n.target.closest("[data-day]");s&&(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),s.click())});const e=this.querySelector("#college-select");e&&(e.options=[..._a],e.addEventListener("emu-select-change",n=>{const s=n.detail.value;this.selectedCollege=s,s&&(this.selectedClub=null,this.syncSelects()),this.renderAll()}));const t=this.querySelector("#club-select");t&&(t.options=[...Sa],t.addEventListener("emu-select-change",n=>{const s=n.detail.value;this.selectedClub=s,s&&(this.selectedCollege=null,this.syncSelects()),this.renderAll()}))}navigate(e){this.view==="month"?this.current=Ra(this.current,e):this.view==="week"?this.current=qe(this.current,e*7):(this.current=qe(this.current,e),this.selected=Pe(this.current)),this.renderAll()}renderControls(){const e=(s,i,o,l)=>`<button data-${i}="${o}" class="px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${s?"bg-white dark:bg-[#323639] text-primary dark:text-primary-fixed-dim shadow-sm":"text-on-surface-variant/80 hover:text-on-surface"}">${l}</button>`,t=this.querySelector("#view-switch");t&&(t.innerHTML=e(this.view==="month","view","month","月")+e(this.view==="week","view","week","周")+e(this.view==="day","view","day","日")),this.syncSelects();const n=this.querySelector("#legend");n&&(n.innerHTML=it.map(s=>{const i=De[s],o=this.active.has(s),l=o?`${i.chipBg} ${i.chipBorder} ${i.text}`:"bg-transparent border-outline-variant/40 text-on-surface-variant/45",c=o?i.dot:"bg-on-surface-variant/30";return`<button data-cat="${s}" class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium transition-all cursor-pointer ${l}">
          <span class="w-2 h-2 rounded-full ${c}"></span>${i.label}
        </button>`}).join(""))}syncSelects(){const e=this.querySelector("#college-select");e&&e.value!==this.selectedCollege&&(e.value=this.selectedCollege);const t=this.querySelector("#club-select");t&&t.value!==this.selectedClub&&(t.value=this.selectedClub)}renderPeriodTitle(){const e=this.querySelector("#period-title");if(!e)return;const t=this.current;if(this.view==="month")e.textContent=`${t.getFullYear()}年${t.getMonth()+1}月`;else if(this.view==="week"){const n=St(t),s=qe(n,6),i=n.getFullYear()===s.getFullYear();e.textContent=`${n.getFullYear()}年${n.getMonth()+1}月${n.getDate()}日 - ${i?"":`${s.getFullYear()}年`}${s.getMonth()+1}月${s.getDate()}日`}else e.textContent=`${t.getFullYear()}年${t.getMonth()+1}月${t.getDate()}日 · 周${wt[t.getDay()]}`}renderAll(e=!0){if(this.renderControls(),this.renderPeriodTitle(),this.dataState==="loading")return this.renderLoading();if(this.dataState==="error")return this.renderError();const t=this.querySelector("#cal-layout"),n=this.querySelector("#agenda-pane"),s=this.querySelector("#calendar-pane");!t||!n||!s||(this.view==="day"?(t.className="grid grid-cols-1 gap-5 lg:gap-6 items-start",n.classList.add("hidden"),s.innerHTML=this.renderDayBoard(this.selected,e)):(t.className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,360px)] gap-5 lg:gap-6 items-start",n.classList.remove("hidden"),s.innerHTML=this.view==="month"?this.renderMonth(e):this.renderWeek(e),n.innerHTML=this.renderAgenda(this.selected)))}renderLoading(){const e=this.querySelector("#cal-layout"),t=this.querySelector("#agenda-pane"),n=this.querySelector("#calendar-pane");if(!e||!t||!n)return;e.className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,360px)] gap-5 lg:gap-6 items-start",t.classList.remove("hidden");const s=bn.map(()=>'<div class="h-3 w-6 mx-auto rounded bg-on-surface-variant/10"></div>').join(""),i=Array.from({length:42},()=>'<div class="min-h-[68px] md:min-h-[116px] rounded-xl bg-on-surface-variant/[0.06] dark:bg-on-surface-variant/[0.08]"></div>').join("");n.innerHTML=`<div class="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest/70 dark:bg-[#1b1d1e]/50 backdrop-blur-sm shadow-sm p-2.5 md:p-4 animate-pulse">
      <div class="grid grid-cols-7 gap-1.5 md:gap-2 mb-1.5 md:mb-2">${s}</div>
      <div class="grid grid-cols-7 gap-1.5 md:gap-2">${i}</div>
    </div>`;const o=Array.from({length:4},()=>`<div class="rounded-xl border border-outline-variant/50 p-3">
        <div class="h-3 w-1/3 rounded bg-on-surface-variant/10 mb-2"></div>
        <div class="h-4 w-2/3 rounded bg-on-surface-variant/10 mb-2"></div>
        <div class="h-2.5 w-1/2 rounded bg-on-surface-variant/10"></div>
      </div>`).join("");t.innerHTML=`<div class="p-4 flex flex-col gap-3 animate-pulse">
      <div class="h-5 w-1/2 rounded bg-on-surface-variant/10 mb-1"></div>
      ${o}
    </div>`}renderError(){const e=this.querySelector("#cal-layout"),t=this.querySelector("#agenda-pane"),n=this.querySelector("#calendar-pane");!e||!t||!n||(e.className="grid grid-cols-1 gap-5 lg:gap-6 items-start",t.classList.add("hidden"),n.innerHTML=`<div class="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest/70 dark:bg-[#1b1d1e]/50 backdrop-blur-sm shadow-sm">
      <div class="flex flex-col items-center justify-center text-center py-16 md:py-24 px-6">
        <span class="material-symbols-outlined text-[48px] text-on-surface-variant/40 mb-3">cloud_off</span>
        <h3 class="text-base font-bold text-on-surface mb-1">活动数据加载失败</h3>
        <p class="text-sm text-on-surface-variant/70 max-w-xs leading-relaxed mb-5">可能是网络波动或数据源暂时不可用，请稍后重试。</p>
        <button data-retry type="button" class="inline-flex items-center gap-1.5 px-4 h-10 rounded-full bg-primary text-on-primary dark:bg-primary-fixed dark:text-on-primary-fixed text-sm font-bold hover:shadow-md transition-all cursor-pointer">
          <span class="material-symbols-outlined text-[18px]">refresh</span>重试
        </button>
      </div>
    </div>`)}chipHTML(e){const t=De[e.category];return`<div class="flex items-stretch gap-1.5 px-1.5 py-1 rounded-md border ${t.chipBg} ${t.chipBorder} overflow-hidden">
      <span class="w-[3px] self-stretch rounded-full ${t.dot} shrink-0"></span>
      <div class="min-w-0 leading-tight">
        <div class="text-[11px] font-semibold text-on-surface/90 truncate">${Ge(e.title)}</div>
        <div class="font-mono text-[9px] ${t.text} truncate">${e.start}</div>
      </div>
    </div>`}dotsHTML(e){const t=e.slice(0,4).map(s=>`<span class="w-1.5 h-1.5 rounded-full ${De[s.category].dot}"></span>`).join(""),n=e.length>4?`<span class="text-[9px] leading-none text-on-surface-variant/60">+${e.length-4}</span>`:"";return`<div class="flex items-center gap-0.5 flex-wrap justify-center min-h-[6px]">${t}${n}</div>`}dayNumberHTML(e,t=!1){return Pe(e)===this.todayStr?`<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white dark:bg-primary-fixed-dim dark:text-[#001a3d] text-xs font-bold shadow-[0_2px_6px_rgba(0,31,84,0.25)] dark:shadow-[0_2px_8px_rgba(177,197,255,0.28)]">${e.getDate()}</span>`:`<span class="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold ${t?"text-on-surface-variant/40":"text-on-surface/80"}">${e.getDate()}</span>`}dayCellHTML(e,t){const n=Pe(e),s=this.activitiesOn(n),i=n===this.selected,o=n===this.todayStr,l=yn[kn(s.length)],c=i?"border-primary/70 dark:border-primary-fixed-dim/70 shadow-[0_0_0_2px_rgba(0,31,84,0.12)] dark:shadow-[0_0_0_2px_rgba(177,197,255,0.18)]":o?"border-outline-variant/50 hover:border-primary/30 border-t-[3px] border-t-primary dark:border-t-primary-fixed-dim":"border-outline-variant/50 hover:border-primary/30",u=s.slice(0,Et).map(h=>this.chipHTML(h)).join(""),p=s.length>Et?`<div class="text-[10px] font-medium text-on-surface-variant/60 px-1.5">还有 ${s.length-Et} 个活动</div>`:"";return`<div data-day="${n}" role="button" tabindex="0" aria-label="${n} 共 ${s.length} 个活动"
      class="eac-day group ${t.minH} flex flex-col gap-1 p-1.5 md:p-2 rounded-xl border ${c} ${l} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
      <div class="flex items-center justify-between">
        ${this.dayNumberHTML(e,t.dim)}
        ${s.length>0?`<span class="hidden md:inline text-[10px] font-mono text-on-surface-variant/45">${s.length}</span>`:""}
      </div>
      <!-- 桌面端：文字 chip -->
      <div class="hidden md:flex flex-col gap-1 min-w-0">${u}${p}</div>
      <!-- 移动端：分类圆点 -->
      <div class="flex md:hidden mt-auto">${this.dotsHTML(s)}</div>
    </div>`}weekdayHeaderHTML(){return`<div class="grid grid-cols-7 gap-1.5 md:gap-2 mb-1.5 md:mb-2">
      ${bn.map((e,t)=>`<div class="text-center text-[11px] md:text-xs font-semibold ${t>=5?"text-primary/60 dark:text-primary-fixed-dim/60":"text-on-surface-variant/60"}">周${e}</div>`).join("")}
    </div>`}paneWrap(e,t=!0){return`<div class="rounded-2xl border border-outline-variant/60 bg-surface-container-lowest/70 dark:bg-[#1b1d1e]/50 backdrop-blur-sm shadow-sm p-2.5 md:p-4${t?" eac-in":""}">${e}</div>`}renderMonth(e=!0){const t=new Date(this.current.getFullYear(),this.current.getMonth(),1),n=St(t),s=this.current.getMonth();let i="";for(let o=0;o<42;o++){const l=qe(n,o);i+=this.dayCellHTML(l,{dim:l.getMonth()!==s,minH:"min-h-[68px] md:min-h-[116px]"})}return this.paneWrap(`
      ${this.weekdayHeaderHTML()}
      <div class="grid grid-cols-7 gap-1.5 md:gap-2">${i}</div>
    `,e)}renderWeek(e=!0){const t=St(this.current),n=Array.from({length:7},(o,l)=>qe(t,l)),s=n.map(o=>this.dayCellHTML(o,{minH:"min-h-[76px]"})).join(""),i=n.map(o=>{const l=Pe(o),c=this.activitiesOn(l),u=l===this.selected,p=l===this.todayStr,h=`
          <div class="flex flex-col items-center gap-1 pb-2 mb-2 border-b border-outline-variant/40">
            <span class="text-[11px] font-semibold ${o.getDay()===0||o.getDay()===6?"text-primary/60 dark:text-primary-fixed-dim/60":"text-on-surface-variant/60"}">周${wt[o.getDay()]}</span>
            ${this.dayNumberHTML(o)}
          </div>`,b=c.slice(0,_t).map(E=>this.chipHTML(E)).join(""),g=c.length>_t?`<div class="text-[10px] font-medium text-on-surface-variant/60 px-1.5">还有 ${c.length-_t} 个活动</div>`:"",f=c.length===0?'<div class="text-[10px] text-on-surface-variant/35 text-center py-3">—</div>':"";return`<div data-day="${l}" role="button" tabindex="0"
          class="eac-day flex flex-col gap-1 p-2 rounded-xl border ${u?"border-primary/70 dark:border-primary-fixed-dim/70":p?"border-outline-variant/40 hover:border-primary/30 border-t-[3px] border-t-primary dark:border-t-primary-fixed-dim":"border-outline-variant/40 hover:border-primary/30"} ${yn[kn(c.length)]} min-h-[180px] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
          ${h}
          <div class="flex flex-col gap-1 min-w-0">${b}${g}${f}</div>
        </div>`}).join("");return this.paneWrap(`
        <div class="grid grid-cols-7 gap-1.5 md:hidden">${s}</div>
        <div class="hidden md:grid md:grid-cols-7 gap-2">${i}</div>
      `,e)+'<p class="md:hidden text-[11px] text-on-surface-variant/55 mt-2 px-1">点击某天查看下方当日议程</p>'}timelineHTML(e){return e.length===0?`<div class="flex flex-col items-center justify-center text-center py-12 px-4 text-on-surface-variant/50">
        <span class="material-symbols-outlined text-[40px] mb-2 opacity-50">event_busy</span>
        <p class="text-sm">这一天暂无活动</p>
        <p class="text-[11px] mt-1 opacity-70">换个日期或调整筛选试试</p>
      </div>`:`<ol class="relative ml-1 before:content-[''] before:absolute before:left-[11px] before:top-1.5 before:bottom-2 before:w-px before:bg-outline-variant/50">${e.map((n,s)=>{const i=De[n.category],o=Dn[n.level],l=n.end?`${n.start} – ${n.end}`:n.start;return`<li class="relative pl-7 pb-4 last:pb-0 eac-in" style="animation-delay:${s*45}ms">
          <span class="absolute left-[6px] top-[6px] w-3 h-3 rounded-full ${i.dot} ring-2 ring-surface-container-lowest dark:ring-[#1b1d1e] z-10"></span>
          <div class="rounded-xl border ${i.chipBorder} ${i.chipBg} p-3">
            <div class="flex items-center justify-between gap-2 mb-1">
              <span class="font-mono text-xs font-bold ${i.text}">${l}</span>
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${o.badge} shrink-0">${o.label}</span>
            </div>
            <h4 class="text-sm font-bold text-on-surface leading-snug mb-1.5">${Ge(n.title)}</h4>
            <div class="flex items-center gap-1 text-[11px] text-on-surface-variant/75 mb-0.5">
              <span class="material-symbols-outlined text-[14px]">location_on</span>
              <span class="truncate">${Ge(n.location)}</span>
            </div>
            ${n.organizer?`<div class="flex items-center gap-1 text-[11px] text-on-surface-variant/75">
              <span class="material-symbols-outlined text-[14px]">group</span>
              <span class="truncate">${Ge(n.organizer)}</span>
            </div>`:""}
            ${n.description?`<p class="text-[11px] text-on-surface-variant/65 leading-relaxed mt-1.5 line-clamp-2">${Ge(n.description)}</p>`:""}
            <div class="mt-2 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full ${i.dot}"></span>
              <span class="text-[10px] font-medium ${i.text}">${i.label}</span>
            </div>
          </div>
        </li>`}).join("")}</ol>`}agendaHeaderHTML(e,t,n){const s=vn(e),i=e===this.todayStr,o=`周${wt[s.getDay()]}`,l=`${s.getMonth()+1}月${s.getDate()}日`,c=i?'<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-on-primary dark:bg-primary-fixed-dim dark:text-[#001a3d]">今天</span>':"";return n?`<div class="flex items-center justify-between gap-3 mb-5">
        <div class="flex items-baseline gap-2 flex-wrap">
          <span class="font-headline-md text-2xl md:text-3xl font-extrabold text-on-surface">${s.getFullYear()}年${l}</span>
          <span class="text-sm font-semibold text-on-surface-variant/70">${o}</span>
          ${c}
        </div>
        <span class="text-xs font-mono text-on-surface-variant/60 shrink-0">${t} 个活动</span>
      </div>`:`<div class="flex items-center justify-between gap-2 px-4 pt-4 pb-3 border-b border-outline-variant/40">
      <div class="flex items-center gap-2">
        <div class="flex flex-col">
          <span class="text-base font-bold text-on-surface leading-tight">${l} <span class="text-xs font-medium text-on-surface-variant/70">${o}</span></span>
          <span class="text-[11px] text-on-surface-variant/55 font-mono">${t} 个活动</span>
        </div>
        ${c}
      </div>
      <button data-goto-day="${e}" class="inline-flex items-center gap-0.5 text-[11px] font-semibold text-primary dark:text-primary-fixed-dim hover:underline cursor-pointer">
        日视图<span class="material-symbols-outlined text-[15px]">chevron_right</span>
      </button>
    </div>`}renderAgenda(e){const t=this.activitiesOn(e);return`${this.agendaHeaderHTML(e,t.length,!1)}
      <div class="eac-scroll p-4 lg:max-h-[calc(100vh-13rem)] overflow-y-auto">${this.timelineHTML(t)}</div>`}renderDayBoard(e,t=!0){const n=this.activitiesOn(e);return this.paneWrap(`
      <div class="max-w-2xl mx-auto px-1 md:px-2 py-1">
        ${this.agendaHeaderHTML(e,n.length,!0)}
        ${this.timelineHTML(n)}
      </div>
    `,t)}openSubscribe(){var e;(e=this.querySelector("emu-float"))==null||e.showModal()}copySubscribeUrl(){var i;const e=this.querySelector("#sub-url"),t=(e==null?void 0:e.value)??gn,n=this.querySelector("[data-copy-sub] .copy-label"),s=()=>{if(!n)return;const o=n.textContent;n.textContent="已复制",setTimeout(()=>{n.textContent=o},1600)};(i=navigator.clipboard)!=null&&i.writeText?navigator.clipboard.writeText(t).then(s,()=>{e==null||e.select(),document.execCommand("copy"),s()}):e&&(e.select(),document.execCommand("copy"),s())}downloadICS(){const e=new Blob([Ta(this.activities)],{type:"text/calendar;charset=utf-8"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="校园活动.ics",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(t);const s=this.querySelector("[data-download-ics] .dl-label");if(s){const i=s.textContent;s.textContent="已下载",setTimeout(()=>{s.textContent=i},1600)}}}customElements.define("emu-activity-calendar",Ia);const wn=[{name:"物联网实验室（AKA 数字孪生暨虚拟现实实验室）",code:"IoT-Lab",description:"开展物联网架构、嵌入式硬件开发与实时数据采集研究，结合数字孪生与虚拟现实技术实现物理世界的数字化映射。",department:"计算机科学与工程学院",professors:["陈超"],tags:["物联网","数字孪生","虚拟现实","嵌入式"],icon:"sensors",href:"https://emu-stu.github.io/IOT-lab-web/"},{name:"河北省安全生产与应急处置特种机器人重点实验室",code:"SER-Lab",description:"致力于应急救援、特种作业机器人的研发，开展智能环境感知、鲁棒控制及人机协作技术等关键课题攻关。",department:"应急管理学院",tags:["特种机器人","应急处置","智能控制","环境感知"],icon:"precision_manufacturing"},{name:"ArkLab方舟实验室",code:"Ark-Lab",description:"专注于学生技术创新与工程实践，覆盖全栈软件开发、算法研究及软硬件协同设计，培养核心技术人才。",department:"电子信息工程学院",tags:["软件工程","算法设计","技术创新","全栈开发"],icon:"sailing"},{name:"利刃网安攻防实验室",code:"Blade-Sec-Lab",description:"聚焦于网络空间安全，开展渗透测试、漏洞挖掘、红蓝对抗以及安全防御体系建设等核心攻防技术研究。",department:"计算机科学与工程学院",tags:["网络安全","漏洞挖掘","红蓝对抗","渗透测试"],icon:"shield_lock"}];class Pa extends HTMLElement{constructor(){super(...arguments);y(this,"_resizeObserver",null)}connectedCallback(){this.render(),this.setupResponsiveness()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}generateCardHtml(e){const t=e.tags.map(s=>`
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
    `}render(){const e=wn.map(t=>this.generateCardHtml(t)).join("");this.innerHTML=`
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
    `}setupResponsiveness(){const e=this.querySelector("#labs-marquee"),t=this.querySelector("#labs-track");if(!e||!t)return;const n=wn.map(o=>this.generateCardHtml(o)).join("");let s=null,i=null;this._resizeObserver=new ResizeObserver(()=>{i===null&&(i=window.setTimeout(()=>{i=null,e.classList.remove("scroll-active"),t.style.width="max-content",t.style.justifyContent="flex-start",t.innerHTML=n;const o=e.clientWidth,c=t.scrollWidth>o;c!==s&&(s=c,c?(e.classList.add("scroll-active"),t.style.width="",t.style.justifyContent=""):(e.scrollLeft=0,t.style.width="",t.style.justifyContent=""))},150))}),this._resizeObserver.observe(e)}}customElements.define("emu-labs",Pa);const Ba='\n\n---\ntitle: "复盘：GitHub Pages 部署 Next.js 静态站点，热力图 404 蒸发事件"\ndate: "2026-06-19"\nauthor: "Mingsi Cai"\ntags: ["iot-lab", "Next.js", "前端工程化", "踩坑记录"]\nexcerpt: "为什么本地跑得贼溜的网页，打包到远端子路径后热力图就挂了？顺着代码摸过去，发现是编译期文本替换和浏览器运行时把变量给‘蒸发’了。记录一下这个经典的跨界大坑。"\n\n---\n\n之前在做物联网实验室网站 `lab-web` 的全景热力图时，遇到了一个特玄学的 Bug：\n\n在本地跑 `npm run dev` 的时候，热力图格子红红绿绿显示得完全正常。但是当我把代码 push 到 GitHub，通过 Actions 自动化部署到 GitHub Pages 之后，线上的热力图就死活显示 **「数据暂不可用」**。\n\n当时我上去查了一下，发现后端分发过来的 `lab-stats.json` 静态数据文件明明在线上物理存在。但诡异的是，线上浏览器去 fetch 这个 JSON 的时候，路径直接把我们的子路径 `/IOT-lab-web` 给丢了，一头撞向根域名，当场报了 **404**。\n\n顺着代码摸过去，最后发现原因出在 `site-config.js` 的环境配置上。\n\n\n\n## 🔎 一、 案发现场：代码在“两个世界”里的物理隔离\n\n\n我们最初在 `site-config.js` 里，是这样给 GitHub Pages 子路径配 `basePath` 的：\n\n```typescript// 修复前的写法export const repoName = "IOT-lab-web";const isGithubPages = process.env.GITHUB_PAGES === "true";export const siteConfig = {  basePath: isGithubPages ? `/${repoName}` : ""};\n\n而在热力图组件 `ContributionHeatmap.tsx` 里面，我们是用这行变量来手写原生 `fetch` 请求的：\n\nTypeScript\n\n```\n// 客户端热力图组件里的请求逻辑\nconst url = `${siteConfig.basePath}/lab-stats.json`;\nfetch(url, { cache: "no-store" })\n  .then((res) => res.json())\n  .then((data) => setStats(data))\n  .catch(() => setError(true));\n```\n\n这个逻辑看着很顺，但实际上我们的站点是在**两个完全独立的世界**里运行的：\n\n1. **远端 GitHub Actions 服务器（编译期）**：我们在 `deploy.yml` 里配了 `GITHUB_PAGES: "true"`，相当于在 Actions 的 Linux 服务器里写了全局变量。这时候运行 `npm run build`，Node.js 确实能读到它，打包出来的静态 HTML 基础路径也没错。\n\n2. **用户浏览器（运行时）**：热力图是一个客户端组件（带有 `"use client"`）。当用户打开网页执行这段 JS 去 fetch 数据时，是在他自己的浏览器沙盒里跑的。\n\n**这时候，浏览器上哪去读 `process.env.GITHUB_PAGES`？根本读不到。**\n\nNext.js 底层的打包器（Webpack / Turbopack）有一条硬性安全防线：为了防止开发者的敏感机密（比如数据库密码、私人 Token）泄露到外网，**凡是不带特定前缀的普通环境变量，在打包发往浏览器时，绝对不会被替换成具体的值，而是原封不动地保留一串死字符。**\n\n于是，浏览器运行代码时发现 `process` 直接是 `undefined`，三元表达式不成立，`basePath` 瞬间“蒸发”成了空字符串 `""`。原生 `fetch()` 沦为 `fetch("/lab-stats.json")`，直接在根域名里迷路 404 了。\n\n> 💡 **顺便提一嘴**：为什么网站别的组件（比如 `<Link>`）不需要手动加前缀也能活？因为 Next.js 自带的路由组件有特权，框架会自动把 `basePath` 注入到 React Context 里帮它拼接。而原生的 `fetch` 属于浏览器标准 API，框架管不到它，必须由我们手动把 `basePath` 拼齐。\n\n## 🛠️ 二、 修复方案：用短路求值做一套双保险配置\n\n既然知道了原理，解决起来就很快了。我们利用 **空值合并运算符（`??`）** 配合 Next.js 官方的 **`NEXT_PUBLIC_` 通行证**，把 `site-config.js` 改造了一下：\n\nTypeScript\n\n```\n// ✅ 修复后的完美配置\nexport const repoName = "IOT-lab-web";\n\nexport const siteConfig = {\n  basePath:\n    process.env.NEXT_PUBLIC_BASE_PATH ??\n    (process.env.GITHUB_PAGES === "true" ? `/${repoName}` : ""),\n};\n```\n\n这行代码利用了 JavaScript 的 **“短路求值”** 特性，直接把“远端构建”和“浏览器运行”两个环境都兼顾到了：\n\n### 1. 线上浏览器运行时\n\n因为我们在 Actions 编译时注入了 `NEXT_PUBLIC_BASE_PATH: /IOT-lab-web`，带有前缀。Next.js 的编译器直接在打包时玩了一场“文本替换”魔术，把这个值硬编码塞进了 JS 束。\n\n浏览器拿到的真实代码其实长这样：\n\nJavaScript\n\n```\nbasePath: "/IOT-lab-web" ?? (process.env.GITHUB_PAGES === "true" ? "/IOT-lab-web" : "")\n```\n\n浏览器从左往右执行，看到左边的 `"/IOT-lab-web"` 是一个合法字符串。根据 `??` 的规则，**直接采用左边，右边那半句直接短路作废！** 浏览器成功拿到前缀，完美的绕过了右边会变成 `undefined` 的雷区。\n\n### 2. Actions 远端编译时\n\n在 Actions 跑构建的一瞬间，核心文件 `next.config.ts` 也要读取这个配置。\n\n因为 Node.js 在服务器上能通吃所有变量，如果左边没配，`??` 就会激活右边。右边靠着服务器上的 `process.env.GITHUB_PAGES === "true"` 精准接盘，依旧能算出 `"/IOT-lab-web"`，保证静态打包时 HTML 的路径也是对的。\n\n### 3. 本地开发调试时（`npm run dev`）\n\n我们在本地电脑上写代码，这两个变量我们都没配。\n\n代码左边为 `undefined`，走向右边；右边判定也是 `false`，最后一路畅通地输出空字符串 `""`。完美适配本地的 `localhost:3000`。\n\n## 🎯 三、 总结\n\n这次热力图 404 的排查，留下的教训很直接：\n\n1. **凡是 Client Component 里要用到的、跟动态路径或 API 拼接有关的配置变量，必须加 `NEXT_PUBLIC_` 前缀。**\n\n2. **本地 `dev` 是活的（有 Node 进程在背后随时打补丁），线上 `build` 是死的一锤子买卖（变量直接被固化替换成死文本）。永远不要拿本地 dev 的理所当然，去挑战线上的静态打包规则。**\n\n把配置 commit 顺手一推，等远端 Actions 跑完，实验室全景热力图瞬间全盘亮起！搞定，收工！\n',Da=Object.freeze(Object.defineProperty({__proto__:null,default:Ba},Symbol.toStringTag,{value:"Module"})),Ha=`---
excerpt: "EMU-Stu 官网首页统计近一周新增代码这行小字，背后其实有一套完整的自动化流水线。从每天凌晨自动跑脚本，到前端拿到数据展示出来，中间涉及 GitHub Actions、Python 脚本、独立数据分支和 jsDelivr CDN。"
category: "技术分享"
author: "何之洲"
labs: [IOT-Lab]
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

`,ja=Object.freeze(Object.defineProperty({__proto__:null,default:Ha},Symbol.toStringTag,{value:"Module"})),Ua=`---
title: 实验室脉搏：用 GitHub 风格热力图展示实验室活跃度
excerpt: "在 IoT-lab-web 首页新增「实验室脉搏」模块：build 前汇总本站 Git 提交与 IoT-Lab 博客发文，生成 lab-stats.json，由 React 组件渲染 GitHub 风格热力图。不依赖主站 CDN，完全静态导出友好。"
category: 技术分享
author: 蔡明思
labs: [IoT-Lab]
date: 2026-06-19
---

# 实验室脉搏：用 GitHub 风格热力图展示实验室活跃度

在 [上一篇文章](/article?slug=lab-web-blog-auto-fetch-howto) 里，我们已经让 IoT-lab-web 在 build 时自动从 [EMU-Stu-Blog](https://github.com/EMU-Stu/EMU-Stu-Blog) 拉取带 \`labs: [IoT-Lab]\` 的技术文章，并在 \`/blog\` 路由展示。

接下来要做的是：**把「写代码」和「写博客」这两类活跃行为，汇总成一张 GitHub 风格的热力图**，挂在实验室首页，一眼看出实验室最近忙不忙。

我们把这套能力叫做 **实验室脉搏（Lab Pulse）**。

## 设计目标

| 目标 | 做法 |
|------|------|
| 不依赖主站 CDN | 不用 EMU-Stu-Site 的 \`stats.json\`，数据在 build 前本地生成 |
| 适配静态导出 | \`output: "export"\`，不在 build 时调 GitHub API |
| 与博客链路衔接 | 博客数据来自 \`fetch-blog\` 拉下来的 \`content/blog/articles/\` |
| 只统计本实验室 | 博客按 frontmatter 的 \`labs\` 过滤，与 \`lib/blog.ts\` 一致 |

统计两类数据源：

1. **本站 Git 提交**：\`IOT-lab-web\` 仓库的 \`git log\`（按 commit 日期计数）
2. **实验室博客发文**：EMU-Stu-Blog 里 \`labs\` 含 \`IoT-Lab\` 的文章（按 frontmatter 的 \`date\` 计数）

## 整体链路

\`\`\`mermaid
flowchart TB
  subgraph prebuild["predev / prebuild"]
    A["fetch-blog.mjs"]
    B["content/blog/articles/"]
    C["generate-stats.mjs"]
    D["git log"]
    E["public/lab-stats.json"]
  end

  subgraph deploy["Next.js build"]
    F["out/lab-stats.json"]
    G["GitHub Pages"]
  end

  subgraph browser["用户浏览器"]
    H["app/page.tsx"]
    I["ContributionHeatmap.tsx"]
    J["fetch lab-stats.json"]
    K["heatmap-utils.ts"]
    L["热力图 UI"]
  end

  A --> B
  B --> C
  D --> C
  C --> E
  E --> F --> G
  G --> H --> I --> J --> K --> L
\`\`\`

一句话概括：

> **build 前脚本写 JSON → public 静态托管 → 首页 Client Component fetch → 工具函数算格子 → 渲染热力图**

## 第一步：串联 package.json 钩子

博客文章必须先拉下来，统计脚本才能扫到 Markdown。因此在 \`package.json\` 里把两个脚本**按顺序**串起来：

\`\`\`json
{
  "scripts": {
    "fetch-blog": "node scripts/fetch-blog.mjs",
    "generate-stats": "node scripts/generate-stats.mjs",
    "predev": "node scripts/fetch-blog.mjs && node scripts/generate-stats.mjs",
    "prebuild": "node scripts/fetch-blog.mjs && node scripts/generate-stats.mjs",
    "dev": "next dev --turbopack",
    "build": "next build"
  }
}
\`\`\`

执行顺序：

\`\`\`
npm run dev / build
    ↓
predev / prebuild
    ↓
① fetch-blog.mjs   →  clone EMU-Stu-Blog 到 content/blog/
    ↓
② generate-stats.mjs → 读 git log + 博客 → 写 public/lab-stats.json
    ↓
next dev / build
\`\`\`

\`public/lab-stats.json\` 写进 \`.gitignore\`，不提交仓库；每次 dev/build 重新生成，保证数据最新。

## 第二步：generate-stats.mjs 做了什么

脚本路径：\`scripts/generate-stats.mjs\`

### 输出格式

写入 \`public/lab-stats.json\`，结构如下：

\`\`\`json
{
  "2026-05-27": {
    "commits": 2,
    "articles": 1
  },
  "2026-06-06": {
    "commits": 1,
    "articles": 0
  }
}
\`\`\`

- **key**：日期 \`YYYY-MM-DD\`
- **commits**：当天 \`IOT-lab-web\` 仓库的 commit 次数
- **articles**：当天发布的、带 \`labs: [IoT-Lab]\` 的 Blog 文章篇数

只保留 \`2025-05-01\` 及之后的记录（与热力图展示起点一致）。

### 函数一览

| 函数 | 作用 |
|------|------|
| \`getLabCodes(data)\` | 从 frontmatter 读取 \`labs\` 或 \`lab\`，统一成字符串数组 |
| \`belongsToLab(data)\` | 判断文章是否属于本实验室（大小写不敏感，如 \`IOT-Lab\` ≈ \`IoT-Lab\`） |
| \`normalizeDate(raw)\` | 把 frontmatter 的 \`date\` 规范成 \`YYYY-MM-DD\` |
| \`collectGitCommits(statsMap)\` | 执行 \`git log --date=short\`，按天累加 \`commits\` |
| \`collectLabArticles(statsMap)\` | 扫描 \`content/blog/articles/*.md\`，过滤后按天累加 \`articles\` |
| \`main()\` | 合并两类数据，\`fs.writeFileSync\` 写入 JSON |

### collectGitCommits：统计代码提交

\`\`\`javascript
const log = execFileSync("git", ["log", "--pretty=format:%ad", "--date=short"], {
  cwd: root,
  encoding: "utf8",
});

for (const date of log.split("\\n").filter(Boolean)) {
  if (date < STATS_START) continue;
  if (!statsMap[date]) statsMap[date] = { commits: 0, articles: 0 };
  statsMap[date].commits += 1;
}
\`\`\`

每个 commit 对应一行日期；同一天多次提交会让 \`commits\` 累加。

> **CI 注意**：GitHub Actions 默认浅克隆只有 1 条 commit。需在 \`deploy.yml\` 里设置 \`fetch-depth: 0\`，否则线上热力图几乎为空：

\`\`\`yaml
- uses: actions/checkout@v4
  with:
    fetch-depth: 0
\`\`\`

### collectLabArticles：统计博客发文

\`\`\`javascript
for (const file of fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"))) {
  const { data } = matter(fs.readFileSync(...));
  if (!belongsToLab(data)) continue;

  const date = normalizeDate(data.date);
  if (!date || date < STATS_START) continue;

  statsMap[date].articles += 1;
}
\`\`\`

与 \`lib/blog.ts\` 使用相同的 \`labs\` 过滤逻辑：**只有会出现在 \`/blog\` 列表里的文章，才会计入热力图**。

投稿时在 EMU-Stu-Blog 写好 frontmatter 即可：

\`\`\`yaml
---
title: 我的文章
author: 张三
date: 2026-06-19
labs: [IoT-Lab]
---
\`\`\`

### main：写入 public

\`\`\`javascript
function main() {
  const statsMap = {};
  collectGitCommits(statsMap);
  collectLabArticles(statsMap);

  fs.writeFileSync(outputPath, JSON.stringify(statsMap, null, 2));
}
\`\`\`

Next.js 会把 \`public/lab-stats.json\` 原样拷贝到 \`out/\`，浏览器通过 URL 访问：

| 环境 | 路径 |
|------|------|
| 本地 dev | \`/lab-stats.json\` |
| GitHub Pages | \`/IOT-lab-web/lab-stats.json\`（需加 \`basePath\`） |

## 第三步：前端如何消费 lab-stats.json

### 挂载位置

首页 \`app/page.tsx\`，Hero 区域下方：

\`\`\`tsx
import { ContributionHeatmap } from "@/components/ContributionHeatmap";

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* Hero ... */}
      <ContributionHeatmap />
      {/* 模块卡片 ... */}
    </div>
  );
}
\`\`\`

目前**只有首页**使用这份数据。

### ContributionHeatmap.tsx

Client Component（\`'use client'\`），页面加载后在浏览器里 fetch：

\`\`\`typescript
useEffect(() => {
  const url = \`\${siteConfig.basePath}/lab-stats.json\`;
  fetch(url, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => setStats(data));
}, []);
\`\`\`

为什么不在 build 时读 JSON 写进 HTML？

- 热力图是**客户端交互**（hover 看 tooltip）
- 数据文件放在 \`public/\`，和静态图片一样，由浏览器按需拉取
- 与博客模块不同：博客是 build 时 \`fs.readFileSync\` 生成静态 HTML

### heatmap-utils.ts：格子怎么算

| 函数 | 作用 |
|------|------|
| \`beijingTodayStr()\` | 取北京时间「今天」，作为网格右边界 |
| \`buildHeatmapCells(stats)\` | 从 \`2025-05-01\` 到今天，生成每天一个格子（7 行 × N 列） |
| \`heatmapColumns(cells)\` | 按「周」分列，对齐 GitHub 布局 |
| \`summarizeHeatmap(cells)\` | 汇总活跃天数、总提交、总博客篇数 |

活跃度打分（决定绿色深浅）：

\`\`\`typescript
score = commits + articles * 2   // 发文权重略高于单次提交

level 0: 无活动
level 1: score === 1
level 2: score <= 3
level 3: score <= 6
level 4: score > 6
\`\`\`

### 颜色含义

| 颜色 | 含义 |
|------|------|
| 浅灰 | 无活动 |
| 绿色（4 档） | 仅有代码提交，越深越活跃 |
| 蓝色 | 仅有博客发文 |
| 紫色 | 同一天既有提交又有发文 |

站点主色 \`#0071e3\` 用于博客相关格子，与 lab-web 整体风格一致。

## 与主站热力图的对比

| | EMU-Stu-Site 主站 | IoT-lab-web 实验室脉搏 |
|---|-------------------|------------------------|
| 数据来源 | 组织 \`stats-data/stats.json\`（CDN） | 本地 build 生成 \`lab-stats.json\` |
| 统计口径 | 全组织代码变更行数 | 本站 commit 次数 + 本实验室博客篇数 |
| 生成时机 | Python 脚本 + 定时 Action | \`generate-stats.mjs\` + prebuild |
| 展示位置 | 弹窗（按钮打开） | 首页内嵌 section |

实验室站更轻量，且与 Blog 的 \`labs\` 过滤体系完全打通。

## 部署与自动更新

1. **本站有 commit** → push \`IOT-lab-web\` → CI rebuild → \`git log\` 更新 → 热力图变绿
2. **Blog 有新文** → EMU-Stu-Blog 合并 → \`repository_dispatch\` 触发 lab-web rebuild → \`fetch-blog\` 拉新文章 → \`generate-stats\` 计入 → 对应日期变蓝

Blog 仓库的 workflow 需同时 notify 主站和 \`IOT-lab-web\`（\`docs-updated\` 事件），与博客展示链路共用同一套触发机制。

## 关键文件索引

| 文件 | 作用 |
|------|------|
| \`scripts/generate-stats.mjs\` | build 前生成 \`lab-stats.json\` |
| \`public/lab-stats.json\` | 静态数据（gitignore，不提交） |
| \`lib/lab-stats-types.ts\` | TypeScript 类型 |
| \`lib/heatmap-utils.ts\` | 网格与汇总算法 |
| \`components/ContributionHeatmap.tsx\` | 首页热力图 UI |
| \`app/page.tsx\` | 挂载组件 |
| \`.github/workflows/deploy.yml\` | \`fetch-depth: 0\` 保证完整 git 历史 |

## 小结

**实验室脉搏**把两类已有能力串在一起：

- **fetch-blog**：Blog 内容进 \`content/blog/\`
- **generate-stats**：Git 提交 + 实验室博客 → \`public/lab-stats.json\`
- **ContributionHeatmap**：浏览器读 JSON，画出 GitHub 风格热力图

不依赖主站 CDN，不破坏静态导出，Blog 更新后 rebuild 即可同步。若你也在维护其它实验室门户，只需改 \`LAB_CODE\` / \`siteConfig.labCode\`，其余逻辑可复用。
`,za=Object.freeze(Object.defineProperty({__proto__:null,default:Ua},Symbol.toStringTag,{value:"Module"})),qa=`---
title: 物联网实验室站点如何从 EMU-Stu-Blog 自动拉取博客
excerpt: "IoT-lab-web 采用「内容仓库 + 展示仓库」分离架构：build 前 git clone 博客内容，按 frontmatter 的 labs 字段过滤本实验室文章，并处理 Next.js 静态导出与 GitHub Pages 子路径下的图片路径。"
category: 技术分享
author: 蔡明思
labs: [IoT-Lab]
date: 2026-06-08
---

# 物联网实验室站点如何从 EMU-Stu-Blog 自动拉取博客

EMU-Stu 组织里，博客文章统一存放在 [EMU-Stu-Blog](https://github.com/EMU-Stu/EMU-Stu-Blog) 内容仓库；主站 [EMU-Stu-Site](https://github.com/EMU-Stu/EMU-Stu-Site) 在 build 时拉取全部文章展示。各实验室还有独立门户站（如 [IoT-lab-web](https://github.com/EMU-Stu/IOT-lab-web)），只需要展示**本实验室**的文章。

这篇文章以 IoT-lab-web（Next.js + GitHub Pages）为例，说明如何实现：**build 前自动拉取 Blog 仓库 → 按 \`labs\` 过滤 → 静态页面渲染 → 图片正确显示**。

## 整体架构

\`\`\`mermaid
flowchart LR
  Blog["EMU-Stu-Blog\\narticles/*.md + images/"]
  Fetch["scripts/fetch-blog.mjs\\npredev / prebuild"]
  Parse["lib/blog.ts\\ngray-matter + labs 过滤"]
  Pages["app/blog/\\n列表 + 详情页"]
  Public["public/blog-images/\\n浏览器可访问"]
  Out["out/\\nGitHub Pages 静态站"]

  Blog -->|git clone| Fetch
  Fetch -->|复制图片| Public
  Fetch --> Parse
  Parse --> Pages
  Public --> Out
  Pages --> Out
\`\`\`

三个仓库的职责：

| 仓库 | 角色 |
|------|------|
| **EMU-Stu-Blog** | 唯一内容源，Markdown + 图片 |
| **EMU-Stu-Site** | 主站，展示全部文章（Vite） |
| **IoT-lab-web** | 物联网实验室门户，只展示 \`labs: [IoT-Lab]\` 的文章（Next.js） |

**为什么不从 Site 读，而直接从 Blog 读？** Site 的 \`frontend/docs/\` 是 gitignore 的临时目录，不在仓库里；两个展示站应共享同一份内容源，各自做过滤。

## 第一步：build 前拉取博客

\`scripts/fetch-blog.mjs\` 在 \`npm run dev\` / \`npm run build\` 之前自动执行（通过 \`package.json\` 的 \`predev\` / \`prebuild\` 钩子）。

核心逻辑：

1. 若 \`content/blog/.git\` 存在 → \`git fetch\` + \`git reset --hard\` 更新
2. 否则 → 浅克隆 \`EMU-Stu-Blog\` 到 \`content/blog/\`
3. 将 \`content/blog/articles/images/\` 复制到 \`public/blog-images/\`

\`\`\`javascript
// scripts/fetch-blog.mjs（节选）
const REPO = process.env.BLOG_REPO ?? "https://github.com/EMU-Stu/EMU-Stu-Blog.git";
const BLOG_DIR = path.join(root, "content", "blog");
const IMAGES_DST = path.join(root, "public", "blog-images");

// clone 或更新
if (existsSync(path.join(BLOG_DIR, ".git"))) {
  git(["fetch", "--depth", "1", "origin", BRANCH], { cwd: BLOG_DIR });
  git(["reset", "--hard", \`origin/\${BRANCH}\`], { cwd: BLOG_DIR });
} else {
  git(["clone", "--depth", "1", "--branch", BRANCH, REPO, BLOG_DIR]);
}

// 复制图片到 public/
for (const file of readdirSync(IMAGES_SRC)) {
  cpSync(path.join(IMAGES_SRC, file), path.join(IMAGES_DST, file));
}
\`\`\`

\`content/blog/\` 和 \`public/blog-images/\` 都写进了 \`.gitignore\`，不提交进 lab-web 仓库；本地和 CI 每次 build 现拉最新。

\`package.json\` 配置：

\`\`\`json
{
  "scripts": {
    "fetch-blog": "node scripts/fetch-blog.mjs",
    "predev": "node scripts/fetch-blog.mjs",
    "prebuild": "node scripts/fetch-blog.mjs",
    "dev": "next dev --turbopack",
    "build": "next build"
  }
}
\`\`\`

## 第二步：解析 Markdown 并按实验室过滤

\`lib/blog.ts\` 负责读取 \`content/blog/articles/*.md\`，用 \`gray-matter\` 解析 frontmatter，只保留属于本实验室的文章。

### frontmatter 约定

投稿时在 EMU-Stu-Blog 的文章顶部标注所属实验室：

\`\`\`yaml
---
title: 文章标题
author: 张三
date: 2026-06-06
category: 技术分享
labs: [IoT-Lab]
---
\`\`\`

\`labs\` 支持数组或单值，大小写不敏感（\`IOT-Lab\` 与 \`IoT-Lab\` 均可匹配）。

### 过滤逻辑

\`\`\`typescript
// lib/site-config.ts
export const siteConfig = {
  labCode: "IoT-Lab",
  basePath: isGithubPages ? "/IOT-lab-web" : "",
  // ...
};

// lib/blog.ts
function belongsToLab(data: Record<string, unknown>): boolean {
  const codes = getLabCodes(data); // 读 labs 或 lab 字段
  const target = siteConfig.labCode.toLowerCase();
  return codes.some((code) => code.toLowerCase() === target);
}
\`\`\`

对外暴露两个 API：

- \`listLabBlogPosts()\` — 列表页，按 date 倒序
- \`readLabBlogPost(slug)\` — 详情页，不属于本实验室返回 \`null\`

主站 EMU-Stu-Site **不过滤**，继续展示全部；各实验室站只改 \`labCode\` 即可复用同一套 Blog 内容。

## 第三步：Next.js 页面

沿用 App Router + 静态导出（\`output: "export"\`）模式，和「未来指引」模块结构一致：

| 路由 | 文件 | 作用 |
|------|------|------|
| \`/blog\` | \`app/blog/page.tsx\` | 文章列表 |
| \`/blog/[slug]\` | \`app/blog/[slug]/page.tsx\` | 文章详情 |

详情页需要 \`generateStaticParams()\` 预渲染所有 slug（静态导出要求）：

\`\`\`typescript
export async function generateStaticParams() {
  return listLabBlogPosts().map((post) => ({ slug: post.slug }));
}
\`\`\`

正文用 \`react-markdown\` + \`remark-gfm\` 渲染，组件为 \`MarkdownBody\`。

## 第四步：图片为什么必须复制到 public/

Blog 原文写法：

\`\`\`markdown
![示意图](./images/stats-inline.png)
\`\`\`

clone 后图片在 \`content/blog/articles/images/\`，但 **Next.js 不会把 \`content/\` 暴露给浏览器**。静态资源必须放在 \`public/\`：

\`\`\`
public/blog-images/stats-inline.png  →  /blog-images/stats-inline.png
\`\`\`

读取 Markdown 时自动替换路径（作者**无需**改 Blog 源文件）：

\`\`\`typescript
function normalizeBlogImagePaths(content: string): string {
  const prefix = siteConfig.basePath;
  return content.replace(
    /!\\[([^\\]]*)\\]\\((?!https?:\\/\\/)(\\.\\/)?images\\/([^)]+)\\)/g,
    \`![$1](\${prefix}/blog-images/$3)\`,
  );
}
\`\`\`

### GitHub Pages 子路径陷阱

站点部署在 \`https://emu-stu.github.io/IOT-lab-web/\`，Next.js 的 \`basePath\` 为 \`/IOT-lab-web\`。\`<Link>\` 和 CSS 会自动加前缀，但 **react-markdown 生成的 \`<img src>\` 不会**，必须手动加：

| 环境 | 正确图片路径 |
|------|-------------|
| 本地 dev | \`/blog-images/xxx.png\` |
| GitHub Pages | \`/IOT-lab-web/blog-images/xxx.png\` |

\`site-config.ts\` 与 \`next.config.ts\` 共用同一 \`basePath\`，避免两处不一致。

## 第五步：CI 部署

GitHub Actions 在 build 时设置 \`GITHUB_PAGES=true\`，触发 basePath 和图片前缀：

\`\`\`yaml
- run: npm run build
  env:
    GITHUB_PAGES: "true"
    NEXT_PUBLIC_SITE_URL: https://emu-stu.github.io/IOT-lab-web
\`\`\`

\`prebuild\` 会自动跑 \`fetch-blog\`，CI 无需单独 clone Blog。

## 与 EMU-Stu-Site 主站对比

| | Site（Vite） | lab-web（Next.js） |
|---|-------------|-------------------|
| clone 目标 | \`frontend/docs/\` | \`content/blog/\` |
| 读 Markdown | \`import.meta.glob\` | \`fs\` + \`gray-matter\` |
| 实验室过滤 | 无 | \`labs\` frontmatter |
| 图片处理 | Vite 中间件 + build 拷到 \`dist/images/\` | fetch 时拷到 \`public/blog-images/\` |
| 浏览器路径 | \`/images/xxx\` | \`{basePath}/blog-images/xxx\` |

思路相同：**内容源 clone → 解析 → 图片放到浏览器可访问目录 → 改 Markdown 路径**；差异来自 Vite 与 Next.js 的静态资源模型不同。

## 投稿与更新流程

1. 在 **EMU-Stu-Blog** 写稿，frontmatter 加 \`labs: [IoT-Lab]\`
2. PR 合并后 Blog 仓库更新
3. **IoT-lab-web** push 或手动触发 deploy → \`prebuild\` 拉最新 Blog → 重新 build
4. 本实验室文章自动出现在 \`/blog\`

作者只需维护 Blog 仓库，**不用**改 lab-web，**不用**改图片路径。

## 给其他实验室复用

Fork IoT-lab-web，改 \`lib/site-config.ts\` 里的 \`labCode\`（如 \`Ark-Lab\`、\`Blade-Sec-Lab\`），投稿时在 frontmatter 写对应 \`labs\` 即可。fetch、解析、页面逻辑无需改动。

## 关键文件索引

| 文件 | 作用 |
|------|------|
| \`scripts/fetch-blog.mjs\` | clone Blog + 复制图片 |
| \`lib/blog.ts\` | 解析、过滤、改图片路径 |
| \`lib/site-config.ts\` | \`labCode\`、\`basePath\` |
| \`app/blog/page.tsx\` | 列表页 |
| \`app/blog/[slug]/page.tsx\` | 详情页 |
| \`next.config.ts\` | 静态导出 + basePath |
| \`.github/workflows/deploy.yml\` | GitHub Pages 部署 |

## 小结

IoT-lab-web 的博客模块实现了**内容仓库与展示仓库分离**：Blog 只管写文章，lab-web 在 build 前自动拉取、按实验室过滤、静态渲染。图片通过复制到 \`public/\` 并在解析时替换路径解决；GitHub Pages 子路径部署时需给图片 URL 加上 \`basePath\` 前缀。

若你在组织内维护其他实验室站点，欢迎复用这套模式，并在 EMU-Stu-Blog 投稿时记得标注 \`labs\` 字段。
`,Ga=Object.freeze(Object.defineProperty({__proto__:null,default:qa},Symbol.toStringTag,{value:"Module"}));function Fa(a,r){var u;const e=((u=a.split("/").pop())==null?void 0:u.replace(".md",""))||"untitled",t=r.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/),n={};let s=r;if(t){const p=t[1];s=t[2],p.split(`
`).forEach(h=>{const b=h.trim();if(!b||b.startsWith("#"))return;const g=b.indexOf(":");if(g!==-1){const f=b.slice(0,g).trim();let v=b.slice(g+1).trim();(v.startsWith('"')&&v.endsWith('"')||v.startsWith("'")&&v.endsWith("'"))&&(v=v.slice(1,-1)),n[f]=v}})}const i=s.match(/^\s*#\s+(.+)$/m);let o=n.title;i&&(o||(o=i[1].trim()),s=s.replace(/^\s*#\s+.+$/m,"").trim()),o||(o=e);const l=p=>p.slice(0,300).replace(/[#*`~_\-]/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/\s+/g," ").trim().slice(0,150)+"...",c=n.excerpt||l(s);return{slug:n.slug||e,title:o,excerpt:c,category:n.category||"技术沉淀",subCategory:n.subCategory||"General",author:n.author||"Anonymous",authorAvatar:n.authorAvatar||(n.author?n.author[0].toUpperCase():"A"),date:n.date||new Date().toISOString().split("T")[0],readTime:n.readTime||`${Math.max(1,Math.ceil(s.length/500))} min`,content:s,filePath:a}}const En=Object.assign({"../../docs/articles/fix-bug-of-lab-pulse.md":Da,"../../docs/articles/github_repo_code_change_stats_howto.md":ja,"../../docs/articles/lab-pulse-contribution-heatmap.md":za,"../../docs/articles/lab-web-blog-auto-fetch-howto.md":Ga}),Hn=[];for(const a in En)try{const r=En[a];let e="";if(typeof r=="string")e=r;else if(r&&typeof r.default=="string")e=r.default;else{console.warn(`[article.ts] Failed to load raw content for ${a}:`,r);continue}const t=Fa(a,e);Hn.push(t)}catch(r){console.error(`[article.ts] Error parsing markdown article at ${a}:`,r)}const Lt=[...Hn].sort((a,r)=>new Date(r.date).getTime()-new Date(a.date).getTime()),Ya=Lt.map(a=>({category:a.category,subCategory:a.subCategory,href:`/article?slug=${a.slug}`,title:a.title,excerpt:a.excerpt,authorAvatar:a.authorAvatar,author:a.author,date:a.date,readTime:a.readTime}));class Wa extends HTMLElement{constructor(){super(...arguments);y(this,"_currentCategory","全部");y(this,"_searchQuery","");y(this,"_currentPage",1);y(this,"_postsPerPage",4);y(this,"_categories",["全部","后端开发","前端架构","AI/ML","应急科技","开源治理"]);y(this,"_searchHandler",null);y(this,"_searchInput",null)}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this._searchHandler&&this._searchInput&&this._searchInput.removeEventListener("input",this._searchHandler)}getFilteredPosts(){return Ya.filter(e=>{const t=this._currentCategory==="全部"||e.category===this._currentCategory,n=this._searchQuery.trim().toLowerCase(),s=!n||e.title.toLowerCase().includes(n)||e.excerpt.toLowerCase().includes(n);return t&&s})}generatePostHtml(e){return`
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
          `,e.style.opacity="1"),t&&(t.innerHTML=this.generatePaginationHtml(s),this.setupPaginationListeners())},200)}setupEventListeners(){var e;this.addEventListener("click",t=>{const s=t.target.closest(".category-tab");if(s){const i=s.dataset.category||"全部";this._currentCategory!==i&&(this._currentCategory=i,this._currentPage=1,this.querySelectorAll(".category-tab").forEach(l=>{l.className="category-tab px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-surface-container hover:bg-surface-container-high text-on-surface-variant dark:text-surface-variant dark:bg-surface-container/30 dark:hover:bg-surface-container/50",l.setAttribute("aria-selected","false")}),s.className="category-tab px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-primary text-on-primary shadow-sm dark:bg-primary-fixed dark:text-on-primary-fixed",s.setAttribute("aria-selected","true"),this.refreshList())}}),this._searchInput=this.querySelector("#blog-search-input"),this._searchHandler=()=>{this._searchInput&&(this._searchQuery=this._searchInput.value,this._currentPage=1,this.refreshList())},(e=this._searchInput)==null||e.addEventListener("input",this._searchHandler),this.setupPaginationListeners()}setupPaginationListeners(){const e=this.querySelector("#blog-prev-btn");e==null||e.addEventListener("click",()=>{this._currentPage>1&&(this._currentPage--,this.refreshList(),this.scrollToTop())});const t=this.querySelector("#blog-next-btn");t==null||t.addEventListener("click",()=>{const s=this.getFilteredPosts(),i=Math.ceil(s.length/this._postsPerPage);this._currentPage<i&&(this._currentPage++,this.refreshList(),this.scrollToTop())}),this.querySelectorAll(".page-num-btn").forEach(s=>{s.addEventListener("click",()=>{const i=parseInt(s.dataset.page||"1",10);this._currentPage!==i&&(this._currentPage=i,this.refreshList(),this.scrollToTop())})})}scrollToTop(){const e=this.querySelector("#blog-container");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}customElements.define("emu-blog",Wa);const Za="modulepreload",Xa=function(a){return"/"+a},_n={},Ka=function(r,e,t){let n=Promise.resolve();if(e&&e.length>0){let i=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=i(e.map(c=>{if(c=Xa(c),c in _n)return;_n[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Za,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((b,g)=>{h.addEventListener("load",b),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return n.then(i=>{for(const o of i||[])o.status==="rejected"&&s(o.reason);return r().catch(s)})};function Rt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ne=Rt();function jn(a){Ne=a}var Me={exec:()=>null};function Be(a){let r=[];return e=>{let t=Math.max(0,Math.min(3,e-1)),n=r[t];return n||(n=a(t),r[t]=n),n}}function z(a,r=""){let e=typeof a=="string"?a:a.source,t={replace:(n,s)=>{let i=typeof s=="string"?s:s.source;return i=i.replace(le.caret,"$1"),e=e.replace(n,i),t},getRegex:()=>new RegExp(e,r)};return t}var Va=((a="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+a)}catch{return!1}})(),le={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Be(a=>new RegExp(`^ {0,${a}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Be(a=>new RegExp(`^ {0,${a}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Be(a=>new RegExp(`^ {0,${a}}(?:\`\`\`|~~~)`)),headingBeginRegex:Be(a=>new RegExp(`^ {0,${a}}#`)),htmlBeginRegex:Be(a=>new RegExp(`^ {0,${a}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Be(a=>new RegExp(`^ {0,${a}}>`))},Qa=/^(?:[ \t]*(?:\n|$))+/,Ja=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,es=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ze=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ts=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ot=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Un=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,zn=z(Un).replace(/bull/g,Ot).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ns=z(Un).replace(/bull/g,Ot).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),It=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,rs=/^[^\n]+/,Pt=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,as=z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Pt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ss=z(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ot).getRegex(),ut="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Bt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,is=z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Bt).replace("tag",ut).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),qn=z(It).replace("hr",Ze).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ut).getRegex(),os=z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",qn).getRegex(),Dt={blockquote:os,code:Ja,def:as,fences:es,heading:ts,hr:Ze,html:is,lheading:zn,list:ss,newline:Qa,paragraph:qn,table:Me,text:rs},Sn=z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ze).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ut).getRegex(),ls={...Dt,lheading:ns,table:Sn,paragraph:z(It).replace("hr",Ze).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Sn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ut).getRegex()},cs={...Dt,html:z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Bt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Me,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:z(It).replace("hr",Ze).replace("heading",` *#{1,6} *[^
]`).replace("lheading",zn).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ds=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,us=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Gn=/^( {2,}|\\)\n(?!\s*$)/,ps=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,He=/[\p{P}\p{S}]/u,pt=/[\s\p{P}\p{S}]/u,Ht=/[^\s\p{P}\p{S}]/u,hs=z(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,pt).getRegex(),Fn=/(?!~)[\p{P}\p{S}]/u,gs=/(?!~)[\s\p{P}\p{S}]/u,ms=/(?:[^\s\p{P}\p{S}]|~)/u,fs=z(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Va?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Yn=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,bs=z(Yn,"u").replace(/punct/g,He).getRegex(),xs=z(Yn,"u").replace(/punct/g,Fn).getRegex(),Wn="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",vs=z(Wn,"gu").replace(/notPunctSpace/g,Ht).replace(/punctSpace/g,pt).replace(/punct/g,He).getRegex(),ys=z(Wn,"gu").replace(/notPunctSpace/g,ms).replace(/punctSpace/g,gs).replace(/punct/g,Fn).getRegex(),ks=z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ht).replace(/punctSpace/g,pt).replace(/punct/g,He).getRegex(),ws=z(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,He).getRegex(),Es="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",_s=z(Es,"gu").replace(/notPunctSpace/g,Ht).replace(/punctSpace/g,pt).replace(/punct/g,He).getRegex(),Ss=z(/\\(punct)/,"gu").replace(/punct/g,He).getRegex(),Ts=z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),As=z(Bt).replace("(?:-->|$)","-->").getRegex(),Ls=z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",As).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ot=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Cs=z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ot).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Zn=z(/^!?\[(label)\]\[(ref)\]/).replace("label",ot).replace("ref",Pt).getRegex(),Xn=z(/^!?\[(ref)\](?:\[\])?/).replace("ref",Pt).getRegex(),Ms=z("reflink|nolink(?!\\()","g").replace("reflink",Zn).replace("nolink",Xn).getRegex(),Tn=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,jt={_backpedal:Me,anyPunctuation:Ss,autolink:Ts,blockSkip:fs,br:Gn,code:us,del:Me,delLDelim:Me,delRDelim:Me,emStrongLDelim:bs,emStrongRDelimAst:vs,emStrongRDelimUnd:ks,escape:ds,link:Cs,nolink:Xn,punctuation:hs,reflink:Zn,reflinkSearch:Ms,tag:Ls,text:ps,url:Me},$s={...jt,link:z(/^!?\[(label)\]\((.*?)\)/).replace("label",ot).getRegex(),reflink:z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ot).getRegex()},Ct={...jt,emStrongRDelimAst:ys,emStrongLDelim:xs,delLDelim:ws,delRDelim:_s,url:z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Tn).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:z(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Tn).getRegex()},Ns={...Ct,br:z(Gn).replace("{2,}","*").getRegex(),text:z(Ct.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},at={normal:Dt,gfm:ls,pedantic:cs},Fe={normal:jt,gfm:Ct,breaks:Ns,pedantic:$s},Rs={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},An=a=>Rs[a];function ke(a,r){if(r){if(le.escapeTest.test(a))return a.replace(le.escapeReplace,An)}else if(le.escapeTestNoEncode.test(a))return a.replace(le.escapeReplaceNoEncode,An);return a}function Ln(a){try{a=encodeURI(a).replace(le.percentDecode,"%")}catch{return null}return a}function Cn(a,r){var s;let e=a.replace(le.findPipe,(i,o,l)=>{let c=!1,u=o;for(;--u>=0&&l[u]==="\\";)c=!c;return c?"|":" |"}),t=e.split(le.splitPipe),n=0;if(t[0].trim()||t.shift(),t.length>0&&!((s=t.at(-1))!=null&&s.trim())&&t.pop(),r)if(t.length>r)t.splice(r);else for(;t.length<r;)t.push("");for(;n<t.length;n++)t[n]=t[n].trim().replace(le.slashPipe,"|");return t}function Te(a,r,e){let t=a.length;if(t===0)return"";let n=0;for(;n<t&&a.charAt(t-n-1)===r;)n++;return a.slice(0,t-n)}function Mn(a){let r=a.split(`
`),e=r.length-1;for(;e>=0&&le.blankLine.test(r[e]);)e--;return r.length-e<=2?a:r.slice(0,e+1).join(`
`)}function Os(a,r){if(a.indexOf(r[1])===-1)return-1;let e=0;for(let t=0;t<a.length;t++)if(a[t]==="\\")t++;else if(a[t]===r[0])e++;else if(a[t]===r[1]&&(e--,e<0))return t;return e>0?-2:-1}function Is(a,r=0){let e=r,t="";for(let n of a)if(n==="	"){let s=4-e%4;t+=" ".repeat(s),e+=s}else t+=n,e++;return t}function $n(a,r,e,t,n){let s=r.href,i=r.title||null,o=a[1].replace(n.other.outputLinkReplace,"$1");t.state.inLink=!0;let l={type:a[0].charAt(0)==="!"?"image":"link",raw:e,href:s,title:i,text:o,tokens:t.inlineTokens(o)};return t.state.inLink=!1,l}function Ps(a,r,e){let t=a.match(e.other.indentCodeCompensation);if(t===null)return r;let n=t[1];return r.split(`
`).map(s=>{let i=s.match(e.other.beginningSpace);if(i===null)return s;let[o]=i;return o.length>=n.length?s.slice(n.length):s}).join(`
`)}var lt=class{constructor(a){y(this,"options");y(this,"rules");y(this,"lexer");this.options=a||Ne}space(a){let r=this.rules.block.newline.exec(a);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(a){let r=this.rules.block.code.exec(a);if(r){let e=this.options.pedantic?r[0]:Mn(r[0]),t=e.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e,codeBlockStyle:"indented",text:t}}}fences(a){let r=this.rules.block.fences.exec(a);if(r){let e=r[0],t=Ps(e,r[3]||"",this.rules);return{type:"code",raw:e,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:t}}}heading(a){let r=this.rules.block.heading.exec(a);if(r){let e=r[2].trim();if(this.rules.other.endingHash.test(e)){let t=Te(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:Te(r[0],`
`),depth:r[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(a){let r=this.rules.block.hr.exec(a);if(r)return{type:"hr",raw:Te(r[0],`
`)}}blockquote(a){let r=this.rules.block.blockquote.exec(a);if(r){let e=Te(r[0],`
`).split(`
`),t="",n="",s=[];for(;e.length>0;){let i=!1,o=[],l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))o.push(e[l]),i=!0;else if(!i)o.push(e[l]);else break;e=e.slice(l);let c=o.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");t=t?`${t}
${c}`:c,n=n?`${n}
${u}`:u;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,s,!0),this.lexer.state.top=p,e.length===0)break;let h=s.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){let b=h,g=b.raw+`
`+e.join(`
`),f=this.blockquote(g);s[s.length-1]=f,t=t.substring(0,t.length-b.raw.length)+f.raw,n=n.substring(0,n.length-b.text.length)+f.text;break}else if((h==null?void 0:h.type)==="list"){let b=h,g=b.raw+`
`+e.join(`
`),f=this.list(g);s[s.length-1]=f,t=t.substring(0,t.length-h.raw.length)+f.raw,n=n.substring(0,n.length-b.raw.length)+f.raw,e=g.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:t,tokens:s,text:n}}}list(a){let r=this.rules.block.list.exec(a);if(r){let e=r[1].trim(),t=e.length>1,n={type:"list",raw:"",ordered:t,start:t?+e.slice(0,-1):"",loose:!1,items:[]};e=t?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=t?e:"[*+-]");let s=this.rules.other.listItemRegex(e),i=!1;for(;a;){let l=!1,c="",u="";if(!(r=s.exec(a))||this.rules.block.hr.test(a))break;c=r[0],a=a.substring(c.length);let p=Is(r[2].split(`
`,1)[0],r[1].length),h=a.split(`
`,1)[0],b=!p.trim(),g=0;if(this.options.pedantic?(g=2,u=p.trimStart()):b?g=r[1].length+1:(g=p.search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=p.slice(g),g+=r[1].length),b&&this.rules.other.blankLine.test(h)&&(c+=h+`
`,a=a.substring(h.length+1),l=!0),!l){let f=this.rules.other.nextBulletRegex(g),v=this.rules.other.hrRegex(g),E=this.rules.other.fencesBeginRegex(g),T=this.rules.other.headingBeginRegex(g),w=this.rules.other.htmlBeginRegex(g),H=this.rules.other.blockquoteBeginRegex(g);for(;a;){let D=a.split(`
`,1)[0],G;if(h=D,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),G=h):G=h.replace(this.rules.other.tabCharGlobal,"    "),E.test(h)||T.test(h)||w.test(h)||H.test(h)||f.test(h)||v.test(h))break;if(G.search(this.rules.other.nonSpaceChar)>=g||!h.trim())u+=`
`+G.slice(g);else{if(b||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||E.test(p)||T.test(p)||v.test(p))break;u+=`
`+h}b=!h.trim(),c+=D+`
`,a=a.substring(D.length+1),p=G.slice(g)}}n.loose||(i?n.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(i=!0)),n.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),n.raw+=c}let o=n.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let l of n.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let c=l.tokens[0];if(l.task&&((c==null?void 0:c.type)==="text"||(c==null?void 0:c.type)==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let p={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=p.checked,n.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=p.raw+l.tokens[0].raw,l.tokens[0].text=p.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(p)):l.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):l.tokens.unshift(p)}}else l.task&&(l.task=!1);if(!n.loose){let u=l.tokens.filter(h=>h.type==="space"),p=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));n.loose=p}}if(n.loose)for(let l of n.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return n}}html(a){let r=this.rules.block.html.exec(a);if(r){let e=Mn(r[0]);return{type:"html",block:!0,raw:e,pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:e}}}def(a){let r=this.rules.block.def.exec(a);if(r){let e=r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=r[2]?r[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:e,raw:Te(r[0],`
`),href:t,title:n}}}table(a){var i;let r=this.rules.block.table.exec(a);if(!r||!this.rules.other.tableDelimiter.test(r[2]))return;let e=Cn(r[1]),t=r[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=(i=r[3])!=null&&i.trim()?r[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:Te(r[0],`
`),header:[],align:[],rows:[]};if(e.length===t.length){for(let o of t)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<e.length;o++)s.header.push({text:e[o],tokens:this.lexer.inline(e[o]),header:!0,align:s.align[o]});for(let o of n)s.rows.push(Cn(o,s.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[c]})));return s}}lheading(a){let r=this.rules.block.lheading.exec(a);if(r){let e=r[1].trim();return{type:"heading",raw:Te(r[0],`
`),depth:r[2].charAt(0)==="="?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(a){let r=this.rules.block.paragraph.exec(a);if(r){let e=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:e,tokens:this.lexer.inline(e)}}}text(a){let r=this.rules.block.text.exec(a);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(a){let r=this.rules.inline.escape.exec(a);if(r)return{type:"escape",raw:r[0],text:r[1]}}tag(a){let r=this.rules.inline.tag.exec(a);if(r)return!this.lexer.state.inLink&&this.rules.other.startATag.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(a){let r=this.rules.inline.link.exec(a);if(r){let e=r[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let s=Te(e.slice(0,-1),"\\");if((e.length-s.length)%2===0)return}else{let s=Os(r[2],"()");if(s===-2)return;if(s>-1){let i=(r[0].indexOf("!")===0?5:4)+r[1].length+s;r[2]=r[2].substring(0,s),r[0]=r[0].substring(0,i).trim(),r[3]=""}}let t=r[2],n="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(t);s&&(t=s[1],n=s[3])}else n=r[3]?r[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?t=t.slice(1):t=t.slice(1,-1)),$n(r,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer,this.rules)}}reflink(a,r){let e;if((e=this.rules.inline.reflink.exec(a))||(e=this.rules.inline.nolink.exec(a))){let t=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=r[t.toLowerCase()];if(!n){let s=e[0].charAt(0);return{type:"text",raw:s,text:s}}return $n(e,n,e[0],this.lexer,this.rules)}}emStrong(a,r,e=""){let t=this.rules.inline.emStrongLDelim.exec(a);if(!(!t||!t[1]&&!t[2]&&!t[3]&&!t[4]||t[4]&&e.match(this.rules.other.unicodeAlphaNumeric))&&(!(t[1]||t[3])||!e||this.rules.inline.punctuation.exec(e))){let n=[...t[0]].length-1,s,i,o=n,l=0,c=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,r=r.slice(-1*a.length+n);(t=c.exec(r))!==null;){if(s=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!s)continue;if(i=[...s].length,t[3]||t[4]){o+=i;continue}else if((t[5]||t[6])&&n%3&&!((n+i)%3)){l+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o+l);let u=[...t[0]][0].length,p=a.slice(0,n+t.index+u+i);if(Math.min(n,i)%2){let b=p.slice(1,-1);return{type:"em",raw:p,text:b,tokens:this.lexer.inlineTokens(b)}}let h=p.slice(2,-2);return{type:"strong",raw:p,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(a){let r=this.rules.inline.code.exec(a);if(r){let e=r[2].replace(this.rules.other.newLineCharGlobal," "),t=this.rules.other.nonSpaceChar.test(e),n=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return t&&n&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:r[0],text:e}}}br(a){let r=this.rules.inline.br.exec(a);if(r)return{type:"br",raw:r[0]}}del(a,r,e=""){let t=this.rules.inline.delLDelim.exec(a);if(t&&(!t[1]||!e||this.rules.inline.punctuation.exec(e))){let n=[...t[0]].length-1,s,i,o=n,l=this.rules.inline.delRDelim;for(l.lastIndex=0,r=r.slice(-1*a.length+n);(t=l.exec(r))!==null;){if(s=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!s||(i=[...s].length,i!==n))continue;if(t[3]||t[4]){o+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o);let c=[...t[0]][0].length,u=a.slice(0,n+t.index+c+i),p=u.slice(n,-n);return{type:"del",raw:u,text:p,tokens:this.lexer.inlineTokens(p)}}}}autolink(a){let r=this.rules.inline.autolink.exec(a);if(r){let e,t;return r[2]==="@"?(e=r[1],t="mailto:"+e):(e=r[1],t=e),{type:"link",raw:r[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}url(a){var e;let r;if(r=this.rules.inline.url.exec(a)){let t,n;if(r[2]==="@")t=r[0],n="mailto:"+t;else{let s;do s=r[0],r[0]=((e=this.rules.inline._backpedal.exec(r[0]))==null?void 0:e[0])??"";while(s!==r[0]);t=r[0],r[1]==="www."?n="http://"+r[0]:n=r[0]}return{type:"link",raw:r[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(a){let r=this.rules.inline.text.exec(a);if(r){let e=this.lexer.state.inRawBlock;return{type:"text",raw:r[0],text:r[0],escaped:e}}}},fe=class Mt{constructor(r){y(this,"tokens");y(this,"options");y(this,"state");y(this,"inlineQueue");y(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=r||Ne,this.options.tokenizer=this.options.tokenizer||new lt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:le,block:at.normal,inline:Fe.normal};this.options.pedantic?(e.block=at.pedantic,e.inline=Fe.pedantic):this.options.gfm&&(e.block=at.gfm,this.options.breaks?e.inline=Fe.breaks:e.inline=Fe.gfm),this.tokenizer.rules=e}static get rules(){return{block:at,inline:Fe}}static lex(r,e){return new Mt(e).lex(r)}static lexInline(r,e){return new Mt(e).inlineTokens(r)}lex(r){r=r.replace(le.carriageReturn,`
`),this.blockTokens(r,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(r,e=[],t=!1){var s,i,o;this.tokenizer.lexer=this,this.options.pedantic&&(r=r.replace(le.tabCharGlobal,"    ").replace(le.spaceLine,""));let n=1/0;for(;r;){if(r.length<n)n=r.length;else{this.infiniteLoopError(r.charCodeAt(0));break}let l;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(l=u.call({lexer:this},r,e))?(r=r.substring(l.raw.length),e.push(l),!0):!1))continue;if(l=this.tokenizer.space(r)){r=r.substring(l.raw.length);let u=e.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:e.push(l);continue}if(l=this.tokenizer.code(r)){r=r.substring(l.raw.length);let u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):e.push(l);continue}if(l=this.tokenizer.fences(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.heading(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.hr(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.blockquote(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.list(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.html(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.def(r)){r=r.substring(l.raw.length);let u=e.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title},e.push(l));continue}if(l=this.tokenizer.table(r)){r=r.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.lheading(r)){r=r.substring(l.raw.length),e.push(l);continue}let c=r;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0,p=r.slice(1),h;this.options.extensions.startBlock.forEach(b=>{h=b.call({lexer:this},p),typeof h=="number"&&h>=0&&(u=Math.min(u,h))}),u<1/0&&u>=0&&(c=r.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(c))){let u=e.at(-1);t&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(l),t=c.length!==r.length,r=r.substring(l.raw.length);continue}if(l=this.tokenizer.text(r)){r=r.substring(l.raw.length);let u=e.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(l);continue}if(r){this.infiniteLoopError(r.charCodeAt(0));break}}return this.state.top=!0,e}inline(r,e=[]){return this.inlineQueue.push({src:r,tokens:e}),e}inlineTokens(r,e=[]){var c,u,p,h,b;this.tokenizer.lexer=this;let t=r,n=null;if(this.tokens.links){let g=Object.keys(this.tokens.links);if(g.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(t))!==null;)g.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(t))!==null;)t=t.slice(0,n.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(n=this.tokenizer.rules.inline.blockSkip.exec(t))!==null;)s=n[2]?n[2].length:0,t=t.slice(0,n.index+s)+"["+"a".repeat(n[0].length-s-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);t=((u=(c=this.options.hooks)==null?void 0:c.emStrongMask)==null?void 0:u.call({lexer:this},t))??t;let i=!1,o="",l=1/0;for(;r;){if(r.length<l)l=r.length;else{this.infiniteLoopError(r.charCodeAt(0));break}i||(o=""),i=!1;let g;if((h=(p=this.options.extensions)==null?void 0:p.inline)!=null&&h.some(v=>(g=v.call({lexer:this},r,e))?(r=r.substring(g.raw.length),e.push(g),!0):!1))continue;if(g=this.tokenizer.escape(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.tag(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.link(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.reflink(r,this.tokens.links)){r=r.substring(g.raw.length);let v=e.at(-1);g.type==="text"&&(v==null?void 0:v.type)==="text"?(v.raw+=g.raw,v.text+=g.text):e.push(g);continue}if(g=this.tokenizer.emStrong(r,t,o)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.codespan(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.br(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.del(r,t,o)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.autolink(r)){r=r.substring(g.raw.length),e.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(r))){r=r.substring(g.raw.length),e.push(g);continue}let f=r;if((b=this.options.extensions)!=null&&b.startInline){let v=1/0,E=r.slice(1),T;this.options.extensions.startInline.forEach(w=>{T=w.call({lexer:this},E),typeof T=="number"&&T>=0&&(v=Math.min(v,T))}),v<1/0&&v>=0&&(f=r.substring(0,v+1))}if(g=this.tokenizer.inlineText(f)){r=r.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(o=g.raw.slice(-1)),i=!0;let v=e.at(-1);(v==null?void 0:v.type)==="text"?(v.raw+=g.raw,v.text+=g.text):e.push(g);continue}if(r){this.infiniteLoopError(r.charCodeAt(0));break}}return e}infiniteLoopError(r){let e="Infinite loop on byte: "+r;if(this.options.silent)console.error(e);else throw new Error(e)}},ct=class{constructor(a){y(this,"options");y(this,"parser");this.options=a||Ne}space(a){return""}code({text:a,lang:r,escaped:e}){var s;let t=(s=(r||"").match(le.notSpaceStart))==null?void 0:s[0],n=a.replace(le.endingNewline,"")+`
`;return t?'<pre><code class="language-'+ke(t)+'">'+(e?n:ke(n,!0))+`</code></pre>
`:"<pre><code>"+(e?n:ke(n,!0))+`</code></pre>
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
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${ke(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:r,tokens:e}){let t=this.parser.parseInline(e),n=Ln(a);if(n===null)return t;a=n;let s='<a href="'+a+'"';return r&&(s+=' title="'+ke(r)+'"'),s+=">"+t+"</a>",s}image({href:a,title:r,text:e,tokens:t}){t&&(e=this.parser.parseInline(t,this.parser.textRenderer));let n=Ln(a);if(n===null)return ke(e);a=n;let s=`<img src="${a}" alt="${ke(e)}"`;return r&&(s+=` title="${ke(r)}"`),s+=">",s}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:ke(a.text)}},Ut=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}checkbox({raw:a}){return a}},be=class $t{constructor(r){y(this,"options");y(this,"renderer");y(this,"textRenderer");this.options=r||Ne,this.options.renderer=this.options.renderer||new ct,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ut}static parse(r,e){return new $t(e).parse(r)}static parseInline(r,e){return new $t(e).parseInline(r)}parse(r){var t,n;this.renderer.parser=this;let e="";for(let s=0;s<r.length;s++){let i=r[s];if((n=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&n[i.type]){let l=i,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){e+=c||"";continue}}let o=i;switch(o.type){case"space":{e+=this.renderer.space(o);break}case"hr":{e+=this.renderer.hr(o);break}case"heading":{e+=this.renderer.heading(o);break}case"code":{e+=this.renderer.code(o);break}case"table":{e+=this.renderer.table(o);break}case"blockquote":{e+=this.renderer.blockquote(o);break}case"list":{e+=this.renderer.list(o);break}case"checkbox":{e+=this.renderer.checkbox(o);break}case"html":{e+=this.renderer.html(o);break}case"def":{e+=this.renderer.def(o);break}case"paragraph":{e+=this.renderer.paragraph(o);break}case"text":{e+=this.renderer.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return e}parseInline(r,e=this.renderer){var n,s;this.renderer.parser=this;let t="";for(let i=0;i<r.length;i++){let o=r[i];if((s=(n=this.options.extensions)==null?void 0:n.renderers)!=null&&s[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){t+=c||"";continue}}let l=o;switch(l.type){case"escape":{t+=e.text(l);break}case"html":{t+=e.html(l);break}case"link":{t+=e.link(l);break}case"image":{t+=e.image(l);break}case"checkbox":{t+=e.checkbox(l);break}case"strong":{t+=e.strong(l);break}case"em":{t+=e.em(l);break}case"codespan":{t+=e.codespan(l);break}case"br":{t+=e.br(l);break}case"del":{t+=e.del(l);break}case"text":{t+=e.text(l);break}default:{let c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return t}},st,Ye=(st=class{constructor(a){y(this,"options");y(this,"block");this.options=a||Ne}preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}emStrongMask(a){return a}provideLexer(a=this.block){return a?fe.lex:fe.lexInline}provideParser(a=this.block){return a?be.parse:be.parseInline}},y(st,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),y(st,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),st),Bs=class{constructor(...a){y(this,"defaults",Rt());y(this,"options",this.setOptions);y(this,"parse",this.parseMarkdown(!0));y(this,"parseInline",this.parseMarkdown(!1));y(this,"Parser",be);y(this,"Renderer",ct);y(this,"TextRenderer",Ut);y(this,"Lexer",fe);y(this,"Tokenizer",lt);y(this,"Hooks",Ye);this.use(...a)}walkTokens(a,r){var t,n;let e=[];for(let s of a)switch(e=e.concat(r.call(this,s)),s.type){case"table":{let i=s;for(let o of i.header)e=e.concat(this.walkTokens(o.tokens,r));for(let o of i.rows)for(let l of o)e=e.concat(this.walkTokens(l.tokens,r));break}case"list":{let i=s;e=e.concat(this.walkTokens(i.items,r));break}default:{let i=s;(n=(t=this.defaults.extensions)==null?void 0:t.childTokens)!=null&&n[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let l=i[o].flat(1/0);e=e.concat(this.walkTokens(l,r))}):i.tokens&&(e=e.concat(this.walkTokens(i.tokens,r)))}}return e}use(...a){let r=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(e=>{let t={...e};if(t.async=this.defaults.async||t.async||!1,e.extensions&&(e.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){let s=r.renderers[n.name];s?r.renderers[n.name]=function(...i){let o=n.renderer.apply(this,i);return o===!1&&(o=s.apply(this,i)),o}:r.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=r[n.level];s?s.unshift(n.tokenizer):r[n.level]=[n.tokenizer],n.start&&(n.level==="block"?r.startBlock?r.startBlock.push(n.start):r.startBlock=[n.start]:n.level==="inline"&&(r.startInline?r.startInline.push(n.start):r.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(r.childTokens[n.name]=n.childTokens)}),t.extensions=r),e.renderer){let n=this.defaults.renderer||new ct(this.defaults);for(let s in e.renderer){if(!(s in n))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let i=s,o=e.renderer[i],l=n[i];n[i]=(...c)=>{let u=o.apply(n,c);return u===!1&&(u=l.apply(n,c)),u||""}}t.renderer=n}if(e.tokenizer){let n=this.defaults.tokenizer||new lt(this.defaults);for(let s in e.tokenizer){if(!(s in n))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let i=s,o=e.tokenizer[i],l=n[i];n[i]=(...c)=>{let u=o.apply(n,c);return u===!1&&(u=l.apply(n,c)),u}}t.tokenizer=n}if(e.hooks){let n=this.defaults.hooks||new Ye;for(let s in e.hooks){if(!(s in n))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let i=s,o=e.hooks[i],l=n[i];Ye.passThroughHooks.has(s)?n[i]=c=>{if(this.defaults.async&&Ye.passThroughHooksRespectAsync.has(s))return(async()=>{let p=await o.call(n,c);return l.call(n,p)})();let u=o.call(n,c);return l.call(n,u)}:n[i]=(...c)=>{if(this.defaults.async)return(async()=>{let p=await o.apply(n,c);return p===!1&&(p=await l.apply(n,c)),p})();let u=o.apply(n,c);return u===!1&&(u=l.apply(n,c)),u}}t.hooks=n}if(e.walkTokens){let n=this.defaults.walkTokens,s=e.walkTokens;t.walkTokens=function(i){let o=[];return o.push(s.call(this,i)),n&&(o=o.concat(n.call(this,i))),o}}this.defaults={...this.defaults,...t}}),this}setOptions(a){return this.defaults={...this.defaults,...a},this}lexer(a,r){return fe.lex(a,r??this.defaults)}parser(a,r){return be.parse(a,r??this.defaults)}parseMarkdown(a){return(r,e)=>{let t={...e},n={...this.defaults,...t},s=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&t.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=a),n.async)return(async()=>{let i=n.hooks?await n.hooks.preprocess(r):r,o=await(n.hooks?await n.hooks.provideLexer(a):a?fe.lex:fe.lexInline)(i,n),l=n.hooks?await n.hooks.processAllTokens(o):o;n.walkTokens&&await Promise.all(this.walkTokens(l,n.walkTokens));let c=await(n.hooks?await n.hooks.provideParser(a):a?be.parse:be.parseInline)(l,n);return n.hooks?await n.hooks.postprocess(c):c})().catch(s);try{n.hooks&&(r=n.hooks.preprocess(r));let i=(n.hooks?n.hooks.provideLexer(a):a?fe.lex:fe.lexInline)(r,n);n.hooks&&(i=n.hooks.processAllTokens(i)),n.walkTokens&&this.walkTokens(i,n.walkTokens);let o=(n.hooks?n.hooks.provideParser(a):a?be.parse:be.parseInline)(i,n);return n.hooks&&(o=n.hooks.postprocess(o)),o}catch(i){return s(i)}}}onError(a,r){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,a){let t="<p>An error occurred:</p><pre>"+ke(e.message+"",!0)+"</pre>";return r?Promise.resolve(t):t}if(r)return Promise.reject(e);throw e}}},$e=new Bs;function q(a,r){return $e.parse(a,r)}q.options=q.setOptions=function(a){return $e.setOptions(a),q.defaults=$e.defaults,jn(q.defaults),q};q.getDefaults=Rt;q.defaults=Ne;q.use=function(...a){return $e.use(...a),q.defaults=$e.defaults,jn(q.defaults),q};q.walkTokens=function(a,r){return $e.walkTokens(a,r)};q.parseInline=$e.parseInline;q.Parser=be;q.parser=be.parse;q.Renderer=ct;q.TextRenderer=Ut;q.Lexer=fe;q.lexer=fe.lex;q.Tokenizer=lt;q.Hooks=Ye;q.parse=q;q.options;q.setOptions;q.use;q.walkTokens;q.parseInline;be.parse;fe.lex;const Nn=[{type:"note",icon:'<svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'},{type:"tip",icon:'<svg class="octicon octicon-light-bulb mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>'},{type:"important",icon:'<svg class="octicon octicon-report mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>'},{type:"warning",icon:'<svg class="octicon octicon-alert mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>'},{type:"caution",icon:'<svg class="octicon octicon-stop mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'}];function Ds(a){return a.length?Object.values([...Nn,...a].reduce((r,e)=>(r[e.type]=e,r),{})):Nn}function Rn(a){return`^(?:\\[!${a.toUpperCase()}])\\s*?
*`}function Hs(a){return a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase()}function js(a={}){const{className:r="markdown-alert",variants:e=[]}=a,t=Ds(e);return{walkTokens(n){var s,i,o,l;if(n.type!=="blockquote")return;const c=t.find(({type:u})=>new RegExp(Rn(u)).test(n.text));if(c){const{type:u,icon:p,title:h=Hs(u),titleClassName:b=`${r}-title`}=c,g=new RegExp(Rn(u));Object.assign(n,{type:"alert",meta:{className:r,variant:u,icon:p,title:h,titleClassName:b}});const f=(s=n.tokens)==null?void 0:s[0];if((i=f.raw)!=null&&i.replace(g,"").trim()){const v=f.tokens[0];Object.assign(v,{raw:v.raw.replace(g,""),text:v.text.replace(g,"")}),((o=f.tokens[1])==null?void 0:o.type)==="br"&&f.tokens.splice(1,1)}else(l=n.tokens)==null||l.shift()}},extensions:[{name:"alert",level:"block",renderer({meta:n,tokens:s=[]}){let i=`<div class="${n.className} ${n.className}-${n.variant}">
`;return i+=`<p class="${n.titleClassName}">`,i+=n.icon,i+=n.title,i+=`</p>
`,i+=this.parser.parse(s),i+=`</div>
`,i}}]}}function Us(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Tt,On;function zs(){if(On)return Tt;On=1;function a(d){return d instanceof Map?d.clear=d.delete=d.set=function(){throw new Error("map is read-only")}:d instanceof Set&&(d.add=d.clear=d.delete=function(){throw new Error("set is read-only")}),Object.freeze(d),Object.getOwnPropertyNames(d).forEach(m=>{const k=d[m],N=typeof k;(N==="object"||N==="function")&&!Object.isFrozen(k)&&a(k)}),d}class r{constructor(m){m.data===void 0&&(m.data={}),this.data=m.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function e(d){return d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(d,...m){const k=Object.create(null);for(const N in d)k[N]=d[N];return m.forEach(function(N){for(const Q in N)k[Q]=N[Q]}),k}const n="</span>",s=d=>!!d.scope,i=(d,{prefix:m})=>{if(d.startsWith("language:"))return d.replace("language:","language-");if(d.includes(".")){const k=d.split(".");return[`${m}${k.shift()}`,...k.map((N,Q)=>`${N}${"_".repeat(Q+1)}`)].join(" ")}return`${m}${d}`};class o{constructor(m,k){this.buffer="",this.classPrefix=k.classPrefix,m.walk(this)}addText(m){this.buffer+=e(m)}openNode(m){if(!s(m))return;const k=i(m.scope,{prefix:this.classPrefix});this.span(k)}closeNode(m){s(m)&&(this.buffer+=n)}value(){return this.buffer}span(m){this.buffer+=`<span class="${m}">`}}const l=(d={})=>{const m={children:[]};return Object.assign(m,d),m};class c{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(m){this.top.children.push(m)}openNode(m){const k=l({scope:m});this.add(k),this.stack.push(k)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(m){return this.constructor._walk(m,this.rootNode)}static _walk(m,k){return typeof k=="string"?m.addText(k):k.children&&(m.openNode(k),k.children.forEach(N=>this._walk(m,N)),m.closeNode(k)),m}static _collapse(m){typeof m!="string"&&m.children&&(m.children.every(k=>typeof k=="string")?m.children=[m.children.join("")]:m.children.forEach(k=>{c._collapse(k)}))}}class u extends c{constructor(m){super(),this.options=m}addText(m){m!==""&&this.add(m)}startScope(m){this.openNode(m)}endScope(){this.closeNode()}__addSublanguage(m,k){const N=m.root;k&&(N.scope=`language:${k}`),this.add(N)}toHTML(){return new o(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function p(d){return d?typeof d=="string"?d:d.source:null}function h(d){return f("(?=",d,")")}function b(d){return f("(?:",d,")*")}function g(d){return f("(?:",d,")?")}function f(...d){return d.map(k=>p(k)).join("")}function v(d){const m=d[d.length-1];return typeof m=="object"&&m.constructor===Object?(d.splice(d.length-1,1),m):{}}function E(...d){return"("+(v(d).capture?"":"?:")+d.map(N=>p(N)).join("|")+")"}function T(d){return new RegExp(d.toString()+"|").exec("").length-1}function w(d,m){const k=d&&d.exec(m);return k&&k.index===0}const H=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function D(d,{joinWith:m}){let k=0;return d.map(N=>{k+=1;const Q=k;let J=p(N),A="";for(;J.length>0;){const S=H.exec(J);if(!S){A+=J;break}A+=J.substring(0,S.index),J=J.substring(S.index+S[0].length),S[0][0]==="\\"&&S[1]?A+="\\"+String(Number(S[1])+Q):(A+=S[0],S[0]==="("&&k++)}return A}).map(N=>`(${N})`).join(m)}const G=/\b\B/,Z="[a-zA-Z]\\w*",V="[a-zA-Z_]\\w*",ie="\\b\\d+(\\.\\d+)?",ue="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",ge="\\b(0b[01]+)",$="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",O=(d={})=>{const m=/^#![ ]*\//;return d.binary&&(d.begin=f(m,/.*\b/,d.binary,/\b.*/)),t({scope:"meta",begin:m,end:/$/,relevance:0,"on:begin":(k,N)=>{k.index!==0&&N.ignoreMatch()}},d)},W={begin:"\\\\[\\s\\S]",relevance:0},ee={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[W]},ae={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[W]},pe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},B=function(d,m,k={}){const N=t({scope:"comment",begin:d,end:m,contains:[]},k);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Q=E("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:f(/[ ]+/,"(",Q,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},I=B("//","$"),U=B("/\\*","\\*/"),F=B("#","$"),ce={scope:"number",begin:ie,relevance:0},Ee={scope:"number",begin:ue,relevance:0},Re={scope:"number",begin:ge,relevance:0},Ae={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[W,{begin:/\[/,end:/\]/,relevance:0,contains:[W]}]},zt={scope:"title",begin:Z,relevance:0},ur={scope:"title",begin:V,relevance:0},pr={begin:"\\.\\s*"+V,relevance:0};var Xe=Object.freeze({__proto__:null,APOS_STRING_MODE:ee,BACKSLASH_ESCAPE:W,BINARY_NUMBER_MODE:Re,BINARY_NUMBER_RE:ge,COMMENT:B,C_BLOCK_COMMENT_MODE:U,C_LINE_COMMENT_MODE:I,C_NUMBER_MODE:Ee,C_NUMBER_RE:ue,END_SAME_AS_BEGIN:function(d){return Object.assign(d,{"on:begin":(m,k)=>{k.data._beginMatch=m[1]},"on:end":(m,k)=>{k.data._beginMatch!==m[1]&&k.ignoreMatch()}})},HASH_COMMENT_MODE:F,IDENT_RE:Z,MATCH_NOTHING_RE:G,METHOD_GUARD:pr,NUMBER_MODE:ce,NUMBER_RE:ie,PHRASAL_WORDS_MODE:pe,QUOTE_STRING_MODE:ae,REGEXP_MODE:Ae,RE_STARTERS_RE:$,SHEBANG:O,TITLE_MODE:zt,UNDERSCORE_IDENT_RE:V,UNDERSCORE_TITLE_MODE:ur});function hr(d,m){d.input[d.index-1]==="."&&m.ignoreMatch()}function gr(d,m){d.className!==void 0&&(d.scope=d.className,delete d.className)}function mr(d,m){m&&d.beginKeywords&&(d.begin="\\b("+d.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",d.__beforeBegin=hr,d.keywords=d.keywords||d.beginKeywords,delete d.beginKeywords,d.relevance===void 0&&(d.relevance=0))}function fr(d,m){Array.isArray(d.illegal)&&(d.illegal=E(...d.illegal))}function br(d,m){if(d.match){if(d.begin||d.end)throw new Error("begin & end are not supported with match");d.begin=d.match,delete d.match}}function xr(d,m){d.relevance===void 0&&(d.relevance=1)}const vr=(d,m)=>{if(!d.beforeMatch)return;if(d.starts)throw new Error("beforeMatch cannot be used with starts");const k=Object.assign({},d);Object.keys(d).forEach(N=>{delete d[N]}),d.keywords=k.keywords,d.begin=f(k.beforeMatch,h(k.begin)),d.starts={relevance:0,contains:[Object.assign(k,{endsParent:!0})]},d.relevance=0,delete k.beforeMatch},yr=["of","and","for","in","not","or","if","then","parent","list","value"],kr="keyword";function qt(d,m,k=kr){const N=Object.create(null);return typeof d=="string"?Q(k,d.split(" ")):Array.isArray(d)?Q(k,d):Object.keys(d).forEach(function(J){Object.assign(N,qt(d[J],m,J))}),N;function Q(J,A){m&&(A=A.map(S=>S.toLowerCase())),A.forEach(function(S){const M=S.split("|");N[M[0]]=[J,wr(M[0],M[1])]})}}function wr(d,m){return m?Number(m):Er(d)?0:1}function Er(d){return yr.includes(d.toLowerCase())}const Gt={},Le=d=>{console.error(d)},Ft=(d,...m)=>{console.log(`WARN: ${d}`,...m)},Oe=(d,m)=>{Gt[`${d}/${m}`]||(console.log(`Deprecated as of ${d}. ${m}`),Gt[`${d}/${m}`]=!0)},Ke=new Error;function Yt(d,m,{key:k}){let N=0;const Q=d[k],J={},A={};for(let S=1;S<=m.length;S++)A[S+N]=Q[S],J[S+N]=!0,N+=T(m[S-1]);d[k]=A,d[k]._emit=J,d[k]._multi=!0}function _r(d){if(Array.isArray(d.begin)){if(d.skip||d.excludeBegin||d.returnBegin)throw Le("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ke;if(typeof d.beginScope!="object"||d.beginScope===null)throw Le("beginScope must be object"),Ke;Yt(d,d.begin,{key:"beginScope"}),d.begin=D(d.begin,{joinWith:""})}}function Sr(d){if(Array.isArray(d.end)){if(d.skip||d.excludeEnd||d.returnEnd)throw Le("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ke;if(typeof d.endScope!="object"||d.endScope===null)throw Le("endScope must be object"),Ke;Yt(d,d.end,{key:"endScope"}),d.end=D(d.end,{joinWith:""})}}function Tr(d){d.scope&&typeof d.scope=="object"&&d.scope!==null&&(d.beginScope=d.scope,delete d.scope)}function Ar(d){Tr(d),typeof d.beginScope=="string"&&(d.beginScope={_wrap:d.beginScope}),typeof d.endScope=="string"&&(d.endScope={_wrap:d.endScope}),_r(d),Sr(d)}function Lr(d){function m(A,S){return new RegExp(p(A),"m"+(d.case_insensitive?"i":"")+(d.unicodeRegex?"u":"")+(S?"g":""))}class k{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(S,M){M.position=this.position++,this.matchIndexes[this.matchAt]=M,this.regexes.push([M,S]),this.matchAt+=T(S)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const S=this.regexes.map(M=>M[1]);this.matcherRe=m(D(S,{joinWith:"|"}),!0),this.lastIndex=0}exec(S){this.matcherRe.lastIndex=this.lastIndex;const M=this.matcherRe.exec(S);if(!M)return null;const re=M.findIndex((je,mt)=>mt>0&&je!==void 0),te=this.matchIndexes[re];return M.splice(0,re),Object.assign(M,te)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(S){if(this.multiRegexes[S])return this.multiRegexes[S];const M=new k;return this.rules.slice(S).forEach(([re,te])=>M.addRule(re,te)),M.compile(),this.multiRegexes[S]=M,M}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(S,M){this.rules.push([S,M]),M.type==="begin"&&this.count++}exec(S){const M=this.getMatcher(this.regexIndex);M.lastIndex=this.lastIndex;let re=M.exec(S);if(this.resumingScanAtSamePosition()&&!(re&&re.index===this.lastIndex)){const te=this.getMatcher(0);te.lastIndex=this.lastIndex+1,re=te.exec(S)}return re&&(this.regexIndex+=re.position+1,this.regexIndex===this.count&&this.considerAll()),re}}function Q(A){const S=new N;return A.contains.forEach(M=>S.addRule(M.begin,{rule:M,type:"begin"})),A.terminatorEnd&&S.addRule(A.terminatorEnd,{type:"end"}),A.illegal&&S.addRule(A.illegal,{type:"illegal"}),S}function J(A,S){const M=A;if(A.isCompiled)return M;[gr,br,Ar,vr].forEach(te=>te(A,S)),d.compilerExtensions.forEach(te=>te(A,S)),A.__beforeBegin=null,[mr,fr,xr].forEach(te=>te(A,S)),A.isCompiled=!0;let re=null;return typeof A.keywords=="object"&&A.keywords.$pattern&&(A.keywords=Object.assign({},A.keywords),re=A.keywords.$pattern,delete A.keywords.$pattern),re=re||/\w+/,A.keywords&&(A.keywords=qt(A.keywords,d.case_insensitive)),M.keywordPatternRe=m(re,!0),S&&(A.begin||(A.begin=/\B|\b/),M.beginRe=m(M.begin),!A.end&&!A.endsWithParent&&(A.end=/\B|\b/),A.end&&(M.endRe=m(M.end)),M.terminatorEnd=p(M.end)||"",A.endsWithParent&&S.terminatorEnd&&(M.terminatorEnd+=(A.end?"|":"")+S.terminatorEnd)),A.illegal&&(M.illegalRe=m(A.illegal)),A.contains||(A.contains=[]),A.contains=[].concat(...A.contains.map(function(te){return Cr(te==="self"?A:te)})),A.contains.forEach(function(te){J(te,M)}),A.starts&&J(A.starts,S),M.matcher=Q(M),M}if(d.compilerExtensions||(d.compilerExtensions=[]),d.contains&&d.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return d.classNameAliases=t(d.classNameAliases||{}),J(d)}function Wt(d){return d?d.endsWithParent||Wt(d.starts):!1}function Cr(d){return d.variants&&!d.cachedVariants&&(d.cachedVariants=d.variants.map(function(m){return t(d,{variants:null},m)})),d.cachedVariants?d.cachedVariants:Wt(d)?t(d,{starts:d.starts?t(d.starts):null}):Object.isFrozen(d)?t(d):d}var Mr="11.11.1";class $r extends Error{constructor(m,k){super(m),this.name="HTMLInjectionError",this.html=k}}const gt=e,Zt=t,Xt=Symbol("nomatch"),Nr=7,Kt=function(d){const m=Object.create(null),k=Object.create(null),N=[];let Q=!0;const J="Could not find the language '{}', did you forget to load/include a language module?",A={disableAutodetect:!0,name:"Plain text",contains:[]};let S={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:u};function M(x){return S.noHighlightRe.test(x)}function re(x){let C=x.className+" ";C+=x.parentNode?x.parentNode.className:"";const j=S.languageDetectRe.exec(C);if(j){const X=_e(j[1]);return X||(Ft(J.replace("{}",j[1])),Ft("Falling back to no-highlight mode for this block.",x)),X?j[1]:"no-highlight"}return C.split(/\s+/).find(X=>M(X)||_e(X))}function te(x,C,j){let X="",ne="";typeof C=="object"?(X=x,j=C.ignoreIllegals,ne=C.language):(Oe("10.7.0","highlight(lang, code, ...args) has been deprecated."),Oe("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),ne=x,X=C),j===void 0&&(j=!0);const me={code:X,language:ne};Qe("before:highlight",me);const Se=me.result?me.result:je(me.language,me.code,j);return Se.code=me.code,Qe("after:highlight",Se),Se}function je(x,C,j,X){const ne=Object.create(null);function me(_,L){return _.keywords[L]}function Se(){if(!R.keywords){se.addText(K);return}let _=0;R.keywordPatternRe.lastIndex=0;let L=R.keywordPatternRe.exec(K),P="";for(;L;){P+=K.substring(_,L.index);const Y=ve.case_insensitive?L[0].toLowerCase():L[0],oe=me(R,Y);if(oe){const[we,Xr]=oe;if(se.addText(P),P="",ne[Y]=(ne[Y]||0)+1,ne[Y]<=Nr&&(tt+=Xr),we.startsWith("_"))P+=L[0];else{const Kr=ve.classNameAliases[we]||we;xe(L[0],Kr)}}else P+=L[0];_=R.keywordPatternRe.lastIndex,L=R.keywordPatternRe.exec(K)}P+=K.substring(_),se.addText(P)}function Je(){if(K==="")return;let _=null;if(typeof R.subLanguage=="string"){if(!m[R.subLanguage]){se.addText(K);return}_=je(R.subLanguage,K,!0,an[R.subLanguage]),an[R.subLanguage]=_._top}else _=ft(K,R.subLanguage.length?R.subLanguage:null);R.relevance>0&&(tt+=_.relevance),se.__addSublanguage(_._emitter,_.language)}function he(){R.subLanguage!=null?Je():Se(),K=""}function xe(_,L){_!==""&&(se.startScope(L),se.addText(_),se.endScope())}function en(_,L){let P=1;const Y=L.length-1;for(;P<=Y;){if(!_._emit[P]){P++;continue}const oe=ve.classNameAliases[_[P]]||_[P],we=L[P];oe?xe(we,oe):(K=we,Se(),K=""),P++}}function tn(_,L){return _.scope&&typeof _.scope=="string"&&se.openNode(ve.classNameAliases[_.scope]||_.scope),_.beginScope&&(_.beginScope._wrap?(xe(K,ve.classNameAliases[_.beginScope._wrap]||_.beginScope._wrap),K=""):_.beginScope._multi&&(en(_.beginScope,L),K="")),R=Object.create(_,{parent:{value:R}}),R}function nn(_,L,P){let Y=w(_.endRe,P);if(Y){if(_["on:end"]){const oe=new r(_);_["on:end"](L,oe),oe.isMatchIgnored&&(Y=!1)}if(Y){for(;_.endsParent&&_.parent;)_=_.parent;return _}}if(_.endsWithParent)return nn(_.parent,L,P)}function Gr(_){return R.matcher.regexIndex===0?(K+=_[0],1):(yt=!0,0)}function Fr(_){const L=_[0],P=_.rule,Y=new r(P),oe=[P.__beforeBegin,P["on:begin"]];for(const we of oe)if(we&&(we(_,Y),Y.isMatchIgnored))return Gr(L);return P.skip?K+=L:(P.excludeBegin&&(K+=L),he(),!P.returnBegin&&!P.excludeBegin&&(K=L)),tn(P,_),P.returnBegin?0:L.length}function Yr(_){const L=_[0],P=C.substring(_.index),Y=nn(R,_,P);if(!Y)return Xt;const oe=R;R.endScope&&R.endScope._wrap?(he(),xe(L,R.endScope._wrap)):R.endScope&&R.endScope._multi?(he(),en(R.endScope,_)):oe.skip?K+=L:(oe.returnEnd||oe.excludeEnd||(K+=L),he(),oe.excludeEnd&&(K=L));do R.scope&&se.closeNode(),!R.skip&&!R.subLanguage&&(tt+=R.relevance),R=R.parent;while(R!==Y.parent);return Y.starts&&tn(Y.starts,_),oe.returnEnd?0:L.length}function Wr(){const _=[];for(let L=R;L!==ve;L=L.parent)L.scope&&_.unshift(L.scope);_.forEach(L=>se.openNode(L))}let et={};function rn(_,L){const P=L&&L[0];if(K+=_,P==null)return he(),0;if(et.type==="begin"&&L.type==="end"&&et.index===L.index&&P===""){if(K+=C.slice(L.index,L.index+1),!Q){const Y=new Error(`0 width match regex (${x})`);throw Y.languageName=x,Y.badRule=et.rule,Y}return 1}if(et=L,L.type==="begin")return Fr(L);if(L.type==="illegal"&&!j){const Y=new Error('Illegal lexeme "'+P+'" for mode "'+(R.scope||"<unnamed>")+'"');throw Y.mode=R,Y}else if(L.type==="end"){const Y=Yr(L);if(Y!==Xt)return Y}if(L.type==="illegal"&&P==="")return K+=`
`,1;if(vt>1e5&&vt>L.index*3)throw new Error("potential infinite loop, way more iterations than matches");return K+=P,P.length}const ve=_e(x);if(!ve)throw Le(J.replace("{}",x)),new Error('Unknown language: "'+x+'"');const Zr=Lr(ve);let xt="",R=X||Zr;const an={},se=new S.__emitter(S);Wr();let K="",tt=0,Ce=0,vt=0,yt=!1;try{if(ve.__emitTokens)ve.__emitTokens(C,se);else{for(R.matcher.considerAll();;){vt++,yt?yt=!1:R.matcher.considerAll(),R.matcher.lastIndex=Ce;const _=R.matcher.exec(C);if(!_)break;const L=C.substring(Ce,_.index),P=rn(L,_);Ce=_.index+P}rn(C.substring(Ce))}return se.finalize(),xt=se.toHTML(),{language:x,value:xt,relevance:tt,illegal:!1,_emitter:se,_top:R}}catch(_){if(_.message&&_.message.includes("Illegal"))return{language:x,value:gt(C),illegal:!0,relevance:0,_illegalBy:{message:_.message,index:Ce,context:C.slice(Ce-100,Ce+100),mode:_.mode,resultSoFar:xt},_emitter:se};if(Q)return{language:x,value:gt(C),illegal:!1,relevance:0,errorRaised:_,_emitter:se,_top:R};throw _}}function mt(x){const C={value:gt(x),illegal:!1,relevance:0,_top:A,_emitter:new S.__emitter(S)};return C._emitter.addText(x),C}function ft(x,C){C=C||S.languages||Object.keys(m);const j=mt(x),X=C.filter(_e).filter(Jt).map(he=>je(he,x,!1));X.unshift(j);const ne=X.sort((he,xe)=>{if(he.relevance!==xe.relevance)return xe.relevance-he.relevance;if(he.language&&xe.language){if(_e(he.language).supersetOf===xe.language)return 1;if(_e(xe.language).supersetOf===he.language)return-1}return 0}),[me,Se]=ne,Je=me;return Je.secondBest=Se,Je}function Rr(x,C,j){const X=C&&k[C]||j;x.classList.add("hljs"),x.classList.add(`language-${X}`)}function bt(x){let C=null;const j=re(x);if(M(j))return;if(Qe("before:highlightElement",{el:x,language:j}),x.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",x);return}if(x.children.length>0&&(S.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(x)),S.throwUnescapedHTML))throw new $r("One of your code blocks includes unescaped HTML.",x.innerHTML);C=x;const X=C.textContent,ne=j?te(X,{language:j,ignoreIllegals:!0}):ft(X);x.innerHTML=ne.value,x.dataset.highlighted="yes",Rr(x,j,ne.language),x.result={language:ne.language,re:ne.relevance,relevance:ne.relevance},ne.secondBest&&(x.secondBest={language:ne.secondBest.language,relevance:ne.secondBest.relevance}),Qe("after:highlightElement",{el:x,result:ne,text:X})}function Or(x){S=Zt(S,x)}const Ir=()=>{Ve(),Oe("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Pr(){Ve(),Oe("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Vt=!1;function Ve(){function x(){Ve()}if(document.readyState==="loading"){Vt||window.addEventListener("DOMContentLoaded",x,!1),Vt=!0;return}document.querySelectorAll(S.cssSelector).forEach(bt)}function Br(x,C){let j=null;try{j=C(d)}catch(X){if(Le("Language definition for '{}' could not be registered.".replace("{}",x)),Q)Le(X);else throw X;j=A}j.name||(j.name=x),m[x]=j,j.rawDefinition=C.bind(null,d),j.aliases&&Qt(j.aliases,{languageName:x})}function Dr(x){delete m[x];for(const C of Object.keys(k))k[C]===x&&delete k[C]}function Hr(){return Object.keys(m)}function _e(x){return x=(x||"").toLowerCase(),m[x]||m[k[x]]}function Qt(x,{languageName:C}){typeof x=="string"&&(x=[x]),x.forEach(j=>{k[j.toLowerCase()]=C})}function Jt(x){const C=_e(x);return C&&!C.disableAutodetect}function jr(x){x["before:highlightBlock"]&&!x["before:highlightElement"]&&(x["before:highlightElement"]=C=>{x["before:highlightBlock"](Object.assign({block:C.el},C))}),x["after:highlightBlock"]&&!x["after:highlightElement"]&&(x["after:highlightElement"]=C=>{x["after:highlightBlock"](Object.assign({block:C.el},C))})}function Ur(x){jr(x),N.push(x)}function zr(x){const C=N.indexOf(x);C!==-1&&N.splice(C,1)}function Qe(x,C){const j=x;N.forEach(function(X){X[j]&&X[j](C)})}function qr(x){return Oe("10.7.0","highlightBlock will be removed entirely in v12.0"),Oe("10.7.0","Please use highlightElement now."),bt(x)}Object.assign(d,{highlight:te,highlightAuto:ft,highlightAll:Ve,highlightElement:bt,highlightBlock:qr,configure:Or,initHighlighting:Ir,initHighlightingOnLoad:Pr,registerLanguage:Br,unregisterLanguage:Dr,listLanguages:Hr,getLanguage:_e,registerAliases:Qt,autoDetection:Jt,inherit:Zt,addPlugin:Ur,removePlugin:zr}),d.debugMode=function(){Q=!1},d.safeMode=function(){Q=!0},d.versionString=Mr,d.regex={concat:f,lookahead:h,either:E,optional:g,anyNumberOfTimes:b};for(const x in Xe)typeof Xe[x]=="object"&&a(Xe[x]);return Object.assign(d,Xe),d},Ie=Kt({});return Ie.newInstance=()=>Kt({}),Tt=Ie,Ie.HighlightJS=Ie,Ie.default=Ie,Tt}var qs=zs();const de=Us(qs),In="[A-Za-z$_][0-9A-Za-z$_]*",Gs=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Fs=["true","false","null","undefined","NaN","Infinity"],Kn=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Vn=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Qn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ys=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ws=[].concat(Qn,Kn,Vn);function Jn(a){const r=a.regex,e=(B,{after:I})=>{const U="</"+B[0].slice(1);return B.input.indexOf(U,I)!==-1},t=In,n={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(B,I)=>{const U=B[0].length+B.index,F=B.input[U];if(F==="<"||F===","){I.ignoreMatch();return}F===">"&&(e(B,{after:U})||I.ignoreMatch());let ce;const Ee=B.input.substring(U);if(ce=Ee.match(/^\s*=/)){I.ignoreMatch();return}if((ce=Ee.match(/^\s+extends\s+/))&&ce.index===0){I.ignoreMatch();return}}},o={$pattern:In,keyword:Gs,literal:Fs,built_in:Ws,"variable.language":Ys},l="[0-9](_?[0-9])*",c=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},g={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"css"}},f={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},v={className:"string",begin:"`",end:"`",contains:[a.BACKSLASH_ESCAPE,h]},T={className:"comment",variants:[a.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),a.C_BLOCK_COMMENT_MODE,a.C_LINE_COMMENT_MODE]},w=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,b,g,f,v,{match:/\$\d+/},p];h.contains=w.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(w)});const H=[].concat(T,h.contains),D=H.concat([{begin:/(\s*)\(/,end:/\)/,keywords:o,contains:["self"].concat(H)}]),G={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:D},Z={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,r.concat(t,"(",r.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},V={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Kn,...Vn]}},ie={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ue={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[G],illegal:/%/},ge={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function $(B){return r.concat("(?!",B.join("|"),")")}const O={match:r.concat(/\b/,$([...Qn,"super","import"].map(B=>`${B}\\s*\\(`)),t,r.lookahead(/\s*\(/)),className:"title.function",relevance:0},W={begin:r.concat(/\./,r.lookahead(r.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ee={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},G]},ae="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+a.UNDERSCORE_IDENT_RE+")\\s*=>",pe={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(ae)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[G]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:D,CLASS_REFERENCE:V},illegal:/#(?![$_A-z])/,contains:[a.SHEBANG({label:"shebang",binary:"node",relevance:5}),ie,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,b,g,f,v,T,{match:/\$\d+/},p,V,{scope:"attr",match:t+r.lookahead(":"),relevance:0},pe,{begin:"("+a.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,a.REGEXP_MODE,{className:"function",begin:ae,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:a.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:D}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:n.begin,end:n.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},ue,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+a.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[G,a.inherit(a.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},W,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[G]},O,ge,Z,ee,{match:/\$[(.]/}]}}const dt="[A-Za-z$_][0-9A-Za-z$_]*",er=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],tr=["true","false","null","undefined","NaN","Infinity"],nr=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],rr=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],ar=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],sr=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ir=[].concat(ar,nr,rr);function Zs(a){const r=a.regex,e=(B,{after:I})=>{const U="</"+B[0].slice(1);return B.input.indexOf(U,I)!==-1},t=dt,n={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(B,I)=>{const U=B[0].length+B.index,F=B.input[U];if(F==="<"||F===","){I.ignoreMatch();return}F===">"&&(e(B,{after:U})||I.ignoreMatch());let ce;const Ee=B.input.substring(U);if(ce=Ee.match(/^\s*=/)){I.ignoreMatch();return}if((ce=Ee.match(/^\s+extends\s+/))&&ce.index===0){I.ignoreMatch();return}}},o={$pattern:dt,keyword:er,literal:tr,built_in:ir,"variable.language":sr},l="[0-9](_?[0-9])*",c=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},g={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"css"}},f={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[a.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},v={className:"string",begin:"`",end:"`",contains:[a.BACKSLASH_ESCAPE,h]},T={className:"comment",variants:[a.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),a.C_BLOCK_COMMENT_MODE,a.C_LINE_COMMENT_MODE]},w=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,b,g,f,v,{match:/\$\d+/},p];h.contains=w.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(w)});const H=[].concat(T,h.contains),D=H.concat([{begin:/(\s*)\(/,end:/\)/,keywords:o,contains:["self"].concat(H)}]),G={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:D},Z={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,r.concat(t,"(",r.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},V={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...nr,...rr]}},ie={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ue={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[G],illegal:/%/},ge={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function $(B){return r.concat("(?!",B.join("|"),")")}const O={match:r.concat(/\b/,$([...ar,"super","import"].map(B=>`${B}\\s*\\(`)),t,r.lookahead(/\s*\(/)),className:"title.function",relevance:0},W={begin:r.concat(/\./,r.lookahead(r.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ee={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},G]},ae="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+a.UNDERSCORE_IDENT_RE+")\\s*=>",pe={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(ae)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[G]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:D,CLASS_REFERENCE:V},illegal:/#(?![$_A-z])/,contains:[a.SHEBANG({label:"shebang",binary:"node",relevance:5}),ie,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,b,g,f,v,T,{match:/\$\d+/},p,V,{scope:"attr",match:t+r.lookahead(":"),relevance:0},pe,{begin:"("+a.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[T,a.REGEXP_MODE,{className:"function",begin:ae,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:a.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:D}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:n.begin,end:n.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},ue,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+a.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[G,a.inherit(a.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},W,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[G]},O,ge,Z,ee,{match:/\$[(.]/}]}}function or(a){const r=a.regex,e=Zs(a),t=dt,n=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],s={begin:[/namespace/,/\s+/,a.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:n},contains:[e.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},l=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],c={$pattern:dt,keyword:er.concat(l),literal:tr,built_in:ir.concat(n),"variable.language":sr},u={className:"meta",begin:"@"+t},p=(f,v,E)=>{const T=f.contains.findIndex(w=>w.label===v);if(T===-1)throw new Error("can not find mode to replace");f.contains.splice(T,1,E)};Object.assign(e.keywords,c),e.exports.PARAMS_CONTAINS.push(u);const h=e.contains.find(f=>f.scope==="attr"),b=Object.assign({},h,{match:r.concat(t,r.lookahead(/\s*\?:/))});e.exports.PARAMS_CONTAINS.push([e.exports.CLASS_REFERENCE,h,b]),e.contains=e.contains.concat([u,s,i,b]),p(e,"shebang",a.SHEBANG()),p(e,"use_strict",o);const g=e.contains.find(f=>f.label==="func.def");return g.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}function lr(a){const r=a.regex,e=r.concat(/[\p{L}_]/u,r.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),t=/[\p{L}0-9._:-]+/u,n={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=a.inherit(s,{begin:/\(/,end:/\)/}),o=a.inherit(a.APOS_STRING_MODE,{className:"string"}),l=a.inherit(a.QUOTE_STRING_MODE,{className:"string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:t,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,l,o,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,i,l,o]}]}]},a.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},n,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:r.concat(/</,r.lookahead(r.concat(e,r.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:e,relevance:0,starts:c}]},{className:"tag",begin:r.concat(/<\//,r.lookahead(r.concat(e,/>/))),contains:[{className:"name",begin:e,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Xs=a=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:a.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:a.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Ks=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],Vs=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],Qs=[...Ks,...Vs],Js=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),ei=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),ti=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),ni=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function ri(a){const r=a.regex,e=Xs(a),t={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},n="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",o=[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[e.BLOCK_COMMENT,t,e.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},e.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+ei.join("|")+")"},{begin:":(:)?("+ti.join("|")+")"}]},e.CSS_VARIABLE,{className:"attribute",begin:"\\b("+ni.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[e.BLOCK_COMMENT,e.HEXCOLOR,e.IMPORTANT,e.CSS_NUMBER_MODE,...o,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...o,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},e.FUNCTION_DISPATCH]},{begin:r.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:n,attribute:Js.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...o,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+Qs.join("|")+")\\b"}]}}function ai(a){const r=a.regex,e=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],o={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},l={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:o,illegal:/#/},u={begin:/\{\{/,relevance:0},p={className:"string",contains:[a.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[a.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[a.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[a.BACKSLASH_ESCAPE,l,u,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[a.BACKSLASH_ESCAPE,l,u,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[a.BACKSLASH_ESCAPE,u,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[a.BACKSLASH_ESCAPE,u,c]},a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]},h="[0-9](_?[0-9])*",b=`(\\b(${h}))?\\.(${h})|\\b(${h})\\.`,g=`\\b|${t.join("|")}`,f={className:"number",relevance:0,variants:[{begin:`(\\b(${h})|(${b}))[eE][+-]?(${h})[jJ]?(?=${g})`},{begin:`(${b})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${g})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${g})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`},{begin:`\\b(${h})[jJ](?=${g})`}]},v={className:"comment",begin:r.lookahead(/# type:/),end:/$/,keywords:o,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},E={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:["self",l,f,p,a.HASH_COMMENT_MODE]}]};return c.contains=[p,f,l],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:o,illegal:/(<\/|\?)|=>/,contains:[l,f,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},p,v,a.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,e],scope:{1:"keyword",3:"title.function"},contains:[E]},{variants:[{match:[/\bclass/,/\s+/,e,/\s*/,/\(\s*/,e,/\s*\)/]},{match:[/\bclass/,/\s+/,e]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[f,E,p]}]}}function si(a){const r={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},e={match:/[{}[\],:]/,className:"punctuation",relevance:0},t=["true","false","null"],n={scope:"literal",beginKeywords:t.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:t},contains:[r,e,a.QUOTE_STRING_MODE,n,a.C_NUMBER_MODE,a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function cr(a){const r=a.regex,e={},t={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[e]}]};Object.assign(e,{className:"variable",variants:[{begin:r.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},t]});const n={className:"subst",begin:/\$\(/,end:/\)/,contains:[a.BACKSLASH_ESCAPE]},s=a.inherit(a.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[a.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},o={className:"string",begin:/"/,end:/"/,contains:[a.BACKSLASH_ESCAPE,e,n]};n.contains.push(o);const l={match:/\\"/},c={className:"string",begin:/'/,end:/'/},u={match:/\\'/},p={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},a.NUMBER_MODE,e]},h=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],b=a.SHEBANG({binary:`(${h.join("|")})`,relevance:10}),g={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[a.inherit(a.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},f=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],v=["true","false"],E={match:/(\/[a-z._-]+)+/},T=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],w=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],H=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],D=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:f,literal:v,built_in:[...T,...w,"set","shopt",...H,...D]},contains:[b,a.SHEBANG(),g,p,s,i,E,o,l,c,u,e]}}function dr(a){const r=a.regex,e={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},t={begin:"^[-\\*]{3,}",end:"$"},n={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},s={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},i={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},o=/[A-Za-z][A-Za-z0-9+.-]*/,l={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:r.concat(/\[.+?\]\(/,o,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},c={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},p=a.inherit(c,{contains:[]}),h=a.inherit(u,{contains:[]});c.contains.push(h),u.contains.push(p);let b=[e,l];return[c,u,p,h].forEach(E=>{E.contains=E.contains.concat(b)}),b=b.concat(c,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:b},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:b}]}]},e,s,c,u,{className:"quote",begin:"^>\\s+",contains:b,end:"$"},n,t,l,i,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}de.registerLanguage("javascript",Jn);de.registerLanguage("js",Jn);de.registerLanguage("typescript",or);de.registerLanguage("ts",or);de.registerLanguage("html",lr);de.registerLanguage("xml",lr);de.registerLanguage("css",ri);de.registerLanguage("python",ai);de.registerLanguage("json",si);de.registerLanguage("bash",cr);de.registerLanguage("shell",cr);de.registerLanguage("markdown",dr);de.registerLanguage("md",dr);q.setOptions({gfm:!0,breaks:!1});const ht=new q.Renderer;ht.heading=function({text:a,depth:r}){const e=a.toLowerCase().replace(/<[^>]+>/g,"").replace(/[^\w一-鿿]+/g,"-").replace(/^-|-$/g,"");return`<h${r} id="${e}">${a}</h${r}>`};function We(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}ht.code=function({text:a,lang:r}){if(r==="mermaid")return`<div class="mermaid">${a}</div>`;const e=r&&de.getLanguage(r);let t="";const n=e?`language-${r}`:"language-plaintext";if(e)try{t=de.highlight(a,{language:r}).value}catch{t=We(a)}else t=We(a);return`<div class="code-block-wrapper"><div class="code-block-header">${r?`<span class="code-lang-label">${We(r)}</span>`:""}<button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.parentElement.querySelector('code').textContent).then(()=>{this.textContent='已复制';setTimeout(()=>{this.textContent='复制'},1500)})">复制</button></div><pre><code class="hljs ${n}">${t}</code></pre></div>`};ht.image=function({href:a,title:r,text:e}){let t;/^https?:\/\//.test(a)?t=a:t=`/images/${a.split("/").pop()||a}`;const n=r?` title="${We(r)}"`:"";return`<img src="${t}" alt="${We(e)}"${n}>`};q.use(js());q.use({renderer:ht});function ii(a){return q.parse(a)}class oi extends HTMLElement{constructor(){super(...arguments);y(this,"_toc",[]);y(this,"_activeId","");y(this,"_article",null);y(this,"_renderedHtml","");y(this,"_scrollHandler",null);y(this,"_headingOffsets",[])}connectedCallback(){const t=new URLSearchParams(window.location.search).get("slug")||window.location.hash.replace("#/","");this._article=Lt.find(n=>n.slug===t)||Lt[0]||null;try{this.render(),this._article&&(this._buildTOC(),this._cloneTOCToDrawer(),this._setupScrollTracking(),this._setupMobileDrawer())}catch(n){console.error("[emu-article] Error in connectedCallback:",n)}}disconnectedCallback(){this._scrollHandler&&window.removeEventListener("scroll",this._scrollHandler)}_buildTOC(){const e=this.querySelector("#article-toc-list");if(!e||!this._article)return;const t=this.querySelector("#article-body");t&&(this._toc=[],t.querySelectorAll("h2, h3").forEach(n=>{const s=n.getAttribute("id")||"";this._toc.push({id:s,text:n.textContent||"",level:n.tagName==="H2"?2:3})}),e.innerHTML=this._toc.map((n,s)=>{const i=n.level===3?"pl-4":"",o=s===0?"toc-active":"toc-inactive";return`
          <a href="#${n.id}"
             data-toc-id="${n.id}"
             class="toc-item ${o} block py-1.5 text-sm rounded-lg transition-all duration-200 ${i}">
            ${n.text}
          </a>
        `}).join(""))}_setupScrollTracking(){const e=this.querySelector("#article-body"),t=this.querySelector("#article-progress-bar"),n=this.querySelector("#article-toc-list");if(!e)return;this._cacheHeadingOffsets();const s=n?Array.from(n.querySelectorAll(".toc-item")):[];this._scrollHandler=()=>{var l;if(t){const c=this.querySelector("#article-container");if(c){const u=c.getBoundingClientRect(),p=c.scrollHeight-window.innerHeight,h=Math.min(100,Math.max(0,-u.top/p*100));t.style.width=`${h}%`}}const i=window.scrollY+100;let o=((l=this._toc[0])==null?void 0:l.id)||"";for(const c of this._headingOffsets)if(c.top<=i)o=c.id;else break;o!==this._activeId&&(this._activeId=o,s.forEach(c=>{c.dataset.tocId===o?(c.classList.remove("toc-inactive"),c.classList.add("toc-active")):(c.classList.remove("toc-active"),c.classList.add("toc-inactive"))}))},window.addEventListener("scroll",this._scrollHandler,{passive:!0}),this._scrollHandler()}_cacheHeadingOffsets(){const e=this.querySelector("#article-body");e&&(this._headingOffsets=[],e.querySelectorAll("h2, h3").forEach(t=>{this._headingOffsets.push({id:t.id,top:t.getBoundingClientRect().top+window.scrollY})}))}_setupMobileDrawer(){const e=this.querySelector("#toc-toggle-btn"),t=this.querySelector("#toc-drawer"),n=this.querySelector("#toc-drawer-overlay"),s=this.querySelector("#toc-drawer-close");if(!e||!t||!n)return;const i=()=>{t.classList.remove("translate-y-full"),n.classList.remove("opacity-0","pointer-events-none"),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"},o=()=>{t.classList.add("translate-y-full"),n.classList.add("opacity-0","pointer-events-none"),document.body.style.overflow="",document.documentElement.style.overflow=""};e.addEventListener("click",i),s==null||s.addEventListener("click",o),n.addEventListener("click",o),t.addEventListener("click",l=>{const c=l.target.closest(".toc-item");if(!c)return;l.preventDefault();const u=c.getAttribute("href");o(),u&&requestAnimationFrame(()=>{const p=document.querySelector(u);p&&p.scrollIntoView({behavior:"smooth",block:"start"})})})}_setupImageLightbox(){const e=this.querySelector("#article-body");e&&e.addEventListener("click",t=>{const n=t.target;if(n.tagName==="IMG"&&n.closest(".article-prose")){const s=n;Bn(s.src,s.alt)}})}render(){if(!this._article){this.innerHTML=`
        <section class="py-20 px-margin-mobile md:px-margin-desktop">
            <div class="max-w-container-max mx-auto text-center">
                <span class="material-symbols-outlined text-[48px] text-on-surface-variant/30 mb-4 block">article</span>
                <p class="text-on-surface-variant/50 text-base">暂无文章内容</p>
            </div>
        </section>`;return}this._renderedHtml=ii(this._article.content);const e=this._renderedHtml;this.innerHTML=`
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
    `,this._renderMermaid(),this._setupImageLightbox()}async _renderMermaid(){const e=this.querySelectorAll(".mermaid");if(e.length!==0)try{const{default:t}=await Ka(async()=>{const{default:n}=await import("./mermaid.core-pBxLuDjh.js").then(s=>s.aH);return{default:n}},[]);t.initialize({startOnLoad:!1,theme:document.documentElement.classList.contains("dark")?"dark":"default",securityLevel:"loose",fontFamily:"'Hanken Grotesk', sans-serif"}),await t.run({nodes:e})}catch(t){console.warn("[emu-article] mermaid render error:",t)}}_cloneTOCToDrawer(){const e=this.querySelector("#article-toc-list"),t=this.querySelector("#toc-drawer-list");e&&t&&(t.innerHTML=e.innerHTML)}_getStyles(){return`
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
    `}}customElements.define("emu-article",oi);class li extends HTMLElement{connectedCallback(){this.render()}render(){const r=on.related.map(t=>`
        <li>
          <a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="${t.href}" target="_blank" rel="noopener noreferrer">
            ${t.label}
          </a>
        </li>
      `).join(""),e=on.bottom.map(t=>`
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
                  src="${Nt}"
                >
                <span class="font-headline-md text-lg font-bold text-on-surface dark:text-surface-bright tracking-tight">
                  ${Pn}
                </span>
              </div>
              <p class="font-body-md text-sm text-on-surface-variant dark:text-surface-variant max-w-sm mb-6 leading-relaxed">
                ${sn}<br>${ea}
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
              © ${new Date().getFullYear()} ${sn}.
            </p>
            <nav class="flex flex-wrap justify-center gap-6" aria-label="页脚导航">
              ${e}
            </nav>
          </div>
        </div>
      </footer>
    `}}customElements.define("emu-footer",li);class ci extends HTMLElement{constructor(){super(...arguments);y(this,"_clickCount",0);y(this,"_clickTimer",null);y(this,"_inputBuffer",[]);y(this,"_isActive",!1);y(this,"_clickHandler",null);y(this,"_keydownHandler",null)}connectedCallback(){this.setupStyles(),this.setupEventListeners(),console.log('[EMU-Stu] Win气泡彩蛋已加载。提示：连击 Logo 3次 或键盘输入 "win" 触发！')}disconnectedCallback(){this._clickHandler&&document.removeEventListener("click",this._clickHandler),this._keydownHandler&&window.removeEventListener("keydown",this._keydownHandler)}setupStyles(){const e=document.createElement("style");e.textContent=`
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
        `,t.style.opacity="1",t.style.transform="translateY(0)",requestAnimationFrame(()=>{const n=t.querySelector(".easter-egg-line1"),s=t.querySelector(".easter-egg-line2");n&&(n.style.opacity="1",n.style.transform="translateY(0)"),s&&(s.style.opacity="1",s.style.transform="translateY(0)")}))},1e3),setTimeout(()=>{this.restoreHero()},6e3)}spawnWinBubbles(){const t=document.createDocumentFragment(),n=[];for(let s=0;s<50;s++){const i=document.createElement("div");i.className="win-bubble-wrapper";const o=document.createElement("div"),l=Math.random()>.5?"bubble-right":"bubble-left";o.className=`win-bubble ${l}`,o.textContent="win";const c=Math.floor(Math.random()*53)+32;o.style.width=`${c}px`,o.style.height=`${c*.72}px`,o.style.fontSize=`${c*.32}px`;const u=Math.random()*90+5,p=Math.random()*80+10;i.style.left=`${u}vw`,i.style.top=`${p}vh`;const h=(Math.random()-.5)*90,b=-Math.random()*120-40;i.style.setProperty("--tx-end",`${h}px`),i.style.setProperty("--ty-end",`${b}px`);const g=Math.random()*1.6,f=Math.random()*.8+2.2;i.style.animation=`win-fly ${f}s cubic-bezier(0.16, 1, 0.3, 1) ${g}s forwards`,o.style.animation=`win-scale-fade ${f}s cubic-bezier(0.25, 1, 0.5, 1) ${g}s forwards`,i.appendChild(o),t.appendChild(i),n.push(i)}document.body.appendChild(t),setTimeout(()=>{n.forEach(s=>s.remove())},5500)}restoreHero(){const e=document.querySelector("emu-hero #hero-content-wrapper"),t=document.querySelector("emu-hero #hero-easter-egg-container");t&&(t.style.opacity="0",t.style.transform="translateY(12px)"),setTimeout(()=>{t&&(t.innerHTML=""),e&&(e.style.opacity="1",e.style.transform="translateY(0) scale(1)",e.style.pointerEvents="auto"),this._isActive=!1},1e3)}}customElements.define("emu-easter-egg",ci);if(typeof window<"u"){document.addEventListener("gesturestart",r=>{r.preventDefault()}),document.addEventListener("touchstart",r=>{r.touches.length>1&&r.preventDefault()},{passive:!1});let a=0;document.addEventListener("touchend",r=>{const e=Date.now();e-a<=300&&r.preventDefault(),a=e},{passive:!1})}export{Ka as _,Us as g};
