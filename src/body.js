const buildBody = () => {

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-div')

    class Project {
        constructor(title) {
            this.title = title
        }

        createStructure() {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project-div')

            const projectHeader = document.createElement('div');
            projectHeader.textContent = this.title;
            projectHeader.classList.add('project-header')
            projectDiv.appendChild(projectHeader)
            const header = document.createElement('p')
            header.textContent = this.title;
            header.classList.add('header');
            

            return projectDiv;
        }

        get structure() {
            return this.createStructure();
        }

    }

    const sample = new Project('Todo List')

    mainDiv.appendChild(sample.structure);

    return mainDiv;

}

export default buildBody;