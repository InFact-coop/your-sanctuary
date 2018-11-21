const initScript = () => {
  if (window.$crisp) {
    return window.$crisp.push(["do", "chat:open"])
  }
  return setImmediate(initScript) // eslint-disable-line
}

const reloadCrispSession = () => {
  window.$crisp.push(["do", "session:reset", [false]])
}

const insertCrispScript = () => {
  const uuid = sessionStorage.getItem("uuid")
    ? sessionStorage.getItem("uuid")
    : ""

  if (!window.$crisp) {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `$crisp = [];CRISP_TOKEN_ID = '${uuid}';CRISP_WEBSITE_ID = "eb431f6c-af5b-4a5b-8822-b71066070599";(function(){d=document;s=d.createElement('script');s.src='//client.crisp.chat/l.js';s.async=1;d.getElementsByTagName('head')[0].appendChild(s);})();`
    document.head.appendChild(script)
  }
}

export { initScript, reloadCrispSession, insertCrispScript }
