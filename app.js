console.log("js is working")
console.log("one more time to be sure")

// Package Array

const packages = [{
    priorityLevel: "standard",
    isFragile: false,
    weight: 6,
    to: "Hades, God of the Underworld",
    trackingNumber: "666hell"
},
{
    priorityLevel: "priority",
    isFragile: true,
    weight: 1,
    to: "Persephone, Goddess of Spring and Death",
    trackingNumber: "1800princess"
},
{
    priorityLevel: "standard",
    isFragile: false,
    weight: 8,
    to: "Artemis, Goddess of the Hunt",
    trackingNumber: "1rabbit2wolves"
}, {
    priorityLevel: "standard",
    isFragile: false,
    weight: 50,
    to: "Ares, God of War",
    trackingNumber: "789opps"
}
    , {
    priorityLevel: "priority",
    isFragile: true,
    weight: 3,
    to: "Aphrodite, Goddess of Love and Beauty",
    trackingNumber: "1111starcrossed"
}
    , {
    priorityLevel: "priority",
    isFragile: false,
    weight: 100,
    to: "Apollo, God of Music, Poetry, and Prophecy",
    trackingNumber: "8sun8kissed8"
}
    , {
    priorityLevel: "standard",
    isFragile: false,
    weight: 6,
    to: "Hera, Goddess of Marriage and Heaven",
    trackingNumber: "7sky767"
},
]

// STUB drawPackages

function drawPackages() {
    let packagesElm = document.getElementById('packages')
    let template = ''
    packages.forEach(package => template += `
    <div class="col-6"> TO: ${package.to} </div>
    <div class="col-6"> TRACKING: ${package.trackingNumber} </div>
    `)
    packagesElm.innerHTML = template
}

drawPackages();

function filterHeavy() {
    let template = ""
    let heavyPackages = packages.filter(package => package.weight >= 50)
    console.log('Heavy Packages', heavyPackages);
    heavyPackages.forEach(package => template += `
    <div class="col-6"> TO: ${package.to} </div>
    <div class="col-6"> TRACKING: ${package.trackingNumber} </div>
    `)
    document.getElementById("packages").innerHTML = template
}

function filterFragile() {
    let template = ""
    let fragilePackages = packages.filter(package => package.isFragile == true)
    console.log('Fragile Packages', fragilePackages);
    fragilePackages.forEach(package => template += `
    <div class="col-6"> TO: ${package.to} </div>
    <div class="col-6"> TRACKING: ${package.trackingNumber} </div>
    `)
    document.getElementById("packages").innerHTML = template
}

function drawStandard(normal) {
    let template = ""
    let standardP = packages.filter(package => package.priorityLevel == normal)
    console.log(standardP);
    standardP.forEach(package => template += `
    <div class="col-6"> TO: ${package.to} </div>
    <div class="col-6"> TRACKING: ${package.trackingNumber} </div>
    `)
    document.getElementById("packages").innerHTML = template
}


