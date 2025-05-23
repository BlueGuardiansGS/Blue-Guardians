window.watsonAssistantChatOptions = {
  integrationID: "ea6ff741-dfc6-4a9d-8df8-7d0f3d055813", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "fff86d85-1a9e-4e63-b2e5-22495dbd3b6d", // The ID of your service instance.
  onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});