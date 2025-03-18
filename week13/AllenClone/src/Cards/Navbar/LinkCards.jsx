import { useState } from "react";
import ButtonWithArrow from "./HoverMenu/ButtonWithArrow";
import ButtonWithoutArrow from "./HoverMenu/ButtonWithoutArrow";


const LinkCards=({linkName})=>{
    const [isOpen,setIsOpen]=useState(false);

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
    <li className={`relative ${(linkName!=='Caller')&&'mt-2'} ${(linkName==="Results")&&"mr-6"}`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={()=>(setIsOpen(isOpen=>!isOpen))}
        onMouseEnter={()=>(setIsOpen(true))}
        onMouseLeave={()=>(setIsOpen(false))}
    >
        <div className="cursor-pointer font-medium text-default-title-text">
            {(linkName==='Caller')&&(
                                        <button className="p-2 relative border-2 rounded-full focus:opacity-70 bg-fill-primary-active border-transparent text-static-white-text flex items-center justify-center text-center transition duration-500 ease-in-out cursor-pointer">
                                        <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.2432 11.3726C14.1731 11.2026 14.0528 11.0625 13.8725 10.9425L11.6587 9.37209C11.4884 9.26207 11.3381 9.17204 11.1878 9.11203C11.0376 9.05201 10.9073 9.02201 10.7771 9.02201C10.6068 9.02201 10.4565 9.07202 10.3063 9.16204C10.156 9.24206 9.99574 9.37209 9.82544 9.53213L9.31455 10.0323C9.24443 10.1023 9.15427 10.1423 9.04408 10.1423C8.98397 10.1423 8.93388 10.1423 8.87378 10.1123C8.82369 10.0923 8.78362 10.0723 8.75357 10.0623C8.65339 10.0123 8.52317 9.92223 8.40295 9.83221C7.87203 9.43211 6.90033 8.50188 6.53969 8.15179C6.30929 7.90173 6.06887 7.65166 5.8585 7.4116C5.56799 7.06152 5.35763 6.78145 5.23742 6.56139C5.2274 6.52138 5.20736 6.48137 5.18733 6.43136C5.17731 6.38135 5.16729 6.33133 5.16729 6.28132C5.16729 6.17129 5.19735 6.09127 5.27749 6.01125L5.78838 5.48112C5.94866 5.32108 6.07889 5.16104 6.15903 5.011C6.24919 4.86097 6.29927 4.70093 6.29927 4.54089C6.29927 4.41085 6.26922 4.27082 6.20912 4.13078C6.14901 3.98075 6.05885 3.83071 5.93864 3.66067L4.39594 1.49012C4.27573 1.32008 4.12547 1.20005 3.94515 1.12003C3.77486 1.04001 3.59454 1 3.40421 1C2.91335 1 2.44252 1.21005 2.01177 1.63016C1.66116 1.96024 1.4007 2.34034 1.24042 2.74044C1.08014 3.14054 1 3.57064 1 4.03076C1 4.72093 1.16028 5.45111 1.47082 6.2113C1.79138 6.96149 2.23216 7.72168 2.78312 8.48187C3.07363 8.87197 3.37415 9.26207 3.70473 9.63216C4.35587 10.4624 5.37766 11.3526 6.07889 11.9227C6.15903 11.9927 6.23917 12.0528 6.32933 12.1128C6.63987 12.3528 6.85024 12.5129 6.85024 12.5129C7.61157 13.063 8.38292 13.5031 9.14425 13.8332C9.9156 14.1633 10.6369 14.3233 11.3181 14.3233C11.7789 14.3233 12.2096 14.2333 12.6003 14.0733C12.6003 14.0733 12.6103 14.0733 12.6203 14.0733C13.0311 13.9032 13.3917 13.6432 13.7122 13.2831C13.9026 13.073 14.0528 12.843 14.163 12.6029C14.1931 12.5529 14.2131 12.4929 14.2332 12.4429C14.3033 12.2528 14.3333 12.0628 14.3333 11.8727C14.3333 11.6827 14.2933 11.5226 14.2231 11.3526L14.2432 11.3726Z" fill="currentColor"></path></svg>
                                    </button>
            )}
            {(linkName!=='Caller')&&(
            <>
            <div className="text-nowrap">
                <button className="text-sm relative border-2 rounded-full focus:opacity-70 bg-transparent border-transparent text-default-title-text flex justify-center items-center text-center transition duration-500 ease-in-out cursor-pointer font-medium">
                    <div className="flex items-center">{linkName}</div>
                </button>
            </div>
            {linkName=="Results"?(<span className="font-bold text-[10px] no-underline text-static-white-text absolute right-0 top-1 -translate-y-full translate-x-full rounded-xl bg-fill-warning-bold px-1.5 py-px ">NEW</span>):null}
            <div className={`bar h-1 mt-2 rounded-xl ${(isOpen) && "bg-fill-primary-active"}`}></div>
            </>
            )}
        </div>

        <div className={`w-fit absolute right-0 ${(linkName!=='Caller')&&'left-0'} z-9999 list-none ${(linkName==='Caller')?'pt-5.5':'pt-4.5'} flex-row duration-300 ${isOpen?'flex animate-fade-in':'hidden animate-fade-out'}`}>
            <div className="w-60 rounded-xl bg-secondary shadow-md">
                <ul className="grid grid-cols-1 gap-y-2 py-2">
                    {(linkName==='Courses')&&(
                        <>
                        <ButtonWithArrow buttonName={'NEET'} urlPath={'/neet'} children={neetCourseChildren} />
                        <ButtonWithArrow buttonName={'JEE'} urlPath={'/jee'} children={jeeCourseChildren}  />
                        <ButtonWithArrow buttonName={'Class 6-10'} urlPath={'/class-6-10'} children={juniorClasses} />
                        <ButtonWithArrow buttonName={'View All Options'} children={viewAllOptions} />
                        </>
                    )}
                    {(linkName==='Test Series')&&(
                        <>
                        <ButtonWithArrow buttonName={'NEET'} urlPath={'/neet/test-series'} children={neetTestSeries} />
                        <ButtonWithArrow buttonName={'JEE(Main+Advanced)'} urlPath={'/jee/test-series'} children={jeeTestSeries} />
                        <ButtonWithArrow buttonName={'JEE Main'} urlPath={'/jee-main/test-series'} children={jeeMainTestSeries} />
                        <ButtonWithArrow buttonName={'CUET'} urlPath={'/cuet/test-series'} children={cuetTests} />
                        </>
                    )}
                    {(linkName==='Scholarships')&&(
                        <>
                        <ButtonWithoutArrow buttonName={'AOSAT'} urlPath={'/aosat-register'} />
                        </>
                    )}
                    {(linkName==='Results')&&(
                        <>
                        <ButtonWithoutArrow buttonName={'JEE MAIN 2025'} urlPath={'/jee/results-2025'} />
                        <ButtonWithArrow buttonName={'NEET'} children={neetResults} />
                        <ButtonWithoutArrow buttonName={'Class 6-10'} urlPath={'/class-6-10/results'} />
                        </>
                    )}
                    {(linkName==='Study Materials')&&(
                        <>
                        <ButtonWithArrow buttonName={'JEE Main'} urlPath={'jee-main/exam'} children={jeemainStudy} />
                        <ButtonWithArrow buttonName={'JEE Advanced'} urlPath={'jee-advanced/exam'} children={jeeadvancedStudy} />
                        <ButtonWithArrow buttonName={'NEET'} urlPath={'neet/exam'} children={neetStudy} />
                        <ButtonWithArrow buttonName={'NCERT Solutions'} urlPath={'ncert-solutions'} children={ncertStudy} />
                        <ButtonWithArrow buttonName={'CBSE'} urlPath={'cbse/exam'} children={cbseStudy} />
                        <ButtonWithArrow buttonName={'Olympiad'} urlPath={'olympiad/exam'} children={olympiadStudy} />
                        </>
                    )}
                    {(linkName==='About Us')&&(
                        <>
                        <ButtonWithoutArrow buttonName={'About ALLEN'} urlPath={'about-us'} />
                        <ButtonWithoutArrow buttonName={'Blogs'} urlPath={'blogs'} />
                        <ButtonWithoutArrow buttonName={'News'} urlPath={'news'} />
                        <ButtonWithoutArrow buttonName={'Careers'} urlPath={'careers'} />
                        </>
                    )}
                    {(linkName==='Caller')&&(
                        <>
                        <ButtonWithArrow buttonName={'Request a call back'} urlPath={'call-back'} />
                        <ButtonWithArrow buttonName={'Book home demo'} urlPath={'home-demo'} />
                        </>
                    )}
                </ul>
            </div>
        </div>
    </li>
    );
}


export default LinkCards;
