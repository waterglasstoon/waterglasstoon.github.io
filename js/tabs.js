window.addEventListener('load', function () {
    const tabLinks = document.querySelectorAll('#home-top-nav > li > a');
    Array.prototype.forEach.call(tabLinks, function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let liTab = link.parentNode;
            let allTabsId = liTab.dataset.tabs;
            if (allTabsId) {
                let tabs = document.getElementById(allTabsId);
                Array.prototype.forEach.call(tabs.children, function (tab) {
                    if (!tab.className.includes("hide")) {
                        tab.classList.add('hide');
                    }
                })
            }

            let tabId = liTab.dataset.tab;
            if (tabId) {
                let targetTab = document.getElementById(tabId);
                if (targetTab.className.includes("hide")) {
                    targetTab.classList.remove("hide");
                }
            }
        }, false);
    });
});
