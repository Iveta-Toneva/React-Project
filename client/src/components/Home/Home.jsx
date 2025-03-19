export function Home() {
    return (
        <section className="py-8">
            <div className="container mx-auto text-center text-gray-800">

                <div className="lg:w-3/4 mx-auto mb-8 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                        Welcome to CartoonByD - The Home of Unique Caricatures!
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                        Looking for a fun and creative way to immortalize your favorite moments? At CartoonByD, we specialize in turning your photos into fun and vibrant caricatures! Whether you're celebrating a special occasion, gifting something unique, or simply looking to add a fun twist to your photo collection, we've got you covered.
                    </p>

                    <div className="space-y-6 mb-8">
                        <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
                        <div className="space-y-4 text-left max-w-2xl mx-auto">
                            <p className="text-lg">
                                <strong>Custom Designs:</strong> Each caricature is hand-drawn and tailored to your request.
                            </p>
                            <p className="text-lg">
                                <strong>Perfect for Any Occasion:</strong> Our caricatures make great gifts for all types of events.
                            </p>
                            <p className="text-lg">
                                <strong>Fast & Professional Service:</strong> Quick turnaround with high-quality results.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container mx-auto mt-12 px-4">
                <h2 className="text-2xl font-semibold text-center mb-8">Our Caricature Examples</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://i.etsystatic.com/26137426/r/il/bf12e3/3718793737/il_1588xN.3718793737_3z5q.jpg"

                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>

                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://i.etsystatic.com/26137426/r/il/dee2c1/3774809805/il_1588xN.3774809805_a4oa.jpg"

                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>

                    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://i.etsystatic.com/26137426/r/il/166ae5/3293980980/il_1588xN.3293980980_qfor.jpg"

                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}