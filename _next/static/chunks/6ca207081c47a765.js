(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,207577,719592,271298,e=>{"use strict";e.s(["ConnectorUtil",()=>h],207577);var t=e.i(689252),i=e.i(701676),o=e.i(435446),r=e.i(385904),n=e.i(613585),a=e.i(816478),l=e.i(444173),s=e.i(479702),c=e.i(96773);let d={getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,i])=>{t[`${c.ConstantsUtil.EIP155}:${e}`]=i}),t},isLowerCaseMatch:(e,t)=>e?.toLowerCase()===t?.toLowerCase(),getActiveNamespaceConnectedToAuth(){let e=o.ChainController.state.activeChain;return t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(i=>n.ConnectorController.getConnectorId(i)===t.ConstantsUtil.CONNECTOR_ID.AUTH&&i===e)},withRetry({conditionFn:e,intervalMs:t,maxRetries:i}){let o=0;return new Promise(r=>{async function n(){return(o+=1,await e())?r(!0):o>=i?r(!1):(setTimeout(n,t),null)}n()})}};e.s(["HelpersUtil",0,d],719592),e.s(["WalletUtil",()=>p],271298);var u=e.i(994223);let p={filterOutDuplicatesByRDNS(e){let t=l.OptionsController.state.enableEIP6963?n.ConnectorController.state.connectors:[],i=s.StorageUtil.getRecentWallets(),o=t.map(e=>e.info?.rdns).filter(Boolean),r=i.map(e=>e.rdns).filter(Boolean),c=o.concat(r);if(c.includes("io.metamask.mobile")&&a.CoreHelperUtil.isMobile()){let e=c.indexOf("io.metamask.mobile");c[e]="io.metamask"}return e.filter(e=>!(e?.rdns&&c.includes(String(e.rdns))||!e?.rdns&&t.some(t=>t.name===e.name))&&!0)},filterOutDuplicatesByIds(e){let t=n.ConnectorController.state.connectors.filter(e=>"ANNOUNCED"===e.type||"INJECTED"===e.type),i=s.StorageUtil.getRecentWallets(),o=t.map(e=>e.explorerId),r=i.map(e=>e.id),a=o.concat(r);return e.filter(e=>!a.includes(e?.id))},filterOutDuplicateWallets(e){let t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)},markWalletsAsInstalled(e){let{connectors:t}=n.ConnectorController.state,{featuredWalletIds:i}=l.OptionsController.state,o=t.filter(e=>"ANNOUNCED"===e.type).reduce((e,t)=>(t.info?.rdns&&(e[t.info.rdns]=!0),e),{});return e.map(e=>({...e,installed:!!e.rdns&&!!o[e.rdns??""]})).sort((e,t)=>{let o=Number(t.installed)-Number(e.installed);if(0!==o)return o;if(i?.length){let o=i.indexOf(e.id),r=i.indexOf(t.id);if(-1!==o&&-1!==r)return o-r;if(-1!==o)return -1;if(-1!==r)return 1}return 0})},getConnectOrderMethod(e,t){let o=e?.connectMethodsOrder||l.OptionsController.state.features?.connectMethodsOrder,r=t||n.ConnectorController.state.connectors;if(o)return o;let{injected:a,announced:s}=h.getConnectorsByType(r,i.ApiController.state.recommended,i.ApiController.state.featured),c=a.filter(h.showConnector),d=s.filter(h.showConnector);return c.length||d.length?["wallet","email","social"]:u.ConstantsUtil.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(e){let t=!!e.rdns&&i.ApiController.state.excludedWallets.some(t=>t.rdns===e.rdns),o=!!e.name&&i.ApiController.state.excludedWallets.some(t=>d.isLowerCaseMatch(t.name,e.name));return t||o},markWalletsWithDisplayIndex:e=>e.map((e,t)=>({...e,display_index:t}))},h={getConnectorsByType(e,t,i){let{customWallets:o}=l.OptionsController.state,r=s.StorageUtil.getRecentWallets(),n=p.filterOutDuplicateWallets(t),a=p.filterOutDuplicateWallets(i),c=e.filter(e=>"MULTI_CHAIN"===e.type),d=e.filter(e=>"ANNOUNCED"===e.type),u=e.filter(e=>"INJECTED"===e.type);return{custom:o,recent:r,external:e.filter(e=>"EXTERNAL"===e.type),multiChain:c,announced:d,injected:u,recommended:n,featured:a}},showConnector(e){let t=e.info?.rdns,o=!!t&&i.ApiController.state.excludedWallets.some(e=>!!e.rdns&&e.rdns===t),n=!!e.name&&i.ApiController.state.excludedWallets.some(t=>d.isLowerCaseMatch(t.name,e.name));if("INJECTED"===e.type&&("Browser Wallet"===e.name&&(!a.CoreHelperUtil.isMobile()||a.CoreHelperUtil.isMobile()&&!t&&!r.ConnectionController.checkInstalled())||o||n))return!1;return"ANNOUNCED"!==e.type&&"EXTERNAL"!==e.type||!o&&!n},getIsConnectedWithWC:()=>Array.from(o.ChainController.state.chains.values()).some(e=>n.ConnectorController.getConnectorId(e.namespace)===t.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),getConnectorTypeOrder({recommended:e,featured:t,custom:i,recent:o,announced:r,injected:n,multiChain:a,external:s,overriddenConnectors:c=l.OptionsController.state.features?.connectorTypeOrder??[]}){let d=[{type:"walletConnect",isEnabled:l.OptionsController.state.enableWalletConnect},{type:"recent",isEnabled:o.length>0},{type:"injected",isEnabled:[...n,...r,...a].length>0},{type:"featured",isEnabled:t.length>0},{type:"custom",isEnabled:i&&i.length>0},{type:"external",isEnabled:s.length>0},{type:"recommended",isEnabled:e.length>0}].filter(e=>e.isEnabled),u=new Set(d.map(e=>e.type)),p=c.filter(e=>u.has(e)).map(e=>({type:e,isEnabled:!0})),h=d.filter(({type:e})=>!p.some(({type:t})=>t===e));return Array.from(new Set([...p,...h].map(({type:e})=>e)))},getAuthName:({email:e,socialUsername:t,socialProvider:i})=>t?i&&"discord"===i&&t.endsWith("0")?t.slice(0,-1):t:e.length>30?`${e.slice(0,-3)}...`:e,async fetchProviderData(e){try{if("Browser Wallet"===e.name&&!a.CoreHelperUtil.isMobile()||e.id===t.ConstantsUtil.CONNECTOR_ID.AUTH)return{accounts:[],chainId:void 0};let[i,o]=await Promise.all([e.provider?.request({method:"eth_accounts"}),e.provider?.request({method:"eth_chainId"}).then(e=>Number(e))]);return{accounts:i,chainId:o}}catch(t){return console.warn(`Failed to fetch provider data for ${e.name}`,t),{accounts:[],chainId:void 0}}}}},503514,142240,e=>{"use strict";var t=e.i(608128),i=e.i(927158),o=e.i(689252),r=e.i(435446),n=e.i(479702),a=e.i(96773);let l={ConnectorExplorerIds:{[o.ConstantsUtil.CONNECTOR_ID.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[o.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[o.ConstantsUtil.CONNECTOR_ID.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[o.ConstantsUtil.CONNECTOR_ID.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[o.ConstantsUtil.CONNECTOR_ID.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[a.ConstantsUtil.METMASK_CONNECTOR_NAME]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[a.ConstantsUtil.TRUST_CONNECTOR_NAME]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[a.ConstantsUtil.SOLFLARE_CONNECTOR_NAME]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[a.ConstantsUtil.PHANTOM_CONNECTOR_NAME]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[a.ConstantsUtil.COIN98_CONNECTOR_NAME]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[a.ConstantsUtil.MAGIC_EDEN_CONNECTOR_NAME]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[a.ConstantsUtil.BACKPACK_CONNECTOR_NAME]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[a.ConstantsUtil.BITGET_CONNECTOR_NAME]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[a.ConstantsUtil.FRONTIER_CONNECTOR_NAME]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[a.ConstantsUtil.XVERSE_CONNECTOR_NAME]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[a.ConstantsUtil.LEATHER_CONNECTOR_NAME]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",0xaa36a7:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",0x4e454152:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200"},ConnectorImageIds:{[o.ConstantsUtil.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[o.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[o.ConstantsUtil.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[o.ConstantsUtil.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[o.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[o.ConstantsUtil.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[o.ConstantsUtil.CONNECTOR_ID.INJECTED]:"Browser Wallet",[o.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[o.ConstantsUtil.CONNECTOR_ID.COINBASE]:"Coinbase",[o.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[o.ConstantsUtil.CONNECTOR_ID.LEDGER]:"Ledger",[o.ConstantsUtil.CONNECTOR_ID.SAFE]:"Safe"},ConnectorTypesMap:{[o.ConstantsUtil.CONNECTOR_ID.INJECTED]:"INJECTED",[o.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]:"WALLET_CONNECT",[o.ConstantsUtil.CONNECTOR_ID.EIP6963]:"ANNOUNCED",[o.ConstantsUtil.CONNECTOR_ID.AUTH]:"AUTH",[a.ConstantsUtil.CONNECTOR_TYPE_AUTH]:"AUTH"},WalletConnectRpcChainIds:[1,5,0xaa36a7,10,420,42161,421613,137,80001,42220,0x4e454152,0x4e454153,56,97,43114,43113,100,8453,84531,7777777,999,324,280]};function s(e,t){let i=new URL("https://rpc.walletconnect.org/v1/");return i.searchParams.set("chainId",e),i.searchParams.set("projectId",t),i.toString()}e.s(["PresetsUtil",0,l],142240);let c=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],d={extendRpcUrlWithProjectId(e,t){let i=!1;try{i="rpc.walletconnect.org"===new URL(e).host}catch(e){i=!1}if(i){let i=new URL(e);return i.searchParams.has("projectId")||i.searchParams.set("projectId",t),i.toString()}return e},isCaipNetwork:e=>"chainNamespace"in e&&"caipNetworkId"in e,getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:o.ConstantsUtil.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${o.ConstantsUtil.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,i){let o=e.rpcUrls?.default?.http?.[0];return c.includes(t)?s(t,i):o||""},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:i,customRpcUrls:o}){let r=this.getChainNamespace(e),n=this.getCaipNetworkId(e),a=e.rpcUrls?.default?.http?.[0],s=this.getDefaultRpcUrl(e,n,i),c=e?.rpcUrls?.chainDefault?.http?.[0]||a,d=o?.[n]?.map(e=>e.url)||[],u=[...d,...s?[s]:[]],p=[...d];return c&&!p.includes(c)&&p.push(c),{...e,chainNamespace:r,caipNetworkId:n,assets:{imageId:l.NetworkImageIds[e.id],imageUrl:t?.[e.id]},rpcUrls:{...e.rpcUrls,default:{http:u},chainDefault:{http:p}}}},extendCaipNetworks:(e,{customNetworkImageUrls:t,projectId:i,customRpcUrls:o})=>e.map(e=>d.extendCaipNetwork(e,{customNetworkImageUrls:t,customRpcUrls:o,projectId:i})),getViemTransport(e,o,r){let n=[];return r?.forEach(e=>{n.push((0,i.http)(e.url,e.config))}),c.includes(e.caipNetworkId)&&n.push((0,i.http)(s(e.caipNetworkId,o),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),e?.rpcUrls?.default?.http?.forEach(e=>{n.push((0,i.http)(e))}),(0,t.fallback)(n)},extendWagmiTransports(e,o,r){if(c.includes(e.caipNetworkId)){let n=this.getDefaultRpcUrl(e,e.caipNetworkId,o);return(0,t.fallback)([r,(0,i.http)(n)])}return r},getUnsupportedNetwork:e=>({id:e.split(":")[1],caipNetworkId:e,name:o.ConstantsUtil.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}),getCaipNetworkFromStorage(e){let t=n.StorageUtil.getActiveCaipNetworkId(),i=r.ChainController.getAllRequestedCaipNetworks(),o=Array.from(r.ChainController.state.chains?.keys()||[]),a=t?.split(":")[0],l=!!a&&o.includes(a),s=i?.find(e=>e.caipNetworkId===t);return l&&!s&&t?this.getUnsupportedNetwork(t):s||e||i?.[0]}};e.s(["CaipNetworksUtil",0,d],503514)},821379,62076,31183,124606,422312,139096,566817,124696,670411,825158,e=>{"use strict";e.i(195126);var t=e.i(453404),i=e.i(841066);e.i(775353);var o=e.i(88083),r=e.i(666033);e.i(783601);var n=e.i(229199),a=e.i(504019),l=e.i(129415),s=e.i(487845),c=e.i(435446),d=e.i(816478),u=e.i(688138),p=e.i(444173);e.i(551831);var h=e.i(370128),w=t;e.i(3731),e.i(35801),e.i(27352),e.i(187604);var m=e.i(240403),g=e.i(370019);e.i(251315),e.i(210096);var f=e.i(527065);let b=f.css`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var C=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let y=class extends w.LitElement{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return i.html`
      <button
        ?disabled=${this.disabled}
        class=${(0,n.ifDefined)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?g.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return i.html` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
          data-testid="wui-account-button-unsupported-chain"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){let e=this.networkSrc?i.html`<wui-image src=${this.networkSrc}></wui-image>`:i.html`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?i.html`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:i.html`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return i.html`${e} ${t}`}return null}};y.styles=[m.resetStyles,m.elementStyles,b],C([(0,o.property)()],y.prototype,"networkSrc",void 0),C([(0,o.property)()],y.prototype,"avatarSrc",void 0),C([(0,o.property)()],y.prototype,"balance",void 0),C([(0,o.property)({type:Boolean})],y.prototype,"isUnsupportedChain",void 0),C([(0,o.property)({type:Boolean})],y.prototype,"disabled",void 0),C([(0,o.property)({type:Boolean})],y.prototype,"loading",void 0),C([(0,o.property)()],y.prototype,"address",void 0),C([(0,o.property)()],y.prototype,"profileName",void 0),C([(0,o.property)()],y.prototype,"charsStart",void 0),C([(0,o.property)()],y.prototype,"charsEnd",void 0),y=C([(0,h.customElement)("wui-account-button")],y);var v=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class x extends t.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=!!p.OptionsController.state.allowUnsupportedChain||!c.ChainController.state.activeChain||c.ChainController.checkIfSupportedNetwork(c.ChainController.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(c.ChainController.getAccountData(this.namespace)),this.setNetworkData(c.ChainController.getNetworkData(this.namespace))}firstUpdated(){let e=this.namespace;e?this.unsubscribe.push(c.ChainController.subscribeChainProp("accountState",e=>{this.setAccountData(e)},e),c.ChainController.subscribeChainProp("networkState",t=>{this.setNetworkData(t),this.isSupported=c.ChainController.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(l.AssetController.subscribeNetworkImages(()=>{this.networkImage=s.AssetUtil.getNetworkImage(this.network)}),c.ChainController.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),a.AccountController.subscribeKey("balance",e=>this.balanceVal=e),a.AccountController.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),a.AccountController.subscribeKey("profileName",e=>this.profileName=e),a.AccountController.subscribeKey("profileImage",e=>this.profileImage=e),c.ChainController.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=s.AssetUtil.getNetworkImage(e),this.isSupported=!e?.chainNamespace||c.ChainController.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!c.ChainController.state.activeChain)return null;let e="show"===this.balance,t="string"!=typeof this.balanceVal;return i.html`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!p.OptionsController.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,n.ifDefined)(d.CoreHelperUtil.getPlainAddress(this.caipAddress))}
        profileName=${(0,n.ifDefined)(this.profileName)}
        networkSrc=${(0,n.ifDefined)(this.networkImage)}
        avatarSrc=${(0,n.ifDefined)(this.profileImage)}
        balance=${e?d.CoreHelperUtil.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||p.OptionsController.state.allowUnsupportedChain?u.ModalController.open({namespace:this.namespace}):u.ModalController.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await s.AssetUtil.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=s.AssetUtil.getNetworkImage(e.caipNetwork))}}v([(0,o.property)({type:Boolean})],x.prototype,"disabled",void 0),v([(0,o.property)()],x.prototype,"balance",void 0),v([(0,o.property)()],x.prototype,"charsStart",void 0),v([(0,o.property)()],x.prototype,"charsEnd",void 0),v([(0,o.property)()],x.prototype,"namespace",void 0),v([(0,r.state)()],x.prototype,"caipAddress",void 0),v([(0,r.state)()],x.prototype,"balanceVal",void 0),v([(0,r.state)()],x.prototype,"balanceSymbol",void 0),v([(0,r.state)()],x.prototype,"profileName",void 0),v([(0,r.state)()],x.prototype,"profileImage",void 0),v([(0,r.state)()],x.prototype,"network",void 0),v([(0,r.state)()],x.prototype,"networkImage",void 0),v([(0,r.state)()],x.prototype,"isSupported",void 0);let k=class extends x{};k=v([(0,h.customElement)("w3m-account-button")],k);let E=class extends x{};E=v([(0,h.customElement)("appkit-account-button")],E),e.s(["AppKitAccountButton",()=>E,"W3mAccountButton",()=>k],821379);var $=t;let S=f.css`
  :host {
    display: block;
    width: max-content;
  }
`;var A=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class R extends $.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}connectedCallback(){super.connectedCallback(),this.caipAddress=this.namespace?c.ChainController.state.chains.get(this.namespace)?.accountState?.caipAddress:c.ChainController.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(c.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(c.ChainController.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?i.html`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${(0,n.ifDefined)(this.balance)}
            .charsStart=${(0,n.ifDefined)(this.charsStart)}
            .charsEnd=${(0,n.ifDefined)(this.charsEnd)}
            namespace=${(0,n.ifDefined)(this.namespace)}
          >
          </appkit-account-button>
        `:i.html`
          <appkit-connect-button
            size=${(0,n.ifDefined)(this.size)}
            label=${(0,n.ifDefined)(this.label)}
            loadingLabel=${(0,n.ifDefined)(this.loadingLabel)}
            namespace=${(0,n.ifDefined)(this.namespace)}
          ></appkit-connect-button>
        `}}R.styles=S,A([(0,o.property)({type:Boolean})],R.prototype,"disabled",void 0),A([(0,o.property)()],R.prototype,"balance",void 0),A([(0,o.property)()],R.prototype,"size",void 0),A([(0,o.property)()],R.prototype,"label",void 0),A([(0,o.property)()],R.prototype,"loadingLabel",void 0),A([(0,o.property)()],R.prototype,"charsStart",void 0),A([(0,o.property)()],R.prototype,"charsEnd",void 0),A([(0,o.property)()],R.prototype,"namespace",void 0),A([(0,r.state)()],R.prototype,"caipAddress",void 0);let O=class extends R{};O=A([(0,h.customElement)("w3m-button")],O);let N=class extends R{};N=A([(0,h.customElement)("appkit-button")],N),e.s(["AppKitButton",()=>N,"W3mButton",()=>O],62076);var T=t,I=t;let U=f.css`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var D=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let P=class extends I.LitElement{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return i.html`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?i.html`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};P.styles=[m.resetStyles,m.elementStyles,U],D([(0,o.property)()],P.prototype,"size",void 0),D([(0,o.property)({type:Boolean})],P.prototype,"loading",void 0),P=D([(0,h.customElement)("wui-connect-button")],P);var L=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class W extends T.LitElement{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=u.ModalController.state.open,this.loading=this.namespace?u.ModalController.state.loadingNamespaceMap.get(this.namespace):u.ModalController.state.loading,this.unsubscribe.push(u.ModalController.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-connect-button
        size=${(0,n.ifDefined)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?u.ModalController.close():this.loading||u.ModalController.open({view:"Connect",namespace:this.namespace})}}L([(0,o.property)()],W.prototype,"size",void 0),L([(0,o.property)()],W.prototype,"label",void 0),L([(0,o.property)()],W.prototype,"loadingLabel",void 0),L([(0,o.property)()],W.prototype,"namespace",void 0),L([(0,r.state)()],W.prototype,"open",void 0),L([(0,r.state)()],W.prototype,"loading",void 0);let j=class extends W{};j=L([(0,h.customElement)("w3m-connect-button")],j);let _=class extends W{};_=L([(0,h.customElement)("appkit-connect-button")],_),e.s(["AppKitConnectButton",()=>_,"W3mConnectButton",()=>j],31183);var B=t,H=e.i(974915),z=t;let M=f.css`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var F=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let V=class extends z.LitElement{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return i.html`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?i.html`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?i.html`<wui-image src=${this.imageSrc}></wui-image>`:i.html`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};V.styles=[m.resetStyles,m.elementStyles,M],F([(0,o.property)()],V.prototype,"imageSrc",void 0),F([(0,o.property)({type:Boolean})],V.prototype,"isUnsupportedChain",void 0),F([(0,o.property)({type:Boolean})],V.prototype,"disabled",void 0),V=F([(0,h.customElement)("wui-network-button")],V);let K=f.css`
  :host {
    display: block;
    width: max-content;
  }
`;var q=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class G extends B.LitElement{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=c.ChainController.state.activeCaipNetwork,this.networkImage=s.AssetUtil.getNetworkImage(this.network),this.caipAddress=c.ChainController.state.activeCaipAddress,this.loading=u.ModalController.state.loading,this.isSupported=!!p.OptionsController.state.allowUnsupportedChain||!c.ChainController.state.activeChain||c.ChainController.checkIfSupportedNetwork(c.ChainController.state.activeChain),this.unsubscribe.push(l.AssetController.subscribeNetworkImages(()=>{this.networkImage=s.AssetUtil.getNetworkImage(this.network)}),c.ChainController.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),c.ChainController.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=s.AssetUtil.getNetworkImage(e),this.isSupported=!e?.chainNamespace||c.ChainController.checkIfSupportedNetwork(e.chainNamespace),s.AssetUtil.fetchNetworkImage(e?.assets?.imageId)}),u.ModalController.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){s.AssetUtil.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!this.network||c.ChainController.checkIfSupportedNetwork(this.network.chainNamespace);return i.html`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!p.OptionsController.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,n.ifDefined)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||p.OptionsController.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(H.EventsController.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.ModalController.open({view:"Networks"}))}}G.styles=K,q([(0,o.property)({type:Boolean})],G.prototype,"disabled",void 0),q([(0,o.property)({type:String})],G.prototype,"label",void 0),q([(0,r.state)()],G.prototype,"network",void 0),q([(0,r.state)()],G.prototype,"networkImage",void 0),q([(0,r.state)()],G.prototype,"caipAddress",void 0),q([(0,r.state)()],G.prototype,"loading",void 0),q([(0,r.state)()],G.prototype,"isSupported",void 0);let Y=class extends G{};Y=q([(0,h.customElement)("w3m-network-button")],Y);let X=class extends G{};X=q([(0,h.customElement)("appkit-network-button")],X),e.s(["AppKitNetworkButton",()=>X,"W3mNetworkButton",()=>Y],124606);var J=t,Q=e.i(689252),Z=e.i(385904),ee=e.i(613585),et=e.i(978469),ei=e.i(629107),eo=e.i(347782),er=e.i(990716),en=e.i(643429);e.i(20909),e.i(389004),e.i(686118);var ea=t;e.i(435828),e.i(756059);let el=f.css`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var es=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ec=class extends ea.LitElement{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return i.html`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};ec.styles=[m.resetStyles,m.elementStyles,el],es([(0,o.property)()],ec.prototype,"label",void 0),es([(0,o.property)()],ec.prototype,"description",void 0),es([(0,o.property)()],ec.prototype,"icon",void 0),ec=es([(0,h.customElement)("wui-notice-card")],ec),e.i(686999);var ed=e.i(463677),eu=t,ep=e.i(479702),eh=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ew=class extends eu.LitElement{constructor(){super(),this.unsubscribe=[],this.socialProvider=ep.StorageUtil.getConnectedSocialProvider(),this.socialUsername=ep.StorageUtil.getConnectedSocialUsername(),this.namespace=c.ChainController.state.activeChain,this.unsubscribe.push(c.ChainController.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=ee.ConnectorController.getConnectorId(this.namespace),t=ee.ConnectorController.getAuthConnector();if(!t||e!==Q.ConstantsUtil.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;let o=t.provider.getEmail()??"";return o||this.socialUsername?i.html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(o,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||ei.RouterController.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};eh([(0,r.state)()],ew.prototype,"namespace",void 0),ew=eh([(0,h.customElement)("w3m-account-auth-button")],ew);var em=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eg=class extends J.LitElement{constructor(){super(),this.usubscribe=[],this.networkImages=l.AssetController.state.networkImages,this.address=a.AccountController.state.address,this.profileImage=a.AccountController.state.profileImage,this.profileName=a.AccountController.state.profileName,this.network=c.ChainController.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=p.OptionsController.state.remoteFeatures,this.usubscribe.push(a.AccountController.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),c.ChainController.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}),p.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-settings-view: No account provided");let e=this.networkImages[this.network?.assets?.imageId??""];return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,n.ifDefined)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${g.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,n.ifDefined)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=this.network?.chainNamespace,t=ee.ConnectorController.getConnectorId(e),o=ee.ConnectorController.getAuthConnector();return c.ChainController.checkIfNamesSupported()&&o&&t===Q.ConstantsUtil.CONNECTOR_ID.AUTH&&!this.profileName?i.html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=ee.ConnectorController.getConnectorId(this.network?.chainNamespace),t=ee.ConnectorController.getAuthConnector(),{origin:o}=location;return!t||e!==Q.ConstantsUtil.CONNECTOR_ID.AUTH||o.includes(et.ConstantsUtil.SECURE_SITE)?null:i.html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=c.ChainController.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(d.CoreHelperUtil.copyToClopboard(this.address),er.SnackController.showSuccess("Address copied"))}catch{er.SnackController.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){let e=this.network?.chainNamespace,t=c.ChainController.checkIfSmartAccountEnabled(),o=ee.ConnectorController.getConnectorId(e);return ee.ConnectorController.getAuthConnector()&&o===Q.ConstantsUtil.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=(0,en.getPreferredAccountType)(e)===ed.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),i.html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){ei.RouterController.push("ChooseAccountName")}async changePreferredAccountType(){let e=this.network?.chainNamespace,t=c.ChainController.checkIfSmartAccountEnabled(),i=(0,en.getPreferredAccountType)(e)!==ed.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT&&t?ed.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT:ed.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA;ee.ConnectorController.getAuthConnector()&&(this.loading=!0,await Z.ConnectionController.setPreferredAccountType(i,e),this.text=i===ed.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,eo.SendController.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&ei.RouterController.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;let e=this.network?.chainNamespace,t=Z.ConnectionController.getConnections(e).length>0,i=e&&ee.ConnectorController.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await Z.ConnectionController.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(ei.RouterController.push("ProfileWallets"),er.SnackController.showSuccess("Wallet deleted"))}catch{H.EventsController.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),er.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){H.EventsController.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),ei.RouterController.push("UpgradeEmailWallet")}};em([(0,r.state)()],eg.prototype,"address",void 0),em([(0,r.state)()],eg.prototype,"profileImage",void 0),em([(0,r.state)()],eg.prototype,"profileName",void 0),em([(0,r.state)()],eg.prototype,"network",void 0),em([(0,r.state)()],eg.prototype,"disconnecting",void 0),em([(0,r.state)()],eg.prototype,"loading",void 0),em([(0,r.state)()],eg.prototype,"switched",void 0),em([(0,r.state)()],eg.prototype,"text",void 0),em([(0,r.state)()],eg.prototype,"remoteFeatures",void 0),eg=em([(0,h.customElement)("w3m-account-settings-view")],eg),e.s(["W3mAccountSettingsView",()=>eg],422312);var ef=t;e.i(986138),e.i(645168);var eb=t;let eC=f.css`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var ey=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ev=class extends eb.LitElement{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let o=t===this.activeTab;return i.html`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${o}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?i.html`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let i=this.buttons[this.activeTab],o=this.buttons[e],r=i?.querySelector("wui-text"),n=o?.querySelector("wui-text"),a=o?.getBoundingClientRect(),l=n?.getBoundingClientRect();i&&r&&!t&&e!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&l&&n&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,o.animate([{width:`${a.width+l.width}px`}],{duration:500*!t,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:125*!t,delay:200*!t,fill:"forwards",easing:"ease"}))}};ev.styles=[m.resetStyles,m.elementStyles,eC],ey([(0,o.property)({type:Array})],ev.prototype,"tabs",void 0),ey([(0,o.property)()],ev.prototype,"onTabChange",void 0),ey([(0,o.property)({type:Array})],ev.prototype,"buttons",void 0),ey([(0,o.property)({type:Boolean})],ev.prototype,"disabled",void 0),ey([(0,o.property)()],ev.prototype,"localTabWidth",void 0),ey([(0,r.state)()],ev.prototype,"activeTab",void 0),ey([(0,r.state)()],ev.prototype,"isDense",void 0),ev=ey([(0,h.customElement)("wui-tabs")],ev),e.s([],139096),e.i(665477);var ex=t;let ek=f.css`
  button {
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-xxs);
    column-gap: var(--wui-spacing-xs);
  }

  wui-image,
  .icon-box {
    width: var(--wui-spacing-xxl);
    height: var(--wui-spacing-xxl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: var(--wui-color-gray-glass-005);
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: var(--wui-spacing-1xs);
    height: var(--wui-spacing-1xs);
    background-color: var(--wui-color-success-100);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
  }
`;var eE=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e$=class extends ex.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return i.html`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){let e=this.icon?i.html`<wui-icon
          size=${this.iconSize}
          color="fg-200"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:i.html`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return i.html`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return i.html`
      <wui-text variant="paragraph-500" color="fg-100">
        ${g.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return i.html`<wui-icon name="chevronBottom" size="xs" color="fg-200"></wui-icon>`}};e$.styles=[m.resetStyles,m.elementStyles,ek],eE([(0,o.property)()],e$.prototype,"address",void 0),eE([(0,o.property)()],e$.prototype,"profileName",void 0),eE([(0,o.property)()],e$.prototype,"alt",void 0),eE([(0,o.property)()],e$.prototype,"imageSrc",void 0),eE([(0,o.property)()],e$.prototype,"icon",void 0),eE([(0,o.property)()],e$.prototype,"iconSize",void 0),eE([(0,o.property)({type:Boolean})],e$.prototype,"loading",void 0),eE([(0,o.property)({type:Number})],e$.prototype,"charsStart",void 0),eE([(0,o.property)({type:Number})],e$.prototype,"charsEnd",void 0),e$=eE([(0,h.customElement)("wui-wallet-switch")],e$),e.s([],566817);let eS=f.css`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-wallet-switch {
    margin-top: var(--wui-spacing-xs);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var eA=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eR=class extends ef.LitElement{constructor(){super(),this.unsubscribe=[],this.caipAddress=a.AccountController.state.caipAddress,this.address=d.CoreHelperUtil.getPlainAddress(a.AccountController.state.caipAddress),this.profileImage=a.AccountController.state.profileImage,this.profileName=a.AccountController.state.profileName,this.disconnecting=!1,this.balance=a.AccountController.state.balance,this.balanceSymbol=a.AccountController.state.balanceSymbol,this.features=p.OptionsController.state.features,this.remoteFeatures=p.OptionsController.state.remoteFeatures,this.namespace=c.ChainController.state.activeChain,this.activeConnectorIds=ee.ConnectorController.state.activeConnectorIds,this.unsubscribe.push(a.AccountController.subscribeKey("caipAddress",e=>{this.address=d.CoreHelperUtil.getPlainAddress(e),this.caipAddress=e}),a.AccountController.subscribeKey("balance",e=>this.balance=e),a.AccountController.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),a.AccountController.subscribeKey("profileName",e=>this.profileName=e),a.AccountController.subscribeKey("profileImage",e=>this.profileImage=e),p.OptionsController.subscribeKey("features",e=>this.features=e),p.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),ee.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),c.ChainController.subscribeKey("activeChain",e=>this.namespace=e),c.ChainController.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?ee.ConnectorController.getConnectorById(e):void 0,o=s.AssetUtil.getConnectorImage(t);return i.html`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="s"
      >
        <wui-avatar
          alt=${(0,n.ifDefined)(this.caipAddress)}
          address=${(0,n.ifDefined)(d.CoreHelperUtil.getPlainAddress(this.caipAddress))}
          imageSrc=${(0,n.ifDefined)(null===this.profileImage?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${o}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${d.CoreHelperUtil.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace)return null;let e=this.remoteFeatures?.onramp,t=et.ConstantsUtil.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return e&&t?i.html`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||et.ConstantsUtil.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&et.ConstantsUtil.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?i.html` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=c.ChainController.state.activeChain===Q.ConstantsUtil.CHAIN.EVM;return e&&t?i.html`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){let e=this.features?.send,t=c.ChainController.state.activeChain;if(!t)throw Error("SendController:sendTemplate - namespace is required");let o=et.ConstantsUtil.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&o?i.html`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){let e=c.ChainController.state.activeChain;if(!e)throw Error("AuthCardTemplate:authCardTemplate - namespace is required");let t=ee.ConnectorController.getConnectorId(e),o=ee.ConnectorController.getAuthConnector(),{origin:r}=location;return!o||t!==Q.ConstantsUtil.CONNECTOR_ID.AUTH||r.includes(et.ConstantsUtil.SECURE_SITE)?null:i.html`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){ei.RouterController.push("OnRampProviders")}handleClickSwap(){ei.RouterController.push("Swap")}handleClickSend(){ei.RouterController.push("WalletSend")}explorerBtnTemplate(){return a.AccountController.state.addressExplorerUrl?i.html`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){H.EventsController.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:(0,en.getPreferredAccountType)(c.ChainController.state.activeChain)===ed.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),ei.RouterController.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;let e=Z.ConnectionController.getConnections(this.namespace).length>0,t=this.namespace&&ee.ConnectorController.state.activeConnectorIds[this.namespace],i=this.remoteFeatures?.multiWallet;await Z.ConnectionController.disconnect(i?{id:t,namespace:this.namespace}:{}),e&&i&&(ei.RouterController.push("ProfileWallets"),er.SnackController.showSuccess("Wallet deleted"))}catch{H.EventsController.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),er.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){let e=a.AccountController.state.addressExplorerUrl;e&&d.CoreHelperUtil.openHref(e,"_blank")}onGoToUpgradeView(){H.EventsController.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),ei.RouterController.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){ei.RouterController.push("ProfileWallets")}};eR.styles=eS,eA([(0,r.state)()],eR.prototype,"caipAddress",void 0),eA([(0,r.state)()],eR.prototype,"address",void 0),eA([(0,r.state)()],eR.prototype,"profileImage",void 0),eA([(0,r.state)()],eR.prototype,"profileName",void 0),eA([(0,r.state)()],eR.prototype,"disconnecting",void 0),eA([(0,r.state)()],eR.prototype,"balance",void 0),eA([(0,r.state)()],eR.prototype,"balanceSymbol",void 0),eA([(0,r.state)()],eR.prototype,"features",void 0),eA([(0,r.state)()],eR.prototype,"remoteFeatures",void 0),eA([(0,r.state)()],eR.prototype,"namespace",void 0),eA([(0,r.state)()],eR.prototype,"activeConnectorIds",void 0),eR=eA([(0,h.customElement)("w3m-account-default-widget")],eR),e.s([],124696);var eO=t;let eN=f.css`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var eT=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eI=class extends eO.LitElement{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return i.html`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};eI.styles=[m.resetStyles,eN],eT([(0,o.property)()],eI.prototype,"dollars",void 0),eT([(0,o.property)()],eI.prototype,"pennies",void 0),eI=eT([(0,h.customElement)("wui-balance")],eI),e.s([],670411);var eU=t;let eD=f.css`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
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
`;var eP=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eL=class extends eU.LitElement{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,i.html`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};eL.styles=[m.resetStyles,m.elementStyles,eD],eP([(0,o.property)()],eL.prototype,"placement",void 0),eP([(0,o.property)()],eL.prototype,"variant",void 0),eP([(0,o.property)()],eL.prototype,"message",void 0),eL=eP([(0,h.customElement)("wui-tooltip")],eL),e.s([],825158)},493530,843918,633800,358177,50791,789314,602459,639190,271925,27464,647751,e=>{"use strict";e.i(195126);var t=e.i(453404),i=e.i(841066);e.i(775353);var o=e.i(666033),r=e.i(689252),n=e.i(435446),a=e.i(613585);e.i(551831);var l=e.i(370128);e.i(124696);var s=t,c=e.i(504019),d=e.i(978469),u=e.i(816478),p=e.i(974915),h=e.i(688138),w=e.i(444173),m=e.i(629107),g=e.i(479702),f=e.i(643429);e.i(670411),e.i(20909),e.i(107562),e.i(139096),e.i(825158),e.i(566817);var b=e.i(463677),C=e.i(207577),y=e.i(994223);let v=e=>e&&e===r.ConstantsUtil.CHAIN.EVM?w.OptionsController.state.remoteFeatures?.activity===!1?y.ConstantsUtil.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):y.ConstantsUtil.ACCOUNT_TABS:[];var x=t;e.i(570654);var k=e.i(527065);let E=k.css`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,$=class extends x.LitElement{render(){return i.html`<w3m-activity-list page="account"></w3m-activity-list>`}};$.styles=E,$=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.customElement)("w3m-account-activity-widget")],$);var S=t;e.i(503345),e.i(811060),e.i(686999);let A=k.css`
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
`,R=class extends S.LitElement{render(){return i.html`${this.nftTemplate()}`}nftTemplate(){return i.html` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
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
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){m.RouterController.push("WalletReceive")}};R.styles=A,R=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.customElement)("w3m-account-nfts-widget")],R);var O=t,N=t,T=e.i(88083);e.i(3731),e.i(27352),e.i(210096),e.i(187604);var I=e.i(240403);e.i(787193);let U=k.css`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var D=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let P=class extends N.LitElement{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return i.html`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?i.html` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:i.html`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};P.styles=[I.resetStyles,I.elementStyles,U],D([(0,T.property)()],P.prototype,"icon",void 0),D([(0,T.property)()],P.prototype,"text",void 0),D([(0,T.property)()],P.prototype,"description",void 0),D([(0,T.property)()],P.prototype,"tag",void 0),D([(0,T.property)()],P.prototype,"iconBackgroundColor",void 0),D([(0,T.property)()],P.prototype,"iconColor",void 0),D([(0,T.property)({type:Boolean})],P.prototype,"disabled",void 0),P=D([(0,l.customElement)("wui-list-description")],P),e.i(377937);let L=k.css`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var W=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let j=class extends O.LitElement{constructor(){super(),this.unsubscribe=[],this.tokenBalance=c.AccountController.state.tokenBalance,this.remoteFeatures=w.OptionsController.state.remoteFeatures,this.unsubscribe.push(c.AccountController.subscribe(e=>{this.tokenBalance=e.tokenBalance}),w.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?i.html`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:i.html` <wui-flex flexDirection="column" gap="xs"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?i.html`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description>`:i.html``}tokenItemTemplate(){return this.tokenBalance?.map(e=>i.html`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){m.RouterController.push("WalletReceive")}onBuyClick(){p.EventsController.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:(0,f.getPreferredAccountType)(n.ChainController.state.activeChain)===b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),m.RouterController.push("OnRampProviders")}};j.styles=L,W([(0,o.state)()],j.prototype,"tokenBalance",void 0),W([(0,o.state)()],j.prototype,"remoteFeatures",void 0),j=W([(0,l.customElement)("w3m-account-tokens-widget")],j),e.i(440651),e.i(879509);let _=k.css`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
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
`;var B=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let H=class extends s.LitElement{constructor(){super(),this.unsubscribe=[],this.address=c.AccountController.state.address,this.profileName=c.AccountController.state.profileName,this.network=n.ChainController.state.activeCaipNetwork,this.currentTab=c.AccountController.state.currentTab,this.tokenBalance=c.AccountController.state.tokenBalance,this.features=w.OptionsController.state.features,this.namespace=n.ChainController.state.activeChain,this.activeConnectorIds=a.ConnectorController.state.activeConnectorIds,this.remoteFeatures=w.OptionsController.state.remoteFeatures,this.unsubscribe.push(c.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):h.ModalController.close()}),a.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),n.ChainController.subscribeKey("activeChain",e=>this.namespace=e),n.ChainController.subscribeKey("activeCaipNetwork",e=>this.network=e),w.OptionsController.subscribeKey("features",e=>this.features=e),w.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){c.AccountController.fetchTokenBalance()}render(){if(!this.address)throw Error("w3m-account-view: No account provided");if(!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?a.ConnectorController.getConnectorById(e):void 0,{icon:o,iconSize:r}=this.getAuthData();return i.html`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="xs">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${o}
          iconSize=${r}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){let e=this.features?.walletFeaturesOrder||d.ConstantsUtil.DEFAULT_FEATURES.walletFeaturesOrder;return e.every(e=>"send"===e||"receive"===e?!this.features?.[e]:"swaps"!==e&&"onramp"!==e||!this.remoteFeatures?.[e])?null:i.html`<wui-flex gap="s">
      ${e.map(e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}onrampTemplate(){return this.remoteFeatures?.onramp?i.html`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=n.ChainController.state.activeChain===r.ConstantsUtil.CHAIN.EVM;return e&&t?i.html`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}receiveTemplate(){return this.features?.receive?i.html`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){let e=this.features?.send,t=n.ChainController.state.activeChain,o=d.ConstantsUtil.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&o?i.html`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>c.AccountController.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===r.ConstantsUtil.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return 0===this.currentTab?i.html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?i.html`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?i.html`<w3m-account-activity-widget></w3m-account-activity-widget>`:i.html`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=u.CoreHelperUtil.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:o="00"}=u.CoreHelperUtil.formatTokenBalance(e);return i.html`<wui-balance dollars=${t} pennies=${o}></wui-balance>`}return i.html`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){let e=v(n.ChainController.state.activeChain);if(0===e.length)return null;let t=u.CoreHelperUtil.isMobile()&&window.innerWidth<430,o="104px";return o=t?`${(window.innerWidth-48)/e.length}px`:2===e.length?"156px":"104px",i.html`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      localTabWidth=${o}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){c.AccountController.setCurrentTab(e)}onBuyClick(){m.RouterController.push("OnRampProviders")}onSwapClick(){this.network?.caipNetworkId&&!d.ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?m.RouterController.push("UnsupportedChain",{swapUnsupportedChain:!0}):(p.EventsController.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,f.getPreferredAccountType)(n.ChainController.state.activeChain)===b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),m.RouterController.push("Swap"))}getAuthData(){let e=g.StorageUtil.getConnectedSocialProvider(),t=g.StorageUtil.getConnectedSocialUsername(),i=a.ConnectorController.getAuthConnector(),o=i?.provider.getEmail()??"";return{name:C.ConnectorUtil.getAuthName({email:o,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onReceiveClick(){m.RouterController.push("WalletReceive")}onGoToProfileWalletsView(){m.RouterController.push("ProfileWallets")}onSendClick(){p.EventsController.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,f.getPreferredAccountType)(n.ChainController.state.activeChain)===b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),m.RouterController.push("WalletSend")}};H.styles=_,B([(0,o.state)()],H.prototype,"watchTokenBalance",void 0),B([(0,o.state)()],H.prototype,"address",void 0),B([(0,o.state)()],H.prototype,"profileName",void 0),B([(0,o.state)()],H.prototype,"network",void 0),B([(0,o.state)()],H.prototype,"currentTab",void 0),B([(0,o.state)()],H.prototype,"tokenBalance",void 0),B([(0,o.state)()],H.prototype,"features",void 0),B([(0,o.state)()],H.prototype,"namespace",void 0),B([(0,o.state)()],H.prototype,"activeConnectorIds",void 0),B([(0,o.state)()],H.prototype,"remoteFeatures",void 0),H=B([(0,l.customElement)("w3m-account-wallet-features-widget")],H);var z=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let M=class extends t.LitElement{constructor(){super(),this.unsubscribe=[],this.namespace=n.ChainController.state.activeChain,this.unsubscribe.push(n.ChainController.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;let e=a.ConnectorController.getConnectorId(this.namespace),t=a.ConnectorController.getAuthConnector();return i.html`
      ${t&&e===r.ConstantsUtil.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return i.html`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return i.html`<w3m-account-default-widget></w3m-account-default-widget>`}};z([(0,o.state)()],M.prototype,"namespace",void 0),M=z([(0,l.customElement)("w3m-account-view")],M),e.s(["W3mAccountView",()=>M],493530);var F=t;e.i(452283);var V=e.i(591846),K=e.i(564317),q=e.i(487845),G=e.i(385904),Y=e.i(537209),X=e.i(990716),J=e.i(944856),Q=t;e.i(435828),e.i(35801),e.i(730877);var Z=e.i(370019);e.i(756059),e.i(977441);let ee=k.css`
  wui-image {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-image,
  .icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: var(--wui-color-gray-glass-005);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
    padding: var(--wui-spacing-4xs);
  }
`;var et=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ei=class extends Q.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return i.html`
      <wui-flex flexDirection="column" rowGap="xs">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return i.html`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          iconColor="fg-200"
          size="sm"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          iconColor="fg-200"
          size="sm"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?i.html`<wui-icon-link
              iconColor="fg-200"
              size="sm"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return i.html` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?i.html`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon
              size=${this.iconSize}
              color="fg-200"
              name=${this.icon}
              class="custom-icon"
            ></wui-icon>

            ${this.iconBadge?i.html`<wui-icon
                  color="fg-175"
                  size=${this.iconBadgeSize}
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:i.html`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return 0===this.content.length?null:i.html`
      <wui-flex flexDirection="column" rowGap="s">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:o,description:r,enableButton:n,buttonType:a,buttonLabel:l,buttonVariant:s,tagVariant:c,tagLabel:d,alignItems:u="flex-end"}){return i.html`
      <wui-flex justifyContent="space-between" alignItems=${u} columnGap="3xs">
        <wui-flex flexDirection="column" rowGap="4xs">
          ${o?i.html`<wui-text variant="micro-600" color="fg-200">${o}</wui-text>`:null}

          <wui-flex alignItems="center" columnGap="3xs">
            <wui-text variant="small-500" color="fg-100">
              ${Z.UiHelperUtil.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?"end":"middle"})}
            </wui-text>

            ${c&&d?i.html`<wui-tag variant=${c} size="xs">${d}</wui-tag>`:null}
          </wui-flex>

          ${r?i.html`<wui-text variant="tiny-500" color="fg-200">${r}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:a,buttonLabel:l,buttonVariant:s}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:o}){return i.html`
      <wui-button
        size="xs"
        variant=${o}
        @click=${"disconnect"===e?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${"disconnect"===e?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};ei.styles=[I.resetStyles,I.elementStyles,ee],et([(0,T.property)()],ei.prototype,"address",void 0),et([(0,T.property)()],ei.prototype,"profileName",void 0),et([(0,T.property)({type:Array})],ei.prototype,"content",void 0),et([(0,T.property)()],ei.prototype,"alt",void 0),et([(0,T.property)()],ei.prototype,"imageSrc",void 0),et([(0,T.property)()],ei.prototype,"icon",void 0),et([(0,T.property)()],ei.prototype,"iconSize",void 0),et([(0,T.property)()],ei.prototype,"iconBadge",void 0),et([(0,T.property)()],ei.prototype,"iconBadgeSize",void 0),et([(0,T.property)()],ei.prototype,"buttonVariant",void 0),et([(0,T.property)({type:Boolean})],ei.prototype,"enableMoreButton",void 0),et([(0,T.property)({type:Number})],ei.prototype,"charsStart",void 0),et([(0,T.property)({type:Number})],ei.prototype,"charsEnd",void 0),ei=et([(0,l.customElement)("wui-active-profile-wallet-item")],ei),e.i(986138),e.i(645168);var eo=t;let er=k.css`
  wui-image,
  .icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
    border-radius: var(--wui-border-radius-3xs);
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: var(--wui-color-gray-glass-005);
    border: 2px solid var(--wui-color-modal-bg);
    border-radius: 50%;
    padding: var(--wui-spacing-4xs);
  }
`;var en=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ea=class extends eo.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="off",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return i.html`
      <wui-flex alignItems="center" columnGap="xs">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?i.html`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon
              size=${this.iconSize}
              color="fg-200"
              name=${this.icon}
              class="custom-icon"
            ></wui-icon>
            ${this.iconBadge?i.html`<wui-icon
                  color="fg-175"
                  size=${this.iconBadgeSize}
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:i.html`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return i.html`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="small-500" color="fg-100">
          ${Z.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return i.html`
      <wui-flex columnGap="3xs" alignItems="center" justifyContent="center">
        <wui-button
          size="xs"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          iconColor="fg-200"
          size=${this.rightIconSize}
          icon=${this.rightIcon}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};ea.styles=[I.resetStyles,I.elementStyles,er],en([(0,T.property)()],ea.prototype,"address",void 0),en([(0,T.property)()],ea.prototype,"profileName",void 0),en([(0,T.property)()],ea.prototype,"alt",void 0),en([(0,T.property)()],ea.prototype,"buttonLabel",void 0),en([(0,T.property)()],ea.prototype,"buttonVariant",void 0),en([(0,T.property)()],ea.prototype,"imageSrc",void 0),en([(0,T.property)()],ea.prototype,"icon",void 0),en([(0,T.property)()],ea.prototype,"iconSize",void 0),en([(0,T.property)()],ea.prototype,"iconBadge",void 0),en([(0,T.property)()],ea.prototype,"iconBadgeSize",void 0),en([(0,T.property)()],ea.prototype,"rightIcon",void 0),en([(0,T.property)()],ea.prototype,"rightIconSize",void 0),en([(0,T.property)({type:Boolean})],ea.prototype,"loading",void 0),en([(0,T.property)({type:Number})],ea.prototype,"charsStart",void 0),en([(0,T.property)({type:Number})],ea.prototype,"charsEnd",void 0),ea=en([(0,l.customElement)("wui-inactive-profile-wallet-item")],ea),e.i(686118),e.i(383654);var el=e.i(719592);let es={getAuthData(e){let t=e.connectorId===r.ConstantsUtil.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};let i=e?.auth?.name??g.StorageUtil.getConnectedSocialProvider(),o=e?.auth?.username??g.StorageUtil.getConnectedSocialUsername(),n=a.ConnectorController.getAuthConnector(),l=n?.provider.getEmail()??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:t?C.ConnectorUtil.getAuthName({email:l,socialUsername:o,socialProvider:i}):void 0}}},ec=k.css`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: var(--wui-spacing-l);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-separator {
    margin: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;
  }

  .active-connection {
    padding: var(--wui-spacing-xs);
  }

  .recent-connection {
    padding: var(--wui-spacing-xs) 0 var(--wui-spacing-xs) 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var ed=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eu=4,ep=6,eh="md",ew="lightbulb",em=[0,1],eg={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},ef=[{namespace:"eip155",icon:eg.eip155,label:"EVM"},{namespace:"solana",icon:eg.solana,label:"Solana"},{namespace:"bip122",icon:eg.bip122,label:"Bitcoin"}],eb={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}},eC=class extends F.LitElement{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=n.ChainController.state.activeChain,this.namespaces=Array.from(n.ChainController.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=a.ConnectorController.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=n.ChainController.state.activeCaipNetwork,this.user=c.AccountController.state.user,this.remoteFeatures=w.OptionsController.state.remoteFeatures,this.tabWidth="",this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=n.ChainController.getAccountData(this.namespace)?.caipAddress,this.profileName=n.ChainController.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(G.ConnectionController.subscribeKey("connections",()=>this.onConnectionsChange()),G.ConnectionController.subscribeKey("recentConnections",()=>this.requestUpdate()),a.ConnectorController.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),n.ChainController.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e),c.AccountController.subscribeKey("user",e=>this.user=e),w.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.chainListener=n.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.tabsResizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){let e=this.shadowRoot?.querySelector(".wallet-list"),t=this.shadowRoot?.querySelector("wui-tabs");if(!e)return;let i=()=>this.updateScrollOpacity(e);if(requestAnimationFrame(i),e.addEventListener("scroll",i),this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(e),i(),t){let e=()=>{let e=ef.filter(e=>this.namespaces.includes(e.namespace)).length;if(e>1){let t=this.getBoundingClientRect()?.width;this.tabWidth=`${(t-32-8)/e}px`,this.requestUpdate()}};this.tabsResizeObserver=new ResizeObserver(e),this.tabsResizeObserver.observe(this),e()}}render(){let e=this.namespace;if(!e)throw Error("Namespace is not set");return i.html`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="l">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){let e=ef.filter(e=>this.namespaces.includes(e.namespace));return e.length>1?i.html`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          localTabWidth=${this.tabWidth}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){let t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+ +!!this.caipAddress;return i.html`
      <wui-flex alignItems="center" columnGap="3xs">
        <wui-icon
          name=${eg[e]??eg.eip155}
          size="lg"
        ></wui-icon>
        <wui-text color="fg-200" variant="small-400"
          >${t>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="fg-100"
          variant="small-400"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="fg-200"
          @click=${()=>G.ConnectionController.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){let t=this.hasAnyConnections(e);return i.html`
      <wui-flex flexDirection="column" class=${(0,V.classMap)({"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t})} rowGap="s">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){let t=this.getActiveConnections(e),o=this.activeConnectorIds[e],r=this.getPlainAddress();return i.html`
      ${r||o||t.length>0?i.html`<wui-flex
            flexDirection="column"
            .padding=${["l","0","xs","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){let t=this.activeConnectorIds[e];if(!t)return null;let{connections:o}=Y.ConnectionControllerUtil.getConnectionsData(e),n=a.ConnectorController.getConnectorById(t),l=q.AssetUtil.getConnectorImage(n),s=this.getPlainAddress();if(!s)return null;let c=e===r.ConstantsUtil.CHAIN.BITCOIN,d=es.getAuthData({connectorId:t,accounts:[]}),u=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,p=o.find(e=>e.connectorId===t),h=p?.accounts.filter(e=>!el.HelpersUtil.isLowerCaseMatch(e.address,s));return i.html`
      <wui-flex flexDirection="column" .padding=${["0","l","0","l"]}>
        <wui-active-profile-wallet-item
          address=${s}
          alt=${n?.name}
          .content=${this.getProfileContent({address:s,connections:o,connectorId:t,namespace:e})}
          .charsStart=${eu}
          .charsEnd=${ep}
          .icon=${d.icon}
          .iconSize=${d.iconSize}
          .iconBadge=${this.isSmartAccount(s)?ew:void 0}
          .iconBadgeSize=${this.isSmartAccount(s)?eh:void 0}
          imageSrc=${l}
          ?enableMoreButton=${d.isAuth}
          @copy=${()=>this.handleCopyAddress(s)}
          @disconnect=${()=>this.handleDisconnect(e,{id:t})}
          @switch=${()=>{c&&p&&h?.[0]&&this.handleSwitchWallet(p,h[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(s)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${u?i.html`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){let t=this.getActiveConnections(e);return 0===t.length?null:i.html`
      <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){let{recentConnections:t}=Y.ConnectionControllerUtil.getConnectionsData(e);return 0===t.flatMap(e=>e.accounts).length?null:i.html`
      <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]} rowGap="xs">
        <wui-text color="fg-200" variant="micro-500" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","xs","0","xs"]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,o){return e.filter(e=>e.accounts.length>0).map((e,r)=>{let n=a.ConnectorController.getConnectorById(e.connectorId),l=q.AssetUtil.getConnectorImage(n)??"",s=es.getAuthData(e);return e.accounts.map((n,a)=>{let c=this.isAccountLoading(e.connectorId,n.address);return i.html`
            <wui-flex flexDirection="column">
              ${0!==r||0!==a?i.html`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${n.address}
                alt=${e.connectorId}
                buttonLabel=${t?"Connect":"Switch"}
                buttonVariant=${t?"neutral":"accent"}
                rightIcon=${t?"bin":"off"}
                rightIconSize="sm"
                class=${t?"recent-connection":"active-connection"}
                data-testid=${t?"recent-connection":"active-connection"}
                imageSrc=${l}
                .iconBadge=${this.isSmartAccount(n.address)?ew:void 0}
                .iconBadgeSize=${this.isSmartAccount(n.address)?eh:void 0}
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${c}
                .showBalance=${!1}
                .charsStart=${eu}
                .charsEnd=${ep}
                @buttonClick=${()=>this.handleSwitchWallet(e,n.address,o)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:n.address,isRecentConnection:t,namespace:o})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;let{title:t}=this.getChainLabelInfo(e);return i.html`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="paragraph-500" color="fg-200">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){let{title:t,description:o}=this.getChainLabelInfo(e);return i.html`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="s"
          class="empty-box"
        >
          <wui-icon-box
            size="lg"
            icon="wallet"
            background="gray"
            iconColor="fg-200"
            backgroundColor="glass-002"
          ></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="3xs">
            <wui-text color="fg-100" variant="paragraph-500" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="fg-200" variant="tiny-500" data-testid="empty-state-description"
              >${o}</wui-text
            >
          </wui-flex>

          <wui-button
            variant="neutral"
            size="md"
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
          >
            <wui-icon color="inherit" slot="iconLeft" name="plus"></wui-icon>
            ${t}
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){let t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=n.ChainController.getAccountData(t)?.caipAddress,this.profileName=n.ChainController.getAccountData(t)?.profileName,this.chainListener=n.ChainController.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,i){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,await G.ConnectionController.switchConnection({connection:e,address:t,namespace:i,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?X.SnackController.showSuccess("Wallet switched"):e&&X.SnackController.showSuccess("Account switched")}})}catch(e){X.SnackController.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){let{connection:t,address:i,isRecentConnection:o,namespace:r}=e;o?(g.StorageUtil.deleteAddressFromConnection({connectorId:t.connectorId,address:i,namespace:r}),G.ConnectionController.syncStorageConnections(),X.SnackController.showSuccess("Wallet deleted")):this.handleDisconnect(r,{id:t.connectorId})}async handleDisconnect(e,{id:t}){try{await G.ConnectionController.disconnect({id:t,namespace:e}),X.SnackController.showSuccess("Wallet disconnected")}catch{X.SnackController.showError("Failed to disconnect wallet")}}handleCopyAddress(e){u.CoreHelperUtil.copyToClopboard(e),X.SnackController.showSuccess("Address copied")}handleMore(){m.RouterController.push("AccountSettings")}handleExternalLink(e){let t=this.caipNetwork?.blockExplorers?.default.url;t&&u.CoreHelperUtil.openHref(`${t}/address/${e}`,"_blank")}handleAddConnection(e){a.ConnectorController.setFilterByNamespace(e),m.RouterController.push("Connect")}getChainLabelInfo(e){return eb[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){if(!this.namespace)return!1;let t=this.user?.accounts?.find(e=>"smartAccount"===e.type);return!!t&&!!e&&el.HelpersUtil.isLowerCaseMatch(t.address,e)}getPlainAddress(){return this.caipAddress?u.CoreHelperUtil.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){let t=this.activeConnectorIds[e],{connections:i}=Y.ConnectionControllerUtil.getConnectionsData(e),[o]=i.filter(e=>el.HelpersUtil.isLowerCaseMatch(e.connectorId,t));if(!t)return i;let n=e===r.ConstantsUtil.CHAIN.BITCOIN,{address:a}=this.caipAddress?K.ParseUtil.parseCaipAddress(this.caipAddress):{},l=[...a?[a]:[]];return n&&o&&(l=o.accounts.map(e=>e.address)||[]),Y.ConnectionControllerUtil.excludeConnectorAddressFromConnections({connectorId:t,addresses:l,connections:i})}hasAnyConnections(e){let t=this.getActiveConnections(e),{recentConnections:i}=Y.ConnectionControllerUtil.getConnectionsData(e);return!!this.caipAddress||t.length>0||i.length>0}isAccountLoading(e,t){return el.HelpersUtil.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&el.HelpersUtil.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){let{address:t,connections:i,connectorId:o,namespace:n}=e,[a]=i.filter(e=>el.HelpersUtil.isLowerCaseMatch(e.connectorId,o));if(n===r.ConstantsUtil.CHAIN.BITCOIN&&a?.accounts.every(e=>"string"==typeof e.type))return this.getBitcoinProfileContent(a.accounts,t);let l=es.getAuthData({connectorId:o,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral",...l.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){let i=e.length>1,o=this.getPlainAddress();return e.map(e=>{let r=el.HelpersUtil.isLowerCaseMatch(e.address,o),n="PAYMENT";return"ordinal"===e.type&&(n="ORDINALS"),{address:e.address,tagLabel:el.HelpersUtil.isLowerCaseMatch(e.address,t)?"Active":void 0,tagVariant:el.HelpersUtil.isLowerCaseMatch(e.address,t)?"success":void 0,enableButton:!0,...i?{label:n,alignItems:"flex-end",buttonType:r?"disconnect":"switch",buttonLabel:r?"Disconnect":"Switch",buttonVariant:r?"neutral":"accent"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral"}}})}removeScrollListener(){let e=this.shadowRoot?.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return!!this.remoteFeatures?.multiWallet}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",J.MathUtil.interpolate([0,50],em,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",J.MathUtil.interpolate([0,50],em,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){let{connections:e}=Y.ConnectionControllerUtil.getConnectionsData(this.namespace);0===e.length&&m.RouterController.reset("ProfileWallets")}this.requestUpdate()}};eC.styles=ec,ed([(0,o.state)()],eC.prototype,"currentTab",void 0),ed([(0,o.state)()],eC.prototype,"namespace",void 0),ed([(0,o.state)()],eC.prototype,"namespaces",void 0),ed([(0,o.state)()],eC.prototype,"caipAddress",void 0),ed([(0,o.state)()],eC.prototype,"profileName",void 0),ed([(0,o.state)()],eC.prototype,"activeConnectorIds",void 0),ed([(0,o.state)()],eC.prototype,"lastSelectedAddress",void 0),ed([(0,o.state)()],eC.prototype,"lastSelectedConnectorId",void 0),ed([(0,o.state)()],eC.prototype,"isSwitching",void 0),ed([(0,o.state)()],eC.prototype,"caipNetwork",void 0),ed([(0,o.state)()],eC.prototype,"user",void 0),ed([(0,o.state)()],eC.prototype,"remoteFeatures",void 0),ed([(0,o.state)()],eC.prototype,"tabWidth",void 0),eC=ed([(0,l.customElement)("w3m-profile-wallets-view")],eC),e.s(["W3mProfileWalletsView",()=>eC],843918);var ey=t;e.i(783601);var ev=e.i(229199),ex=t,ek=t;e.i(560589);var eE=e.i(49976);let e$=k.css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var eS=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eA=class extends ek.LitElement{constructor(){super(...arguments),this.inputElementRef=(0,eE.createRef)(),this.checked=void 0}render(){return i.html`
      <label>
        <input
          ${(0,eE.ref)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,ev.ifDefined)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};eA.styles=[I.resetStyles,I.elementStyles,I.colorStyles,e$],eS([(0,T.property)({type:Boolean})],eA.prototype,"checked",void 0),eA=eS([(0,l.customElement)("wui-switch")],eA);let eR=k.css`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var eO=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eN=class extends ex.LitElement{constructor(){super(...arguments),this.checked=void 0}render(){return i.html`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,ev.ifDefined)(this.checked)}></wui-switch>
      </button>
    `}};eN.styles=[I.resetStyles,I.elementStyles,eR],eO([(0,T.property)({type:Boolean})],eN.prototype,"checked",void 0),eN=eO([(0,l.customElement)("wui-certified-switch")],eN);var eT=t,eI=t;let eU=k.css`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var eD=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eP=class extends eI.LitElement{constructor(){super(...arguments),this.icon="copy"}render(){return i.html`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};eP.styles=[I.resetStyles,I.elementStyles,eU],eD([(0,T.property)()],eP.prototype,"icon",void 0),eP=eD([(0,l.customElement)("wui-input-element")],eP),e.i(557035);let eL=k.css`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,eW=class extends eT.LitElement{constructor(){super(...arguments),this.inputComponentRef=(0,eE.createRef)()}render(){return i.html`
      <wui-input-text
        ${(0,eE.ref)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};eW.styles=[I.resetStyles,eL],eW=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.customElement)("wui-search-bar")],eW);var ej=t,e_=e.i(701676),eB=t,eH=e.i(636931);e.i(918426);let ez=k.css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var eM=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eF=class extends eB.LitElement{constructor(){super(...arguments),this.type="wallet"}render(){return i.html`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?i.html` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${eH.networkSvgMd}`:i.html`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};eF.styles=[I.resetStyles,I.elementStyles,ez],eM([(0,T.property)()],eF.prototype,"type",void 0),eF=eM([(0,l.customElement)("wui-card-select-loader")],eF);var eV=t;let eK=k.css`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var eq=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eG=class extends eV.LitElement{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Z.UiHelperUtil.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Z.UiHelperUtil.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Z.UiHelperUtil.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Z.UiHelperUtil.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Z.UiHelperUtil.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Z.UiHelperUtil.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Z.UiHelperUtil.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Z.UiHelperUtil.getSpacingStyles(this.margin,3)};
    `,i.html`<slot></slot>`}};eG.styles=[I.resetStyles,eK],eq([(0,T.property)()],eG.prototype,"gridTemplateRows",void 0),eq([(0,T.property)()],eG.prototype,"gridTemplateColumns",void 0),eq([(0,T.property)()],eG.prototype,"justifyItems",void 0),eq([(0,T.property)()],eG.prototype,"alignItems",void 0),eq([(0,T.property)()],eG.prototype,"justifyContent",void 0),eq([(0,T.property)()],eG.prototype,"alignContent",void 0),eq([(0,T.property)()],eG.prototype,"columnGap",void 0),eq([(0,T.property)()],eG.prototype,"rowGap",void 0),eq([(0,T.property)()],eG.prototype,"gap",void 0),eq([(0,T.property)()],eG.prototype,"padding",void 0),eq([(0,T.property)()],eG.prototype,"margin",void 0),eG=eq([(0,l.customElement)("wui-grid")],eG);var eY=e.i(271298),eX=t;e.i(963199),e.i(523066);let eJ=k.css`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var eQ=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eZ=class extends eX.LitElement{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return i.html`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,ev.ifDefined)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?i.html`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?i.html`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,ev.ifDefined)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return i.html`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){!this.wallet||(this.imageSrc=q.AssetUtil.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await q.AssetUtil.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};eZ.styles=eJ,eQ([(0,o.state)()],eZ.prototype,"visible",void 0),eQ([(0,o.state)()],eZ.prototype,"imageSrc",void 0),eQ([(0,o.state)()],eZ.prototype,"imageLoading",void 0),eQ([(0,T.property)()],eZ.prototype,"wallet",void 0),eZ=eQ([(0,l.customElement)("w3m-all-wallets-list-item")],eZ);let e0=k.css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var e3=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e1="local-paginator",e5=class extends ej.LitElement{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!e_.ApiController.state.wallets.length,this.wallets=e_.ApiController.state.wallets,this.recommended=e_.ApiController.state.recommended,this.featured=e_.ApiController.state.featured,this.filteredWallets=e_.ApiController.state.filteredWallets,this.unsubscribe.push(e_.ApiController.subscribeKey("wallets",e=>this.wallets=e),e_.ApiController.subscribeKey("recommended",e=>this.recommended=e),e_.ApiController.subscribeKey("featured",e=>this.featured=e),e_.ApiController.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return i.html`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(await e_.ApiController.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>i.html`
        <wui-card-select-loader type="wallet" id=${(0,ev.ifDefined)(t)}></wui-card-select-loader>
      `)}getWallets(){let e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);let t=u.CoreHelperUtil.uniqueBy(e,"id"),i=eY.WalletUtil.markWalletsAsInstalled(t);return eY.WalletUtil.markWalletsWithDisplayIndex(i)}walletsTemplate(){return this.getWallets().map(e=>i.html`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:i,count:o}=e_.ApiController.state,r=window.innerWidth<352?3:4,n=e.length+t.length,a=Math.ceil(n/r)*r-n+r;return(a-=e.length?i.length%r:0,0===o&&i.length>0)?null:0===o||[...i,...e,...t].length<o?this.shimmerTemplate(a,e1):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${e1}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:i}=e_.ApiController.state;i.length<t&&e_.ApiController.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){a.ConnectorController.selectWalletConnector(e)}};e5.styles=e0,e3([(0,o.state)()],e5.prototype,"loading",void 0),e3([(0,o.state)()],e5.prototype,"wallets",void 0),e3([(0,o.state)()],e5.prototype,"recommended",void 0),e3([(0,o.state)()],e5.prototype,"featured",void 0),e3([(0,o.state)()],e5.prototype,"filteredWallets",void 0),e5=e3([(0,l.customElement)("w3m-all-wallets-list")],e5);var e2=t;e.i(730818);let e4=k.css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var e6=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e7=class extends e2.LitElement{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?i.html`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await e_.ApiController.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=e_.ApiController.state,t=eY.WalletUtil.markWalletsAsInstalled(e);return e.length?i.html`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(e=>i.html`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:i.html`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){a.ConnectorController.selectWalletConnector(e)}};e7.styles=e4,e6([(0,o.state)()],e7.prototype,"loading",void 0),e6([(0,T.property)()],e7.prototype,"query",void 0),e6([(0,T.property)()],e7.prototype,"badge",void 0),e7=e6([(0,l.customElement)("w3m-all-wallets-search")],e7);var e8=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e9=class extends ey.LitElement{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=u.CoreHelperUtil.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return i.html`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?i.html`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,ev.ifDefined)(this.badge)}
          ></w3m-all-wallets-search>`:i.html`<w3m-all-wallets-list badge=${(0,ev.ifDefined)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if("certified"===this.badge){this.badge=void 0;return}this.badge="certified",X.SnackController.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return u.CoreHelperUtil.isMobile()?i.html`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){m.RouterController.push("ConnectingWalletConnect")}};e8([(0,o.state)()],e9.prototype,"search",void 0),e8([(0,o.state)()],e9.prototype,"badge",void 0),e9=e8([(0,l.customElement)("w3m-all-wallets-view")],e9),e.s(["W3mAllWalletsView",()=>e9],633800);var te=t,tt=e.i(960301),ti=t;let to=k.css`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var tr=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tn=class extends ti.LitElement{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return i.html`
      <button ?disabled=${this.disabled} tabindex=${(0,ev.ifDefined)(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};tn.styles=[I.resetStyles,I.elementStyles,to],tr([(0,T.property)()],tn.prototype,"text",void 0),tr([(0,T.property)({type:Boolean})],tn.prototype,"disabled",void 0),tr([(0,T.property)()],tn.prototype,"tabIdx",void 0),tn=tr([(0,l.customElement)("wui-list-button")],tn);var ta=e.i(96773),tl=t;e.i(362910),e.i(389004);let ts=k.css`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var tc=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let td=class extends tl.LitElement{constructor(){super(),this.unsubscribe=[],this.formRef=(0,eE.createRef)(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=w.OptionsController.state.remoteFeatures,this.unsubscribe.push(w.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){let e=G.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.AUTH);return i.html`
      <form ${(0,eE.ref)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?i.html`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?i.html`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?i.html`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!r.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===n.ChainController.state.activeChain)){let e=n.ChainController.getFirstCaipNetworkSupportsAuthConnector();if(e)return void m.RouterController.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=a.ConnectorController.getAuthConnector();if(!t)throw Error("w3m-email-login-widget: Auth connector not found");let{action:i}=await t.provider.connectEmail({email:this.email});if(p.EventsController.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i)p.EventsController.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),m.RouterController.push("EmailVerifyOtp",{email:this.email});else if("VERIFY_DEVICE"===i)m.RouterController.push("EmailVerifyDevice",{email:this.email});else if("CONNECT"===i){let e=this.remoteFeatures?.multiWallet;await G.ConnectionController.connectExternal(t,n.ChainController.state.activeChain),e?(m.RouterController.replace("ProfileWallets"),X.SnackController.showSuccess("New Wallet Added")):m.RouterController.replace("Account")}}catch(t){let e=u.CoreHelperUtil.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":X.SnackController.showError(t)}finally{this.loading=!1}}onFocusEvent(){p.EventsController.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};td.styles=ts,tc([(0,T.property)()],td.prototype,"tabIdx",void 0),tc([(0,o.state)()],td.prototype,"email",void 0),tc([(0,o.state)()],td.prototype,"loading",void 0),tc([(0,o.state)()],td.prototype,"error",void 0),tc([(0,o.state)()],td.prototype,"remoteFeatures",void 0),td=tc([(0,l.customElement)("w3m-email-login-widget")],td),e.i(991163),e.i(594628);var tu=t,tp=e.i(637842),th=e.i(66031);e.i(375657);var tw=t;e.i(729489);let tm=k.css`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var tg=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tf=class extends tw.LitElement{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return i.html`
      <button ?disabled=${this.disabled} tabindex=${(0,ev.ifDefined)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};tf.styles=[I.resetStyles,I.elementStyles,tm],tg([(0,T.property)()],tf.prototype,"logo",void 0),tg([(0,T.property)({type:Boolean})],tf.prototype,"disabled",void 0),tg([(0,T.property)()],tf.prototype,"tabIdx",void 0),tf=tg([(0,l.customElement)("wui-logo-select")],tf);var tb=e.i(446511);let tC=k.css`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ty=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tv=class extends tu.LitElement{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.remoteFeatures=w.OptionsController.state.remoteFeatures,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isPwaLoading=!1,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),w.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){let e="explore"===this.walletGuide,t=this.remoteFeatures?.socials;return!t&&e?(t=d.ConstantsUtil.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?i.html` <wui-flex gap="xs">
        ${e.slice(0,2).map(e=>i.html`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:i.html` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${(0,ev.ifDefined)(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-social>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials,t="explore"===this.walletGuide;return(this.authConnector&&e&&0!==e.length||!t||(e=d.ConstantsUtil.DEFAULT_SOCIALS),!e||e.length<=2)?null:e&&e.length>6?i.html`<wui-flex gap="xs">
        ${e.slice(1,5).map(e=>i.html`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?i.html`<wui-flex gap="xs">
      ${e.slice(1,e.length).map(e=>i.html`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){m.RouterController.push("ConnectSocials")}async onSocialClick(e){if(!r.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===n.ChainController.state.activeChain)){let e=n.ChainController.getFirstCaipNetworkSupportsAuthConnector();if(e)return void m.RouterController.push("SwitchNetwork",{network:e})}e&&await (0,th.executeSocialLogin)(e)}async handlePwaFrameLoad(){if(u.CoreHelperUtil.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof tb.W3mFrameProvider&&await this.authConnector.provider.init()}catch(e){tp.AlertController.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return G.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.AUTH)}};tv.styles=tC,ty([(0,T.property)()],tv.prototype,"walletGuide",void 0),ty([(0,T.property)()],tv.prototype,"tabIdx",void 0),ty([(0,o.state)()],tv.prototype,"connectors",void 0),ty([(0,o.state)()],tv.prototype,"remoteFeatures",void 0),ty([(0,o.state)()],tv.prototype,"authConnector",void 0),ty([(0,o.state)()],tv.prototype,"isPwaLoading",void 0),tv=ty([(0,l.customElement)("w3m-social-login-widget")],tv);var tx=t;e.i(107213);let tk=k.css`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var tE=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let t$=class extends tx.LitElement{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?i.html`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:i.html`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){m.RouterController.push("Create")}};t$.styles=tk,tE([(0,T.property)()],t$.prototype,"tabIdx",void 0),tE([(0,T.property)()],t$.prototype,"walletGuide",void 0),t$=tE([(0,l.customElement)("w3m-wallet-guide")],t$);var tS=t,tA=t,tR=t,tO=t;let tN=k.css`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
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

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var tT=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tI=class extends tO.LitElement{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return i.html`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>i.html`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,ev.ifDefined)(t)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(4-this.walletImages.length)].map(()=>i.html` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};tI.styles=[I.resetStyles,tN],tT([(0,T.property)({type:Array})],tI.prototype,"walletImages",void 0),tI=tT([(0,l.customElement)("wui-all-wallets-image")],tI);let tU=k.css`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var tD=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tP=class extends tR.LitElement{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return i.html`
      <button ?disabled=${this.disabled} tabindex=${(0,ev.ifDefined)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?i.html` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?i.html` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?i.html`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:i.html`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?i.html`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?i.html`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?i.html`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};tP.styles=[I.resetStyles,I.elementStyles,tU],tD([(0,T.property)({type:Array})],tP.prototype,"walletImages",void 0),tD([(0,T.property)()],tP.prototype,"imageSrc",void 0),tD([(0,T.property)()],tP.prototype,"name",void 0),tD([(0,T.property)()],tP.prototype,"tagLabel",void 0),tD([(0,T.property)()],tP.prototype,"tagVariant",void 0),tD([(0,T.property)()],tP.prototype,"icon",void 0),tD([(0,T.property)()],tP.prototype,"walletIcon",void 0),tD([(0,T.property)()],tP.prototype,"tabIdx",void 0),tD([(0,T.property)({type:Boolean})],tP.prototype,"installed",void 0),tD([(0,T.property)({type:Boolean})],tP.prototype,"disabled",void 0),tD([(0,T.property)({type:Boolean})],tP.prototype,"showAllWallets",void 0),tD([(0,T.property)({type:Boolean})],tP.prototype,"loading",void 0),tD([(0,T.property)({type:String})],tP.prototype,"loadingSpinnerColor",void 0),tP=tD([(0,l.customElement)("wui-list-wallet")],tP);var tL=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tW=class extends tA.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.count=e_.ApiController.state.count,this.filteredCount=e_.ApiController.state.filteredWallets.length,this.isFetchingRecommendedWallets=e_.ApiController.state.isFetchingRecommendedWallets,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),e_.ApiController.subscribeKey("count",e=>this.count=e),e_.ApiController.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),e_.ApiController.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=w.OptionsController.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!u.CoreHelperUtil.isMobile())return null;let o=e_.ApiController.state.featured.length,n=this.count+o,a=n<10?n:10*Math.floor(n/10),l=this.filteredCount>0?this.filteredCount:a,s=`${l}`;this.filteredCount>0?s=`${this.filteredCount}`:l<n&&(s=`${l}+`);let c=G.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return i.html`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
        ?disabled=${c}
      ></wui-list-wallet>
    `}onAllWallets(){p.EventsController.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),m.RouterController.push("AllWallets")}};tL([(0,T.property)()],tW.prototype,"tabIdx",void 0),tL([(0,o.state)()],tW.prototype,"connectors",void 0),tL([(0,o.state)()],tW.prototype,"count",void 0),tL([(0,o.state)()],tW.prototype,"filteredCount",void 0),tL([(0,o.state)()],tW.prototype,"isFetchingRecommendedWallets",void 0),tW=tL([(0,l.customElement)("w3m-all-wallets-widget")],tW),e.s([],358177);var tj=t,t_=t,tB=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tH=class extends t_.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.connections=G.ConnectionController.state.connections,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),G.ConnectionController.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?i.html`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(C.ConnectorUtil.showConnector).map(e=>{let t=(this.connections.get(e.chain)??[]).some(t=>el.HelpersUtil.isLowerCaseMatch(t.connectorId,e.id));return i.html`
            <wui-list-wallet
              imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant=${t?"shade":"success"}
              tagLabel=${t?"connected":"installed"}
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
              tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?u.CoreHelperUtil.isMobile()?m.RouterController.push("AllWallets"):m.RouterController.push("ConnectingWalletConnect"):m.RouterController.push("ConnectingExternal",{connector:e})}};tB([(0,T.property)()],tH.prototype,"tabIdx",void 0),tB([(0,o.state)()],tH.prototype,"connectors",void 0),tB([(0,o.state)()],tH.prototype,"connections",void 0),tH=tB([(0,l.customElement)("w3m-connect-announced-widget")],tH);var tz=t,tM=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tF=class extends tz.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e)),u.CoreHelperUtil.isTelegram()&&u.CoreHelperUtil.isIos()&&(this.loading=!G.ConnectionController.state.wcUri,this.unsubscribe.push(G.ConnectionController.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{customWallets:e}=w.OptionsController.state;if(!e?.length)return this.style.cssText="display: none",null;let t=this.filterOutDuplicateWallets(e),o=G.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return i.html`<wui-flex flexDirection="column" gap="xs">
      ${t.map(e=>i.html`
          <wui-list-wallet
            imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${o}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){let t=g.StorageUtil.getRecentWallets(),i=this.connectors.map(e=>e.info?.rdns).filter(Boolean),o=t.map(e=>e.rdns).filter(Boolean),r=i.concat(o);if(r.includes("io.metamask.mobile")&&u.CoreHelperUtil.isMobile()){let e=r.indexOf("io.metamask.mobile");r[e]="io.metamask"}return e.filter(e=>!r.includes(String(e?.rdns)))}onConnectWallet(e){this.loading||m.RouterController.push("ConnectingWalletConnect",{wallet:e})}};tM([(0,T.property)()],tF.prototype,"tabIdx",void 0),tM([(0,o.state)()],tF.prototype,"connectors",void 0),tM([(0,o.state)()],tF.prototype,"loading",void 0),tF=tM([(0,l.customElement)("w3m-connect-custom-widget")],tF);var tV=t,tK=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tq=class extends tV.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"EXTERNAL"===e.type).filter(C.ConnectorUtil.showConnector).filter(e=>e.id!==r.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK);if(!e?.length)return this.style.cssText="display: none",null;let t=G.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return i.html`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>i.html`
            <wui-list-wallet
              imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){m.RouterController.push("ConnectingExternal",{connector:e})}};tK([(0,T.property)()],tq.prototype,"tabIdx",void 0),tK([(0,o.state)()],tq.prototype,"connectors",void 0),tq=tK([(0,l.customElement)("w3m-connect-external-widget")],tq);var tG=t,tY=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tX=class extends tG.LitElement{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;let e=G.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return i.html`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>i.html`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
              ?disabled=${e}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){a.ConnectorController.selectWalletConnector(e)}};tY([(0,T.property)()],tX.prototype,"tabIdx",void 0),tY([(0,T.property)()],tX.prototype,"wallets",void 0),tX=tY([(0,l.customElement)("w3m-connect-featured-widget")],tX);var tJ=t,tQ=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tZ=class extends tJ.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=G.ConnectionController.state.connections,this.unsubscribe.push(G.ConnectionController.subscribeKey("connections",e=>this.connections=e))}render(){let e=this.connectors.filter(C.ConnectorUtil.showConnector);return 0===e.length?(this.style.cssText="display: none",null):i.html`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>{let t=(this.connections.get(e.chain)??[]).some(t=>el.HelpersUtil.isLowerCaseMatch(t.connectorId,e.id));return i.html`
            <wui-list-wallet
              imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant=${t?"shade":"success"}
              tagLabel=${t?"connected":"installed"}
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){a.ConnectorController.setActiveConnector(e),m.RouterController.push("ConnectingExternal",{connector:e})}};tQ([(0,T.property)()],tZ.prototype,"tabIdx",void 0),tQ([(0,T.property)()],tZ.prototype,"connectors",void 0),tQ([(0,o.state)()],tZ.prototype,"connections",void 0),tZ=tQ([(0,l.customElement)("w3m-connect-injected-widget")],tZ);var t0=t,t3=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let t1=class extends t0.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.filter(e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name);return e?.length?i.html`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>i.html`
            <wui-list-wallet
              imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){a.ConnectorController.setActiveConnector(e),m.RouterController.push("ConnectingMultiChain")}};t3([(0,T.property)()],t1.prototype,"tabIdx",void 0),t3([(0,o.state)()],t1.prototype,"connectors",void 0),t1=t3([(0,l.customElement)("w3m-connect-multi-chain-widget")],t1);var t5=t,t2=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let t4=class extends t5.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.loading=!1,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e)),u.CoreHelperUtil.isTelegram()&&u.CoreHelperUtil.isIos()&&(this.loading=!G.ConnectionController.state.wcUri,this.unsubscribe.push(G.ConnectionController.subscribeKey("wcUri",e=>this.loading=!e)))}render(){let e=g.StorageUtil.getRecentWallets().filter(e=>!eY.WalletUtil.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));if(!e.length)return this.style.cssText="display: none",null;let t=G.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return i.html`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(e=>i.html`
            <wui-list-wallet
              imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||a.ConnectorController.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){let t=n.ChainController.state.activeChain;return!t||!e.chains||e.chains.some(e=>t===e.split(":")[0])}};t2([(0,T.property)()],t4.prototype,"tabIdx",void 0),t2([(0,o.state)()],t4.prototype,"connectors",void 0),t2([(0,o.state)()],t4.prototype,"loading",void 0),t4=t2([(0,l.customElement)("w3m-connect-recent-widget")],t4);var t6=t,t7=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let t8=class extends t6.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,u.CoreHelperUtil.isTelegram()&&u.CoreHelperUtil.isIos()&&(this.loading=!G.ConnectionController.state.wcUri,this.unsubscribe.push(G.ConnectionController.subscribeKey("wcUri",e=>this.loading=!e)))}render(){let{connectors:e}=a.ConnectorController.state,{customWallets:t,featuredWalletIds:o}=w.OptionsController.state,n=g.StorageUtil.getRecentWallets(),l=e.find(e=>"walletConnect"===e.id),s=e.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type).filter(e=>"Browser Wallet"!==e.name);if(!l)return null;if(o||t||!this.wallets.length)return this.style.cssText="display: none",null;let c=Math.max(0,2-(s.length+n.length)),d=eY.WalletUtil.filterOutDuplicateWallets(this.wallets).slice(0,c);if(!d.length)return this.style.cssText="display: none",null;let u=G.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return i.html`
      <wui-flex flexDirection="column" gap="xs">
        ${d.map(e=>i.html`
            <wui-list-wallet
              imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${u}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;let t=a.ConnectorController.getConnector({id:e.id,rdns:e.rdns});t?m.RouterController.push("ConnectingExternal",{connector:t}):m.RouterController.push("ConnectingWalletConnect",{wallet:e})}};t7([(0,T.property)()],t8.prototype,"tabIdx",void 0),t7([(0,T.property)()],t8.prototype,"wallets",void 0),t7([(0,o.state)()],t8.prototype,"loading",void 0),t8=t7([(0,l.customElement)("w3m-connect-recommended-widget")],t8);var t9=t,ie=e.i(129415),it=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ii=class extends t9.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.connectorImages=ie.AssetController.state.connectorImages,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),ie.AssetController.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(u.CoreHelperUtil.isMobile())return this.style.cssText="display: none",null;let e=this.connectors.find(e=>"walletConnect"===e.id);if(!e)return this.style.cssText="display: none",null;let t=e.imageUrl||this.connectorImages[e?.imageId??""],o=G.ConnectionController.hasAnyConnection(r.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT);return i.html`
      <wui-list-wallet
        imageSrc=${(0,ev.ifDefined)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        ?disabled=${o}
      >
      </wui-list-wallet>
    `}onConnector(e){a.ConnectorController.setActiveConnector(e),m.RouterController.push("ConnectingWalletConnect")}};it([(0,T.property)()],ii.prototype,"tabIdx",void 0),it([(0,o.state)()],ii.prototype,"connectors",void 0),it([(0,o.state)()],ii.prototype,"connectorImages",void 0),ii=it([(0,l.customElement)("w3m-connect-walletconnect-widget")],ii);let io=k.css`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ir=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ia=class extends tj.LitElement{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=a.ConnectorController.state.connectors,this.recommended=e_.ApiController.state.recommended,this.featured=e_.ApiController.state.featured,this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>this.connectors=e),e_.ApiController.subscribeKey("recommended",e=>this.recommended=e),e_.ApiController.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){let{custom:e,recent:t,announced:o,injected:r,multiChain:n,recommended:a,featured:l,external:s}=C.ConnectorUtil.getConnectorsByType(this.connectors,this.recommended,this.featured);return C.ConnectorUtil.getConnectorTypeOrder({custom:e,recent:t,announced:o,injected:r,multiChain:n,recommended:a,featured:l,external:s}).map(e=>{switch(e){case"injected":return i.html`
            ${n.length?i.html`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${o.length?i.html`<w3m-connect-announced-widget
                  tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${r.length?i.html`<w3m-connect-injected-widget
                  .connectors=${r}
                  tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return i.html`<w3m-connect-walletconnect-widget
            tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return i.html`<w3m-connect-recent-widget
            tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return i.html`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return i.html`<w3m-connect-custom-widget
            tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return i.html`<w3m-connect-external-widget
            tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return i.html`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${(0,ev.ifDefined)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}})}};ia.styles=io,ir([(0,T.property)()],ia.prototype,"tabIdx",void 0),ir([(0,o.state)()],ia.prototype,"connectors",void 0),ir([(0,o.state)()],ia.prototype,"recommended",void 0),ir([(0,o.state)()],ia.prototype,"featured",void 0),ia=ir([(0,l.customElement)("w3m-connector-list")],ia),e.s([],50791);var il=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let is=class extends tS.LitElement{constructor(){super(...arguments),this.tabIdx=void 0}render(){return i.html`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,ev.ifDefined)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,ev.ifDefined)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};il([(0,T.property)()],is.prototype,"tabIdx",void 0),is=il([(0,l.customElement)("w3m-wallet-login-list")],is),e.s([],789314);let ic=k.css`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var id=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iu=class extends te.LitElement{constructor(){super(),this.unsubscribe=[],this.connectors=a.ConnectorController.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.features=w.OptionsController.state.features,this.remoteFeatures=w.OptionsController.state.remoteFeatures,this.enableWallets=w.OptionsController.state.enableWallets,this.noAdapters=n.ChainController.state.noAdapters,this.walletGuide="get-started",this.checked=tt.OptionsStateController.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!n.ChainController.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!n.ChainController.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(a.ConnectorController.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),w.OptionsController.subscribeKey("features",e=>{this.features=e}),w.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),w.OptionsController.subscribeKey("enableWallets",e=>this.enableWallets=e),n.ChainController.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),tt.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();let e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=w.OptionsController.state,o=w.OptionsController.state.features?.legalCheckbox,r=!!(e||t)&&!!o&&"get-started"===this.walletGuide&&!this.checked,n=w.OptionsController.state.enableWalletGuide,a=this.enableWallets,l=this.isSocialEnabled||this.authConnector,s=r?-1:void 0;return i.html`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${(0,V.classMap)({connect:!0,disabled:r})}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${l&&a&&n&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(s)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(r)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===ta.ConstantsUtil.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return r.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){let t=eY.WalletUtil.getConnectOrderMethod(this.features,this.connectors);return i.html`${t.map((t,o)=>{switch(t){case"email":return i.html`${this.emailTemplate(e)} ${this.separatorTemplate(o,"email")}`;case"social":return i.html`${this.socialListTemplate(e)}
          ${this.separatorTemplate(o,"social")}`;case"wallet":return i.html`${this.walletListTemplate(e)}
          ${this.separatorTemplate(o,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){let t=eY.WalletUtil.getConnectOrderMethod(this.features,this.connectors)[e+1];return t?this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,t){let o=this.checkIsThereNextMethod(e),r="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&o&&!r?i.html`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":return this.isAuthEnabled&&this.isEmailEnabled&&"social"!==o&&o?i.html`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null;case"social":return this.isAuthEnabled&&this.isSocialEnabled&&"email"!==o&&o?i.html`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?i.html`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,ev.ifDefined)(e)}
    ></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?i.html`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,ev.ifDefined)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){let t=this.enableWallets,o=this.features?.emailShowWallets===!1,r=this.features?.collapseWallets;return t?(u.CoreHelperUtil.isTelegram()&&(u.CoreHelperUtil.isSafari()||u.CoreHelperUtil.isIos())&&G.ConnectionController.connectWalletConnect().catch(e=>({})),"explore"===this.walletGuide)?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&(o||r)?i.html`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,ev.ifDefined)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:i.html`<w3m-wallet-login-list tabIdx=${(0,ev.ifDefined)(e)}></w3m-wallet-login-list>`:null}guideTemplate(e=!1){return w.OptionsController.state.enableWalletGuide&&(this.authConnector||this.isSocialEnabled)?i.html`
      ${"explore"===this.walletGuide&&!n.ChainController.state.noAdapters?i.html`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`:null}
      <w3m-wallet-guide
        class=${(0,V.classMap)({guide:!0,disabled:e})}
        tabIdx=${(0,ev.ifDefined)(e?-1:void 0)}
        walletGuide=${this.walletGuide}
      ></w3m-wallet-guide>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:i.html`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(".connect");e&&(e.scrollHeight>470?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 40px,
          black calc(100% - 40px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",J.MathUtil.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",J.MathUtil.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0")))}onContinueWalletClick(){m.RouterController.push("ConnectWallets")}};iu.styles=ic,id([(0,o.state)()],iu.prototype,"connectors",void 0),id([(0,o.state)()],iu.prototype,"authConnector",void 0),id([(0,o.state)()],iu.prototype,"features",void 0),id([(0,o.state)()],iu.prototype,"remoteFeatures",void 0),id([(0,o.state)()],iu.prototype,"enableWallets",void 0),id([(0,o.state)()],iu.prototype,"noAdapters",void 0),id([(0,T.property)()],iu.prototype,"walletGuide",void 0),id([(0,o.state)()],iu.prototype,"checked",void 0),id([(0,o.state)()],iu.prototype,"isEmailEnabled",void 0),id([(0,o.state)()],iu.prototype,"isSocialEnabled",void 0),id([(0,o.state)()],iu.prototype,"isAuthEnabled",void 0),iu=id([(0,l.customElement)("w3m-connect-view")],iu),e.s(["W3mConnectView",()=>iu],602459);var ip=t,ih=e.i(505667);e.i(827547);var iw=t,im=t;e.i(647008);let ig=k.css`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ib=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iC=class extends im.LitElement{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return i.html`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};iC.styles=[I.resetStyles,I.elementStyles,ig],ib([(0,T.property)({type:Boolean})],iC.prototype,"disabled",void 0),ib([(0,T.property)()],iC.prototype,"label",void 0),ib([(0,T.property)()],iC.prototype,"buttonLabel",void 0),iC=ib([(0,l.customElement)("wui-cta-button")],iC);let iy=k.css`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var iv=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ix=class extends iw.LitElement{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:o,chrome_store:r,homepage:n}=this.wallet,a=u.CoreHelperUtil.isMobile(),l=u.CoreHelperUtil.isIos(),s=u.CoreHelperUtil.isAndroid(),c=[t,o,n,r].filter(Boolean).length>1,d=Z.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!a?i.html`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>m.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?i.html`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&l?i.html`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&s?i.html`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&u.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};ix.styles=[iy],iv([(0,T.property)({type:Object})],ix.prototype,"wallet",void 0),ix=iv([(0,l.customElement)("w3m-mobile-download-links")],ix),e.s([],639190);let ik=k.css`
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

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
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
`;var iE=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class i$ extends ip.LitElement{constructor(){super(),this.wallet=m.RouterController.state.data?.wallet,this.connector=m.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=q.AssetUtil.getWalletImage(this.wallet)??q.AssetUtil.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=G.ConnectionController.state.wcUri,this.error=G.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(G.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),G.ConnectionController.subscribeKey("wcError",e=>this.error=e)),(u.CoreHelperUtil.isTelegram()||u.CoreHelperUtil.isSafari())&&u.CoreHelperUtil.isIos()&&G.ConnectionController.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),G.ConnectionController.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),i.html`
      <wui-flex
        data-error=${(0,ev.ifDefined)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,ev.ifDefined)(this.imageSrc)}></wui-wallet-image>

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
          <wui-text
            align="center"
            variant="paragraph-500"
            color=${this.error?"error-100":"fg-100"}
          >
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?i.html`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?i.html`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){G.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=ih.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.html`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(u.CoreHelperUtil.copyToClopboard(this.uri),X.SnackController.showSuccess("Link copied"))}catch{X.SnackController.showError("Failed to copy")}}}i$.styles=ik,iE([(0,o.state)()],i$.prototype,"isRetrying",void 0),iE([(0,o.state)()],i$.prototype,"uri",void 0),iE([(0,o.state)()],i$.prototype,"error",void 0),iE([(0,o.state)()],i$.prototype,"ready",void 0),iE([(0,o.state)()],i$.prototype,"showRetry",void 0),iE([(0,o.state)()],i$.prototype,"label",void 0),iE([(0,o.state)()],i$.prototype,"secondaryBtnLabel",void 0),iE([(0,o.state)()],i$.prototype,"secondaryLabel",void 0),iE([(0,o.state)()],i$.prototype,"isLoading",void 0),iE([(0,T.property)({type:Boolean})],i$.prototype,"isMobile",void 0),iE([(0,T.property)()],i$.prototype,"onRetry",void 0),e.s(["W3mConnectingWidget",()=>i$],271925);let iS=class extends i${constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=G.ConnectionController.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=w.OptionsController.state.remoteFeatures,this.currentActiveConnectorId=a.ConnectorController.state.activeConnectorIds[this.connector?.chain],!this.connector)throw Error("w3m-connecting-view: No connector provided");const e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),p.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:this.wallet?.display_index}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(a.ConnectorController.subscribeKey("activeConnectorIds",t=>{let i=t[e],o=this.remoteFeatures?.multiWallet;i!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&o?(m.RouterController.replace("ProfileWallets"),X.SnackController.showSuccess("New Wallet Added")):h.ModalController.close())}),G.ConnectionController.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;this.connector.id===r.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK&&this.error||(await G.ConnectionController.connectExternal(this.connector,this.connector.chain),p.EventsController.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown",caipNetworkId:n.ChainController.getActiveCaipNetwork()?.caipNetworkId}}))}}catch(e){p.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){let t=e.get(this.connector.chain)??[],i=this.remoteFeatures?.multiWallet;if(0===t.length)m.RouterController.replace("Connect");else{let e=Y.ConnectionControllerUtil.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),o=Y.ConnectionControllerUtil.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);0===o.length?this.hasMultipleConnections&&i?(m.RouterController.replace("ProfileWallets"),X.SnackController.showSuccess("Wallet deleted")):h.ModalController.close():!e.every(e=>o.some(t=>el.HelpersUtil.isLowerCaseMatch(e.address,t.address)))&&i&&m.RouterController.replace("ProfileWallets")}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(t=>el.HelpersUtil.isLowerCaseMatch(t.connectorId,e.id))}};iS=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.customElement)("w3m-connecting-external-view")],iS),e.s(["W3mConnectingExternalView",()=>iS],27464);var iA=t;let iR=k.css`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var iO=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let iN=class extends iA.LitElement{constructor(){super(),this.unsubscribe=[],this.activeConnector=a.ConnectorController.state.activeConnector,this.unsubscribe.push(a.ConnectorController.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(e=>e.name?i.html`
            <wui-list-wallet
              imageSrc=${(0,ev.ifDefined)(q.AssetUtil.getChainImage(e.chain))}
              name=${r.ConstantsUtil.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(e){let t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain);t?"walletConnect"===t.id?u.CoreHelperUtil.isMobile()?m.RouterController.push("AllWallets"):m.RouterController.push("ConnectingWalletConnect"):m.RouterController.push("ConnectingExternal",{connector:t}):X.SnackController.showError("Failed to find connector")}};iN.styles=iR,iO([(0,o.state)()],iN.prototype,"activeConnector",void 0),iN=iO([(0,l.customElement)("w3m-connecting-multi-chain-view")],iN),e.s(["W3mConnectingMultiChainView",()=>iN],647751)},796096,133926,704922,823441,448942,201907,465765,621171,990826,484086,165828,406134,418974,151787,347919,e=>{"use strict";e.i(821379),e.i(62076),e.i(31183),e.i(124606),e.i(329258),e.i(422312),e.i(493530),e.i(843918),e.i(633800),e.i(602459),e.i(27464),e.i(647751),e.i(195126);var t=e.i(453404),i=e.i(841066);e.i(775353);var o=e.i(666033),r=e.i(435446),n=e.i(385904),a=e.i(816478),l=e.i(974915),s=e.i(688138),c=e.i(444173),d=e.i(629107),u=e.i(990716);e.i(551831);var p=e.i(370128),h=e.i(503514),w=t,m=e.i(88083);e.i(20909),e.i(139096);var g=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let f=class extends w.LitElement{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return i.html`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>{if("browser"===e)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===e)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===e)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===e)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===e)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};g([(0,m.property)({type:Array})],f.prototype,"platforms",void 0),g([(0,m.property)()],f.prototype,"onSelectPlatfrom",void 0),f=g([(0,p.customElement)("w3m-connecting-header")],f);var b=e.i(613585),C=e.i(271925);let y=class extends C.W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),l.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=b.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(t)await n.ConnectionController.connectExternal(t,t.chain);else throw Error("w3m-connecting-wc-browser: No connector found");s.ModalController.close(),l.EventsController.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",caipNetworkId:r.ChainController.getActiveCaipNetwork()?.caipNetworkId}})}catch(e){l.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};y=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-connecting-wc-browser")],y);var v=C;let x=class extends v.W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),l.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=a.CoreHelperUtil.formatNativeUrl(e,this.uri);n.ConnectionController.setWcLinking({name:t,href:o}),n.ConnectionController.setRecentWallet(this.wallet),a.CoreHelperUtil.openHref(i,"_blank")}catch{this.error=!0}}};x=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-connecting-wc-desktop")],x);var k=e.i(978469),E=C,$=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let S=class extends E.W3mConnectingWidget{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=c.OptionsController.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:r,href:l}=a.CoreHelperUtil.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=r,this.target=a.CoreHelperUtil.isIframe()?"_top":"_self",n.ConnectionController.setWcLinking({name:i,href:l}),n.ConnectionController.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?a.CoreHelperUtil.openHref(this.redirectUniversalLink,this.target):a.CoreHelperUtil.openHref(this.redirectDeeplink,this.target)}catch(e){l.EventsController.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=k.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(n.ConnectionController.subscribeKey("wcUri",()=>{this.onHandleURI()})),l.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){n.ConnectionController.setWcError(!1),this.onConnect?.()}};$([(0,o.state)()],S.prototype,"redirectDeeplink",void 0),$([(0,o.state)()],S.prototype,"redirectUniversalLink",void 0),$([(0,o.state)()],S.prototype,"target",void 0),$([(0,o.state)()],S.prototype,"preferUniversalLinks",void 0),$([(0,o.state)()],S.prototype,"isLoading",void 0),S=$([(0,p.customElement)("w3m-connecting-wc-mobile")],S),e.i(783601);var A=e.i(229199),R=e.i(487845),O=e.i(505667);e.i(645168),e.i(811060),e.i(756052),e.i(963199),e.i(686999),e.i(377862);var N=C;e.i(639190);var T=e.i(527065);let I=T.css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,U=class extends N.W3mConnectingWidget{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),l.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return n.ConnectionController.setWcLinking(void 0),n.ConnectionController.setRecentWallet(this.wallet),i.html` <wui-qr-code
      size=${e}
      theme=${O.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,A.ifDefined)(R.AssetUtil.getWalletImage(this.wallet))}
      color=${(0,A.ifDefined)(O.ThemeController.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,A.ifDefined)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return i.html`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};U.styles=I,U=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-connecting-wc-qrcode")],U);var D=t;e.i(523066);let P=class extends D.LitElement{constructor(){if(super(),this.wallet=d.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");l.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,A.ifDefined)(R.AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};P=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-connecting-wc-unsupported")],P);var L=C,W=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let j=class extends L.W3mConnectingWidget{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=k.ConstantsUtil.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(n.ConnectionController.subscribeKey("wcUri",()=>{this.updateLoadingState()})),l.EventsController.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=a.CoreHelperUtil.formatUniversalUrl(e,this.uri);n.ConnectionController.setWcLinking({name:t,href:o}),n.ConnectionController.setRecentWallet(this.wallet),a.CoreHelperUtil.openHref(i,"_blank")}catch{this.error=!0}}};W([(0,o.state)()],j.prototype,"isLoading",void 0),j=W([(0,p.customElement)("w3m-connecting-wc-web")],j);var _=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let B=class extends t.LitElement{constructor(){super(),this.wallet=d.RouterController.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!c.OptionsController.state.siwx,this.remoteFeatures=c.OptionsController.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(c.OptionsController.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?i.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!c.OptionsController.state.manualWCControl||e))try{let{wcPairingExpiry:t,status:i}=n.ConnectionController.state;if(e||c.OptionsController.state.enableEmbedded||a.CoreHelperUtil.isPairingExpired(t)||"connecting"===i){let e=n.ConnectionController.getConnections(r.ChainController.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await n.ConnectionController.connectWalletConnect(),this.isSiwxEnabled||(i&&t?(d.RouterController.replace("ProfileWallets"),u.SnackController.showSuccess("New Wallet Added")):s.ModalController.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!c.OptionsController.state.enableNetworkSwitch&&r.ChainController.state.activeChain){r.ChainController.setActiveCaipNetwork(h.CaipNetworksUtil.getUnsupportedNetwork(`${r.ChainController.state.activeChain}:${r.ChainController.state.activeCaipNetwork?.id}`)),r.ChainController.showUnsupportedChainUI();return}l.EventsController.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),n.ConnectionController.setWcError(!0),u.SnackController.showError(e.message??"Connection error"),n.ConnectionController.resetWcConnection(),d.RouterController.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:l}=this.wallet,s=o?.map(({injected_id:e})=>e).filter(Boolean),d=[...l?[l]:s??[]],u=!c.OptionsController.state.isUniversalProvider&&d.length,p=n.ConnectionController.checkInstalled(d),h=u&&p,w=t&&!a.CoreHelperUtil.isMobile();h&&!r.ChainController.state.noAdapters&&this.platforms.push("browser"),e&&this.platforms.push(a.CoreHelperUtil.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),w&&this.platforms.push("desktop"),h||!u||r.ChainController.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return i.html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return i.html`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return i.html`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return i.html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return i.html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return i.html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?i.html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};_([(0,o.state)()],B.prototype,"platform",void 0),_([(0,o.state)()],B.prototype,"platforms",void 0),_([(0,o.state)()],B.prototype,"isSiwxEnabled",void 0),_([(0,o.state)()],B.prototype,"remoteFeatures",void 0),B=_([(0,p.customElement)("w3m-connecting-wc-view")],B),e.s(["W3mConnectingWcView",()=>B],133926);var H=t,z=e.i(701676),M=e.i(479702);e.i(358177),e.i(50791);var F=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let V=class extends H.LitElement{constructor(){super(...arguments),this.isMobile=a.CoreHelperUtil.isMobile()}render(){if(this.isMobile){let{featured:e,recommended:t}=z.ApiController.state,{customWallets:o}=c.OptionsController.state,r=M.StorageUtil.getRecentWallets(),n=e.length||t.length||o?.length||r.length;return i.html`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${n?i.html`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return i.html`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};F([(0,o.state)()],V.prototype,"isMobile",void 0),V=F([(0,p.customElement)("w3m-connecting-wc-basic-view")],V),e.s(["W3mConnectingWcBasicView",()=>V],704922);var K=t,q=e.i(932984),G=e.i(643429);e.i(986138),e.i(503345);var Y=e.i(463677);let X=T.css`
  .continue-button-container {
    width: 100%;
  }
`;var J=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let Q=class extends K.LitElement{constructor(){super(...arguments),this.loading=!1}render(){return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{a.CoreHelperUtil.openHref(q.NavigationUtil.URLS.FAQ,"_blank")}}
        >
          Learn more about names
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
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return i.html`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){d.RouterController.push("RegisterAccountName"),l.EventsController.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:(0,G.getPreferredAccountType)(r.ChainController.state.activeChain)===Y.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Q.styles=X,J([(0,o.state)()],Q.prototype,"loading",void 0),Q=J([(0,p.customElement)("w3m-choose-account-name-view")],Q),e.s(["W3mChooseAccountNameView",()=>Q],823441);var Z=t;e.i(686118);let ee=class extends Z.LitElement{constructor(){super(...arguments),this.wallet=d.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return i.html`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?i.html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?i.html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?i.html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?i.html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&a.CoreHelperUtil.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&a.CoreHelperUtil.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&a.CoreHelperUtil.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&a.CoreHelperUtil.openHref(this.wallet.homepage,"_blank")}};ee=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-downloads-view")],ee),e.s(["W3mDownloadsView",()=>ee],448942);var et=t;let ei=class extends et.LitElement{render(){return i.html`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{a.CoreHelperUtil.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=z.ApiController.state,{customWallets:o}=c.OptionsController.state;return[...t,...o??[],...e].slice(0,4).map(e=>i.html`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,A.ifDefined)(R.AssetUtil.getWalletImage(e))}
          @click=${()=>{a.CoreHelperUtil.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};ei=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-get-wallet-view")],ei),e.s(["W3mGetWalletView",()=>ei],201907);var eo=t,er=t;e.i(93677);var en=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ea=class extends er.LitElement{constructor(){super(...arguments),this.data=[]}render(){return i.html`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>i.html`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>i.html`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};en([(0,m.property)({type:Array})],ea.prototype,"data",void 0),ea=en([(0,p.customElement)("w3m-help-widget")],ea);let el=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],es=class extends eo.LitElement{render(){return i.html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${el}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){l.EventsController.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),d.RouterController.push("GetWallet")}};es=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-what-is-a-wallet-view")],es),e.s(["W3mWhatIsAWalletView",()=>es],465765);var ec=t,ed=e.i(960301);e.i(991163),e.i(594628),e.i(789314);let eu=T.css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var ep=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eh=class extends ec.LitElement{constructor(){super(),this.unsubscribe=[],this.checked=ed.OptionsStateController.state.isLegalCheckboxChecked,this.unsubscribe.push(ed.OptionsStateController.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=c.OptionsController.state,o=c.OptionsController.state.features?.legalCheckbox,r=!!(e||t)&&!!o,n=r&&!this.checked;return i.html`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,A.ifDefined)(n?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,A.ifDefined)(n?-1:void 0)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};eh.styles=eu,ep([(0,o.state)()],eh.prototype,"checked",void 0),eh=ep([(0,p.customElement)("w3m-connect-wallets-view")],eh),e.s(["W3mConnectWalletsView",()=>eh],621171);var ew=t,em=e.i(689252),eg=t,ef=e.i(240403);let eb=T.css`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,eC=class extends eg.LitElement{render(){return i.html`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eC.styles=[ef.resetStyles,eb],eC=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("wui-loading-hexagon")],eC),e.i(726197);let ey=T.css`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ev=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ex=class extends ew.LitElement{constructor(){super(),this.network=d.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return i.html`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,A.ifDefined)(R.AssetUtil.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:i.html`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=b.ConnectorController.getConnectorId(r.ChainController.state.activeChain);return b.ConnectorController.getAuthConnector()&&e===em.ConstantsUtil.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){let e=b.ConnectorController.getConnectorId(r.ChainController.state.activeChain);return b.ConnectorController.getAuthConnector()&&e===em.ConstantsUtil.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,r.ChainController.state.activeChain!==this.network?.chainNamespace&&r.ChainController.setIsSwitchingNamespace(!0),this.network&&await r.ChainController.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};ex.styles=ey,ev([(0,o.state)()],ex.prototype,"showRetry",void 0),ev([(0,o.state)()],ex.prototype,"error",void 0),ex=ev([(0,p.customElement)("w3m-network-switch-view")],ex),e.s(["W3mNetworkSwitchView",()=>ex],990826);var ek=t,eE=e.i(504019),e$=e.i(129415),eS=e.i(458550);e.i(603827);var eA=t;e.i(3731),e.i(27352),e.i(187604),e.i(636336);let eR=T.css`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var eO=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eN=class extends eA.LitElement{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return i.html`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?i.html`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?i.html`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:i.html`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};eN.styles=[ef.resetStyles,ef.elementStyles,eR],eO([(0,m.property)()],eN.prototype,"imageSrc",void 0),eO([(0,m.property)()],eN.prototype,"name",void 0),eO([(0,m.property)({type:Boolean})],eN.prototype,"disabled",void 0),eO([(0,m.property)({type:Boolean})],eN.prototype,"selected",void 0),eO([(0,m.property)({type:Boolean})],eN.prototype,"transparent",void 0),eN=eO([(0,p.customElement)("wui-list-network")],eN),e.i(383654);let eT=T.css`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var eI=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eU=class extends ek.LitElement{constructor(){super(),this.unsubscribe=[],this.network=r.ChainController.state.activeCaipNetwork,this.requestedCaipNetworks=r.ChainController.getCaipNetworks(),this.search="",this.onDebouncedSearch=a.CoreHelperUtil.debounce(e=>{this.search=e},100),this.unsubscribe.push(e$.AssetController.subscribeNetworkImages(()=>this.requestUpdate()),r.ChainController.subscribeKey("activeCaipNetwork",e=>this.network=e),r.ChainController.subscribe(()=>{this.requestedCaipNetworks=r.ChainController.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return i.html`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){l.EventsController.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),d.RouterController.push("WhatIsANetwork")}networksTemplate(){let e=r.ChainController.getAllApprovedCaipNetworkIds(),t=a.CoreHelperUtil.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=t,this.filteredNetworks?.map(e=>i.html`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,A.ifDefined)(R.AssetUtil.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(e){let t=e.chainNamespace,i=eE.AccountController.getCaipAddress(t),o=r.ChainController.getAllApprovedCaipNetworkIds(),n=!1!==r.ChainController.getNetworkProp("supportsAllNetworks",t),a=b.ConnectorController.getConnectorId(t),l=b.ConnectorController.getAuthConnector(),s=a===em.ConstantsUtil.CONNECTOR_ID.AUTH&&l;return!!i&&!n&&!s&&!o?.includes(e.caipNetworkId)}onSwitchNetwork(e){eS.NetworkUtil.onSwitchNetwork({network:e})}};eU.styles=eT,eI([(0,o.state)()],eU.prototype,"network",void 0),eI([(0,o.state)()],eU.prototype,"requestedCaipNetworks",void 0),eI([(0,o.state)()],eU.prototype,"filteredNetworks",void 0),eI([(0,o.state)()],eU.prototype,"search",void 0),eU=eI([(0,p.customElement)("w3m-networks-view")],eU),e.s(["W3mNetworksView",()=>eU],484086);var eD=t;let eP=T.css`
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

  .capitalize {
    text-transform: capitalize;
  }
`;var eL=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eW={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0},ej=class extends eD.LitElement{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=d.RouterController.state.data?.switchToChain,this.caipNetwork=d.RouterController.state.data?.network,this.activeChain=r.ChainController.state.activeChain}firstUpdated(){this.unsubscribe.push(r.ChainController.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.switchToChain?em.ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;let t=em.ConstantsUtil.CHAIN_NAME_MAP[this.switchToChain];return i.html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${(0,A.ifDefined)(eW[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(r.ChainController.setIsSwitchingNamespace(!0),b.ConnectorController.setFilterByNamespace(this.switchToChain),this.caipNetwork?await r.ChainController.switchActiveNetwork(this.caipNetwork):r.ChainController.setActiveNamespace(this.switchToChain),d.RouterController.reset("Connect"))}};ej.styles=eP,eL([(0,m.property)()],ej.prototype,"activeChain",void 0),ej=eL([(0,p.customElement)("w3m-switch-active-chain-view")],ej),e.s(["W3mSwitchActiveChainView",()=>ej],165828);var e_=t;let eB=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eH=class extends e_.LitElement{render(){return i.html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eB}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{a.CoreHelperUtil.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eH=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-what-is-a-network-view")],eH),e.s(["W3mWhatIsANetworkView",()=>eH],406134);var ez=t;let eM=T.css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var eF=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eV=class extends ez.LitElement{constructor(){super(),this.swapUnsupportedChain=d.RouterController.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=c.OptionsController.state.remoteFeatures,this.unsubscribe.push(e$.AssetController.subscribeNetworkImages(()=>this.requestUpdate()),c.OptionsController.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?i.html`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:i.html`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=r.ChainController.getAllRequestedCaipNetworks(),t=r.ChainController.getAllApprovedCaipNetworkIds(),o=a.CoreHelperUtil.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?o.filter(e=>k.ConstantsUtil.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):o).map(e=>i.html`
        <wui-list-network
          imageSrc=${(0,A.ifDefined)(R.AssetUtil.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;let e=r.ChainController.state.activeChain,t=n.ConnectionController.getConnections(e).length>0,i=e&&b.ConnectorController.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await n.ConnectionController.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(d.RouterController.push("ProfileWallets"),u.SnackController.showSuccess("Wallet deleted"))}catch{l.EventsController.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),u.SnackController.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){let t=eE.AccountController.state.caipAddress,i=r.ChainController.getAllApprovedCaipNetworkIds(),o=(r.ChainController.getNetworkProp("supportsAllNetworks",e.chainNamespace),d.RouterController.state.data);t?i?.includes(e.caipNetworkId)?await r.ChainController.switchActiveNetwork(e):d.RouterController.push("SwitchNetwork",{...o,network:e}):t||(r.ChainController.setActiveCaipNetwork(e),d.RouterController.push("Connect"))}};eV.styles=eM,eF([(0,o.state)()],eV.prototype,"disconnecting",void 0),eF([(0,o.state)()],eV.prototype,"remoteFeatures",void 0),eV=eF([(0,p.customElement)("w3m-unsupported-chain-view")],eV),e.s(["W3mUnsupportedChainView",()=>eV],418974);var eK=t,eq=t;e.i(210096);let eG=T.css`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var eY=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eX=class extends eq.LitElement{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return i.html`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};eX.styles=[ef.resetStyles,ef.elementStyles,eG],eY([(0,m.property)()],eX.prototype,"icon",void 0),eY([(0,m.property)()],eX.prototype,"text",void 0),eX=eY([(0,p.customElement)("wui-banner")],eX);let eJ=T.css`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,eQ=class extends eK.LitElement{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.html` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=r.ChainController.getAllRequestedCaipNetworks(),t=r.ChainController.getAllApprovedCaipNetworkIds(),o=r.ChainController.state.activeCaipNetwork,n=r.ChainController.checkIfSmartAccountEnabled(),l=a.CoreHelperUtil.sortRequestedNetworks(t,e);if(n&&(0,G.getPreferredAccountType)(o?.chainNamespace)===Y.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;l=[o]}return l.filter(e=>e.chainNamespace===o?.chainNamespace).map(e=>i.html`
        <wui-list-network
          imageSrc=${(0,A.ifDefined)(R.AssetUtil.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};eQ.styles=eJ,eQ=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-wallet-compatible-networks-view")],eQ),e.s(["W3mWalletCompatibleNetworksView",()=>eQ],151787);var eZ=t,e0=e.i(988002),e3=t,e1=t;e.i(435828);let e5=T.css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var e2=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e4=class extends e1.LitElement{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,i.html`${this.templateVisual()}`}templateVisual(){return this.imageSrc?i.html`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:i.html`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};e4.styles=[ef.resetStyles,e5],e2([(0,m.property)()],e4.prototype,"imageSrc",void 0),e2([(0,m.property)()],e4.prototype,"alt",void 0),e2([(0,m.property)({type:Boolean})],e4.prototype,"borderRadiusFull",void 0),e4=e2([(0,p.customElement)("wui-visual-thumbnail")],e4);let e6=T.css`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,e7=class extends e3.LitElement{constructor(){super(...arguments),this.dappImageUrl=c.OptionsController.state.metadata?.icons,this.walletImageUrl=eE.AccountController.state.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return i.html`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};e7.styles=e6,e7=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,p.customElement)("w3m-siwx-sign-message-thumbnails")],e7);var e8=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e9=class extends eZ.LitElement{constructor(){super(...arguments),this.dappName=c.OptionsController.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return i.html`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await e0.SIWXUtil.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required")){u.SnackController.showError({message:"Something went wrong. We need to verify your account again."}),d.RouterController.replace("DataCapture");return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await e0.SIWXUtil.cancelSignMessage().finally(()=>this.isCancelling=!1)}};e8([(0,o.state)()],e9.prototype,"isCancelling",void 0),e8([(0,o.state)()],e9.prototype,"isSigning",void 0),e9=e8([(0,p.customElement)("w3m-siwx-sign-message-view")],e9),e.s(["W3mSIWXSignMessageView",()=>e9],347919),e.s([],796096)}]);