import React, {ReactNode} from "react";
import Image from "next/image"

export type ScreenWideSectionProps = {
    background?: ReactNode;
    children: ReactNode
}

export const ScreenWideSection = ({ children, background }: ScreenWideSectionProps) => {
    return (
        <section className="relative w-screen -ml-[calc(50vw-50%)]">
            {background ?? null}
            <div className="flex flex-col w-full max-w-[960px] mx-auto justify-center">
                {children}
            </div>
        </section>
    )
}