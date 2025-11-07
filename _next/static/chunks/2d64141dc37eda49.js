(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,107562,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(435828);var o=t.i(240403),a=t.i(370128),s=t.i(527065);let n=s.css`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var l=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return r.html`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};c.styles=[o.resetStyles,o.elementStyles,n],l([(0,i.property)()],c.prototype,"text",void 0),l([(0,i.property)()],c.prototype,"icon",void 0),c=l([(0,a.customElement)("wui-icon-button")],c),t.s([],107562)},977441,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(435828),t.i(3731),t.i(187604);var o=t.i(240403),a=t.i(370128);t.i(210096);var s=t.i(527065);let n=s.css`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var l=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),r.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?r.html`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:r.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};c.styles=[o.elementStyles,o.resetStyles,n],l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)()],c.prototype,"name",void 0),l([(0,i.property)()],c.prototype,"imageSrc",void 0),l([(0,i.property)()],c.prototype,"walletIcon",void 0),l([(0,i.property)({type:Boolean})],c.prototype,"installed",void 0),l([(0,i.property)()],c.prototype,"badgeSize",void 0),c=l([(0,a.customElement)("wui-wallet-image")],c),t.s([],977441)},636931,t=>{"use strict";t.i(195126);var e=t.i(841066);let r=e.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;t.s(["networkSvgMd",0,r])},523066,t=>{"use strict";t.i(977441),t.s([])},925136,t=>{"use strict";t.i(195126);var e=t.i(841066);let r=e.svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;t.s(["networkSvgLg",0,r])},726197,636336,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083),o=t.i(925136),a=t.i(636931);let s=r.svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;t.i(435828),t.i(3731);var n=t.i(240403),l=t.i(370128),c=t.i(527065);let u=c.css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var d=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let p=class extends e.LitElement{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:a.networkSvgMd,lg:o.networkSvgLg},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--wui-spacing-3xl);
      --local-height: var(--wui-spacing-3xl);
      --local-icon-size: var(--wui-spacing-l);
    `):this.style.cssText=`

      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,r.html`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:r.html`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};p.styles=[n.resetStyles,u],d([(0,i.property)()],p.prototype,"size",void 0),d([(0,i.property)()],p.prototype,"name",void 0),d([(0,i.property)({type:Object})],p.prototype,"networkImagesBySize",void 0),d([(0,i.property)()],p.prototype,"imageSrc",void 0),d([(0,i.property)({type:Boolean})],p.prototype,"selected",void 0),d([(0,i.property)({type:Boolean})],p.prototype,"round",void 0),p=d([(0,l.customElement)("wui-network-image")],p),t.s([],636336),t.s([],726197)},389004,730877,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(435828);var o=t.i(240403),a=t.i(370128),s=t.i(527065);let n=s.css`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    :host(:not([size='sm'])) button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var l=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){this.dataset.size=this.size;let t="",e="";switch(this.size){case"lg":t="--wui-border-radius-xs",e="--wui-spacing-1xs";break;case"sm":t="--wui-border-radius-3xs",e="--wui-spacing-xxs";break;default:t="--wui-border-radius-xxs",e="--wui-spacing-2xs"}return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${e});
    `,r.html`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};c.styles=[o.resetStyles,o.elementStyles,o.colorStyles,n],l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,i.property)()],c.prototype,"icon",void 0),l([(0,i.property)()],c.prototype,"iconColor",void 0),c=l([(0,a.customElement)("wui-icon-link")],c),t.s([],730877),t.s([],389004)},665477,787193,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(27352);var o=t.i(240403),a=t.i(370128),s=t.i(527065);let n=s.css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }

  :host([data-size='xs']) {
    height: var(--wui-spacing-2l);
    padding: 0 var(--wui-spacing-3xs) !important;
  }

  :host([data-size='xs']) > wui-text {
    transform: translateY(2%);
  }
`;var l=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let t="md"===this.size||"xs"===this.size?"mini-700":"micro-700";return r.html`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};c.styles=[o.resetStyles,n],l([(0,i.property)()],c.prototype,"variant",void 0),l([(0,i.property)()],c.prototype,"size",void 0),c=l([(0,a.customElement)("wui-tag")],c),t.s([],787193),t.s([],665477)},994223,t=>{"use strict";var e=t.i(56530);let r={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:(void 0!==e.default&&void 0!==e.default.env?e.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};t.s(["ConstantsUtil",0,r])},879509,206914,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(666033),o=t.i(287831),a=t.i(179019),s=t.i(390739);let n=(0,o.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),l=(0,s.withErrorBoundary)({state:n,subscribe:t=>(0,o.subscribe)(n,()=>t(n)),subscribeKey:(t,e)=>(0,a.subscribeKey)(n,t,e),showTooltip({message:t,triggerRect:e,variant:r}){n.open=!0,n.message=t,n.triggerRect=e,n.variant=r},hide(){n.open=!1,n.message="",n.triggerRect={width:0,height:0,top:0,left:0}}});t.s(["TooltipController",0,l],206914),t.i(551831);var c=t.i(370128);t.i(20909),t.i(645168),t.i(686999);var u=t.i(527065);let d=u.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var p=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let h=class extends e.LitElement{constructor(){super(),this.unsubscribe=[],this.open=l.state.open,this.message=l.state.message,this.triggerRect=l.state.triggerRect,this.variant=l.state.variant,this.unsubscribe.push(l.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;let t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${e}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,r.html`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};h.styles=[d],p([(0,i.state)()],h.prototype,"open",void 0),p([(0,i.state)()],h.prototype,"message",void 0),p([(0,i.state)()],h.prototype,"triggerRect",void 0),p([(0,i.state)()],h.prototype,"variant",void 0),h=p([(0,c.customElement)("w3m-tooltip"),(0,c.customElement)("w3m-tooltip")],h),t.s([],879509)},3731,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083),o=t.i(240403),a=t.i(370128),s=t.i(527065);let n=s.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-object-fit='cover']) img {
    object-fit: cover;
    object-position: center center;
  }

  :host([data-object-fit='contain']) img {
    object-fit: contain;
    object-position: center center;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;var l=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.objectFit="cover"}render(){return this.objectFit&&(this.dataset.objectFit=this.objectFit),this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,r.html`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};c.styles=[o.resetStyles,o.colorStyles,n],l([(0,i.property)()],c.prototype,"src",void 0),l([(0,i.property)()],c.prototype,"alt",void 0),l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)()],c.prototype,"objectFit",void 0),c=l([(0,a.customElement)("wui-image")],c),t.s([],3731)},645168,t=>{"use strict";t.i(435828),t.s([])},918426,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083),o=t.i(370128),a=t.i(527065);let s=a.css`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var n=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let l=class extends e.LitElement{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,r.html`<slot></slot>`}};l.styles=[s],n([(0,i.property)()],l.prototype,"width",void 0),n([(0,i.property)()],l.prototype,"height",void 0),n([(0,i.property)()],l.prototype,"borderRadius",void 0),n([(0,i.property)()],l.prototype,"variant",void 0),l=n([(0,o.customElement)("wui-shimmer")],l),t.s([],918426)},963199,t=>{"use strict";t.i(918426),t.s([])},756052,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(435828),t.i(3731);var o=t.i(709626);function a(t,e,r){return t!==e&&(t-e<0?e-t:t-e)<=r+.1}let s={generate({uri:t,size:e,logoSize:i,dotColor:s="#141414"}){let n,l,c=[],u=(l=Math.sqrt((n=Array.prototype.slice.call(o.default.create(t,{errorCorrectionLevel:"Q"}).modules.data,0)).length),n.reduce((t,e,r)=>(r%l==0?t.push([e]):t[t.length-1].push(e))&&t,[])),d=e/u.length,p=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];p.forEach(({x:t,y:e})=>{let i=(u.length-7)*d*t,o=(u.length-7)*d*e;for(let t=0;t<p.length;t+=1){let e=d*(7-2*t);c.push(r.svg`
            <rect
              fill=${2===t?s:"transparent"}
              width=${0===t?e-5:e}
              rx= ${0===t?(e-5)*.45:.45*e}
              ry= ${0===t?(e-5)*.45:.45*e}
              stroke=${s}
              stroke-width=${5*(0===t)}
              height=${0===t?e-5:e}
              x= ${0===t?o+d*t+2.5:o+d*t}
              y= ${0===t?i+d*t+2.5:i+d*t}
            />
          `)}});let h=Math.floor((i+25)/d),g=u.length/2-h/2,w=u.length/2+h/2-1,v=[];u.forEach((t,e)=>{t.forEach((t,r)=>{!u[e][r]||e<7&&r<7||e>u.length-8&&r<7||e<7&&r>u.length-8||e>g&&e<w&&r>g&&r<w||v.push([e*d+d/2,r*d+d/2])})});let m={};return v.forEach(([t,e])=>{m[t]?m[t]?.push(e):m[t]=[e]}),Object.entries(m).map(([t,e])=>{let r=e.filter(t=>e.every(e=>!a(t,e,d)));return[Number(t),r]}).forEach(([t,e])=>{e.forEach(e=>{c.push(r.svg`<circle cx=${t} cy=${e} fill=${s} r=${d/2.5} />`)})}),Object.entries(m).filter(([t,e])=>e.length>1).map(([t,e])=>{let r=e.filter(t=>e.some(e=>a(t,e,d)));return[Number(t),r]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);let r=[];for(let t of e){let e=r.find(e=>e.some(e=>a(t,e,d)));e?e.push(t):r.push([t])}return[t,r.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,i])=>{c.push(r.svg`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${i}
                stroke=${s}
                stroke-width=${d/1.25}
                stroke-linecap="round"
              />
            `)})}),c}};var n=t.i(240403),l=t.i(370128),c=t.i(527065);let u=c.css`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var d=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let p=class extends e.LitElement{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??"#3396ff"}
    `,r.html`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let t="light"===this.theme?this.size:this.size-32;return r.svg`
      <svg height=${t} width=${t}>
        ${s.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?r.html`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:r.html`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};p.styles=[n.resetStyles,u],d([(0,i.property)()],p.prototype,"uri",void 0),d([(0,i.property)({type:Number})],p.prototype,"size",void 0),d([(0,i.property)()],p.prototype,"theme",void 0),d([(0,i.property)()],p.prototype,"imageSrc",void 0),d([(0,i.property)()],p.prototype,"alt",void 0),d([(0,i.property)()],p.prototype,"color",void 0),d([(0,i.property)({type:Boolean})],p.prototype,"arenaClear",void 0),d([(0,i.property)({type:Boolean})],p.prototype,"farcaster",void 0),p=d([(0,l.customElement)("wui-qr-code")],p),t.s([],756052)},241661,t=>{"use strict";async function e(t){return new Promise(e=>setTimeout(e,t))}t.s(["wait",()=>e])},360339,t=>{"use strict";let e=new(t.i(330439)).LruMap(8192);function r(t,{enabled:r=!0,id:i}){if(!r||!i)return t();if(e.get(i))return e.get(i);let o=t().finally(()=>e.delete(i));return e.set(i,o),o}t.s(["withDedupe",()=>r])},197527,t=>{"use strict";var e=t.i(241661);function r(t,{delay:i=100,retryCount:o=2,shouldRetry:a=()=>!0}={}){return new Promise((r,s)=>{let n=async({count:l=0}={})=>{let c=async({error:t})=>{let r="function"==typeof i?i({count:l,error:t}):i;r&&await (0,e.wait)(r),n({count:l+1})};try{let e=await t();r(e)}catch(t){if(l<o&&await a({count:l,error:t}))return c({error:t});s(t)}};n()})}t.s(["withRetry",()=>r])},539378,t=>{"use strict";var e=t.i(489059),r=t.i(989019),i=t.i(913512),o=t.i(173582),a=t.i(360339),s=t.i(197527),n=t.i(122128);function l(t,c={}){return async(l,u={})=>{let{dedupe:d=!1,methods:p,retryDelay:h=150,retryCount:g=3,uid:w}={...c,...u},{method:v}=l;if(p?.exclude?.includes(v)||p?.include&&!p.include.includes(v))throw new i.MethodNotSupportedRpcError(Error("method not supported"),{method:v});let m=d?(0,o.stringToHex)(`${w}.${(0,n.stringify)(l)}`):void 0;return(0,a.withDedupe)(()=>(0,s.withRetry)(async()=>{try{return await t(l)}catch(t){switch(t.code){case i.ParseRpcError.code:throw new i.ParseRpcError(t);case i.InvalidRequestRpcError.code:throw new i.InvalidRequestRpcError(t);case i.MethodNotFoundRpcError.code:throw new i.MethodNotFoundRpcError(t,{method:l.method});case i.InvalidParamsRpcError.code:throw new i.InvalidParamsRpcError(t);case i.InternalRpcError.code:throw new i.InternalRpcError(t);case i.InvalidInputRpcError.code:throw new i.InvalidInputRpcError(t);case i.ResourceNotFoundRpcError.code:throw new i.ResourceNotFoundRpcError(t);case i.ResourceUnavailableRpcError.code:throw new i.ResourceUnavailableRpcError(t);case i.TransactionRejectedRpcError.code:throw new i.TransactionRejectedRpcError(t);case i.MethodNotSupportedRpcError.code:throw new i.MethodNotSupportedRpcError(t,{method:l.method});case i.LimitExceededRpcError.code:throw new i.LimitExceededRpcError(t);case i.JsonRpcVersionUnsupportedError.code:throw new i.JsonRpcVersionUnsupportedError(t);case i.UserRejectedRequestError.code:throw new i.UserRejectedRequestError(t);case i.UnauthorizedProviderError.code:throw new i.UnauthorizedProviderError(t);case i.UnsupportedProviderMethodError.code:throw new i.UnsupportedProviderMethodError(t);case i.ProviderDisconnectedError.code:throw new i.ProviderDisconnectedError(t);case i.ChainDisconnectedError.code:throw new i.ChainDisconnectedError(t);case i.SwitchChainError.code:throw new i.SwitchChainError(t);case i.UnsupportedNonOptionalCapabilityError.code:throw new i.UnsupportedNonOptionalCapabilityError(t);case i.UnsupportedChainIdError.code:throw new i.UnsupportedChainIdError(t);case i.DuplicateIdError.code:throw new i.DuplicateIdError(t);case i.UnknownBundleIdError.code:throw new i.UnknownBundleIdError(t);case i.BundleTooLargeError.code:throw new i.BundleTooLargeError(t);case i.AtomicReadyWalletRejectedUpgradeError.code:throw new i.AtomicReadyWalletRejectedUpgradeError(t);case i.AtomicityNotSupportedError.code:throw new i.AtomicityNotSupportedError(t);case 5e3:throw new i.UserRejectedRequestError(t);default:if(t instanceof e.BaseError)throw t;throw new i.UnknownRpcError(t)}}},{delay:({count:t,error:e})=>{if(e&&e instanceof r.HttpRequestError){let t=e?.headers?.get("Retry-After");if(t?.match(/\d/))return 1e3*Number.parseInt(t)}return~~(1<<t)*h},retryCount:g,shouldRetry:({error:t})=>{var e;return"code"in(e=t)&&"number"==typeof e.code?-1===e.code||e.code===i.LimitExceededRpcError.code||e.code===i.InternalRpcError.code:!(e instanceof r.HttpRequestError)||!e.status||403===e.status||408===e.status||413===e.status||429===e.status||500===e.status||502===e.status||503===e.status||504===e.status||!1}}),{enabled:d,id:m})}}t.s(["buildRequest",()=>l])},477917,t=>{"use strict";let e,r=256;function i(t=11){if(!e||r+t>512){e="",r=0;for(let t=0;t<256;t++)e+=(256+256*Math.random()|0).toString(16).substring(1)}return e.substring(r,r+++t)}t.s(["uid",()=>i])},425577,t=>{"use strict";var e=t.i(539378),r=t.i(477917);function i({key:t,methods:i,name:o,request:a,retryCount:s=3,retryDelay:n=150,timeout:l,type:c},u){let d=(0,r.uid)();return{config:{key:t,methods:i,name:o,request:a,retryCount:s,retryDelay:n,timeout:l,type:c},request:(0,e.buildRequest)(a,{methods:i,retryCount:s,retryDelay:n,uid:d}),value:u}}t.s(["createTransport",()=>i])},942551,705137,t=>{"use strict";var e=t.i(489059);class r extends e.BaseError{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}t.s(["UrlRequiredError",()=>r],942551);var i=t.i(989019),o=t.i(122128);let a={current:0,take(){return this.current++},reset(){this.current=0}};function s(t,e={}){return{async request(r){let{body:s,onRequest:n=e.onRequest,onResponse:l=e.onResponse,timeout:c=e.timeout??1e4}=r,u={...e.fetchOptions??{},...r.fetchOptions??{}},{headers:d,method:p,signal:h}=u;try{let e,r=await function(t,{errorInstance:e=Error("timed out"),timeout:r,signal:i}){return new Promise((o,a)=>{(async()=>{let s;try{let n=new AbortController;r>0&&(s=setTimeout(()=>{i?n.abort():a(e)},r)),o(await t({signal:n?.signal||null}))}catch(t){t?.name==="AbortError"&&a(e),a(t)}finally{clearTimeout(s)}})()})}(async({signal:e})=>{let r={...u,body:Array.isArray(s)?(0,o.stringify)(s.map(t=>({jsonrpc:"2.0",id:t.id??a.take(),...t}))):(0,o.stringify)({jsonrpc:"2.0",id:s.id??a.take(),...s}),headers:{"Content-Type":"application/json",...d},method:p||"POST",signal:h||(c>0?e:null)},i=new Request(t,r),l=await n?.(i,r)??{...r,url:t};return await fetch(l.url??t,l)},{errorInstance:new i.TimeoutError({body:s,url:t}),timeout:c,signal:!0});if(l&&await l(r),r.headers.get("Content-Type")?.startsWith("application/json"))e=await r.json();else{e=await r.text();try{e=JSON.parse(e||"{}")}catch(t){if(r.ok)throw t;e={error:e}}}if(!r.ok)throw new i.HttpRequestError({body:s,details:(0,o.stringify)(e.error)||r.statusText,headers:r.headers,status:r.status,url:t});return e}catch(e){if(e instanceof i.HttpRequestError||e instanceof i.TimeoutError)throw e;throw new i.HttpRequestError({body:s,cause:e,url:t})}}}}t.s(["getHttpRpcClient",()=>s],705137)},927158,t=>{"use strict";var e=t.i(989019),r=t.i(942551),i=t.i(365478),o=t.i(705137),a=t.i(425577);function s(t,n={}){let{batch:l,fetchOptions:c,key:u="http",methods:d,name:p="HTTP JSON-RPC",onFetchRequest:h,onFetchResponse:g,retryDelay:w,raw:v}=n;return({chain:s,retryCount:m,timeout:y})=>{let{batchSize:f=1e3,wait:b=0}="object"==typeof l?l:{},x=n.retryCount??m,E=y??n.timeout??1e4,R=t||s?.rpcUrls.default.http[0];if(!R)throw new r.UrlRequiredError;let C=(0,o.getHttpRpcClient)(R,{fetchOptions:c,onRequest:h,onResponse:g,timeout:E});return(0,a.createTransport)({key:u,methods:d,name:p,async request({method:t,params:r}){let o={method:t,params:r},{schedule:a}=(0,i.createBatchScheduler)({id:R,wait:b,shouldSplitBatch:t=>t.length>f,fn:t=>C.request({body:t}),sort:(t,e)=>t.id-e.id}),s=async t=>l?a(t):[await C.request({body:t})],[{error:n,result:c}]=await s(o);if(v)return{error:n,result:c};if(n)throw new e.RpcRequestError({body:o,error:n,url:R});return c},retryCount:x,retryDelay:w,timeout:E,type:"http"},{fetchOptions:c,url:R})}}t.s(["http",()=>s])},608128,t=>{"use strict";var e=t.i(580762),r=t.i(913512),i=t.i(241661),o=t.i(425577);function a(t,e={}){let{key:r="fallback",name:n="Fallback",rank:l=!1,shouldThrow:c=s,retryCount:u,retryDelay:d}=e;return({chain:e,pollingInterval:a=4e3,timeout:s,...p})=>{let h=t,g=()=>{},w=(0,o.createTransport)({key:r,name:n,async request({method:t,params:r}){let i,o=async(a=0)=>{let n=h[a]({...p,chain:e,retryCount:0,timeout:s});try{let e=await n.request({method:t,params:r});return g({method:t,params:r,response:e,transport:n,status:"success"}),e}catch(s){if(g({error:s,method:t,params:r,transport:n,status:"error"}),c(s)||a===h.length-1||!(i??=h.slice(a+1).some(r=>{let{include:i,exclude:o}=r({chain:e}).config.methods||{};return i?i.includes(t):!o||!o.includes(t)})))throw s;return o(a+1)}};return o()},retryCount:u,retryDelay:d,type:"fallback"},{onResponse:t=>g=t,transports:h.map(t=>t({chain:e,retryCount:0}))});if(l){let t="object"==typeof l?l:{};!function({chain:t,interval:e=4e3,onTransports:r,ping:o,sampleCount:a=10,timeout:s=1e3,transports:n,weights:l={}}){let{stability:c=.7,latency:u=.3}=l,d=[],p=async()=>{let l=await Promise.all(n.map(async e=>{let r,i,a=e({chain:t,retryCount:0,timeout:s}),n=Date.now();try{await (o?o({transport:a}):a.request({method:"net_listening"})),i=1}catch{i=0}finally{r=Date.now()}return{latency:r-n,success:i}}));d.push(l),d.length>a&&d.shift();let h=Math.max(...d.map(t=>Math.max(...t.map(({latency:t})=>t))));r(n.map((t,e)=>{let r=d.map(t=>t[e].latency),i=r.reduce((t,e)=>t+e,0)/r.length,o=d.map(t=>t[e].success),a=o.reduce((t,e)=>t+e,0)/o.length;return 0===a?[0,e]:[u*(1-i/h)+c*a,e]}).sort((t,e)=>e[0]-t[0]).map(([,t])=>n[t])),await (0,i.wait)(e),p()};p()}({chain:e,interval:t.interval??a,onTransports:t=>h=t,ping:t.ping,sampleCount:t.sampleCount,timeout:t.timeout,transports:h,weights:t.weights})}return w}}function s(t){return!!("code"in t&&"number"==typeof t.code&&(t.code===r.TransactionRejectedRpcError.code||t.code===r.UserRejectedRequestError.code||e.ExecutionRevertedError.nodeMessage.test(t.message)||5e3===t.code))}t.s(["fallback",()=>a])},570654,t=>{"use strict";t.i(195126);var e,r,i=t.i(453404),o=t.i(841066);t.i(775353);var a=t.i(88083),s=t.i(666033),n=t.i(592697),l=t.i(435446),c=t.i(816478),u=t.i(974915),d=t.i(444173),p=t.i(629107),h=t.i(84761),g=t.i(643429);t.i(551831);var w=t.i(395375),v=t.i(370128);t.i(20909),t.i(503345),t.i(811060),t.i(686999);var m=i;t.i(783601);var y=t.i(229199);t.i(435828),t.i(27352),t.i(187604);var f=t.i(240403);(e=r||(r={})).approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn";var b=i;t.i(3731),t.i(210096);var x=t.i(527065);let E=x.css`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var R=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let C=class extends b.LitElement{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){let[t,e]=this.images,r=t?.type==="NFT",i=e?.url?"NFT"===e.type:r;return this.style.cssText=`
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `,o.html`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){let[t,e]=this.images,r=t?.type;return 2===this.images.length&&(t?.url||e?.url)?o.html`<div class="swap-images-container">
        ${t?.url?o.html`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e?.url?o.html`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t?.url?o.html`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:"NFT"===r?o.html`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:o.html`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t,e="accent-100";return(t=this.getIcon(),this.status&&(e=this.getStatusColor()),t)?o.html`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};C.styles=[E],R([(0,a.property)()],C.prototype,"type",void 0),R([(0,a.property)()],C.prototype,"status",void 0),R([(0,a.property)()],C.prototype,"direction",void 0),R([(0,a.property)({type:Boolean})],C.prototype,"onlyDirectionIcon",void 0),R([(0,a.property)({type:Array})],C.prototype,"images",void 0),R([(0,a.property)({type:Object})],C.prototype,"secondImage",void 0),C=R([(0,v.customElement)("wui-transaction-visual")],C);let T=x.css`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var $=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let k=class extends m.LitElement{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return o.html`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,y.ifDefined)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,y.ifDefined)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${r[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){let t=this.descriptions?.[0];return t?o.html`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){let t=this.descriptions?.[1];return t?o.html`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};k.styles=[f.resetStyles,T],$([(0,a.property)()],k.prototype,"type",void 0),$([(0,a.property)({type:Array})],k.prototype,"descriptions",void 0),$([(0,a.property)()],k.prototype,"date",void 0),$([(0,a.property)({type:Boolean})],k.prototype,"onlyDirectionIcon",void 0),$([(0,a.property)()],k.prototype,"status",void 0),$([(0,a.property)()],k.prototype,"direction",void 0),$([(0,a.property)({type:Array})],k.prototype,"images",void 0),$([(0,a.property)({type:Array})],k.prototype,"price",void 0),$([(0,a.property)({type:Array})],k.prototype,"amount",void 0),$([(0,a.property)({type:Array})],k.prototype,"symbol",void 0),k=$([(0,v.customElement)("wui-transaction-list-item")],k);var O=i;t.i(918426);let S=x.css`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`,z=class extends O.LitElement{render(){return o.html`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};z.styles=[f.resetStyles,S],z=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s}([(0,v.customElement)("wui-transaction-list-item-loader")],z);var N=t.i(463677);let I=x.css`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var P=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let j="last-transaction",A=class extends i.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=l.ChainController.state.activeCaipAddress,this.transactionsByYear=h.TransactionsController.state.transactionsByYear,this.loading=h.TransactionsController.state.loading,this.empty=h.TransactionsController.state.empty,this.next=h.TransactionsController.state.next,h.TransactionsController.clearCursor(),this.unsubscribe.push(l.ChainController.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(h.TransactionsController.resetTransactions(),h.TransactionsController.fetchTransactions(t)),this.caipAddress=t}),l.ChainController.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),h.TransactionsController.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return o.html` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){h.TransactionsController.resetTransactions(),this.caipAddress&&h.TransactionsController.fetchTransactions(c.CoreHelperUtil.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(t=>{let e=parseInt(t,10),r=Array(12).fill(null).map((t,r)=>({groupTitle:w.TransactionUtil.getTransactionGroupTitle(e,r),transactions:this.transactionsByYear[e]?.[r]})).filter(({transactions:t})=>t).reverse();return r.map(({groupTitle:t,transactions:e},i)=>{let a=i===r.length-1;return e?o.html`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${a?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${t}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(e,a)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,e){let{date:r,descriptions:i,direction:a,isAllNFT:s,images:n,status:l,transfers:c,type:u}=this.getTransactionListItemProps(t),d=c?.length>1;return c?.length!==2||s?d?c.map((t,i)=>{let a=w.TransactionUtil.getTransferDescription(t),s=e&&i===c.length-1;return o.html` <wui-transaction-list-item
          date=${r}
          direction=${t.direction}
          id=${s&&this.next?j:""}
          status=${l}
          type=${u}
          .onlyDirectionIcon=${!0}
          .images=${[n[i]]}
          .descriptions=${[a]}
        ></wui-transaction-list-item>`}):o.html`
      <wui-transaction-list-item
        date=${r}
        .direction=${a}
        id=${e&&this.next?j:""}
        status=${l}
        type=${u}
        .images=${n}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `:o.html`
        <wui-transaction-list-item
          date=${r}
          .direction=${a}
          id=${e&&this.next?j:""}
          status=${l}
          type=${u}
          .images=${n}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `}templateTransactions(t,e){return t.map((r,i)=>{let a=e&&i===t.length-1;return o.html`${this.templateRenderTransaction(r,a)}`})}emptyStateActivity(){return o.html`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return o.html`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?o.html`${this.emptyStateAccount()}`:o.html`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(o.html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){p.RouterController.push("WalletReceive")}createPaginationObserver(){let{projectId:t}=d.OptionsController.state;this.paginationObserver=new IntersectionObserver(([e])=>{e?.isIntersecting&&!this.loading&&(h.TransactionsController.fetchTransactions(c.CoreHelperUtil.getPlainAddress(this.caipAddress)),u.EventsController.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:c.CoreHelperUtil.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:(0,g.getPreferredAccountType)(l.ChainController.state.activeChain)===N.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();let t=this.shadowRoot?.querySelector(`#${j}`);t&&this.paginationObserver?.observe(t)}getTransactionListItemProps(t){let e=n.DateUtil.formatDate(t?.metadata?.minedAt),r=w.TransactionUtil.getTransactionDescriptions(t),i=t?.transfers,o=t?.transfers?.[0],a=!!o&&t?.transfers?.every(t=>!!t.nft_info),s=w.TransactionUtil.getTransactionImages(i);return{date:e,direction:o?.direction,descriptions:r,isAllNFT:a,images:s,status:t.metadata?.status,transfers:i,type:t.metadata?.operationType}}};A.styles=I,P([(0,a.property)()],A.prototype,"page",void 0),P([(0,s.state)()],A.prototype,"caipAddress",void 0),P([(0,s.state)()],A.prototype,"transactionsByYear",void 0),P([(0,s.state)()],A.prototype,"loading",void 0),P([(0,s.state)()],A.prototype,"empty",void 0),P([(0,s.state)()],A.prototype,"next",void 0),A=P([(0,v.customElement)("w3m-activity-list")],A),t.s([],570654)},440651,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083),o=t.i(666033),a=t.i(688138),s=t.i(629107),n=t.i(206914);t.i(551831);var l=t.i(370128),c=t.i(527065);let u=c.css`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let p=class extends e.LitElement{constructor(){super(),this.unsubscribe=[],this.text="",this.open=n.TooltipController.state.open,this.unsubscribe.push(s.RouterController.subscribeKey("view",()=>{n.TooltipController.hide()}),a.ModalController.subscribeKey("open",t=>{t||n.TooltipController.hide()}),n.TooltipController.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),n.TooltipController.hide()}render(){return r.html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return r.html`<slot></slot> `}onMouseEnter(){let t=this.getBoundingClientRect();this.open||n.TooltipController.showTooltip({message:this.text,triggerRect:{width:t.width,height:t.height,left:t.left,top:t.top},variant:"shade"})}onMouseLeave(t){this.contains(t.relatedTarget)||n.TooltipController.hide()}};p.styles=[u],d([(0,i.property)()],p.prototype,"text",void 0),d([(0,o.state)()],p.prototype,"open",void 0),p=d([(0,l.customElement)("w3m-tooltip-trigger")],p),t.s([],440651)},647008,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(435828),t.i(3731),t.i(27352);var o=t.i(240403),a=t.i(370128),s=t.i(527065);let n=s.css`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var l=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){let t="sm"===this.size?"small-600":"paragraph-600";return r.html`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?r.html`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};c.styles=[o.resetStyles,o.elementStyles,n],l([(0,i.property)()],c.prototype,"variant",void 0),l([(0,i.property)()],c.prototype,"imageSrc",void 0),l([(0,i.property)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,i.property)()],c.prototype,"icon",void 0),l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)()],c.prototype,"text",void 0),c=l([(0,a.customElement)("wui-chip-button")],c),t.s([],647008)},96773,t=>{"use strict";let e={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",EIP155:t.i(689252).ConstantsUtil.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"ID_AUTH"};t.s(["ConstantsUtil",0,e])},362910,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(783601);var o=t.i(229199);t.i(27352);var a=t.i(240403),s=t.i(370128);t.i(557035);var n=t.i(527065);let l=n.css`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let u=class extends e.LitElement{constructor(){super(...arguments),this.disabled=!1}render(){return r.html`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,o.ifDefined)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?r.html`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};u.styles=[a.resetStyles,l],c([(0,i.property)()],u.prototype,"errorMessage",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,i.property)()],u.prototype,"value",void 0),c([(0,i.property)()],u.prototype,"tabIdx",void 0),u=c([(0,s.customElement)("wui-email-input")],u),t.s([],362910)},730818,t=>{"use strict";t.i(35801),t.s([])},560589,49976,t=>{"use strict";var e=t.i(841066),r=t.i(842606),i=t.i(343865);let o=()=>new a;class a{}let s=new WeakMap,n=(0,i.directive)(class extends r.AsyncDirective{render(t){return e.nothing}update(t,[r]){let i=r!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=r,this.ht=t.options?.host,this.rt(this.ct=t.element)),e.nothing}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){let e=this.ht??globalThis,r=s.get(e);void 0===r&&(r=new WeakMap,s.set(e,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?s.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});t.s(["createRef",()=>o,"ref",()=>n],49976),t.s([],560589)},503345,t=>{"use strict";t.i(210096),t.s([])},811060,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(783601);var o=t.i(229199);t.i(27352);var a=t.i(240403),s=t.i(370128),n=t.i(527065);let l=n.css`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var c=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let u=class extends e.LitElement{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return r.html`
      <button ?disabled=${this.disabled} tabindex=${(0,o.ifDefined)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[a.resetStyles,a.elementStyles,l],c([(0,i.property)()],u.prototype,"tabIdx",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,i.property)()],u.prototype,"color",void 0),u=c([(0,s.customElement)("wui-link")],u),t.s([],811060)},557035,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(452283);var o=t.i(591846);t.i(783601);var a=t.i(229199);t.i(560589);var s=t.i(49976);t.i(435828);var n=t.i(240403),l=t.i(370128),c=t.i(527065);let u=c.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var d=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let p=class extends e.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,s.createRef)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){let t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return r.html`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,s.ref)(this.inputElementRef)}
        class=${(0,o.classMap)(e)}
        type=${this.type}
        enterkeyhint=${(0,a.ifDefined)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,a.ifDefined)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?r.html`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};p.styles=[n.resetStyles,n.elementStyles,u],d([(0,i.property)()],p.prototype,"size",void 0),d([(0,i.property)()],p.prototype,"icon",void 0),d([(0,i.property)({type:Boolean})],p.prototype,"disabled",void 0),d([(0,i.property)()],p.prototype,"placeholder",void 0),d([(0,i.property)()],p.prototype,"type",void 0),d([(0,i.property)()],p.prototype,"keyHint",void 0),d([(0,i.property)()],p.prototype,"value",void 0),d([(0,i.property)()],p.prototype,"inputRightPadding",void 0),d([(0,i.property)()],p.prototype,"tabIdx",void 0),p=d([(0,l.customElement)("wui-input-text")],p),t.s([],557035)},724305,72499,t=>{"use strict";t.s(["W3mFrameHelpers",()=>a],724305);let e=/^0x(?:[A-Fa-f0-9]{64})$/u,r=/^0x(?:[a-fA-F0-9]{62,})$/u;var i=t.i(463677);t.s(["W3mFrameStorage",()=>o],72499);let o={set(t,e){a.isClient&&localStorage.setItem(`${i.W3mFrameConstants.STORAGE_KEY}${t}`,e)},get:t=>a.isClient?localStorage.getItem(`${i.W3mFrameConstants.STORAGE_KEY}${t}`):null,delete(t,e){a.isClient&&(e?localStorage.removeItem(t):localStorage.removeItem(`${i.W3mFrameConstants.STORAGE_KEY}${t}`))}},a={checkIfAllowedToTriggerEmail(){let t=o.get(i.W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);if(t){let e=Date.now()-Number(t);if(e<3e4){let t=Math.ceil((3e4-e)/1e3);throw Error(`Please try again after ${t} seconds`)}}},getTimeToNextEmailLogin(){let t=o.get(i.W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);if(t){let e=Date.now()-Number(t);if(e<3e4)return Math.ceil((3e4-e)/1e3)}return 0},checkIfRequestExists:t=>i.W3mFrameRpcConstants.NOT_SAFE_RPC_METHODS.includes(t.method)||i.W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(t.method),getResponseType:t=>"string"==typeof t&&(t?.match(e)||t?.match(r))?i.W3mFrameConstants.RPC_RESPONSE_TYPE_TX:i.W3mFrameConstants.RPC_RESPONSE_TYPE_OBJECT,checkIfRequestIsSafe:t=>i.W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(t.method),isClient:"undefined"!=typeof window}},107213,932984,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(435828),t.i(3731),t.i(27352);var o=t.i(240403),a=t.i(370019),s=t.i(370128),n=t.i(527065);let l=n.css`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var c=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let u=class extends e.LitElement{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){let t="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant;return r.html`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t?"small-600":"paragraph-600"} color="inherit">
          ${this.title?this.title:a.UiHelperUtil.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?r.html`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};u.styles=[o.resetStyles,o.elementStyles,l],c([(0,i.property)()],u.prototype,"variant",void 0),c([(0,i.property)()],u.prototype,"imageSrc",void 0),c([(0,i.property)()],u.prototype,"imageIcon",void 0),c([(0,i.property)()],u.prototype,"imageIconSize",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,i.property)()],u.prototype,"icon",void 0),c([(0,i.property)()],u.prototype,"href",void 0),c([(0,i.property)()],u.prototype,"text",void 0),u=c([(0,s.customElement)("wui-chip")],u),t.s([],107213),t.s(["NavigationUtil",0,{URLS:{FAQ:"https://walletconnect.com/faq"}}],932984)},603827,t=>{"use strict";t.i(557035),t.s([])},308938,t=>{"use strict";t.s(["REOWN_URL",0,"https://reown.com","numbersRegex",0,/[0-9,.]/u,"specialCharactersRegex",0,/[.*+?^${}()|[\]\\]/gu])},383654,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(27352);var o=t.i(240403),a=t.i(370128),s=t.i(527065);let n=s.css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var l=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.text=""}render(){return r.html`${this.template()}`}template(){return this.text?r.html`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};c.styles=[o.resetStyles,n],l([(0,i.property)()],c.prototype,"text",void 0),c=l([(0,a.customElement)("wui-separator")],c),t.s([],383654)},251315,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083);t.i(3731);var o=t.i(240403),a=t.i(370019),s=t.i(370128),n=t.i(527065);let l=n.css`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var c=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let u=class extends e.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,r.html`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",r.html`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let t=a.UiHelperUtil.generateAvatarColors(this.address);return this.style.cssText+=`
 ${t}`,null}return this.dataset.variant="default",null}};u.styles=[o.resetStyles,l],c([(0,i.property)()],u.prototype,"imageSrc",void 0),c([(0,i.property)()],u.prototype,"alt",void 0),c([(0,i.property)()],u.prototype,"address",void 0),c([(0,i.property)()],u.prototype,"size",void 0),u=c([(0,s.customElement)("wui-avatar")],u),t.s([],251315)},377937,t=>{"use strict";t.i(195126);var e=t.i(453404),r=t.i(841066);t.i(775353);var i=t.i(88083),o=t.i(397466);t.i(435828),t.i(3731),t.i(27352),t.i(187604);var a=t.i(240403),s=t.i(370128),n=t.i(527065);let l=n.css`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var c=function(t,e,r,i){var o,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,r,s):o(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let u=class extends e.LitElement{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return r.html`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${o.NumberUtil.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?r.html`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:r.html`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};u.styles=[a.resetStyles,a.elementStyles,l],c([(0,i.property)()],u.prototype,"tokenName",void 0),c([(0,i.property)()],u.prototype,"tokenImageUrl",void 0),c([(0,i.property)({type:Number})],u.prototype,"tokenValue",void 0),c([(0,i.property)()],u.prototype,"tokenAmount",void 0),c([(0,i.property)()],u.prototype,"tokenCurrency",void 0),c([(0,i.property)({type:Boolean})],u.prototype,"clickable",void 0),u=c([(0,s.customElement)("wui-list-token")],u),t.s([],377937)}]);