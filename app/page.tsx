import React from "react";
import Image from "next/image";
import {socialLinks, metaData} from "./config";
import {OfferCard} from "./components/offer-card";
import ContactForm from "./components/contact-form";
import {LuMail, LuPhoneIncoming, LuReceiptEuro} from "react-icons/lu";
import {ScreenWideSection} from "./components/screen-wide-section";

const cards = [{
    title: "Kafe s koučkou",
    text: <> Pojďme si nezávisle pokecat o&nbsp;tom, co ti koučink může přinést a&nbsp;jak nastavit naši spolupráci. </>,
    text2: <>On-line<br /> 30 minut <br /> Zdarma </>,
    link: "/work"
}, {
    title: "Koučink pro Život",
    text: <>Pro běžné i&nbsp;těžké životní situace, lifestylové změny, osobnostní či&nbsp;kariérní rozovoj nebo pomoc v&nbsp;rozhodování.</>,
    text2: <>Osobně i on-line<br/> 50/80 minut <br /> 600 - 1250 Kč </>,
    link: "/life"
}, {
    title: "Koučink pro Pohyb",
    text: <>Chcete s&nbsp;něčím začít nebo překonat stagnaci? Pomůžu s&nbsp;tréninkovým plánem, kreativitou i&nbsp;sebevědomím.</>,
    text2: <>Preferuji v&nbsp;tělocvičně <br/> 50/80 minut <br /> 850/1250 Kč </>,
    link: "/movement"
}
]

export default function Page() {
    return (
        <div className="relative min-h-screen">
            {
                //bg-purple-200 to section - tady ty barvicky zatim nebrat vazne, to jen chuc vdiet jak to vypada. musime vyresit na celou sirku stejne jak ma opredloha a navic tam bude obrazek}
            }
            <ScreenWideSection
                background={
                <Image
                    className="-z-10 object-bottom object-cover filter brightness-75"
                    src={"/photos/bg-heather-cut-01.jpeg"} alt={"Flowers"} fill
                />}>
                <p className="text-3xl leading-tight font font-semibold mt-16 mb-16 mx-9 text-white">
                    Společně vytvoříme cestu, která bude skutečně tvoje.
                    {
                        //TODO: odsud by to chtelo odkaz na stranku, ktera bude vysvetlovat proc raw individualni kouicng - nebo mozna odkaz na konkretni bloc post o tomhle?
                    }
                </p>
            </ScreenWideSection>
            <section className="relative">
                <div className="flex mt-12 mb-12 mx-auto flex-col-reverse md:flex-row ">
                    <div className="flex md:flex-row md:w-2/3 flex-col md:ml-9 mb-9">
                        <div className="prose prose-neutral dark:prose-invert">
                            <h1 className="mb-12 text-2xl font-medium tracking-tight">
                                Kdo jsem?
                                {
                                    //TODO: Bud tady nebo k fotce by se melo dat tlacitko zjistit vice a tam dat muj pribeh a certifikace.
                                }
                            </h1>
                            <p>
                                Absolvovala jsem výcvik "Integrativní kouč" akreditovaný MŠMT a získala praxi
                                aplikováním koučovacího přístupu do firemního i fitness prostředí.
                            </p>
                            <p>
                                Během své více než patnáctileté IT kariéry ve vedení lidí a jako osobní trenérka jsem v
                                koučinku našla přístup, který je v souladu s mými vnitřními hodnotami. Umožňuje mi
                                pomáhat lidem rozvíjejícím přísupem a respektovat jejich jedinečnost a kompetenci pro
                                sebe udělat to nejlepší.
                            </p>
                            <p>
                                Mojí nejoblíbenější oblastí je navrácení koučinku zpátky k pohybovým disciplínám.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/3 m-6">
                        <Image src="/photos/tmp_ProfilePicture.jpg" alt={metaData.name}
                               width={672} height={672}
                               className="rounded-full sm:max-w-96 mx-auto md:max-w-full"
                        />
                    </div>
                </div>
            </section>
            <ScreenWideSection background={<Image
                className="-z-10 object-center object-cover"
                src={"/photos/bg-forest-sharp-thin.jpg"} alt={"Calm Forest"} fill
            />}>
                <div className="flex flex-col md:flex-row py-16">
                    {cards.map(card => (
                        <div key={card.title} className="w-full md:w-1/3">
                            <OfferCard title={card.title} text={card.text} text2={card.text2} link={card.link}/>
                        </div>
                    ))}
                </div>
            </ScreenWideSection>
            <section className="relative w-screen -ml-[calc(50vw-50%)] bg-violet-100" id="contact">
                <div className="">
                    <div className="flex flex-col w-full max-w-[960px] mx-auto justify-center">
                        <div className=" mt-16 ml-6 md:ml-9 text-2xl font-medium tracking-tight">
                            Kontaktujte mě
                        </div>
                        <div className="flex mx-auto flex-col md:flex-row md:m-3 ml-6 mr-9 md:mr-0md:ml-6">
                            <div className="flex flex-col md:w-1/3 mt-3 md:m-6">
                                <p className="mb-6">
                                    Kontaktovat mě můžete pomocí <br/> e-mailu nebo kontaktního formuláře.
                                </p>
                                <p className="mb-6 flex">
                                    <LuMail className="mt-1 mr-3"/> katerina@urban.coach
                                </p>
                                <p className="mb-6 flex">
                                    <LuPhoneIncoming className="mr-3 size-10"/> Pokud se chcete spojit po telefonu,
                                    vyplňte
                                    také telefonní číslo, případně navrhovaný
                                    čas. Nebo preferenci komunikace pomocí SMS.
                                </p>
                                {/*<p className="mb-6 flex">*/}
                                {/*    <LuReceiptEuro className="mt-1 mr-3"/> Bankovni spojeni*/}
                                {/*</p>*/}
                            </div>
                            <div className="md:w-2/3 flex-col md:m-3 mb-6">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
