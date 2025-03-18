import {atom, atomFamily} from 'recoil';

const loginSectionState=atom({
    key:'loginSectionState',
    default:true
})
const slideMenuState=atom({
    key:'slideMenuState',
    default:true
})

const mainButtonsState=atom({
    key:'mainButtonsState',
    default:{
        'Courses':false,
        'Test Series':false,
        'Scholarships':false,
        'Results':false,
        'Study Materials':false,
        'About Us':false
    }   
})



// Creates an atom dynamically for each main button
const buttonStateFamily = atomFamily({
    key: "buttonStateFamily",
    default: (parent) => {
        switch (parent) {
        case "Courses":
            return { JEE: false, NEET: false, "Class 6-10": false, "View All Options": false };
        case "Test Series":
            return { NEET: false, "JEE(Main+Advanced)": false, "JEE Main": false, CUET: false };
        case "Results":
            return { NEET: false };
        case "Study Materials":
            return {
            "JEE Main": false,
            "JEE Advanced": false,
            NEET: false,
            CBSE: false,
            "NCERT Solutions": false,
            Olympiad: false,
            };
        case "About Us":
            return {}; // No sub-buttons yet
        default:
            return {}; // Fallback
        }
    },
});



export{
    loginSectionState,
    slideMenuState,
    mainButtonsState,
    buttonStateFamily,
}