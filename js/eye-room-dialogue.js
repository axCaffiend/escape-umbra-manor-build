
// ------------ INTRO ------------

export const introDialogue = {
    "defaultText" : [
        [
            "Luca", "*Pant pant* ...Phew! I never thought I'd get out of that scary dungeon!!"
        ] ,
        [
            "Luca", "..."
        ] ,
        [
            "Luca", "But I could be trapped here - I should move before that vampire finds me!! I'll go and take a peek outside the door..."
        ],
        [
            "Luca", "... .... Hrnghh.... this door is stuck... oh no..."
        ],
        [
            "Luca", "I'M TRAPPED AGAIN???"
        ],
        [
            "Luca", "....OK don't panic - maybe **the door is locked** so I should **find the key**... Yeah!"
        ],
        [
            "Luca", "Let's **look around the room** for some clues... it's pretty dark in here - I'm feeling SUPER creeped out now..."
        ]
    ]
}


// ------------ ROOM OBJECTS ------------

export const lightSwitchText = {
    
    // defaultText dialogue
    "name" : "Light switch",
    "defaultText" : [
        [
            "Luca" , 
            "<line 01>"
         ]
    ] ,
    "onText": [
        [
            "Luca" , 
            "<line 02>"
        ]
    ]
}

export const roomLight = {
    "name" : "Room Light",
    "defaultText": [
        [
            "Luca" , "<default Text line>"
        ]
    ] ,
    "onText": [
        [
            "Luca" , "<onText line>"
        ]
    ]
}


export const keyStatue = {
    
    // defaultText dialogue
    "name" : "Key Statue",
    "defaultText" : [
        [
            "Luca" , 
            "It's a key - but it's way too heavy for me to lift...and there **isn't a keyhole** in the door."
         ] ,

        [
            "Luca" , 
            "Maybe I should look around the room more for some clues? This must be useful somehow!"
        ]
    ] 
}


export const keyFlame = {
    "name" : "Key sculpture flame",
    "defaultText" : [
        [
            "Luca" , "<flame is empty>"
        ]
    ] ,
    "status01" : [
        [
            "Luca", "The flame is **1/4** full"
        ]
    ],
    "status02" : [
        [ 
            "Luca", "The flame is **2/4** full"
        ]
    ] ,
    "status03" : [
        [ 
            "Luca", "The flame is **3/4** full"
        ]
    ] ,

    "endText": [
        [
            "Luca", "<completed dialogue>"
        ]
    ]
}



// ------------ EXHIBITS -----------

export const retina = {
    "name": "Retina Exhibit",
    "defaultText": [
        [
            "Luca", "...this is a weird painting - no wait, it's a photo..?"
        ] ,
        [
            "Luca", "There's a plaque here - let's see what it says..."
        ] ,

        // Description
        [
            "The Retina",
            "The **retina** is the surface inside the back of the eye."
        ] ,

        [
            "The Retina",
            "It is made up of special cells which send signals along the **optic nerve** to the brain when they **detect light**"
        ] ,

        [
            "The Retina",
            "There are two types of these specials cells - which are called **rods** and **cones**."
        ] ,

        [
            "The Retina",
            "**Rods** are for detecting light and dark, and all the shades of grey in between. They help us to see better when it's dark!"
        ] ,

        [
            "The Retina",
            "**Cones** are for detecting **colours** and can sense red, green or blue light - which mix together to make all the colours of the rainbow!"
        ]
    ] 
}

export const iris = {
    "name" : "Iris",
    "defaultText" : [
        [ /* Dialogue */
            "Luca" , "It's a funny shape... I wonder what it could be?"
        ] ,
        [
            "Luca" , "....if I stare at it too long I feel like it's moving slightly..."
        ] ,
        // Description
        [
            "The Iris (& Pupil)" , "<description line 01>"
        ]
    ]
}

export const lens = {
    
    
    "name" : "Lens",
    "defaultText" : [
        [ // defaultText dialogue
            "Luca" , 
            "It looks like it's made of glass - but when I touch it, it's actually soft like jelly...gross."
         ] ,

        [
            "Luca", "There's a plaque on the base - let's see what it says..."
        ] ,
        // Description
        [
            "The Lens" , "<line 01> ..."
        ]
    ] 
}

export const brain = {
    
    
    "name" : "Brain",
    "defaultText" : [
        [ // defaultText dialogue
            "Luca" , 
            "** IS THIS A REAL BRAIN??**"
         ] ,

        [
            "Luca", "...  ......."
        ] ,

        [
            "Luca", "... ** *gulp* ** lets find a way out of here soon - I don't want to become a brain in a jar!"
        ] ,
        [
            "Luca", "Maybe this plaque will tell us more about it..."
        ] ,
        // Description
        [
            "The Brain" , "<line 01> ..."
        ]
    ] 
}

export const bigEye = {
    
    
    "name" : "Big Eye",
    "defaultText": [
        [
            "Luca", "<default dialogue eye closed>"
        ]
    ],
    "openText" : [
        [ // defaultText dialogue
            "Luca" , 
            "Wow that's a... giant and **super creepy** eye, weird choice of decoration. "
         ] , 
         [
            "The Giant Eye" , "** *blink* ** *blink*"
         ] , 
         [
            "Luca" , "I think it's **looking at that big key statue** in the middle of the room. Maybe it has something to do with unlocking the door?"
         ]

    ] 
}

export const panelRoom = {
    "name": "Panel - room",
    "defaultText" : [
        [
            "Luca", "<inactive comments>"
        ]
    ]
}

// Door 











