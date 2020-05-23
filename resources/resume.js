const projects = [{
    Name: 'TX Ranch RV Resort',
    Points: [
        'Word-Press based website',
        'Developed all branding & graphics for client',
        'Responsive Design'
    ],
    Site: 'https://txranchresort.com/',
    Logo: 'resources/images/Resume/TXR/TXR-HLogo.png',
    Thumbs: {
        Desktop: 'resources/images/Resume/TXR/TXR-DesktopThumb.png',
        Tablet: 'resources/images/Resume/TXR/TXR-TabletThumb.png',
        Phone: 'resources/images/Resume/TXR/TXR-PhoneThumb.png'
    }
},{
    Name: 'TX Ranch Event Center',
    Points: [
        'Word-Press based website',
        'Developed all branding & graphics for client',
        'Responsive Design'
    ],
    Site: 'https://txrancheventcenter.com/',
    Logo: 'resources/images/Resume/TXEC/TXEC-HLogo.png',
    Thumbs: {
        Desktop: 'resources/images/Resume/TXEC/TXEC-DesktopThumb.png',
        Tablet: 'resources/images/Resume/TXEC/TXEC-TabletThumb.png',
        Phone: 'resources/images/Resume/TXEC/TXEC-PhoneThumb.png'
    }
},{
    Name: 'TX Ranch RV Storage',
    Points: [
        'Word-Press based website',
        'Developed all branding & graphics for client',
        'Responsive Design'
    ],
    Site: 'https://www.txrvstorage.com/',
    Logo: 'resources/images/Resume/TXRS/TXRS-HLogo.png',
    Thumbs: {
        Desktop: 'resources/images/Resume/TXRS/TXRS-DesktopThumb.png',
        Tablet: 'resources/images/Resume/TXRS/TXRS-TabletThumb.png',
        Phone: 'resources/images/Resume/TXRS/TXRS-PhoneThumb.png'
    }
},{
    Name: 'BetaTron Electronics',
    Points: [
        'Pure HTML, CSS, & Javascript jQuery site',
        'Produced original video content & still photography',
    ],
    Site: 'http://betatronelectronics.com/',
    Logo: 'resources/images/Resume/BT/BetatronLogo.png',
    Thumbs: {
        Desktop: 'resources/images/Resume/BT/BT-DesktopThumb.png',
        Video: 'https://player.vimeo.com/video/230516963'
    }
}
];

function keyPoints(project){
    return project.Points.map(point =>{
        return `<li>${point}</li>`;
    }).join('');
}

function thumbs(project){
    let thumbHTML = [];
    if( project.Thumbs.Desktop ){
        thumbHTML.push(`
            <div class="desktop thumb">
                <img src=${project.Thumbs.Desktop} >
                <figcaption>
                    Desktop Design
                </figcaption>
            </div>`
        )
    }
    if( project.Thumbs.Tablet ){
        thumbHTML.push(`
            <div class="tablet thumb">
                <img src=${project.Thumbs.Tablet} >
                <figcaption>
                    Tablet Design
                </figcaption>
            </div>`
        )
    }  
    if( project.Thumbs.Phone ){
        thumbHTML.push(`
            <div class="phone thumb">
                <img src=${project.Thumbs.Phone} >
                <figcaption>
                    Phone Design
                </figcaption>
            </div>`
        )
    }
    console.log(thumbHTML);
    return thumbHTML.join('')
}

projects.forEach(project =>{
    let projectHTML = `
        <div class="proj topbar">

                <div class="logo">
                    <img src=${project.Logo}>
                </div>

                <div class="proj textbox">
                    <div class="proj text">
                        <h3>KEY POINTS</h3>
                        <ul>${keyPoints(project)}</ul>
                    </div>
                </div>

            </div>

            <div class="thumb box">
                ${thumbs(project)}
            </div>


            <a href=${project.Site} target="_blank">
                <button class="white">Vist Site ></button>
            </a>

        </div>`
    let container = document.getElementById('entryField');
    let entry = document.createElement('div');
    entry.className = 'proj window';
    entry.id = 'newEntry';
    entry.innerHTML = projectHTML;
    container.appendChild(entry);
});



/*
<div class="proj topbar">

<div class="logo">
    <img src=${project.Logo}>
</div>

<div class="proj textbox">
    <div class="proj text">
        <h3>KEY POINTS</h3>
        <ul>${keyPoints(project)}</ul>
    </div>
</div>

</div>

<div class="thumb box">

<div class="desktop thumb">
    <img src=${project.Thumbs.Desktop} >
    <figcaption>
        Desktop Design
    </figcaption>
</div>

<div class="tablet thumb">
    <img src=${project.Thumbs.Tablet} >
    <figcaption>
        Tablet Design
    </figcaption>
</div>

<div class="phone thumb">
    <img src=${project.Thumbs.Phone} >
    <figcaption>
        Mobile Design
    </figcaption>
</div>

</div>

<a href=${project.Site} target="_blank">
<button>Vist Site ></button>
</a>

</div>`
*/