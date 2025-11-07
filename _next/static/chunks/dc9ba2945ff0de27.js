(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,689252,e=>{"use strict";var t=e.i(56530);let r={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos",sui:"Sui",stacks:"Stacks"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVER_ERROR:500,TOO_MANY_REQUESTS:429,SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",REMOTE_FEATURES_ALERTS:{MULTI_WALLET_NOT_ENABLED:{DEFAULT:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."},CONNECTIONS_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."},CONNECTION_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."}}}};e.s(["ConstantsUtil",0,r])},978469,e=>{"use strict";var t=e.i(56530),r=e.i(689252);let a=(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",o={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:a,SECURE_SITE_DASHBOARD:`${a}/dashboard`,SECURE_SITE_FAVICON:`${a}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:[r.ConstantsUtil.CHAIN.EVM,r.ConstantsUtil.CHAIN.SOLANA],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:[r.ConstantsUtil.CHAIN.EVM],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:[r.ConstantsUtil.CHAIN.EVM,r.ConstantsUtil.CHAIN.SOLANA],ACTIVITY_ENABLED_CHAIN_NAMESPACES:[r.ConstantsUtil.CHAIN.EVM],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x",sui:"0x",stacks:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:[r.ConstantsUtil.CHAIN.EVM,r.ConstantsUtil.CHAIN.SOLANA],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0,multiWallet:!1,emailCapture:!1},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1,emailCapture:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"},SIWX_DEFAULTS:{signOutOnDisconnect:!0}};e.s(["ConstantsUtil",0,o,"MELD_PUBLIC_KEY",0,"WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU","ONRAMP_PROVIDERS",0,[{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}]])},568830,e=>{"use strict";function t(e){if(!e)throw Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}function r(){return"undefined"!=typeof window&&"undefined"!=typeof localStorage}e.s(["SafeLocalStorage",0,{setItem(e,t){r()&&void 0!==t&&localStorage.setItem(e,t)},getItem(e){if(r())return localStorage.getItem(e)||void 0},removeItem(e){r()&&localStorage.removeItem(e)},clear(){r()&&localStorage.clear()}},"SafeLocalStorageKeys",0,{WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections",DISCONNECTED_CONNECTOR_IDS:"@appkit/disconnected_connector_ids",HISTORY_TRANSACTIONS_CACHE:"@appkit/history_transactions_cache",TOKEN_PRICE_CACHE:"@appkit/token_price_cache",RECENT_EMAILS:"@appkit/recent_emails"},"getSafeConnectorIdKey",()=>t,"isSafe",()=>r])},816478,479702,e=>{"use strict";var t=e.i(689252),r=e.i(978469),a=e.i(568830);let o={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5,transactionsHistory:15e3,tokenPrice:15e3},isCacheExpired:(e,t)=>Date.now()-e>t,getActiveNetworkProps(){let e=o.getActiveNamespace(),t=o.getActiveCaipNetworkId(),r=t?t.split(":")[1]:void 0;return{namespace:e,caipNetworkId:t,chainId:r?isNaN(Number(r))?r:Number(r):void 0}},setWalletConnectDeepLink({name:e,href:t}){try{a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{a.SafeLocalStorage.removeItem(a.SafeLocalStorageKeys.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID,e),o.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{a.SafeLocalStorage.removeItem(a.SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{let t=(0,a.getSafeConnectorIdKey)(e);a.SafeLocalStorage.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{let t=o.getRecentWallets();t.find(t=>t.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.RECENT_WALLETS,JSON.stringify(t)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{let e=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(e,t){try{let r=(0,a.getSafeConnectorIdKey)(e);a.SafeLocalStorage.setItem(r,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{let t=(0,a.getSafeConnectorIdKey)(e);return a.SafeLocalStorage.getItem(t)}catch(t){console.info("Unable to get connected connector id in namespace",e)}},setConnectedSocialProvider(e){try{a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{a.SafeLocalStorage.removeItem(a.SafeLocalStorageKeys.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){let e=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.ACTIVE_CAIP_NETWORK_ID);return e?.split(":")?.[1]},setConnectionStatus(e){try{a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{let e=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.CONNECTED_NAMESPACES);if(!e?.length)return[];return e.split(",")}catch{return[]}},setConnectedNamespaces(e){try{let t=Array.from(new Set(e));a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{let t=o.getConnectedNamespaces();t.includes(e)||(t.push(e),o.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{let t=o.getConnectedNamespaces(),r=t.indexOf(e);r>-1&&(t.splice(r,1),o.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{a.SafeLocalStorage.removeItem(a.SafeLocalStorageKeys.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{let t=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{let t=o.getBalanceCache();a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{let t=o.getBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.portfolio))return t.balance;o.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{let t=o.getBalanceCache();t[e.caipAddress]=e,a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{let t=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{let t=o.getBalanceCache();a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{let t=o.getNativeBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.nativeBalance))return t;console.info("Discarding cache for address",e),o.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{let t=o.getNativeBalanceCache();t[e.caipAddress]=e,a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{let t=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{let t=o.getEnsCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.ens))return t.ens;o.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{let t=o.getEnsCache();t[e.address]=e,a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{let t=o.getEnsCache();a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{let t=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{let t=o.getIdentityCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.identity))return t.identity;o.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{let t=o.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{let t=o.getIdentityCache();a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},clearAddressCache(){try{a.SafeLocalStorage.removeItem(a.SafeLocalStorageKeys.PORTFOLIO_CACHE),a.SafeLocalStorage.removeItem(a.SafeLocalStorageKeys.NATIVE_BALANCE_CACHE),a.SafeLocalStorage.removeItem(a.SafeLocalStorageKeys.ENS_CACHE),a.SafeLocalStorage.removeItem(a.SafeLocalStorageKeys.IDENTITY_CACHE),a.SafeLocalStorage.removeItem(a.SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{let e=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.PREFERRED_ACCOUNT_TYPES);if(!e)return{};return JSON.parse(e)}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,r){try{let n=o.getConnections(),i=n[r]??[],s=new Map;for(let e of i)s.set(e.connectorId,{...e});for(let r of e){let e=s.get(r.connectorId),a=r.connectorId===t.ConstantsUtil.CONNECTOR_ID.AUTH;if(e&&!a){let t=new Set(e.accounts.map(e=>e.address.toLowerCase())),a=r.accounts.filter(e=>!t.has(e.address.toLowerCase()));e.accounts.push(...a)}else s.set(r.connectorId,{...r})}let c={...n,[r]:Array.from(s.values())};a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.CONNECTIONS,JSON.stringify(c))}catch(e){console.error("Unable to sync connections to storage",e)}},getConnections(){try{let e=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.CONNECTIONS);if(!e)return{};return JSON.parse(e)}catch(e){return console.error("Unable to get connections from storage",e),{}}},deleteAddressFromConnection({connectorId:e,address:t,namespace:r}){try{let n=o.getConnections(),i=n[r]??[],s=new Map(i.map(e=>[e.connectorId,e])),c=s.get(e);if(c){let r=c.accounts.filter(e=>e.address.toLowerCase()!==t.toLowerCase());0===r.length?s.delete(e):s.set(e,{...c,accounts:c.accounts.filter(e=>e.address.toLowerCase()!==t.toLowerCase())})}a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.CONNECTIONS,JSON.stringify({...n,[r]:Array.from(s.values())}))}catch{console.error(`Unable to remove address "${t}" from connector "${e}" in namespace "${r}"`)}},getDisconnectedConnectorIds(){try{let e=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS);if(!e)return{};return JSON.parse(e)}catch{console.info("Unable to get disconnected connector ids")}return{}},addDisconnectedConnectorId(e,t){try{let r=o.getDisconnectedConnectorIds(),n=r[t]??[];n.push(e),a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...r,[t]:Array.from(new Set(n))}))}catch{console.error(`Unable to set disconnected connector id "${e}" for namespace "${t}"`)}},removeDisconnectedConnectorId(e,t){try{let r=o.getDisconnectedConnectorIds(),n=r[t]??[];n=n.filter(t=>t.toLowerCase()!==e.toLowerCase()),a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.DISCONNECTED_CONNECTOR_IDS,JSON.stringify({...r,[t]:Array.from(new Set(n))}))}catch{console.error(`Unable to remove disconnected connector id "${e}" for namespace "${t}"`)}},isConnectorDisconnected(e,t){try{return(o.getDisconnectedConnectorIds()[t]??[]).some(t=>t.toLowerCase()===e.toLowerCase())}catch{console.info(`Unable to get disconnected connector id "${e}" for namespace "${t}"`)}return!1},getTransactionsCache(){try{let e=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get transactions cache")}return{}},getTransactionsCacheForAddress({address:e,chainId:t=""}){try{let r=o.getTransactionsCache(),a=r[e]?.[t];if(a&&!this.isCacheExpired(a.timestamp,this.cacheExpiry.transactionsHistory))return a.transactions;o.removeTransactionsCache({address:e,chainId:t})}catch{console.info("Unable to get transactions cache")}},updateTransactionsCache({address:e,chainId:t="",timestamp:r,transactions:n}){try{let i=o.getTransactionsCache();i[e]={...i[e],[t]:{timestamp:r,transactions:n}},a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE,JSON.stringify(i))}catch{console.info("Unable to update transactions cache",{address:e,chainId:t,timestamp:r,transactions:n})}},removeTransactionsCache({address:e,chainId:t}){try{let r=o.getTransactionsCache(),{[t]:n,...i}=r?.[e]||{};a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.HISTORY_TRANSACTIONS_CACHE,JSON.stringify({...r,[e]:i}))}catch{console.info("Unable to remove transactions cache",{address:e,chainId:t})}},getTokenPriceCache(){try{let e=a.SafeLocalStorage.getItem(a.SafeLocalStorageKeys.TOKEN_PRICE_CACHE);return e?JSON.parse(e):{}}catch{console.info("Unable to get token price cache")}return{}},getTokenPriceCacheForAddresses(e){try{let t=o.getTokenPriceCache()[e.join(",")];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.tokenPrice))return t.tokenPrice;o.removeTokenPriceCache(e)}catch{console.info("Unable to get token price cache for addresses",e)}},updateTokenPriceCache(e){try{let t=o.getTokenPriceCache();t[e.addresses.join(",")]={timestamp:e.timestamp,tokenPrice:e.tokenPrice},a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.TOKEN_PRICE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update token price cache",e)}},removeTokenPriceCache(e){try{let t=o.getTokenPriceCache();a.SafeLocalStorage.setItem(a.SafeLocalStorageKeys.TOKEN_PRICE_CACHE,JSON.stringify({...t,[e.join(",")]:void 0}))}catch{console.info("Unable to remove token price cache",e)}}};e.s(["StorageUtil",0,o],479702);let n={isMobile(){return!!this.isClient()&&!!(window?.matchMedia&&"function"==typeof window.matchMedia&&window.matchMedia("(pointer:coarse)")?.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},checkCaipNetwork:(e,t="")=>e?.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase()),isAndroid(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return n.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return!!this.isClient()&&(window?.navigator.userAgent.toLowerCase()).includes("safari")},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=r.ConstantsUtil.TEN_SEC_MS,isAllowedRetry:(e,t=r.ConstantsUtil.ONE_SEC_MS)=>Date.now()-e>=t,copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return window?.self!==window?.top}catch(e){return!1}},isSafeApp(){if(n.isClient()&&window.self!==window.top)try{let e=window?.location?.ancestorOrigins?.[0];if(e){let t=new URL(e),r=new URL("https://app.safe.global");return t.hostname===r.hostname}}catch{}return!1},getPairingExpiry:()=>Date.now()+r.ConstantsUtil.FOUR_MINUTES_MS,getNetworkId:e=>e?.split(":")[1],getPlainAddress:e=>e?.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...a)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...a)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t,r=null){if(n.isHttpUrl(e))return this.formatUniversalUrl(e,t);let a=e,o=r;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),a.endsWith("/")||(a=`${a}/`),o&&!o?.endsWith("/")&&(o=`${o}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));let i=encodeURIComponent(t);return{redirect:`${a}wc?uri=${i}`,redirectUniversalLink:o?`${o}wc?uri=${i}`:void 0,href:a}},formatUniversalUrl(e,t){if(!n.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let a=encodeURIComponent(t);return{redirect:`${r}wc?uri=${a}`,href:r}},getOpenTargetForPlatform(e){return"popupWindow"===e?e:this.isTelegram()?o.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,r){window?.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},returnOpenHref(e,t,r){return window?.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},isTelegram:()=>"undefined"!=typeof window&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto),isPWA(){if("undefined"==typeof window)return!1;let e=!!window?.matchMedia&&"function"==typeof window.matchMedia&&window.matchMedia("(display-mode: standalone)")?.matches,t=window?.navigator?.standalone;return!!(e||t)},preloadImage:async e=>Promise.race([new Promise((t,r)=>{let a=new Image;a.onload=t,a.onerror=r,a.crossOrigin="anonymous",a.src=e}),n.wait(2e3)]),formatBalance(e,t){let r="0.000";if("string"==typeof e){let t=Number(e);if(t){let e=Math.floor(1e3*t)/1e3;e&&(r=e.toString())}}return`${r}${t?` ${t}`:""}`},getApiUrl:()=>t.ConstantsUtil.W3M_API_URL,getBlockchainApiUrl:()=>t.ConstantsUtil.BLOCKCHAIN_API_RPC_URL,getAnalyticsUrl:()=>t.ConstantsUtil.PULSE_API_URL,getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),parseError:e=>"string"==typeof e?e:"string"==typeof e?.issues?.[0]?.message?e.issues[0].message:e instanceof Error?e.message:"Unknown error",sortRequestedNetworks(e,t=[]){let r={};return t&&e&&(e.forEach((e,t)=>{r[e]=t}),t.sort((e,t)=>{let a=r[e.id],o=r[t.id];return void 0!==a&&void 0!==o?a-o:void 0!==a?-1:1*(void 0!==o)})),t},calculateBalance(e){let t=0;for(let r of e)t+=r.value??0;return t},formatTokenBalance(e){let[t,r]=e.toFixed(2).split(".");return{dollars:t,pennies:r}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e)))return!0;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){let r=new Set;return e.filter(e=>{let a=e[t];return!r.has(a)&&(r.add(a),!0)})},generateSdkVersion(e,t,a){let o=0===e.length?r.ConstantsUtil.ADAPTER_TYPES.UNIVERSAL:e.map(e=>e.adapterType).join(",");return`${t}-${o}-${a}`},createAccount:(e,t,r,a,o)=>({namespace:e,address:t,type:r,publicKey:a,path:o}),isCaipAddress(e){if("string"!=typeof e)return!1;let r=e.split(":"),a=r[0];return 3===r.filter(Boolean).length&&a in t.ConstantsUtil.CHAIN_NAME_MAP},getAccount:e=>e?"string"==typeof e?{address:e,chainId:void 0}:{address:e.address,chainId:e.chainId}:{address:void 0,chainId:void 0},isMac(){let e=window?.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){let t=`--${encodeURIComponent(window?.location.href)}`,r="state=";if("auth.magic.link"===new URL(e).host){let a="provider_authorization_url=",o=e.substring(e.indexOf(a)+a.length),n=this.injectIntoUrl(decodeURIComponent(o),r,t);return e.replace(o,encodeURIComponent(n))}return this.injectIntoUrl(e,r,t)},injectIntoUrl(e,t,r){let a=e.indexOf(t);if(-1===a)throw Error(`${t} parameter not found in the URL: ${e}`);let o=e.indexOf("&",a),n=t.length,i=-1!==o?o:e.length;return e.substring(0,a+n)+(e.substring(a+n,i)+r)+e.substring(o)}};e.s(["CoreHelperUtil",0,n],816478)},614931,e=>{"use strict";function t(e,t){return"light"===t?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}e.s(["getW3mThemeVariables",()=>t])},287831,238055,e=>{"use strict";let t=Symbol(),r=Symbol(),a=Object.getPrototypeOf,o=new WeakMap,n=e=>e&&(o.has(e)?o.get(e):a(e)===Object.prototype||a(e)===Array.prototype),i=e=>"object"==typeof e&&null!==e,s=e=>e[r]||e,c=(e,o,i,l)=>{if(!n(e))return e;let d=l&&l.get(e);if(!d){let t=s(e);d=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,(e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(a(e),t)})(t)]:[t],null==l||l.set(e,d)}let[u,p]=d,C=i&&i.get(u);if(!C||!!p!==C[1].f){var g;let e,a,o,n;e={f:g=!!p},a=!1,o=(t,r)=>{if(!a){let a=e.a.get(u);if(a||(a={},e.a.set(u,a)),"w"===t)a.w=!0;else{let e=a[t];e||(e=new Set,a[t]=e),e.add(r)}}},n={get:(t,a)=>a===r?u:(o("k",a),c(Reflect.get(t,a),e.a,e.c,e.t)),has:(r,n)=>n===t?(a=!0,e.a.delete(u),!0):(o("h",n),Reflect.has(r,n)),getOwnPropertyDescriptor:(e,t)=>(o("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(o("w"),Reflect.ownKeys(e))},g&&(n.set=n.deleteProperty=()=>!1),(C=[n,e])[1].p=new Proxy(p||u,C[0]),i&&i.set(u,C)}return C[1].a=o,C[1].c=i,C[1].t=l,C[1].p},l=(e,t,r,a,o=Object.is)=>{if(o(e,t))return!1;if(!i(e)||!i(t))return!0;let n=r.get(s(e));if(!n)return!0;if(a){if(a.get(e)===t)return!1;a.set(e,t)}let c=null;for(let r of n.h||[])if(c=Reflect.has(e,r)!==Reflect.has(t,r))return c;if(!0===n.w){let r,a;if(r=Reflect.ownKeys(e),a=Reflect.ownKeys(t),c=r.length!==a.length||r.some((e,t)=>e!==a[t]))return c}else for(let r of n.o||[]){let a=!!Reflect.getOwnPropertyDescriptor(e,r);if(c=!!Reflect.getOwnPropertyDescriptor(t,r)!==a)return c}for(let i of n.k||[])if(c=l(e[i],t[i],r,a,o))return c;if(null===c)throw Error("invalid used");return c},d=e=>n(e)&&e[r]||null,u=(e,t=!0)=>{o.set(e,t)};e.s(["affectedToPathList",0,(e,t,r)=>{let a=[],o=new WeakSet,n=(e,c)=>{var l,d,u;if(o.has(e))return;i(e)&&o.add(e);let p=i(e)&&t.get(s(e));if(p){if(null==(l=p.h)||l.forEach(e=>{let t=`:has(${String(e)})`;a.push(c?[...c,t]:[t])}),!0===p.w){let e=":ownKeys";a.push(c?[...c,e]:[e])}else null==(d=p.o)||d.forEach(e=>{let t=`:hasOwn(${String(e)})`;a.push(c?[...c,t]:[t])});null==(u=p.k)||u.forEach(t=>{(!r||"value"in(Object.getOwnPropertyDescriptor(e,t)||{}))&&n(e[t],c?[...c,t]:[t])})}else c&&a.push(c)};return n(e),a},"createProxy",0,c,"getUntracked",0,d,"isChanged",0,l,"markToTrack",0,u],238055);let p={get url(){return`file://${e.P("node_modules/.pnpm/valtio@2.1.5_@types+react@18.3.21_react@19.2.0/node_modules/valtio/esm/vanilla.mjs")}`}},C=e=>"object"==typeof e&&null!==e,g=(e,t)=>{let r=h.get(e);if((null==r?void 0:r[0])===t)return r[1];let a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return u(a,!0),h.set(e,[t,a]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(a,t))return;let r=Reflect.get(e,t),{enumerable:o}=Reflect.getOwnPropertyDescriptor(e,t),n={value:r,enumerable:o,configurable:!0};if(m.has(r))u(r,!1);else if(w.has(r)){let[e,t]=w.get(r);n.value=g(e,t())}Object.defineProperty(a,t,n)}),Object.preventExtensions(a)},w=new WeakMap,m=new WeakSet,h=new WeakMap,f=[1,1],S=new WeakMap,E=Object.is;function A(e,t,r){let a,o=w.get(e);(p.env?p.env.MODE:void 0)==="production"||o||console.warn("Please use proxy object");let n=[],i=o[2],s=!1,c=i(e=>{(n.push(e),r)?t(n.splice(0)):a||(a=Promise.resolve().then(()=>{a=void 0,s&&t(n.splice(0))}))});return s=!0,()=>{s=!1,c()}}function b(e){let t=w.get(e);(p.env?p.env.MODE:void 0)==="production"||t||console.warn("Please use proxy object");let[r,a]=t;return g(r,a())}function v(e){return m.add(e),e}function y(){return{proxyStateMap:w,refSet:m,snapCache:h,versionHolder:f,proxyCache:S}}e.s(["proxy",()=>function e(t={}){let r,a,o;if(!C(t))throw Error("object required");let n=S.get(t);if(n)return n;let i=f[0],s=new Set,c=(e,t=++f[0])=>{i!==t&&(i=t,s.forEach(r=>r(e,t)))},l=f[1],u=e=>(t,r)=>{let a=[...t];a[1]=[e,...a[1]],c(a,r)},g=new Map,h=!0,A=new Proxy(t,(r=()=>h,a=(e,t)=>{let r=!m.has(t)&&w.get(t);if(r){if((p.env?p.env.MODE:void 0)!=="production"&&g.has(e))throw Error("prop listener already exists");if(s.size){let t=r[2](u(e));g.set(e,[r,t])}else g.set(e,[r])}},o=e=>{var t;let r=g.get(e);r&&(g.delete(e),null==(t=r[1])||t.call(r))},{deleteProperty(e,t){let r=Reflect.get(e,t);o(t);let a=Reflect.deleteProperty(e,t);return a&&c(["delete",[t],r]),a},set(t,n,i,s){let l,u=!r()&&Reflect.has(t,n),p=Reflect.get(t,n,s);if(u&&(E(p,i)||S.has(i)&&E(p,S.get(i))))return!0;o(n),C(i)&&(i=d(i)||i);let g=!w.has(i)&&C(l=i)&&!m.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer)&&!(l instanceof Promise)?e(i):i;return a(n,g),Reflect.set(t,n,g,s),c(["set",[n],i,p]),!0}}));S.set(t,A);let b=[t,(e=++f[1])=>(l===e||s.size||(l=e,g.forEach(([t])=>{let r=t[1](e);r>i&&(i=r)})),i),e=>(s.add(e),1===s.size&&g.forEach(([e,t],r)=>{if((p.env?p.env.MODE:void 0)!=="production"&&t)throw Error("remove already exists");let a=e[2](u(r));g.set(r,[e,a])}),()=>{s.delete(e),0===s.size&&g.forEach(([e,t],r)=>{t&&(t(),g.set(r,[e]))})})];return w.set(A,b),Reflect.ownKeys(t).forEach(e=>{let r=Object.getOwnPropertyDescriptor(t,e);"value"in r&&r.writable&&(A[e]=t[e])}),h=!1,A},"ref",()=>v,"snapshot",()=>b,"subscribe",()=>A,"unstable_getInternalStates",()=>y],287831)},179019,e=>{"use strict";var t=e.i(287831);function r(e,r,a,o){let n=e[r];return(0,t.subscribe)(e,()=>{let t=e[r];Object.is(n,t)||a(n=t)},o)}Symbol();let{proxyStateMap:a,snapCache:o}=(0,t.unstable_getInternalStates)();function n(e){let r=[],n=0,i=new Map,s=new WeakMap,c=e=>s.get(e)||i;if(e){if("function"!=typeof e[Symbol.iterator])throw TypeError("proxyMap:\n	initial state must be iterable\n		tip: structure should be [[key, value]]");for(let[t,a]of e)i.set(t,n),r[n++]=a}let l={data:r,index:n,epoch:0,get size(){return a.has(this)||(()=>{let e=o.get(l),t=null==e?void 0:e[1];if(t&&!s.has(t)){let e=new Map(i);s.set(t,e)}})(),c(this).size},get(e){let t=c(this).get(e);return void 0===t?void this.epoch:this.data[t]},has(e){let t=c(this);return this.epoch,t.has(e)},set(e,t){if(!a.has(this))throw Error("Cannot perform mutations on a snapshot");let r=i.get(e);return void 0===r?(i.set(e,this.index),this.data[this.index++]=t):this.data[r]=t,this.epoch++,this},delete(e){if(!a.has(this))throw Error("Cannot perform mutations on a snapshot");let t=i.get(e);return void 0!==t&&(delete this.data[t],i.delete(e),this.epoch++,!0)},clear(){if(!a.has(this))throw Error("Cannot perform mutations on a snapshot");this.data.length=0,this.index=0,this.epoch++,i.clear()},forEach(e){this.epoch,c(this).forEach((t,r)=>{e(this.data[t],r,this)})},*entries(){for(let[e,t]of(this.epoch,c(this)))yield[e,this.data[t]]},*keys(){for(let e of(this.epoch,c(this).keys()))yield e},*values(){for(let e of(this.epoch,c(this).values()))yield this.data[e]},[Symbol.iterator](){return this.entries()},get[Symbol.toStringTag](){return"Map"},toJSON(){return new Map(this.entries())}},d=(0,t.proxy)(l);return Object.defineProperties(d,{size:{enumerable:!1},index:{enumerable:!1},epoch:{enumerable:!1},data:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(d),d}let{proxyStateMap:i,snapCache:s}=(0,t.unstable_getInternalStates)();e.s(["proxyMap",()=>n,"subscribeKey",()=>r])},893468,e=>{"use strict";async function t(...e){let r=await fetch(...e);if(!r.ok)throw Error(`HTTP status code: ${r.status}`,{cause:r});return r}class r{constructor({baseUrl:e,clientId:t}){this.baseUrl=e,this.clientId=t}async get({headers:e,signal:r,cache:a,...o}){let n=this.createUrl(o);return(await t(n,{method:"GET",headers:e,signal:r,cache:a})).json()}async getBlob({headers:e,signal:r,...a}){let o=this.createUrl(a);return(await t(o,{method:"GET",headers:e,signal:r})).blob()}async post({body:e,headers:r,signal:a,...o}){let n=this.createUrl(o);return(await t(n,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0,signal:a})).json()}async put({body:e,headers:r,signal:a,...o}){let n=this.createUrl(o);return(await t(n,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0,signal:a})).json()}async delete({body:e,headers:r,signal:a,...o}){let n=this.createUrl(o);return(await t(n,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0,signal:a})).json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),this.clientId&&r.searchParams.append("clientId",this.clientId),r}}e.s(["FetchUtil",()=>r])},444173,e=>{"use strict";var t=e.i(287831),r=e.i(179019),a=e.i(978469),o=e.i(816478);let n={getFeatureValue(e,t){let r=t?.[e];return void 0===r?a.ConstantsUtil.DEFAULT_FEATURES[e]:r},filterSocialsByPlatform(e){if(!e||!e.length)return e;if(o.CoreHelperUtil.isTelegram()){if(o.CoreHelperUtil.isIos())return e.filter(e=>"google"!==e);if(o.CoreHelperUtil.isMac())return e.filter(e=>"x"!==e);if(o.CoreHelperUtil.isAndroid())return e.filter(e=>!["facebook","x"].includes(e))}return e}},i=(0,t.proxy)({features:a.ConstantsUtil.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:a.ConstantsUtil.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{}});e.s(["OptionsController",0,{state:i,subscribeKey:(e,t)=>(0,r.subscribeKey)(i,e,t),setOptions(e){Object.assign(i,e)},setRemoteFeatures(e){if(!e)return;let t={...i.remoteFeatures,...e};i.remoteFeatures=t,i.remoteFeatures?.socials&&(i.remoteFeatures.socials=n.filterSocialsByPlatform(i.remoteFeatures.socials)),i.features?.pay&&(i.remoteFeatures.email=!1,i.remoteFeatures.socials=!1)},setFeatures(e){if(!e)return;i.features||(i.features=a.ConstantsUtil.DEFAULT_FEATURES);let t={...i.features,...e};i.features=t,i.features?.pay&&i.remoteFeatures&&(i.remoteFeatures.email=!1,i.remoteFeatures.socials=!1)},setProjectId(e){i.projectId=e},setCustomRpcUrls(e){i.customRpcUrls=e},setAllWallets(e){i.allWallets=e},setIncludeWalletIds(e){i.includeWalletIds=e},setExcludeWalletIds(e){i.excludeWalletIds=e},setFeaturedWalletIds(e){i.featuredWalletIds=e},setTokens(e){i.tokens=e},setTermsConditionsUrl(e){i.termsConditionsUrl=e},setPrivacyPolicyUrl(e){i.privacyPolicyUrl=e},setCustomWallets(e){i.customWallets=e},setIsSiweEnabled(e){i.isSiweEnabled=e},setIsUniversalProvider(e){i.isUniversalProvider=e},setSdkVersion(e){i.sdkVersion=e},setMetadata(e){i.metadata=e},setDisableAppend(e){i.disableAppend=e},setEIP6963Enabled(e){i.enableEIP6963=e},setDebug(e){i.debug=e},setEnableWalletConnect(e){i.enableWalletConnect=e},setEnableWalletGuide(e){i.enableWalletGuide=e},setEnableAuthLogger(e){i.enableAuthLogger=e},setEnableWallets(e){i.enableWallets=e},setPreferUniversalLinks(e){i.experimental_preferUniversalLinks=e},setSIWX(e){if(e)for(let[t,r]of Object.entries(a.ConstantsUtil.SIWX_DEFAULTS))e[t]??=r;i.siwx=e},setConnectMethodsOrder(e){i.features={...i.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){i.features={...i.features,walletFeaturesOrder:e}},setSocialsOrder(e){i.remoteFeatures={...i.remoteFeatures,socials:e}},setCollapseWallets(e){i.features={...i.features,collapseWallets:e}},setEnableEmbedded(e){i.enableEmbedded=e},setAllowUnsupportedChain(e){i.allowUnsupportedChain=e},setManualWCControl(e){i.manualWCControl=e},setEnableNetworkSwitch(e){i.enableNetworkSwitch=e},setEnableReconnect(e){i.enableReconnect=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([e,t])=>{t&&(i.defaultAccountTypes[e]=t)})},setUniversalProviderConfigOverride(e){i.universalProviderConfigOverride=e},getUniversalProviderConfigOverride:()=>i.universalProviderConfigOverride,getSnapshot:()=>(0,t.snapshot)(i)}],444173)},390739,e=>{"use strict";var t=e.i(287831),r=e.i(179019),a=e.i(816478),o=e.i(893468),n=e.i(444173);let i=Object.freeze({enabled:!0,events:[]}),s=new o.FetchUtil({baseUrl:a.CoreHelperUtil.getAnalyticsUrl(),clientId:null}),c=(0,t.proxy)({...i}),l={state:c,subscribeKey:(e,t)=>(0,r.subscribeKey)(c,e,t),async sendError(e,t){if(!c.enabled)return;let r=Date.now();if(c.events.filter(e=>r-new Date(e.properties.timestamp||"").getTime()<6e4).length>=5)return;let o={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};c.events.push(o);try{if("undefined"==typeof window)return;let{projectId:r,sdkType:o,sdkVersion:i}=n.OptionsController.state;await s.post({path:"/e",params:{projectId:r,st:o,sv:i||"html-wagmi-4.2.2"},body:{eventId:a.CoreHelperUtil.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){c.enabled=!0},disable(){c.enabled=!1},clearEvents(){c.events=[]}};class d extends Error{constructor(e,t,r){super(e),this.name="AppKitError",this.category=t,this.originalError=r,Object.setPrototypeOf(this,d.prototype);let a=!1;if(r instanceof Error&&"string"==typeof r.stack&&r.stack){const e=r.stack,t=e.indexOf("\n");if(t>-1){const r=e.substring(t+1);this.stack=`${this.name}: ${this.message}
${r}`,a=!0}}!a&&(Error.captureStackTrace?Error.captureStackTrace(this,d):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function u(e,t){let r=e instanceof d?e:new d(e instanceof Error?e.message:String(e),t,e);throw l.sendError(r,r.category),r}function p(e,t="INTERNAL_SDK_ERROR"){let r={};return Object.keys(e).forEach(a=>{let o=e[a];if("function"==typeof o){let e=o;e="AsyncFunction"===o.constructor.name?async(...e)=>{try{return await o(...e)}catch(e){return u(e,t)}}:(...e)=>{try{return o(...e)}catch(e){return u(e,t)}},r[a]=e}else r[a]=o}),r}e.s(["AppKitError",()=>d,"withErrorBoundary",()=>p],390739)},129415,e=>{"use strict";var t=e.i(287831),r=e.i(179019),a=e.i(390739);let o=(0,t.proxy)({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),n=(0,a.withErrorBoundary)({state:o,subscribeNetworkImages:e=>(0,t.subscribe)(o.networkImages,()=>e(o.networkImages)),subscribeKey:(e,t)=>(0,r.subscribeKey)(o,e,t),subscribe:e=>(0,t.subscribe)(o,()=>e(o)),setWalletImage(e,t){o.walletImages[e]=t},setNetworkImage(e,t){o.networkImages[e]=t},setChainImage(e,t){o.chainImages[e]=t},setConnectorImage(e,t){o.connectorImages={...o.connectorImages,[e]:t}},setTokenImage(e,t){o.tokenImages[e]=t},setCurrencyImage(e,t){o.currencyImages[e]=t}});e.s(["AssetController",0,n])},487845,e=>{"use strict";e.s(["AssetUtil",()=>i]);var t=e.i(287831),r=e.i(701676),a=e.i(129415);let o={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:"",sui:"",stacks:""},n=(0,t.proxy)({networkImagePromises:{}}),i={async fetchWalletImage(e){if(e)return await r.ApiController._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;let t=this.getNetworkImageById(e);return t||(n.networkImagePromises[e]||(n.networkImagePromises[e]=r.ApiController._fetchNetworkImage(e)),await n.networkImagePromises[e],this.getNetworkImageById(e))},getWalletImageById(e){if(e)return a.AssetController.state.walletImages[e]},getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?a.AssetController.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.assets?.imageUrl?e?.assets?.imageUrl:e?.assets?.imageId?a.AssetController.state.networkImages[e.assets.imageId]:void 0,getNetworkImageById(e){if(e)return a.AssetController.state.networkImages[e]},getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.info?.icon?e.info.icon:e?.imageId?a.AssetController.state.connectorImages[e.imageId]:void 0,getChainImage:e=>a.AssetController.state.networkImages[o[e]]}},970260,e=>{"use strict";var t=e.i(689252);e.s(["AVAILABLE_NAMESPACES",0,["eip155","solana","polkadot","bip122","cosmos","sui","stacks"],"NetworkUtil",0,{caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,parseEvmChainId(e){return"string"==typeof e?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace:(e,t)=>e?.filter(e=>e.chainNamespace===t)||[],getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,r){if(!r)return;let a=e.find(e=>e.caipNetworkId===r);if(a)return a.name;let[o]=r.split(":");return t.ConstantsUtil.CHAIN_NAME_MAP?.[o]||void 0}}])},990716,e=>{"use strict";var t=e.i(287831),r=e.i(179019),a=e.i(816478);let o=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),n=(0,t.proxy)({...o});e.s(["SnackController",0,{state:n,subscribeKey:(e,t)=>(0,r.subscribeKey)(n,e,t),showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){let t=a.CoreHelperUtil.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){n.message=o.message,n.variant=o.variant,n.svg=o.svg,n.open=o.open,n.autoClose=o.autoClose},_showMessage({message:e,svg:t,variant:r="success",autoClose:a=o.autoClose}){n.open?(n.open=!1,setTimeout(()=>{n.message=e,n.variant=r,n.svg=t,n.open=!0,n.autoClose=a},150)):(n.message=e,n.variant=r,n.svg=t,n.open=!0,n.autoClose=a)}}])},763016,e=>{"use strict";e.s(["BlockchainApiController",()=>C]);var t=e.i(287831),r=e.i(978469),a=e.i(816478),o=e.i(893468),n=e.i(479702),i=e.i(504019),s=e.i(435446),c=e.i(444173),l=e.i(990716);let d={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},u=a.CoreHelperUtil.getBlockchainApiUrl(),p=(0,t.proxy)({clientId:null,api:new o.FetchUtil({baseUrl:u,clientId:null}),supportedChains:{http:[],ws:[]}}),C={state:p,async get(e){let{st:t,sv:r}=C.getSdkProperties(),a=c.OptionsController.state.projectId,o={...e.params||{},st:t,sv:r,projectId:a};return p.api.get({...e,params:o})},getSdkProperties(){let{sdkType:e,sdkVersion:t}=c.OptionsController.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{p.supportedChains.http.length||await C.getSupportedNetworks()}catch(e){return!1}return p.supportedChains.http.includes(e)},async getSupportedNetworks(){try{let e=await C.get({path:"v1/supported-chains"});return p.supportedChains=e,e}catch{return p.supportedChains}},async fetchIdentity({address:e,caipNetworkId:t}){if(!await C.isNetworkSupported(t))return{avatar:"",name:""};let r=n.StorageUtil.getIdentityFromCacheForAddress(e);if(r)return r;let o=await C.get({path:`/v1/identity/${e}`,params:{sender:s.ChainController.state.activeCaipAddress?a.CoreHelperUtil.getPlainAddress(s.ChainController.state.activeCaipAddress):void 0}});return n.StorageUtil.updateIdentityCache({address:e,identity:o,timestamp:Date.now()}),o},async fetchTransactions({account:e,cursor:t,signal:r,cache:a,chainId:o}){if(!await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))return{data:[],next:void 0};let i=n.StorageUtil.getTransactionsCacheForAddress({address:e,chainId:o});if(i)return i;let c=await C.get({path:`/v1/account/${e}/history`,params:{cursor:t,chainId:o},signal:r,cache:a});return n.StorageUtil.updateTransactionsCache({address:e,chainId:o,timestamp:Date.now(),transactions:c}),c},fetchSwapQuote:async({amount:e,userAddress:t,from:r,to:a,gasPrice:o})=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?C.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:r,to:a,gasPrice:o}}):{quotes:[]},fetchSwapTokens:async({chainId:e})=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?C.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]},async fetchTokenPrice({addresses:e}){if(!await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))return{fungibles:[]};let t=n.StorageUtil.getTokenPriceCacheForAddresses(e);if(t)return t;let r=await p.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:c.OptionsController.state.projectId},headers:{"Content-Type":"application/json"}});return n.StorageUtil.updateTokenPriceCache({addresses:e,timestamp:Date.now(),tokenPrice:r}),r},fetchSwapAllowance:async({tokenAddress:e,userAddress:t})=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?C.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"},async fetchGasPrice({chainId:e}){let{st:t,sv:r}=C.getSdkProperties();if(!await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Gas Price");return C.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:t,sv:r}})},async generateSwapCalldata({amount:e,from:t,to:a,userAddress:o,disableEstimate:n}){if(!await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Swaps");return p.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:r.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE},projectId:c.OptionsController.state.projectId,from:t,to:a,userAddress:o,disableEstimate:n}})},async generateApproveCalldata({from:e,to:t,userAddress:r}){let{st:a,sv:o}=C.getSdkProperties();if(!await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))throw Error("Network not supported for Swaps");return C.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:e,to:t,st:a,sv:o}})},async getBalance(e,t,r){let{st:a,sv:o}=C.getSdkProperties();if(!await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))return l.SnackController.showError("Token Balance Unavailable"),{balances:[]};let i=`${t}:${e}`,c=n.StorageUtil.getBalanceCacheForCaipAddress(i);if(c)return c;let d=await C.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:r,st:a,sv:o}});return n.StorageUtil.updateBalanceCache({caipAddress:i,balance:d,timestamp:Date.now()}),d},lookupEnsName:async e=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?C.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]},reverseLookupEnsName:async({address:e})=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?C.get({path:`/v1/profile/reverse/${e}`,params:{sender:i.AccountController.state.address,apiVersion:"2"}}):[],getEnsNameSuggestions:async e=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?C.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]},registerEnsName:async({coinType:e,address:t,message:r,signature:a})=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?p.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:r,signature:a},headers:{"Content-Type":"application/json"}}):{success:!1},generateOnRampURL:async({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:a,paymentAmount:o})=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?(await p.api.post({path:"/v1/generators/onrampurl",params:{projectId:c.OptionsController.state.projectId},body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:a,presetFiatAmount:o}})).url:"",async getOnrampOptions(){if(!await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await C.get({path:"/v1/onramp/options"})}catch(e){return d}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:a}){try{if(!await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId))return null;return await p.api.post({path:"/v1/onramp/quote",params:{projectId:c.OptionsController.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:a}})}catch(e){return{networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}},getSmartSessions:async e=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?C.get({path:`/v1/sessions/${e}`}):[],revokeSmartSession:async(e,t,r)=>await C.isNetworkSupported(s.ChainController.state.activeCaipNetwork?.caipNetworkId)?p.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:c.OptionsController.state.projectId},body:{pci:t,signature:r}}):{success:!1},setClientId(e){p.clientId=e,p.api=new o.FetchUtil({baseUrl:u,clientId:e})}}},564317,e=>{"use strict";e.s(["ParseUtil",0,{validateCaipAddress(e){if(e.split(":")?.length!==3)throw Error("Invalid CAIP Address");return e},parseCaipAddress(e){let t=e.split(":");if(3!==t.length)throw Error(`Invalid CAIP-10 address: ${e}`);let[r,a,o]=t;if(!r||!a||!o)throw Error(`Invalid CAIP-10 address: ${e}`);return{chainNamespace:r,chainId:a,address:o}},parseCaipNetworkId(e){let t=e.split(":");if(2!==t.length)throw Error(`Invalid CAIP-2 network id: ${e}`);let[r,a]=t;if(!r||!a)throw Error(`Invalid CAIP-2 network id: ${e}`);return{chainNamespace:r,chainId:a}}}])},463677,e=>{"use strict";var t=e.i(56530);let r=(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL:void 0)||"https://secure.walletconnect.org/sdk",a=(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL:void 0)||"error",o=(void 0!==t.default&&void 0!==t.default.env?t.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION:void 0)||"4";e.s(["DEFAULT_LOG_LEVEL",0,a,"SECURE_SITE_SDK",0,r,"SECURE_SITE_SDK_VERSION",0,o,"W3mFrameConstants",0,{APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@appkit-wallet/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",SOCIAL_USERNAME:"SOCIAL_USERNAME",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_CONNECT_SOCIAL:"@w3m-app/CONNECT_SOCIAL",APP_GET_SOCIAL_REDIRECT_URI:"@w3m-app/GET_SOCIAL_REDIRECT_URI",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",APP_CONNECT_FARCASTER:"@w3m-app/CONNECT_FARCASTER",APP_GET_FARCASTER_URI:"@w3m-app/GET_FARCASTER_URI",APP_RELOAD:"@w3m-app/RELOAD",APP_RPC_ABORT:"@w3m-app/RPC_ABORT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_CONNECT_SOCIAL_SUCCESS:"@w3m-frame/CONNECT_SOCIAL_SUCCESS",FRAME_CONNECT_SOCIAL_ERROR:"@w3m-frame/CONNECT_SOCIAL_ERROR",FRAME_CONNECT_FARCASTER_SUCCESS:"@w3m-frame/CONNECT_FARCASTER_SUCCESS",FRAME_CONNECT_FARCASTER_ERROR:"@w3m-frame/CONNECT_FARCASTER_ERROR",FRAME_GET_FARCASTER_URI_SUCCESS:"@w3m-frame/GET_FARCASTER_URI_SUCCESS",FRAME_GET_FARCASTER_URI_ERROR:"@w3m-frame/GET_FARCASTER_URI_ERROR",FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:"@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",FRAME_READY:"@w3m-frame/READY",FRAME_RELOAD_SUCCESS:"@w3m-frame/RELOAD_SUCCESS",FRAME_RELOAD_ERROR:"@w3m-frame/RELOAD_ERROR",FRAME_RPC_ABORT_SUCCESS:"@w3m-frame/RPC_ABORT_SUCCESS",FRAME_RPC_ABORT_ERROR:"@w3m-frame/RPC_ABORT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},"W3mFrameRpcConstants",0,{SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}}])},458550,e=>{"use strict";e.s(["NetworkUtil",()=>i]);var t=e.i(689252),r=e.i(504019),a=e.i(435446),o=e.i(613585),n=e.i(629107);let i={onSwitchNetwork({network:e,ignoreSwitchConfirmation:i=!1}){let s=a.ChainController.state.activeCaipNetwork,c=n.RouterController.state.data;if(e.id===s?.id)return;let l=r.AccountController.getCaipAddress(a.ChainController.state.activeChain),d=e.chainNamespace!==a.ChainController.state.activeChain,u=r.AccountController.getCaipAddress(e.chainNamespace),p=o.ConnectorController.getConnectorId(a.ChainController.state.activeChain)===t.ConstantsUtil.CONNECTOR_ID.AUTH,C=t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(t=>t===e.chainNamespace);i||p&&C?n.RouterController.push("SwitchNetwork",{...c,network:e}):l&&d&&!u?n.RouterController.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):n.RouterController.push("SwitchNetwork",{...c,network:e})}}},637842,e=>{"use strict";var t=e.i(287831),r=e.i(179019),a=e.i(390739),o=e.i(444173);let n=(0,t.proxy)({message:"",variant:"info",open:!1}),i=(0,a.withErrorBoundary)({state:n,subscribeKey:(e,t)=>(0,r.subscribeKey)(n,e,t),open(e,t){let{debug:r}=o.OptionsController.state,{code:a,displayMessage:i,debugMessage:s}=e;i&&r&&(n.message=i,n.variant=t,n.open=!0),s&&console.error("function"==typeof s?s():s,a?{code:a}:void 0)},close(){n.open=!1,n.message="",n.variant="info"}});e.s(["AlertController",0,i])},974915,e=>{"use strict";e.s(["EventsController",()=>C]);var t=e.i(287831),r=e.i(689252),a=e.i(568830),o=e.i(816478),n=e.i(893468),i=e.i(504019),s=e.i(637842),c=e.i(444173);let l=o.CoreHelperUtil.getAnalyticsUrl(),d=new n.FetchUtil({baseUrl:l,clientId:null}),u=["MODAL_CREATED"],p=(0,t.proxy)({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),C={state:p,subscribe:e=>(0,t.subscribe)(p,()=>e(p)),getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:r}=c.OptionsController.state;return{projectId:e,st:t,sv:r||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(e){try{let t=i.AccountController.state.address;if("address"in e.data&&e.data.address&&(t=e.data.address),u.includes(e.data.event)||"undefined"==typeof window)return;await d.post({path:"/e",params:C.getSdkProperties(),body:{eventId:o.CoreHelperUtil.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:t}}}),p.reportedErrors.FORBIDDEN=!1}catch(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===r.ConstantsUtil.HTTP_STATUS_CODES.FORBIDDEN&&!p.reportedErrors.FORBIDDEN&&(s.AlertController.open({displayMessage:"Invalid App Configuration",debugMessage:`Origin ${(0,a.isSafe)()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),p.reportedErrors.FORBIDDEN=!0)}},sendEvent(e){p.timestamp=Date.now(),p.data=e,(c.OptionsController.state.features?.analytics||"INITIALIZE"===e.event)&&C._sendAnalyticsEvent(p)}}},791213,e=>{"use strict";var t=e.i(287831),r=e.i(179019);let a=(0,t.proxy)({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1});e.s(["PublicStateController",0,{state:a,subscribe:e=>(0,t.subscribe)(a,()=>e(a)),subscribeOpen:e=>(0,r.subscribeKey)(a,"open",e),set(e){Object.assign(a,{...a,...e})}}])},688138,e=>{"use strict";e.s(["ModalController",()=>w]);var t=e.i(287831),r=e.i(179019),a=e.i(816478),o=e.i(458550),n=e.i(390739),i=e.i(701676),s=e.i(435446),c=e.i(385904),l=e.i(613585),d=e.i(974915),u=e.i(444173),p=e.i(791213),C=e.i(629107);let g=(0,t.proxy)({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),w=(0,n.withErrorBoundary)({state:g,subscribe:e=>(0,t.subscribe)(g,()=>e(g)),subscribeKey:(e,t)=>(0,r.subscribeKey)(g,e,t),async open(e){let t=e?.namespace,r=s.ChainController.state.activeChain,n=t&&t!==r,m=s.ChainController.getAccountData(e?.namespace)?.caipAddress;if(c.ConnectionController.state.wcBasic?i.ApiController.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await i.ApiController.prefetch(),l.ConnectorController.setFilterByNamespace(e?.namespace),w.setLoading(!0,t),t&&n){let e=s.ChainController.getNetworkData(t)?.caipNetwork||s.ChainController.getRequestedCaipNetworks(t)[0];e&&o.NetworkUtil.onSwitchNetwork({network:e,ignoreSwitchConfirmation:!0})}else{let t=s.ChainController.state.noAdapters;u.OptionsController.state.manualWCControl||t&&!m?a.CoreHelperUtil.isMobile()?C.RouterController.reset("AllWallets"):C.RouterController.reset("ConnectingWalletConnectBasic"):e?.view?C.RouterController.reset(e.view,e.data):m?C.RouterController.reset("Account"):C.RouterController.reset("Connect")}g.open=!0,p.PublicStateController.set({open:!0}),d.EventsController.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!m}})},close(){let e=u.OptionsController.state.enableEmbedded,t=!!s.ChainController.state.activeCaipAddress;g.open&&d.EventsController.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),g.open=!1,C.RouterController.reset("Connect"),w.clearLoading(),e?t?C.RouterController.replace("Account"):C.RouterController.push("Connect"):p.PublicStateController.set({open:!1}),c.ConnectionController.resetUri()},setLoading(e,t){t&&g.loadingNamespaceMap.set(t,e),g.loading=e,p.PublicStateController.set({loading:e})},clearLoading(){g.loadingNamespaceMap.clear(),g.loading=!1,p.PublicStateController.set({loading:!1})},shake(){g.shake||(g.shake=!0,setTimeout(()=>{g.shake=!1},500))}})},629107,e=>{"use strict";e.s(["RouterController",()=>d]);var t=e.i(287831),r=e.i(179019),a=e.i(390739),o=e.i(504019),n=e.i(435446),i=e.i(613585),s=e.i(688138),c=e.i(444173);let l=(0,t.proxy)({view:"Connect",history:["Connect"],transactionStack:[]}),d=(0,a.withErrorBoundary)({state:l,subscribeKey:(e,t)=>(0,r.subscribeKey)(l,e,t),pushTransactionStack(e){l.transactionStack.push(e)},popTransactionStack(e){let t=l.transactionStack.pop();if(!t)return;let{onSuccess:r,onError:a,onCancel:o}=t;switch(e){case"success":r?.();break;case"error":a?.(),d.goBack();break;case"cancel":o?.(),d.goBack()}},push(e,t){e!==l.view&&(l.view=e,l.history.push(e),l.data=t)},reset(e,t){l.view=e,l.history=[e],l.data=t},replace(e,t){l.history.at(-1)!==e&&(l.view=e,l.history[l.history.length-1]=e,l.data=t)},goBack(){let e=n.ChainController.state.activeCaipAddress,r="ConnectingFarcaster"===d.state.view,a=!e&&r;if(l.history.length>1){l.history.pop();let[t]=l.history.slice(-1);t&&(e&&"Connect"===t?l.view="Account":l.view=t)}else s.ModalController.close();l.data?.wallet&&(l.data.wallet=void 0),setTimeout(()=>{if(a){o.AccountController.setFarcasterUrl(void 0,n.ChainController.state.activeChain);let e=i.ConnectorController.getAuthConnector();e?.provider?.reload();let r=(0,t.snapshot)(c.OptionsController.state);e?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId,sdkType:r.sdkType})}},100)},goBackToIndex(e){if(l.history.length>1){l.history=l.history.slice(0,e+1);let[t]=l.history.slice(-1);t&&(l.view=t)}},goBackOrCloseModal(){d.state.history.length>1?d.goBack():s.ModalController.close()}})},613585,505667,e=>{"use strict";e.s(["ConnectorController",()=>A],613585);var t=e.i(287831),r=e.i(179019),a=e.i(970260),o=e.i(689252),n=e.i(614931),i=e.i(463677),s=e.i(643429),c=e.i(830216),l=e.i(479702),d=e.i(390739),u=e.i(701676),p=e.i(435446),C=e.i(444173),g=e.i(629107);e.s(["ThemeController",()=>h],505667);let w=(0,t.proxy)({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),m={state:w,subscribe:e=>(0,t.subscribe)(w,()=>e(w)),setThemeMode(e){w.themeMode=e;try{let t=A.getAuthConnector();if(t){let r=m.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:r,w3mThemeVariables:(0,n.getW3mThemeVariables)(r,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){w.themeVariables={...w.themeVariables,...e};try{let e=A.getAuthConnector();if(e){let t=m.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:(0,n.getW3mThemeVariables)(w.themeVariables,w.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot:()=>(0,t.snapshot)(w)},h=(0,d.withErrorBoundary)(m),f=Object.fromEntries(a.AVAILABLE_NAMESPACES.map(e=>[e,void 0])),S=Object.fromEntries(a.AVAILABLE_NAMESPACES.map(e=>[e,!0])),E=(0,t.proxy)({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:f,filterByNamespaceMap:S}),A=(0,d.withErrorBoundary)({state:E,subscribe:e=>(0,t.subscribe)(E,()=>{e(E)}),subscribeKey:(e,t)=>(0,r.subscribeKey)(E,e,t),initialize(e){e.forEach(e=>{let t=l.StorageUtil.getConnectedConnectorId(e);t&&A.setConnectorId(t,e)})},setActiveConnector(e){e&&(E.activeConnector=(0,t.ref)(e))},setConnectors(e){e.filter(e=>!E.allConnectors.some(t=>t.id===e.id&&A.getConnectorName(t.name)===A.getConnectorName(e.name)&&t.chain===e.chain)).forEach(e=>{"MULTI_CHAIN"!==e.type&&E.allConnectors.push((0,t.ref)(e))});let r=A.getEnabledNamespaces(),a=A.getEnabledConnectors(r);E.connectors=A.mergeMultiChainConnectors(a)},filterByNamespaces(e){Object.keys(E.filterByNamespaceMap).forEach(e=>{E.filterByNamespaceMap[e]=!1}),e.forEach(e=>{E.filterByNamespaceMap[e]=!0}),A.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){E.filterByNamespaceMap[e]=t,A.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){let e=A.getEnabledNamespaces(),t=A.getEnabledConnectors(e),r=A.areAllNamespacesEnabled();E.connectors=A.mergeMultiChainConnectors(t),r?u.ApiController.clearFilterByNamespaces():u.ApiController.filterByNamespaces(e)},getEnabledNamespaces:()=>Object.entries(E.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e),getEnabledConnectors:e=>E.allConnectors.filter(t=>e.includes(t.chain)),areAllNamespacesEnabled:()=>Object.values(E.filterByNamespaceMap).every(e=>e),mergeMultiChainConnectors(e){let t=A.generateConnectorMapByName(e),r=[];return t.forEach(e=>{let t=e[0],a=t?.id===o.ConstantsUtil.CONNECTOR_ID.AUTH;e.length>1&&t?r.push({name:t.name,imageUrl:t.imageUrl,imageId:t.imageId,connectors:[...e],type:a?"AUTH":"MULTI_CHAIN",chain:"eip155",id:t?.id||""}):t&&r.push(t)}),r},generateConnectorMapByName(e){let t=new Map;return e.forEach(e=>{let{name:r}=e,a=A.getConnectorName(r);if(!a)return;let o=t.get(a)||[];o.find(t=>t.chain===e.chain)||o.push(e),t.set(a,o)}),t},getConnectorName:e=>e&&({"Trust Wallet":"Trust"})[e]||e,getUniqueConnectorsByName(e){let t=[];return e.forEach(e=>{t.find(t=>t.chain===e.chain)||t.push(e)}),t},addConnector(e){if(e.id===o.ConstantsUtil.CONNECTOR_ID.AUTH){let r=(0,t.snapshot)(C.OptionsController.state),a=h.getSnapshot().themeMode,o=h.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId,sdkType:r.sdkType}),e?.provider?.syncTheme({themeMode:a,themeVariables:o,w3mThemeVariables:(0,n.getW3mThemeVariables)(o,a)}),A.setConnectors([e])}else A.setConnectors([e])},getAuthConnector(e){let t=e||p.ChainController.state.activeChain,r=E.connectors.find(e=>e.id===o.ConstantsUtil.CONNECTOR_ID.AUTH);if(r)return r?.connectors?.length?r.connectors.find(e=>e.chain===t):r},getAnnouncedConnectorRdns:()=>E.connectors.filter(e=>"ANNOUNCED"===e.type).map(e=>e.info?.rdns),getConnectorById:e=>E.allConnectors.find(t=>t.id===e),getConnector({id:e,rdns:t,namespace:r}){let a=r||p.ChainController.state.activeChain;return E.allConnectors.filter(e=>e.chain===a).find(r=>r.explorerId===e||r.info?.rdns===t)},syncIfAuthConnector(e){if("ID_AUTH"!==e.id)return;let r=(0,t.snapshot)(C.OptionsController.state),a=h.getSnapshot().themeMode,o=h.getSnapshot().themeVariables;e?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,sdkType:r.sdkType,projectId:r.projectId}),e.provider.syncTheme({themeMode:a,themeVariables:o,w3mThemeVariables:(0,n.getW3mThemeVariables)(o,a)})},getConnectorsByNamespace(e){let t=E.allConnectors.filter(t=>t.chain===e);return A.mergeMultiChainConnectors(t)},canSwitchToSmartAccount:e=>p.ChainController.checkIfSmartAccountEnabled()&&(0,s.getPreferredAccountType)(e)===i.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA,selectWalletConnector(e){let t=A.getConnector({id:e.id,rdns:e.rdns});c.MobileWalletUtil.handleMobileDeeplinkRedirect(t?.explorerId||e.id,p.ChainController.state.activeChain),t?g.RouterController.push("ConnectingExternal",{connector:t,wallet:e}):g.RouterController.push("ConnectingWalletConnect",{wallet:e})},getConnectors:e=>e?A.getConnectorsByNamespace(e):A.mergeMultiChainConnectors(E.allConnectors),setFilterByNamespace(e){E.filterByNamespace=e,E.connectors=A.getConnectors(e),u.ApiController.setFilterByNamespace(e)},setConnectorId(e,t){e&&(E.activeConnectorIds={...E.activeConnectorIds,[t]:e},l.StorageUtil.setConnectedConnectorId(t,e))},removeConnectorId(e){E.activeConnectorIds={...E.activeConnectorIds,[e]:void 0},l.StorageUtil.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return E.activeConnectorIds[e]},isConnected:e=>e?!!E.activeConnectorIds[e]:Object.values(E.activeConnectorIds).some(e=>!!e),resetConnectorIds(){E.activeConnectorIds={...f}}})},236282,e=>{"use strict";e.s(["ConnectorControllerUtil",()=>w]);var t=e.i(564317),r=e.i(689252),a=e.i(463677),o=e.i(504019),n=e.i(435446),i=e.i(385904),s=e.i(613585),c=e.i(974915),l=e.i(688138),d=e.i(629107),u=e.i(643429),p=e.i(978469),C=e.i(816478),g=e.i(479702);let w={checkNamespaceConnectorId:(e,t)=>s.ConnectorController.getConnectorId(e)===t,isSocialProvider:e=>p.ConstantsUtil.DEFAULT_REMOTE_FEATURES.socials.includes(e),connectWalletConnect:({walletConnect:e,connector:r,closeModalOnConnect:a=!0,redirectViewOnModalClose:o="Connect",onOpen:i,onConnect:c})=>new Promise((u,p)=>{if(e&&s.ConnectorController.setActiveConnector(r),i?.(C.CoreHelperUtil.isMobile()&&e),o){let e=l.ModalController.subscribeKey("open",t=>{t||(d.RouterController.state.view!==o&&d.RouterController.replace(o),e(),p(Error("Modal closed")))})}let g=n.ChainController.subscribeKey("activeCaipAddress",e=>{e&&(c?.(),a&&l.ModalController.close(),g(),u(t.ParseUtil.parseCaipAddress(e)))})}),connectExternal:e=>new Promise((r,a)=>{let o=n.ChainController.subscribeKey("activeCaipAddress",e=>{e&&(l.ModalController.close(),o(),r(t.ParseUtil.parseCaipAddress(e)))});i.ConnectionController.connectExternal(e,e.chain).catch(()=>{o(),a(Error("Connection rejected"))})}),connectSocial({social:e,namespace:a,closeModalOnConnect:d=!0,onOpenFarcaster:u,onConnect:p}){let w=o.AccountController.state.socialWindow,m=o.AccountController.state.socialProvider,h=!1,f=null,S=a||n.ChainController.state.activeChain,E=n.ChainController.subscribeKey("activeCaipAddress",e=>{e&&(d&&l.ModalController.close(),E())});return new Promise((a,d)=>{async function E(e){if(e.data?.resultUri)if(e.origin===r.ConstantsUtil.SECURE_SITE_SDK_ORIGIN){window.removeEventListener("message",E,!1);try{let r=s.ConnectorController.getAuthConnector(S);if(r&&!h){w&&(w.close(),o.AccountController.setSocialWindow(void 0,S),w=o.AccountController.state.socialWindow),h=!0;let s=e.data.resultUri;if(m&&c.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:m}}),m){g.StorageUtil.setConnectedSocialProvider(m),await i.ConnectionController.connectExternal({id:r.id,type:r.type,socialUri:s},r.chain);let e=n.ChainController.state.activeCaipAddress;if(!e)return void d(Error("Failed to connect"));a(t.ParseUtil.parseCaipAddress(e)),c.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:m,caipNetworkId:n.ChainController.getActiveCaipNetwork()?.caipNetworkId}})}}}catch(e){m&&c.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:m}}),d(Error("Failed to connect"))}}else m&&c.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:m}})}!async function(){if(e&&(o.AccountController.setSocialProvider(e,S),m=o.AccountController.state.socialProvider,c.EventsController.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:m}})),"farcaster"===m){u?.();let t=l.ModalController.subscribeKey("open",r=>{r||"farcaster"!==e||(d(Error("Popup closed")),p?.(),t())}),r=s.ConnectorController.getAuthConnector();if(r&&!o.AccountController.state.farcasterUrl)try{let{url:e}=await r.provider.getFarcasterUri();o.AccountController.setFarcasterUrl(e,S)}catch{d(Error("Failed to connect to farcaster"))}}else{let e=s.ConnectorController.getAuthConnector();f=C.CoreHelperUtil.returnOpenHref(`${r.ConstantsUtil.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes");try{if(e&&m){let{uri:t}=await e.provider.getSocialRedirectUri({provider:m});if(f&&t){o.AccountController.setSocialWindow(f,S),w=o.AccountController.state.socialWindow,f.location.href=t;let e=setInterval(()=>{w?.closed&&!h&&(d(Error("Popup closed")),clearInterval(e))},1e3);window.addEventListener("message",E,!1)}else f?.close(),d(Error("Failed to initiate social connection"))}}catch{d(Error("Failed to initiate social connection")),f?.close()}}}()})},connectEmail:({closeModalOnConnect:e=!0,redirectViewOnModalClose:r="Connect",onOpen:a,onConnect:o})=>new Promise((i,s)=>{if(a?.(),r){let e=l.ModalController.subscribeKey("open",t=>{t||(d.RouterController.state.view!==r&&d.RouterController.replace(r),e(),s(Error("Modal closed")))})}let c=n.ChainController.subscribeKey("activeCaipAddress",r=>{r&&(o?.(),e&&l.ModalController.close(),c(),i(t.ParseUtil.parseCaipAddress(r)))})}),async updateEmail(){let e=g.StorageUtil.getConnectedConnectorId(n.ChainController.state.activeChain),t=s.ConnectorController.getAuthConnector();if(!t)throw Error("No auth connector found");if(e!==r.ConstantsUtil.CONNECTOR_ID.AUTH)throw Error("Not connected to email or social");let a=t.provider.getEmail()??"";return await l.ModalController.open({view:"UpdateEmailWallet",data:{email:a,redirectView:void 0}}),new Promise((e,r)=>{let o=setInterval(()=>{let r=t.provider.getEmail()??"";r!==a&&(l.ModalController.close(),clearInterval(o),n(),e({email:r}))},1e3),n=l.ModalController.subscribeKey("open",e=>{e||("Connect"!==d.RouterController.state.view&&d.RouterController.push("Connect"),clearInterval(o),n(),r(Error("Modal closed")))})})},canSwitchToSmartAccount:e=>n.ChainController.checkIfSmartAccountEnabled()&&(0,u.getPreferredAccountType)(e)===a.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA}},643429,e=>{"use strict";e.s(["getActiveCaipNetwork",()=>n,"getActiveNetworkTokenAddress",()=>a,"getPreferredAccountType",()=>o]),e.i(689252);var t=e.i(435446);e.i(236282);var r=e.i(978469);function a(){let e=t.ChainController.state.activeCaipNetwork?.chainNamespace||"eip155",a=t.ChainController.state.activeCaipNetwork?.id||1,o=r.ConstantsUtil.NATIVE_TOKEN_ADDRESS[e];return`${e}:${a}:${o}`}function o(e){return t.ChainController.getAccountData(e)?.preferredAccountType}function n(e){return e?t.ChainController.state.chains.get(e)?.networkState?.caipNetwork:t.ChainController.state.activeCaipNetwork}},537209,e=>{"use strict";e.s(["ConnectionControllerUtil",()=>o]);var t=e.i(385904),r=e.i(613585),a=e.i(444173);let o={getConnectionStatus(e,a){let o=r.ConnectorController.state.activeConnectorIds[a],n=t.ConnectionController.getConnections(a);return o&&e.connectorId===o?"connected":n.some(t=>t.connectorId.toLowerCase()===e.connectorId.toLowerCase())?"active":"disconnected"},excludeConnectorAddressFromConnections:({connections:e,connectorId:t,addresses:r})=>e.map(e=>{if(t&&e.connectorId.toLowerCase()===t.toLowerCase()&&r){let t=e.accounts.filter(e=>!r.some(t=>t.toLowerCase()===e.address.toLowerCase()));return{...e,accounts:t}}return e}),excludeExistingConnections(e,t){let r=new Set(e);return t.filter(e=>!r.has(e.connectorId))},getConnectionsByConnectorId:(e,t)=>e.filter(e=>e.connectorId.toLowerCase()===t.toLowerCase()),getConnectionsData(e){let n=!!a.OptionsController.state.remoteFeatures?.multiWallet,i=r.ConnectorController.state.activeConnectorIds[e],s=t.ConnectionController.getConnections(e),c=(t.ConnectionController.state.recentConnections.get(e)??[]).filter(e=>r.ConnectorController.getConnectorById(e.connectorId)),l=o.excludeExistingConnections([...s.map(e=>e.connectorId),...i?[i]:[]],c);return n?{connections:s,recentConnections:l}:{connections:s.filter(e=>e.connectorId.toLowerCase()===i?.toLowerCase()),recentConnections:[]}}}},385904,84761,e=>{"use strict";let t;e.s(["ConnectionController",()=>N],385904);var r=e.i(287831),a=e.i(179019),o=e.i(689252),n=e.i(564317),i=e.i(643429),s=e.i(537209),c=e.i(236282),l=e.i(816478),d=e.i(479702),u=e.i(390739),p=e.i(504019),C=e.i(435446),g=e.i(613585),w=e.i(974915),m=e.i(688138),h=e.i(629107);e.s(["TransactionsController",()=>v],84761);var f=e.i(463677),S=e.i(763016),E=e.i(444173),A=e.i(990716);let b=(0,r.proxy)({transactions:[],transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),v=(0,u.withErrorBoundary)({state:b,subscribe:e=>(0,r.subscribe)(b,()=>e(b)),setLastNetworkInView(e){b.lastNetworkInView=e},async fetchTransactions(e){if(!e)throw Error("Transactions can't be fetched without an accountAddress");b.loading=!0;try{let t=await S.BlockchainApiController.fetchTransactions({account:e,cursor:b.next,chainId:C.ChainController.state.activeCaipNetwork?.caipNetworkId}),r=v.filterSpamTransactions(t.data),a=v.filterByConnectedChain(r),o=[...b.transactions,...a];b.loading=!1,b.transactions=o,b.transactionsByYear=v.groupTransactionsByYearAndMonth(b.transactionsByYear,a),b.empty=0===o.length,b.next=t.next?t.next:void 0}catch(r){let t=C.ChainController.state.activeChain;w.EventsController.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:E.OptionsController.state.projectId,cursor:b.next,isSmartAccount:(0,i.getPreferredAccountType)(t)===f.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),A.SnackController.showError("Failed to fetch transactions"),b.loading=!1,b.empty=!0,b.next=void 0}},groupTransactionsByYearAndMonth:(e={},t=[])=>(t.forEach(t=>{let r=new Date(t.metadata.minedAt).getFullYear(),a=new Date(t.metadata.minedAt).getMonth(),o=e[r]??{},n=(o[a]??[]).filter(e=>e.id!==t.id);e[r]={...o,[a]:[...n,t].sort((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime())}}),e),filterSpamTransactions:e=>e.filter(e=>!e.transfers.every(e=>e.nft_info?.flags.is_spam===!0)),filterByConnectedChain(e){let t=C.ChainController.state.activeCaipNetwork?.caipNetworkId;return e.filter(e=>e.metadata.chain===t)},clearCursor(){b.next=void 0},resetTransactions(){b.transactions=[],b.transactionsByYear={},b.lastNetworkInView=void 0,b.loading=!1,b.empty=!1,b.next=void 0}},"API_ERROR"),y=(0,r.proxy)({connections:new Map,recentConnections:new Map,isSwitchingConnection:!1,wcError:!1,buffering:!1,status:"disconnected"}),N=(0,u.withErrorBoundary)({state:y,subscribe:e=>(0,r.subscribe)(y,()=>e(y)),subscribeKey:(e,t)=>(0,a.subscribeKey)(y,e,t),_getClient:()=>y._client,setClient(e){y._client=(0,r.ref)(e)},initialize(e){let t=e.filter(e=>!!e.namespace).map(e=>e.namespace);N.syncStorageConnections(t)},syncStorageConnections(e){let t=d.StorageUtil.getConnections();for(let r of e??Array.from(C.ChainController.state.chains.keys())){let e=t[r]??[],a=new Map(y.recentConnections);a.set(r,e),y.recentConnections=a}},getConnections:e=>e?y.connections.get(e)??[]:[],hasAnyConnection:e=>Array.from(N.state.connections.values()).flatMap(e=>e).some(({connectorId:t})=>t===e),async connectWalletConnect(){if(l.CoreHelperUtil.isTelegram()||l.CoreHelperUtil.isSafari()&&l.CoreHelperUtil.isIos()){if(t){await t,t=void 0;return}if(!l.CoreHelperUtil.isPairingExpired(y?.wcPairingExpiry)){let e=y.wcUri;y.wcUri=e;return}t=N._getClient()?.connectWalletConnect?.().catch(()=>void 0),N.state.status="connecting",await t,t=void 0,y.wcPairingExpiry=void 0,N.state.status="connected"}else await N._getClient()?.connectWalletConnect?.()},async connectExternal(e,t,r=!0){let a=await N._getClient()?.connectExternal?.(e);return r&&C.ChainController.setActiveNamespace(t),a},async reconnectExternal(e){await N._getClient()?.reconnectExternal?.(e);let t=e.chain||C.ChainController.state.activeChain;t&&g.ConnectorController.setConnectorId(e.id,t)},async setPreferredAccountType(e,t){if(!t)return;m.ModalController.setLoading(!0,C.ChainController.state.activeChain);let r=g.ConnectorController.getAuthConnector();r&&(p.AccountController.setPreferredAccountType(e,t),await r.provider.setPreferredAccount(e),d.StorageUtil.setPreferredAccountTypes(Object.entries(C.ChainController.state.chains).reduce((e,[t,r])=>{let a=(0,i.getPreferredAccountType)(t);return void 0!==a&&(e[t]=a),e},{})),await N.reconnectExternal(r),m.ModalController.setLoading(!1,C.ChainController.state.activeChain),w.EventsController.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:C.ChainController.state.activeCaipNetwork?.caipNetworkId||""}}))},signMessage:async e=>N._getClient()?.signMessage(e),parseUnits:(e,t)=>N._getClient()?.parseUnits(e,t),formatUnits:(e,t)=>N._getClient()?.formatUnits(e,t),sendTransaction:async e=>N._getClient()?.sendTransaction(e),getCapabilities:async e=>N._getClient()?.getCapabilities(e),grantPermissions:async e=>N._getClient()?.grantPermissions(e),walletGetAssets:async e=>N._getClient()?.walletGetAssets(e)??{},estimateGas:async e=>N._getClient()?.estimateGas(e),writeContract:async e=>N._getClient()?.writeContract(e),getEnsAddress:async e=>N._getClient()?.getEnsAddress(e),getEnsAvatar:async e=>N._getClient()?.getEnsAvatar(e),checkInstalled:e=>N._getClient()?.checkInstalled?.(e)||!1,resetWcConnection(){y.wcUri=void 0,y.wcPairingExpiry=void 0,y.wcLinking=void 0,y.recentWallet=void 0,y.status="disconnected",v.resetTransactions(),d.StorageUtil.deleteWalletConnectDeepLink()},resetUri(){y.wcUri=void 0,y.wcPairingExpiry=void 0,t=void 0},finalizeWcConnection(e){let{wcLinking:t,recentWallet:r}=N.state;t&&d.StorageUtil.setWalletConnectDeepLink(t),r&&d.StorageUtil.setAppKitRecent(r),w.EventsController.sendEvent({type:"track",event:"CONNECT_SUCCESS",address:e,properties:{method:t?"mobile":"qrcode",name:h.RouterController.state.data?.wallet?.name||"Unknown",caipNetworkId:C.ChainController.getActiveCaipNetwork()?.caipNetworkId}})},setWcBasic(e){y.wcBasic=e},setUri(e){y.wcUri=e,y.wcPairingExpiry=l.CoreHelperUtil.getPairingExpiry()},setWcLinking(e){y.wcLinking=e},setWcError(e){y.wcError=e,y.buffering=!1},setRecentWallet(e){y.recentWallet=e},setBuffering(e){y.buffering=e},setStatus(e){y.status=e},setIsSwitchingConnection(e){y.isSwitchingConnection=e},async disconnect({id:e,namespace:t,initialDisconnect:r}={}){try{await N._getClient()?.disconnect({id:e,chainNamespace:t,initialDisconnect:r})}catch(e){throw new u.AppKitError("Failed to disconnect","INTERNAL_SDK_ERROR",e)}},setConnections(e,t){let r=new Map(y.connections);r.set(t,e),y.connections=r},async handleAuthAccountSwitch({address:e,namespace:t}){let r=p.AccountController.state.user?.accounts?.find(e=>"smartAccount"===e.type),a=r&&r.address.toLowerCase()===e.toLowerCase()&&c.ConnectorControllerUtil.canSwitchToSmartAccount(t)?"smartAccount":"eoa";await N.setPreferredAccountType(a,t)},async handleActiveConnection({connection:e,namespace:t,address:r}){let a=g.ConnectorController.getConnectorById(e.connectorId),n=e.connectorId===o.ConstantsUtil.CONNECTOR_ID.AUTH;if(!a)throw Error(`No connector found for connection: ${e.connectorId}`);if(n)n&&r&&await N.handleAuthAccountSwitch({address:r,namespace:t});else{let e=await N.connectExternal({id:a.id,type:a.type,provider:a.provider,address:r,chain:t},t);return e?.address}return r},async handleDisconnectedConnection({connection:e,namespace:t,address:r,closeModalOnConnect:a}){let n,i=g.ConnectorController.getConnectorById(e.connectorId),s=e.auth?.name?.toLowerCase(),l=e.connectorId===o.ConstantsUtil.CONNECTOR_ID.AUTH,d=e.connectorId===o.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;if(!i)throw Error(`No connector found for connection: ${e.connectorId}`);if(l)if(s&&c.ConnectorControllerUtil.isSocialProvider(s)){let{address:e}=await c.ConnectorControllerUtil.connectSocial({social:s,closeModalOnConnect:a,onOpenFarcaster(){m.ModalController.open({view:"ConnectingFarcaster"})},onConnect(){h.RouterController.replace("ProfileWallets")}});n=e}else{let{address:e}=await c.ConnectorControllerUtil.connectEmail({closeModalOnConnect:a,onOpen(){m.ModalController.open({view:"EmailLogin"})},onConnect(){h.RouterController.replace("ProfileWallets")}});n=e}else if(d){let{address:e}=await c.ConnectorControllerUtil.connectWalletConnect({walletConnect:!0,connector:i,closeModalOnConnect:a,onOpen(e){m.ModalController.open({view:e?"AllWallets":"ConnectingWalletConnect"})},onConnect(){h.RouterController.replace("ProfileWallets")}});n=e}else{let e=await N.connectExternal({id:i.id,type:i.type,provider:i.provider,chain:t},t);e&&(n=e.address)}return l&&r&&await N.handleAuthAccountSwitch({address:r,namespace:t}),n},async switchConnection({connection:e,address:t,namespace:r,closeModalOnConnect:a,onChange:o}){let i,c=p.AccountController.getCaipAddress(r);if(c){let{address:e}=n.ParseUtil.parseCaipAddress(c);i=e}let l=s.ConnectionControllerUtil.getConnectionStatus(e,r);switch(l){case"connected":case"active":{let a=await N.handleActiveConnection({connection:e,namespace:r,address:t});if(i&&a){let e=a.toLowerCase()!==i.toLowerCase();o?.({address:a,namespace:r,hasSwitchedAccount:e,hasSwitchedWallet:"active"===l})}break}case"disconnected":{let n=await N.handleDisconnectedConnection({connection:e,namespace:r,address:t,closeModalOnConnect:a});n&&o?.({address:n,namespace:r,hasSwitchedAccount:!0,hasSwitchedWallet:!0});break}default:throw Error(`Invalid connection status: ${l}`)}}})},504019,872398,e=>{"use strict";e.s(["AccountController",()=>m],504019);var t=e.i(287831);e.s(["BalanceUtil",()=>d],872398);var r=e.i(689252),a=e.i(763016),o=e.i(435446),n=e.i(385904),i=e.i(613585),s=e.i(638685);let c={createBalance(e,t){let r={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:t,address:"native"===e.address?void 0:this.convertAddressToCAIP10Address(e.address,t),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance:({hex:e,decimals:t})=>(0,s.formatUnits)(BigInt(e),t),convertAddressToCAIP10Address:(e,t)=>`${t}:${e}`,createCAIP2ChainId:(e,t)=>`${t}:${parseInt(e,16)}`,getChainIdHexFromCAIP2ChainId(e){let t=e.split(":");if(t.length<2||!t[1])return"0x0";let r=parseInt(t[1],10);return isNaN(r)?"0x0":`0x${r.toString(16)}`},isWalletGetAssetsResponse(e){return"object"==typeof e&&null!==e&&Object.values(e).every(e=>Array.isArray(e)&&e.every(e=>this.isValidAsset(e)))},isValidAsset:e=>"object"==typeof e&&null!==e&&"string"==typeof e.address&&"string"==typeof e.balance&&("ERC20"===e.type||"NATIVE"===e.type)&&"object"==typeof e.metadata&&null!==e.metadata&&"string"==typeof e.metadata.name&&"string"==typeof e.metadata.symbol&&"number"==typeof e.metadata.decimals&&"number"==typeof e.metadata.price&&"string"==typeof e.metadata.iconUrl};var l=e.i(479702);let d={async getMyTokensWithBalance(e){let t=m.state.address,n=o.ChainController.state.activeCaipNetwork,s=i.ConnectorController.getConnectorId("eip155")===r.ConstantsUtil.CONNECTOR_ID.AUTH;if(!t||!n)return[];let c=`${n.caipNetworkId}:${t}`,d=l.StorageUtil.getBalanceCacheForCaipAddress(c);if(d)return d.balances;if(n.chainNamespace===r.ConstantsUtil.CHAIN.EVM&&s){let e=await this.getEIP155Balances(t,n);if(e)return this.filterLowQualityTokens(e)}let u=await a.BlockchainApiController.getBalance(t,n.caipNetworkId,e);return this.filterLowQualityTokens(u.balances)},async getEIP155Balances(e,t){try{let r=c.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),a=await n.ConnectionController.getCapabilities(e);if(!a?.[r]?.assetDiscovery?.supported)return null;let o=await n.ConnectionController.walletGetAssets({account:e,chainFilter:[r]});if(!c.isWalletGetAssetsResponse(o))return null;let i=(o[r]||[]).map(e=>c.createBalance(e,t.caipNetworkId));return l.StorageUtil.updateBalanceCache({caipAddress:`${t.caipNetworkId}:${e}`,balance:{balances:i},timestamp:Date.now()}),i}catch(e){return null}},filterLowQualityTokens:e=>e.filter(e=>"0"!==e.quantity.decimals)};var u=e.i(978469),p=e.i(816478),C=e.i(390739),g=e.i(990716);let w=(0,t.proxy)({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map}),m=(0,C.withErrorBoundary)({state:w,replaceState(e){e&&Object.assign(w,(0,t.ref)(e))},subscribe:e=>o.ChainController.subscribeChainProp("accountState",t=>{if(t)return e(t)}),subscribeKey(e,t,r){let a;return o.ChainController.subscribeChainProp("accountState",r=>{if(r){let o=r[e];a!==o&&(a=o,t(o))}},r)},setStatus(e,t){o.ChainController.setAccountProp("status",e,t)},getCaipAddress(e){if(e)return o.ChainController.state.chains.get(e)?.accountState?.caipAddress},setCaipAddress(e,t){let r=e?p.CoreHelperUtil.getPlainAddress(e):void 0;t===o.ChainController.state.activeChain&&(o.ChainController.state.activeCaipAddress=e),o.ChainController.setAccountProp("caipAddress",e,t),o.ChainController.setAccountProp("address",r,t)},setBalance(e,t,r){o.ChainController.setAccountProp("balance",e,r),o.ChainController.setAccountProp("balanceSymbol",t,r)},setProfileName(e,t){o.ChainController.setAccountProp("profileName",e,t)},setProfileImage(e,t){o.ChainController.setAccountProp("profileImage",e,t)},setUser(e,t){o.ChainController.setAccountProp("user",e,t)},setAddressExplorerUrl(e,t){o.ChainController.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){o.ChainController.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){o.ChainController.setAccountProp("currentTab",e,o.ChainController.state.activeChain)},setTokenBalance(e,t){e&&o.ChainController.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){o.ChainController.setAccountProp("shouldUpdateToAddress",e,t)},addAddressLabel(e,t,r){if(!r)return;let a=o.ChainController.state.chains.get(r)?.accountState?.addressLabels||new Map;a.set(e,t),o.ChainController.setAccountProp("addressLabels",a,r)},removeAddressLabel(e,t){if(!t)return;let r=o.ChainController.state.chains.get(t)?.accountState?.addressLabels||new Map;r.delete(e),o.ChainController.setAccountProp("addressLabels",r,t)},setConnectedWalletInfo(e,t){o.ChainController.setAccountProp("connectedWalletInfo",e,t,!1)},setPreferredAccountType(e,t){o.ChainController.setAccountProp("preferredAccountType",e,t)},setSocialProvider(e,t){e&&o.ChainController.setAccountProp("socialProvider",e,t)},setSocialWindow(e,r){o.ChainController.setAccountProp("socialWindow",e?(0,t.ref)(e):void 0,r)},setFarcasterUrl(e,t){o.ChainController.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(e){w.balanceLoading=!0;let t=o.ChainController.state.activeCaipNetwork?.caipNetworkId,r=o.ChainController.state.activeCaipNetwork?.chainNamespace,a=o.ChainController.state.activeCaipAddress,n=a?p.CoreHelperUtil.getPlainAddress(a):void 0;if(w.lastRetry&&!p.CoreHelperUtil.isAllowedRetry(w.lastRetry,30*u.ConstantsUtil.ONE_SEC_MS))return w.balanceLoading=!1,[];try{if(n&&t&&r){let e=await d.getMyTokensWithBalance();return m.setTokenBalance(e,r),w.lastRetry=void 0,w.balanceLoading=!1,e}}catch(t){w.lastRetry=Date.now(),e?.(t),g.SnackController.showError("Token Balance Unavailable")}finally{w.balanceLoading=!1}return[]},resetAccount(e){o.ChainController.resetAccount(e)}})},397466,e=>{"use strict";var t=e.i(173729);e.s(["NumberUtil",0,{bigNumber:e=>new t.default(e?e:0),multiply(e,r){if(void 0===e||void 0===r)return new t.default(0);let a=new t.default(e),o=new t.default(r);return a.times(o)},toFixed:(e,r=2)=>void 0===e||""===e?new t.default(0).toFixed(r):new t.default(e).toFixed(r),formatNumberToLocalString:(e,t=2)=>void 0===e||""===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"}),parseLocalStringToNumber(e){if(void 0===e||""===e)return 0;let r=e.replace(/,/gu,"");return new t.default(r).toNumber()}}])},435446,774196,961263,347782,e=>{"use strict";e.s(["ChainController",()=>P],435446);var t=e.i(287831),r=e.i(179019),a=e.i(689252),o=e.i(970260),n=e.i(978469),i=e.i(816478),s=e.i(479702),c=e.i(390739),l=e.i(504019),d=e.i(385904),u=e.i(613585),p=e.i(974915),C=e.i(688138),g=e.i(444173),w=e.i(791213),m=e.i(629107);e.s(["SendController",()=>R],347782);var h=e.i(397466);let f=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],S=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],E=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],A={getERC20Abi:e=>a.ConstantsUtil.USDT_CONTRACT_ADDRESSES.includes(e)?E:f,getSwapAbi:()=>S};e.s(["ContractUtil",0,A],774196);var b=e.i(463677),v=e.i(872398),y=e.i(643429);e.s(["SwapApiUtil",()=>_],961263);var N=e.i(763016);let _={async getTokenList(e){let t=await N.BlockchainApiController.fetchSwapTokens({chainId:e});return t?.tokens?.map(e=>({...e,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))||[]},async fetchGasPrice(){let e=P.state.activeCaipNetwork;if(!e)return null;try{if("solana"!==e.chainNamespace)return await N.BlockchainApiController.fetchGasPrice({chainId:e.caipNetworkId});{let e=(await d.ConnectionController?.estimateGas({chainNamespace:"solana"}))?.toString();return{standard:e,fast:e,instant:e}}}catch{return null}},async fetchSwapAllowance({tokenAddress:e,userAddress:t,sourceTokenAmount:r,sourceTokenDecimals:a}){let o=await N.BlockchainApiController.fetchSwapAllowance({tokenAddress:e,userAddress:t});if(o?.allowance&&r&&a){let e=d.ConnectionController.parseUnits(r,a)||0;return BigInt(o.allowance)>=e}return!1},async getMyTokensWithBalance(e){let t=await v.BalanceUtil.getMyTokensWithBalance(e);return l.AccountController.setTokenBalance(t,P.state.activeChain),this.mapBalancesToSwapTokens(t)},mapBalancesToSwapTokens:e=>e?.map(e=>({...e,address:e?.address?e.address:(0,y.getActiveNetworkTokenAddress)(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))||[]};var I=e.i(990716);let T=(0,t.proxy)({tokenBalances:[],loading:!1}),R=(0,c.withErrorBoundary)({state:T,subscribe:e=>(0,t.subscribe)(T,()=>e(T)),subscribeKey:(e,t)=>(0,r.subscribeKey)(T,e,t),setToken(e){e&&(T.token=(0,t.ref)(e))},setTokenAmount(e){T.sendTokenAmount=e},setReceiverAddress(e){T.receiverAddress=e},setReceiverProfileImageUrl(e){T.receiverProfileImageUrl=e},setReceiverProfileName(e){T.receiverProfileName=e},setNetworkBalanceInUsd(e){T.networkBalanceInUSD=e},setLoading(e){T.loading=e},async sendToken(){try{switch(R.setLoading(!0),P.state.activeCaipNetwork?.chainNamespace){case"eip155":await R.sendEvmToken();return;case"solana":await R.sendSolanaToken();return;default:throw Error("Unsupported chain")}}finally{R.setLoading(!1)}},async sendEvmToken(){let e=P.state.activeChain;if(!e)throw Error("SendController:sendEvmToken - activeChainNamespace is required");let t=(0,y.getPreferredAccountType)(e);if(!R.state.sendTokenAmount||!R.state.receiverAddress)throw Error("An amount and receiver address are required");if(!R.state.token)throw Error("A token is required");R.state.token?.address?(p.EventsController.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,token:R.state.token.address,amount:R.state.sendTokenAmount,network:P.state.activeCaipNetwork?.caipNetworkId||""}}),await R.sendERC20Token({receiverAddress:R.state.receiverAddress,tokenAddress:R.state.token.address,sendTokenAmount:R.state.sendTokenAmount,decimals:R.state.token.quantity.decimals})):(p.EventsController.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,token:R.state.token.symbol||"",amount:R.state.sendTokenAmount,network:P.state.activeCaipNetwork?.caipNetworkId||""}}),await R.sendNativeToken({receiverAddress:R.state.receiverAddress,sendTokenAmount:R.state.sendTokenAmount,decimals:R.state.token.quantity.decimals}))},async fetchTokenBalance(e){T.loading=!0;let t=P.state.activeCaipNetwork?.caipNetworkId,r=P.state.activeCaipNetwork?.chainNamespace,a=P.state.activeCaipAddress,o=a?i.CoreHelperUtil.getPlainAddress(a):void 0;if(T.lastRetry&&!i.CoreHelperUtil.isAllowedRetry(T.lastRetry,30*n.ConstantsUtil.ONE_SEC_MS))return T.loading=!1,[];try{if(o&&t&&r){let e=await v.BalanceUtil.getMyTokensWithBalance();return T.tokenBalances=e,T.lastRetry=void 0,e}}catch(t){T.lastRetry=Date.now(),e?.(t),I.SnackController.showError("Token Balance Unavailable")}finally{T.loading=!1}return[]},fetchNetworkBalance(){if(0===T.tokenBalances.length)return;let e=_.mapBalancesToSwapTokens(T.tokenBalances);if(!e)return;let t=e.find(e=>e.address===(0,y.getActiveNetworkTokenAddress)());t&&(T.networkBalanceInUSD=t?h.NumberUtil.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){m.RouterController.pushTransactionStack({});let t=e.receiverAddress,r=l.AccountController.state.address,o=d.ConnectionController.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));await d.ConnectionController.sendTransaction({chainNamespace:a.ConstantsUtil.CHAIN.EVM,to:t,address:r,data:"0x",value:o??BigInt(0)}),p.EventsController.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:(0,y.getPreferredAccountType)("eip155")===b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,token:R.state.token?.symbol||"",amount:e.sendTokenAmount,network:P.state.activeCaipNetwork?.caipNetworkId||""}}),d.ConnectionController._getClient()?.updateBalance("eip155"),R.resetSend()},async sendERC20Token(e){m.RouterController.pushTransactionStack({onSuccess(){m.RouterController.replace("Account")}});let t=d.ConnectionController.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));if(l.AccountController.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){let r=i.CoreHelperUtil.getPlainAddress(e.tokenAddress);if(!r)throw Error("SendController:sendERC20Token - tokenAddress is required");await d.ConnectionController.writeContract({fromAddress:l.AccountController.state.address,tokenAddress:r,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:A.getERC20Abi(r),chainNamespace:a.ConstantsUtil.CHAIN.EVM}),R.resetSend()}},async sendSolanaToken(){if(!R.state.sendTokenAmount||!R.state.receiverAddress)throw Error("An amount and receiver address are required");m.RouterController.pushTransactionStack({onSuccess(){m.RouterController.replace("Account")}}),await d.ConnectionController.sendTransaction({chainNamespace:"solana",to:R.state.receiverAddress,value:R.state.sendTokenAmount}),d.ConnectionController._getClient()?.updateBalance("solana"),R.resetSend()},resetSend(){T.token=void 0,T.sendTokenAmount=void 0,T.receiverAddress=void 0,T.receiverProfileImageUrl=void 0,T.receiverProfileName=void 0,T.loading=!1,T.tokenBalances=[]}}),k={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,user:void 0,preferredAccountType:void 0},O={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},U=(0,t.proxy)({chains:(0,r.proxyMap)(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),P=(0,c.withErrorBoundary)({state:U,subscribe:e=>(0,t.subscribe)(U,()=>{e(U)}),subscribeKey:(e,t)=>(0,r.subscribeKey)(U,e,t),subscribeChainProp(e,r,a){let o;return(0,t.subscribe)(U.chains,()=>{let t=a||U.activeChain;if(t){let a=U.chains.get(t)?.[e];o!==a&&(o=a,r(a))}})},initialize(e,r,a){let{chainId:o,namespace:n}=s.StorageUtil.getActiveNetworkProps(),i=r?.find(e=>e.id.toString()===o?.toString()),c=e.find(e=>e?.namespace===n)||e?.[0],l=e.map(e=>e.namespace).filter(e=>void 0!==e),d=new Set(g.OptionsController.state.enableEmbedded?[...l]:[...r?.map(e=>e.chainNamespace)??[]]);e?.length!==0&&c||(U.noAdapters=!0),!U.noAdapters&&(U.activeChain=c?.namespace,U.activeCaipNetwork=i,P.setChainNetworkData(c?.namespace,{caipNetwork:i}),U.activeChain&&w.PublicStateController.set({activeChain:c?.namespace})),d.forEach(e=>{let o=r?.filter(t=>t.chainNamespace===e),n=s.StorageUtil.getPreferredAccountTypes()||{},i={...g.OptionsController.state.defaultAccountTypes,...n};P.state.chains.set(e,{namespace:e,networkState:(0,t.proxy)({...O,caipNetwork:o?.[0]}),accountState:(0,t.proxy)({...k,preferredAccountType:i[e]}),caipNetworks:o??[],...a}),P.setRequestedCaipNetworks(o??[],e)})},removeAdapter(e){if(U.activeChain===e){let t=Array.from(U.chains.entries()).find(([t])=>t!==e);if(t){let e=t[1]?.caipNetworks?.[0];e&&P.setActiveCaipNetwork(e)}}U.chains.delete(e)},addAdapter(e,{networkControllerClient:t,connectionControllerClient:r},a){if(!e.namespace)throw Error("ChainController:addAdapter - adapter must have a namespace");U.chains.set(e.namespace,{namespace:e.namespace,networkState:{...O,caipNetwork:a[0]},accountState:k,caipNetworks:a,connectionControllerClient:r,networkControllerClient:t}),P.setRequestedCaipNetworks(a?.filter(t=>t.chainNamespace===e.namespace)??[],e.namespace)},addNetwork(e){let t=U.chains.get(e.chainNamespace);if(t){let r=[...t.caipNetworks||[]];t.caipNetworks?.find(t=>t.id===e.id)||r.push(e),U.chains.set(e.chainNamespace,{...t,caipNetworks:r}),P.setRequestedCaipNetworks(r,e.chainNamespace),u.ConnectorController.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){let r=U.chains.get(e);if(r){let a=U.activeCaipNetwork?.id===t,o=[...r.caipNetworks?.filter(e=>e.id!==t)||[]];a&&r?.caipNetworks?.[0]&&P.setActiveCaipNetwork(r.caipNetworks[0]),U.chains.set(e,{...r,caipNetworks:o}),P.setRequestedCaipNetworks(o||[],e),0===o.length&&u.ConnectorController.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){let r=U.chains.get(e);r&&(r.networkState={...r.networkState||O,...t},U.chains.set(e,r))},setChainAccountData(e,t,r=!0){if(!e)throw Error("Chain is required to update chain account data");let a=U.chains.get(e);if(a){let r={...a.accountState||k,...t};U.chains.set(e,{...a,accountState:r}),(1===U.chains.size||U.activeChain===e)&&(t.caipAddress&&(U.activeCaipAddress=t.caipAddress),l.AccountController.replaceState(r))}},setChainNetworkData(e,t){if(!e)return;let r=U.chains.get(e);if(r){let a={...r.networkState||O,...t};U.chains.set(e,{...r,networkState:a})}},setAccountProp(e,t,r,a=!0){P.setChainAccountData(r,{[e]:t},a)},setActiveNamespace(e){U.activeChain=e;let t=e?U.chains.get(e):void 0,r=t?.networkState?.caipNetwork;r?.id&&e&&(U.activeCaipAddress=t?.accountState?.caipAddress,U.activeCaipNetwork=r,P.setChainNetworkData(e,{caipNetwork:r}),s.StorageUtil.setActiveCaipNetworkId(r?.caipNetworkId),w.PublicStateController.set({activeChain:e,selectedNetworkId:r?.caipNetworkId}))},setActiveCaipNetwork(e){if(!e)return;U.activeChain!==e.chainNamespace&&P.setIsSwitchingNamespace(!0);let t=U.chains.get(e.chainNamespace);U.activeChain=e.chainNamespace,U.activeCaipNetwork=e,P.setChainNetworkData(e.chainNamespace,{caipNetwork:e}),t?.accountState?.address?U.activeCaipAddress=`${e.chainNamespace}:${e.id}:${t?.accountState?.address}`:U.activeCaipAddress=void 0,P.setAccountProp("caipAddress",U.activeCaipAddress,e.chainNamespace),t&&l.AccountController.replaceState(t.accountState),R.resetSend(),w.PublicStateController.set({activeChain:U.activeChain,selectedNetworkId:U.activeCaipNetwork?.caipNetworkId}),s.StorageUtil.setActiveCaipNetworkId(e.caipNetworkId),P.checkIfSupportedNetwork(e.chainNamespace)||!g.OptionsController.state.enableNetworkSwitch||g.OptionsController.state.allowUnsupportedChain||d.ConnectionController.state.wcBasic||P.showUnsupportedChainUI()},addCaipNetwork(e){if(!e)return;let t=U.chains.get(e.chainNamespace);t&&t?.caipNetworks?.push(e)},async switchActiveNamespace(e){if(!e)return;let t=e!==P.state.activeChain,r=P.getNetworkData(e)?.caipNetwork,a=P.getCaipNetworkByNamespace(e,r?.id);t&&a&&await P.switchActiveNetwork(a)},async switchActiveNetwork(e){let t=P.state.activeChain;if(!t)throw Error("ChainController:switchActiveNetwork - namespace is required");let r=P.state.chains.get(t),a=!r?.caipNetworks?.some(e=>e.id===U.activeCaipNetwork?.id),o=P.getNetworkControllerClient(e.chainNamespace);if(o){try{await o.switchCaipNetwork(e),a&&C.ModalController.close()}catch(e){m.RouterController.goBack()}p.EventsController.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})}},getNetworkControllerClient(e){let t=e||U.activeChain;if(!t)throw Error("ChainController:getNetworkControllerClient - chain is required");let r=U.chains.get(t);if(!r)throw Error("Chain adapter not found");if(!r.networkControllerClient)throw Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(e){let t=e||U.activeChain;if(!t)throw Error("Chain is required to get connection controller client");let r=U.chains.get(t);if(!r?.connectionControllerClient)throw Error("ConnectionController client not set");return r.connectionControllerClient},getNetworkProp(e,t){let r=U.chains.get(t)?.networkState;if(r)return r[e]},getRequestedCaipNetworks(e){let t=U.chains.get(e),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:a=[]}=t?.networkState||{};return i.CoreHelperUtil.sortRequestedNetworks(r,a).filter(e=>e?.id)},getAllRequestedCaipNetworks(){let e=[];return U.chains.forEach(t=>{if(!t.namespace)throw Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");let r=P.getRequestedCaipNetworks(t.namespace);e.push(...r)}),e},setRequestedCaipNetworks(e,t){P.setAdapterNetworkState(t,{requestedCaipNetworks:e});let r=Array.from(new Set(P.getAllRequestedCaipNetworks().map(e=>e.chainNamespace)));u.ConnectorController.filterByNamespaces(r)},getAllApprovedCaipNetworkIds(){let e=[];return U.chains.forEach(t=>{if(!t.namespace)throw Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");let r=P.getApprovedCaipNetworkIds(t.namespace);e.push(...r)}),e},getActiveCaipNetwork:e=>e?U.chains.get(e)?.networkState?.caipNetwork:U.activeCaipNetwork,getActiveCaipAddress:()=>U.activeCaipAddress,getApprovedCaipNetworkIds(e){let t=U.chains.get(e);return t?.networkState?.approvedCaipNetworkIds||[]},async setApprovedCaipNetworksData(e){let t=P.getNetworkControllerClient(),r=await t?.getApprovedCaipNetworksData();P.setAdapterNetworkState(e,{approvedCaipNetworkIds:r?.approvedCaipNetworkIds,supportsAllNetworks:r?.supportsAllNetworks})},checkIfSupportedNetwork(e,t){let r=t||U.activeCaipNetwork?.caipNetworkId,a=P.getRequestedCaipNetworks(e);return!a.length||a?.some(e=>e.caipNetworkId===r)},checkIfSupportedChainId(e){if(!U.activeChain)return!0;let t=P.getRequestedCaipNetworks(U.activeChain);return t?.some(t=>t.id===e)},setSmartAccountEnabledNetworks(e,t){P.setAdapterNetworkState(t,{smartAccountEnabledNetworks:e})},checkIfSmartAccountEnabled(){let e=o.NetworkUtil.caipNetworkIdToNumber(U.activeCaipNetwork?.caipNetworkId),t=U.activeChain;if(!t||!e)return!1;let r=P.getNetworkProp("smartAccountEnabledNetworks",t);return!!r?.includes(Number(e))},showUnsupportedChainUI(){C.ModalController.open({view:"UnsupportedChain"})},checkIfNamesSupported(){let e=U.activeCaipNetwork;return!!(e?.chainNamespace&&n.ConstantsUtil.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){P.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})},resetAccount(e){if(!e)throw Error("Chain is required to set account prop");let t=P.state.chains.get(e)?.accountState?.preferredAccountType,r=g.OptionsController.state.defaultAccountTypes[e];U.activeCaipAddress=void 0,P.setChainAccountData(e,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:r||t,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,user:void 0,status:"disconnected"}),u.ConnectorController.removeConnectorId(e)},setIsSwitchingNamespace(e){U.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){let e=[];if(U.chains.forEach(t=>{a.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===t.namespace)&&t.namespace&&e.push(t.namespace)}),e.length>0){let t=e[0];return t?U.chains.get(t)?.caipNetworks?.[0]:void 0}},getAccountData(e){let t=e||U.activeChain;if(t)return P.state.chains.get(t)?.accountState},getNetworkData(e){let t=e||U.activeChain;if(t)return P.state.chains.get(t)?.networkState},getCaipNetworkByNamespace(e,t){if(!e)return;let r=P.state.chains.get(e),a=r?.caipNetworks?.find(e=>e.id===t);return a||r?.networkState?.caipNetwork||r?.caipNetworks?.[0]},getRequestedCaipNetworkIds(){let e=u.ConnectorController.state.filterByNamespace;return(e?[U.chains.get(e)]:Array.from(U.chains.values())).flatMap(e=>e?.caipNetworks||[]).map(e=>e.caipNetworkId)},getCaipNetworks:e=>e?P.getRequestedCaipNetworks(e):P.getAllRequestedCaipNetworks(),setLastConnectedSIWECaipNetwork(e){U.lastConnectedSIWECaipNetwork=e},getLastConnectedSIWECaipNetwork:()=>U.lastConnectedSIWECaipNetwork})},830216,e=>{"use strict";e.s(["CUSTOM_DEEPLINK_WALLETS",()=>a,"MobileWalletUtil",()=>o]);var t=e.i(689252),r=e.i(435446);let a={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"},BINANCE:{id:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",appId:"yFK5FCqYprrXDiVFbhyRx7",deeplink:"bnc://app.binance.com/mp/app",url:"https://app.binance.com/en/download"}},o={handleMobileDeeplinkRedirect(e,o){let n=window.location.href,i=encodeURIComponent(n);if(e===a.PHANTOM.id&&!("phantom"in window)){let e=n.startsWith("https")?"https":"http",t=n.split("/")[2],r=encodeURIComponent(`${e}://${t}`);window.location.href=`${a.PHANTOM.url}/ul/browse/${i}?ref=${r}`}if(e!==a.SOLFLARE.id||"solflare"in window||(window.location.href=`${a.SOLFLARE.url}/ul/v1/browse/${i}?ref=${i}`),o!==t.ConstantsUtil.CHAIN.SOLANA||e!==a.COINBASE.id||"coinbaseSolana"in window||(window.location.href=`${a.COINBASE.url}/dapp?cb_url=${i}`),o===t.ConstantsUtil.CHAIN.BITCOIN&&e===a.BINANCE.id&&!("binancew3w"in window)){let e=r.ChainController.state.activeCaipNetwork,t=window.btoa("/pages/browser/index"),o=window.btoa(`url=${i}&defaultChainId=${e?.id??1}`),n=new URL(a.BINANCE.deeplink);n.searchParams.set("appId",a.BINANCE.appId),n.searchParams.set("startPagePath",t),n.searchParams.set("startPageQuery",o);let s=new URL(a.BINANCE.url);s.searchParams.set("_dp",window.btoa(n.toString())),window.location.href=s.toString()}}}},701676,e=>{"use strict";e.s(["ApiController",()=>h]);var t=e.i(287831),r=e.i(179019),a=e.i(689252),o=e.i(487845),n=e.i(816478),i=e.i(893468),s=e.i(830216),c=e.i(479702),l=e.i(129415),d=e.i(435446),u=e.i(613585),p=e.i(974915),C=e.i(444173);let g=n.CoreHelperUtil.getApiUrl(),w=new i.FetchUtil({baseUrl:g,clientId:null}),m=(0,t.proxy)({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),h={state:m,subscribeKey:(e,t)=>(0,r.subscribeKey)(m,e,t),_getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:r}=C.OptionsController.state;return{projectId:e,st:t||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions:e=>C.OptionsController.state.isUniversalProvider?e.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):e,async _fetchWalletImage(e){let t=`${w.baseUrl}/getWalletImage/${e}`,r=await w.getBlob({path:t,params:h._getSdkProperties()});l.AssetController.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${w.baseUrl}/public/getAssetImage/${e}`,r=await w.getBlob({path:t,params:h._getSdkProperties()});l.AssetController.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${w.baseUrl}/public/getAssetImage/${e}`,r=await w.getBlob({path:t,params:h._getSdkProperties()});l.AssetController.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){let t=`${w.baseUrl}/public/getCurrencyImage/${e}`,r=await w.getBlob({path:t,params:h._getSdkProperties()});l.AssetController.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){let t=`${w.baseUrl}/public/getTokenImage/${e}`,r=await w.getBlob({path:t,params:h._getSdkProperties()});l.AssetController.setTokenImage(e,URL.createObjectURL(r))},_filterWalletsByPlatform:e=>n.CoreHelperUtil.isMobile()?e?.filter(e=>!!e.mobile_link||e.id===s.CUSTOM_DEEPLINK_WALLETS.COINBASE.id||e.id===s.CUSTOM_DEEPLINK_WALLETS.BINANCE.id||"solana"===d.ChainController.state.activeChain&&(e.id===s.CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id||e.id===s.CUSTOM_DEEPLINK_WALLETS.PHANTOM.id)):e,fetchProjectConfig:async()=>(await w.get({path:"/appkit/v1/config",params:h._getSdkProperties()})).features,async fetchAllowedOrigins(){try{let{allowedOrigins:e}=await w.get({path:"/projects/v1/origins",params:h._getSdkProperties()});return e}catch(e){if(e instanceof Error&&e.cause instanceof Response){let t=e.cause.status;if(t===a.ConstantsUtil.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)throw Error("RATE_LIMITED",{cause:e});if(t>=a.ConstantsUtil.HTTP_STATUS_CODES.SERVER_ERROR&&t<600)throw Error("SERVER_ERROR",{cause:e})}return[]}},async fetchNetworkImages(){let e=d.ChainController.getAllRequestedCaipNetworks(),t=e?.map(({assets:e})=>e?.imageId).filter(Boolean).filter(e=>!o.AssetUtil.getNetworkImageById(e));t&&await Promise.allSettled(t.map(e=>h._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=u.ConnectorController.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>h._fetchConnectorImage(e)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(e=>h._fetchCurrencyImage(e)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(e=>h._fetchTokenImage(e)))},async fetchWallets(e){let t=e.exclude??[];h._getSdkProperties().sv.startsWith("html-core-")&&t.push(...Object.values(s.CUSTOM_DEEPLINK_WALLETS).map(e=>e.id));let r=await w.get({path:"/getWallets",params:{...h._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:e.include?.join(","),exclude:t.join(",")}});return{data:h._filterWalletsByPlatform(r?.data)||[],count:r?.count}},async fetchFeaturedWallets(){let{featuredWalletIds:e}=C.OptionsController.state;if(e?.length){let t={...h._getSdkProperties(),page:1,entries:e?.length??4,include:e},{data:r}=await h.fetchWallets(t),a=[...r].sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id)),o=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(o.map(e=>h._fetchWalletImage(e))),m.featured=a,m.allFeatured=a}},async fetchRecommendedWallets(){try{m.isFetchingRecommendedWallets=!0;let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=C.OptionsController.state,a=[...t??[],...r??[]].filter(Boolean),o=d.ChainController.getRequestedCaipNetworkIds().join(","),{data:n,count:i}=await h.fetchWallets({page:1,entries:4,include:e,exclude:a,chains:o}),s=c.StorageUtil.getRecentWallets(),l=n.map(e=>e.image_id).filter(Boolean),u=s.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...l,...u].map(e=>h._fetchWalletImage(e))),m.recommended=n,m.allRecommended=n,m.count=i??0}catch{}finally{m.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:a}=C.OptionsController.state,o=d.ChainController.getRequestedCaipNetworkIds().join(","),i=[...m.recommended.map(({id:e})=>e),...r??[],...a??[]].filter(Boolean),{data:s,count:c}=await h.fetchWallets({page:e,entries:40,include:t,exclude:i,chains:o}),l=s.slice(0,20).map(e=>e.image_id).filter(Boolean);await Promise.allSettled(l.map(e=>h._fetchWalletImage(e))),m.wallets=n.CoreHelperUtil.uniqueBy([...m.wallets,...h._filterOutExtensions(s)],"id").filter(e=>e.chains?.some(e=>o.includes(e))),m.count=c>m.count?c:m.count,m.page=e},async initializeExcludedWallets({ids:e}){let t={page:1,entries:e.length,include:e},{data:r}=await h.fetchWallets(t);r&&r.forEach(e=>{m.excludedWallets.push({rdns:e.rdns,name:e.name})})},async searchWallet({search:e,badge:t}){let{includeWalletIds:r,excludeWalletIds:a}=C.OptionsController.state,o=d.ChainController.getRequestedCaipNetworkIds().join(",");m.search=[];let i={page:1,entries:100,search:e?.trim(),badge_type:t,include:r,exclude:a,chains:o},{data:s}=await h.fetchWallets(i);p.EventsController.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});let c=s.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...c.map(e=>h._fetchWalletImage(e)),n.CoreHelperUtil.wait(300)]),m.search=h._filterOutExtensions(s)},initPromise(e,t){let r=m.promises[e];return r||(m.promises[e]=t())},prefetch:({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:a=!0}={})=>Promise.allSettled([e&&h.initPromise("connectorImages",h.fetchConnectorImages),t&&h.initPromise("featuredWallets",h.fetchFeaturedWallets),r&&h.initPromise("recommendedWallets",h.fetchRecommendedWallets),a&&h.initPromise("networkImages",h.fetchNetworkImages)].filter(Boolean)),prefetchAnalyticsConfig(){C.OptionsController.state.features?.analytics&&h.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{let{isAnalyticsEnabled:e}=await w.get({path:"/getAnalyticsConfig",params:h._getSdkProperties()});C.OptionsController.setFeatures({analytics:e})}catch(e){C.OptionsController.setFeatures({analytics:!1})}},filterByNamespaces(e){if(!e?.length){m.featured=m.allFeatured,m.recommended=m.allRecommended;return}let t=d.ChainController.getRequestedCaipNetworkIds().join(",");m.featured=m.allFeatured.filter(e=>e.chains?.some(e=>t.includes(e))),m.recommended=m.allRecommended.filter(e=>e.chains?.some(e=>t.includes(e))),m.filteredWallets=m.wallets.filter(e=>e.chains?.some(e=>t.includes(e)))},clearFilterByNamespaces(){m.filteredWallets=[]},setFilterByNamespace(e){if(!e){m.featured=m.allFeatured,m.recommended=m.allRecommended;return}let t=d.ChainController.getRequestedCaipNetworkIds().join(",");m.featured=m.allFeatured.filter(e=>e.chains?.some(e=>t.includes(e))),m.recommended=m.allRecommended.filter(e=>e.chains?.some(e=>t.includes(e))),m.filteredWallets=m.wallets.filter(e=>e.chains?.some(e=>t.includes(e)))}}},944856,e=>{"use strict";e.s(["MathUtil",0,{interpolate(e,t,r){if(2!==e.length||2!==t.length)throw Error("inputRange and outputRange must be an array of length 2");let a=e[0]||0,o=e[1]||0,n=t[0]||0,i=t[1]||0;return r<a?n:r>o?i:(i-n)/(o-a)*(r-a)+n}}])},551831,240403,370019,592697,395375,370128,e=>{"use strict";let t,r,a;e.i(944856),e.i(195126);var o=e.i(527065),n=e.i(614931);function i(e,o){t=document.createElement("style"),r=document.createElement("style"),a=document.createElement("style"),t.textContent=l(e).core.cssText,r.textContent=l(e).dark.cssText,a.textContent=l(e).light.cssText,document.head.appendChild(t),document.head.appendChild(r),document.head.appendChild(a),s(o)}function s(e){r&&a&&("light"===e?(r.removeAttribute("media"),a.media="enabled"):(a.removeAttribute("media"),r.media="enabled"))}function c(e){t&&r&&a&&(t.textContent=l(e).core.cssText,r.textContent=l(e).dark.cssText,a.textContent=l(e).light.cssText)}function l(e){return{core:o.css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0,o.unsafeCSS)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,o.unsafeCSS)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,o.unsafeCSS)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,o.unsafeCSS)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,o.unsafeCSS)(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:o.css`
      :root {
        --w3m-color-mix: ${(0,o.unsafeCSS)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,o.unsafeCSS)((0,n.getW3mThemeVariables)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0,o.unsafeCSS)((0,n.getW3mThemeVariables)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:o.css`
      :root {
        --w3m-color-mix: ${(0,o.unsafeCSS)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,o.unsafeCSS)((0,n.getW3mThemeVariables)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0,o.unsafeCSS)((0,n.getW3mThemeVariables)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}let d=o.css`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,u=o.css`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,p=o.css`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;e.s(["colorStyles",0,p,"elementStyles",0,u,"initializeTheming",()=>i,"resetStyles",0,d,"setColorTheme",()=>s,"setThemeVariables",()=>c],240403);let C={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){try{return new URL(e).hostname}catch(e){return""}},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:a})=>e.length<=t+r?e:"end"===a?`${e.substring(0,t)}...`:"start"===a?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(t),a=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),o=100-3*Number(a?.replace("px","")),n=`${o}% ${o}% at 65% 40%`,i=[];for(let e=0;e<5;e+=1){let t=this.tintColor(r,.15*e);i.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
    --local-radial-circle: ${n}
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,a,o]=e;return[Math.round(r+(255-r)*t),Math.round(a+(255-a)*t),Math.round(o+(255-o)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e?e:"undefined"!=typeof window&&window.matchMedia&&"function"==typeof window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark",splitBalance(e){let t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber:(e,t,r)=>e.toString().length>=t?Number(e).toFixed(r):e};e.s(["UiHelperUtil",0,C],370019);var g=e.i(586295),w=e.i(653462),m=e.i(448036),h=e.i(454090);g.default.extend(m.default),g.default.extend(h.default);let f={...w.default,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},S=["January","February","March","April","May","June","July","August","September","October","November","December"];g.default.locale("en-web3-modal",f);let E={getMonthNameByIndex:e=>S[e],getYear:(e=new Date().toISOString())=>(0,g.default)(e).year(),getRelativeDateFromNow:e=>(0,g.default)(e).locale("en-web3-modal").fromNow(!0),formatDate:(e,t="DD MMM")=>(0,g.default)(e).format(t)};e.s(["DateUtil",0,E],592697);let A=["receive","deposit","borrow","claim"],b=["withdraw","repay","burn"],v={getTransactionGroupTitle(e,t){let r=E.getYear(),a=E.getMonthNameByIndex(t);return e===r?a:`${a} ${e}`},getTransactionImages(e){let[t,r]=e,a=!!t&&e?.every(e=>!!e.nft_info),o=e?.length>1;return e?.length!==2||a?o?e.map(e=>this.getTransactionImage(e)):[this.getTransactionImage(t)]:[this.getTransactionImage(r),this.getTransactionImage(t)]},getTransactionImage:e=>({type:v.getTransactionTransferTokenType(e),url:v.getTransactionImageURL(e)}),getTransactionImageURL(e){let t,r=!!e?.nft_info,a=!!e?.fungible_info;return e&&r?t=e?.nft_info?.content?.preview?.url:e&&a&&(t=e?.fungible_info?.icon?.url),t},getTransactionTransferTokenType:e=>e?.fungible_info?"FUNGIBLE":e?.nft_info?"NFT":void 0,getTransactionDescriptions(e){let t=e?.metadata?.operationType,r=e?.transfers,a=e?.transfers?.length>0,o=e?.transfers?.length>1,n=a&&r?.every(e=>!!e?.fungible_info),[i,s]=r,c=this.getTransferDescription(i),l=this.getTransferDescription(s);if(!a)return("send"===t||"receive"===t)&&n?[c=C.getTruncateString({string:e?.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),C.getTruncateString({string:e?.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"})]:[e.metadata.status];if(o)return r.map(e=>this.getTransferDescription(e)).reverse();let d="";return A.includes(t)?d="+":b.includes(t)&&(d="-"),[c=d.concat(c)]},getTransferDescription(e){let t="";return e&&(e?.nft_info?t=e?.nft_info?.name||"-":e?.fungible_info&&(t=this.getFungibleTransferDescription(e)||"-")),t},getFungibleTransferDescription(e){return e?[this.getQuantityFixedValue(e?.quantity.numeric),e?.fungible_info?.symbol].join(" ").trim():null},getQuantityFixedValue:e=>e?parseFloat(e).toFixed(3):null};function y(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:a}=t;return{kind:r,elements:a,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}e.s(["TransactionUtil",0,v],395375),e.s(["customElement",()=>y],370128),e.s([],551831)},27352,e=>{"use strict";e.i(195126);var t=e.i(453404),r=e.i(841066);e.i(775353);var a=e.i(88083);e.i(452283);var o=e.i(591846),n=e.i(240403),i=e.i(370128),s=e.i(527065);let c=s.css`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var l=function(e,t,r,a){var o,n=arguments.length,i=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n<3?o(i):n>3?o(t,r,i):o(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i};let d=class extends t.LitElement{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,r.html`<slot class=${(0,o.classMap)(e)}></slot>`}};d.styles=[n.resetStyles,c],l([(0,a.property)()],d.prototype,"variant",void 0),l([(0,a.property)()],d.prototype,"color",void 0),l([(0,a.property)()],d.prototype,"align",void 0),l([(0,a.property)()],d.prototype,"lineClamp",void 0),d=l([(0,i.customElement)("wui-text")],d),e.s([],27352)},187604,e=>{"use strict";e.i(195126);var t=e.i(453404),r=e.i(841066);e.i(775353);var a=e.i(88083),o=e.i(240403),n=e.i(370019),i=e.i(370128),s=e.i(527065);let c=s.css`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(e,t,r,a){var o,n=arguments.length,i=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n<3?o(i):n>3?o(t,r,i):o(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i};let d=class extends t.LitElement{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&n.UiHelperUtil.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&n.UiHelperUtil.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&n.UiHelperUtil.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&n.UiHelperUtil.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&n.UiHelperUtil.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&n.UiHelperUtil.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&n.UiHelperUtil.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&n.UiHelperUtil.getSpacingStyles(this.margin,3)};
    `,r.html`<slot></slot>`}};d.styles=[o.resetStyles,c],l([(0,a.property)()],d.prototype,"flexDirection",void 0),l([(0,a.property)()],d.prototype,"flexWrap",void 0),l([(0,a.property)()],d.prototype,"flexBasis",void 0),l([(0,a.property)()],d.prototype,"flexGrow",void 0),l([(0,a.property)()],d.prototype,"flexShrink",void 0),l([(0,a.property)()],d.prototype,"alignItems",void 0),l([(0,a.property)()],d.prototype,"justifyContent",void 0),l([(0,a.property)()],d.prototype,"columnGap",void 0),l([(0,a.property)()],d.prototype,"rowGap",void 0),l([(0,a.property)()],d.prototype,"gap",void 0),l([(0,a.property)()],d.prototype,"padding",void 0),l([(0,a.property)()],d.prototype,"margin",void 0),d=l([(0,i.customElement)("wui-flex")],d),e.s([],187604)},435828,e=>{"use strict";e.i(195126);var t=e.i(453404),r=e.i(841066);e.i(775353);var a=e.i(88083);e.i(149121);var o=e.i(352135);let n=new class{constructor(){this.cache=new Map}set(e,t){this.cache.set(e,t)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}};var i=e.i(240403),s=e.i(370128),c=e.i(527065);let l=c.css`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var d=function(e,t,r,a){var o,n=arguments.length,i=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n<3?o(i):n>3?o(t,r,i):o(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i};let u={add:async()=>(await e.A(283493)).addSvg,allWallets:async()=>(await e.A(450070)).allWalletsSvg,arrowBottomCircle:async()=>(await e.A(193008)).arrowBottomCircleSvg,appStore:async()=>(await e.A(79579)).appStoreSvg,apple:async()=>(await e.A(291455)).appleSvg,arrowBottom:async()=>(await e.A(39624)).arrowBottomSvg,arrowLeft:async()=>(await e.A(117359)).arrowLeftSvg,arrowRight:async()=>(await e.A(122309)).arrowRightSvg,arrowTop:async()=>(await e.A(8815)).arrowTopSvg,bank:async()=>(await e.A(156869)).bankSvg,browser:async()=>(await e.A(354362)).browserSvg,bin:async()=>(await e.A(544039)).binSvg,bitcoin:async()=>(await e.A(496682)).bitcoinSvg,card:async()=>(await e.A(621351)).cardSvg,checkmark:async()=>(await e.A(720)).checkmarkSvg,checkmarkBold:async()=>(await e.A(985105)).checkmarkBoldSvg,chevronBottom:async()=>(await e.A(101682)).chevronBottomSvg,chevronLeft:async()=>(await e.A(728619)).chevronLeftSvg,chevronRight:async()=>(await e.A(466082)).chevronRightSvg,chevronTop:async()=>(await e.A(988830)).chevronTopSvg,chromeStore:async()=>(await e.A(621076)).chromeStoreSvg,clock:async()=>(await e.A(724264)).clockSvg,close:async()=>(await e.A(547796)).closeSvg,compass:async()=>(await e.A(273541)).compassSvg,coinPlaceholder:async()=>(await e.A(818766)).coinPlaceholderSvg,copy:async()=>(await e.A(469759)).copySvg,cursor:async()=>(await e.A(292088)).cursorSvg,cursorTransparent:async()=>(await e.A(220748)).cursorTransparentSvg,circle:async()=>(await e.A(49150)).circleSvg,desktop:async()=>(await e.A(154495)).desktopSvg,disconnect:async()=>(await e.A(830183)).disconnectSvg,discord:async()=>(await e.A(354292)).discordSvg,ethereum:async()=>(await e.A(124913)).ethereumSvg,etherscan:async()=>(await e.A(194966)).etherscanSvg,extension:async()=>(await e.A(116197)).extensionSvg,externalLink:async()=>(await e.A(615976)).externalLinkSvg,facebook:async()=>(await e.A(385576)).facebookSvg,farcaster:async()=>(await e.A(635627)).farcasterSvg,filters:async()=>(await e.A(661673)).filtersSvg,github:async()=>(await e.A(831698)).githubSvg,google:async()=>(await e.A(761234)).googleSvg,helpCircle:async()=>(await e.A(57460)).helpCircleSvg,image:async()=>(await e.A(457634)).imageSvg,id:async()=>(await e.A(689211)).idSvg,infoCircle:async()=>(await e.A(783859)).infoCircleSvg,lightbulb:async()=>(await e.A(436139)).lightbulbSvg,mail:async()=>(await e.A(107407)).mailSvg,mobile:async()=>(await e.A(247978)).mobileSvg,more:async()=>(await e.A(577570)).moreSvg,networkPlaceholder:async()=>(await e.A(869284)).networkPlaceholderSvg,nftPlaceholder:async()=>(await e.A(167791)).nftPlaceholderSvg,off:async()=>(await e.A(111669)).offSvg,playStore:async()=>(await e.A(789159)).playStoreSvg,plus:async()=>(await e.A(305851)).plusSvg,qrCode:async()=>(await e.A(831090)).qrCodeIcon,recycleHorizontal:async()=>(await e.A(111229)).recycleHorizontalSvg,refresh:async()=>(await e.A(238174)).refreshSvg,search:async()=>(await e.A(175670)).searchSvg,send:async()=>(await e.A(962574)).sendSvg,swapHorizontal:async()=>(await e.A(305677)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await e.A(31467)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await e.A(311502)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await e.A(405040)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await e.A(913644)).swapVerticalSvg,solana:async()=>(await e.A(31781)).solanaSvg,telegram:async()=>(await e.A(534913)).telegramSvg,threeDots:async()=>(await e.A(853227)).threeDotsSvg,twitch:async()=>(await e.A(503894)).twitchSvg,twitter:async()=>(await e.A(686125)).xSvg,twitterIcon:async()=>(await e.A(885565)).twitterIconSvg,user:async()=>(await e.A(409160)).userSvg,verify:async()=>(await e.A(729623)).verifySvg,verifyFilled:async()=>(await e.A(113009)).verifyFilledSvg,wallet:async()=>(await e.A(612386)).walletSvg,walletConnect:async()=>(await e.A(109008)).walletConnectSvg,walletConnectLightBrown:async()=>(await e.A(109008)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await e.A(109008)).walletConnectBrownSvg,walletPlaceholder:async()=>(await e.A(595670)).walletPlaceholderSvg,warningCircle:async()=>(await e.A(462222)).warningCircleSvg,x:async()=>(await e.A(686125)).xSvg,info:async()=>(await e.A(654527)).infoSvg,exclamationTriangle:async()=>(await e.A(424054)).exclamationTriangleSvg,reown:async()=>(await e.A(425250)).reownSvg,"x-mark":async()=>(await e.A(51294)).xMarkSvg};async function p(e){if(n.has(e))return n.get(e);let t=(u[e]??u.copy)();return n.set(e,t),t}let C=class extends t.LitElement{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
      --local-aspect-ratio: ${this.aspectRatio}
    `,r.html`${(0,o.until)(p(this.name),r.html`<div class="fallback"></div>`)}`}};C.styles=[i.resetStyles,i.colorStyles,l],d([(0,a.property)()],C.prototype,"size",void 0),d([(0,a.property)()],C.prototype,"name",void 0),d([(0,a.property)()],C.prototype,"color",void 0),d([(0,a.property)()],C.prototype,"aspectRatio",void 0),C=d([(0,s.customElement)("wui-icon")],C),e.s([],435828)},20909,e=>{"use strict";e.i(187604),e.s([])},686999,e=>{"use strict";e.i(27352),e.s([])}]);