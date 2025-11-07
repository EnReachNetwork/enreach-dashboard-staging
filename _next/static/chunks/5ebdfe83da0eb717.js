(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,868285,e=>{"use strict";e.i(195126);var t=e.i(453404),i=e.i(841066);e.i(775353);var r=e.i(666033),n=e.i(614931),s=e.i(613585),o=e.i(688138),a=e.i(505667);e.i(551831);var l=e.i(370128),c=e.i(527065);let u=c.css`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var m=function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o};let d=class extends t.LitElement{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(o.ModalController.subscribeKey("open",e=>{e||this.onHideIframe()}),o.ModalController.subscribeKey("shake",e=>{e?this.iframe.style.animation="w3m-shake 500ms var(--wui-ease-out-power-2)":this.iframe.style.animation="none"}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";let e=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver(t=>{let i=t?.[0]?.contentBoxSize,r=i?.[0]?.inlineSize;this.iframe.style.height="600px",e.style.height="600px",r&&r<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()}),this.bodyObserver.observe(window.document.body)}render(){return i.html`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){let e=s.ConnectorController.getAuthConnector();if(e){let t=a.ThemeController.getSnapshot().themeMode,i=a.ThemeController.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:i,w3mThemeVariables:(0,n.getW3mThemeVariables)(i,t)})}}};d.styles=u,m([(0,r.state)()],d.prototype,"ready",void 0),d=m([(0,l.customElement)("w3m-approve-transaction-view")],d),e.s(["W3mApproveTransactionView",()=>d],933874);var p=t,h=e.i(978469);e.i(107213),e.i(20909),e.i(686999);let g=class extends p.LitElement{render(){return i.html`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${h.ConstantsUtil.SECURE_SITE_DASHBOARD}
          imageSrc=${h.ConstantsUtil.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};g=function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o}([(0,l.customElement)("w3m-upgrade-wallet-view")],g),e.s(["W3mUpgradeWalletView",()=>g],998108);var f=t,w=e.i(88083);e.i(560589);var b=e.i(49976),y=e.i(689252),v=e.i(504019),x=e.i(435446),C=e.i(816478),E=e.i(811918),T=e.i(974915),R=e.i(990716),S=e.i(643429),A=t;e.i(783601);var N=e.i(229199);e.i(35801),e.i(27352);var $=e.i(240403);e.i(557035);let k=c.css`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var O=function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o};let I=class extends A.LitElement{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return i.html`
      <wui-input-text
        value=${(0,N.ifDefined)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return i.html`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${y.ConstantsUtil.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?i.html`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?i.html`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};I.styles=[$.resetStyles,k],O([(0,w.property)()],I.prototype,"errorMessage",void 0),O([(0,w.property)({type:Boolean})],I.prototype,"disabled",void 0),O([(0,w.property)()],I.prototype,"value",void 0),O([(0,w.property)({type:Boolean})],I.prototype,"loading",void 0),I=O([(0,l.customElement)("wui-ens-input")],I),e.i(645168),e.i(389004),e.i(730818),e.i(665477);var U=e.i(463677);let _=c.css`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    padding: var(--wui-spacing-m);
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    outline: 1px solid var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-005);
  }

  .suggestion:hover:not(:disabled) {
    background-color: var(--wui-color-gray-glass-005);
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 26px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var P=function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o};let W=class extends f.LitElement{constructor(){super(),this.formRef=(0,b.createRef)(),this.usubscribe=[],this.name="",this.error="",this.loading=E.EnsController.state.loading,this.suggestions=E.EnsController.state.suggestions,this.profileName=v.AccountController.state.profileName,this.onDebouncedNameInputChange=C.CoreHelperUtil.debounce(e=>{E.EnsController.validateName(e)?(this.error="",this.name=e,E.EnsController.getSuggestions(e)):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"}),this.usubscribe.push(E.EnsController.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),v.AccountController.subscribeKey("profileName",e=>{this.profileName=e,e&&(this.error="You already own a name")}))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${(0,b.ref)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let e=this.suggestions.find(e=>e.name?.split(".")?.[0]===this.name&&e.registered);if(this.loading)return i.html`<wui-loading-spinner
        class="input-loading-spinner"
        color="fg-200"
      ></wui-loading-spinner>`;let t=`${this.name}${y.ConstantsUtil.WC_NAME_SUFFIX}`;return i.html`
      <wui-icon-link
        .disabled=${e}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"fg-200":"accent-100"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(e){return this.loading?i.html`<wui-loading-spinner color="fg-200"></wui-loading-spinner>`:e.registered?i.html`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:i.html`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:i.html`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      ${this.suggestions.map(e=>i.html`<button
            .disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            class="suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          >
            <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
              ${e.name}</wui-text
            >${this.nameSuggestionTagTemplate(e)}
          </button>`)}
    </wui-flex>`}isAllowedToSubmit(e){let t=e.split(".")?.[0],i=this.suggestions.find(e=>e.name?.split(".")?.[0]===t&&e.registered);return!this.loading&&!this.error&&!this.profileName&&t&&E.EnsController.validateName(t)&&!i}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;T.EventsController.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:(0,S.getPreferredAccountType)(x.ChainController.state.activeChain)===U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await E.EnsController.registerName(e),T.EventsController.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:(0,S.getPreferredAccountType)(x.ChainController.state.activeChain)===U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){R.SnackController.showError(t.message),T.EventsController.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:(0,S.getPreferredAccountType)(x.ChainController.state.activeChain)===U.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:t?.message||"Unknown error"}})}}onEnterKey(e){if("Enter"===e.key&&this.name&&this.isAllowedToSubmit(this.name)){let e=`${this.name}${y.ConstantsUtil.WC_NAME_SUFFIX}`;this.onSubmitName(e)}}};W.styles=_,P([(0,w.property)()],W.prototype,"errorMessage",void 0),P([(0,r.state)()],W.prototype,"name",void 0),P([(0,r.state)()],W.prototype,"error",void 0),P([(0,r.state)()],W.prototype,"loading",void 0),P([(0,r.state)()],W.prototype,"suggestions",void 0),P([(0,r.state)()],W.prototype,"profileName",void 0),W=P([(0,l.customElement)("w3m-register-account-name-view")],W),e.s(["W3mRegisterAccountNameView",()=>W],743795);var j=t,D=e.i(932984),M=e.i(629107);e.i(986138),e.i(503345),e.i(811060);let F=c.css`
  .continue-button-container {
    width: 100%;
  }
`,L=class extends j.LitElement{render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{C.CoreHelperUtil.openHref(D.NavigationUtil.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return i.html` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return i.html`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){M.RouterController.replace("Account")}};L.styles=F,L=function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o}([(0,l.customElement)("w3m-register-account-name-success-view")],L),e.s(["W3mRegisterAccountNameSuccess",()=>L],770422),e.s([],268850),e.i(268850),e.i(933874),e.i(998108),e.i(743795),e.i(770422),e.s(["W3mApproveTransactionView",()=>d,"W3mRegisterAccountNameSuccess",()=>L,"W3mRegisterAccountNameView",()=>W,"W3mUpgradeWalletView",()=>g],868285)}]);