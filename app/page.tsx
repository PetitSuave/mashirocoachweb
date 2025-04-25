import React from "react";
import Image from "next/image";
import {socialLinks, metaData} from "./config";
import {OfferCard} from "./components/offer-card";
import ContactForm from "./components/contact-form";
import {LuMail, LuPhoneIncoming, LuReceiptEuro} from "react-icons/lu";
import {ScreenWideSection} from "./components/screen-wide-section";
import ReferenceCarousel from "./components/reference-carousel";


const offerCards = [{
    title: "Kafe s koučem",
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

const referenceCards = [{
    name: "Agi",
    title: "pomohlo mi to na vsechny problemy",
    text: <>"Tenhle koucink mi prisel hrozne uzitecny, rozhodne bych to vsem doporucila. Nevahejte a ozvete se Mashirovi. Sice je tohle jen testovaci text, ale i tam sem si jista, ze to vsem hrozne moc pomuze, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letras including versions of Lorem Ipsum."</>
}, {
    name: "Gaba",
    title: "nevedela jsem co cekat, ale bylo to skvely",
    text: <>"Sla jsem na to nekolikrat protoze mi to pomahalo delat veci, ktery jsem chtela delat. Urcite to muzu vsem doporucit, koucovani bylo skvela vec a urcite do toho pujdu znova za nejaou dobu s novym tematem. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing like Aldus PageMaker including versions of Lorem Ipsum."</>
}, {
    name: "Agi",
    title: "kdybych to znal uz driv, tak je muj zivot lepsi",
    text: <>"Tenhle koucink mi prisel hrozne uzitecny, rozhodne bych to vsem doporucila. Nevahejte a ozvete se Mashirovi. Sice je tohle jen testovaci text, ale i tam sem si jista, ze to vsem hrozne moc pomuze, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."</>
}, {
    name: "Gaba",
    title: "nevedela jsem co cekat, ale bylo to skvely",
    text: <>"Sla jsem na to nekolikrat protoze mi to pomahalo delat veci, ktery jsem chtela delat. Urcite to muzu vsem doporucit, koucovani bylo skvela vec a urcite do toho pujdu znova za nejaou dobu s novym tematem. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset."</>
}, {
    name: "Agi",
    title: "nevedela jsem co cekat, ale bylo to skvely",
    text: <>"Tenhle koucink mi prisel hrozne uzitecny, rozhodne bych to vsem doporucila. Nevahejte a ozvete se Mashirovi. Sice je tohle jen testovaci text, ale i tam sem si jista, ze to vsem hrozne moc pomuze, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently."</>
}, {
    name: "Gaba",
    title: "nevedela jsem co cekat, ale bylo to skvely",
    text: <>"Sla jsem na to nekolikrat protoze mi to pomahalo delat veci, ktery jsem chtela delat. Urcite to muzu vsem doporucit, koucovani bylo skvela vec a urcite do toho pujdu znova za nejaou dobu s novym tematem. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</>
}]


export default function Page() {
    return (
        <div className="relative min-h-screen">
            <ScreenWideSection>
                <section className="relative w-screen -ml-[calc(50vw-50%)] bg-teal-800">
                    <div className="flex flex-col w-full max-w-[960px] mx-auto justify-center">                        {/*     background={
               <Image
                    className="-z-10 object-bottom object-cover filter brightness-75"
                    src={"/photos/bg-heather-cut-01.jpeg"} alt={"Flowers"} fill
                />}*/}
                        <p className="text-3xl leading-tight font font-semibold mt-16 mb-16 mx-9 text-white">
                            Tohle je hrozně cool moto co tě namotivuje.
                            {
                                //TODO: odsud by to chtelo odkaz na stranku, ktera bude vysvetlovat proc raw individualni kouicng - nebo mozna odkaz na konkretni bloc post o tomhle?
                            }
                        </p>
                    </div>
                </section>
            </ScreenWideSection>
            <section className="relative">
                <div className="flex mt-12 mb-12 mx-auto flex-col-reverse md:flex-row ">
                    <div className="flex md:flex-row md:w-2/3 flex-col md:ml-9 mb-9">
                        <div className="prose prose-neutral dark:prose-invert">
                            <h1 className="mb-12 text-2xl font-medium tracking-tight">
                                K čemu to je? Co mi to přinese?
                                {
                                    //TODO: Bud tady nebo k fotce by se melo dat tlacitko zjistit vice a tam dat muj pribeh a certifikace.
                                }
                            </h1>
                            <p>
                                Děje se ti tohle?
                                Tady je k tomu moje řešení! A něco k tomu napíšu.
                            </p>
                            <p>
                                Koučink je skvělá věc pro .... blab balsnja asbdjasbda  bsadbasjdb asjbdak
                                blab balsnja asbdjasbda  bsadbasjdb asjbdak blab balsnja asbdjasbda
                                bsadbasjdb asjbdak blab balsnja asbdjasbda  bsadbasjdb asjbdak
                            </p>
                            <p>
                                Pojď to zkusit vyber si co ti sedí z produktů níže!
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/3 m-6">
                        <Image src="/photos/bluechair.webp" alt={metaData.name}
                               width={672} height={672}
                               className="ml-24 sm:max-w-96 mx-auto md:max-w-full"
                        />
                    </div>
                </div>
            </section>
            <ScreenWideSection background={<Image
                className="-z-10 object-center object-cover"
                src={"/photos/bg-forest-sharp-thin.jpg"} alt={"Calm Forest"} fill
            />}>
                <div className="flex flex-col md:flex-row py-16">
                    {offerCards.map(card => (
                        <div key={card.title} className="w-full md:w-1/3">
                            <OfferCard title={card.title} text={card.text} text2={card.text2} link={card.link}/>
                        </div>
                    ))}
                </div>
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
                               className="ml-24 sm:max-w-96 mx-auto md:max-w-full"
                        />
                    </div>
                </div>
            </section>
            <section className="relative w-screen -ml-[calc(50vw-50%)] bg-sky-200" id="contact">
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
                                    <LuMail className="mt-1 mr-3"/> stefa.kubin@gmail.com
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
            <ScreenWideSection background={<Image
                className="-z-10 object-center object-cover"
                src={"/photos/bg-temp_2.jpeg"} alt={"Calm Forest"} fill
            />}>
                <ReferenceCarousel referenceCards={referenceCards} />
                {/*<div className="flex flex-col md:flex-row py-16">*/}
                {/*    {referenceCards.map(card => (*/}
                {/*        <div key={card.name} className="w-full md:w-1/3">*/}
                {/*            <ReferenceCard title={card.title} name={card.name} text={card.text}/>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </ScreenWideSection>
        </div>
    );
}
