chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "nanoExplain",
        title: "Nano Explain",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "nanoExplain") {
        const selectedText = info.selectionText;
        const prompt = `Explain this to me like i am 5: ${selectedText}`;

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: summarizeText,
            args: [prompt]
        });
    }
});

async function summarizeText(prompt) {
    try {
        const responseDiv = document.createElement('div');
        responseDiv.textContent = 'Processing...';
        document.body.appendChild(responseDiv);

        const session = await window.ai.createTextSession();
        const response = await session.prompt(prompt);

        responseDiv.textContent = response;
        alert(response);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

