import { useState } from "react";

const PaymentPage = () => {
  // State for user data
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  // State for selected payment method
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle payment method change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", userData);
    console.log("Selected payment method:", paymentMethod);
  };

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl text-center font-bold mb-10">Payment</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* User data fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <input
            type="text"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="border  border-secondaryDark rounded-md  p-2 "
            required
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="border  border-secondaryDark rounded-md p-2 "
            required
          />
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="border  border-secondaryDark rounded-md p-2"
            required
          />
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleInputChange}
            placeholder="City"
            className="border  border-secondaryDark rounded-md p-2"
            required
          />
          <input
            type="text"
            name="zipCode"
            value={userData.zipCode}
            onChange={handleInputChange}
            placeholder="ZIP Code"
            className="border  border-secondaryDark rounded-md p-2"
            required
          />
          <input
            type="text"
            name="country"
            value={userData.country}
            onChange={handleInputChange}
            placeholder="Country"
            className="border border-secondaryDark rounded-md p-2"
            required
          />
        </div>

        {/* Payment method selection */}
        <div className="mt-8 ">
          <p className="mb-3 ml-4 ">Payment Method:</p>
          <select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="border border-secondaryDark  rounded-md p-3 px-5"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-tertiary text-primary py-3 px-10 rounded-md mt-6 hover:bg-secondary"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
