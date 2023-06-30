function getData() {
  return JSON.parse(localStorage.getItem("browserCliper1"));
}

function removeCliper() {
  let frameCon = document.querySelector("#container");
  let browserScript = document.querySelector("#browserScript");
  browserScript.remove();
  frameCon.remove();
}

function setPath(element) {
  const pathArray = [];
  let currentElement = element;

  while (currentElement !== document.body && currentElement !== null) {
    let elementSelector = currentElement.tagName.toLowerCase();

    if (
      currentElement.id &&
      !currentElement.id.includes(":") &&
      !currentElement.id.includes("#")
    ) {
      elementSelector += "#" + currentElement.id;
    } else if (currentElement.classList.length > 0) {
      const classNames = Array.from(currentElement.classList).filter(
        (className) => !className.includes(":") && !className.includes(".")
      );
      elementSelector += "." + classNames.join(".");
    }
    pathArray.unshift(elementSelector);
    currentElement = currentElement.parentNode;
  }

  return pathArray.join("  ");
}

function postMessageToFrame(iframe, data) {
  iframe.contentWindow.postMessage({ key: "sentData", value: data }, "*");
}
function getElementPath(e) {
  // Get the root element.
  const element = e.target;
  // Create an array to store the element path.
  let elementPath = [];
  // Check if the element has an id.
  if (element.id) {
    elementPath.push("#" + element.id);
  } else {
    // Check if the element has a class.
    if (element.classList.length) {
      elementPath.push(".", element.className);
    } else {
      // Check if the element has a parent.
      if (element.parentNode) {
        // Get the element path for the parent element.
        const parentPath = getElementPath(element.parentNode);
        // Add the element to the element path.
        elementPath.push(element);
        // Add the parent path to the element path.
        elementPath = elementPath.concat(parentPath);
      }
    }
  }
  // Return the element path.
  // console.log(elementPath);
}
if (document.readyState === "complete") {
  document.addEventListener("click", getElementPath);

  let iframe = document.querySelector("#iframe");

  iframe.addEventListener("load", () => {
    switch (window.location.host) {
      case "www.wayfair.com":
        postMessageToFrame(iframe, window.location.host);
        break;
      case "www.ikea.com":
        postMessageToFrame(iframe, window.location.host);
        break;
      case "www.houzz.in":
        postMessageToFrame(iframe, window.location.host);
        break;
      case "www.pepperfry.com":
        postMessageToFrame(iframe, window.location.host);
        break;
      case "localhost:8081":
        window.alert(window.location.hostname);
        break;

      default:
        window.alert("visit some Other Page");
        break;
    }
  });

  window.addEventListener("message", (event) => {
    const { action, key } = event.data;
    if (action === "getUserData") {
      let browserData = {};
      if (key) {
        for (let [keys, value] of Object.entries(key)) {
          if (
            value &&
            value !== "" &&
            keys !== "id" &&
            keys !== "Link" &&
            keys !== "Corouser" &&
            keys !== "SelectImg"
          ) {
            let ele = document.querySelector(value);
            if (value === 'meta[name="description"]') {
              browserData[keys] = ele ? ele.content : "";
            } else {
              browserData[keys] = ele ? ele.innerText : "";
            }
          } else if (keys === "Corouser") {
            if (value && value !== []) {
              let imgArray = Array.from(document.querySelectorAll(value)) || [];
              imgArray = imgArray.map((val) => val.src);
              browserData[keys] = imgArray;
            }
          } else {
            browserData[keys] = key[keys];
          }
        }
      }
      event.source.postMessage({ key: "browserData", value: browserData }, "*");
    }
    function handleTextClick(e) {
      const clickedElement = e.target;
      const selectedText = clickedElement.innerText;

      if (selectedText !== "" && selectedText !== undefined) {
        document.body.style.cursor = "pointer";
        document.body.style.cursor = "default";
        let pageData = getData();
        pageData[key] = setPath(e.target);
        event.source.postMessage(
          {
            key: "updateData",
            value: {
              keys: key,
              path: setPath(e.target),
              id: window.location.host,
            },
          },
          "*"
        );
      }
    }

    if (action === "select text") {
      document.body.style.cursor = "crosshair";
      document.body.addEventListener("click", handleTextClick, { once: true });
    }

    const handleImgClick = (e) => {
      let clickEle = e.target;
      if (clickEle.tagName === "IMG") {
        let imgSrc = clickEle.src;

        event.source.postMessage(
          { key: "imgData", value: { id: window.location.host, imgSrc } },
          "*"
        );
      } else {
        window.alert("Please select a proper image");
      }
      document.body.style.cursor = "default";
    };

    if (action === "select image") {
      document.body.style.cursor = "crosshair";
      document.body.addEventListener("click", handleImgClick, { once: true });
    }

    if (action === "delete frame") {
      removeCliper();
    }
    if (action === "save change") {
      event.source.postMessage(
        { key: "updateDataToUserConfigue", value: "" },
        "*"
      );
      window.alert("data save sucessFully");
      // removeCliper();
    }
  });
} else {
  window.alert("Please wait until the page loads.");
}
