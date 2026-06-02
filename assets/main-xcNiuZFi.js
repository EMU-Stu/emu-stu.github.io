var En=Object.defineProperty;var _n=(n,r,e)=>r in n?En(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e;var S=(n,r,e)=>_n(n,typeof r!="symbol"?r+"":r,e);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=e(a);fetch(a.href,s)}})();const Sn="/assets/emu-stu-logo-D3KqYaZd.png",Tt=Sn,br="EMU-Stu",Jt="应急管理大学开源技术组织",Tn="技术服务校园，开源贡献社区",kt="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",An=[{label:"首页",href:"#",active:!0},{label:"技术博客",href:"/blog",active:!1}],Ln="https://github.com/EMU-Stu/EMU-Stu-Site",er={related:[{label:"学校官网",href:"https://www.ncist.edu.cn/"},{label:"教务系统",href:"https://jwc.ncist.edu.cn/"},{label:"图书馆",href:"https://lib.ncist.edu.cn/"}],bottom:[{label:"想知道此网站是如何实现的？点击查看文章",href:Ln,underline:!0}]};class Mn extends HTMLElement{constructor(){super(...arguments);S(this,"_menuOpen",!1)}connectedCallback(){this.classList.add("sticky","top-0","z-50","block","w-full"),this.render(),this.setupEventListeners()}render(){const e=window.location.pathname.includes("/blog")||window.location.pathname.includes("/article"),t=An.map(i=>{let o=i.href,l=i.active;return e?i.label==="首页"?(o="/",l=!1):i.label==="技术博客"&&(o="#",l=!0):i.label==="首页"?(o="#",l=!0):i.label==="技术博客"&&(o="/blog",l=!1),{label:i.label,href:o,active:l}}),a=t.map(i=>`
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
              src="${Tt}"
            >
            <span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">
              ${br}
            </span>
          </div>
 
          <!-- 桌面端导航链接 -->
          <nav class="hidden md:flex items-center gap-8" aria-label="主导航">
            ${a}
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
                <path d="${kt}"/>
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
                  <path d="${kt}"/>
                </svg>
                前往 GitHub
              </a>
            </div>
          </nav>
        </div>
      </header>
    `}setupEventListeners(){const e=this.querySelector("#mobile-menu-toggle"),t=this.querySelector("#mobile-menu");e==null||e.addEventListener("click",()=>{this._menuOpen=!this._menuOpen;const a=e.querySelector(".material-symbols-outlined");this._menuOpen?(t==null||t.classList.remove("max-h-0","opacity-0"),t==null||t.classList.add("max-h-[500px]","opacity-100"),a&&(a.textContent="close"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","关闭菜单")):(t==null||t.classList.add("max-h-0","opacity-0"),t==null||t.classList.remove("max-h-[500px]","opacity-100"),a&&(a.textContent="menu"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","打开菜单"))})}}customElements.define("emu-header",Mn);class Cn extends HTMLElement{constructor(){super(...arguments);S(this,"_dialog",null);S(this,"_titleElement",null)}static get observedAttributes(){return["max-width","subtitle","title"]}attributeChangedCallback(e,t,a){t!==a&&this.update()}connectedCallback(){this.render()}get titleText(){return this.getAttribute("title")||""}set titleText(e){this.setAttribute("title",e)}showModal(){this._dialog&&(this._dialog.showModal(),document.body.style.overflow="hidden")}close(){this._dialog&&this._dialog.close()}update(){const e=this.getAttribute("title")||"",t=this.getAttribute("subtitle")||"",a=this.getAttribute("max-width")||"max-w-2xl";this._titleElement&&(this._titleElement.textContent=e);const s=this.querySelector(".dialog-subtitle");s&&(s.textContent=t,t?s.removeAttribute("style"):s.setAttribute("style","display: none;")),this._dialog&&(this._dialog.className=`bg-[#f5f6f8] dark:bg-[#151718] text-on-surface p-0 shadow-2xl ${a} w-[90%] md:w-full rounded-2xl border border-outline/10 dark:border-outline-variant/10 focus:outline-none overflow-hidden`)}render(){if(this._dialog)return;const e=this.getAttribute("title")||"",t=this.getAttribute("subtitle")||"",a=this.getAttribute("max-width")||"max-w-2xl",s=Array.from(this.childNodes);this.innerHTML="";const i=document.createElement("dialog");i.className=`bg-[#f5f6f8] dark:bg-[#151718] text-on-surface p-0 shadow-2xl ${a} w-[90%] md:w-full rounded-2xl border border-outline/10 dark:border-outline-variant/10 focus:outline-none overflow-hidden`,this._dialog=i;const o=document.createElement("div");o.className="relative p-6 md:p-8 flex flex-col items-center";const l=document.createElement("button");l.className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-highest/50 hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all duration-200 focus:outline-none z-10 cursor-pointer",l.setAttribute("aria-label","关闭浮窗"),l.innerHTML='<span class="material-symbols-outlined text-[20px]">close</span>',l.addEventListener("click",()=>this.close()),o.appendChild(l);const d=document.createElement("div");d.className="text-center mb-8";const u=document.createElement("span");u.className="dialog-subtitle text-xs font-bold tracking-wider text-primary/70 dark:text-primary-fixed-dim/70 uppercase mb-1 block font-mono",u.textContent=t,t||(u.style.display="none"),d.appendChild(u);const p=document.createElement("h3");p.className="text-2xl font-extrabold text-on-surface tracking-tight",p.textContent=e,this._titleElement=p,d.appendChild(p),o.appendChild(d);const h=document.createElement("div");h.className="w-full flex flex-col items-center",s.forEach(g=>h.appendChild(g)),o.appendChild(h);const x=document.createElement("div");x.className="text-center w-full mt-6 pt-4 border-t border-outline-variant/10",x.innerHTML='<p class="text-[10px] text-on-surface-variant/60 font-mono">Powered by EMU-Stu 开源技术组织</p>',o.appendChild(x),i.appendChild(o),this.appendChild(i),i.addEventListener("close",()=>{document.body.style.overflow="",this.dispatchEvent(new CustomEvent("close"))}),i.addEventListener("click",g=>{g.target===i&&this.close()})}}customElements.define("emu-float",Cn);class Rn extends HTMLElement{connectedCallback(){this.render()}render(){const r=this.querySelector('[slot="content"]'),e=Array.from(this.childNodes).filter(d=>d!==r);this.innerHTML="",this.style.display||(this.style.display="inline-block"),this.style.verticalAlign||(this.style.verticalAlign="middle");const t=document.createElement("div");t.className="relative inline-flex items-center group/tooltip",e.forEach(d=>t.appendChild(d));const a=document.createElement("div");a.className="fixed p-3 bg-white dark:bg-[#1e2124] text-on-surface border border-outline-variant/30 dark:border-[#2f3336] rounded-xl shadow-lg invisible opacity-0 pointer-events-none transition-opacity duration-200 z-50 min-w-[260px] max-w-[calc(100vw-24px)] text-left text-xs whitespace-normal font-sans normal-case after:content-[''] after:absolute after:top-full after:left-0 after:w-full after:h-2";const s=document.createElement("div");if(s.className="absolute top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white dark:border-t-[#1e2124]",a.appendChild(s),r)r.removeAttribute("slot"),a.appendChild(r);else{const d=this.getAttribute("text")||"",u=document.createElement("span");u.textContent=d,a.appendChild(u)}t.appendChild(a),this.appendChild(t);let i=!1;const o=()=>{i=!0;const u=(t.firstElementChild||t).getBoundingClientRect();a.style.visibility="hidden",a.style.transition="none",a.style.position="fixed",a.style.left="-9999px",a.style.top="-9999px",a.style.transform="none";const p=a.getBoundingClientRect(),h=window.innerWidth||document.documentElement.clientWidth,x=u.left+(u.width-p.width)/2,g=u.top-p.height-8;let m=Math.max(12,x);m+p.width>h-12&&(m=h-12-p.width),a.style.left=`${m}px`,a.style.top=`${g}px`;const M=u.left+u.width/2-m,A=16,O=p.width-16,X=Math.max(A,Math.min(O,M));s.style.left=`${X}px`,s.style.transform="translateX(-50%)",requestAnimationFrame(()=>{requestAnimationFrame(()=>{i&&(a.style.transition="",a.style.visibility="visible",a.style.opacity="1",a.style.pointerEvents="auto")})})},l=()=>{i=!1,a.style.transition="",a.style.opacity="0",a.style.pointerEvents="none",setTimeout(()=>{i||(a.style.visibility="hidden")},200)};t.addEventListener("mouseenter",o),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mouseleave",l)}}customElements.define("emu-tooltip",Rn);class Nn extends HTMLElement{connectedCallback(){this.render(),this.setupEventListeners()}render(){this.innerHTML=`
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
          src="${Tt}"
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
    `}setupEventListeners(){const r=this.querySelector("#hero-join-btn"),e=this.querySelector("#hero-projects-btn"),t=this.querySelector("#hero-portals-btn"),a=this.querySelector("#hero-labs-btn");r==null||r.addEventListener("click",()=>{var s;(s=document.querySelector("#about-section"))==null||s.scrollIntoView({behavior:"smooth"})}),e==null||e.addEventListener("click",()=>{var s;(s=document.querySelector("#projects-section"))==null||s.scrollIntoView({behavior:"smooth"})}),t==null||t.addEventListener("click",()=>{var s;(s=document.querySelector("#services-section"))==null||s.scrollIntoView({behavior:"smooth"})}),a==null||a.addEventListener("click",()=>{var s;(s=document.querySelector("#labs-section"))==null||s.scrollIntoView({behavior:"smooth"})})}}customElements.define("emu-hero",Nn);const $n="/assets/2025-2026-calendar--jsKTcZs.jpg",On=Object.freeze(Object.defineProperty({__proto__:null,default:$n},Symbol.toStringTag,{value:"Module"})),In="/assets/2025-2026-schedule-OcUtbm2V.jpg",Dn=Object.freeze(Object.defineProperty({__proto__:null,default:In},Symbol.toStringTag,{value:"Module"})),Pn=[{icon:"restaurant",title:"校园食堂",description:"今日吃什么？查看各大食堂菜谱与就餐反馈",href:"#",soon:!1},{icon:"diversity_3",title:"校园社团",description:"了解校园缤纷社团，发现你的兴趣所在",href:"#",soon:!1},{icon:"map",title:"校园地图",description:"手绘与数字校园地图，快速定位教学楼与宿舍",href:"#"},{icon:"download",title:"资料下载",description:"校园常用表格、课件、软件及办公模版快速下载",href:"#"},{icon:"calendar_month",title:"校历查询",description:"查看最新学期安排，合理规划学习与假期时间",href:"#calendar"}],tr={newFeatureRequest:"https://acnpe6t9x5o7.feishu.cn/share/base/form/shrcn3EmVQLykJnNfFimFwNGRsg",featureFeedback:"https://acnpe6t9x5o7.feishu.cn/share/base/form/shrcn5HRkWpziz9ddvthLFAqbQE"},Bn="/assets/survey-qrcode-feature-feedbck-CXXN6x3o.png",Hn="/assets/survey-qrcode-new-feature-request-DULuK1K3.png",rr=Object.assign({"../../assets/university_calendar/2025-2026-calendar.jpg":On,"../../assets/university_calendar/2025-2026-schedule.jpg":Dn});class zn extends HTMLElement{connectedCallback(){this.render(),this.initFeedbackDialog(),this.initCalendarDialog()}render(){const r=Pn.map(e=>`
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
            href="${tr.newFeatureRequest}"
            target="_blank"
            class="flex flex-col items-center group cursor-pointer w-full max-w-[280px] md:max-w-[320px] transition-transform duration-300"
          >
            <div class="overflow-hidden rounded-2xl shadow-md border border-outline-variant/10 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300 bg-white">
              <img
                src="${Hn}"
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
            href="${tr.featureFeedback}"
            target="_blank"
            class="flex flex-col items-center group cursor-pointer w-full max-w-[280px] md:max-w-[320px] transition-transform duration-300"
          >
            <div class="overflow-hidden rounded-2xl shadow-md border border-outline-variant/10 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300 bg-white">
              <img
                src="${Bn}"
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
            class="max-w-full h-auto object-contain rounded-lg transition-opacity duration-200 opacity-0"
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
    `}initFeedbackDialog(){const r=this.querySelector("#feedback-trigger"),e=this.querySelector("#feedback-dialog");!r||!e||r.addEventListener("click",t=>{t.preventDefault(),e.showModal()})}initCalendarDialog(){const r=this.querySelector("#calendar-dialog"),e=this.querySelector("#calendar-download-btn"),t=this.querySelector("#calendar-img"),a=this.querySelector("#calendar-year-label"),s=this.querySelector("#btn-year-prev"),i=this.querySelector("#btn-year-next"),o=this.querySelector("#tooltip-prev"),l=this.querySelector("#tooltip-next");if(!r)return;const d={};for(const m in rr){const M=(m.split("/").pop()||"").match(/^(\d{4}-\d{4})-(calendar|schedule)\.(png|jpg|jpeg|webp)$/i);if(M){const A=M[1],O=M[2].toLowerCase(),X=M[3],G=rr[m].default;d[A]||(d[A]={});const j=O==="calendar"?"校历":"作息时间表";d[A][O]={src:G,filename:`EMU-NCIST-${A}-${O.charAt(0).toUpperCase()+O.slice(1)}.${X}`,label:`${A} 学年 ${j}`}}}const u=Object.keys(d).sort((m,y)=>y.localeCompare(m));let p=0,h="calendar";const x=(m=!1)=>{if(u.length===0){a&&(a.textContent="暂无数据");return}const y=u[p];a&&(a.textContent=`${y} 学年`);const M=d[y];if(!M)return;let A=h;if(!M[A]){const W=Object.keys(M)[0];W&&(A=W)}const O=M[A];if(!O||!t)return;this.querySelectorAll(".type-toggle-btn").forEach(W=>{const Q=W.getAttribute("data-type")||"",de=!!M[Q];W.classList.remove("bg-white","dark:bg-[#323639]","text-primary","dark:text-primary-fixed-dim","shadow-sm"),W.classList.add("text-on-surface-variant/80","hover:text-on-surface"),de?(W.removeAttribute("disabled"),W.classList.remove("opacity-40","cursor-not-allowed"),Q===A&&(W.classList.remove("text-on-surface-variant/80","hover:text-on-surface"),W.classList.add("bg-white","dark:bg-[#323639]","text-primary","dark:text-primary-fixed-dim","shadow-sm"))):(W.setAttribute("disabled","true"),W.classList.add("opacity-40","cursor-not-allowed"))});const G=p===u.length-1,j=p===0;s&&(G?(s.setAttribute("disabled","true"),s.classList.add("opacity-30","cursor-not-allowed"),s.classList.remove("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),s.classList.add("bg-transparent"),o&&o.classList.remove("hidden")):(s.removeAttribute("disabled"),s.classList.remove("opacity-30","cursor-not-allowed","bg-transparent"),s.classList.add("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),o&&o.classList.add("hidden"))),i&&(j?(i.setAttribute("disabled","true"),i.classList.add("opacity-30","cursor-not-allowed"),i.classList.remove("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),i.classList.add("bg-transparent"),l&&l.classList.remove("hidden")):(i.removeAttribute("disabled"),i.classList.remove("opacity-30","cursor-not-allowed","bg-transparent"),i.classList.add("hover:bg-surface-container-high","bg-white","dark:bg-[#323639]","shadow-sm"),l&&l.classList.add("hidden"))),m?(t.src=O.src,t.alt=O.label,t.classList.remove("opacity-0"),r.titleText=O.label):(t.style.opacity="0.3",setTimeout(()=>{t.src=O.src,t.alt=O.label,r.titleText=O.label,t.style.opacity="1"},100))};this.addEventListener("click",m=>{const y=m.target.closest("a");y&&y.getAttribute("href")==="#calendar"&&(m.preventDefault(),r.showModal(),x(!0))}),s&&s.addEventListener("click",m=>{m.preventDefault(),p<u.length-1&&(p++,x())}),i&&i.addEventListener("click",m=>{m.preventDefault(),p>0&&(p--,x())}),this.querySelectorAll(".type-toggle-btn").forEach(m=>{m.addEventListener("click",y=>{const A=y.currentTarget.getAttribute("data-type");A&&A!==h&&(h=A,x())})}),e&&e.addEventListener("click",m=>{if(m.preventDefault(),u.length===0)return;const y=u[p],M=d[y];if(!M)return;let A=h;if(!M[A]){const G=Object.keys(M)[0];G&&(A=G)}const O=M[A];if(!O)return;const X=document.createElement("a");X.href=O.src,X.download=O.filename,document.body.appendChild(X),X.click(),document.body.removeChild(X)})}}customElements.define("emu-services",zn);class jn extends HTMLElement{constructor(){super(...arguments);S(this,"handleClick",e=>{this.getAttribute("soon")==="true"&&e.preventDefault()})}static get observedAttributes(){return["icon","title","description","href","soon"]}connectedCallback(){this.style.display="block",this.render(),this.addEventListener("click",this.handleClick)}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}attributeChangedCallback(){this.isConnected&&this.render()}render(){const e=this.getAttribute("icon")||"help",t=this.getAttribute("title")||"",a=this.getAttribute("description")||"",s=this.getAttribute("href")||"#",i=this.getAttribute("soon")==="true",o=i?"group flex flex-col items-center justify-center text-center gap-2 md:gap-4 h-full bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-4 md:p-8 shadow-sm relative overflow-hidden cursor-not-allowed select-none opacity-60":"group flex flex-col items-center justify-center text-center gap-2 md:gap-4 h-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 md:p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden",l=i?"":'<div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>',d=i?"w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container/60 text-secondary/70 flex items-center justify-center relative z-10":"w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary group-hover:scale-110 transition-all duration-300 relative z-10",u=i?"font-headline-md font-bold text-base md:text-headline-md text-on-surface/70 relative z-10":"font-headline-md font-bold text-base md:text-headline-md text-on-surface relative z-10 group-hover:text-primary transition-colors duration-300",p=i?"text-xs md:text-sm text-on-surface-variant/60 relative z-10 line-clamp-2 max-w-[240px] leading-relaxed":"text-xs md:text-sm text-on-surface-variant/80 relative z-10 line-clamp-2 max-w-[240px] leading-relaxed",h=i?`
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
        ${a?`
          <p class="${p}">
            ${a}
          </p>
        `:""}
      </a>
    `}}customElements.define("emu-service-card",jn);const Un=[{name:"EmergencyTeleoperatedRobotSystem-Jetson",description:"应急遥操作机器人系统 Jetson 端：机器人主控核心，负责为客户端提供三维场景重建与目标检测功能，以及接收和处理来自客户端的控制指令。",languages:["C++","Python"],stars:48,color:"#3572A5",href:"https://github.com/EMU-Stu/EmergencyTeleoperatedRobotSystem-Jetson"},{name:"EmergencyTeleoperatedRobotSystem-Unity",description:"应急遥操作机器人系统 Unity 端：机器人控制客户端，基于 MRTK 框架并面向 HoloLens 2 平台开发，提供 3D 虚拟孪生、遥操作与三维现场呈现。",languages:["C#"],stars:62,color:"#178600",href:"https://github.com/EMU-Stu/EmergencyTeleoperatedRobotSystem-Unity"},{name:"skills",description:"校园相关 Agent Skills。",languages:["Markdown"],stars:128,color:"#083fa6",href:"https://github.com/EMU-Stu/skills"},{name:"EMU-Stu-Site",description:"EMU-Stu 官网源码。",languages:["TypeScript","HTML","CSS"],stars:35,color:"#3178c6",href:"https://github.com/EMU-Stu/EMU-Stu-Site"},{name:"EMU-Stu-Blog",description:"EMU-Stu 技术博客的内容仓库，包含所有的文章 Markdown 源文件与相关静态资源，欢迎你的投稿。",languages:["Markdown"],stars:28,color:"#083fa6",href:"https://github.com/EMU-Stu/EMU-Stu-Blog"},{name:"CUEDC-2024-Drone-code",description:"2024 年全国大学生电子设计竞赛无人机赛题方案。基于 Fast-LIO 激光 SLAM 实现室内自主定位，融合 PX4 飞控、STM32 下位机路径规划 与 OpenMV 视觉识别，完成自主航点飞行与目标检测任务。",languages:["C"],stars:56,color:"#555555",href:"https://github.com/EMU-Stu/CUEDC-2024-Drone-code"},{name:"IOT-lab-web",description:"物联网实验室实验室门户站点，基于 Next.js + Tailwind 的纯前端实验室站点，包含新生导览、毕业路径文章与项目索引。",languages:["TypeScript","CSS","JavaScript"],stars:0,color:"#3178c6",href:"https://github.com/EMU-Stu/IOT-lab-web"}];class qn extends HTMLElement{constructor(){super(...arguments);S(this,"_displayedProjects",[])}connectedCallback(){this.shuffleProjects(),this.render(),this.loadCommitStats(),this.setupEventListeners()}shuffleProjects(){const e=[...Un];for(let t=e.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}this._displayedProjects=e.slice(0,4)}getLanguageColor(e,t){return{TypeScript:"#3178c6",JavaScript:"#f1e05a",HTML:"#e34c26",CSS:"#563d7c","C#":"#178600","C++":"#f34b7d",C:"#555555",Python:"#3572A5",Markdown:"#083fa6"}[e]||t}generateCardHtml(e){const t=e.languages.map(a=>`
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full" style="background-color: ${this.getLanguageColor(a,e.color)}"></span>
          <span>${a}</span>
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
                <path d="${kt}"/>
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
    `}async loadCommitStats(){try{const e=await fetch("https://cdn.jsdelivr.net/gh/EMU-Stu/EMU-Stu-Site@stats-data/stats.json",{cache:"no-store"});if(!e.ok)throw new Error(`Failed to fetch stats: ${e.status}`);const t=await e.json();if(!Array.isArray(t))return;const a=480*60*1e3,s=new Date,i=s.getTime()+s.getTimezoneOffset()*60*1e3+a,o=[];for(let p=1;p<=7;p++){const h=new Date(i-p*24*60*60*1e3),x=h.getFullYear(),g=String(h.getMonth()+1).padStart(2,"0"),m=String(h.getDate()).padStart(2,"0");o.push(`${x}-${g}-${m}`)}const l=t.filter(p=>p&&o.includes(p.date)),d=l.reduce((p,h)=>p+(h.total_additions||0),0),u=l.reduce((p,h)=>p+(h.total_deletions||0),0);if(d>0){const p=this.querySelector("#commit-stats-span");if(p){const h=d.toLocaleString(),x=u.toLocaleString(),g=`${o[o.length-1]} 至 ${o[0]}`;p.innerHTML=`
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
          `,p.style.display="inline"}}}catch(e){console.error("加载项目代码提交统计数据失败:",e)}}setupEventListeners(){const e=this.querySelector("#projects-shuffle-btn"),t=this.querySelector("#project-cards-container"),a=this.querySelector("#shuffle-icon");e==null||e.addEventListener("click",()=>{a&&(a.classList.add("rotate-180"),setTimeout(()=>a.classList.remove("rotate-180"),500)),t&&(t.style.opacity="0"),setTimeout(()=>{this.shuffleProjects();const i=this._displayedProjects.map(o=>this.generateCardHtml(o)).join("");t&&(t.innerHTML=i,t.style.opacity="1")},300)});const s=this.querySelector("#view-heatmap-btn");s==null||s.addEventListener("click",i=>{i.preventDefault();const o=this.querySelector("emu-activity-heatmap");o&&o.open()})}}customElements.define("emu-projects",qn);class Gn extends HTMLElement{constructor(){super(...arguments);S(this,"_historyData",[]);S(this,"_dataLoaded",!1)}connectedCallback(){this.renderBaseStructure(),this.fetchStats()}async fetchStats(){try{const e=await fetch("https://cdn.jsdelivr.net/gh/EMU-Stu/EMU-Stu-Site@stats-data/stats.json",{cache:"no-store"});if(!e.ok)throw new Error(`Failed to fetch stats: ${e.status}`);const t=await e.json();if(!Array.isArray(t))throw new Error("Data format error: expected an array");this._historyData=t,this._dataLoaded=!0}catch(e){console.error("加载组织活跃度统计失败:",e)}}renderBaseStructure(){this.innerHTML=`
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
    `;const e=this.querySelector("#heatmap-dialog"),t=this.querySelector("#close-heatmap-dialog");t==null||t.addEventListener("click",()=>this.close()),e==null||e.addEventListener("click",a=>{a.target===e&&this.close()})}open(){const e=this.querySelector("#heatmap-dialog");e&&(e.showModal(),requestAnimationFrame(()=>{e.classList.remove("opacity-0","scale-95")}),this.renderHeatmap(),this.scrollToLatest())}close(){const e=this.querySelector("#heatmap-dialog");if(!e)return;e.classList.add("opacity-0","scale-95");const t=()=>{e.close(),e.removeEventListener("transitionend",t)};e.addEventListener("transitionend",t)}scrollToLatest(){setTimeout(()=>{const e=this.querySelector(".overflow-x-auto");e&&(e.scrollLeft=e.scrollWidth)},50)}getDayVal(e){var u,p,h,x;const t=this._historyData.find(g=>g.date===e);if(!t)return{val:0,additions:0,deletions:0,commits:0,commitsTracked:!1,dateTracked:!1,score:0};const a=((u=t.metrics)==null?void 0:u.additions)??t.total_additions??0,s=((p=t.metrics)==null?void 0:p.deletions)??t.total_deletions??0,i=((h=t.metrics)==null?void 0:h.lines_changed)??a+s;let o=0,l=!1;typeof((x=t.metrics)==null?void 0:x.commits)=="number"?(o=t.metrics.commits,l=!0):t.repos&&t.repos.some(m=>{var y;return typeof((y=m.metrics)==null?void 0:y.commits)=="number"})&&(o=t.repos.reduce((m,y)=>{var M;return m+(((M=y.metrics)==null?void 0:M.commits)??0)},0),l=!0);const d=o*20+Math.log2(i+1)*10;return{val:i,additions:a,deletions:s,commits:o,commitsTracked:l,dateTracked:!0,score:d}}calculateYearQuantiles(e){const t=[];if(e.forEach(s=>{const{score:i}=this.getDayVal(s);i>0&&t.push(i)}),t.length===0)return{q25:1,q50:2,q75:3};t.sort((s,i)=>s-i);const a=s=>{const i=Math.floor(t.length*s);return t[Math.min(i,t.length-1)]};return{q25:a(.25),q50:a(.5),q75:a(.75)}}renderHeatmap(){if(!this._dataLoaded){const I=this.querySelector("#dialog-heatmap-grid");I&&(I.innerHTML='<span class="text-xs text-on-surface-variant/70 py-6">正在加载活跃度数据...</span>');return}const e=480*60*1e3,t=new Date,a=new Date(t.getTime()+t.getTimezoneOffset()*60*1e3+e),s=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`,i=new Date(2025,4,1),o=a,l=i.getDay(),d=new Date(i.getTime()-l*24*60*60*1e3),u=o.getDay(),p=new Date(o.getTime()+(6-u)*24*60*60*1e3),h=[];let x=new Date(d);for(;x<=p;){const I=x.getFullYear(),H=String(x.getMonth()+1).padStart(2,"0"),q=String(x.getDate()).padStart(2,"0");h.push(`${I}-${H}-${q}`),x.setDate(x.getDate()+1)}const m=h.length/7,y="2025-05-01",M=h.filter(I=>I>=y&&I<=s);let A=0,O=0,X=0,G=0,j="";M.forEach(I=>{const{val:H,commits:q}=this.getDayVal(I);(H>0||q>0)&&(A+=H,O+=q,X++,H>G&&(G=H,j=I))});const W=this.calculateYearQuantiles(M),Q=[];for(let I=0;I<m;I++){const H=[];for(let q=0;q<7;q++)H.push(h[I*7+q]);Q.push(H)}let de="",ge=-10,pe="";Q.forEach((I,H)=>{const le=`${new Date(I[3]).getMonth()+1}月`;le!==pe&&H-ge>=3&&H<m-1&&(de+=`<div class="absolute text-[10px] text-on-surface-variant/50 font-mono select-none whitespace-nowrap" style="left: calc(${H} * (20px + 2px));">${le}</div>`,pe=le,ge=H)});let L="";Q.forEach(I=>{let H="";I.forEach(q=>{const le=q>s;if(q<"2025-05-01"||le)H+=`
            <div class="w-[20px] h-[20px] relative flex-shrink-0">
              <div class="w-[20px] h-[20px] rounded-[2px] bg-transparent pointer-events-none"></div>
            </div>
          `;else{const{val:Ue,additions:at,deletions:st,commits:it,commitsTracked:ot,dateTracked:Dt,score:ke}=this.getDayVal(q);let Ae=0;ke>0&&(ke<=W.q25?Ae=1:ke<=W.q50?Ae=2:ke<=W.q75?Ae=3:Ae=4);const lt=["bg-[#ebedf0] dark:bg-[#161b22] hover:scale-125 hover:z-10","bg-[#9be9a8] dark:bg-[#0e4429] hover:scale-125 hover:z-10","bg-[#40c463] dark:bg-[#006d32] hover:scale-125 hover:z-10","bg-[#30a14e] dark:bg-[#26a641] hover:scale-125 hover:z-10","bg-[#216e39] dark:bg-[#39d353] hover:scale-125 hover:z-10"],ct=Ue.toLocaleString(),dt=ot?`<strong>${it}</strong> 次`:'<span style="opacity:0.45;font-style:italic;">未统计</span>',ut=Dt?`<strong>${ct}</strong> 行${Ue>0?` (新增 +${at.toLocaleString()} / 删除 -${st.toLocaleString()})`:""}`:'<span style="opacity:0.45;font-style:italic;">未统计</span>',pt=`提交次数：${dt}<br/>变更代码：${ut}`;H+=`
            <div class="w-[20px] h-[20px] relative flex-shrink-0 flex items-center justify-center">
              <emu-tooltip style="display: flex; width: 20px; height: 20px; align-items: center; justify-content: center;">
                <div 
                  class="w-[20px] h-[20px] rounded-[2px] ${lt[Ae]} cursor-pointer transition-all duration-200"
                  data-date="${q}"
                ></div>
                <div slot="content" class="min-w-[180px] p-0.5 select-none">
                  <span class="block font-bold text-on-surface mb-1.5 font-mono text-[11px]">${q}</span>
                  <span class="block text-on-surface-variant/90 text-[11px] leading-relaxed">${pt}</span>
                </div>
              </emu-tooltip>
            </div>
          `}}),L+=`<div class="flex flex-col gap-[2px]">${H}</div>`});const C=this.querySelector("#dialog-heatmap-months");C&&(C.innerHTML=de);const F=this.querySelector("#dialog-heatmap-grid");F&&(F.innerHTML=L);const ee=this.querySelector("#year-total-lines");ee&&(ee.textContent=`${A.toLocaleString()} 行`);const ae=this.querySelector("#year-total-commits");ae&&(ae.textContent=`${O.toLocaleString()} 次`);const ue=this.querySelector("#year-active-days");ue&&(ue.textContent=`${X} 天`);const P=this.querySelector("#year-max-lines");P&&(P.textContent=`${G.toLocaleString()} 行${j?` (${j})`:""}`)}}customElements.define("emu-activity-heatmap",Gn);const nr=[{name:"物联网实验室（AKA 数字孪生暨虚拟现实实验室）",code:"IoT-Lab",description:"开展物联网架构、嵌入式硬件开发与实时数据采集研究，结合数字孪生与虚拟现实技术实现物理世界的数字化映射。",department:"计算机科学与工程学院",professors:["陈超"],tags:["物联网","数字孪生","虚拟现实","嵌入式"],icon:"sensors",href:"https://emu-stu.github.io/IOT-lab-web/"},{name:"河北省安全生产与应急处置特种机器人重点实验室",code:"SER-Lab",description:"致力于应急救援、特种作业机器人的研发，开展智能环境感知、鲁棒控制及人机协作技术等关键课题攻关。",department:"应急管理学院",tags:["特种机器人","应急处置","智能控制","环境感知"],icon:"precision_manufacturing"},{name:"ArkLab方舟实验室",code:"Ark-Lab",description:"专注于学生技术创新与工程实践，覆盖全栈软件开发、算法研究及软硬件协同设计，培养核心技术人才。",department:"电子信息工程学院",tags:["软件工程","算法设计","技术创新","全栈开发"],icon:"sailing"},{name:"利刃网安攻防实验室",code:"Blade-Sec-Lab",description:"聚焦于网络空间安全，开展渗透测试、漏洞挖掘、红蓝对抗以及安全防御体系建设等核心攻防技术研究。",department:"计算机科学与工程学院",tags:["网络安全","漏洞挖掘","红蓝对抗","渗透测试"],icon:"shield_lock"}];class Fn extends HTMLElement{constructor(){super(...arguments);S(this,"_resizeObserver",null)}connectedCallback(){this.render(),this.setupResponsiveness()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null)}generateCardHtml(e){const t=e.tags.map(s=>`
        <span
          class="inline-block text-[10px] md:text-xs font-mono px-2 py-0.5 rounded-lg border border-primary/15 text-primary/80 bg-primary/5 transition-colors duration-300 whitespace-nowrap"
        >${s}</span>
      `).join(""),a=e.href?`
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
            ${a}
          </div>
        </div>
      </div>
    `}render(){const e=nr.map(t=>this.generateCardHtml(t)).join("");this.innerHTML=`
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
    `}setupResponsiveness(){const e=this.querySelector("#labs-marquee"),t=this.querySelector("#labs-track");if(!e||!t)return;const a=nr.map(o=>this.generateCardHtml(o)).join("");let s=null,i=null;this._resizeObserver=new ResizeObserver(()=>{i===null&&(i=window.setTimeout(()=>{i=null,e.classList.remove("scroll-active"),t.style.width="max-content",t.style.justifyContent="flex-start",t.innerHTML=a;const o=e.clientWidth,d=t.scrollWidth>o;d!==s&&(s=d,d?(e.classList.add("scroll-active"),t.style.width="",t.style.justifyContent=""):(e.scrollLeft=0,t.style.width="",t.style.justifyContent=""))},150))}),this._resizeObserver.observe(e)}}customElements.define("emu-labs",Fn);const Zn=`---
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

`,Xn=Object.freeze(Object.defineProperty({__proto__:null,default:Zn},Symbol.toStringTag,{value:"Module"}));function Wn(n,r){var u;const e=((u=n.split("/").pop())==null?void 0:u.replace(".md",""))||"untitled",t=r.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/),a={};let s=r;if(t){const p=t[1];s=t[2],p.split(`
`).forEach(h=>{const x=h.trim();if(!x||x.startsWith("#"))return;const g=x.indexOf(":");if(g!==-1){const m=x.slice(0,g).trim();let y=x.slice(g+1).trim();(y.startsWith('"')&&y.endsWith('"')||y.startsWith("'")&&y.endsWith("'"))&&(y=y.slice(1,-1)),a[m]=y}})}const i=s.match(/^\s*#\s+(.+)$/m);let o=a.title;i&&(o||(o=i[1].trim()),s=s.replace(/^\s*#\s+.+$/m,"").trim()),o||(o=e);const l=p=>p.slice(0,300).replace(/[#*`~_\-]/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/\s+/g," ").trim().slice(0,150)+"...",d=a.excerpt||l(s);return{slug:a.slug||e,title:o,excerpt:d,category:a.category||"技术沉淀",subCategory:a.subCategory||"General",author:a.author||"Anonymous",authorAvatar:a.authorAvatar||(a.author?a.author[0].toUpperCase():"A"),date:a.date||new Date().toISOString().split("T")[0],readTime:a.readTime||`${Math.max(1,Math.ceil(s.length/500))} min`,content:s,filePath:n}}const ar=Object.assign({"../../docs/articles/github_repo_code_change_stats_howto.md":Xn}),xr=[];for(const n in ar)try{const r=ar[n];let e="";if(typeof r=="string")e=r;else if(r&&typeof r.default=="string")e=r.default;else{console.warn(`[article.ts] Failed to load raw content for ${n}:`,r);continue}const t=Wn(n,e);xr.push(t)}catch(r){console.error(`[article.ts] Error parsing markdown article at ${n}:`,r)}const wt=[...xr].sort((n,r)=>new Date(r.date).getTime()-new Date(n.date).getTime()),Yn=wt.map(n=>({category:n.category,subCategory:n.subCategory,href:`/article?slug=${n.slug}`,title:n.title,excerpt:n.excerpt,authorAvatar:n.authorAvatar,author:n.author,date:n.date,readTime:n.readTime}));class Kn extends HTMLElement{constructor(){super(...arguments);S(this,"_currentCategory","全部");S(this,"_searchQuery","");S(this,"_currentPage",1);S(this,"_postsPerPage",4);S(this,"_categories",["全部","后端开发","前端架构","AI/ML","应急科技","开源治理"]);S(this,"_searchHandler",null);S(this,"_searchInput",null)}connectedCallback(){this.render(),this.setupEventListeners()}disconnectedCallback(){this._searchHandler&&this._searchInput&&this._searchInput.removeEventListener("input",this._searchHandler)}getFilteredPosts(){return Yn.filter(e=>{const t=this._currentCategory==="全部"||e.category===this._currentCategory,a=this._searchQuery.trim().toLowerCase(),s=!a||e.title.toLowerCase().includes(a)||e.excerpt.toLowerCase().includes(a);return t&&s})}generatePostHtml(e){return`
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
      `}).join("")}generatePaginationHtml(e){if(e<=1)return"";let t="";const a=this._currentPage===1;t+=`
      <button
        id="blog-prev-btn"
        class="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant/20 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:pointer-events-none disabled:active:scale-100"
        ${a?"disabled":""}
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
    `}render(){const e=this.getFilteredPosts(),t=Math.ceil(e.length/this._postsPerPage);this._currentPage>t&&t>0&&(this._currentPage=1);const a=(this._currentPage-1)*this._postsPerPage,s=e.slice(a,a+this._postsPerPage);let i="";s.length>0?i=s.map(o=>this.generatePostHtml(o)).join(""):i=`
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
    `}refreshList(){const e=this.querySelector("#blog-posts-list"),t=this.querySelector("#blog-pagination-container"),a=this.getFilteredPosts(),s=Math.ceil(a.length/this._postsPerPage);this._currentPage>s&&s>0&&(this._currentPage=1);const i=(this._currentPage-1)*this._postsPerPage,o=a.slice(i,i+this._postsPerPage);e&&(e.style.opacity="0"),setTimeout(()=>{e&&(o.length>0?e.innerHTML=o.map(l=>this.generatePostHtml(l)).join(""):e.innerHTML=`
            <div class="flex flex-col items-center justify-center py-20 text-center text-on-surface-variant/50 dark:text-surface-variant/50">
              <span class="material-symbols-outlined text-[48px] mb-4">search_off</span>
              <p class="text-base font-semibold">没有找到相关的技术博客文章</p>
              <p class="text-xs mt-1 text-on-surface-variant/40 dark:text-surface-variant/40">尝试更换搜索词或选择其他分类标签</p>
            </div>
          `,e.style.opacity="1"),t&&(t.innerHTML=this.generatePaginationHtml(s),this.setupPaginationListeners())},200)}setupEventListeners(){var e;this.addEventListener("click",t=>{const s=t.target.closest(".category-tab");if(s){const i=s.dataset.category||"全部";this._currentCategory!==i&&(this._currentCategory=i,this._currentPage=1,this.querySelectorAll(".category-tab").forEach(l=>{l.className="category-tab px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-surface-container hover:bg-surface-container-high text-on-surface-variant dark:text-surface-variant dark:bg-surface-container/30 dark:hover:bg-surface-container/50",l.setAttribute("aria-selected","false")}),s.className="category-tab px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 bg-primary text-on-primary shadow-sm dark:bg-primary-fixed dark:text-on-primary-fixed",s.setAttribute("aria-selected","true"),this.refreshList())}}),this._searchInput=this.querySelector("#blog-search-input"),this._searchHandler=()=>{this._searchInput&&(this._searchQuery=this._searchInput.value,this._currentPage=1,this.refreshList())},(e=this._searchInput)==null||e.addEventListener("input",this._searchHandler),this.setupPaginationListeners()}setupPaginationListeners(){const e=this.querySelector("#blog-prev-btn");e==null||e.addEventListener("click",()=>{this._currentPage>1&&(this._currentPage--,this.refreshList(),this.scrollToTop())});const t=this.querySelector("#blog-next-btn");t==null||t.addEventListener("click",()=>{const s=this.getFilteredPosts(),i=Math.ceil(s.length/this._postsPerPage);this._currentPage<i&&(this._currentPage++,this.refreshList(),this.scrollToTop())}),this.querySelectorAll(".page-num-btn").forEach(s=>{s.addEventListener("click",()=>{const i=parseInt(s.dataset.page||"1",10);this._currentPage!==i&&(this._currentPage=i,this.refreshList(),this.scrollToTop())})})}scrollToTop(){const e=this.querySelector("#blog-container");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}customElements.define("emu-blog",Kn);const Qn="modulepreload",Vn=function(n){return"/"+n},sr={},Jn=function(r,e,t){let a=Promise.resolve();if(e&&e.length>0){let i=function(d){return Promise.all(d.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=i(e.map(d=>{if(d=Vn(d),d in sr)return;sr[d]=!0;const u=d.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Qn,u||(h.as="script"),h.crossOrigin="",h.href=d,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((x,g)=>{h.addEventListener("load",x),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return a.then(i=>{for(const o of i||[])o.status==="rejected"&&s(o.reason);return r().catch(s)})};function At(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ne=At();function vr(n){Ne=n}var Ce={exec:()=>null};function Ie(n){let r=[];return e=>{let t=Math.max(0,Math.min(3,e-1)),a=r[t];return a||(a=n(t),r[t]=a),a}}function z(n,r=""){let e=typeof n=="string"?n:n.source,t={replace:(a,s)=>{let i=typeof s=="string"?s:s.source;return i=i.replace(oe.caret,"$1"),e=e.replace(a,i),t},getRegex:()=>new RegExp(e,r)};return t}var ea=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),oe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Ie(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Ie(n=>new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Ie(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:Ie(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:Ie(n=>new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Ie(n=>new RegExp(`^ {0,${n}}>`))},ta=/^(?:[ \t]*(?:\n|$))+/,ra=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,na=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,je=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,aa=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Lt=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,yr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,kr=z(yr).replace(/bull/g,Lt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),sa=z(yr).replace(/bull/g,Lt).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Mt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ia=/^[^\n]+/,Ct=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,oa=z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ct).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),la=z(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Lt).getRegex(),tt="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Rt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ca=z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Rt).replace("tag",tt).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),wr=z(Mt).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tt).getRegex(),da=z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",wr).getRegex(),Nt={blockquote:da,code:ra,def:oa,fences:na,heading:aa,hr:je,html:ca,lheading:kr,list:la,newline:ta,paragraph:wr,table:Ce,text:ia},ir=z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tt).getRegex(),ua={...Nt,lheading:sa,table:ir,paragraph:z(Mt).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ir).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",tt).getRegex()},pa={...Nt,html:z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Rt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ce,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:z(Mt).replace("hr",je).replace("heading",` *#{1,6} *[^
]`).replace("lheading",kr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ha=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ga=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Er=/^( {2,}|\\)\n(?!\s*$)/,fa=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,De=/[\p{P}\p{S}]/u,rt=/[\s\p{P}\p{S}]/u,$t=/[^\s\p{P}\p{S}]/u,ma=z(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,rt).getRegex(),_r=/(?!~)[\p{P}\p{S}]/u,ba=/(?!~)[\s\p{P}\p{S}]/u,xa=/(?:[^\s\p{P}\p{S}]|~)/u,va=z(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ea?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Sr=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ya=z(Sr,"u").replace(/punct/g,De).getRegex(),ka=z(Sr,"u").replace(/punct/g,_r).getRegex(),Tr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",wa=z(Tr,"gu").replace(/notPunctSpace/g,$t).replace(/punctSpace/g,rt).replace(/punct/g,De).getRegex(),Ea=z(Tr,"gu").replace(/notPunctSpace/g,xa).replace(/punctSpace/g,ba).replace(/punct/g,_r).getRegex(),_a=z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,$t).replace(/punctSpace/g,rt).replace(/punct/g,De).getRegex(),Sa=z(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,De).getRegex(),Ta="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Aa=z(Ta,"gu").replace(/notPunctSpace/g,$t).replace(/punctSpace/g,rt).replace(/punct/g,De).getRegex(),La=z(/\\(punct)/,"gu").replace(/punct/g,De).getRegex(),Ma=z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ca=z(Rt).replace("(?:-->|$)","-->").getRegex(),Ra=z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ca).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Qe=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Na=z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Qe).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ar=z(/^!?\[(label)\]\[(ref)\]/).replace("label",Qe).replace("ref",Ct).getRegex(),Lr=z(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ct).getRegex(),$a=z("reflink|nolink(?!\\()","g").replace("reflink",Ar).replace("nolink",Lr).getRegex(),or=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ot={_backpedal:Ce,anyPunctuation:La,autolink:Ma,blockSkip:va,br:Er,code:ga,del:Ce,delLDelim:Ce,delRDelim:Ce,emStrongLDelim:ya,emStrongRDelimAst:wa,emStrongRDelimUnd:_a,escape:ha,link:Na,nolink:Lr,punctuation:ma,reflink:Ar,reflinkSearch:$a,tag:Ra,text:fa,url:Ce},Oa={...Ot,link:z(/^!?\[(label)\]\((.*?)\)/).replace("label",Qe).getRegex(),reflink:z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Qe).getRegex()},Et={...Ot,emStrongRDelimAst:Ea,emStrongLDelim:ka,delLDelim:Sa,delRDelim:Aa,url:z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",or).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:z(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",or).getRegex()},Ia={...Et,br:z(Er).replace("{2,}","*").getRegex(),text:z(Et.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ye={normal:Nt,gfm:ua,pedantic:pa},Be={normal:Ot,gfm:Et,breaks:Ia,pedantic:Oa},Da={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lr=n=>Da[n];function ye(n,r){if(r){if(oe.escapeTest.test(n))return n.replace(oe.escapeReplace,lr)}else if(oe.escapeTestNoEncode.test(n))return n.replace(oe.escapeReplaceNoEncode,lr);return n}function cr(n){try{n=encodeURI(n).replace(oe.percentDecode,"%")}catch{return null}return n}function dr(n,r){var s;let e=n.replace(oe.findPipe,(i,o,l)=>{let d=!1,u=o;for(;--u>=0&&l[u]==="\\";)d=!d;return d?"|":" |"}),t=e.split(oe.splitPipe),a=0;if(t[0].trim()||t.shift(),t.length>0&&!((s=t.at(-1))!=null&&s.trim())&&t.pop(),r)if(t.length>r)t.splice(r);else for(;t.length<r;)t.push("");for(;a<t.length;a++)t[a]=t[a].trim().replace(oe.slashPipe,"|");return t}function Te(n,r,e){let t=n.length;if(t===0)return"";let a=0;for(;a<t&&n.charAt(t-a-1)===r;)a++;return n.slice(0,t-a)}function ur(n){let r=n.split(`
`),e=r.length-1;for(;e>=0&&oe.blankLine.test(r[e]);)e--;return r.length-e<=2?n:r.slice(0,e+1).join(`
`)}function Pa(n,r){if(n.indexOf(r[1])===-1)return-1;let e=0;for(let t=0;t<n.length;t++)if(n[t]==="\\")t++;else if(n[t]===r[0])e++;else if(n[t]===r[1]&&(e--,e<0))return t;return e>0?-2:-1}function Ba(n,r=0){let e=r,t="";for(let a of n)if(a==="	"){let s=4-e%4;t+=" ".repeat(s),e+=s}else t+=a,e++;return t}function pr(n,r,e,t,a){let s=r.href,i=r.title||null,o=n[1].replace(a.other.outputLinkReplace,"$1");t.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:e,href:s,title:i,text:o,tokens:t.inlineTokens(o)};return t.state.inLink=!1,l}function Ha(n,r,e){let t=n.match(e.other.indentCodeCompensation);if(t===null)return r;let a=t[1];return r.split(`
`).map(s=>{let i=s.match(e.other.beginningSpace);if(i===null)return s;let[o]=i;return o.length>=a.length?s.slice(a.length):s}).join(`
`)}var Ve=class{constructor(n){S(this,"options");S(this,"rules");S(this,"lexer");this.options=n||Ne}space(n){let r=this.rules.block.newline.exec(n);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(n){let r=this.rules.block.code.exec(n);if(r){let e=this.options.pedantic?r[0]:ur(r[0]),t=e.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e,codeBlockStyle:"indented",text:t}}}fences(n){let r=this.rules.block.fences.exec(n);if(r){let e=r[0],t=Ha(e,r[3]||"",this.rules);return{type:"code",raw:e,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:t}}}heading(n){let r=this.rules.block.heading.exec(n);if(r){let e=r[2].trim();if(this.rules.other.endingHash.test(e)){let t=Te(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:Te(r[0],`
`),depth:r[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){let r=this.rules.block.hr.exec(n);if(r)return{type:"hr",raw:Te(r[0],`
`)}}blockquote(n){let r=this.rules.block.blockquote.exec(n);if(r){let e=Te(r[0],`
`).split(`
`),t="",a="",s=[];for(;e.length>0;){let i=!1,o=[],l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))o.push(e[l]),i=!0;else if(!i)o.push(e[l]);else break;e=e.slice(l);let d=o.join(`
`),u=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");t=t?`${t}
${d}`:d,a=a?`${a}
${u}`:u;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,s,!0),this.lexer.state.top=p,e.length===0)break;let h=s.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){let x=h,g=x.raw+`
`+e.join(`
`),m=this.blockquote(g);s[s.length-1]=m,t=t.substring(0,t.length-x.raw.length)+m.raw,a=a.substring(0,a.length-x.text.length)+m.text;break}else if((h==null?void 0:h.type)==="list"){let x=h,g=x.raw+`
`+e.join(`
`),m=this.list(g);s[s.length-1]=m,t=t.substring(0,t.length-h.raw.length)+m.raw,a=a.substring(0,a.length-x.raw.length)+m.raw,e=g.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:t,tokens:s,text:a}}}list(n){let r=this.rules.block.list.exec(n);if(r){let e=r[1].trim(),t=e.length>1,a={type:"list",raw:"",ordered:t,start:t?+e.slice(0,-1):"",loose:!1,items:[]};e=t?`\\d{1,9}\\${e.slice(-1)}`:`\\${e}`,this.options.pedantic&&(e=t?e:"[*+-]");let s=this.rules.other.listItemRegex(e),i=!1;for(;n;){let l=!1,d="",u="";if(!(r=s.exec(n))||this.rules.block.hr.test(n))break;d=r[0],n=n.substring(d.length);let p=Ba(r[2].split(`
`,1)[0],r[1].length),h=n.split(`
`,1)[0],x=!p.trim(),g=0;if(this.options.pedantic?(g=2,u=p.trimStart()):x?g=r[1].length+1:(g=p.search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=p.slice(g),g+=r[1].length),x&&this.rules.other.blankLine.test(h)&&(d+=h+`
`,n=n.substring(h.length+1),l=!0),!l){let m=this.rules.other.nextBulletRegex(g),y=this.rules.other.hrRegex(g),M=this.rules.other.fencesBeginRegex(g),A=this.rules.other.headingBeginRegex(g),O=this.rules.other.htmlBeginRegex(g),X=this.rules.other.blockquoteBeginRegex(g);for(;n;){let G=n.split(`
`,1)[0],j;if(h=G,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),j=h):j=h.replace(this.rules.other.tabCharGlobal,"    "),M.test(h)||A.test(h)||O.test(h)||X.test(h)||m.test(h)||y.test(h))break;if(j.search(this.rules.other.nonSpaceChar)>=g||!h.trim())u+=`
`+j.slice(g);else{if(x||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||M.test(p)||A.test(p)||y.test(p))break;u+=`
`+h}x=!h.trim(),d+=G+`
`,n=n.substring(G.length+1),p=j.slice(g)}}a.loose||(i?a.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(i=!0)),a.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),a.raw+=d}let o=a.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let l of a.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let d=l.tokens[0];if(l.task&&((d==null?void 0:d.type)==="text"||(d==null?void 0:d.type)==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),d.raw=d.raw.replace(this.rules.other.listReplaceTask,""),d.text=d.text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let p={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=p.checked,a.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=p.raw+l.tokens[0].raw,l.tokens[0].text=p.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(p)):l.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):l.tokens.unshift(p)}}else l.task&&(l.task=!1);if(!a.loose){let u=l.tokens.filter(h=>h.type==="space"),p=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));a.loose=p}}if(a.loose)for(let l of a.items){l.loose=!0;for(let d of l.tokens)d.type==="text"&&(d.type="paragraph")}return a}}html(n){let r=this.rules.block.html.exec(n);if(r){let e=ur(r[0]);return{type:"html",block:!0,raw:e,pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:e}}}def(n){let r=this.rules.block.def.exec(n);if(r){let e=r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),t=r[2]?r[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:e,raw:Te(r[0],`
`),href:t,title:a}}}table(n){var i;let r=this.rules.block.table.exec(n);if(!r||!this.rules.other.tableDelimiter.test(r[2]))return;let e=dr(r[1]),t=r[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=(i=r[3])!=null&&i.trim()?r[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:Te(r[0],`
`),header:[],align:[],rows:[]};if(e.length===t.length){for(let o of t)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<e.length;o++)s.header.push({text:e[o],tokens:this.lexer.inline(e[o]),header:!0,align:s.align[o]});for(let o of a)s.rows.push(dr(o,s.header.length).map((l,d)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[d]})));return s}}lheading(n){let r=this.rules.block.lheading.exec(n);if(r){let e=r[1].trim();return{type:"heading",raw:Te(r[0],`
`),depth:r[2].charAt(0)==="="?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(n){let r=this.rules.block.paragraph.exec(n);if(r){let e=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:e,tokens:this.lexer.inline(e)}}}text(n){let r=this.rules.block.text.exec(n);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(n){let r=this.rules.inline.escape.exec(n);if(r)return{type:"escape",raw:r[0],text:r[1]}}tag(n){let r=this.rules.inline.tag.exec(n);if(r)return!this.lexer.state.inLink&&this.rules.other.startATag.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(n){let r=this.rules.inline.link.exec(n);if(r){let e=r[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let s=Te(e.slice(0,-1),"\\");if((e.length-s.length)%2===0)return}else{let s=Pa(r[2],"()");if(s===-2)return;if(s>-1){let i=(r[0].indexOf("!")===0?5:4)+r[1].length+s;r[2]=r[2].substring(0,s),r[0]=r[0].substring(0,i).trim(),r[3]=""}}let t=r[2],a="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(t);s&&(t=s[1],a=s[3])}else a=r[3]?r[3].slice(1,-1):"";return t=t.trim(),this.rules.other.startAngleBracket.test(t)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?t=t.slice(1):t=t.slice(1,-1)),pr(r,{href:t&&t.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer,this.rules)}}reflink(n,r){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let t=(e[2]||e[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=r[t.toLowerCase()];if(!a){let s=e[0].charAt(0);return{type:"text",raw:s,text:s}}return pr(e,a,e[0],this.lexer,this.rules)}}emStrong(n,r,e=""){let t=this.rules.inline.emStrongLDelim.exec(n);if(!(!t||!t[1]&&!t[2]&&!t[3]&&!t[4]||t[4]&&e.match(this.rules.other.unicodeAlphaNumeric))&&(!(t[1]||t[3])||!e||this.rules.inline.punctuation.exec(e))){let a=[...t[0]].length-1,s,i,o=a,l=0,d=t[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,r=r.slice(-1*n.length+a);(t=d.exec(r))!==null;){if(s=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!s)continue;if(i=[...s].length,t[3]||t[4]){o+=i;continue}else if((t[5]||t[6])&&a%3&&!((a+i)%3)){l+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o+l);let u=[...t[0]][0].length,p=n.slice(0,a+t.index+u+i);if(Math.min(a,i)%2){let x=p.slice(1,-1);return{type:"em",raw:p,text:x,tokens:this.lexer.inlineTokens(x)}}let h=p.slice(2,-2);return{type:"strong",raw:p,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(n){let r=this.rules.inline.code.exec(n);if(r){let e=r[2].replace(this.rules.other.newLineCharGlobal," "),t=this.rules.other.nonSpaceChar.test(e),a=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return t&&a&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:r[0],text:e}}}br(n){let r=this.rules.inline.br.exec(n);if(r)return{type:"br",raw:r[0]}}del(n,r,e=""){let t=this.rules.inline.delLDelim.exec(n);if(t&&(!t[1]||!e||this.rules.inline.punctuation.exec(e))){let a=[...t[0]].length-1,s,i,o=a,l=this.rules.inline.delRDelim;for(l.lastIndex=0,r=r.slice(-1*n.length+a);(t=l.exec(r))!==null;){if(s=t[1]||t[2]||t[3]||t[4]||t[5]||t[6],!s||(i=[...s].length,i!==a))continue;if(t[3]||t[4]){o+=i;continue}if(o-=i,o>0)continue;i=Math.min(i,i+o);let d=[...t[0]][0].length,u=n.slice(0,a+t.index+d+i),p=u.slice(a,-a);return{type:"del",raw:u,text:p,tokens:this.lexer.inlineTokens(p)}}}}autolink(n){let r=this.rules.inline.autolink.exec(n);if(r){let e,t;return r[2]==="@"?(e=r[1],t="mailto:"+e):(e=r[1],t=e),{type:"link",raw:r[0],text:e,href:t,tokens:[{type:"text",raw:e,text:e}]}}}url(n){var e;let r;if(r=this.rules.inline.url.exec(n)){let t,a;if(r[2]==="@")t=r[0],a="mailto:"+t;else{let s;do s=r[0],r[0]=((e=this.rules.inline._backpedal.exec(r[0]))==null?void 0:e[0])??"";while(s!==r[0]);t=r[0],r[1]==="www."?a="http://"+r[0]:a=r[0]}return{type:"link",raw:r[0],text:t,href:a,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let r=this.rules.inline.text.exec(n);if(r){let e=this.lexer.state.inRawBlock;return{type:"text",raw:r[0],text:r[0],escaped:e}}}},me=class _t{constructor(r){S(this,"tokens");S(this,"options");S(this,"state");S(this,"inlineQueue");S(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=r||Ne,this.options.tokenizer=this.options.tokenizer||new Ve,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:oe,block:Ye.normal,inline:Be.normal};this.options.pedantic?(e.block=Ye.pedantic,e.inline=Be.pedantic):this.options.gfm&&(e.block=Ye.gfm,this.options.breaks?e.inline=Be.breaks:e.inline=Be.gfm),this.tokenizer.rules=e}static get rules(){return{block:Ye,inline:Be}}static lex(r,e){return new _t(e).lex(r)}static lexInline(r,e){return new _t(e).inlineTokens(r)}lex(r){r=r.replace(oe.carriageReturn,`
`),this.blockTokens(r,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(r,e=[],t=!1){var s,i,o;this.tokenizer.lexer=this,this.options.pedantic&&(r=r.replace(oe.tabCharGlobal,"    ").replace(oe.spaceLine,""));let a=1/0;for(;r;){if(r.length<a)a=r.length;else{this.infiniteLoopError(r.charCodeAt(0));break}let l;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(l=u.call({lexer:this},r,e))?(r=r.substring(l.raw.length),e.push(l),!0):!1))continue;if(l=this.tokenizer.space(r)){r=r.substring(l.raw.length);let u=e.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
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
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):e.push(l);continue}if(r){this.infiniteLoopError(r.charCodeAt(0));break}}return this.state.top=!0,e}inline(r,e=[]){return this.inlineQueue.push({src:r,tokens:e}),e}inlineTokens(r,e=[]){var d,u,p,h,x;this.tokenizer.lexer=this;let t=r,a=null;if(this.tokens.links){let g=Object.keys(this.tokens.links);if(g.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(t))!==null;)g.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(t=t.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+t.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(t))!==null;)t=t.slice(0,a.index)+"++"+t.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(a=this.tokenizer.rules.inline.blockSkip.exec(t))!==null;)s=a[2]?a[2].length:0,t=t.slice(0,a.index+s)+"["+"a".repeat(a[0].length-s-2)+"]"+t.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);t=((u=(d=this.options.hooks)==null?void 0:d.emStrongMask)==null?void 0:u.call({lexer:this},t))??t;let i=!1,o="",l=1/0;for(;r;){if(r.length<l)l=r.length;else{this.infiniteLoopError(r.charCodeAt(0));break}i||(o=""),i=!1;let g;if((h=(p=this.options.extensions)==null?void 0:p.inline)!=null&&h.some(y=>(g=y.call({lexer:this},r,e))?(r=r.substring(g.raw.length),e.push(g),!0):!1))continue;if(g=this.tokenizer.escape(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.tag(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.link(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.reflink(r,this.tokens.links)){r=r.substring(g.raw.length);let y=e.at(-1);g.type==="text"&&(y==null?void 0:y.type)==="text"?(y.raw+=g.raw,y.text+=g.text):e.push(g);continue}if(g=this.tokenizer.emStrong(r,t,o)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.codespan(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.br(r)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.del(r,t,o)){r=r.substring(g.raw.length),e.push(g);continue}if(g=this.tokenizer.autolink(r)){r=r.substring(g.raw.length),e.push(g);continue}if(!this.state.inLink&&(g=this.tokenizer.url(r))){r=r.substring(g.raw.length),e.push(g);continue}let m=r;if((x=this.options.extensions)!=null&&x.startInline){let y=1/0,M=r.slice(1),A;this.options.extensions.startInline.forEach(O=>{A=O.call({lexer:this},M),typeof A=="number"&&A>=0&&(y=Math.min(y,A))}),y<1/0&&y>=0&&(m=r.substring(0,y+1))}if(g=this.tokenizer.inlineText(m)){r=r.substring(g.raw.length),g.raw.slice(-1)!=="_"&&(o=g.raw.slice(-1)),i=!0;let y=e.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=g.raw,y.text+=g.text):e.push(g);continue}if(r){this.infiniteLoopError(r.charCodeAt(0));break}}return e}infiniteLoopError(r){let e="Infinite loop on byte: "+r;if(this.options.silent)console.error(e);else throw new Error(e)}},Je=class{constructor(n){S(this,"options");S(this,"parser");this.options=n||Ne}space(n){return""}code({text:n,lang:r,escaped:e}){var s;let t=(s=(r||"").match(oe.notSpaceStart))==null?void 0:s[0],a=n.replace(oe.endingNewline,"")+`
`;return t?'<pre><code class="language-'+ye(t)+'">'+(e?a:ye(a,!0))+`</code></pre>
`:"<pre><code>"+(e?a:ye(a,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}def(n){return""}heading({tokens:n,depth:r}){return`<h${r}>${this.parser.parseInline(n)}</h${r}>
`}hr(n){return`<hr>
`}list(n){let r=n.ordered,e=n.start,t="";for(let i=0;i<n.items.length;i++){let o=n.items[i];t+=this.listitem(o)}let a=r?"ol":"ul",s=r&&e!==1?' start="'+e+'"':"";return"<"+a+s+`>
`+t+"</"+a+`>
`}listitem(n){return`<li>${this.parser.parse(n.tokens)}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let r="",e="";for(let a=0;a<n.header.length;a++)e+=this.tablecell(n.header[a]);r+=this.tablerow({text:e});let t="";for(let a=0;a<n.rows.length;a++){let s=n.rows[a];e="";for(let i=0;i<s.length;i++)e+=this.tablecell(s[i]);t+=this.tablerow({text:e})}return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+t+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){let r=this.parser.parseInline(n.tokens),e=n.header?"th":"td";return(n.align?`<${e} align="${n.align}">`:`<${e}>`)+r+`</${e}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${ye(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:r,tokens:e}){let t=this.parser.parseInline(e),a=cr(n);if(a===null)return t;n=a;let s='<a href="'+n+'"';return r&&(s+=' title="'+ye(r)+'"'),s+=">"+t+"</a>",s}image({href:n,title:r,text:e,tokens:t}){t&&(e=this.parser.parseInline(t,this.parser.textRenderer));let a=cr(n);if(a===null)return ye(e);n=a;let s=`<img src="${n}" alt="${ye(e)}"`;return r&&(s+=` title="${ye(r)}"`),s+=">",s}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:ye(n.text)}},It=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},be=class St{constructor(r){S(this,"options");S(this,"renderer");S(this,"textRenderer");this.options=r||Ne,this.options.renderer=this.options.renderer||new Je,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new It}static parse(r,e){return new St(e).parse(r)}static parseInline(r,e){return new St(e).parseInline(r)}parse(r){var t,a;this.renderer.parser=this;let e="";for(let s=0;s<r.length;s++){let i=r[s];if((a=(t=this.options.extensions)==null?void 0:t.renderers)!=null&&a[i.type]){let l=i,d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){e+=d||"";continue}}let o=i;switch(o.type){case"space":{e+=this.renderer.space(o);break}case"hr":{e+=this.renderer.hr(o);break}case"heading":{e+=this.renderer.heading(o);break}case"code":{e+=this.renderer.code(o);break}case"table":{e+=this.renderer.table(o);break}case"blockquote":{e+=this.renderer.blockquote(o);break}case"list":{e+=this.renderer.list(o);break}case"checkbox":{e+=this.renderer.checkbox(o);break}case"html":{e+=this.renderer.html(o);break}case"def":{e+=this.renderer.def(o);break}case"paragraph":{e+=this.renderer.paragraph(o);break}case"text":{e+=this.renderer.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return e}parseInline(r,e=this.renderer){var a,s;this.renderer.parser=this;let t="";for(let i=0;i<r.length;i++){let o=r[i];if((s=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&s[o.type]){let d=this.options.extensions.renderers[o.type].call({parser:this},o);if(d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){t+=d||"";continue}}let l=o;switch(l.type){case"escape":{t+=e.text(l);break}case"html":{t+=e.html(l);break}case"link":{t+=e.link(l);break}case"image":{t+=e.image(l);break}case"checkbox":{t+=e.checkbox(l);break}case"strong":{t+=e.strong(l);break}case"em":{t+=e.em(l);break}case"codespan":{t+=e.codespan(l);break}case"br":{t+=e.br(l);break}case"del":{t+=e.del(l);break}case"text":{t+=e.text(l);break}default:{let d='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return t}},Ke,He=(Ke=class{constructor(n){S(this,"options");S(this,"block");this.options=n||Ne}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?me.lex:me.lexInline}provideParser(n=this.block){return n?be.parse:be.parseInline}},S(Ke,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),S(Ke,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),Ke),za=class{constructor(...n){S(this,"defaults",At());S(this,"options",this.setOptions);S(this,"parse",this.parseMarkdown(!0));S(this,"parseInline",this.parseMarkdown(!1));S(this,"Parser",be);S(this,"Renderer",Je);S(this,"TextRenderer",It);S(this,"Lexer",me);S(this,"Tokenizer",Ve);S(this,"Hooks",He);this.use(...n)}walkTokens(n,r){var t,a;let e=[];for(let s of n)switch(e=e.concat(r.call(this,s)),s.type){case"table":{let i=s;for(let o of i.header)e=e.concat(this.walkTokens(o.tokens,r));for(let o of i.rows)for(let l of o)e=e.concat(this.walkTokens(l.tokens,r));break}case"list":{let i=s;e=e.concat(this.walkTokens(i.items,r));break}default:{let i=s;(a=(t=this.defaults.extensions)==null?void 0:t.childTokens)!=null&&a[i.type]?this.defaults.extensions.childTokens[i.type].forEach(o=>{let l=i[o].flat(1/0);e=e.concat(this.walkTokens(l,r))}):i.tokens&&(e=e.concat(this.walkTokens(i.tokens,r)))}}return e}use(...n){let r=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(e=>{let t={...e};if(t.async=this.defaults.async||t.async||!1,e.extensions&&(e.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let s=r.renderers[a.name];s?r.renderers[a.name]=function(...i){let o=a.renderer.apply(this,i);return o===!1&&(o=s.apply(this,i)),o}:r.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=r[a.level];s?s.unshift(a.tokenizer):r[a.level]=[a.tokenizer],a.start&&(a.level==="block"?r.startBlock?r.startBlock.push(a.start):r.startBlock=[a.start]:a.level==="inline"&&(r.startInline?r.startInline.push(a.start):r.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(r.childTokens[a.name]=a.childTokens)}),t.extensions=r),e.renderer){let a=this.defaults.renderer||new Je(this.defaults);for(let s in e.renderer){if(!(s in a))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let i=s,o=e.renderer[i],l=a[i];a[i]=(...d)=>{let u=o.apply(a,d);return u===!1&&(u=l.apply(a,d)),u||""}}t.renderer=a}if(e.tokenizer){let a=this.defaults.tokenizer||new Ve(this.defaults);for(let s in e.tokenizer){if(!(s in a))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let i=s,o=e.tokenizer[i],l=a[i];a[i]=(...d)=>{let u=o.apply(a,d);return u===!1&&(u=l.apply(a,d)),u}}t.tokenizer=a}if(e.hooks){let a=this.defaults.hooks||new He;for(let s in e.hooks){if(!(s in a))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let i=s,o=e.hooks[i],l=a[i];He.passThroughHooks.has(s)?a[i]=d=>{if(this.defaults.async&&He.passThroughHooksRespectAsync.has(s))return(async()=>{let p=await o.call(a,d);return l.call(a,p)})();let u=o.call(a,d);return l.call(a,u)}:a[i]=(...d)=>{if(this.defaults.async)return(async()=>{let p=await o.apply(a,d);return p===!1&&(p=await l.apply(a,d)),p})();let u=o.apply(a,d);return u===!1&&(u=l.apply(a,d)),u}}t.hooks=a}if(e.walkTokens){let a=this.defaults.walkTokens,s=e.walkTokens;t.walkTokens=function(i){let o=[];return o.push(s.call(this,i)),a&&(o=o.concat(a.call(this,i))),o}}this.defaults={...this.defaults,...t}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,r){return me.lex(n,r??this.defaults)}parser(n,r){return be.parse(n,r??this.defaults)}parseMarkdown(n){return(r,e)=>{let t={...e},a={...this.defaults,...t},s=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&t.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof r>"u"||r===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=n),a.async)return(async()=>{let i=a.hooks?await a.hooks.preprocess(r):r,o=await(a.hooks?await a.hooks.provideLexer(n):n?me.lex:me.lexInline)(i,a),l=a.hooks?await a.hooks.processAllTokens(o):o;a.walkTokens&&await Promise.all(this.walkTokens(l,a.walkTokens));let d=await(a.hooks?await a.hooks.provideParser(n):n?be.parse:be.parseInline)(l,a);return a.hooks?await a.hooks.postprocess(d):d})().catch(s);try{a.hooks&&(r=a.hooks.preprocess(r));let i=(a.hooks?a.hooks.provideLexer(n):n?me.lex:me.lexInline)(r,a);a.hooks&&(i=a.hooks.processAllTokens(i)),a.walkTokens&&this.walkTokens(i,a.walkTokens);let o=(a.hooks?a.hooks.provideParser(n):n?be.parse:be.parseInline)(i,a);return a.hooks&&(o=a.hooks.postprocess(o)),o}catch(i){return s(i)}}}onError(n,r){return e=>{if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let t="<p>An error occurred:</p><pre>"+ye(e.message+"",!0)+"</pre>";return r?Promise.resolve(t):t}if(r)return Promise.reject(e);throw e}}},Re=new za;function U(n,r){return Re.parse(n,r)}U.options=U.setOptions=function(n){return Re.setOptions(n),U.defaults=Re.defaults,vr(U.defaults),U};U.getDefaults=At;U.defaults=Ne;U.use=function(...n){return Re.use(...n),U.defaults=Re.defaults,vr(U.defaults),U};U.walkTokens=function(n,r){return Re.walkTokens(n,r)};U.parseInline=Re.parseInline;U.Parser=be;U.parser=be.parse;U.Renderer=Je;U.TextRenderer=It;U.Lexer=me;U.lexer=me.lex;U.Tokenizer=Ve;U.Hooks=He;U.parse=U;U.options;U.setOptions;U.use;U.walkTokens;U.parseInline;be.parse;me.lex;const hr=[{type:"note",icon:'<svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'},{type:"tip",icon:'<svg class="octicon octicon-light-bulb mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>'},{type:"important",icon:'<svg class="octicon octicon-report mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>'},{type:"warning",icon:'<svg class="octicon octicon-alert mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>'},{type:"caution",icon:'<svg class="octicon octicon-stop mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'}];function ja(n){return n.length?Object.values([...hr,...n].reduce((r,e)=>(r[e.type]=e,r),{})):hr}function gr(n){return`^(?:\\[!${n.toUpperCase()}])\\s*?
*`}function Ua(n){return n.slice(0,1).toUpperCase()+n.slice(1).toLowerCase()}function qa(n={}){const{className:r="markdown-alert",variants:e=[]}=n,t=ja(e);return{walkTokens(a){var s,i,o,l;if(a.type!=="blockquote")return;const d=t.find(({type:u})=>new RegExp(gr(u)).test(a.text));if(d){const{type:u,icon:p,title:h=Ua(u),titleClassName:x=`${r}-title`}=d,g=new RegExp(gr(u));Object.assign(a,{type:"alert",meta:{className:r,variant:u,icon:p,title:h,titleClassName:x}});const m=(s=a.tokens)==null?void 0:s[0];if((i=m.raw)!=null&&i.replace(g,"").trim()){const y=m.tokens[0];Object.assign(y,{raw:y.raw.replace(g,""),text:y.text.replace(g,"")}),((o=m.tokens[1])==null?void 0:o.type)==="br"&&m.tokens.splice(1,1)}else(l=a.tokens)==null||l.shift()}},extensions:[{name:"alert",level:"block",renderer({meta:a,tokens:s=[]}){let i=`<div class="${a.className} ${a.className}-${a.variant}">
`;return i+=`<p class="${a.titleClassName}">`,i+=a.icon,i+=a.title,i+=`</p>
`,i+=this.parser.parse(s),i+=`</div>
`,i}}]}}function Ga(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var yt,fr;function Fa(){if(fr)return yt;fr=1;function n(c){return c instanceof Map?c.clear=c.delete=c.set=function(){throw new Error("map is read-only")}:c instanceof Set&&(c.add=c.clear=c.delete=function(){throw new Error("set is read-only")}),Object.freeze(c),Object.getOwnPropertyNames(c).forEach(f=>{const v=c[f],N=typeof v;(N==="object"||N==="function")&&!Object.isFrozen(v)&&n(v)}),c}class r{constructor(f){f.data===void 0&&(f.data={}),this.data=f.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function e(c){return c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function t(c,...f){const v=Object.create(null);for(const N in c)v[N]=c[N];return f.forEach(function(N){for(const V in N)v[V]=N[V]}),v}const a="</span>",s=c=>!!c.scope,i=(c,{prefix:f})=>{if(c.startsWith("language:"))return c.replace("language:","language-");if(c.includes(".")){const v=c.split(".");return[`${f}${v.shift()}`,...v.map((N,V)=>`${N}${"_".repeat(V+1)}`)].join(" ")}return`${f}${c}`};class o{constructor(f,v){this.buffer="",this.classPrefix=v.classPrefix,f.walk(this)}addText(f){this.buffer+=e(f)}openNode(f){if(!s(f))return;const v=i(f.scope,{prefix:this.classPrefix});this.span(v)}closeNode(f){s(f)&&(this.buffer+=a)}value(){return this.buffer}span(f){this.buffer+=`<span class="${f}">`}}const l=(c={})=>{const f={children:[]};return Object.assign(f,c),f};class d{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(f){this.top.children.push(f)}openNode(f){const v=l({scope:f});this.add(v),this.stack.push(v)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(f){return this.constructor._walk(f,this.rootNode)}static _walk(f,v){return typeof v=="string"?f.addText(v):v.children&&(f.openNode(v),v.children.forEach(N=>this._walk(f,N)),f.closeNode(v)),f}static _collapse(f){typeof f!="string"&&f.children&&(f.children.every(v=>typeof v=="string")?f.children=[f.children.join("")]:f.children.forEach(v=>{d._collapse(v)}))}}class u extends d{constructor(f){super(),this.options=f}addText(f){f!==""&&this.add(f)}startScope(f){this.openNode(f)}endScope(){this.closeNode()}__addSublanguage(f,v){const N=f.root;v&&(N.scope=`language:${v}`),this.add(N)}toHTML(){return new o(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function p(c){return c?typeof c=="string"?c:c.source:null}function h(c){return m("(?=",c,")")}function x(c){return m("(?:",c,")*")}function g(c){return m("(?:",c,")?")}function m(...c){return c.map(v=>p(v)).join("")}function y(c){const f=c[c.length-1];return typeof f=="object"&&f.constructor===Object?(c.splice(c.length-1,1),f):{}}function M(...c){return"("+(y(c).capture?"":"?:")+c.map(N=>p(N)).join("|")+")"}function A(c){return new RegExp(c.toString()+"|").exec("").length-1}function O(c,f){const v=c&&c.exec(f);return v&&v.index===0}const X=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function G(c,{joinWith:f}){let v=0;return c.map(N=>{v+=1;const V=v;let J=p(N),E="";for(;J.length>0;){const w=X.exec(J);if(!w){E+=J;break}E+=J.substring(0,w.index),J=J.substring(w.index+w[0].length),w[0][0]==="\\"&&w[1]?E+="\\"+String(Number(w[1])+V):(E+=w[0],w[0]==="("&&v++)}return E}).map(N=>`(${N})`).join(f)}const j=/\b\B/,W="[a-zA-Z]\\w*",Q="[a-zA-Z_]\\w*",de="\\b\\d+(\\.\\d+)?",ge="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",pe="\\b(0b[01]+)",L="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",C=(c={})=>{const f=/^#![ ]*\//;return c.binary&&(c.begin=m(f,/.*\b/,c.binary,/\b.*/)),t({scope:"meta",begin:f,end:/$/,relevance:0,"on:begin":(v,N)=>{v.index!==0&&N.ignoreMatch()}},c)},F={begin:"\\\\[\\s\\S]",relevance:0},ee={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[F]},ae={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[F]},ue={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},P=function(c,f,v={}){const N=t({scope:"comment",begin:c,end:f,contains:[]},v);N.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const V=M("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return N.contains.push({begin:m(/[ ]+/,"(",V,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),N},I=P("//","$"),H=P("/\\*","\\*/"),q=P("#","$"),le={scope:"number",begin:de,relevance:0},Ee={scope:"number",begin:ge,relevance:0},Ue={scope:"number",begin:pe,relevance:0},at={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[F,{begin:/\[/,end:/\]/,relevance:0,contains:[F]}]},st={scope:"title",begin:W,relevance:0},it={scope:"title",begin:Q,relevance:0},ot={begin:"\\.\\s*"+Q,relevance:0};var ke=Object.freeze({__proto__:null,APOS_STRING_MODE:ee,BACKSLASH_ESCAPE:F,BINARY_NUMBER_MODE:Ue,BINARY_NUMBER_RE:pe,COMMENT:P,C_BLOCK_COMMENT_MODE:H,C_LINE_COMMENT_MODE:I,C_NUMBER_MODE:Ee,C_NUMBER_RE:ge,END_SAME_AS_BEGIN:function(c){return Object.assign(c,{"on:begin":(f,v)=>{v.data._beginMatch=f[1]},"on:end":(f,v)=>{v.data._beginMatch!==f[1]&&v.ignoreMatch()}})},HASH_COMMENT_MODE:q,IDENT_RE:W,MATCH_NOTHING_RE:j,METHOD_GUARD:ot,NUMBER_MODE:le,NUMBER_RE:de,PHRASAL_WORDS_MODE:ue,QUOTE_STRING_MODE:ae,REGEXP_MODE:at,RE_STARTERS_RE:L,SHEBANG:C,TITLE_MODE:st,UNDERSCORE_IDENT_RE:Q,UNDERSCORE_TITLE_MODE:it});function Ae(c,f){c.input[c.index-1]==="."&&f.ignoreMatch()}function lt(c,f){c.className!==void 0&&(c.scope=c.className,delete c.className)}function ct(c,f){f&&c.beginKeywords&&(c.begin="\\b("+c.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",c.__beforeBegin=Ae,c.keywords=c.keywords||c.beginKeywords,delete c.beginKeywords,c.relevance===void 0&&(c.relevance=0))}function dt(c,f){Array.isArray(c.illegal)&&(c.illegal=M(...c.illegal))}function ut(c,f){if(c.match){if(c.begin||c.end)throw new Error("begin & end are not supported with match");c.begin=c.match,delete c.match}}function pt(c,f){c.relevance===void 0&&(c.relevance=1)}const Gr=(c,f)=>{if(!c.beforeMatch)return;if(c.starts)throw new Error("beforeMatch cannot be used with starts");const v=Object.assign({},c);Object.keys(c).forEach(N=>{delete c[N]}),c.keywords=v.keywords,c.begin=m(v.beforeMatch,h(v.begin)),c.starts={relevance:0,contains:[Object.assign(v,{endsParent:!0})]},c.relevance=0,delete v.beforeMatch},Fr=["of","and","for","in","not","or","if","then","parent","list","value"],Zr="keyword";function Pt(c,f,v=Zr){const N=Object.create(null);return typeof c=="string"?V(v,c.split(" ")):Array.isArray(c)?V(v,c):Object.keys(c).forEach(function(J){Object.assign(N,Pt(c[J],f,J))}),N;function V(J,E){f&&(E=E.map(w=>w.toLowerCase())),E.forEach(function(w){const R=w.split("|");N[R[0]]=[J,Xr(R[0],R[1])]})}}function Xr(c,f){return f?Number(f):Wr(c)?0:1}function Wr(c){return Fr.includes(c.toLowerCase())}const Bt={},Le=c=>{console.error(c)},Ht=(c,...f)=>{console.log(`WARN: ${c}`,...f)},$e=(c,f)=>{Bt[`${c}/${f}`]||(console.log(`Deprecated as of ${c}. ${f}`),Bt[`${c}/${f}`]=!0)},qe=new Error;function zt(c,f,{key:v}){let N=0;const V=c[v],J={},E={};for(let w=1;w<=f.length;w++)E[w+N]=V[w],J[w+N]=!0,N+=A(f[w-1]);c[v]=E,c[v]._emit=J,c[v]._multi=!0}function Yr(c){if(Array.isArray(c.begin)){if(c.skip||c.excludeBegin||c.returnBegin)throw Le("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),qe;if(typeof c.beginScope!="object"||c.beginScope===null)throw Le("beginScope must be object"),qe;zt(c,c.begin,{key:"beginScope"}),c.begin=G(c.begin,{joinWith:""})}}function Kr(c){if(Array.isArray(c.end)){if(c.skip||c.excludeEnd||c.returnEnd)throw Le("skip, excludeEnd, returnEnd not compatible with endScope: {}"),qe;if(typeof c.endScope!="object"||c.endScope===null)throw Le("endScope must be object"),qe;zt(c,c.end,{key:"endScope"}),c.end=G(c.end,{joinWith:""})}}function Qr(c){c.scope&&typeof c.scope=="object"&&c.scope!==null&&(c.beginScope=c.scope,delete c.scope)}function Vr(c){Qr(c),typeof c.beginScope=="string"&&(c.beginScope={_wrap:c.beginScope}),typeof c.endScope=="string"&&(c.endScope={_wrap:c.endScope}),Yr(c),Kr(c)}function Jr(c){function f(E,w){return new RegExp(p(E),"m"+(c.case_insensitive?"i":"")+(c.unicodeRegex?"u":"")+(w?"g":""))}class v{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(w,R){R.position=this.position++,this.matchIndexes[this.matchAt]=R,this.regexes.push([R,w]),this.matchAt+=A(w)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const w=this.regexes.map(R=>R[1]);this.matcherRe=f(G(w,{joinWith:"|"}),!0),this.lastIndex=0}exec(w){this.matcherRe.lastIndex=this.lastIndex;const R=this.matcherRe.exec(w);if(!R)return null;const ne=R.findIndex((Pe,gt)=>gt>0&&Pe!==void 0),te=this.matchIndexes[ne];return R.splice(0,ne),Object.assign(R,te)}}class N{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(w){if(this.multiRegexes[w])return this.multiRegexes[w];const R=new v;return this.rules.slice(w).forEach(([ne,te])=>R.addRule(ne,te)),R.compile(),this.multiRegexes[w]=R,R}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(w,R){this.rules.push([w,R]),R.type==="begin"&&this.count++}exec(w){const R=this.getMatcher(this.regexIndex);R.lastIndex=this.lastIndex;let ne=R.exec(w);if(this.resumingScanAtSamePosition()&&!(ne&&ne.index===this.lastIndex)){const te=this.getMatcher(0);te.lastIndex=this.lastIndex+1,ne=te.exec(w)}return ne&&(this.regexIndex+=ne.position+1,this.regexIndex===this.count&&this.considerAll()),ne}}function V(E){const w=new N;return E.contains.forEach(R=>w.addRule(R.begin,{rule:R,type:"begin"})),E.terminatorEnd&&w.addRule(E.terminatorEnd,{type:"end"}),E.illegal&&w.addRule(E.illegal,{type:"illegal"}),w}function J(E,w){const R=E;if(E.isCompiled)return R;[lt,ut,Vr,Gr].forEach(te=>te(E,w)),c.compilerExtensions.forEach(te=>te(E,w)),E.__beforeBegin=null,[ct,dt,pt].forEach(te=>te(E,w)),E.isCompiled=!0;let ne=null;return typeof E.keywords=="object"&&E.keywords.$pattern&&(E.keywords=Object.assign({},E.keywords),ne=E.keywords.$pattern,delete E.keywords.$pattern),ne=ne||/\w+/,E.keywords&&(E.keywords=Pt(E.keywords,c.case_insensitive)),R.keywordPatternRe=f(ne,!0),w&&(E.begin||(E.begin=/\B|\b/),R.beginRe=f(R.begin),!E.end&&!E.endsWithParent&&(E.end=/\B|\b/),E.end&&(R.endRe=f(R.end)),R.terminatorEnd=p(R.end)||"",E.endsWithParent&&w.terminatorEnd&&(R.terminatorEnd+=(E.end?"|":"")+w.terminatorEnd)),E.illegal&&(R.illegalRe=f(E.illegal)),E.contains||(E.contains=[]),E.contains=[].concat(...E.contains.map(function(te){return en(te==="self"?E:te)})),E.contains.forEach(function(te){J(te,R)}),E.starts&&J(E.starts,w),R.matcher=V(R),R}if(c.compilerExtensions||(c.compilerExtensions=[]),c.contains&&c.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return c.classNameAliases=t(c.classNameAliases||{}),J(c)}function jt(c){return c?c.endsWithParent||jt(c.starts):!1}function en(c){return c.variants&&!c.cachedVariants&&(c.cachedVariants=c.variants.map(function(f){return t(c,{variants:null},f)})),c.cachedVariants?c.cachedVariants:jt(c)?t(c,{starts:c.starts?t(c.starts):null}):Object.isFrozen(c)?t(c):c}var tn="11.11.1";class rn extends Error{constructor(f,v){super(f),this.name="HTMLInjectionError",this.html=v}}const ht=e,Ut=t,qt=Symbol("nomatch"),nn=7,Gt=function(c){const f=Object.create(null),v=Object.create(null),N=[];let V=!0;const J="Could not find the language '{}', did you forget to load/include a language module?",E={disableAutodetect:!0,name:"Plain text",contains:[]};let w={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:u};function R(b){return w.noHighlightRe.test(b)}function ne(b){let T=b.className+" ";T+=b.parentNode?b.parentNode.className:"";const B=w.languageDetectRe.exec(T);if(B){const Y=_e(B[1]);return Y||(Ht(J.replace("{}",B[1])),Ht("Falling back to no-highlight mode for this block.",b)),Y?B[1]:"no-highlight"}return T.split(/\s+/).find(Y=>R(Y)||_e(Y))}function te(b,T,B){let Y="",re="";typeof T=="object"?(Y=b,B=T.ignoreIllegals,re=T.language):($e("10.7.0","highlight(lang, code, ...args) has been deprecated."),$e("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),re=b,Y=T),B===void 0&&(B=!0);const fe={code:Y,language:re};Fe("before:highlight",fe);const Se=fe.result?fe.result:Pe(fe.language,fe.code,B);return Se.code=fe.code,Fe("after:highlight",Se),Se}function Pe(b,T,B,Y){const re=Object.create(null);function fe(k,_){return k.keywords[_]}function Se(){if(!$.keywords){se.addText(K);return}let k=0;$.keywordPatternRe.lastIndex=0;let _=$.keywordPatternRe.exec(K),D="";for(;_;){D+=K.substring(k,_.index);const Z=ve.case_insensitive?_[0].toLowerCase():_[0],ie=fe($,Z);if(ie){const[we,kn]=ie;if(se.addText(D),D="",re[Z]=(re[Z]||0)+1,re[Z]<=nn&&(We+=kn),we.startsWith("_"))D+=_[0];else{const wn=ve.classNameAliases[we]||we;xe(_[0],wn)}}else D+=_[0];k=$.keywordPatternRe.lastIndex,_=$.keywordPatternRe.exec(K)}D+=K.substring(k),se.addText(D)}function Ze(){if(K==="")return;let k=null;if(typeof $.subLanguage=="string"){if(!f[$.subLanguage]){se.addText(K);return}k=Pe($.subLanguage,K,!0,Vt[$.subLanguage]),Vt[$.subLanguage]=k._top}else k=ft(K,$.subLanguage.length?$.subLanguage:null);$.relevance>0&&(We+=k.relevance),se.__addSublanguage(k._emitter,k.language)}function he(){$.subLanguage!=null?Ze():Se(),K=""}function xe(k,_){k!==""&&(se.startScope(_),se.addText(k),se.endScope())}function Wt(k,_){let D=1;const Z=_.length-1;for(;D<=Z;){if(!k._emit[D]){D++;continue}const ie=ve.classNameAliases[k[D]]||k[D],we=_[D];ie?xe(we,ie):(K=we,Se(),K=""),D++}}function Yt(k,_){return k.scope&&typeof k.scope=="string"&&se.openNode(ve.classNameAliases[k.scope]||k.scope),k.beginScope&&(k.beginScope._wrap?(xe(K,ve.classNameAliases[k.beginScope._wrap]||k.beginScope._wrap),K=""):k.beginScope._multi&&(Wt(k.beginScope,_),K="")),$=Object.create(k,{parent:{value:$}}),$}function Kt(k,_,D){let Z=O(k.endRe,D);if(Z){if(k["on:end"]){const ie=new r(k);k["on:end"](_,ie),ie.isMatchIgnored&&(Z=!1)}if(Z){for(;k.endsParent&&k.parent;)k=k.parent;return k}}if(k.endsWithParent)return Kt(k.parent,_,D)}function mn(k){return $.matcher.regexIndex===0?(K+=k[0],1):(vt=!0,0)}function bn(k){const _=k[0],D=k.rule,Z=new r(D),ie=[D.__beforeBegin,D["on:begin"]];for(const we of ie)if(we&&(we(k,Z),Z.isMatchIgnored))return mn(_);return D.skip?K+=_:(D.excludeBegin&&(K+=_),he(),!D.returnBegin&&!D.excludeBegin&&(K=_)),Yt(D,k),D.returnBegin?0:_.length}function xn(k){const _=k[0],D=T.substring(k.index),Z=Kt($,k,D);if(!Z)return qt;const ie=$;$.endScope&&$.endScope._wrap?(he(),xe(_,$.endScope._wrap)):$.endScope&&$.endScope._multi?(he(),Wt($.endScope,k)):ie.skip?K+=_:(ie.returnEnd||ie.excludeEnd||(K+=_),he(),ie.excludeEnd&&(K=_));do $.scope&&se.closeNode(),!$.skip&&!$.subLanguage&&(We+=$.relevance),$=$.parent;while($!==Z.parent);return Z.starts&&Yt(Z.starts,k),ie.returnEnd?0:_.length}function vn(){const k=[];for(let _=$;_!==ve;_=_.parent)_.scope&&k.unshift(_.scope);k.forEach(_=>se.openNode(_))}let Xe={};function Qt(k,_){const D=_&&_[0];if(K+=k,D==null)return he(),0;if(Xe.type==="begin"&&_.type==="end"&&Xe.index===_.index&&D===""){if(K+=T.slice(_.index,_.index+1),!V){const Z=new Error(`0 width match regex (${b})`);throw Z.languageName=b,Z.badRule=Xe.rule,Z}return 1}if(Xe=_,_.type==="begin")return bn(_);if(_.type==="illegal"&&!B){const Z=new Error('Illegal lexeme "'+D+'" for mode "'+($.scope||"<unnamed>")+'"');throw Z.mode=$,Z}else if(_.type==="end"){const Z=xn(_);if(Z!==qt)return Z}if(_.type==="illegal"&&D==="")return K+=`
`,1;if(xt>1e5&&xt>_.index*3)throw new Error("potential infinite loop, way more iterations than matches");return K+=D,D.length}const ve=_e(b);if(!ve)throw Le(J.replace("{}",b)),new Error('Unknown language: "'+b+'"');const yn=Jr(ve);let bt="",$=Y||yn;const Vt={},se=new w.__emitter(w);vn();let K="",We=0,Me=0,xt=0,vt=!1;try{if(ve.__emitTokens)ve.__emitTokens(T,se);else{for($.matcher.considerAll();;){xt++,vt?vt=!1:$.matcher.considerAll(),$.matcher.lastIndex=Me;const k=$.matcher.exec(T);if(!k)break;const _=T.substring(Me,k.index),D=Qt(_,k);Me=k.index+D}Qt(T.substring(Me))}return se.finalize(),bt=se.toHTML(),{language:b,value:bt,relevance:We,illegal:!1,_emitter:se,_top:$}}catch(k){if(k.message&&k.message.includes("Illegal"))return{language:b,value:ht(T),illegal:!0,relevance:0,_illegalBy:{message:k.message,index:Me,context:T.slice(Me-100,Me+100),mode:k.mode,resultSoFar:bt},_emitter:se};if(V)return{language:b,value:ht(T),illegal:!1,relevance:0,errorRaised:k,_emitter:se,_top:$};throw k}}function gt(b){const T={value:ht(b),illegal:!1,relevance:0,_top:E,_emitter:new w.__emitter(w)};return T._emitter.addText(b),T}function ft(b,T){T=T||w.languages||Object.keys(f);const B=gt(b),Y=T.filter(_e).filter(Xt).map(he=>Pe(he,b,!1));Y.unshift(B);const re=Y.sort((he,xe)=>{if(he.relevance!==xe.relevance)return xe.relevance-he.relevance;if(he.language&&xe.language){if(_e(he.language).supersetOf===xe.language)return 1;if(_e(xe.language).supersetOf===he.language)return-1}return 0}),[fe,Se]=re,Ze=fe;return Ze.secondBest=Se,Ze}function an(b,T,B){const Y=T&&v[T]||B;b.classList.add("hljs"),b.classList.add(`language-${Y}`)}function mt(b){let T=null;const B=ne(b);if(R(B))return;if(Fe("before:highlightElement",{el:b,language:B}),b.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",b);return}if(b.children.length>0&&(w.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(b)),w.throwUnescapedHTML))throw new rn("One of your code blocks includes unescaped HTML.",b.innerHTML);T=b;const Y=T.textContent,re=B?te(Y,{language:B,ignoreIllegals:!0}):ft(Y);b.innerHTML=re.value,b.dataset.highlighted="yes",an(b,B,re.language),b.result={language:re.language,re:re.relevance,relevance:re.relevance},re.secondBest&&(b.secondBest={language:re.secondBest.language,relevance:re.secondBest.relevance}),Fe("after:highlightElement",{el:b,result:re,text:Y})}function sn(b){w=Ut(w,b)}const on=()=>{Ge(),$e("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function ln(){Ge(),$e("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Ft=!1;function Ge(){function b(){Ge()}if(document.readyState==="loading"){Ft||window.addEventListener("DOMContentLoaded",b,!1),Ft=!0;return}document.querySelectorAll(w.cssSelector).forEach(mt)}function cn(b,T){let B=null;try{B=T(c)}catch(Y){if(Le("Language definition for '{}' could not be registered.".replace("{}",b)),V)Le(Y);else throw Y;B=E}B.name||(B.name=b),f[b]=B,B.rawDefinition=T.bind(null,c),B.aliases&&Zt(B.aliases,{languageName:b})}function dn(b){delete f[b];for(const T of Object.keys(v))v[T]===b&&delete v[T]}function un(){return Object.keys(f)}function _e(b){return b=(b||"").toLowerCase(),f[b]||f[v[b]]}function Zt(b,{languageName:T}){typeof b=="string"&&(b=[b]),b.forEach(B=>{v[B.toLowerCase()]=T})}function Xt(b){const T=_e(b);return T&&!T.disableAutodetect}function pn(b){b["before:highlightBlock"]&&!b["before:highlightElement"]&&(b["before:highlightElement"]=T=>{b["before:highlightBlock"](Object.assign({block:T.el},T))}),b["after:highlightBlock"]&&!b["after:highlightElement"]&&(b["after:highlightElement"]=T=>{b["after:highlightBlock"](Object.assign({block:T.el},T))})}function hn(b){pn(b),N.push(b)}function gn(b){const T=N.indexOf(b);T!==-1&&N.splice(T,1)}function Fe(b,T){const B=b;N.forEach(function(Y){Y[B]&&Y[B](T)})}function fn(b){return $e("10.7.0","highlightBlock will be removed entirely in v12.0"),$e("10.7.0","Please use highlightElement now."),mt(b)}Object.assign(c,{highlight:te,highlightAuto:ft,highlightAll:Ge,highlightElement:mt,highlightBlock:fn,configure:sn,initHighlighting:on,initHighlightingOnLoad:ln,registerLanguage:cn,unregisterLanguage:dn,listLanguages:un,getLanguage:_e,registerAliases:Zt,autoDetection:Xt,inherit:Ut,addPlugin:hn,removePlugin:gn}),c.debugMode=function(){V=!1},c.safeMode=function(){V=!0},c.versionString=tn,c.regex={concat:m,lookahead:h,either:M,optional:g,anyNumberOfTimes:x};for(const b in ke)typeof ke[b]=="object"&&n(ke[b]);return Object.assign(c,ke),c},Oe=Gt({});return Oe.newInstance=()=>Gt({}),yt=Oe,Oe.HighlightJS=Oe,Oe.default=Oe,yt}var Za=Fa();const ce=Ga(Za),mr="[A-Za-z$_][0-9A-Za-z$_]*",Xa=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Wa=["true","false","null","undefined","NaN","Infinity"],Mr=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Cr=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Rr=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ya=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Ka=[].concat(Rr,Mr,Cr);function Nr(n){const r=n.regex,e=(P,{after:I})=>{const H="</"+P[0].slice(1);return P.input.indexOf(H,I)!==-1},t=mr,a={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(P,I)=>{const H=P[0].length+P.index,q=P.input[H];if(q==="<"||q===","){I.ignoreMatch();return}q===">"&&(e(P,{after:H})||I.ignoreMatch());let le;const Ee=P.input.substring(H);if(le=Ee.match(/^\s*=/)){I.ignoreMatch();return}if((le=Ee.match(/^\s+extends\s+/))&&le.index===0){I.ignoreMatch();return}}},o={$pattern:mr,keyword:Xa,literal:Wa,built_in:Ka,"variable.language":Ya},l="[0-9](_?[0-9])*",d=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},x={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},g={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},y={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,h]},A={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},O=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,x,g,m,y,{match:/\$\d+/},p];h.contains=O.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(O)});const X=[].concat(A,h.contains),G=X.concat([{begin:/(\s*)\(/,end:/\)/,keywords:o,contains:["self"].concat(X)}]),j={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:G},W={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,r.concat(t,"(",r.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},Q={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Mr,...Cr]}},de={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ge={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[j],illegal:/%/},pe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function L(P){return r.concat("(?!",P.join("|"),")")}const C={match:r.concat(/\b/,L([...Rr,"super","import"].map(P=>`${P}\\s*\\(`)),t,r.lookahead(/\s*\(/)),className:"title.function",relevance:0},F={begin:r.concat(/\./,r.lookahead(r.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ee={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},j]},ae="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",ue={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(ae)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[j]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:G,CLASS_REFERENCE:Q},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),de,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,x,g,m,y,A,{match:/\$\d+/},p,Q,{scope:"attr",match:t+r.lookahead(":"),relevance:0},ue,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[A,n.REGEXP_MODE,{className:"function",begin:ae,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:G}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:a.begin,end:a.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},ge,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[j,n.inherit(n.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},F,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[j]},C,pe,W,ee,{match:/\$[(.]/}]}}const et="[A-Za-z$_][0-9A-Za-z$_]*",$r=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Or=["true","false","null","undefined","NaN","Infinity"],Ir=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Dr=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Pr=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Br=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Hr=[].concat(Pr,Ir,Dr);function Qa(n){const r=n.regex,e=(P,{after:I})=>{const H="</"+P[0].slice(1);return P.input.indexOf(H,I)!==-1},t=et,a={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(P,I)=>{const H=P[0].length+P.index,q=P.input[H];if(q==="<"||q===","){I.ignoreMatch();return}q===">"&&(e(P,{after:H})||I.ignoreMatch());let le;const Ee=P.input.substring(H);if(le=Ee.match(/^\s*=/)){I.ignoreMatch();return}if((le=Ee.match(/^\s+extends\s+/))&&le.index===0){I.ignoreMatch();return}}},o={$pattern:et,keyword:$r,literal:Or,built_in:Hr,"variable.language":Br},l="[0-9](_?[0-9])*",d=`\\.(${l})`,u="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b`},{begin:`\\b(${u})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:o,contains:[]},x={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},g={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,h],subLanguage:"css"}},m={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},y={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,h]},A={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},O=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,x,g,m,y,{match:/\$\d+/},p];h.contains=O.concat({begin:/\{/,end:/\}/,keywords:o,contains:["self"].concat(O)});const X=[].concat(A,h.contains),G=X.concat([{begin:/(\s*)\(/,end:/\)/,keywords:o,contains:["self"].concat(X)}]),j={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:G},W={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,r.concat(t,"(",r.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},Q={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ir,...Dr]}},de={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},ge={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[j],illegal:/%/},pe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function L(P){return r.concat("(?!",P.join("|"),")")}const C={match:r.concat(/\b/,L([...Pr,"super","import"].map(P=>`${P}\\s*\\(`)),t,r.lookahead(/\s*\(/)),className:"title.function",relevance:0},F={begin:r.concat(/\./,r.lookahead(r.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ee={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},j]},ae="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",ue={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(ae)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[j]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:o,exports:{PARAMS_CONTAINS:G,CLASS_REFERENCE:Q},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),de,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,x,g,m,y,A,{match:/\$\d+/},p,Q,{scope:"attr",match:t+r.lookahead(":"),relevance:0},ue,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[A,n.REGEXP_MODE,{className:"function",begin:ae,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:G}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:a.begin,end:a.end},{match:s},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},ge,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[j,n.inherit(n.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},F,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[j]},C,pe,W,ee,{match:/\$[(.]/}]}}function zr(n){const r=n.regex,e=Qa(n),t=et,a=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],s={begin:[/namespace/,/\s+/,n.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[e.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},l=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],d={$pattern:et,keyword:$r.concat(l),literal:Or,built_in:Hr.concat(a),"variable.language":Br},u={className:"meta",begin:"@"+t},p=(m,y,M)=>{const A=m.contains.findIndex(O=>O.label===y);if(A===-1)throw new Error("can not find mode to replace");m.contains.splice(A,1,M)};Object.assign(e.keywords,d),e.exports.PARAMS_CONTAINS.push(u);const h=e.contains.find(m=>m.scope==="attr"),x=Object.assign({},h,{match:r.concat(t,r.lookahead(/\s*\?:/))});e.exports.PARAMS_CONTAINS.push([e.exports.CLASS_REFERENCE,h,x]),e.contains=e.contains.concat([u,s,i,x]),p(e,"shebang",n.SHEBANG()),p(e,"use_strict",o);const g=e.contains.find(m=>m.label==="func.def");return g.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}function jr(n){const r=n.regex,e=r.concat(/[\p{L}_]/u,r.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),t=/[\p{L}0-9._:-]+/u,a={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=n.inherit(s,{begin:/\(/,end:/\)/}),o=n.inherit(n.APOS_STRING_MODE,{className:"string"}),l=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),d={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:t,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,l,o,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,i,l,o]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},a,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[d],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[d],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:r.concat(/</,r.lookahead(r.concat(e,r.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:e,relevance:0,starts:d}]},{className:"tag",begin:r.concat(/<\//,r.lookahead(r.concat(e,/>/))),contains:[{className:"name",begin:e,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const Va=n=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:n.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:n.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),Ja=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],es=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],ts=[...Ja,...es],rs=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),ns=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),as=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),ss=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function is(n){const r=n.regex,e=Va(n),t={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},a="and or not only",s=/@-?\w[\w]*(-\w+)*/,i="[a-zA-Z-][a-zA-Z0-9_-]*",o=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[e.BLOCK_COMMENT,t,e.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+i,relevance:0},e.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+ns.join("|")+")"},{begin:":(:)?("+as.join("|")+")"}]},e.CSS_VARIABLE,{className:"attribute",begin:"\\b("+ss.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[e.BLOCK_COMMENT,e.HEXCOLOR,e.IMPORTANT,e.CSS_NUMBER_MODE,...o,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...o,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},e.FUNCTION_DISPATCH]},{begin:r.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:s},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:a,attribute:rs.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...o,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+ts.join("|")+")\\b"}]}}function os(n){const r=n.regex,e=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],o={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},l={className:"meta",begin:/^(>>>|\.\.\.) /},d={className:"subst",begin:/\{/,end:/\}/,keywords:o,illegal:/#/},u={begin:/\{\{/,relevance:0},p={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,l,u,d]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,l,u,d]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,u,d]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,u,d]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},h="[0-9](_?[0-9])*",x=`(\\b(${h}))?\\.(${h})|\\b(${h})\\.`,g=`\\b|${t.join("|")}`,m={className:"number",relevance:0,variants:[{begin:`(\\b(${h})|(${x}))[eE][+-]?(${h})[jJ]?(?=${g})`},{begin:`(${x})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${g})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${g})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`},{begin:`\\b(${h})[jJ](?=${g})`}]},y={className:"comment",begin:r.lookahead(/# type:/),end:/$/,keywords:o,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},M={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:["self",l,m,p,n.HASH_COMMENT_MODE]}]};return d.contains=[p,m,l],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:o,illegal:/(<\/|\?)|=>/,contains:[l,m,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},p,y,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,e],scope:{1:"keyword",3:"title.function"},contains:[M]},{variants:[{match:[/\bclass/,/\s+/,e,/\s*/,/\(\s*/,e,/\s*\)/]},{match:[/\bclass/,/\s+/,e]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[m,M,p]}]}}function ls(n){const r={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},e={match:/[{}[\],:]/,className:"punctuation",relevance:0},t=["true","false","null"],a={scope:"literal",beginKeywords:t.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:t},contains:[r,e,n.QUOTE_STRING_MODE,a,n.C_NUMBER_MODE,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Ur(n){const r=n.regex,e={},t={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[e]}]};Object.assign(e,{className:"variable",variants:[{begin:r.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},t]});const a={className:"subst",begin:/\$\(/,end:/\)/,contains:[n.BACKSLASH_ESCAPE]},s=n.inherit(n.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},o={className:"string",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,e,a]};a.contains.push(o);const l={match:/\\"/},d={className:"string",begin:/'/,end:/'/},u={match:/\\'/},p={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},n.NUMBER_MODE,e]},h=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],x=n.SHEBANG({binary:`(${h.join("|")})`,relevance:10}),g={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[n.inherit(n.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},m=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],y=["true","false"],M={match:/(\/[a-z._-]+)+/},A=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],O=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],X=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],G=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:m,literal:y,built_in:[...A,...O,"set","shopt",...X,...G]},contains:[x,n.SHEBANG(),g,p,s,i,M,o,l,d,u,e]}}function qr(n){const r=n.regex,e={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},t={begin:"^[-\\*]{3,}",end:"$"},a={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},s={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},i={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},o=/[A-Za-z][A-Za-z0-9+.-]*/,l={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:r.concat(/\[.+?\]\(/,o,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},d={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},u={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},p=n.inherit(d,{contains:[]}),h=n.inherit(u,{contains:[]});d.contains.push(h),u.contains.push(p);let x=[e,l];return[d,u,p,h].forEach(M=>{M.contains=M.contains.concat(x)}),x=x.concat(d,u),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:x},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:x}]}]},e,s,d,u,{className:"quote",begin:"^>\\s+",contains:x,end:"$"},a,t,l,i,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}ce.registerLanguage("javascript",Nr);ce.registerLanguage("js",Nr);ce.registerLanguage("typescript",zr);ce.registerLanguage("ts",zr);ce.registerLanguage("html",jr);ce.registerLanguage("xml",jr);ce.registerLanguage("css",is);ce.registerLanguage("python",os);ce.registerLanguage("json",ls);ce.registerLanguage("bash",Ur);ce.registerLanguage("shell",Ur);ce.registerLanguage("markdown",qr);ce.registerLanguage("md",qr);U.setOptions({gfm:!0,breaks:!1});const nt=new U.Renderer;nt.heading=function({text:n,depth:r}){const e=n.toLowerCase().replace(/<[^>]+>/g,"").replace(/[^\w一-鿿]+/g,"-").replace(/^-|-$/g,"");return`<h${r} id="${e}">${n}</h${r}>`};function ze(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}nt.code=function({text:n,lang:r}){if(r==="mermaid")return`<div class="mermaid">${n}</div>`;const e=r&&ce.getLanguage(r);let t="";const a=e?`language-${r}`:"language-plaintext";if(e)try{t=ce.highlight(n,{language:r}).value}catch{t=ze(n)}else t=ze(n);return`<div class="code-block-wrapper"><div class="code-block-header">${r?`<span class="code-lang-label">${ze(r)}</span>`:""}<button class="code-copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.parentElement.querySelector('code').textContent).then(()=>{this.textContent='已复制';setTimeout(()=>{this.textContent='复制'},1500)})">复制</button></div><pre><code class="hljs ${a}">${t}</code></pre></div>`};nt.image=function({href:n,title:r,text:e}){let t;/^https?:\/\//.test(n)?t=n:t=`/images/${n.split("/").pop()||n}`;const a=r?` title="${ze(r)}"`:"";return`<img src="${t}" alt="${ze(e)}"${a}>`};U.use(qa());U.use({renderer:nt});function cs(n){return U.parse(n)}class ds extends HTMLElement{constructor(){super(...arguments);S(this,"_toc",[]);S(this,"_activeId","");S(this,"_article",null);S(this,"_renderedHtml","");S(this,"_scrollHandler",null);S(this,"_lightboxKeyHandler",null);S(this,"_headingOffsets",[])}connectedCallback(){const t=new URLSearchParams(window.location.search).get("slug")||window.location.hash.replace("#/","");this._article=wt.find(a=>a.slug===t)||wt[0]||null;try{this.render(),this._article&&(this._buildTOC(),this._cloneTOCToDrawer(),this._setupScrollTracking(),this._setupMobileDrawer())}catch(a){console.error("[emu-article] Error in connectedCallback:",a)}}disconnectedCallback(){this._scrollHandler&&window.removeEventListener("scroll",this._scrollHandler),this._lightboxKeyHandler&&document.removeEventListener("keydown",this._lightboxKeyHandler)}_buildTOC(){const e=this.querySelector("#article-toc-list");if(!e||!this._article)return;const t=this.querySelector("#article-body");t&&(this._toc=[],t.querySelectorAll("h2, h3").forEach(a=>{const s=a.getAttribute("id")||"";this._toc.push({id:s,text:a.textContent||"",level:a.tagName==="H2"?2:3})}),e.innerHTML=this._toc.map((a,s)=>{const i=a.level===3?"pl-4":"",o=s===0?"toc-active":"toc-inactive";return`
          <a href="#${a.id}"
             data-toc-id="${a.id}"
             class="toc-item ${o} block py-1.5 text-sm rounded-lg transition-all duration-200 ${i}">
            ${a.text}
          </a>
        `}).join(""))}_setupScrollTracking(){const e=this.querySelector("#article-body"),t=this.querySelector("#article-progress-bar"),a=this.querySelector("#article-toc-list");if(!e)return;this._cacheHeadingOffsets();const s=a?Array.from(a.querySelectorAll(".toc-item")):[];this._scrollHandler=()=>{var l;if(t){const d=this.querySelector("#article-container");if(d){const u=d.getBoundingClientRect(),p=d.scrollHeight-window.innerHeight,h=Math.min(100,Math.max(0,-u.top/p*100));t.style.width=`${h}%`}}const i=window.scrollY+100;let o=((l=this._toc[0])==null?void 0:l.id)||"";for(const d of this._headingOffsets)if(d.top<=i)o=d.id;else break;o!==this._activeId&&(this._activeId=o,s.forEach(d=>{d.dataset.tocId===o?(d.classList.remove("toc-inactive"),d.classList.add("toc-active")):(d.classList.remove("toc-active"),d.classList.add("toc-inactive"))}))},window.addEventListener("scroll",this._scrollHandler,{passive:!0}),this._scrollHandler()}_cacheHeadingOffsets(){const e=this.querySelector("#article-body");e&&(this._headingOffsets=[],e.querySelectorAll("h2, h3").forEach(t=>{this._headingOffsets.push({id:t.id,top:t.getBoundingClientRect().top+window.scrollY})}))}_setupMobileDrawer(){const e=this.querySelector("#toc-toggle-btn"),t=this.querySelector("#toc-drawer"),a=this.querySelector("#toc-drawer-overlay"),s=this.querySelector("#toc-drawer-close");if(!e||!t||!a)return;const i=()=>{t.classList.remove("translate-y-full"),a.classList.remove("opacity-0","pointer-events-none"),document.body.style.overflow="hidden"},o=()=>{t.classList.add("translate-y-full"),a.classList.add("opacity-0","pointer-events-none"),document.body.style.overflow=""};e.addEventListener("click",i),s==null||s.addEventListener("click",o),a.addEventListener("click",o),t.addEventListener("click",l=>{const d=l.target.closest(".toc-item");if(!d)return;l.preventDefault();const u=d.getAttribute("href");o(),u&&requestAnimationFrame(()=>{const p=document.querySelector(u);p&&p.scrollIntoView({behavior:"smooth",block:"start"})})})}_setupImageLightbox(){const e=this.querySelector("#image-lightbox"),t=this.querySelector("#image-lightbox .image-lightbox-img"),a=this.querySelector("#image-lightbox .image-lightbox-close"),s=this.querySelector("#article-body");if(!e||!t||!s)return;const i=5;let o=1,l=0,d=0,u="none",p=0,h=0,x=0,g=0,m=0,y=0,M=0,A=!1,O=0,X=0,G=0;const j=(L=!1)=>{t.style.transition=L?"transform 0.25s ease":"none",t.style.transform=`translate(${l}px, ${d}px) scale(${o})`},W=()=>{const L=Math.max(0,(t.clientWidth*o-window.innerWidth)/2),C=Math.max(0,(t.clientHeight*o-window.innerHeight)/2);l=Math.min(L,Math.max(-L,l)),d=Math.min(C,Math.max(-C,d))},Q=(L=!1)=>{o=1,l=0,d=0,u="none",L?j(!0):(t.style.transition="",t.style.transform="")},de=(L,C,F,ee=!1)=>{const ae=Math.min(i,Math.max(1,F)),ue=window.innerWidth/2,P=window.innerHeight/2,I=ae/o;l=(L-ue)*(1-I)+I*l,d=(C-P)*(1-I)+I*d,o=ae,o<=1.001&&(o=1,l=0,d=0),W(),j(ee)},ge=(L,C)=>{t.src=L,t.alt=C,Q(!1),e.classList.add("active"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"},pe=()=>{e.classList.remove("active"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="",Q(!1)};s.addEventListener("click",L=>{const C=L.target;if(C.tagName==="IMG"&&C.closest(".article-prose")){const F=C;ge(F.src,F.alt)}}),a==null||a.addEventListener("click",pe),e.addEventListener("click",L=>{L.target===e&&pe()}),t.addEventListener("touchstart",L=>{if(L.touches.length===2){u="pinch",A=!0;const C=L.touches[0],F=L.touches[1];p=Math.hypot(F.clientX-C.clientX,F.clientY-C.clientY),h=(C.clientX+F.clientX)/2,x=(C.clientY+F.clientY)/2,L.preventDefault()}else if(L.touches.length===1){const C=L.touches[0];y=g=C.clientX,M=m=C.clientY,A=!1,u=o>1?"pan":"none"}},{passive:!1}),t.addEventListener("touchmove",L=>{if(u==="pinch"&&L.touches.length>=2){const C=L.touches[0],F=L.touches[1],ee=Math.hypot(F.clientX-C.clientX,F.clientY-C.clientY),ae=(C.clientX+F.clientX)/2,ue=(C.clientY+F.clientY)/2;l+=ae-h,d+=ue-x;const P=Math.min(i,Math.max(1,o*ee/p)),I=window.innerWidth/2,H=window.innerHeight/2,q=P/o;l=(ae-I)*(1-q)+q*l,d=(ue-H)*(1-q)+q*d,o=P,p=ee,h=ae,x=ue,W(),j(!1),L.preventDefault()}else if(u==="pan"&&L.touches.length===1){const C=L.touches[0];l+=C.clientX-g,d+=C.clientY-m,g=C.clientX,m=C.clientY,(Math.abs(C.clientX-y)>6||Math.abs(C.clientY-M)>6)&&(A=!0),W(),j(!1),L.preventDefault()}},{passive:!1}),t.addEventListener("touchend",L=>{if(L.touches.length===0){const C=u==="pinch";if(u="none",!C&&!A){const F=Date.now(),ee=L.changedTouches[0];if(F-O<300&&Math.abs(ee.clientX-X)<30&&Math.abs(ee.clientY-G)<30){o>1?Q(!0):de(ee.clientX,ee.clientY,2.5,!0),O=0;return}O=F,X=ee.clientX,G=ee.clientY}o<=1.001?Q(!0):(W(),j(!0))}else if(L.touches.length===1){const C=L.touches[0];y=g=C.clientX,M=m=C.clientY,u=o>1?"pan":"none"}},{passive:!1}),t.addEventListener("wheel",L=>{L.preventDefault();const C=Math.exp(-L.deltaY*.0015);de(L.clientX,L.clientY,o*C,!1)},{passive:!1}),this._lightboxKeyHandler=L=>{L.key==="Escape"&&e.classList.contains("active")&&pe()},document.addEventListener("keydown",this._lightboxKeyHandler)}render(){if(!this._article){this.innerHTML=`
        <section class="py-20 px-margin-mobile md:px-margin-desktop">
            <div class="max-w-container-max mx-auto text-center">
                <span class="material-symbols-outlined text-[48px] text-on-surface-variant/30 mb-4 block">article</span>
                <p class="text-on-surface-variant/50 text-base">暂无文章内容</p>
            </div>
        </section>`;return}this._renderedHtml=cs(this._article.content);const e=this._renderedHtml;this.innerHTML=`
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

      <!-- 图片 Lightbox -->
      <div id="image-lightbox" class="image-lightbox" aria-hidden="true">
        <button class="image-lightbox-close" aria-label="关闭图片预览">
          <span class="material-symbols-outlined text-[28px]">close</span>
        </button>
        <img class="image-lightbox-img" src="" alt="" />
      </div>
    `,this._renderMermaid(),this._setupImageLightbox()}async _renderMermaid(){const e=this.querySelectorAll(".mermaid");if(e.length!==0)try{const{default:t}=await Jn(async()=>{const{default:a}=await import("./mermaid.core-NOtTrvz6.js").then(s=>s.aH);return{default:a}},[]);t.initialize({startOnLoad:!1,theme:document.documentElement.classList.contains("dark")?"dark":"default",securityLevel:"loose",fontFamily:"'Hanken Grotesk', sans-serif"}),await t.run({nodes:e})}catch(t){console.warn("[emu-article] mermaid render error:",t)}}_cloneTOCToDrawer(){const e=this.querySelector("#article-toc-list"),t=this.querySelector("#toc-drawer-list");e&&t&&(t.innerHTML=e.innerHTML)}_getStyles(){return`
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

      /* ── Image Lightbox ── */
      .image-lightbox {
        position: fixed;
        inset: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }
      .image-lightbox.active {
        opacity: 1;
        visibility: visible;
      }
      .image-lightbox-img {
        max-width: 70vw !important;
        max-height: 70vh !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain;
        border-radius: 12px;
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
        border: none !important;
        margin: 0 !important;
        cursor: default !important;
        touch-action: none;
        -webkit-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        will-change: transform;
        transform: scale(0.95);
        transition: transform 0.3s ease;
      }
      .image-lightbox.active .image-lightbox-img {
        transform: scale(1);
      }
      .image-lightbox-close {
        position: absolute;
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
        z-index: 101;
      }
      .image-lightbox-close:hover {
        background: rgba(255, 255, 255, 0.3);
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
    `}}customElements.define("emu-article",ds);class us extends HTMLElement{connectedCallback(){this.render()}render(){const r=er.related.map(t=>`
        <li>
          <a class="text-sm text-on-surface-variant hover:text-primary transition-colors" href="${t.href}" target="_blank" rel="noopener noreferrer">
            ${t.label}
          </a>
        </li>
      `).join(""),e=er.bottom.map(t=>`
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
                  src="${Tt}"
                >
                <span class="font-headline-md text-lg font-bold text-on-surface dark:text-surface-bright tracking-tight">
                  ${br}
                </span>
              </div>
              <p class="font-body-md text-sm text-on-surface-variant dark:text-surface-variant max-w-sm mb-6 leading-relaxed">
                ${Jt}<br>${Tn}
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
              © ${new Date().getFullYear()} ${Jt}.
            </p>
            <nav class="flex flex-wrap justify-center gap-6" aria-label="页脚导航">
              ${e}
            </nav>
          </div>
        </div>
      </footer>
    `}}customElements.define("emu-footer",us);class ps extends HTMLElement{constructor(){super(...arguments);S(this,"_clickCount",0);S(this,"_clickTimer",null);S(this,"_inputBuffer",[]);S(this,"_isActive",!1);S(this,"_clickHandler",null);S(this,"_keydownHandler",null)}connectedCallback(){this.setupStyles(),this.setupEventListeners(),console.log('[EMU-Stu] Win气泡彩蛋已加载。提示：连击 Logo 3次 或键盘输入 "win" 触发！')}disconnectedCallback(){this._clickHandler&&document.removeEventListener("click",this._clickHandler),this._keydownHandler&&window.removeEventListener("keydown",this._keydownHandler)}setupStyles(){const e=document.createElement("style");e.textContent=`
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
        `,t.style.opacity="1",t.style.transform="translateY(0)",requestAnimationFrame(()=>{const a=t.querySelector(".easter-egg-line1"),s=t.querySelector(".easter-egg-line2");a&&(a.style.opacity="1",a.style.transform="translateY(0)"),s&&(s.style.opacity="1",s.style.transform="translateY(0)")}))},1e3),setTimeout(()=>{this.restoreHero()},6e3)}spawnWinBubbles(){const t=document.createDocumentFragment(),a=[];for(let s=0;s<50;s++){const i=document.createElement("div");i.className="win-bubble-wrapper";const o=document.createElement("div"),l=Math.random()>.5?"bubble-right":"bubble-left";o.className=`win-bubble ${l}`,o.textContent="win";const d=Math.floor(Math.random()*53)+32;o.style.width=`${d}px`,o.style.height=`${d*.72}px`,o.style.fontSize=`${d*.32}px`;const u=Math.random()*90+5,p=Math.random()*80+10;i.style.left=`${u}vw`,i.style.top=`${p}vh`;const h=(Math.random()-.5)*90,x=-Math.random()*120-40;i.style.setProperty("--tx-end",`${h}px`),i.style.setProperty("--ty-end",`${x}px`);const g=Math.random()*1.6,m=Math.random()*.8+2.2;i.style.animation=`win-fly ${m}s cubic-bezier(0.16, 1, 0.3, 1) ${g}s forwards`,o.style.animation=`win-scale-fade ${m}s cubic-bezier(0.25, 1, 0.5, 1) ${g}s forwards`,i.appendChild(o),t.appendChild(i),a.push(i)}document.body.appendChild(t),setTimeout(()=>{a.forEach(s=>s.remove())},5500)}restoreHero(){const e=document.querySelector("emu-hero #hero-content-wrapper"),t=document.querySelector("emu-hero #hero-easter-egg-container");t&&(t.style.opacity="0",t.style.transform="translateY(12px)"),setTimeout(()=>{t&&(t.innerHTML=""),e&&(e.style.opacity="1",e.style.transform="translateY(0) scale(1)",e.style.pointerEvents="auto"),this._isActive=!1},1e3)}}customElements.define("emu-easter-egg",ps);if(typeof window<"u"){document.addEventListener("gesturestart",r=>{r.preventDefault()}),document.addEventListener("touchstart",r=>{r.touches.length>1&&r.preventDefault()},{passive:!1});let n=0;document.addEventListener("touchend",r=>{const e=Date.now();e-n<=300&&r.preventDefault(),n=e},{passive:!1})}export{Jn as _,Ga as g};
