import {
    atom,
    RecoilRoot,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";

const textState = atom({
  key: "textState", // unique ID with respect to others. (atoms/selectors)
  default: "", // default value (also known as initial value) [same as the values of state in useState() hook.]
});
const charCountState = selector({
    key: "charCountState",
    get: ({ get }) => {
        const text = get(textState);
        return text.length;
    },
});

const CharacterCounter = () => (
    <div>
        <TextInput />
        <CharacterCount />
    </div>
);
const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    const onChangeHandler = function (event) {
        setText(event.target.value);
    };

    return (
        <>
        <input type="text" value={text} onChange={onChangeHandler} />
        <br />
        <p>Echo: {text}</p>
        </>
    );
};
const CharacterCount = () => {
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count}</>;
};

function BasicRecoil() {
    return (
        <RecoilRoot>
        <h1> hi there </h1>
        <CharacterCounter />
        </RecoilRoot>
    );
}

export default BasicRecoil;
