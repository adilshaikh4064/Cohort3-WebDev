import SlideMenuSubButton from "./SlideMenuSubButton";
import SlideMenuSubButtonWithout from "./SlideMenuSubButtonWithout";
import { useRecoilState } from "recoil";
import { mainButtonsState } from "../../../Store/NavbarStore";


const SlideMenuMainButton=({buttonName})=>{
    const [mainButtons,setMainButtons]=useRecoilState(mainButtonsState);


    const handleOnClick=function(buttonClicked){
        setMainButtons((prevButtons)=>{
            const isCurrentlyActive=prevButtons[buttonClicked];

            return Object.fromEntries(
                Object.keys(prevButtons).map(key=>[key,isCurrentlyActive?false:key===buttonClicked])
            )
        })
    }

    const neetCourseChildren=[['Class 11th', 'neet/class-11'],['Class 12th', 'neet/class-12'],['Class 12th Plus', 'neet/12th-droppers']]

    const jeeCourseChildren=[['Class 11th', 'jee/class-11'],['Class 12th', 'jee/class-12'],['Class 12th Plus', 'jee/12th-droppers']]

    const juniorClasses=[['Class 6th', '/class-6'],['Class 7th', '/class-7'],['Class 8th', '/class-8'],['Class 9th', '/class-9'],['Class 10th', '/class-10']]

    const viewAllOptions=[['Online Courses','online-courses'],['Classroom Courses', 'https://www.allen.ac.in/'], ['Distance Learning','https://dlp.allen.ac.in/']]


    //Test-series
    const neetTestSeries=[['Class 11th', `neet/test-series/class-11/?mode=online&session=2025`], ['Class 12th', `neet/test-series/class-12/?mode=online&session=2025`], ['Class 12th Plus', `neet/test-series/12th-dropper/?mode=online&session=2025`]]

    const jeeTestSeries=[['Class 11th', `jee/test-series/class-11/?mode=online&session=2025`], ['Class 12th', `jee/test-series/class-12/?mode=online&session=2025`], ['Class 12th Plus', `jee/test-series/12th-dropper/?mode=online&session=2025`]] 
    
    const jeeMainTestSeries=[['Class 11th', `jee/test-series/class-11/?mode=online&session=2025&name=jeemain`], ['Class 12th', `jee/test-series/class-12/?mode=online&session=2025&name=jeemain`], ['Class 12th Plus', `jee/test-series/12th-dropper/?mode=online&session=2025&name=jeemain`]]

    const cuetTests=[['Class 12th','cuet']]

    
    //Results
    const neetResults=[['2024','neet/results-2024'],['2023','neet/results-2023'],['2022','neet/results-2022']]


    //study materials
    const jeemainStudy=[['Previous Year Papers','jee-main/previous-year-papers'],['Sample Papers','jee-main/sample-papers'],['Results','jee-main/results'],['Analysis','jee-main/analysis'],['Syllabus','jee-main/syllabus'],['Exam Date','jee-main/exam-date']]

    const jeeadvancedStudy=[['Previous Year Papers','jee-advanced/previous-year-papers'],['Sample Papers','jee-advanced/sample-papers'],['Mock Tests','jee-advanced/mock-tests'],['Results','jee-advanced/results'],['Analysis','jee-advanced/analysis'],['Syllabus','jee-advanced/syllabus'],['Exam Date','jee-advanced/exam-date']]

    const neetStudy=[['Previous Year Papers','neet/previous-year-papers'],['Sample Papers','neet/sample-papers'],['Mock Tests','neet/mock-tests'],['Results','neet/results'],['Analysis','neet/analysis'],['Syllabus','neet/syllabus'],['Exam Date','neet/exam-date']]

    const ncertStudy=[['Class 6','ncert-solutions/class-6'],['Class 7','ncert-solutions/class-7'],['Class 8','ncert-solutions/class-8'],['Class 9','ncert-solutions/class-9'],['Class 10','ncert-solutions/class-10'],['Class 11','ncert-solutions/class-11'],['Class 12','ncert-solutions/class-12']]

    const cbseStudy=[['Notes','cbse/notes'],['Sample Papers','cbse/sample-papers'],['Question Papers','cbse/question-papers']]
    
    const olympiadStudy=[['NSO','olympiad/nso'],['IMO','olympiad/imo'],['NMTC','olympiad/nmtc']]

    return (
    <div className={`block relative w-full px-5 border-inactive-border ${mainButtons[buttonName] ?'border-0 bg-secondary':'border-b'}`}>
        <button 
            className="flex justify-between items-center w-full py-4 antialiased font-sans text-xl text-left font-semibold leading-snug select-none transition-colors border-b-0"
            aria-expanded={mainButtons[buttonName]}
            onClick={()=>{
                handleOnClick(buttonName)
            }}
        >
            <p className="font-bold text-sm leading-5.5 md:text-base md:leading-6 no-underline text-default-title-text mr-auto">
                {buttonName}
            </p>
            <span className="ml-4">
                <svg class={`mx-auto text-default-title-text h-4 w-4 transition-transform ${mainButtons[buttonName]?'rotate-180':''}`} data-testid="KeyboardArrowDownIcon"    fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
            </span>
        </button>

        <div 
            className={`overflow-hidden transition-[grid-template-rows] duration-300 antialiased ease-in-out grid-rows-[0fr] ${(!mainButtons[buttonName])?'grid-rows-[0fr]':'grid-rows-[1fr]'}`} 
            aria-hidden={!mainButtons[buttonName]}
        >
            <div className={`overflow-hidden w-full py-4 transition-all duration-200 antialiased ease-in-out !pt-0 ${(!mainButtons[buttonName])?'hidden':'block'}`}>
                <nav className="p-0">
                    <div>

                        {(buttonName==='Courses') && (
                            <>
                            <SlideMenuSubButton buttonName={'NEET'} urlPath={'/neet'} children={neetCourseChildren} parent={'Courses'} />
                            <SlideMenuSubButton buttonName={'JEE'} urlPath={'/jee'} children={jeeCourseChildren} parent={'Courses'} />
                            <SlideMenuSubButton buttonName={'Class 6-10'} urlPath={'/class-6-10'} children={juniorClasses} parent={'Courses'} />
                            <SlideMenuSubButton buttonName={'View All Options'} children={viewAllOptions} parent={'Courses'} />
                            </>
                        )}

                        {(buttonName==='Test Series') && (
                            <>
                            <SlideMenuSubButton buttonName={'NEET'} urlPath={'/neet/test-series'} children={neetTestSeries} parent={'Test Series'} />
                            <SlideMenuSubButton buttonName={'JEE(Main+Advanced)'} urlPath={'/jee/test-series'} children={jeeTestSeries} parent={'Test Series'}  />
                            <SlideMenuSubButton buttonName={'JEE Main'} urlPath={'/jee-main/test-series'} children={jeeMainTestSeries} parent={'Test Series'}  />
                            <SlideMenuSubButton buttonName={'CUET'} urlPath={'/cuet/test-series'} children={cuetTests} parent={'Test Series'}  />
                            </>
                        )}

                        {(buttonName==='Scholarships') && (
                            <>
                            <SlideMenuSubButtonWithout buttonName={'AOSAT'} urlPath={'/aosat-register'}/>
                            </>
                        )}

                        {(buttonName==='Results') && (
                            <>
                            <SlideMenuSubButtonWithout buttonName={'JEE MAIN 2025'} urlPath={'/jee/results-2025'} />
                            <SlideMenuSubButton buttonName={'NEET'} children={neetResults} parent={'Results'}  />
                            <SlideMenuSubButtonWithout buttonName={'Class 6-10'} urlPath={'/class-6-10/results'} />
                            </>
                        )}

                        {(buttonName==='Study Materials') && (
                            <>
                            <SlideMenuSubButton buttonName={'JEE Main'} urlPath={'jee-main/exam'} children={jeemainStudy} parent={'Study Materials'} />
                            <SlideMenuSubButton buttonName={'JEE Advanced'} urlPath={'jee-advanced/exam'} children={jeeadvancedStudy}  parent={'Study Materials'}/>
                            <SlideMenuSubButton buttonName={'NEET'} urlPath={'neet/exam'} children={neetStudy }parent={'Study Materials'}/>
                            <SlideMenuSubButton buttonName={'NCERT Solutions'} urlPath={'ncert-solutions'} children={ncertStudy}  parent={'Study Materials'}/>
                            <SlideMenuSubButton buttonName={'CBSE'} urlPath={'cbse/exam'} children={cbseStudy}  parent={'Study Materials'}/>
                            <SlideMenuSubButton buttonName={'Olympiad'} urlPath={'olympiad/exam'} children={olympiadStudy}  parent={'Study Materials'}/>
                            </>
                        )}

                        {(buttonName==='About Us') && (
                            <>
                            <SlideMenuSubButtonWithout buttonName={'About Us'}  urlPath={'about-us'} />
                            <SlideMenuSubButtonWithout buttonName={'Blogs'} urlPath={'blogs'} />
                            <SlideMenuSubButtonWithout buttonName={'News'} urlPath={'news'} />
                            <SlideMenuSubButtonWithout buttonName={'Careers'} urlPath={'careers'} />
                            </>
                        )}

                    </div>
                </nav>
            </div>
        </div>
    </div>
    );
}


export default SlideMenuMainButton;
