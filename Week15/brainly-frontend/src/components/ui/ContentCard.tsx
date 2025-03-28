import DeleteIcon from "../icons/DeleteIcon";
import DocumentIcon from "../icons/DocumentIcon";
import LinkIcon from "../icons/LinkIcon";
import { ShareIcon } from "../icons/ShareIcon";
import TweetIcon from "../icons/TweetIcon";
import VideoIcon from "../icons/VideoIcon";
import Button from "./Button";

interface ContentCardInterface{
    type: 'tweet' | 'document' | 'video' | 'link';
    title: string;
    link?: string;
    tags: string[];
}

const titleTagRender={
    'tweet': <TweetIcon/>,
    'document': <DocumentIcon/>,
    'link': <LinkIcon/>,
    'video': <VideoIcon/>
}

const Titletag=(props:{
    type: 'tweet' | 'document' | 'video' | 'link';
    title: string;
})=>{
    return(
    <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
            {titleTagRender[props.type]}
            <p className="font-medium text-lg"> {props.title} </p>
        </div>
        <div className="flex gap-3 items-center text-secondary-text text-sm">
            <ShareIcon size="md"/>
            <DeleteIcon  />
        </div>
    </div>
    );
}
const Content=({link}:{link?:string})=>{

    return (
    <div className="flex justify-center items-center">
        <div className="w-full h-50 border-1 border-borderColor drop-shadow-md rounded-xl">
            {link}
        </div>
    </div>
    );
}
const Tags=({tagName}:{tagName:string})=>{
    return (
    <div>
        <Button 
            variant="secondary"
            size="sm"
            title={tagName}
        />
    </div>
    );
}
const TimeStamp=()=>{
    const currentTime=(new Date()).toLocaleDateString('en-GB')
    return (
    <div className="text-secondary-text text-[0.75rem]">
        <p> {`Added on ${currentTime}`} </p>
    </div>
    );
}

const ContentCard=(props:ContentCardInterface)=>{

    return (
    <div 
        className="bg-white rounded-xl border-1 border-borderColor drop-shadow-md flex flex-col gap-3 p-4" 
    >
        <div>
            <Titletag 
                type={props.type}
                title={props.title}
            />
        </div>

        <div>
            <Content
                link={props.link}
            />
        </div>

        <div className="flex gap-2">
            <Tags tagName="#productivity" />
            <Tags tagName="#ideas" />
        </div>

        <div>
            <TimeStamp />
        </div>
    </div>
    );
}

export default ContentCard;