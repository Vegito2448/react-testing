
export const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are required</p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value="Jesús Peña"
          />
        </div>
        <div>
          <label htmlFor="bio">
            Bio
            <br />
            <textarea id="bio" name="bio" />
          </label>
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select name="job-location" id="job-location">
            <option value="">Select a Country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="IN">India</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">
            I Agree to the terms and Conditions
            <input type="checkbox" id="terms" name="terms" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
