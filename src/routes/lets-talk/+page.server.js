
let SECRET_RECAPTCHA_KEY = "6Ld92wYqAAAAAM0ONRKJDGpqL4UUQkkoQr5QunZI";

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const recaptchaToken = data.get('recaptchaToken');

        // Verify reCAPTCHA token
        const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
        const response = await fetch(verificationURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${SECRET_RECAPTCHA_KEY}&response=${recaptchaToken}`
        });

        const result = await response.json();

        if (result.success) {
            // reCAPTCHA validation successful
            return { success: true, score: result.score };
        } else {
            // reCAPTCHA validation failed
            return { success: false, errors: result['error-codes'] };
        }
    }
};
