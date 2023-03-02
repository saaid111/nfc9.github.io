async function readTag() {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();
      try {
        await ndef.scan();
        ndef.onreading = event => {
          const decoder = new TextDecoder();
          const targetUrl = "https://Apple.com";
          for (const record of event.message.records) {
            if (record.url === targetUrl) {
              const circle = document.querySelector(".circle"); // Replace ".circle" with the selector for the circle element you want to change
              circle.style.backgroundColor = "yellow";
              break; // Stop iterating through records since a match has been found
            }
          }
        }
      } catch(error) {
        consoleLog(error);
      }
    } else {
      consoleLog("Web NFC is not supported.");
    }
  }
  