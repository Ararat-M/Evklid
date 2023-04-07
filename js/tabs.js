document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tab__item-btn").forEach((item) => {
        item.addEventListener("click", (event) => {
            document.querySelectorAll(".tab__item-btn").forEach((content) => {
                content.classList.remove("tab__item-btn_active")
            })
            document.querySelectorAll(".tab__content").forEach((content) => {
                content.classList.remove("tab__content_active")
            })

            event.currentTarget.classList.add("tab__item-btn_active")
            const path = event.currentTarget.dataset.path;

            document.querySelector(`[data-target="${path}"]`).classList.add("tab__content_active")
        })
    })
})