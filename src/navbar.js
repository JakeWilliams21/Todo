const buildNav = () => {

    const navDiv = document.createElement('div');
    navDiv.classList.add('nav-div');

    const navTitle = document.createElement('h2');
    navTitle.textContent = 'Todo List'
    navTitle.classList.add('nav-title')
    navDiv.appendChild(navTitle)

    return navDiv;
}

export default buildNav;