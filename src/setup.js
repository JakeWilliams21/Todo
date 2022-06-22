import buildNav from "./navbar";
import buildBody from "./body";

const setupPage = () => {

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content')

    contentDiv.appendChild(buildNav())
    contentDiv.appendChild(buildBody())

    return contentDiv;

}

export default setupPage;
