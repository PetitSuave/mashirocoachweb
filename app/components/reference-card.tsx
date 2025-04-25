import React from "react";

export type ReferenceCardProps = {
    title: string
    name: string
    text: string | React.ReactNode

}

export function ReferenceCard({title, name, text}: ReferenceCardProps) {
    return (
        <div
            className="relative min-h-full border-solid border-teal-600 bg-teal-100 border-2 m-2 p-6
             {/*bg-gradient-to-b from-teal-50 to-teal-200 border-teal-600*/}
             "
        >
            <div className="text-center mt-3 font-bold">
                {title}
            </div>
            <div className="mt-6 mb-24">
                {text}
            </div>
            <div className="text-right font-italic text-xl">
                {name}
            </div>
            {/*<div className=" absolute flex justify-center items-center bottom-9 mx-auto inset-x-0">*/}
            {/*    {text2}*/}
            {/*</div>*/}
        </div>
    )
}