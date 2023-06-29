function setData(data) {
  localStorage.setItem("browserCliper1", JSON.stringify(data));
}

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
  if (!localStorage.getItem("browserCliper1")) {
    localStorage.setItem("browserCliper1", JSON.stringify(data));
  } else {
    let dataFromLocal = JSON.parse(localStorage.getItem("browserCliper1"));
    dataFromLocal.Link = window.location.href;
    iframe.addEventListener("load", () => {
      iframe.contentWindow.postMessage(
        { key: "setData", value: dataFromLocal },
        "*"
      );
    });
  }
}
if (document.readyState === "complete") {
  document.addEventListener("click", (e) => {
    let element = e.target;
    const pathArray = [];
    let currentElement = element;

    while (currentElement !== document.body) {
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
      } else if (currentElement.parentNode.children) {
        console.log(currentElement.parentNode.tagName);
        const siblings = Array.from(currentElement.parentNode.children).filter(
          (sibling) => sibling.tagName === currentElement.tagName
        );

        if (siblings.length > 1) {
          const index = siblings.indexOf(currentElement) + 1;
          elementSelector += ":nth-child(" + index + ")";
        }
      }
      pathArray.unshift(elementSelector);
      currentElement = currentElement.parentNode;
    }

    console.log(pathArray.join("  "));
  });

  let userConfigue = getData();

  let defaultConfi = {
    welfair: {
      id: "www.wayfair.com",
      VendorProductName: "[data-hb-id=Heading]",
      ClientFacingProductName: "",
      Vendor: "",
      Link: "",
      Category: "",
      Tags: "",
      MSRP: "",
      SKU: "[data-enzyme-id=breadcrumbList]",
      Price: "[data-enzyme-id=PriceBlock]",
      Description: `meta[name="description"]`,
      Dimensions: "",
      MaterialFinish: "",
      EstLeadTime: "",
      EstShippingCost: "",
      GeneralNotes: "",
      Corouser: "[data-enzyme-id=InitialImage]",
      SelectImg: [],
    },
    pepperfry: {
      id: "www.pepperfry.com",
      VendorProductName: `[data-test="vip-product-info-container"]`,
      ClientFacingProductName: "",
      Vendor: "",
      Link: "",
      Category: "",
      Tags: "",
      MSRP: "",
      SKU: `[data-test="vipProductDetailsValue"]`,
      Price: "",
      Description: ``,
      Dimensions: "",
      MaterialFinish: "",
      EstLeadTime: "",
      EstShippingCost: "",
      GeneralNotes: "",
      Corouser: "",
      SelectImg: [],
    },
    ikea: {
      id: "'www.ikea.com'",
      VendorProductName: `'meta[og:title"]'`,
      ClientFacingProductName: "",
      Vendor: "",
      Link: "",
      Category: "",
      Tags: "",
      MSRP: "",
      SKU: "",
      Price: "",
      Description: `'meta[name="og:description"]'`,
      Dimensions: "",
      MaterialFinish: "",
      EstLeadTime: "",
      EstShippingCost: "",
      GeneralNotes: "",
      Corouser: "",
      SelectImg: [],
    },
    houzz: {
      id: "www.houzz.in",
      VendorProductName: "",
      ClientFacingProductName: "",
      Vendor: "",
      Link: "",
      Category: "",
      Tags: "",
      MSRP: "",
      SKU: "",
      Price: "",
      Description: `meta[name="description"]`,
      Dimensions: "",
      MaterialFinish: "",
      EstLeadTime: "",
      EstShippingCost: "",
      GeneralNotes: "",
      Corouser: "",
      SelectImg: [],
    },
  };
  // let userConfigue = {
  //   welfair: {
  //     id: "www.wayfair.com",
  //     VendorProductName: "[data-hb-id=Heading]",
  //     ClientFacingProductName: "",
  //     Vendor: "",
  //     Link: "",
  //     Category: "",
  //     Tags: "",
  //     MSRP: "",
  //     SKU: "[data-enzyme-id=breadcrumbList]",
  //     Price: "[data-enzyme-id=PriceBlock]",
  //     Description: `meta[name="description"]`,
  //     Dimensions: "",
  //     MaterialFinish: "",
  //     EstLeadTime: "",
  //     EstShippingCost: "",
  //     GeneralNotes: "",
  //     Corouser: "[data-enzyme-id=InitialImage]",
  //     SelectImg: [],
  //   },
  //   pepperfry: {
  //     id: "www.pepperfry.com",
  //     VendorProductName: "[data-hb-id=Heading]",
  //     ClientFacingProductName: "",
  //     Vendor: "",
  //     Link: "",
  //     Category: "",
  //     Tags: "",
  //     MSRP: "",
  //     SKU: "[data-enzyme-id=breadcrumbList]",
  //     Price: "[data-enzyme-id=PriceBlock]",
  //     Description: `meta[name="description"]`,
  //     Dimensions: "",
  //     MaterialFinish: "",
  //     EstLeadTime: "",
  //     EstShippingCost: "",
  //     GeneralNotes: "",
  //     Corouser: "[data-enzyme-id=InitialImage]",
  //     SelectImg: [],
  //   },
  //   ikea: {
  //     id: "'www.ikea.com'",
  //     VendorProductName: "[data-hb-id=Heading]",
  //     ClientFacingProductName: "",
  //     Vendor: "",
  //     Link: "",
  //     Category: "",
  //     Tags: "",
  //     MSRP: "",
  //     SKU: "[data-enzyme-id=breadcrumbList]",
  //     Price: "[data-enzyme-id=PriceBlock]",
  //     Description: `meta[name="description"]`,
  //     Dimensions: "",
  //     MaterialFinish: "",
  //     EstLeadTime: "",
  //     EstShippingCost: "",
  //     GeneralNotes: "",
  //     Corouser: "[data-enzyme-id=InitialImage]",
  //     SelectImg: [],
  //   },
  //   houzz: {
  //     id: "www.houzz.in",
  //     VendorProductName: "[data-hb-id=Heading]",
  //     ClientFacingProductName: "",
  //     Vendor: "",
  //     Link: "",
  //     Category: "",
  //     Tags: "",
  //     MSRP: "",
  //     SKU: "[data-enzyme-id=breadcrumbList]",
  //     Price: "[data-enzyme-id=PriceBlock]",
  //     Description: `meta[name="description"]`,
  //     Dimensions: "",
  //     MaterialFinish: "",
  //     EstLeadTime: "",
  //     EstShippingCost: "",
  //     GeneralNotes: "",
  //     Corouser: "[data-enzyme-id=InitialImage]",
  //     SelectImg: [],
  //   },
  // };

  let iframe = document.querySelector("#iframe");
  switch (window.location.host) {
    case "www.wayfair.com":
      postMessageToFrame(iframe, defaultConfi.welfair);
      break;
    case "www.ikea.com":
      postMessageToFrame(iframe, defaultConfi.ikea);
      break;
    case "www.houzz.in":
      postMessageToFrame(iframe, defaultConfi.houzz);
      break;
    case "www.pepperfry.com":
      postMessageToFrame(iframe, defaultConfi.pepperfry);
      break;
    case "localhost:8081":
      window.alert(window.location.hostname);
      break;

    default:
      window.alert("null");
      break;
  }

  window.addEventListener("message", (event) => {
    const { action, key } = event.data;
    if (action === "getUserData") {
      console.log("event.data", event.data);
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
        event.source.postMessage({ key: "updateData", value: pageData }, "*");
        // setData(pageData);
        userConfigue = pageData;
      }
    }

    if (action === "select text") {
      document.body.style.cursor = "crosshair";
      document.body.addEventListener("click", handleTextClick, { once: true });
    }

    const handleImgClick = (e) => {
      let clickEle = e.target;
      let imgSrc = "";
      if (clickEle.tagName === "IMG") {
        imgSrc = clickEle.src;
        let currentPage = getData();
        currentPage.SelectImg.push(imgSrc);
        event.source.postMessage({ key: "imgData", value: currentPage }, "*");
        // setData(currentPage);
        userConfigue = currentPage;
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
      setData(userConfigue);
      window.alert("data save sucessFully");
      removeCliper();
    }
  });
} else {
  window.alert("Please wait until the page loads.");
}
