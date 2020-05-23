const skills = [{
    name: 'HTML',
    logo: 'resources/images/icons/html.png'
},{
    name: 'CSS',
    logo: 'resources/images/icons/css.png'
},{
    name: 'JavaScript',
    logo: 'resources/images/icons/js.png'
},{
    name: 'React',
    logo: 'resources/images/icons/react.png'
},{
    name: 'WordPress',
    logo: 'resources/images/icons/wordpress.png'
},{
    name: 'GitHub',
    logo: 'resources/images/icons/github.png'
},{
    name: 'Visual Studio Code',
    logo: 'resources/images/icons/vscode.png'
},{
    name: 'Atom',
    logo: 'resources/images/icons/atom.png'
},{
    name: 'Adobe Creative Suite',
    logo: 'resources/images/icons/adobe.png'
}]

skills.forEach(skillitem => {
    let skillHTML = `
        <div class="skilllogo">
        </div>
        <img class="skilllogo" src=${skillitem.logo}></div>
        <h3>
            ${skillitem.name}
        </h3>`
    let container = document.getElementById('skillslist');
    let skill = document.createElement('div');
    skill.className = 'skillbox';
    skill.innerHTML = skillHTML;
    container.appendChild(skill)
});