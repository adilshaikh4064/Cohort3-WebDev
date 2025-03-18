import {Link} from 'react-router-dom';

const FooterLink=({linkName, urlPath})=>{


    return (
    <li className="font-normal text-xs no-underline text-default-caption-text block cursor-pointer pt-4 hover:text-static-black-text hover:opacity-70">
        <span class="font-normal text-xs leading-4 md:text-sm md:leading-5 no-underline text-default-title">
            <Link to={urlPath} >{linkName}</Link>
        </span>
    </li>
    );
}

export default FooterLink;
