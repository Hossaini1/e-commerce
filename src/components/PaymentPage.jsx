import { useState} from 'react'





const PaymentPage = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      paymentMethod: "creditCard", // Default payment method
      paypalEmail: "",
      bankAccountNumber: "",
    });
  
    const [formErrors, setFormErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();


      // Validation of form fields
      const errors = {};
      if (!formData.firstName.trim()) {
        errors.firstName = "First name is required";
      }
      if (!formData.lastName.trim()) {
        errors.lastName = "Last name is required";
      }
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = "Email is invalid";
      }
      if (!formData.cardNumber.trim()) {
        errors.cardNumber = "Card number is required";
      }
      if (!formData.expirationDate.trim()) {
        errors.expirationDate = "Expiration date is required";
      }
      if (!formData.cvv.trim()) {
        errors.cvv = "CVV is required";
      }

      // Additional validations for various payment methods
      if (formData.paymentMethod === "paypal" && !formData.paypalEmail.trim()) {
        errors.paypalEmail = "PayPal email is required";
      }
      if (formData.paymentMethod === "bankTransfer" && !formData.bankAccountNumber.trim()) {
        errors.bankAccountNumber = "Bank account number is required";
      }
      setFormErrors(errors);
  
      // Submit logic - przekierowanie, wysłanie danych itp.
      // Tu możesz dodać logikę, która ma miejsce po zatwierdzeniu formularza
    };
  
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-center mb-8">Payment Details</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {/* remaining form fields */}
          <div className="mb-6">
            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>

          {/* Data specific to different payment methods */}
          {formData.paymentMethod === "paypal" && (
            <div className="mb-6">
              <label htmlFor="paypalEmail" className="block text-sm font-medium text-gray-700">
                PayPal Email
              </label>
              <input
                type="email"
                id="paypalEmail"
                name="paypalEmail"
                value={formData.paypalEmail}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.paypalEmail ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {formErrors.paypalEmail && (
                <p className="mt-1 text-xs text-red-500">{formErrors.paypalEmail}</p>
              )}
            </div>
          )}
          {formData.paymentMethod === "bankTransfer" && (
            <div className="mb-6">
              <label htmlFor="bankAccountNumber" className="block text-sm font-medium text-gray-700">
                Bank Account Number
              </label>
              <input
                type="text"
                id="bankAccountNumber"
                name="bankAccountNumber"
                value={formData.bankAccountNumber}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.bankAccountNumber ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {formErrors.bankAccountNumber && (
                <p className="mt-1 text-xs text-red-500">{formErrors.bankAccountNumber}</p>
              )}
            </div>
          )}
          {/*  "Submit" Button */}
          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="bg-tertiary text-primary px-4 py-2 rounded-md hover:bg-secondary focus:outline-none focus:bg-tertiary"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default PaymentPage;