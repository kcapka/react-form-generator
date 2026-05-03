import Image from "next/image"



export const HomepageHero = () => {

    return (
        <section className="default-px text-offwhite default-py">
            <div className="max-w-[1200px] mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-semibold mb-8">React Form Generator</h1>
                <div className="flex items-center gap-8 justify-center">
                    <Image src={"/tailwind-logo.svg"} width="300" height="100" alt="Tailwind logo" className="h-full max-h-[100px]" />
                    <Image src={"/react-logo.svg"} width="100" height="100" className="h-full max-h-[100px]" alt="React logo" />
                    
                </div>
            </div>
        </section>
    )
}