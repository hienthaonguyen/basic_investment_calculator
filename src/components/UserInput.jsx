import React from 'react';

const UserInput = ({inputValues, handleInputChange}) => {
    // lift the state up to the App component
        // const [inputValues, setInputValues] = useState({
        //     initialInvestment: 10000,
        //     annualInvestment: 1200,
        //     expectedReturn: 6,
        //     duration: 10
        // });

        // // Destructuring the inputValues object
        // const { initialInvestment, annualInvestment, expectReturn, duration } = inputValues;

        // const handleInputChange = (e) => {
        //     setInputValues({
        //         ...inputValues,
        //         // Dynamically setting the key of the object
        //         [e.target.name]: e.target.value
        //     });
        //     onInputChange(e);
        // };

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input name="initialInvestment" type="number" required value={inputValues.initialInvestment} onChange={handleInputChange}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input name="annualInvestment" type="number" required value={inputValues.annualInvestment} onChange={handleInputChange}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expect Return</label>
                    <input name="expectedReturn" type="number" required value={inputValues.expectedReturn} onChange={handleInputChange}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input name="duration" type="number" required value={inputValues.duration} onChange={handleInputChange}/>
                </p>
            </div>
        </section>
    );
};

export default UserInput;