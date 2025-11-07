(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,23240,e=>{"use strict";e.i(3731),e.s([])},626972,e=>{"use strict";e.i(195126);var t=e.i(453404),r=e.i(841066);e.i(775353);var i=e.i(666033);e.i(783601);var o=e.i(229199),n=e.i(129415),s=e.i(688138),a=e.i(616653),l=e.i(444173),c=e.i(960301);e.i(551831);var u=e.i(370128);e.i(20909),e.i(686118),e.i(686999),e.i(991163),e.i(594628);var p=e.i(527065);let d=p.css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var m=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let h=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=a.OnRampController.state.paymentCurrency,this.currencies=a.OnRampController.state.paymentCurrencies,this.currencyImages=n.AssetController.state.currencyImages,this.checked=c.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(a.OnRampController.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),n.AssetController.subscribeKey("currencyImages",e=>this.currencyImages=e),c.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=l.OptionsController.state,i=l.OptionsController.state.features?.legalCheckbox,n=!!(e||t)&&!!i&&!this.checked;return r.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,o.ifDefined)(n?"disabled":void 0)}
      >
        ${this.currenciesTemplate(n)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map(t=>r.html`
        <wui-list-item
          imageSrc=${(0,o.ifDefined)(this.currencyImages?.[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0,o.ifDefined)(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(a.OnRampController.setPaymentCurrency(e),s.ModalController.close())}};h.styles=d,m([(0,i.state)()],h.prototype,"selectedCurrency",void 0),m([(0,i.state)()],h.prototype,"currencies",void 0),m([(0,i.state)()],h.prototype,"currencyImages",void 0),m([(0,i.state)()],h.prototype,"checked",void 0),h=m([(0,u.customElement)("w3m-onramp-fiat-select-view")],h),e.s(["W3mOnrampFiatSelectView",()=>h],720788);var w=t,g=e.i(435446),y=e.i(816478),f=e.i(974915),v=e.i(629107),b=e.i(643429),x=e.i(463677),C=t,k=e.i(88083),R=e.i(487845);e.i(645168),e.i(23240),e.i(730818),e.i(93677);let O=p.css`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var $=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let P=class extends C.LitElement{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return r.html`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,o.ifDefined)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?r.html`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:r.html`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let e=g.ChainController.getAllRequestedCaipNetworks(),t=e?.filter(e=>e?.assets?.imageId)?.slice(0,5);return r.html`
      <wui-flex class="networks">
        ${t?.map(e=>r.html`
            <wui-flex class="network-icon">
              <wui-image src=${(0,o.ifDefined)(R.AssetUtil.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};P.styles=[O],$([(0,k.property)({type:Boolean})],P.prototype,"disabled",void 0),$([(0,k.property)()],P.prototype,"color",void 0),$([(0,k.property)()],P.prototype,"name",void 0),$([(0,k.property)()],P.prototype,"label",void 0),$([(0,k.property)()],P.prototype,"feeRange",void 0),$([(0,k.property)({type:Boolean})],P.prototype,"loading",void 0),$([(0,k.property)()],P.prototype,"onClick",void 0),P=$([(0,u.customElement)("w3m-onramp-provider-item")],P);var A=t;e.i(811060);let I=p.css`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`,T=class extends A.LitElement{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=l.OptionsController.state;return e||t?r.html`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return r.html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){f.EventsController.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,b.getPreferredAccountType)(g.ChainController.state.activeChain)===x.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),v.RouterController.push("WhatIsABuy")}};T.styles=[I],T=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([(0,u.customElement)("w3m-onramp-providers-footer")],T);var j=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let D=class extends w.LitElement{constructor(){super(),this.unsubscribe=[],this.providers=a.OnRampController.state.providers,this.unsubscribe.push(a.OnRampController.subscribeKey("providers",e=>{this.providers=e}))}render(){return r.html`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(g.ChainController.state.activeChain??"eip155")).map(e=>r.html`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
            data-testid=${`onramp-provider-${e.name}`}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){a.OnRampController.setSelectedProvider(e),v.RouterController.push("BuyInProgress"),y.CoreHelperUtil.openHref(a.OnRampController.state.selectedProvider?.url||e.url,"popupWindow","width=600,height=800,scrollbars=yes"),f.EventsController.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:(0,b.getPreferredAccountType)(g.ChainController.state.activeChain)===x.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}};j([(0,i.state)()],D.prototype,"providers",void 0),D=j([(0,u.customElement)("w3m-onramp-providers-view")],D),e.s(["W3mOnRampProvidersView",()=>D],846988);var E=t;let W=p.css`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var L=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let S=class extends E.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=a.OnRampController.state.purchaseCurrencies,this.tokens=a.OnRampController.state.purchaseCurrencies,this.tokenImages=n.AssetController.state.tokenImages,this.checked=c.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(a.OnRampController.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),n.AssetController.subscribeKey("tokenImages",e=>this.tokenImages=e),c.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=l.OptionsController.state,i=l.OptionsController.state.features?.legalCheckbox,n=!!(e||t)&&!!i&&!this.checked;return r.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,o.ifDefined)(n?"disabled":void 0)}
      >
        ${this.currenciesTemplate(n)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map(t=>r.html`
        <wui-list-item
          imageSrc=${(0,o.ifDefined)(this.tokenImages?.[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${(0,o.ifDefined)(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(a.OnRampController.setPurchaseCurrency(e),s.ModalController.close())}};S.styles=W,L([(0,i.state)()],S.prototype,"selectedCurrency",void 0),L([(0,i.state)()],S.prototype,"tokens",void 0),L([(0,i.state)()],S.prototype,"tokenImages",void 0),L([(0,i.state)()],S.prototype,"checked",void 0),S=L([(0,u.customElement)("w3m-onramp-token-select-view")],S),e.s(["W3mOnrampTokensView",()=>S],330172);var B=t,U=e.i(385904),z=e.i(990716),M=e.i(505667);e.i(986138),e.i(503345),e.i(827547);let V=p.css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var K=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let F=class extends B.LitElement{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=a.OnRampController.state.selectedProvider,this.uri=U.ConnectionController.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(a.OnRampController.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}))}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let t=this.error?"Buy can be declined from your side or due to and error on the provider app":`We’ll notify you once your Buy is processed`;return r.html`
      <wui-flex
        data-error=${(0,o.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,o.ifDefined)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,y.CoreHelperUtil.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?r.html`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=M.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r.html`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url){z.SnackController.showError("No link found"),v.RouterController.goBack();return}try{y.CoreHelperUtil.copyToClopboard(this.selectedOnRampProvider.url),z.SnackController.showSuccess("Link copied")}catch{z.SnackController.showError("Failed to copy")}}};F.styles=V,K([(0,i.state)()],F.prototype,"intervalId",void 0),K([(0,i.state)()],F.prototype,"selectedOnRampProvider",void 0),K([(0,i.state)()],F.prototype,"uri",void 0),K([(0,i.state)()],F.prototype,"ready",void 0),K([(0,i.state)()],F.prototype,"showRetry",void 0),K([(0,i.state)()],F.prototype,"buffering",void 0),K([(0,i.state)()],F.prototype,"error",void 0),K([(0,k.property)({type:Boolean})],F.prototype,"isMobile",void 0),K([(0,k.property)()],F.prototype,"onRetry",void 0),F=K([(0,u.customElement)("w3m-buy-in-progress-view")],F),e.s(["W3mBuyInProgressView",()=>F],372340);var _=t;let q=class extends _.LitElement{render(){return r.html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${v.RouterController.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};q=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([(0,u.customElement)("w3m-what-is-a-buy-view")],q),e.s(["W3mWhatIsABuyView",()=>q],957430);var N=t,H=t;e.i(603827);let Y=p.css`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var Q=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let X=class extends H.LitElement{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=n.AssetController.state.currencyImages,this.tokenImages=n.AssetController.state.tokenImages,this.unsubscribe.push(a.OnRampController.subscribeKey("purchaseCurrency",e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),a.OnRampController.subscribeKey("paymentCurrency",e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),a.OnRampController.subscribe(e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)}),n.AssetController.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){a.OnRampController.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return r.html`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?r.html` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>s.ModalController.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,o.ifDefined)(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:r.html`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};X.styles=Y,Q([(0,k.property)({type:String})],X.prototype,"type",void 0),Q([(0,k.property)({type:Number})],X.prototype,"value",void 0),Q([(0,i.state)()],X.prototype,"currencies",void 0),Q([(0,i.state)()],X.prototype,"selectedCurrency",void 0),Q([(0,i.state)()],X.prototype,"currencyImages",void 0),Q([(0,i.state)()],X.prototype,"tokenImages",void 0),X=Q([(0,u.customElement)("w3m-onramp-input")],X);let G=p.css`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var J=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let Z={USD:"$",EUR:"€",GBP:"£"},ee=[100,250,500,1e3],et=class extends N.LitElement{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=g.ChainController.state.activeCaipAddress,this.loading=s.ModalController.state.loading,this.paymentCurrency=a.OnRampController.state.paymentCurrency,this.paymentAmount=a.OnRampController.state.paymentAmount,this.purchaseAmount=a.OnRampController.state.purchaseAmount,this.quoteLoading=a.OnRampController.state.quotesLoading,this.unsubscribe.push(g.ChainController.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),s.ModalController.subscribeKey("loading",e=>{this.loading=e}),a.OnRampController.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r.html`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${ee.map(e=>r.html`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${Z[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?r.html`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:r.html`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||s.ModalController.open({view:"OnRampProviders"})}openModal(){s.ModalController.open({view:"Connect"})}async onPaymentAmountChange(e){a.OnRampController.setPaymentAmount(Number(e.detail)),await a.OnRampController.getQuote()}async selectPresetAmount(e){a.OnRampController.setPaymentAmount(e),await a.OnRampController.getQuote()}};et.styles=G,J([(0,k.property)({type:Boolean})],et.prototype,"disabled",void 0),J([(0,i.state)()],et.prototype,"caipAddress",void 0),J([(0,i.state)()],et.prototype,"loading",void 0),J([(0,i.state)()],et.prototype,"paymentCurrency",void 0),J([(0,i.state)()],et.prototype,"paymentAmount",void 0),J([(0,i.state)()],et.prototype,"purchaseAmount",void 0),J([(0,i.state)()],et.prototype,"quoteLoading",void 0),et=J([(0,u.customElement)("w3m-onramp-widget")],et),e.s(["W3mOnrampWidget",()=>et],392946),e.s([],471675),e.i(471675),e.i(720788),e.i(846988),e.i(330172),e.i(372340),e.i(957430),e.i(392946),e.s(["W3mBuyInProgressView",()=>F,"W3mOnRampProvidersView",()=>D,"W3mOnrampFiatSelectView",()=>h,"W3mOnrampTokensView",()=>S,"W3mOnrampWidget",()=>et,"W3mWhatIsABuyView",()=>q],626972)}]);