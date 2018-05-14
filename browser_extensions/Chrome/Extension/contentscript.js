if (document.getElementsByTagName("html")[0].getAttribute("ufr") != null) {

    var actualCode = 'function ufResponse(){return JSON.parse(window.sessionStorage["response"]);}function ufRequest(e,n){var t=new CustomEvent("send-ufr",{detail:e,bubbles:!0,cancelable:!0});document.dispatchEvent(t);var u=0;document.addEventListener("get-ufr",function(e){0==u&&n(e),u++})}';
    var script = document.createElement('script');
    script.textContent = actualCode;
    (document.head || document.documentElement).appendChild(script);

	/*var r = document.createElement("response");
		r.id="respTemporary";
		    document.body.appendChild(r);*/
			
    document.addEventListener("send-ufr", function (data) {
        var request = data.detail;
        //console.info(request);
       // chrome.runtime.sendMessage(request, null);
        chrome.runtime.sendMessage(request);
    });

    chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
			window.sessionStorage["response"] = JSON.stringify(response);
			//var rsp = JSON.stringify(response);
	
				//document.getElementById('respTemporary').dataset.resp = rsp; 
        var event = new CustomEvent("get-ufr", {
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
    });


}

chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.method == "getHTML")
        if (document.getElementsByTagName("html")[0].getAttribute("ufr") != null) {
            sendResponse({data: "yes"})
        }
        else {
            sendResponse({data: "no"})

        }
    else
        sendResponse({});
});