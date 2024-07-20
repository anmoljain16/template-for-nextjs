export const usePasswordLogin = () => {
    const loginWithPassword = async (data) => {
        const response = await fetch('http://localhost:3000/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email, password: data.password, rememberMe: true }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed. Please try again.");
        }
    };

    return { loginWithPassword };
};
