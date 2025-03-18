import FooterLink from "../Cards/Footer/FooterLink";


const Footer=()=>{


    return (
    <section className="relative bg-primary flex lg:gap-14 gap-12 min-w-0 flex-col ![&>*]:flex-none w-full max-w-360 m-auto">
        <div className="py-10 md:px-40 px-10">
            <footer >
                <ul className="grid grid-cols-2 md:grid-cols-4 md:gap-14 xl:grid-cols-6">
                    <li>
                        <span className="font-bold text-xs leading-3.5 md:text-xs md:leading-4 no-underline text-default-title-text pb-0 pt-2 mb:pb-2">
                            About
                        </span>
                        <ul>
                            <FooterLink linkName={'About us'} urlPath={'/'} />
                            <FooterLink linkName={'Blog'} urlPath={'/'} />
                            <FooterLink linkName={'News'} urlPath={'/'} />
                            <FooterLink linkName={'MyExam EduBlogs'} urlPath={'/'} />
                            <FooterLink linkName={'Privacy Policy'} urlPath={'/'} />
                            <FooterLink linkName={'Public Notice'} urlPath={'/'} />
                            <FooterLink linkName={'Careers'} urlPath={'/'} />
                            <FooterLink linkName={'Dhoni Inspires NEET Aspirants'} urlPath={'/'} />
                            <FooterLink linkName={'Dhoni Inspires JEE Aspirants'} urlPath={'/'} />
                        </ul>
                    </li>

                    <li>
                        <span className="font-bold text-xs leading-3.5 md:text-xs md:leading-4 no-underline text-default-title-text pb-0 pt-2 mb:pb-2">
                            Help & Support
                        </span>
                        <ul>
                            <FooterLink linkName={'Refund Policy'} urlPath={'/'} />
                            <FooterLink linkName={'Transfer Policy'} urlPath={'/'} />
                            <FooterLink linkName={'Terms & Conditions'} urlPath={'/'} />
                            <FooterLink linkName={'Contact us'} urlPath={'/'} />
                        </ul>
                    </li>

                    <li>
                        <span className="font-bold text-xs leading-3.5 md:text-xs md:leading-4 no-underline text-default-title-text pb-0 pt-2 mb:pb-2">
                            Popular goals
                        </span>
                        <ul>
                            <FooterLink linkName={'NEET UG'} urlPath={'/'} />
                            <FooterLink linkName={'JEE Advanced'} urlPath={'/'} />
                            <FooterLink linkName={'6th to 10th'} urlPath={'/'} />
                        </ul>
                    </li>

                    <li>
                        <span className="font-bold text-xs leading-3.5 md:text-xs md:leading-4 no-underline text-default-title-text pb-0 pt-2 mb:pb-2">
                            Courses
                        </span>
                        <ul>
                            <FooterLink linkName={'Online Courses'} urlPath={'/'} />
                            <FooterLink linkName={'Distance Learning'} urlPath={'/'} />
                            <FooterLink linkName={'Online Test Series'} urlPath={'/'} />
                            <FooterLink linkName={'NEET Test Series'} urlPath={'/'} />
                            <FooterLink linkName={'JEE Test Series'} urlPath={'/'} />
                            <FooterLink linkName={'JEE Main Test Series'} urlPath={'/'} />
                        </ul>
                    </li>

                    <li>
                        <span className="font-bold text-xs leading-3.5 md:text-xs md:leading-4 no-underline text-default-title-text pb-0 pt-2 mb:pb-2">
                            Centres
                        </span>
                        <ul>
                            <FooterLink linkName={'Kota'} urlPath={'/'} />
                            <FooterLink linkName={'Bangalore'} urlPath={'/'} />
                            <FooterLink linkName={'Indore'} urlPath={'/'} />
                            <FooterLink linkName={'Delhi'} urlPath={'/'} />
                            <FooterLink linkName={'More Centres'} urlPath={'/'} />
                        </ul>
                    </li>

                    <li>
                        <span className="font-bold text-xs leading-3.5 md:text-xs md:leading-4 no-underline text-default-title-text pb-0 pt-2 mb:pb-2">
                            Exam information
                        </span>
                        <ul>
                            <FooterLink linkName={'JEE Main'} urlPath={'/'} />
                            <FooterLink linkName={'JEE Advanced'} urlPath={'/'} />
                            <FooterLink linkName={'NEET UG'} urlPath={'/'} />
                            <FooterLink linkName={'Class 10'} urlPath={'/'} />
                            <FooterLink linkName={'Class 12'} urlPath={'/'} />
                            <FooterLink linkName={'Olympiad Exam'} urlPath={'/'} />
                            <FooterLink linkName={'CUET Exam'} urlPath={'/'} />
                            <FooterLink linkName={'JEE Main 2025 Session 1 Answer Key'} urlPath={'/'} />
                        </ul>
                    </li>
                </ul>

                <div className="mt-10 flex flex-row items-center justify-between gap-2 border-t border-inactive-border  pt-6 md:pt-10">
                    <div className="flex flex-col items-start md:flex md:flex-col-reverse">
                        <p className="font-normal text-xs leading-4.5 md:text-sm md:leading-5.5 no-underline text-default-caption-text pb-2 md:pb-0 ">
                            ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
                        </p>
                        <ul id="social-links" class="flex items-center  pb-0 md:pb-2 ">
                            <li class="font-normal text-xs leading-4.5 md:text-sm md:leading-5.5 no-underline text-default-body-text mr-4 cursor-pointer">
                                <span class="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text">
                                    <a target="_blank" rel="nofollow" href="https://www.youtube.com/@ALLENOnlinePrograms">
                                        <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                </span>
                            </li>
                            <li class="font-normal text-xs leading-4.5 md:text-sm md:leading-5.5 no-underline text-default-body-text mr-4 cursor-pointer">
                                <span class="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text">
                                <a target="_blank" rel="nofollow" href="https://www.instagram.com/allenonlineprograms/">
                                    <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z" fill="currentColor">
                                        </path>
                                    </svg>
                                </a>
                            </span>
                            </li>
                            <li class="font-normal text-xs leading-4.5 md:text-sm md:leading-5.5 no-underline text-default-body-text mr-4 cursor-pointer">
                                <span class="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text">
                                    <a target="_blank" rel="nofollow" href="https://www.facebook.com/allenonlineprograms">
                                        <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19V16.19Z" fill="currentColor">
                                            </path>
                                        </svg>
                                    </a>
                                </span>
                            </li>
                            <li class="font-normal text-xs leading-4.5 md:text-sm md:leading-5.5 no-underline text-default-body-text mr-4 cursor-pointer">
                                <span class="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text">
                                    <a target="_blank" rel="nofollow" href="https://twitter.com/ALLENDigital_In">
                                        <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.9028 10.4688L21.3482 2H19.5837L13.1191 9.35313L7.95554 2H2L9.80819 13.1194L2 22H3.7645L10.5916 14.2348L16.0445 22H22L13.9028 10.4688ZM11.4861 13.2172L10.6949 12.11L4.4002 3.29969H7.11034L12.19 10.41L12.9811 11.5172L19.5845 20.7594H16.8746L11.4861 13.2172Z" fill="currentColor">
                                            </path>
                                        </svg>
                                    </a>
                                </span>
                            </li>
                            <li class="font-normal text-xs leading-4.5 md:text-sm md:leading-5.5 no-underline text-default-body-text mr-4 cursor-pointer">
                                <span class="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title-text">
                                    <a target="_blank" rel="nofollow" href="https://www.linkedin.com/company/weareallendigital/">
                                        <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path clip-rule="evenodd" d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4613 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87085 7.47935 7.10364 7.28723 7.30004C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30004C4.14565 7.10364 3.99469 6.87085 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86962 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z" fill="currentColor" fill-rule="evenodd">
                                                </path>
                                            </svg>
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                        <div className="">
                            <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_120,f_avif,q_auto/v1738753226/riir9wdiqn81z2vaadny.webp?_upload_ref=ic_img_tool&__ar__=1.00" alt="isoImage" width="62" height="62" />
                        </div>
                </div>
            </footer>
        </div>
    </section>
    );
}


export default Footer;