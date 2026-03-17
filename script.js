function showTab(event, tabId) {
    var contents = document.getElementsByClassName("content-panel");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
        contents[i].classList.remove("active");
    }

    var buttons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = "block";
        selectedTab.classList.add("active");
    }

    event.currentTarget.classList.add("active");
}

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.textContent.toLowerCase().trim();

        galleryItems.forEach(item => {
            if (filterValue === 'all') {
                item.classList.remove('hide');
            } else if (filterValue === 'events & volunteering') {
                item.classList.contains('events') ? item.classList.remove('hide') : item.classList.add('hide');
            } else {
                item.classList.contains(filterValue) ? item.classList.remove('hide') : item.classList.add('hide');
            }
        });
    });
});