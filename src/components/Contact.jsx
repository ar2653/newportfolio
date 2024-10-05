import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xkgnwbwl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmissionStatus('');
        }, 2000);
      } else {
        setSubmissionStatus('Something went wrong. Please try again.');
        setTimeout(() => {
          setSubmissionStatus('');
        }, 2000);
      }
    } catch (error) {
      setSubmissionStatus('Error: ' + error.message);
      setTimeout(() => {
        setSubmissionStatus('');
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="p-6">
        {/* Heading */}
        <section className="mb-10">
          <h2 className="text-4xl lg:text-4xl mb-6 font-thin underline decoration-indigo-500/30 lg:text-center">
            Contact
          </h2>
        </section>
        {/* Form  */}
        <div className="flex justify-center items-center bg-base-100">
          <form
            onSubmit={handleSubmit} // Handle submit with custom function
            className="w-full max-w-lg bg-base-100 p-8 rounded-lg shadow-lg"
          >
            <div className="form-control mb-4">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange} // Update state on input change
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control mb-6">
              <label className="label" htmlFor="message">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="textarea textarea-bordered w-full"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-control">
              <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submissionStatus && (
              <div className="toast toast-top toast-end">
                <div className="alert alert-success">
                  <span>{submissionStatus}</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
