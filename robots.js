

const legs = [
    sillyWheel = {
        drawMe: function (x, body) {
            //
            let wheelHeight = (100 - body.legY) * 5 / 6;

            let axleY = 100 - (wheelHeight / 2)

            let blob = x.rect((100 - 2 * body.legX), (3 / 4) * (100 - body.legY)).move(body.legX, body.legY);
            blob.addClass("botSVGprimaryNoOutline");

            axleWidth = 6;
            let axle = x.rect((100 - body.legX), axleWidth).move(body.legX / 2, axleY - (axleWidth / 2));
            axle.addClass('botSVGprimaryNoOutline');

            wheelWidth = 8;

            let leftWheel = x.rect(wheelWidth, wheelHeight).move(body.legX / 2 + 2, 100 - wheelHeight);
            leftWheel.addClass('botSVGprimaryNoOutline');

            let rightWheel = x.rect(wheelWidth, wheelHeight).move(100 - (body.legX / 2) - 2 - wheelWidth, 100 - wheelHeight);

            rightWheel.addClass('botSVGprimaryNoOutline');

        },
        type: 'legs',
        hasFeet: false
    }
    ,
    twoStickLegs = {
        drawMe: function (x, body) {
            let legWidth = body.legX / 6.0;

            let leftLeg = x.rect(legWidth, 100 - body.legY).move(body.legX - (legWidth / 2.0), body.legY);
            let rightLegX = 100.0 - body.legX;
            let rightLeg = x.rect(legWidth, 100 - body.legY).move(rightLegX - (legWidth / 2.0), body.legY);
            leftLeg.addClass("botSVGprimaryNoOutline");
            rightLeg.addClass("botSVGprimaryNoOutline")
        },
        type: 'legs',
        hasFeet: true
    },
    twoBandyLegs = {
        drawMe: function (x, body) {
            let legWidth = body.legX / 6.0;

            let leftLeg = x.polygon(`${body.legX - (legWidth / 2.0)},${body.legY} ${0.8 * body.legX - (legWidth / 2.0)}, ${body.legY + ((100 - body.legY) / 2.0)}  ${body.legX - (legWidth / 2.0)},100 ${body.legX + (legWidth / 2.0)},100 ${0.8 * body.legX + (legWidth / 2.0)},${body.legY + ((100 - body.legY) / 2.0)}  ${body.legX + (legWidth / 2.0)}, ${body.legY}`);
            //let rightLegX = 100.0 - body.legX;
            //let rightLeg = x.rect(legWidth, 100 - body.legY).move(rightLegX - (legWidth / 2.0), body.legY);
            leftLeg.addClass("botSVGprimaryNoOutline");
            let rightLeg = x.polygon(
                `${(100.0 - body.legX) + (legWidth / 2.0)},${body.legY} 
                  ${(100 - (0.8 * body.legX)) + (legWidth / 2.0)}, ${body.legY + ((100 - body.legY) / 2.0)}  
                  ${(100.0 - body.legX) + (legWidth / 2.0)},100 
                  ${(100.0 - body.legX) - (legWidth / 2.0)},100 
                  ${100.0 - (0.8 * body.legX) - (legWidth / 2.0)},${body.legY + ((100 - body.legY) / 2.0)}  ${(100 - body.legX) - (legWidth / 2.0)}, ${body.legY}`);
            //let rightLegX = 100.0 - body.legX;
            //let rightLeg = x.rect(legWidth, 100 - body.legY).move(rightLegX - (legWidth / 2.0), body.legY);
            rightLeg.addClass("botSVGprimaryNoOutline");


        },
        type: 'legs',
        hasFeet: true
    }

];


//feet should be below legX and start at 0.
const feet = [
    flatFeet = {
        drawMe: function (x, body) {
            let footWidth = body.legX / 2.5;
            let footHeight = (100 - body.legY) / 3.0;
            let leftFoot = x.rect(footWidth, footHeight).move(body.legX - footWidth - 2, 100 - footHeight);
            let rightFoot = x.rect(footWidth, footHeight).move((100 - body.legX) - 2 + (body.legX / 12), 100 - footHeight);
            leftFoot.addClass("botSVGprimaryNoOutline");
            rightFoot.addClass("botSVGprimaryNoOutline")
        },
        type: 'feet'
    },
    pointyFeet = {
        drawMe: function (x, body) {
            let footWidth = body.legX / 2.5;
            let footHeight = (100 - body.legY) / 3.0;
            let leftFoot = x.polygon(`${body.legX}, ${100 - footHeight} ${body.legX - footWidth}, 100 ${body.legX}, 100`);
            leftFoot.addClass("botSVGprimaryNoOutline");
            let rightFoot = x.polygon(`${100 - body.legX}, ${100 - footHeight} ${100 - body.legX + footWidth}, 100, ${100 - body.legX}, 100`);
            rightFoot.addClass("botSVGprimaryNoOutline");

            //            rightFoot.addClass("botSVGprimaryNoOutline")
        },
        type: 'feet'
    }
];

//these are object factories, so hand position can depend on body.
const arms = [
    rightAngleArm = function (body) {
        return {
            drawMe: function (x) {
                let armWidth = Math.min(6.0, body.armX / 3.0);

                let leftArm = x.polygon(`
            ${body.armX},${body.armY - (armWidth / 2)} 
            ${body.armX - 2 * armWidth},${body.armY - (armWidth / 2)} 
            ${body.armX - 2 * armWidth},${body.armY - (armWidth / 2) + ((100 - body.armY) * 0.5)} 
            ${body.armX - armWidth},${body.armY - (armWidth / 2) + ((100 - body.armY) * 0.5)} 
            ${body.armX - armWidth},${body.armY + (armWidth / 2)} 
            ${body.armX},${body.armY + (armWidth / 2)} 
            `);
                leftArm.addClass("botSVGprimaryNoOutline");

                let rightArm = x.polygon(`
                ${100 - body.armX},${body.armY - (armWidth / 2)} 
                ${(100 - body.armX) + 2 * armWidth},${body.armY - (armWidth / 2)} 
                ${(100 - body.armX) + 2 * armWidth},${body.armY - (armWidth / 2) + ((100 - body.armY) * 0.5)} 
                ${(100 - body.armX) + armWidth},${body.armY - (armWidth / 2) + ((100 - body.armY) * 0.5)} 
                ${(100 - body.armX) + armWidth},${body.armY + (armWidth / 2)} 
                ${100 - body.armX},${body.armY + (armWidth / 2)} 
                `);
            },
            type: 'arms',
            handX: body.armX - 1.5 * (Math.min(6.0, body.armX / 3.0)),
            handY: body.armY - ((Math.min(6.0, body.armX / 3.0)) / 2) + ((100 - body.armY) * 0.5),
            hasHands: true
        }
    }

];

const hands = [


    circleHand = {
        drawMe: function (x, arms) {
            let dia = Math.min(arms.handX, 10);
            let c = x.circle(dia).move(arms.handX - dia / 2, arms.handY - dia / 2)
            c.addClass("botSVGprimaryNoOutline");
            let c2 = x.circle(dia / 2).move(arms.handX - dia / 4, arms.handY - dia / 4);
            c2.addClass("botSVGinverseNoOutline");
            let c3 = x.circle(dia).move((100 - arms.handX) - dia / 2, arms.handY - dia / 2)
            c3.addClass("botSVGprimaryNoOutline");
            let c4 = x.circle(dia / 2).move((100 - arms.handX) - dia / 4, arms.handY - dia / 4);
            c4.addClass("botSVGinverseNoOutline");
        },
        type: 'hands'
    }
];

//This array returns some object factories.
//as eye positions etc. neeed to be dynamic with body
const heads = [
    /* saucer_head_on_a_stick = {
         drawMe: function (x, body) {
             const max_size = body.headY;
             const diameter = max_size * 2 / 3;
             const neck = max_size * 1 / 3;
             let myHead = x.path(`M ${ body.headX - 1 } ${ body.headY } l 0 ${- 1 * neck} l`)
         },
         eyesMaxH:
             eyesMaxW :
         eyesX:
             eyesY :
         eyesType: 'one',
         type: 'head'
     },*/
    squareHeadNoStick = function (body) {
        return {
            drawMe: (x) => {
                const head_width = body.headX / 4.0;
                const head_height = body.headY - 2;
                let myHead = x.path(` M ${body.headX} ${body.headY} l ${- 1.0 * head_width} 0 l 0 ${-1.0 * head_height} l ${2.0 * head_width} 0 l 0 ${head_height} Z`);
                myHead.addClass("botSVGprimaryNoOutline");
            },
            eyesMaxH: (body.headY - 2) / 3,
            eyesMaxW: (body.headX / 4.0) * 3 / 4,
            eyesX: body.headX,
            eyesY: body.headY - (2 / 3 * (body.headY - 2)),
            eyesType: 'one',
            type: 'head'
        }
    },
    benderHead = function (body) {
        return {
            drawMe: (x) => {
                const head_width = body.headX / 4.0;
                const head_height = body.headY / 2.0;
                let myHead = x.path(` M ${body.headX} ${body.headY} l ${-1.0 * head_width} 0 l 0 ${-1.0 * head_height} q ${head_width} ${-2 * head_height} ${2.0 * head_width} 0 l 0 ${head_height} Z`);
                myHead.addClass("botSVGprimaryNoOutline");
            },
            eyesMaxH: (body.headY - 2) / 3,
            eyesMaxW: (body.headX / 4.0) * 3 / 4,
            eyesX: body.headX,
            eyesY: body.headY - (2 / 3 * (body.headY - 2)),
            eyesType: 'one',
            type: 'head'
        }
    },
    bigCircleHead = function (body) {
        return {
            drawMe: (x) => {
                const head_width = body.headX / 3.0;
                let myHead = x.path(`M ${body.headX} ${body.headY} l ${-1.0 * head_width} 0 q ${head_width} ${-2.0 * body.headY} ${2 * head_width} 0 l ${-1.0 * head_width} 0 Z`);
                myHead.addClass("botSVGprimaryNoOutline");
            },
            eyesMaxH: body.headY * 5 / 9,
            eyesMaxW: body.headX / 4.0,
            eyesX: body.headX,
            eyesY: body.headY * 1 / 3,
            eyesType: 'one',
            type: 'head'
        }
    },
    rectangle_head_on_a_stick = function (body) {
        return {
            drawMe: (x) => {
                const max_sizeY = body.headY;
                const head_height = max_sizeY * 2 / 3;
                const neck = max_sizeY * 1 / 3;
                const head_width = body.headX / 4.0;
                const neck_width = head_width / 5.0;
                let myHead = x.path(`
M ${body.headX - neck_width} ${body.headY} l 0 ${-1 * neck} l ${(-1 * head_width) + neck_width} 0 l 0 ${-1 * head_height} l ${2 * head_width} 0 l 0 ${head_height} l ${(-1 * head_width) + neck_width} 0 l 0 ${neck} Z`);
                myHead.addClass("botSVGprimaryNoOutline");
            },
            eyesMaxH: body.headY * 5 / 9,
            eyesMaxW: body.headX / 4.0,
            eyesX: body.headX,
            eyesY: body.headY * 1 / 3,
            eyesType: 'one',
            type: 'head'
        }
    }
];

/* EYE objects: drawME needs SVG and body or head object as parameters*/
/* eyesType: one implies I can draw eyes either as a single panel of tjhe specified dimensions
/* or as two separate eyes, if I want.
/* eyesType: two means I must draw separate eyes at x1, y1 and x2, y2.*/

//I currently assume that all bodyObjects accept 'one eye' eyes

const eyes = [
    one_round_eye = {
        drawMe: function (x, body) {
            let diameter = Math.min(body.eyesMaxH, body.eyesMaxW);
            let radius = diameter / 2;
            let c1 = x.circle(diameter).move(body.eyesX - radius, body.eyesY - radius);
            const small_diameter = diameter * 3 / 4;
            const small_radius = small_diameter / 2.0;
            let c2 = x.circle(small_diameter).move(body.eyesX - small_radius, body.eyesY - small_radius);
            c1.addClass("botSVGprimaryOutline");
            c2.addClass("botSVGinverseOutline");
        },
        type: 'eye'
    },
    two_eyes = {
        drawMe: function (x, body) {
            let diameter = Math.min(body.eyesMaxH, body.eyesMaxW) - 1;
            let radius = diameter / 2;
            //left eye
            const c1 = x.circle(diameter).move(body.eyesX - radius - ((body.eyesMaxW - 2) / 2) - 1, body.eyesY - radius);
            const c2 = x.circle(diameter).move(body.eyesX - radius + ((body.eyesMaxW - 2) / 2) + 1, body.eyesY - radius);
            c1.addClass("botSVGprimaryOutline");
            c2.addClass("botSVGprimaryOutline");
            const small_diameter = diameter * 3 / 4;
            const small_radius = small_diameter / 2.0;
            const c3 = x.circle(small_diameter).move(body.eyesX - small_radius - ((body.eyesMaxW - 2) / 2) - 1, body.eyesY - small_radius);
            const c4 = x.circle(small_diameter).move(body.eyesX - small_radius + ((body.eyesMaxW - 2) / 2) + 1, body.eyesY - small_radius);
            c3.addClass("botSVGinverseOutline");
            c4.addClass("botSVGinverseOutline");

        },
        type: 'eye'
    },
    box_eye = {
        drawMe: function (x, body) {
            const r1 = x.rect(body.eyesMaxW, body.eyesMaxH * 2 / 3).move(body.eyesX - (body.eyesMaxW * 0.5), body.eyesY - (body.eyesMaxH * 1 / 3))
            r1.addClass("botSVGinverseNoOutline");
            const lineGap = body.eyesMaxW * 0.2;
            const wavyLine = x.path(` M ${body.eyesX - (body.eyesMaxW / 2) + lineGap} ${body.eyesY} l  ${body.eyesMaxW - (2 * lineGap)} 0`);
            wavyLine.addClass("botSVGinverseOutline");
        }
    }
];

const twoEyes = [];
/*
BODY OBJECTS - include drawMe function , passed SVG element object as first parameter
 armX, armY, legX, legY - assume vertical symmetry, so draw legs/arms at X and 100-X.
 panelX, panelY, panelMaxD, panelOnBodyOK - X, Y and diameter of control panel, of possible
 headX, headY - position of head connector -
 eyesX, eyesY, eyesMaxH, eyesMaxW, eyesOnBodyOK - center and max H / W of eyes if on body

*/

const panels = [
    squarePanel = {
        drawMe: function (x, body) {
            let r1 = x.rect(body.panelMaxD, body.panelMaxD).move(body.panelX - (body.panelMaxD / 2.0), body.panelY - (body.panelMaxD / 2.0))
            r1.addClass("botSVGprimaryOutline");
            let myD = body.panelMaxD * 3 / 4;
            let r2 = x.rect(myD, myD).move(body.panelX - (myD / 2.0), body.panelY - (myD / 2.0))
            r2.addClass("botSVGprimaryOutline");
            myD = body.panelMaxD * 1 / 2;
            let r3 = x.rect(myD, myD).move(body.panelX - (myD / 2.0), body.panelY - (myD / 2.0))
            r3.addClass("botSVGinverseNoOutline");

        },
        type: 'panel'
    },
    grillPanel = {
        drawMe: function (x, body) {
            let r1 = x.rect(body.panelMaxD, body.panelMaxD).move(body.panelX - (body.panelMaxD / 2.0), body.panelY - (body.panelMaxD / 2.0))
            r1.addClass("botSVGprimaryOutline");
            //top LHS of box
            let startX = body.panelX - (body.panelMaxD / 2.0);
            let startY = body.panelY - (body.panelMaxD / 2.0);
            let endX = body.panelX - (body.panelMaxD / 2.0);
            let endY = body.panelY + (body.panelMaxD / 2.0);
            let xIncrement = body.panelMaxD / 6.0;

            //draw some lines
            for (let i = 0; i != 5; i++) {
                startX += xIncrement;
                endX += xIncrement;
                let gridLine = x.line(startX, startY, endX, endY).stroke({ width: 1 });
                gridLine.addClass("botSVGprimaryOutline");
            }


        },
        type: 'panel'
    },
    dotPanel = {
        drawMe: function (x, body) {
            let r1 = x.rect(body.panelMaxD, body.panelMaxD).move(body.panelX - (body.panelMaxD / 2.0), body.panelY - (body.panelMaxD / 2.0))
            r1.addClass("botSVGprimaryOutline");
            //top LHS of box
            let startX = body.panelX - (body.panelMaxD / 2.0);
            let startY = body.panelY - (body.panelMaxD / 2.0);

            let xIncrement = body.panelMaxD / 4.0;
            let dia = body.panelMaxD / 6.0;
            //draw some lines
            for (let i = 1; i != 4; i++) {
                startX += xIncrement;
                for (let j = 1; j != 4; j++) {
                    let Yhere = startY + (xIncrement * j);
                    let circleBlob = x.circle(dia).move(startX - (dia / 2.0), Yhere - (dia / 2.0));
                    if (Math.random() <= 0.5) {
                        circleBlob.addClass("botSVGprimaryOutline");
                    } else {
                        circleBlob.addClass("botSVGinverseNoOutline");
                    }
                }
            }


        },
        type: 'panel'
    },
    FiveButtons = {
        drawMe: function (x, body) {
            let bigX = body.panelX - (body.panelMaxD / 3.0);
            let bigY = body.panelY - (body.panelMaxD / 3.0);
            let bigD = body.panelMaxD / 4.0
            let c1 = x.circle(bigD).move(bigX - (bigD / 2.0), bigY - (bigD / 2.0));
            bigY += (body.panelMaxD / 3.0);
            let c2 = x.circle(bigD).move(bigX - (bigD / 2.0), bigY - (bigD / 2.0));
            let smallX = body.panelX + (body.panelMaxD / 3.0);
            let smallY = body.panelY - (body.panelMaxD / 4.0);
            let smallD = body.panelMaxD / 5.0;
            let c3 = x.circle(smallD).move(smallX - (smallD / 2.0), smallY - (smallD / 2.0));
            smallY += body.panelMaxD / 4.0;
            let c4 = x.circle(smallD).move(smallX - (smallD / 2.0), smallY - (smallD / 2.0));
            smallY += body.panelMaxD / 4.0;
            let c5 = x.circle(smallD).move(smallX - (smallD / 2.0), smallY - (smallD / 2.0));

            if (Math.random() <= 0.5) {
                c1.addClass("botSVGinverseNoOutline");
                c2.addClass("botSVGinverseNoOutline");
                c3.addClass("botSVGinverseNoOutline");
                c4.addClass("botSVGinverseNoOutline");
                c5.addClass("botSVGinverseNoOutline");
            } else {
                c1.addClass("botSVGprimaryOutline");
                c2.addClass("botSVGprimaryOutline");
                c3.addClass("botSVGprimaryOutline");
                c4.addClass("botSVGprimaryOutline");
                c5.addClass("botSVGprimaryOutline");
            }
        }
    }
];

//I currently assume that all bodyObjects accept 'one eye' eyes

const bodies = [
    tallThin_body = {
        drawMe: (x) => {
            let body = x.rect(40, 60).move(30, 20);
            body.addClass("botSVGprimaryNoOutline");
        },
        type: 'body',
        armX: 30,
        legX: 40,
        armY: 30,
        legY: 80,
        eyesOnBodyOK: true,
        eyesX: 50,
        eyesY: 35,
        eyesMaxH: 22,
        eyesMaxW: 20,
        panelX: 50,
        panelY: 65,
        panelMaxD: 20,
        panelOnBodyOK: true,
        headX: 50,
        headY: 20,
        eyesType: 'one'
    },
    square_body = {
        drawMe: (x) => {
            let body = x.rect(60, 60).move(20, 20);
            body.addClass("botSVGprimaryNoOutline");
        },
        type: 'body',
        armX: 20,
        legX: 30,
        armY: 30,
        legY: 80,
        eyesOnBodyOK: true,
        eyesX: 50,
        eyesY: 35,
        eyesMaxH: 22,
        eyesMaxW: 34,
        panelX: 50,
        panelY: 65,
        panelMaxD: 25,
        panelOnBodyOK: true,
        headX: 50,
        headY: 20,
        eyesType: 'one'
    },

    round_body = {
        type: 'body',
        drawMe: (x) => {
            let body = x.circle(60).move(20, 20);
            body.addClass("botSVGprimaryNoOutline");
        },
        armX: 21,
        legX: 41,
        armY: 50,
        legY: 76,
        panelOnBodyOK: true,
        panelX: 50,
        panelY: 65,
        panelMaxD: 14,
        eyesOnBodyOK: false,
        headX: 50,
        headY: 20
    },
    eight_body = {
        type: 'body',
        drawMe: (x) => {
            let body = x.path("M 36 54 A 20 20 0 1 1 64 54 A 20 20 0 1 1 36 54 Z");
            body.addClass("botSVGprimaryNoOutline");
        },
        armX: 31,
        legX: 36,
        armY: 40,
        //guess!
        legY: 80,
        //eyes in top circle
        //panel in bottom
        eyesOnBodyOK: true,
        eyesX: 50,
        eyesY: 40,
        eyesMaxH: 15,
        eyesMaxW: 15,
        panelOnBodyOK: true,
        panelX: 50,
        panelY: 70,
        panelMaxD: 15,
        headX: 50,
        headY: 20,
        eyesType: 'one'
    }
];

const drawBot = function (parentNode) {


    const botContainer = document.createElement("div");
    botContainer.classList.add("botcard");
    botContainer.classList.add("card");



    const botContainerHeader = document.createElement("header");
    botContainerHeader.classList.add("card-header");

    const botContainerHeaderTitle = document.createElement("p");
    botContainerHeaderTitle.classList.add("card-header-title");
    let droidName = generate_name('droids');
    //remove ugly names ending in dashes
    console.log(`name was ${droidName} `);
    if (droidName.endsWith('-')) {
        droidName = droidName.slice(0, -1);
    }
    console.log(`using name ${droidName} `);
    botContainerHeaderTitle.innerText = droidName;
    botContainerHeader.appendChild(botContainerHeaderTitle);
    botContainer.appendChild(botContainerHeader);

    const botContainerContent = document.createElement("div");
    botContainerContent.classList.add("card-content");
    botContainer.appendChild(botContainerContent);

    const botContainerFooter = document.createElement("footer");
    botContainerFooter.classList.add("card-footer");
    const botContainerFooterSVG = document.createElement("a");
    const botContainerFooterDelete = document.createElement("a");
    botContainerFooterSVG.classList.add("card-footer-item");
    botContainerFooterSVG.innerText = "SVG";
    botContainerFooterDelete.classList.add("card-footer-item");
    botContainerFooterDelete.innerText = "replace";
    botContainerFooter.appendChild(botContainerFooterSVG);
    botContainerFooter.appendChild(botContainerFooterDelete);

    botContainer.appendChild(botContainerFooter);

    const draw = SVG().size(100, 100).addTo(botContainerContent)
    draw.addClass("botSVGprimaryNoOutline");
    //const rect = draw.rect(100, 100).fill(`${ primaryColour } `).stroke({ color: `${ secondaryColour } `, width: 5 });
    // DRAW BODY
    let whichBody = Math.floor(Math.random() * bodies.length);
    let bodyObject = bodies[whichBody];



    bodyObject.drawMe(draw);
    if (bodyObject.eyesOnBodyOK && Math.random() < 0.3) {
        //eyes on body
        let whichEyes = Math.floor(Math.random() * eyes.length);
        //I currently assume that all bodyObjects accept 'one eye' eyes
        let eyeObject = eyes[whichEyes];
        eyeObject.drawMe(draw, bodyObject)
    } else {
        //draw a head and put eyes there
        let whichHead = Math.floor(Math.random() * heads.length);
        let headObject = heads[whichHead](bodyObject);
        let eyeObject = null;
        if (headObject.eyesType === "one") {
            let whichEyes = Math.floor(Math.random() * eyes.length);
            eyeObject = eyes[whichEyes];
        } else {
            let whichEyes = Math.floor(Math.random() * twoEyes.length);
            eyeObject = twoEyes[whichEyes];
        }
        headObject.drawMe(draw);
        eyeObject.drawMe(draw, headObject);
    }

    //draw a "control panel"

    if (bodyObject.panelOnBodyOK) {
        let whichPanel = Math.floor(Math.random() * panels.length);
        let panelObject = panels[whichPanel];
        console.log(`using ${whichPanel} `);
        panelObject.drawMe(draw, bodyObject);
    }




    // DRAW LEGS
    let whichLegs = Math.floor(Math.random() * legs.length);
    let legObject = legs[whichLegs];
    legObject.drawMe(draw, bodyObject);
    if (legObject.hasFeet) {
        let whichFeet = Math.floor(Math.random() * feet.length);
        let feetObject = feet[whichFeet];
        feetObject.drawMe(draw, bodyObject);
    }

    // DRAW ARMS
    let whichArms = Math.floor(Math.random() * arms.length);
    //arms is full of object factories.
    let armObject = arms[whichArms](bodyObject);
    armObject.drawMe(draw);
    if (armObject.hasHands) {
        let whichHands = Math.floor(Math.random() * hands.length);
        let handsObject = hands[whichHands];
        handsObject.drawMe(draw, armObject);
    }

    //listener to click 'SVG' button panel
    botContainerFooterSVG.addEventListener('click', event => { returnSVG(draw); });
    parentNode.appendChild(botContainer);

}

const returnSVG = function (obj) {
    const SVG_node = obj;
    //console.log(obj.svg());
    let SVGcontent = document.querySelector("#SVGcodeContent");
    SVGcontent.innerText = obj.svg();
    let SVGPopUp = document.querySelector("#SVGcodepop");
    SVGPopUp.classList.toggle("is-active");
}

const closeModal = function () {
    let SVGPopUp = document.querySelector("#SVGcodepop");
    SVGPopUp.classList.toggle("is-active");
}

const clearBots = function () {
    const draw = document.querySelectorAll(".botcard");
    //   console.log(`found ${ draw.length } bots`);
    for (let i of draw) {
        i.remove();
    }
}

const newCols = function () {
    const SVGElementsPrimary = document.querySelectorAll(".botSVGprimaryOutline");
    const SVGElementsInverse = document.querySelectorAll(".botSVGinverseOutline");
    const SVGElementsPrimaryNoOutline = document.querySelectorAll(".botSVGprimaryNoOutline");
    const SVGElementsInverseNoOutline = document.querySelectorAll(".botSVGinverseNoOutline");


    let fillColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let strokeColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    for (let i of SVGElementsPrimary) {
        i.style.fill = fillColor;
        i.style.stroke = strokeColor;
    }
    for (let i of SVGElementsPrimaryNoOutline) {
        i.style.fill = fillColor;
    }
    for (let i of SVGElementsInverse) {
        i.style.stroke = fillColor;
        i.style.fill = strokeColor;
    }
    for (let i of SVGElementsInverseNoOutline) {
        i.style.fill = strokeColor;
    }
}


const draw9Bots = function () {
    clearBots();
    const botBoxes = document.querySelectorAll('.botBox');
    console.log(`got a total of ${botBoxes.length} boxes`);
    for (let i of botBoxes) {
        drawBot(i);
    }
}




//addlisteners

document.querySelector("#bot9").addEventListener('click', event => { draw9Bots(); });
document.querySelector("#newCols").addEventListener('click', event => { newCols(); })

document.querySelector(".modal-close").addEventListener('click', event => { closeModal(); })

let countNode = document.querySelector("#robotCount");
let total_robot_types = bodies.length * feet.length * legs.length * heads.length * (eyes.length + twoEyes.length) * panels.length;
countNode.innerText = total_robot_types;