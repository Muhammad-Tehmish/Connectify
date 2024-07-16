function toggleSettingsMenu() {
    var settingsMenu1 = document.querySelector('.settings-menu');
    var settingsMenu2 = document.querySelector('.settings-menu-2');
    
    if (settingsMenu1.style.display === 'none' && settingsMenu2.style.display === 'none') {
        settingsMenu1.style.display = 'block';
        settingsMenu2.style.display = 'block';
    } else {
        settingsMenu1.style.display = 'none';
        settingsMenu2.style.display = 'none';
    }
}



var darkBtn = document.getElementById('dark-btn');

darkBtn.onclick = function () {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}



if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}

