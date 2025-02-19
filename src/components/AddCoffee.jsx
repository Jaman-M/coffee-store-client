
const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, test, category, details, photo }
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form row */}
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Coffee Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full " />

                        </label>
                    </div>

                </div>
                {/* form row */}
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Supplier Name</span>
                            </div>
                            <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Test</span>
                            </div>
                            <input type="text" name="test" placeholder="Test" className="input input-bordered w-full " />

                        </label>
                    </div>

                </div>
                {/* form row category and details */}
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " />

                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full " />

                        </label>
                    </div>

                </div>
                {/* form row photo URL */}
                <div className="md:flex">
                    <div className="w-full">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Photo URL</span>
                            </div>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full " />

                        </label>
                    </div>
                </div>
                <input className="btn btn-block text-white bg-[#6F4E37] mt-4" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;