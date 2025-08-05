"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7500],{47500:function(e,t,n){n.r(t),n.d(t,{W3mPayLoadingView:function(){return z},W3mPayView:function(){return $},arbitrumUSDC:function(){return eo},arbitrumUSDT:function(){return ed},baseETH:function(){return en},baseSepoliaETH:function(){return er},baseUSDC:function(){return ea},ethereumUSDC:function(){return es},ethereumUSDT:function(){return eu},getExchanges:function(){return J},getIsPaymentInProgress:function(){return ee},getPayError:function(){return Q},getPayResult:function(){return Z},openPay:function(){return q},optimismUSDC:function(){return ei},optimismUSDT:function(){return em},pay:function(){return X},polygonUSDC:function(){return ec},polygonUSDT:function(){return ep},solanaSOL:function(){return eh},solanaUSDC:function(){return el},solanaUSDT:function(){return ey}});var a=n(16842),r=n(64059),s=n(17951),i=n(70253),o=n(8630),c=n(20200),l=n(70485),u=n(12048),m=n(93558),d=n(17105);n(35807),n(86712),n(8634),n(48938),n(35831),n(29196),n(32357),n(97694),n(97889),n(30542),n(76842),n(18274);var p=n(33963),y=n(48635),h=n(34942),w=n(69395),g=n(61785),E=n(85643),f=n(77990);let I={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS"},A={[I.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[I.INVALID_RECIPIENT]:"Invalid recipient address",[I.INVALID_ASSET]:"Invalid asset specified",[I.INVALID_AMOUNT]:"Invalid payment amount",[I.UNKNOWN_ERROR]:"Unknown payment error occurred",[I.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[I.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[I.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[I.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[I.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[I.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[I.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status"};class N extends Error{get message(){return A[this.code]}constructor(e,t){super(A[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,N)}}var P=n(25486);class C extends Error{}async function _(e,t){let n=function(){let e=P.OptionsController.getSnapshot().projectId;return`https://rpc.walletconnect.org/v1/json-rpc?projectId=${e}`}(),a=await fetch(n,{method:"POST",body:JSON.stringify({jsonrpc:"2.0",id:1,method:e,params:t}),headers:{"Content-Type":"application/json"}}),r=await a.json();if(r.error)throw new C(r.error.message);return r}async function S(e){return(await _("reown_getExchanges",e)).result}async function T(e){return(await _("reown_getExchangePayUrl",e)).result}async function x(e){return(await _("reown_getExchangeBuyStatus",e)).result}let b=["eip155","solana"],v={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function R(e,t){let{chainNamespace:n,chainId:a}=w.u.parseCaipNetworkId(e),r=v[n];if(!r)throw Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let s=r.native.assetNamespace,i=r.native.assetReference;"native"!==t&&(s=r.defaultTokenNamespace,i=t);let o=`${n}:${a}`;return`${o}/${s}:${i}`}var U=n(30722);async function k(e){let{paymentAssetNetwork:t,activeCaipNetwork:n,approvedCaipNetworkIds:a,requestedCaipNetworks:r}=e,s=l.j.sortRequestedNetworks(a,r).find(e=>e.caipNetworkId===t);if(!s)throw new N(I.INVALID_PAYMENT_CONFIG);if(s.caipNetworkId===n.caipNetworkId)return;let i=o.R.getNetworkProp("supportsAllNetworks",s.chainNamespace);if(!(a?.includes(s.caipNetworkId)||i))throw new N(I.INVALID_PAYMENT_CONFIG);try{await o.R.switchActiveNetwork(s)}catch(e){throw new N(I.GENERIC_PAYMENT_ERROR,e)}}async function D(e,t,n){if(t!==h.b.CHAIN.EVM)throw new N(I.INVALID_CHAIN_NAMESPACE);if(!n.fromAddress)throw new N(I.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.");let a="string"==typeof n.amount?parseFloat(n.amount):n.amount;if(isNaN(a))throw new N(I.INVALID_PAYMENT_CONFIG);let r=e.metadata?.decimals??18,s=m.ConnectionController.parseUnits(a.toString(),r);if("bigint"!=typeof s)throw new N(I.GENERIC_PAYMENT_ERROR);return await m.ConnectionController.sendTransaction({chainNamespace:t,to:n.recipient,address:n.fromAddress,value:s,data:"0x"})??void 0}async function O(e,t){if(!t.fromAddress)throw new N(I.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.");let n=e.asset,a=t.recipient,r=Number(e.metadata.decimals),s=m.ConnectionController.parseUnits(t.amount.toString(),r);if(void 0===s)throw new N(I.GENERIC_PAYMENT_ERROR);return await m.ConnectionController.writeContract({fromAddress:t.fromAddress,tokenAddress:n,args:[a,s],method:"transfer",abi:U.g.getERC20Abi(n),chainNamespace:h.b.CHAIN.EVM})??void 0}async function L(e,t){if(e!==h.b.CHAIN.SOLANA)throw new N(I.INVALID_CHAIN_NAMESPACE);if(!t.fromAddress)throw new N(I.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.");let n="string"==typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(n)||n<=0)throw new N(I.INVALID_PAYMENT_CONFIG,"Invalid payment amount.");try{if(!f.h.getProvider(e))throw new N(I.GENERIC_PAYMENT_ERROR,"No Solana provider available.");let a=await m.ConnectionController.sendTransaction({chainNamespace:h.b.CHAIN.SOLANA,to:t.recipient,value:n,tokenMint:t.tokenMint});if(!a)throw new N(I.GENERIC_PAYMENT_ERROR,"Transaction failed.");return a}catch(e){if(e instanceof N)throw e;throw new N(I.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${e}`)}}let M="unknown",G=(0,p.sj)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0}),Y={state:G,subscribe:e=>(0,p.Ld)(G,()=>e(G)),subscribeKey:(e,t)=>(0,y.VW)(G,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.subscribeEvents(),this.initializeAnalytics(),G.isConfigured=!0,g.X.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:G.exchanges,configuration:{network:G.paymentAsset.network,asset:G.paymentAsset.asset,recipient:G.recipient,amount:G.amount}}}),await c.I.open({view:"Pay"})},resetState(){G.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},G.recipient="0x0",G.amount=0,G.isConfigured=!1,G.error=null,G.isPaymentInProgress=!1,G.isLoading=!1,G.currentPayment=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new N(I.INVALID_PAYMENT_CONFIG);try{G.paymentAsset=e.paymentAsset,G.recipient=e.recipient,G.amount=e.amount,G.openInNewTab=e.openInNewTab??!0,G.redirectUrl=e.redirectUrl,G.payWithExchange=e.payWithExchange,G.error=null}catch(e){throw new N(I.INVALID_PAYMENT_CONFIG,e.message)}},getPaymentAsset:()=>G.paymentAsset,getExchanges:()=>G.exchanges,async fetchExchanges(){try{G.isLoading=!0;let e=await S({page:0,asset:R(G.paymentAsset.network,G.paymentAsset.asset),amount:G.amount.toString()});G.exchanges=e.exchanges.slice(0,2)}catch(e){throw u.SnackController.showError(A.UNABLE_TO_GET_EXCHANGES),new N(I.UNABLE_TO_GET_EXCHANGES)}finally{G.isLoading=!1}},async getAvailableExchanges(e){try{let t=e?.asset&&e?.network?R(e.network,e.asset):void 0;return await S({page:e?.page??0,asset:t,amount:e?.amount?.toString()})}catch(e){throw new N(I.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(e,t,n=!1){try{let a=Number(t.amount),r=await T({exchangeId:e,asset:R(t.network,t.asset),amount:a.toString(),recipient:`${t.network}:${t.recipient}`});return g.X.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e},headless:n}}),n&&(this.initiatePayment(),g.X.sendEvent({type:"track",event:"PAY_INITIATED",properties:{paymentId:G.paymentId||M,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e}}})),r}catch(e){if(e instanceof Error&&e.message.includes("is not supported"))throw new N(I.ASSET_NOT_SUPPORTED);throw Error(e.message)}},async openPayUrl(e,t,n=!1){try{let a=await this.getPayUrl(e.exchangeId,t,n);if(!a)throw new N(I.UNABLE_TO_GET_PAY_URL);let r=e.openInNewTab??!0;return l.j.openHref(a.url,r?"_blank":"_self"),a}catch(e){throw e instanceof N?G.error=e.message:G.error=A.GENERIC_PAYMENT_ERROR,new N(I.UNABLE_TO_GET_PAY_URL)}},subscribeEvents(){G.isConfigured||(m.ConnectionController.subscribeKey("connections",e=>{e.size>0&&this.handlePayment()}),i.AccountController.subscribeKey("caipAddress",e=>{let t=m.ConnectionController.hasAnyConnection(h.b.CONNECTOR_ID.WALLET_CONNECT);e&&(t?setTimeout(()=>{this.handlePayment()},100):this.handlePayment())}))},async handlePayment(){G.currentPayment={type:"wallet",status:"IN_PROGRESS"};let e=i.AccountController.state.caipAddress;if(!e)return;let{chainId:t,address:n}=w.u.parseCaipAddress(e),a=o.R.state.activeChain;if(!n||!t||!a||!f.h.getProvider(a))return;let r=o.R.state.activeCaipNetwork;if(r&&!G.isPaymentInProgress)try{this.initiatePayment();let e=o.R.getAllRequestedCaipNetworks(),t=o.R.getAllApprovedCaipNetworkIds();switch(await k({paymentAssetNetwork:G.paymentAsset.network,activeCaipNetwork:r,approvedCaipNetworkIds:t,requestedCaipNetworks:e}),await c.I.open({view:"PayLoading"}),a){case h.b.CHAIN.EVM:"native"===G.paymentAsset.asset&&(G.currentPayment.result=await D(G.paymentAsset,a,{recipient:G.recipient,amount:G.amount,fromAddress:n})),G.paymentAsset.asset.startsWith("0x")&&(G.currentPayment.result=await O(G.paymentAsset,{recipient:G.recipient,amount:G.amount,fromAddress:n})),G.currentPayment.status="SUCCESS";break;case h.b.CHAIN.SOLANA:G.currentPayment.result=await L(a,{recipient:G.recipient,amount:G.amount,fromAddress:n,tokenMint:"native"===G.paymentAsset.asset?void 0:G.paymentAsset.asset}),G.currentPayment.status="SUCCESS";break;default:throw new N(I.INVALID_CHAIN_NAMESPACE)}}catch(e){e instanceof N?G.error=e.message:G.error=A.GENERIC_PAYMENT_ERROR,G.currentPayment.status="FAILED",u.SnackController.showError(G.error)}finally{G.isPaymentInProgress=!1}},getExchangeById:e=>G.exchanges.find(t=>t.id===e),validatePayConfig(e){let{paymentAsset:t,recipient:n,amount:a}=e;if(!t)throw new N(I.INVALID_PAYMENT_CONFIG);if(!n)throw new N(I.INVALID_RECIPIENT);if(!t.asset)throw new N(I.INVALID_ASSET);if(null==a||a<=0)throw new N(I.INVALID_AMOUNT)},handlePayWithWallet(){let e=i.AccountController.state.caipAddress;if(!e){E.RouterController.push("Connect");return}let{chainId:t,address:n}=w.u.parseCaipAddress(e),a=o.R.state.activeChain;if(!n||!t||!a){E.RouterController.push("Connect");return}this.handlePayment()},async handlePayWithExchange(e){try{G.currentPayment={type:"exchange",exchangeId:e};let{network:t,asset:n}=G.paymentAsset,a={network:t,asset:n,amount:G.amount,recipient:G.recipient},r=await this.getPayUrl(e,a);if(!r)throw new N(I.UNABLE_TO_INITIATE_PAYMENT);return G.currentPayment.sessionId=r.sessionId,G.currentPayment.status="IN_PROGRESS",G.currentPayment.exchangeId=e,this.initiatePayment(),{url:r.url,openInNewTab:G.openInNewTab}}catch(e){return e instanceof N?G.error=e.message:G.error=A.GENERIC_PAYMENT_ERROR,G.isPaymentInProgress=!1,u.SnackController.showError(G.error),null}},async getBuyStatus(e,t){try{let n=await x({sessionId:t,exchangeId:e});return("SUCCESS"===n.status||"FAILED"===n.status)&&g.X.sendEvent({type:"track",event:"SUCCESS"===n.status?"PAY_SUCCESS":"PAY_ERROR",properties:{paymentId:G.paymentId||M,configuration:{network:G.paymentAsset.network,asset:G.paymentAsset.asset,recipient:G.recipient,amount:G.amount},currentPayment:{type:"exchange",exchangeId:G.currentPayment?.exchangeId,sessionId:G.currentPayment?.sessionId,result:n.txHash}}}),n}catch(e){throw new N(I.UNABLE_TO_GET_BUY_STATUS)}},async updateBuyStatus(e,t){try{let n=await this.getBuyStatus(e,t);G.currentPayment&&(G.currentPayment.status=n.status,G.currentPayment.result=n.txHash),("SUCCESS"===n.status||"FAILED"===n.status)&&(G.isPaymentInProgress=!1)}catch(e){throw new N(I.UNABLE_TO_GET_BUY_STATUS)}},initiatePayment(){G.isPaymentInProgress=!0,G.paymentId=crypto.randomUUID()},initializeAnalytics(){G.analyticsSet||(G.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",e=>{if(G.currentPayment?.status&&"UNKNOWN"!==G.currentPayment.status){let e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[G.currentPayment.status];g.X.sendEvent({type:"track",event:e,properties:{paymentId:G.paymentId||M,configuration:{network:G.paymentAsset.network,asset:G.paymentAsset.asset,recipient:G.recipient,amount:G.amount},currentPayment:{type:G.currentPayment.type,exchangeId:G.currentPayment.exchangeId,sessionId:G.currentPayment.sessionId,result:G.currentPayment.result}}})}}))}};var B=(0,a.iv)`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  .token-display {
    padding: var(--wui-spacing-s) var(--wui-spacing-m);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-bg-125);
    margin-top: var(--wui-spacing-s);
    margin-bottom: var(--wui-spacing-s);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--wui-spacing-xs);
  }
`,V=function(e,t,n,a){var r,s=arguments.length,i=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let $=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.amount="",this.tokenSymbol="",this.networkName="",this.exchanges=Y.state.exchanges,this.isLoading=Y.state.isLoading,this.loadingExchangeId=null,this.connectedWalletInfo=i.AccountController.state.connectedWalletInfo,this.initializePaymentDetails(),this.unsubscribe.push(Y.subscribeKey("exchanges",e=>this.exchanges=e)),this.unsubscribe.push(Y.subscribeKey("isLoading",e=>this.isLoading=e)),this.unsubscribe.push(i.AccountController.subscribe(e=>this.connectedWalletInfo=e.connectedWalletInfo)),Y.fetchExchanges()}get isWalletConnected(){return"connected"===i.AccountController.state.status}render(){return(0,a.dy)`
      <wui-flex flexDirection="column">
        <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
          ${this.renderPaymentHeader()}

          <wui-flex flexDirection="column" gap="s">
            ${this.renderPayWithWallet()} ${this.renderExchangeOptions()}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}initializePaymentDetails(){let e=Y.getPaymentAsset();this.networkName=e.network,this.tokenSymbol=e.metadata.symbol,this.amount=Y.state.amount.toString()}renderPayWithWallet(){return!function(e){let{chainNamespace:t}=w.u.parseCaipNetworkId(e);return b.includes(t)}(this.networkName)?(0,a.dy)``:(0,a.dy)`<wui-flex flexDirection="column" gap="s">
        ${this.isWalletConnected?this.renderConnectedView():this.renderDisconnectedView()}
      </wui-flex>
      <wui-separator text="or"></wui-separator>`}renderPaymentHeader(){let e=this.networkName;if(this.networkName){let t=o.R.getAllRequestedCaipNetworks().find(e=>e.caipNetworkId===this.networkName);t&&(e=t.name)}return(0,a.dy)`
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="large-700" color="fg-100">${this.amount||"0.0000"}</wui-text>
          <wui-flex class="token-display" alignItems="center" gap="xxs">
            <wui-text variant="paragraph-600" color="fg-100">
              ${this.tokenSymbol||"Unknown Asset"}
            </wui-text>
            ${e?(0,a.dy)`
                  <wui-text variant="small-500" color="fg-200"> on ${e} </wui-text>
                `:""}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderConnectedView(){let e=this.connectedWalletInfo?.name||"connected wallet";return(0,a.dy)`
      <wui-list-item
        @click=${this.onWalletPayment}
        ?chevron=${!0}
        data-testid="wallet-payment-option"
      >
        <wui-flex alignItems="center" gap="s">
          <wui-wallet-image
            size="sm"
            imageSrc=${(0,s.o)(this.connectedWalletInfo?.icon)}
            name=${(0,s.o)(this.connectedWalletInfo?.name)}
          ></wui-wallet-image>
          <wui-text variant="paragraph-500" color="inherit">Pay with ${e}</wui-text>
        </wui-flex>
      </wui-list-item>

      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="disconnect"
        @click=${this.onDisconnect}
        data-testid="disconnect-button"
        ?chevron=${!1}
      >
        <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
      </wui-list-item>
    `}renderDisconnectedView(){return(0,a.dy)`<wui-list-item
      variant="icon"
      iconVariant="overlay"
      icon="walletPlaceholder"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="paragraph-500" color="inherit">Pay from wallet</wui-text>
    </wui-list-item>`}renderExchangeOptions(){return this.isLoading?(0,a.dy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-spinner size="md"></wui-spinner>
      </wui-flex>`:0===this.exchanges.length?(0,a.dy)`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-100">No exchanges available</wui-text>
      </wui-flex>`:this.exchanges.map(e=>(0,a.dy)`
        <wui-list-item
          @click=${()=>this.onExchangePayment(e.id)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          ?disabled=${null!==this.loadingExchangeId}
        >
          <wui-flex alignItems="center" gap="s">
            ${this.loadingExchangeId===e.id?(0,a.dy)`<wui-loading-spinner color="accent-100" size="md"></wui-loading-spinner>`:(0,a.dy)`<wui-wallet-image
                  size="sm"
                  imageSrc=${(0,s.o)(e.imageUrl)}
                  name=${e.name}
                ></wui-wallet-image>`}
            <wui-text flexGrow="1" variant="paragraph-500" color="inherit"
              >Pay with ${e.name} <wui-spinner size="sm" color="fg-200"></wui-spinner
            ></wui-text>
          </wui-flex>
        </wui-list-item>
      `)}onWalletPayment(){Y.handlePayWithWallet()}async onExchangePayment(e){try{this.loadingExchangeId=e;let t=await Y.handlePayWithExchange(e);t&&(await c.I.open({view:"PayLoading"}),l.j.openHref(t.url,t.openInNewTab?"_blank":"_self"))}catch(e){console.error("Failed to pay with exchange",e),u.SnackController.showError("Failed to pay with exchange")}finally{this.loadingExchangeId=null}}async onDisconnect(e){e.stopPropagation();try{await m.ConnectionController.disconnect()}catch{console.error("Failed to disconnect"),u.SnackController.showError("Failed to disconnect")}}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}};$.styles=B,V([(0,r.SB)()],$.prototype,"amount",void 0),V([(0,r.SB)()],$.prototype,"tokenSymbol",void 0),V([(0,r.SB)()],$.prototype,"networkName",void 0),V([(0,r.SB)()],$.prototype,"exchanges",void 0),V([(0,r.SB)()],$.prototype,"isLoading",void 0),V([(0,r.SB)()],$.prototype,"loadingExchangeId",void 0),V([(0,r.SB)()],$.prototype,"connectedWalletInfo",void 0),$=V([(0,d.Mo)("w3m-pay-view")],$);var W=n(27237),F=n(99778),H=n(65773);n(51069);var j=(0,a.iv)`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }
`,K=function(e,t,n,a){var r,s=arguments.length,i=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};let z=class extends a.oi{constructor(){super(),this.loadingMessage="",this.subMessage="",this.paymentState="in-progress",this.paymentState=Y.state.isPaymentInProgress?"in-progress":"completed",this.updateMessages(),this.setupSubscription(),this.setupExchangeSubscription()}disconnectedCallback(){clearInterval(this.exchangeSubscription)}render(){return(0,a.dy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center"> ${this.getStateIcon()} </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            ${this.loadingMessage}
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            ${this.subMessage}
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}updateMessages(){switch(this.paymentState){case"completed":this.loadingMessage="Payment completed",this.subMessage="Your transaction has been successfully processed";break;case"error":this.loadingMessage="Payment failed",this.subMessage="There was an error processing your transaction";break;default:Y.state.currentPayment?.type==="exchange"?(this.loadingMessage="Payment initiated",this.subMessage="Please complete the payment on the exchange"):(this.loadingMessage="Awaiting payment confirmation",this.subMessage="Please confirm the payment transaction in your wallet")}}getStateIcon(){switch(this.paymentState){case"completed":return this.successTemplate();case"error":return this.errorTemplate();default:return this.loaderTemplate()}}setupExchangeSubscription(){Y.state.currentPayment?.type==="exchange"&&(this.exchangeSubscription=setInterval(async()=>{let e=Y.state.currentPayment?.exchangeId,t=Y.state.currentPayment?.sessionId;e&&t&&(await Y.updateBuyStatus(e,t),Y.state.currentPayment?.status==="SUCCESS"&&clearInterval(this.exchangeSubscription))},4e3))}setupSubscription(){Y.subscribeKey("isPaymentInProgress",e=>{e||"in-progress"!==this.paymentState||(Y.state.error||!Y.state.currentPayment?.result?this.paymentState="error":this.paymentState="completed",this.updateMessages(),setTimeout(()=>{"disconnected"!==m.ConnectionController.state.status&&c.I.close()},3e3))}),Y.subscribeKey("error",e=>{e&&"in-progress"===this.paymentState&&(this.paymentState="error",this.updateMessages())})}loaderTemplate(){let e=W.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4,n=this.getPaymentIcon();return(0,a.dy)`
      <wui-flex justifyContent="center" alignItems="center" style="position: relative;">
        ${n?(0,a.dy)`<wui-wallet-image size="lg" imageSrc=${n}></wui-wallet-image>`:null}
        <wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>
      </wui-flex>
    `}getPaymentIcon(){let e=Y.state.currentPayment;if(e){if("exchange"===e.type){let t=e.exchangeId;if(t){let e=Y.getExchangeById(t);return e?.imageUrl}}if("wallet"===e.type){let e=i.AccountController.state.connectedWalletInfo?.icon;if(e)return e;let t=o.R.state.activeChain;if(!t)return;let n=F.ConnectorController.getConnectorId(t);if(!n)return;let a=F.ConnectorController.getConnectorById(n);if(!a)return;return H.f.getConnectorImage(a)}}}successTemplate(){return(0,a.dy)`<wui-icon size="xl" color="success-100" name="checkmark"></wui-icon>`}errorTemplate(){return(0,a.dy)`<wui-icon size="xl" color="error-100" name="close"></wui-icon>`}};async function q(e){return Y.handleOpenPay(e)}async function X(e,t=3e5){if(t<=0)throw new N(I.INVALID_PAYMENT_CONFIG,"Timeout must be greater than 0");try{await q(e)}catch(e){if(e instanceof N)throw e;throw new N(I.UNABLE_TO_INITIATE_PAYMENT,e.message)}return new Promise((e,n)=>{var a;let r=!1,s=setTimeout(()=>{r||(r=!0,o(),n(new N(I.GENERIC_PAYMENT_ERROR,"Payment timeout")))},t);function i(){if(r)return;let t=Y.state.currentPayment,n=Y.state.error,a=Y.state.isPaymentInProgress;if(t?.status==="SUCCESS"){r=!0,o(),clearTimeout(s),e({success:!0,result:t.result});return}if(t?.status==="FAILED"){r=!0,o(),clearTimeout(s),e({success:!1,error:n||"Payment failed"});return}!n||a||t||(r=!0,o(),clearTimeout(s),e({success:!1,error:n}))}let o=(a=[et("currentPayment",i),et("error",i),et("isPaymentInProgress",i)],()=>{a.forEach(e=>{try{e()}catch{}})});i()})}function J(){return Y.getExchanges()}function Z(){return Y.state.currentPayment?.result}function Q(){return Y.state.error}function ee(){return Y.state.isPaymentInProgress}function et(e,t){return Y.subscribeKey(e,t)}z.styles=j,K([(0,r.SB)()],z.prototype,"loadingMessage",void 0),K([(0,r.SB)()],z.prototype,"subMessage",void 0),K([(0,r.SB)()],z.prototype,"paymentState",void 0),z=K([(0,d.Mo)("w3m-pay-loading-view")],z);let en={network:"eip155:8453",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},ea={network:"eip155:8453",asset:"0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},er={network:"eip155:84532",asset:"native",metadata:{name:"Ethereum",symbol:"ETH",decimals:18}},es={network:"eip155:1",asset:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ei={network:"eip155:10",asset:"0x0b2c639c533813f4aa9d7837caf62653d097ff85",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eo={network:"eip155:42161",asset:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},ec={network:"eip155:137",asset:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},el={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",metadata:{name:"USD Coin",symbol:"USDC",decimals:6}},eu={network:"eip155:1",asset:"0xdAC17F958D2ee523a2206206994597C13D831ec7",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},em={network:"eip155:10",asset:"0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ed={network:"eip155:42161",asset:"0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ep={network:"eip155:137",asset:"0xc2132d05d31c914a87c6611c10748aeb04b58e8f",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},ey={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",metadata:{name:"Tether USD",symbol:"USDT",decimals:6}},eh={network:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",asset:"native",metadata:{name:"Solana",symbol:"SOL",decimals:9}}},29196:function(e,t,n){n(54820)}}]);