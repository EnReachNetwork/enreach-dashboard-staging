"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4965],{84965:function(e,t,r){r.r(t),r.d(t,{W3mWalletReceiveView:function(){return C}});var i=r(16842),o=r(64059),a=r(17951),s=r(70253),n=r(8630),c=r(12048),l=r(65773),u=r(27237),d=r(55630),w=r(85643),p=r(70485),h=r(17105);r(90128),r(11298),r(54820),r(48770),r(2953);var f=r(4161),m=r(63302),g=(0,i.iv)`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`,k=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let b=class extends i.oi{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return(0,i.dy)`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){let e=this.networkImages.slice(0,5);return(0,i.dy)` <wui-flex class="networks">
      ${e?.map(e=>i.dy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`)}
    </wui-flex>`}};b.styles=[f.ET,f.ZM,g],k([(0,o.Cb)({type:Array})],b.prototype,"networkImages",void 0),k([(0,o.Cb)()],b.prototype,"text",void 0),b=k([(0,m.M)("wui-compatible-network")],b),r(86712),r(50551),r(76842);var v=r(40772),y=(0,i.iv)`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`,x=function(e,t,r,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let C=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.address=s.AccountController.state.address,this.profileName=s.AccountController.state.profileName,this.network=n.R.state.activeCaipNetwork,this.unsubscribe.push(s.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName):c.SnackController.showError("Account not found")}),n.R.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-wallet-receive-view: No account provided");let e=l.f.getNetworkImage(this.network);return(0,i.dy)` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${h.Hg.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${u.ThemeController.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,a.o)(u.ThemeController.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=n.R.getAllRequestedCaipNetworks(),t=n.R.checkIfSmartAccountEnabled(),r=n.R.state.activeCaipNetwork,o=e.filter(e=>e?.chainNamespace===r?.chainNamespace);if((0,d.r9)(r?.chainNamespace)===v.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?(0,i.dy)`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[l.f.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;let a=(o?.filter(e=>e?.assets?.imageId)?.slice(0,5)).map(l.f.getNetworkImage).filter(Boolean);return(0,i.dy)`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${a}
    ></wui-compatible-network>`}onReceiveClick(){w.RouterController.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(p.j.copyToClopboard(this.address),c.SnackController.showSuccess("Address copied"))}catch{c.SnackController.showError("Failed to copy")}}};C.styles=y,x([(0,o.SB)()],C.prototype,"address",void 0),x([(0,o.SB)()],C.prototype,"profileName",void 0),x([(0,o.SB)()],C.prototype,"network",void 0),C=x([(0,h.Mo)("w3m-wallet-receive-view")],C)}}]);