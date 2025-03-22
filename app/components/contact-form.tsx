"use client"
import {useState} from "react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4b2cace2-383a-42be-9871-7f9142384649");
        formData.append("from_name", "Koučink Web")
        formData.append("subject", `Koučink dotaz od ${formData.get("name")}`)

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            setSubmitted(true)
        }
    }

    return (
        <>
            {!submitted ? (
                <form
                    className="flex flex-col space-y-4"
                    onSubmit={handleSubmit}>
                    <div className="flex md:space-x-4 flex-col md:flex-row">
                        <label
                            className="mr-2 font-bold md:w-2/12"
                            htmlFor="name">Jméno</label>
                        <input
                            className="pl-2 border-2 border-indigo-900 w-full md:w-10/12"
                            type="text" name="name" required/>
                    </div>
                    <div className="flex md:space-x-4 flex-col md:flex-row">
                        <label
                            className="mr-2 font-bold md:w-2/12"
                            htmlFor="email">E-mail</label>
                        <input
                            className="pl-2 border-2 border-indigo-900 w-full md:w-10/12"
                            type="email" name="email" required/>
                    </div>
                    <div className="flex md:space-x-4 flex-col md:flex-row">
                        <label
                            className="mr-2 font-bold md:w-2/12"
                            htmlFor="email">
                            Telefon
                            <span className="ml-2 font-light italic md:block md:ml-0">(volitelné)</span>
                        </label>
                        <input
                            className="pl-2 border-2 border-indigo-900 w-full md:w-10/12"
                            type="tel" name="tel"/>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label
                            className="font-bold"
                            htmlFor="message">Váš dotaz</label>
                        <textarea
                            className="p-2 border-2 border-indigo-900"
                            rows={6}
                            name="message" required/>
                    </div>
                    <button
                        className="rounded-none bg-black text-white p-2"
                        type="submit">Odeslat
                    </button>
                    <span className="ml-2 font-light italic md:block md:ml-0 ">Odesláním tohoto formuláře udělujete souhlas ke zpracování Vašich osobních údajů za účelem reakce na Váš dotaz. Svůj souhlas můžete kdykoli odvolat.</span>
                </form>
            ) : (
                <div className="flex flex-col justify-center items-center text-center">
                    <p className="w-full">Úspěšně odesláno!</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 w-full max-w-xs rounded-none bg-black text-white p-2 hover:bg-gray-600"
                    >
                        Nový dotaz
                    </button>
                </div>
            )}
        </>
    );
}