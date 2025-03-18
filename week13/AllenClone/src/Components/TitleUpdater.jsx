import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';


const TitleUpdater=function(){
    const location=useLocation();

    useEffect(function(){
        const titles = {
            "/": "Best Online Coaching for NEET, JEE & Class 6-10th",
            "/courses": "Complete List of ALLEN Digital Online Courses ",
            "/aosat-register": "AOSAT",
        
            "/jee": "JEE Online Coaching 2025 | Ace Your JEE with Allen Expert Training",
            "/jee/class-11": "JEE nurture programs",
            "/jee/class-12": "JEE Enthuse programs",
            "/jee/12th-droppers": "12th plus offering JEE",
            "/jee/test-series": "JEE Online Test Series 2025 & 2026 by ALLEN (Mains + Advanced)",
            "/jee/test-series/:className": "JEE Online Test Series 2025 & 2026 by ALLEN (Mains + Advanced)",
            "/jee/results-2025": "JEE Main 2025 Results (OUT):  Meet Champions from ALLEN",
        
            "/neet": "NEET Online Coaching 2025 & 2026 | Best NEET Preparation Courses by ALLEN",
            "/neet/class-11": "Neet Nurture programs",
            "/neet/class-12": "Neet enthuse programs",
            "/neet/12th-droppers": "NEET 12th plus offerings",
            "/neet/test-series": "NEET Online Test Series 2025 & 2026 | Boost Your NEET Preparation with ALLEN",
            "/neet/test-series/:className": "NEET Online Test Series 2025 & 2026 | Boost Your NEET Preparation with ALLEN",
            "/neet/results-2024": "NEET Results",
            "/neet/results-2023": "NEET 2023 Results",
            "/neet/results-2022": "NEET 2022 Results",
        
            "/class-6-10": "Best Online Coaching for Class 6 to 10 Focused on NCERT Subjects",
            "/class-6-10/results": "PNCF Results",
        
            "/class-6": "Foundation Course Class 6 for IIT JEE, NEET, Olympiad & School Exam",
            "/class-7": "Class 7 Foundation Course JEE, NEET, Olympiad & School Exam",
            "/class-8": "Class 8 Foundation Course for JEE, NEET, Olympiad & School Exam",
            "/class-9": "Class 9 Foundation Course for JEE, NEET, Olympiad & School Exam",
            "/class-10": "Class 10 Foundation Course for JEE, NEET, Olympiad & School Exam",
        
            "/online-courses": "ALLEN's Ultimate Programs for JEE, NEET, and Olympiad Success",
        
            "/cuet": "CUET Courses",
            "/cuet/test-series": "CUET Online Test Series | Ace the Exam with ALLEN",
        
            "/jee-main/exam": "JEE Main 2025 - Exam Dates, Eligibility, Application, Exam Pattern",
            "/jee-main/previous-year-papers": "JEE Main Previous Year Papers with 2025 Paper & Solutions | Download Free Solved PDFs",
            "/jee-main/sample-papers": "JEE Main Sample Papers with Solutions: PDF Downloads Available",
            "/jee-main/results": "JEE Main Result 2025 (OUT): Final Answer Key, How to Download Result",
            "/jee-main/analysis": "JEE Main Papers Analysis: Enhancing Your JEE Main Preparation",
            "/jee-main/syllabus": "JEE Main 2025 Syllabus(OUT): Check Detailed Syllabus",
            "/jee-main/exam-date": "JEE Main Exam Date 2025 (OUT): Check Important Dates and Schedule",
            "/jee-main/test-series": "JEE Main Online Test Series 2025 & 2026 by ALLEN | Boost Your Prep",
        
            "/jee-advanced/exam": "JEE Advanced 2025 - Exam Dates, Eligibility, Application, Exam Pattern",
            "/jee-advanced/previous-year-papers": "JEE Advanced Previous Year Papers with 2025 Paper & Solutions | Download Free Solved PDFs",
            "/jee-advanced/sample-papers": "JEE Advanced Sample Papers with Solutions: PDF Downloads Available",
            "/jee-advanced/mock-tests": "JEE Advanced Mock Test - Download PDF & Practice",
            "/jee-advanced/results": "JEE Advanced Result 2024 (OUT): Final Answer Key, How to Download Result",
            "/jee-advanced/analysis": "JEE Advanced Papers Analysis: Enhancing Your JEE Advanced Preparation",
            "/jee-advanced/syllabus": "JEE Advanced 2025 Syllabus(OUT): Check Detailed Syllabus",
            "/jee-advanced/exam-date": "JEE Advanced Exam Date 2025 (OUT): Check Important Dates and Schedule",
        
            "/neet/exam": "NEET 2025 - Exam Dates, Eligibility, Application, Exam Pattern",
            "/neet/previous-year-papers": "NEET Previous Year Papers with 2025 Paper & Solutions | Download Free Solved PDFs",
            "/neet/sample-papers": "NEET Sample Papers with Solutions: PDF Downloads Available",
            "/neet/mock-tests": "NEET Mock Test - Download PDF & Practice",
            "/neet/results": "NEET Result 2024 (OUT): Final Answer Key, How to Download Result",
            "/neet/analysis": "NEET Papers Analysis: Enhancing Your NEET Preparation",
            "/neet/syllabus": "NEET 2025 Syllabus(OUT): Check Detailed Syllabus",
            "/neet/exam-date": "NEET Exam Date 2025 (OUT): Check Important Dates and Schedule",
        
            "/ncert-solutions": "NCERT Solutions for Class 6 to 12 - Download PDF Free",
            "/ncert-solutions/class-6": "NCERT Solutions Class 6: Maths & Science Updated for 2024-25",
            "/ncert-solutions/class-7": "Unlock NCERT Solutions for Class 7: Your Complete Exam Prep Guide",
            "/ncert-solutions/class-8": "NCERT Solutions for Class 8: Download Free PDFs",
            "/ncert-solutions/class-9": "NCERT Solutions Class 9 PDF Download",
            "/ncert-solutions/class-10": "NCERT Solutions Class 10: Enhance Exam Preparation with Detailed Solutions",
            "/ncert-solutions/class-11": "NCERT Solutions Class 11: Download Chapterwise Solutions",
            "/ncert-solutions/class-12": "NCERT Solutions for Class 12 - Download Free PDFs 2024-25",
        
            "/cbse/exam": "CBSE - Central Board of Secondary Education| All You Need to Know",
            "/cbse/notes": "CBSE Notes : Important Notes for Class 6 to 10",
            "/cbse/sample-papers": "Download CBSE Sample Papers for Class 11 & 12 (2024-25)",
            "/cbse/question-papers": "CBSE Previous Year Question Papers with Solutions",
        
            "/olympiad/exam": "Olympiad Exams 2025: Overview, List of Exam and Benefits",
            "/olympiad/imo": "NSO 2024- Exam Schedule, Registration Process, Paper Pattern, Syllabus, and Result",
            "/olympiad/nso": "International Mathematics Olympiad 2024: Exam Dates, Syllabus, Pattern ",
            "/olympiad/nmtc": "NMTC 2024: Exam Dates, Eligibility, Books, Syllabus and Tips",
        
            "/about-us": "About us",
            "/blogs": "Allen Blogs",
            "/news": "Allen News",
        
            "/call-back": "Schedule Callback | Allen",
            "/home-demo": "Home Demo | Allen",
        
            "*": "Allen", // For 404 Not Found
        };        

        document.title=titles[location.pathname] || 'Best Online Coaching for NEET, JEE & Class 6-10th'
    },[location.pathname])

    return null;
}


export default TitleUpdater;
