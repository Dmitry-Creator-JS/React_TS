import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('dRAG')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);


    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
        console.log('DROP')


    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);


    }

    return (
        <div>
            <input
                value={value}
                onChange={changeHandler}
                type="text"
                placeholder='Управляемы'
            />

            <input
                ref={inputRef}
                type="text"
                placeholder='Неуправляемый'
            />
            <button
                onClick={clickHandler}
            >Click2
            </button>
            <div onDrag={dragHandler} draggable={"true"}
                 style={{width: 200, height: 200, backgroundColor:'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, backgroundColor: isDrag ? 'blue' : 'red', marginTop: 15}}></div>
        </div>
    );
};

export default EventsExample;