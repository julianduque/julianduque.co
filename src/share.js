const initCopyLink = () => {
    const buttons = document.querySelectorAll("[data-copy-link]");
    buttons.forEach((button) => {
        const label = button.querySelector("[data-copy-label]");
        const original = label ? label.textContent : "";
        let timer = null;

        button.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(location.href);
                if (label) {
                    label.textContent = "Copied";
                }
            } catch {
                if (label) {
                    label.textContent = "Copy failed";
                }
            }
            clearTimeout(timer);
            timer = setTimeout(() => {
                if (label) {
                    label.textContent = original;
                }
            }, 1600);
        });
    });
};

export { initCopyLink };
