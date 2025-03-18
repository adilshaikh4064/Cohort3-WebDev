import {Link} from 'react-router-dom';

const AosatAdd = () => {

    return (
    <div className="w-full h-20 lg:h-10 overflow-hidden">
        <div className="fixed left-0 right-0 z-100 bg-blue-800">
            <span className="font-normal text-xs leading-4 md:text-sm leading:5 no-underline text-default-title-text" >
                <Link 
                    className="flex h-10 lg:justify-center items-center py-2.5 px-5 lg:p-0 w-full rounded-none !m-0 !border-0 !flex-row bg-fill-static-green" 
                    to={'/aosat-register'}
                >
                    <div className='size-14 lg:size-9'>
                        <img 
                            src='https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_avif,q_auto/v1733740883/kstaogfryem4aswn1z3n.svg?_upload_ref=ic_img_tool&__ar__=0'
                            width={'28'}
                            height={'28'}
                            className='mr-13 h-14 w-auto py-1.5 lg:h-9'
                        />
                    </div>
                    <div className='relative ml-2 flex-col lg:ml-0 lg:flex lg:grow-0 lg:flex-row'>
                        <div className='flex items-center mr-3 lg:py-3'>
                            <span className="text-xs uppercase font-semibold text-static-yellow-text "> REGISTER FOR AOSAT </span>
                            <div className='pl-0.5'>
                                <img 
                                    src='https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733741024/lpbkzdbke54wl6cevwjo.svg?_upload_ref=ic_img_tool&__ar__=1.06'
                                    width={'24'}
                                    height={'24'}
                                    className='block'
                                />
                            </div>
                        </div>
                        <p className='font-semibold text-xs leading-4.5 md:text-sm md:leading-5.5 no-underline text-static-white-text text-left lg:py-3'>
                            Win up to 90% scholarship on our Online Courses
                        </p>
                    </div>
                    <div className='lg:h-12'>
                        <div className='h-full w-full flex justify-center items-center'>
                            <img 
                                src='https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733810195/zey5b8tscj7ribv0xga4.svg?_upload_ref=ic_img_tool&__ar__=1.04'
                                height={'48'}
                                width={'28'}
                                className='block ml-3 lg:h-12 lg:py-3'
                            />
                        </div>
                    </div>
                </Link>
            </span>
        </div>
    </div>
    );
}


export default AosatAdd;
