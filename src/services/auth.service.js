export const loginService = async (data) => {
    try {
        const response = await fetch('fjaslfj');
        return response.json();
    } catch (error) {
        throw error;
    }
}