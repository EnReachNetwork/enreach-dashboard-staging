(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,479031,626063,307398,57113,893138,47701,356364,282131,e=>{"use strict";var t,i=e.i(435446),r=e.i(385904),o=e.i(816478),n=e.i(974915),a=e.i(688138),s=e.i(444173),l=e.i(629107),c=e.i(990716);e.i(551831);var u=e.i(370128);e.i(195126);var h=e.i(453404),d=e.i(841066);e.i(775353);var p=e.i(666033),m=e.i(613585);e.i(20909),e.i(811060),e.i(730818);var g=h,w=e.i(88083);e.i(187604);var f=e.i(240403),v=e.i(370019),y=h,E=e.i(527065);let C=E.css`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var b=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let x=class extends y.LitElement{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return d.html`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};x.styles=[f.resetStyles,f.elementStyles,C],b([(0,w.property)({type:Boolean})],x.prototype,"disabled",void 0),b([(0,w.property)({type:String})],x.prototype,"value",void 0),x=b([(0,u.customElement)("wui-input-numeric")],x);let S=E.css`
  :host {
    position: relative;
    display: block;
  }
`;var O=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let I=class extends g.LitElement{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(e=>""!==e),this.handleKeyDown=(e,t)=>{let i=e.target,r=this.getInputElement(i);if(!r)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let o=r.selectionStart;switch(e.key){case"ArrowLeft":o&&r.setSelectionRange(o+1,o+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===r.value?this.focusInputField("prev",t):this.updateInput(r,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1;if(!this.shouldInputBeEnabled(e))return;let i=this.numerics[e<this.length?e:t],r=i?this.getInputElement(i):void 0;r&&(r.disabled=!1,r.focus())}if("prev"===e){let e=t-1,i=this.numerics[e>-1?e:t],r=i?this.getInputElement(i):void 0;r&&r.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return d.html`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,t)=>d.html`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,t,i){let r=this.numerics[t],o=e||(r?this.getInputElement(r):void 0);o&&(o.value=i,this.values=this.values.map((e,r)=>r===t?i:e))}selectInput(e){let t=e.target;if(t){let e=this.getInputElement(t);e?.select()}}handleInput(e,t){let i=e.target,r=this.getInputElement(i);if(r){let i=r.value;"insertFromPaste"===e.inputType?this.handlePaste(r,i,t):v.UiHelperUtil.isNumber(i)&&e.data?(this.updateInput(r,t,e.data),this.focusInputField("next",t)):this.updateInput(r,t,"")}this.dispatchInputChangeEvent()}handlePaste(e,t,i){let r=t[0];if(r&&v.UiHelperUtil.isNumber(r)){this.updateInput(e,i,r);let o=t.substring(1);if(i+1<this.length&&o.length){let e=this.numerics[i+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){let e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};I.styles=[f.resetStyles,S],O([(0,w.property)({type:Number})],I.prototype,"length",void 0),O([(0,w.property)({type:String})],I.prototype,"otp",void 0),O([(0,p.state)()],I.prototype,"values",void 0),I=O([(0,u.customElement)("wui-otp")],I),e.i(686999);var R=e.i(724305);let k=E.css`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var A=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let T=t=class extends h.LitElement{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=R.W3mFrameHelpers.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=l.RouterController.state.data?.email,this.authConnector=m.ConnectorController.getAuthConnector()}render(){if(!this.email)throw Error("w3m-email-otp-widget: No email provided");let e=!!this.timeoutTimeLeft,t=this.getFooterLabels(e);return d.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?d.html`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:d.html` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?d.html`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=R.W3mFrameHelpers.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=R.W3mFrameHelpers.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){try{!this.loading&&(this.otp=e.detail,this.shouldSubmitOnOtpChange()&&(this.loading=!0,await this.onOtpSubmit?.(this.otp)))}catch(e){this.error=o.CoreHelperUtil.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!m.ConnectorController.getAuthConnector()||!this.email)throw Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),c.SnackController.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){c.SnackController.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===t.OTP_LENGTH}};T.OTP_LENGTH=6,T.styles=k,A([(0,p.state)()],T.prototype,"loading",void 0),A([(0,p.state)()],T.prototype,"timeoutTimeLeft",void 0),A([(0,p.state)()],T.prototype,"error",void 0),T=t=A([(0,u.customElement)("w3m-email-otp-widget")],T),e.s(["W3mEmailOtpWidget",()=>T],626063);let $=class extends T{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){let t=i.ChainController.state.activeChain,o=r.ConnectionController.getConnections(t),u=s.OptionsController.state.remoteFeatures?.multiWallet,h=o.length>0;if(await this.authConnector.provider.connectOtp({otp:e}),n.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),t)await r.ConnectionController.connectExternal(this.authConnector,t);else throw Error("Active chain is not set on ChainControll");if(n.EventsController.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown",caipNetworkId:i.ChainController.getActiveCaipNetwork()?.caipNetworkId}}),s.OptionsController.state.remoteFeatures?.emailCapture)return;if(s.OptionsController.state.siwx)return void a.ModalController.close();if(h&&u){l.RouterController.replace("ProfileWallets"),c.SnackController.showSuccess("New Wallet Added");return}a.ModalController.close()}}catch(e){throw n.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:o.CoreHelperUtil.parseError(e)}}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),n.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};$=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,u.customElement)("w3m-email-verify-otp-view")],$),e.s(["W3mEmailVerifyOtpView",()=>$],307398);var N=h;e.i(503345);let D=E.css`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var P=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let L=class extends N.LitElement{constructor(){super(),this.email=l.RouterController.state.data?.email,this.authConnector=m.ConnectorController.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw Error("w3m-email-verify-device-view: No auth connector provided");return d.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),n.EventsController.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),n.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),l.RouterController.replace("EmailVerifyOtp",{email:this.email})}catch(e){l.RouterController.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),c.SnackController.showSuccess("Code email resent")}}catch(e){c.SnackController.showError(e)}finally{this.loading=!1}}};L.styles=D,P([(0,p.state)()],L.prototype,"loading",void 0),L=P([(0,u.customElement)("w3m-email-verify-device-view")],L),e.s(["W3mEmailVerifyDeviceView",()=>L],57113);var U=h;e.i(560589);var _=e.i(49976);e.i(986138),e.i(362910);let j=E.css`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var W=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let V=class extends U.LitElement{constructor(){super(...arguments),this.formRef=(0,_.createRef)(),this.initialEmail=l.RouterController.state.data?.email??"",this.redirectView=l.RouterController.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){return d.html`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,_.ref)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=m.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-update-email-wallet: Auth connector not found");let i=await t.provider.updateEmail({email:this.email});n.EventsController.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?l.RouterController.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):l.RouterController.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(e){c.SnackController.showError(e),this.loading=!1}}buttonsTemplate(){let e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?d.html`
      <wui-flex gap="s">
        <wui-button size="md" variant="neutral" fullWidth @click=${l.RouterController.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:d.html`
        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};V.styles=j,W([(0,p.state)()],V.prototype,"email",void 0),W([(0,p.state)()],V.prototype,"loading",void 0),V=W([(0,u.customElement)("w3m-update-email-wallet-view")],V),e.s(["W3mUpdateEmailWalletView",()=>V],893138);let q=class extends T{constructor(){super(),this.email=l.RouterController.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),n.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),l.RouterController.replace("UpdateEmailSecondaryOtp",l.RouterController.state.data))}catch(e){throw n.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:o.CoreHelperUtil.parseError(e)}}),e}},this.onStartOver=()=>{l.RouterController.replace("UpdateEmailWallet",l.RouterController.state.data)}}};q=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,u.customElement)("w3m-update-email-primary-otp-view")],q),e.s(["W3mUpdateEmailPrimaryOtpView",()=>q],47701);let F=class extends T{constructor(){super(),this.email=l.RouterController.state.data?.newEmail,this.redirectView=l.RouterController.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),n.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&l.RouterController.reset(this.redirectView))}catch(e){throw n.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:o.CoreHelperUtil.parseError(e)}}),e}},this.onStartOver=()=>{l.RouterController.replace("UpdateEmailWallet",l.RouterController.state.data)}}};F=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,u.customElement)("w3m-update-email-secondary-otp-view")],F),e.s(["W3mUpdateEmailSecondaryOtpView",()=>F],356364);var K=h,z=e.i(689252),M=e.i(96773),B=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let H=class extends K.LitElement{constructor(){super(),this.authConnector=m.ConnectorController.getAuthConnector(),this.isEmailEnabled=s.OptionsController.state.remoteFeatures?.email,this.isAuthEnabled=this.checkIfAuthEnabled(m.ConnectorController.state.connectors),this.connectors=m.ConnectorController.state.connectors,m.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw Error("w3m-email-login-view: No auth connector provided");return d.html`<wui-flex
      flexDirection="column"
      .padding=${["3xs","m","m","m"]}
      gap="l"
    >
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===M.ConstantsUtil.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return z.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}};B([(0,p.state)()],H.prototype,"connectors",void 0),H=B([(0,u.customElement)("w3m-email-login-view")],H),e.s(["W3mEmailLoginView",()=>H],282131),e.s([],479031)},901416,e=>{"use strict";e.s([],385278),e.i(385278),e.i(195126);var t=e.i(453404),i=e.i(841066);e.i(775353);var r=e.i(666033),o=e.i(568830),n=e.i(435446),a=e.i(444173),s=e.i(629107),l=e.i(990716);e.i(551831);var c=e.i(370019),u=e.i(370128),h=e.i(689252),d=e.i(504019),p=e.i(701676),m=e.i(763016),g=e.i(643429),w=e.i(96773),f=e.i(970260);class v{constructor(e){this.expiration=e.expiration,this.getNonce=e.getNonce,this.getRequestId=e.getRequestId,this.domain=e.domain,this.uri=e.uri,this.statement=e.statement,this.resources=e.resources}async createMessage(e){let t={accountAddress:e.accountAddress,chainId:e.chainId,version:this.version,domain:this.domain,uri:this.uri,statement:this.statement,resources:this.resources,nonce:await this.getNonce(e),requestId:await this.getRequestId?.(),expirationTime:this.getExpirationTime(e),issuedAt:this.getIssuedAt(),notBefore:this.getNotBefore(e)};return Object.assign(t,{toString:()=>this.stringify(t)})}getExpirationTime({notBefore:e}){if(void 0===this.expiration)return;let t=e?new Date(e).getTime():Date.now();return this.stringifyDate(new Date(t+this.expiration))}getNotBefore({notBefore:e}){return e?this.stringifyDate(new Date(e)):void 0}getIssuedAt(){return this.stringifyDate(new Date)}stringifyDate(e){return e.toISOString()}}class y extends v{constructor({clearChainIdNamespace:e,...t}){super(t),this.version="1",this.clearChainIdNamespace=e||!1}getNetworkName(e){let t=n.ChainController.getAllRequestedCaipNetworks();return f.NetworkUtil.getNetworkNameByCaipNetworkId(t,e)}stringify(e){let t=this.clearChainIdNamespace?e.chainId.split(":")[1]:e.chainId,i=this.getNetworkName(e.chainId);return[`${e.domain} wants you to sign in with your ${i} account:`,e.accountAddress,e.statement?`
${e.statement}
`:"",`URI: ${e.uri}`,`Version: ${e.version}`,`Chain ID: ${t}`,`Nonce: ${e.nonce}`,e.issuedAt&&`Issued At: ${e.issuedAt}`,e.expirationTime&&`Expiration Time: ${e.expirationTime}`,e.notBefore&&`Not Before: ${e.notBefore}`,e.requestId&&`Request ID: ${e.requestId}`,e.resources?.length&&e.resources.reduce((e,t)=>`${e}
- ${t}`,"Resources:")].filter(e=>"string"==typeof e).join("\n").trim()}}class E{constructor(e={}){this.otpUuid=null,this.listeners={sessionChanged:[]},this.localAuthStorageKey=e.localAuthStorageKey||o.SafeLocalStorageKeys.SIWX_AUTH_TOKEN,this.localNonceStorageKey=e.localNonceStorageKey||o.SafeLocalStorageKeys.SIWX_NONCE_TOKEN,this.required=e.required??!0,this.messenger=new y({domain:"undefined"==typeof document?"Unknown Domain":document.location.host,uri:"undefined"==typeof document?"Unknown URI":document.location.href,getNonce:this.getNonce.bind(this),clearChainIdNamespace:!1})}async createMessage(e){return this.messenger.createMessage(e)}async addSession(e){let t=await this.request({method:"POST",key:"authenticate",body:{data:e.data,message:e.message,signature:e.signature,clientId:this.getClientId(),walletInfo:this.getWalletInfo()},headers:["nonce","otp"]});this.setStorageToken(t.token,this.localAuthStorageKey),this.emit("sessionChanged",e),this.setAppKitAccountUser(function(e){let t=e.split(".");if(3!==t.length)throw Error("Invalid token");let i=t[1];if("string"!=typeof i)throw Error("Invalid token");let r=i.replace(/-/gu,"+").replace(/_/gu,"/");return JSON.parse(atob(r.padEnd(r.length+(4-r.length%4)%4,"=")))}(t.token)),this.otpUuid=null}async getSessions(e,t){try{if(!this.getStorageToken(this.localAuthStorageKey))return[];let i=await this.request({method:"GET",key:"me",query:{},headers:["auth"]});if(!i)return[];let r=i.address.toLowerCase()===t.toLowerCase(),o=i.caip2Network===e;if(!r||!o)return[];let n={data:{accountAddress:i.address,chainId:i.caip2Network},message:"",signature:""};return this.emit("sessionChanged",n),this.setAppKitAccountUser(i),[n]}catch{return[]}}async revokeSession(e,t){return Promise.resolve(this.clearStorageTokens())}async setSessions(e){if(0===e.length)this.clearStorageTokens();else{let t=e.find(e=>e.data.chainId===(0,g.getActiveCaipNetwork)()?.caipNetworkId)||e[0];await this.addSession(t)}}getRequired(){return this.required}async getSessionAccount(){if(!this.getStorageToken(this.localAuthStorageKey))throw Error("Not authenticated");return this.request({method:"GET",key:"me",body:void 0,query:{includeAppKitAccount:!0},headers:["auth"]})}async setSessionAccountMetadata(e=null){if(!this.getStorageToken(this.localAuthStorageKey))throw Error("Not authenticated");return this.request({method:"PUT",key:"account-metadata",body:{metadata:e},headers:["auth"]})}on(e,t){return this.listeners[e].push(t),()=>{this.listeners[e]=this.listeners[e].filter(e=>e!==t)}}removeAllListeners(){Object.keys(this.listeners).forEach(e=>{this.listeners[e]=[]})}async requestEmailOtp({email:e,account:t}){let i=await this.request({method:"POST",key:"otp",body:{email:e,account:t}});return this.otpUuid=i.uuid,this.messenger.resources=[`email:${e}`],i}confirmEmailOtp({code:e}){return this.request({method:"PUT",key:"otp",body:{code:e},headers:["otp"]})}async request({method:e,key:t,query:i,body:r,headers:o}){let{projectId:n,st:a,sv:s}=this.getSDKProperties(),l=new URL(`${h.ConstantsUtil.W3M_API_URL}/auth/v1/${String(t)}`);l.searchParams.set("projectId",n),l.searchParams.set("st",a),l.searchParams.set("sv",s),i&&Object.entries(i).forEach(([e,t])=>l.searchParams.set(e,String(t)));let c=await fetch(l,{method:e,body:r?JSON.stringify(r):void 0,headers:Array.isArray(o)?o.reduce((e,t)=>{switch(t){case"nonce":e["x-nonce-jwt"]=`Bearer ${this.getStorageToken(this.localNonceStorageKey)}`;break;case"auth":e.Authorization=`Bearer ${this.getStorageToken(this.localAuthStorageKey)}`;break;case"otp":this.otpUuid&&(e["x-otp"]=this.otpUuid)}return e},{}):void 0});if(!c.ok)throw Error(await c.text());return c.headers.get("content-type")?.includes("application/json")?c.json():null}getStorageToken(e){return o.SafeLocalStorage.getItem(e)}setStorageToken(e,t){o.SafeLocalStorage.setItem(t,e)}clearStorageTokens(){this.otpUuid=null,o.SafeLocalStorage.removeItem(this.localAuthStorageKey),o.SafeLocalStorage.removeItem(this.localNonceStorageKey),this.emit("sessionChanged",void 0)}async getNonce(){let{nonce:e,token:t}=await this.request({method:"GET",key:"nonce"});return this.setStorageToken(t,this.localNonceStorageKey),e}getClientId(){return m.BlockchainApiController.state.clientId}getWalletInfo(){let{connectedWalletInfo:e}=d.AccountController.state;if(!e)return;if("social"in e)return{type:"social",social:e.social,identifier:e.identifier};let{name:t,icon:i}=e,r="unknown";switch(e.type){case w.ConstantsUtil.CONNECTOR_TYPE_EXTERNAL:case w.ConstantsUtil.CONNECTOR_TYPE_INJECTED:case w.ConstantsUtil.CONNECTOR_TYPE_ANNOUNCED:r="extension";break;case w.ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT:r="walletconnect";break;default:r="unknown"}return{type:r,name:t,icon:i}}getSDKProperties(){return p.ApiController._getSdkProperties()}emit(e,t){this.listeners[e].forEach(e=>e(t))}setAppKitAccountUser(e){let{email:t}=e;t&&Object.values(h.ConstantsUtil.CHAIN).forEach(e=>{n.ChainController.setAccountProp("user",{email:t},e)})}}var C=e.i(527065);let b=C.css`
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);

    transition-property: margin, height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    margin-top: -100px;

    &[data-state='loading'] {
      margin-top: 0px;
    }

    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 252px;
      width: 360px;
      background: radial-gradient(
        96.11% 53.95% at 50% 51.28%,
        transparent 0%,
        color-mix(in srgb, var(--wui-color-bg-100) 5%, transparent) 49%,
        color-mix(in srgb, var(--wui-color-bg-100) 65%, transparent) 99.43%
      );
    }
  }

  .hero-main-icon {
    width: 176px;
    transition-property: background-color;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      width: 56px;
    }
  }

  .hero-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
    flex-wrap: nowrap;
    min-width: fit-content;

    &:nth-child(1) {
      transform: translateX(-30px);
    }

    &:nth-child(2) {
      transform: translateX(30px);
    }

    &:nth-child(4) {
      transform: translateX(40px);
    }

    transition-property: height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    height: 68px;

    &[data-state='loading'] {
      height: 0px;
    }
  }

  .hero-row-icon {
    opacity: 0.1;
    transition-property: opacity;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      opacity: 0;
    }
  }

  .email-sufixes {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-3xs);
    overflow-x: auto;
    max-width: 100%;
    margin-top: var(--wui-spacing-s);
    margin-bottom: calc(-1 * var(--wui-spacing-m));
    padding-bottom: var(--wui-spacing-m);
    margin-left: calc(-1 * var(--wui-spacing-m));
    margin-right: calc(-1 * var(--wui-spacing-m));
    padding-left: var(--wui-spacing-m);
    padding-right: var(--wui-spacing-m);

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .recent-emails {
    display: flex;
    flex-direction: column;
    padding: var(--wui-spacing-s) 0;
    border-top: 1px solid var(--wui-color-gray-glass-005);
    border-bottom: 1px solid var(--wui-color-gray-glass-005);
  }

  .recent-emails-heading {
    margin-bottom: var(--wui-spacing-s);
  }

  .recent-emails-list-item {
    --wui-color-gray-glass-002: transparent;
  }
`;var x=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let S=class extends t.LitElement{constructor(){super(...arguments),this.email=s.RouterController.state.data?.email??n.ChainController.getAccountData()?.user?.email??"",this.address=n.ChainController.getAccountData()?.address??"",this.loading=!1,this.appName=a.OptionsController.state.metadata?.name??"AppKit",this.siwx=a.OptionsController.state.siwx,this.isRequired=Array.isArray(a.OptionsController.state.remoteFeatures?.emailCapture)&&a.OptionsController.state.remoteFeatures?.emailCapture.includes("required"),this.recentEmails=this.getRecentEmails()}connectedCallback(){this.siwx&&this.siwx instanceof E||l.SnackController.showError("ReownAuthentication is not initialized."),super.connectedCallback()}firstUpdated(){this.loading=!1,this.recentEmails=this.getRecentEmails(),this.email&&this.onSubmit()}render(){return i.html`
      <wui-flex flexDirection="column" .padding=${["3xs","m","m","m"]} gap="l">
        ${this.hero()} ${this.paragraph()} ${this.emailInput()} ${this.recentEmailsWidget()}
        ${this.footerActions()}
      </wui-flex>
    `}hero(){return i.html`
      <div class="hero" data-state=${this.loading?"loading":"default"}>
        ${this.heroRow(["id","mail","wallet","x","solana","qrCode"])}
        ${this.heroRow(["mail","farcaster","wallet","discord","mobile","qrCode"])}
        <div class="hero-row">
          ${this.heroIcon("github")} ${this.heroIcon("bank")}
          <wui-icon-box
            size="xl"
            iconSize="xxl"
            iconColor=${this.loading?"fg-100":"accent-100"}
            backgroundColor=${this.loading?"fg-100":"accent-100"}
            icon=${this.loading?"id":"user"}
            isOpaque
            class="hero-main-icon"
            data-state=${this.loading?"loading":"default"}
          >
          </wui-icon-box>
          ${this.heroIcon("id")} ${this.heroIcon("card")}
        </div>
        ${this.heroRow(["google","id","github","verify","apple","mobile"])}
      </div>
    `}heroRow(e){return i.html`
      <div class="hero-row" data-state=${this.loading?"loading":"default"}>
        ${e.map(this.heroIcon.bind(this))}
      </div>
    `}heroIcon(e){return i.html`
      <wui-icon-box
        size="xl"
        iconSize="xxl"
        iconColor="fg-100"
        backgroundColor="fg-100"
        icon=${e}
        data-state=${this.loading?"loading":"default"}
        isOpaque
        class="hero-row-icon"
      >
      </wui-icon-box>
    `}paragraph(){return this.loading?i.html`
        <wui-text variant="paragraph-400" color="fg-200" align="center"
          >We are verifying your account with email
          <wui-text variant="paragraph-600" color="accent-100">${this.email}</wui-text> and address
          <wui-text variant="paragraph-600" color="fg-100">
            ${c.UiHelperUtil.getTruncateString({string:this.address,charsEnd:4,charsStart:4,truncate:"middle"})} </wui-text
          >, please wait a moment.</wui-text
        >
      `:this.isRequired?i.html`
        <wui-text variant="paragraph-600" color="fg-100" align="center">
          ${this.appName} requires your email for authentication.
        </wui-text>
      `:i.html`
      <wui-flex flexDirection="column" gap="xs" alignItems="center">
        <wui-text variant="paragraph-600" color="fg-100" align="center" size>
          ${this.appName} would like to collect your email.
        </wui-text>

        <wui-text variant="small-400" color="fg-200" align="center">
          Don't worry, it's optional&mdash;you can skip this step.
        </wui-text>
      </wui-flex>
    `}emailInput(){if(this.loading)return null;let e=e=>{"Enter"===e.key&&this.onSubmit()},t=e=>{this.email=e.detail};return i.html`
      <wui-flex flexDirection="column">
        <wui-email-input
          .value=${this.email}
          .disabled=${this.loading}
          @inputChange=${t}
          @keydown=${e}
        ></wui-email-input>

        <w3m-email-suffixes-widget
          .email=${this.email}
          @change=${t}
        ></w3m-email-suffixes-widget>
      </wui-flex>
    `}recentEmailsWidget(){if(0===this.recentEmails.length||this.loading)return null;let e=e=>{this.email=e.detail,this.onSubmit()};return i.html`
      <w3m-recent-emails-widget
        .emails=${this.recentEmails}
        @select=${e}
      ></w3m-recent-emails-widget>
    `}footerActions(){return i.html`
      <wui-flex flexDirection="row" fullWidth gap="s">
        ${this.isRequired?null:i.html`<wui-button
              size="lg"
              variant="neutral"
              fullWidth
              .disabled=${this.loading}
              @click=${this.onSkip.bind(this)}
              >Skip this step</wui-button
            >`}

        <wui-button
          size="lg"
          variant="main"
          type="submit"
          fullWidth
          .disabled=${!this.email||!this.isValidEmail(this.email)}
          .loading=${this.loading}
          @click=${this.onSubmit.bind(this)}
        >
          Continue
        </wui-button>
      </wui-flex>
    `}async onSubmit(){let e=n.ChainController.getActiveCaipAddress();if(!e)throw Error("Account is not connected.");if(!this.isValidEmail(this.email))return void l.SnackController.showError("Please provide a valid email.");try{this.loading=!0;let t=await this.siwx.requestEmailOtp({email:this.email,account:e});this.pushRecentEmail(this.email),null===t.uuid?s.RouterController.replace("SIWXSignMessage"):s.RouterController.replace("DataCaptureOtpConfirm",{email:this.email})}catch(e){l.SnackController.showError("Failed to send email OTP"),this.loading=!1}}onSkip(){s.RouterController.replace("SIWXSignMessage")}getRecentEmails(){let e=o.SafeLocalStorage.getItem(o.SafeLocalStorageKeys.RECENT_EMAILS);return(e?e.split(","):[]).filter(this.isValidEmail.bind(this)).slice(0,3)}pushRecentEmail(e){let t=Array.from(new Set([e,...this.getRecentEmails()])).slice(0,3);o.SafeLocalStorage.setItem(o.SafeLocalStorageKeys.RECENT_EMAILS,t.join(","))}isValidEmail(e){return/^\S+@\S+\.\S+$/u.test(e)}};S.styles=[b],x([(0,r.state)()],S.prototype,"email",void 0),x([(0,r.state)()],S.prototype,"address",void 0),x([(0,r.state)()],S.prototype,"loading",void 0),x([(0,r.state)()],S.prototype,"appName",void 0),x([(0,r.state)()],S.prototype,"siwx",void 0),x([(0,r.state)()],S.prototype,"isRequired",void 0),x([(0,r.state)()],S.prototype,"recentEmails",void 0),S=x([(0,u.customElement)("w3m-data-capture-view")],S),e.s(["W3mDataCaptureView",()=>S],260685),e.i(260685),e.i(479031);var O=e.i(626063),I=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let R=class extends O.W3mEmailOtpWidget{constructor(){super(...arguments),this.siwx=a.OptionsController.state.siwx,this.onOtpSubmit=async e=>{await this.siwx.confirmEmailOtp({code:e}),s.RouterController.replace("SIWXSignMessage")},this.onOtpResend=async e=>{let t=n.ChainController.getAccountData();if(!t?.caipAddress)throw Error("No account data found");await this.siwx.requestEmailOtp({email:e,account:t.caipAddress})}}connectedCallback(){this.siwx&&this.siwx instanceof E||l.SnackController.showError("ReownAuthentication is not initialized."),super.connectedCallback()}shouldSubmitOnOtpChange(){return this.otp.length===O.W3mEmailOtpWidget.OTP_LENGTH}};I([(0,r.state)()],R.prototype,"siwx",void 0),R=I([(0,u.customElement)("w3m-data-capture-otp-confirm-view")],R),e.s(["W3mDataCaptureOtpConfirmView",()=>R],919024),e.i(919024);var k=t,A=e.i(88083),T=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let $=["@gmail.com","@outlook.com","@yahoo.com","@hotmail.com","@aol.com","@icloud.com","@zoho.com"],N=class extends k.LitElement{constructor(){super(...arguments),this.email=""}render(){let e=$.filter(this.filter.bind(this)).map(this.item.bind(this));return 0===e.length?null:i.html`<div class="email-sufixes">${e}</div>`}filter(e){if(!this.email)return!1;let t=this.email.split("@");if(t.length<2)return!0;let i=t.pop();return e.includes(i)&&e!==`@${i}`}item(e){let t=()=>{let t=this.email.split("@");t.length>1&&t.pop();let i=t[0]+e;this.dispatchEvent(new CustomEvent("change",{detail:i,bubbles:!0,composed:!0}))};return i.html`<wui-button variant="neutral" size="sm" @click=${t}
      >${e}</wui-button
    >`}};N.styles=[b],T([(0,A.property)()],N.prototype,"email",void 0),N=T([(0,u.customElement)("w3m-email-suffixes-widget")],N),e.s(["W3mEmailSuffixesWidget",()=>N],332951),e.i(332951);var D=t,P=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let L=class extends D.LitElement{constructor(){super(...arguments),this.emails=[]}render(){return 0===this.emails.length?null:i.html`<div class="recent-emails">
      <wui-text variant="micro-600" color="fg-200" class="recent-emails-heading"
        >Recently used emails</wui-text
      >
      ${this.emails.map(this.item.bind(this))}
    </div>`}item(e){let t=()=>{this.dispatchEvent(new CustomEvent("select",{detail:e,bubbles:!0,composed:!0}))};return i.html`<wui-list-item
      @click=${t}
      ?chevron=${!0}
      icon="mail"
      iconVariant="overlay"
      class="recent-emails-list-item"
    >
      <wui-text variant="paragraph-500" color="fg-100">${e}</wui-text>
    </wui-list-item>`}};L.styles=[b],P([(0,A.property)()],L.prototype,"emails",void 0),L=P([(0,u.customElement)("w3m-recent-emails-widget")],L),e.s(["W3mRecentEmailsWidget",()=>L],113758),e.i(113758),e.s(["W3mDataCaptureOtpConfirmView",()=>R,"W3mDataCaptureView",()=>S,"W3mEmailSuffixesWidget",()=>N,"W3mRecentEmailsWidget",()=>L],901416)}]);