const expect = require("chai").expect
const sinon = require("sinon")

const factoryWithConfiguration = require("../factory")

describe("a validation", () => {
    let validation, configuration

    context("using the default validation rules:", () => {
        beforeEach(() => {
            configuration = sinon.stub()
            configuration.returns([{
                type: "nonpositive",
            },{
                type: "nondivisible",
                options: {
                    divisor: 3,
                    error: "error.three",
                }
            },{
                type: "nondivisible",
                options: {
                    divisor: 5,
                    error: "error.five",
                }
            }])

            const newValidator = factoryWithConfiguration(configuration)
            const validator = newValidator("default")
        })

        it("will access the configuration to get the validation rules", () => {
            expect(configuration.callCount).to.equal(1)
            expect(configuration.calledWithExactly).to.be.ok
        })
        
        // More
    })
})
